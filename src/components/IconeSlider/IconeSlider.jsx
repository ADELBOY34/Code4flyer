import React from 'react'
import "./IconeSlider.css"
import { BsJavascript } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
function IconeSlider() {
  const icons = [<BsJavascript id='js' />,<FaCss3Alt id='css'/>,  , <FaReact  id='react'/>, <FaHtml5 id='html' />,<FaNpm id='npm'/>,<DiMongodb id='mongo'/>,<FaGitAlt  id='git'/>];
  return (
     <>
     <div className="slider">
      <div className="slide-track">
        {[...icons, ...icons].map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
    </div>
     </>
  )
}

export default IconeSlider
