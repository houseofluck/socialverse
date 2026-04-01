import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

// Optional: Webhook URL for instant lead notifications
// Supports Telegram Bot API, Slack Incoming Webhooks, Discord Webhooks, or any POST endpoint
const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface Lead {
  id: string;
  name: string;
  business: string;
  service: string;
  budget: string;
  message: string;
  source: string;
  timestamp: string;
  ip: string | null;
}

async function ensureDataDir() {
  const dir = path.dirname(LEADS_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function readLeads(): Promise<Lead[]> {
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeLeads(leads: Lead[]) {
  await ensureDataDir();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// Send notification to Telegram / Slack / Discord / custom webhook
async function notifyLead(lead: Lead) {
  const text = [
    `🔔 *New Lead*`,
    ``,
    `*Name:* ${lead.name}`,
    lead.business ? `*Business:* ${lead.business}` : null,
    lead.service ? `*Service:* ${lead.service}` : null,
    lead.budget ? `*Budget:* ${lead.budget}` : null,
    lead.message ? `*Message:* ${lead.message}` : null,
    ``,
    `*Source:* ${lead.source}`,
    `*Time:* ${new Date(lead.timestamp).toLocaleString("en-IN")}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    // Telegram Bot API
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: "Markdown",
          }),
        }
      );
    }

    // Generic webhook (Slack, Discord, or custom)
    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Slack format
          text,
          // Also send raw lead data for custom webhooks
          lead,
        }),
      });
    }
  } catch (err) {
    // Don't fail the lead capture if notification fails
    console.error("Webhook notification error:", err);
  }
}

// POST /api/lead - save a new lead
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, business, service, budget, message, source } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      business: (business || "").trim(),
      service: (service || "").trim(),
      budget: (budget || "").trim(),
      message: (message || "").trim(),
      source: (source || "contact_form").trim(),
      timestamp: new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip"),
    };

    const leads = await readLeads();
    leads.push(lead);
    await writeLeads(leads);

    // Fire-and-forget notification (don't await to avoid blocking response)
    notifyLead(lead).catch(() => {});

    return NextResponse.json(
      { success: true, id: lead.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET /api/lead - list all leads (protect this in production!)
export async function GET() {
  try {
    const leads = await readLeads();
    return NextResponse.json({ leads, total: leads.length });
  } catch (error) {
    console.error("Lead fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
