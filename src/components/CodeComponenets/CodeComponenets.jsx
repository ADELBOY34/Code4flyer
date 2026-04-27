import React from "react";
import { Copy, Download, ClipboardCheck } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import "./CodeComponenets.css";
function CodeComponenets({ code }) {
  /* Fonction qui copie le contenu du code dans le presse-papiers
   et affiche un message "COPIED" pendant 3 secondes avant de revenir à l'état initial */
  const [copied, setCopied] = useState(false);
  const handelCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true); // afficher COPIED
    setTimeout(() => {
      setCopied(false); // revenir à COPY après 3s
    }, 3000);
  };

  // Fonction qui permet de télécharger le contenu du code sous forme de fichier
  const handleDownload = () => {
    const blob = new Blob([code], { type: "code/plain" }); // Crée un fichier virtuel (Blob) contenant le codee à télécharger
    const url = URL.createObjectURL(blob); // Génère une URL temporaire qui pointe vers le Blob
    const link = document.createElement("a"); // Crée un élément <a> (lien) dynamiquement dans le DOM
    link.href = url; // Associe l'URL du fichier au lien
    link.download = "code.txt"; // Définit le nom du fichier téléchargé
    document.body.appendChild(link); // Ajoute le lien dans le DOM pour pouvoir l'utiliser
    link.click(); // Simule un clic sur le lien pour déclencher le téléchargement

    document.body.removeChild(link); // Supprime le lien du DOM après utilisation (nettoyage)
    URL.revokeObjectURL(url); // Libère la mémoire en supprimant l'URL temporaire créée
  };
  return (
    <>
      <div className="Code-box">
        <div className="code-navbar">
          <ul>
            <li className="circle" id="circle1"></li>
            <li className="circle" id="circle2"></li>
            <li className="circle" id="circle3"></li>
            {/* ____boutton copier___ */}

            <li onClick={handelCopy} className="last">
              {copied ? (
                <>
                  {" "}
                  <ClipboardCheck /> COPIED
                </>
              ) : (
                <>
                  <Copy /> Copy
                </>
              )}
            </li>
            {/* ____boutton download___ */}
            <li onClick={handleDownload}>
              <Download /> DOWNLOAD
            </li>
          </ul>

          <SyntaxHighlighter
            language="javascript"
            style={monokai}
            className="code-body"
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default CodeComponenets;
