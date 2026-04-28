import React from 'react'
import "./IconeSlider.css"
function IconeSlider() {
  const icons = ["💻 HTML", "🎨 CSS", "⚙️ JS", "🐙 Git"];
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
