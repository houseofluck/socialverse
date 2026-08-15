import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/global.css';
import '../styles/hover.css';
import Page from '../pages/BlogGrid.jsx';

createRoot(document.getElementById('root')).render(<Page />);
