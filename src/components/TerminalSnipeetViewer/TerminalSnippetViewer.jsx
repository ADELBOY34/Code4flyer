import React, { useState } from "react";
import { Copy, ClipboardCheck } from "lucide-react";
import "./TerminalSnippetViewer.css";

function TerminalSnippetViewer({ command }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal">
      
      {/* HEADER */}
      <div className="terminal-navbar">
        <ul>
          <li>PROBLEMS</li>
          <li>OUTPUT</li>
          <li>DEBUG CONSOLE</li>
          <li className="active-tab">TERMINAL</li>
          <li>PORTS</li>

          {/* COPY à droite */}
          <li className="copy_button" onClick={handleCopy}>
            {copied ? (
              <>
                <ClipboardCheck size={16} /> COPIED
              </>
            ) : (
              <>
                <Copy size={16} /> Copy
              </>
            )}
          </li>
        </ul>
      </div>

      {/* BODY TERMINAL */}
      <div className="terminal-body">
        <span className="prompt">$</span> {command}
      </div>

    </div>
  );
}

export default TerminalSnippetViewer;