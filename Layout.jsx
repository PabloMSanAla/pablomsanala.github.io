import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils/index.js";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900">
      <style>
        {`
          :root {
            --bg-primary: #0a0a0a;
            --bg-secondary: #1a1a1a; 
            --bg-accent: #2a2a2a;
            --text-primary: #ffffff;
            --text-secondary: #a0a0a0;
            --accent-blue: #00d4ff;
            --accent-purple: #8b5cf6;
            --accent-green: #10b981;
          }
          
          body {
            background: var(--bg-primary);
            color: var(--text-primary);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          }
          
          ::selection {
            background: var(--accent-blue);
            color: var(--bg-primary);
          }
          
          .glow-effect {
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
          }
        `}
      </style>
      {children}
    </div>
  );
}