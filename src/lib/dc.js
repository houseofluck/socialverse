import { useEffect, useRef, useReducer } from 'react';
import { phoneEnhance } from './phone.js';
// Minimal port of the DC logic-class runtime: the page classes run unchanged.
export class DCLogic {}
export function useDC(Cls) {
  const [, bump] = useReducer(n => n + 1, 0);
  const ref = useRef(null);
  if (!ref.current) {
    const inst = new Cls();
    inst.props = inst.props || {};
    inst.setState = up => { const patch = typeof up === 'function' ? up(inst.state || {}) : up; inst.state = Object.assign({}, inst.state, patch); inst.__bump && inst.__bump(); };
    inst.forceUpdate = () => inst.__bump && inst.__bump();
    ref.current = inst;
  }
  ref.current.__bump = bump;
  const mounted = useRef(false);
  useEffect(() => { const i = ref.current; i.componentDidMount && i.componentDidMount(); const undoPhone = phoneEnhance(); return () => { undoPhone(); i.componentWillUnmount && i.componentWillUnmount(); }; }, []);
  useEffect(() => { if (mounted.current) { ref.current.componentDidUpdate && ref.current.componentDidUpdate(); } else mounted.current = true; });
  return ref.current.renderVals();
}
