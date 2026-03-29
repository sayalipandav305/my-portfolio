import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const screens = [
  {
    src: "/assets/hp.png",
    title: "Landing Page",
    desc: "Strong hero section with buyer/vendor entry points and clear branding.",
  },
  {
    src: "/assets/athena/join.png",
    title: "Role Selection",
    desc: "User onboarding choice between buyer and vendor roles.",
  },
  {
    src: "/assets/athena/signup.png",
    title: "Sign Up Flow",
    desc: "Comprehensive onboarding with business and location details.",
  },
  {
    src: "/assets/athena/vendor-plan.png",
    title: "Choose Plan",
    desc: "Pricing plans with clear features and upgrade flow.",
  },
  {
    src: "/assets/athena/subscription.png",
    title: "Subscription Required",
    desc: "Access control screen prompting users to choose a plan.",
  },
  {
    src: "/assets/athena/explore.png",
    title: "Explore Machines",
    desc: "Category-based browsing experience for industrial machines.",
  },
  {
    src: "/assets/athena/add-product.png",
    title: "Add Product",
    desc: "Detailed product creation form with specs and media upload.",
  },
  {
    src: "/assets/athena/product.png",
    title: "Product Details",
    desc: "Complete product view with seller info and contact options.",
  },
  {
    src: "/assets/athena/vendor-dashboard.png",
    title: "Vendor Dashboard",
    desc: "Manage products, subscription, and business info in one place.",
  },
  {
    src: "/assets/athena/plans.png",
    title: "Vendor Plans",
    desc: "Tiered pricing system for vendors with scalability options.",
  },
];

function Athena() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(null);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="page-wrapper">
      <section className="page project-page dark">
        <div className="project-container">

          {/* BACK */}
          <button className="back-btn" onClick={() => navigate("/work")}>
            ← Back
          </button>

          {/* TITLE */}
          <h1 className="project-title">
            Athena Automation – Industrial Marketplace
          </h1>

          <p className="project-desc">
            A full-stack B2B marketplace designed to connect buyers and vendors of
            industrial machinery. The platform enables seamless product listing,
            discovery, and communication with a strong focus on usability and scalability.
          </p>

          {/* FEATURES */}
          <div className="project-features">
            <ul>
              <li>🏭 Industrial machine marketplace</li>
              <li>🛒 Buyer & Vendor roles</li>
              <li>📦 Product listing & management</li>
              <li>💳 Subscription-based access</li>
              <li>📊 Vendor dashboard & analytics</li>
            </ul>
          </div>

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

export default Athena;