import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const screens = [
  {
    src: "/assets/trendzy/home.png",
    title: "Home Page",
    desc: "Hero banner, featured products and new arrivals with a clean editorial layout.",
  },
  {
    src: "/assets/trendzy/cart.png",
    title: "Cart",
    desc: "Clear cart layout with item preview, pricing, and quick remove actions.",
  },
  {
    src: "/assets/trendzy/categories.png",
    title: "Categories",
    desc: "Minimal category cards to help users browse faster without overload.",
  },
  {
    src: "/assets/trendzy/checkout.png",
    title: "Checkout",
    desc: "Two-column checkout flow with billing details and order summary.",
  },
  {
    src: "/assets/trendzy/orderconfirmed.png",
    title: "Order Confirmation",
    desc: "Soft success state with clear next action and reassurance.",
  },
  {
    src: "/assets/trendzy/orders.png",
    title: "My Orders",
    desc: "Order history with delivery status colors for instant clarity.",
  },
];

function Trendzy() {
  const [activeImage, setActiveImage] = useState(null);
  const navigate = useNavigate();
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

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Trendzy – E-commerce Experience
          </h1>

          <p className="project-desc">
            A minimal fashion e-commerce UI focused on clarity, smooth user flow,
            and a distraction-free shopping experience.
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

export default Trendzy;