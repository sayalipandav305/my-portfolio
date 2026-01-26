import React, { useState } from "react";

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
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="snapsearch-page">
      {/* HERO */}
      <div className="snapsearch-hero">
        <h1 className="snapsearch-title">SnapSearch AI</h1>

        <p className="subtitle">
          Discover, organize, and search your photos using AI-powered face
          recognition and smart album management.
        </p>
      </div>

      {/* DESCRIPTION */}
      <div className="snapsearch-description">
        <p>
          SnapSearch AI is a smart photo management system that helps users
          organize images into albums, search photos using facial recognition,
          and collaborate through shared albums. The focus was on building a
          clean, intuitive UI while keeping the flow simple for non-technical
          users.
        </p>

        <ul>
          <li>🔐 Secure authentication (Sign up / Login)</li>
          <li>🧠 AI-powered face recognition</li>
          <li>📁 Album creation & image uploads</li>
          <li>🔗 Join shared albums via code</li>
          <li>✨ Minimal, distraction-free UI</li>
        </ul>
      </div>

      {/* SCREENSHOTS */}
      <div className="snapsearch-gallery">
        {screenshots.map((shot, index) => (
          <div
            key={index}
            className="snapsearch-card"
            onClick={() => setActiveImage(shot)}
          >
            <img src={shot.src} alt={shot.title} />
            <div className="snapsearch-card-text">
              <h3>{shot.title}</h3>
              <p>{shot.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX PREVIEW */}
      {activeImage && (
        <div
          className="snapsearch-lightbox"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="snapsearch-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="snapsearch-close"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>
            <img src={activeImage.src} alt={activeImage.title} />
            <h3>{activeImage.title}</h3>
            <p>{activeImage.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default SnapSearch;
