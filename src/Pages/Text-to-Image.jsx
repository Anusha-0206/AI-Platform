import { useState, useEffect } from "react";
import "./Text-to-Image.css";

function TextImage() {
  const [selectedStyle, setSelectedStyle] = useState("Ghibli");
  const [fade, setFade] = useState(true);

  const ideas = [
    "A giant moon rising behind snowy mountains",
    "A futuristic city glowing at night",
    "A dragon flying over a castle",
    "A peaceful forest with glowing lights",
    "A cyberpunk street in neon rain",
  ];

  const [currentIdea, setCurrentIdea] = useState(ideas[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIdea((prev) => {
          const index = ideas.indexOf(prev);
          return ideas[(index + 1) % ideas.length];
        });
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const styles = [
    "3D",
    "Digital Art",
    "Anime",
    "Pixel",
    "Ghibli",
    "Synthwave",
    "None",
  ];

  return (
    <div className="main pt-20">
      {/* 🔥 CONTENT */}
      <div className="app">
        <div className="card">
          <h2>Prompt</h2>

          <textarea placeholder="Enter your prompt..." />

          <div className="styles">
            {styles.map((style) => (
              <button
                key={style}
                className={selectedStyle === style ? "active" : ""}
                onClick={() => setSelectedStyle(style)}
              >
                {style}
              </button>
            ))}
          </div>

          <h4>Explore Ideas</h4>

          <p className={`idea ${fade ? "fade-in" : "fade-out"}`}>
            {currentIdea}
          </p>

          <button className="generate">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default TextImage;
