import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const screenshots = [
  {
    src: "/assets/snapsearch/landing-page.png",
    title: "Landing Page",
    desc: "Clean entry point introducing SnapSearch AI with sign up and login actions.",
  },
  {
    src: "/assets/snapsearch/signup.png",
    title: "Sign Up Flow",
    desc: "User onboarding with email, username and profile image upload.",
  },
  {
    src: "/assets/snapsearch/login.png",
    title: "Login Screen",
    desc: "Simple and distraction-free login experience.",
  },
  {
    src: "/assets/snapsearch/home.png",
    title: "User Dashboard",
    desc: "Personalized homepage showing albums and quick actions.",
  },
  {
    src: "/assets/snapsearch/create-album.png",
    title: "Create Album",
    desc: "Create albums and upload multiple images in one go.",
  },
  {
    src: "/assets/snapsearch/join-album.png",
    title: "Join Album",
    desc: "Join shared albums using a unique album code.",
  },
];

function SnapSearch() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(null);
  const scrollRef = useRef(null);

  // 🔥 FIXED scroll for scaled layout
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -1440,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 1440,
      behavior: "smooth",
    });
  };

  return (
    <div className="page-wrapper">
      <section className="page project-page">

        <div className="project-container">

          {/* BACK */}
          <button className="back-btn" onClick={() => navigate("/work")}>
            ← Back
          </button>

          {/* TITLE */}
          <h1 className="project-title">
            SnapSearch AI – Smart Photo Management
          </h1>

          <p className="project-desc">
            An AI-powered photo management system designed to simplify how users
            organize, search, and share images using facial recognition and smart albums.
          </p>

          {/* FEATURES */}
          <div className="project-features">
            <ul>
              <li>🔐 Secure authentication</li>
              <li>🧠 AI-powered face recognition</li>
              <li>📁 Album creation & uploads</li>
              <li>🔗 Shared albums via code</li>
              <li>✨ Clean & minimal UI</li>
            </ul>
          </div>

          {/* SCROLL */}
          <div className="scroll-wrapper">

            <button className="scroll-btn left" onClick={scrollLeft}>
              ←
            </button>

            <div className="horizontal-scroll" ref={scrollRef}>
              {screenshots.map((shot, index) => (
                <div
                  className="scroll-card"
                  key={index}
                  onClick={() => setActiveImage(shot)}
                >
                  <img src={shot.src} alt={shot.title} />

                  <div className="scroll-info">
                    <h3>{shot.title}</h3>
                    <p>{shot.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="scroll-btn right" onClick={scrollRight}>
              →
            </button>

          </div>

        </div>

        {/* LIGHTBOX */}
        {activeImage && (
          <div className="lightbox" onClick={() => setActiveImage(null)}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setActiveImage(null)}>✕</button>
              <img src={activeImage.src} alt={activeImage.title} />
              <h3>{activeImage.title}</h3>
              <p>{activeImage.desc}</p>
            </div>
          </div>
        )}

      </section>
    </div>
  );
}

export default SnapSearch;