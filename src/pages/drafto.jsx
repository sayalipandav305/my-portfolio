import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const screens = [
  {
    src: "/assets/started.png",
    title: "Landing Page",
    desc: "Minimal entry screen introducing Drafto with a clean call-to-action.",
  },
  {
    src: "/assets/google.png",
    title: "Login Flow",
    desc: "Simple authentication using Google for quick and secure access.",
  },
  {
    src: "/assets/db.png",
    title: "Dashboard (Empty State)",
    desc: "Encourages users to start writing with a clear and friendly UI.",
  },
  {
    src: "/assets/db1.png",
    title: "Draft Created",
    desc: "Displays user drafts with status indicators and quick actions.",
  },
  {
    src: "/assets/blog.png",
    title: "My Blogs",
    desc: "Central place to view all published stories.",
  },
  {
    src: "/assets/blogs.png",
    title: "Blogs Empty State",
    desc: "Guides users to publish drafts with a clear next step.",
  },
  {
    src: "/assets/draft.png",
    title: "Drafts",
    desc: "User writes his drafts in this part.",
  }
];

function Drafto() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(null);
  const scrollRef = useRef(null);

  // 🔥 FIXED scroll (important for scaled layout)
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
            Drafto – Content Management System
          </h1>

          <p className="project-desc">
            A modern full-stack content management system designed for seamless
            writing, draft workflows, and publishing. The focus is on simplicity,
            clarity, and an intuitive user experience for content creators.
          </p>

          {/* SCROLL */}
          <div className="scroll-wrapper">

            <button className="scroll-btn left" onClick={scrollLeft}>
              ←
            </button>

            <div className="horizontal-scroll" ref={scrollRef}>
              {screens.map((screen, index) => (
                <div
                  className="scroll-card"
                  key={index}
                  onClick={() => setActiveImage(screen)}
                >
                  <img src={screen.src} alt={screen.title} />

                  <div className="scroll-info">
                    <h3>{screen.title}</h3>
                    <p>{screen.desc}</p>
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

export default Drafto;