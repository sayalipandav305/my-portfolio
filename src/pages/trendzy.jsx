import React, { useState, useEffect } from "react";

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
    useEffect(() => {
  const reveals = document.querySelectorAll(".reveal, .reveal-scale");
  reveals.forEach((el, i) => {
    setTimeout(() => el.classList.add("show"), i * 120);
  });
}, []);

  const [activeImage, setActiveImage] = useState(null);
useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") setActiveImage(null);
  };
  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, []);
useEffect(() => {
  const handleScroll = () => {
    document.querySelectorAll(".parallax-img").forEach((img, i) => {
      const rect = img.getBoundingClientRect();
      const speed = i % 2 === 0 ? 0.08 : 0.12;

      const offset = (window.innerHeight - rect.top) * speed;
      img.style.transform = `translateY(${offset}px)`;
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // always open from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="trendzy-page">
      {/* HERO */}
      <div className="trendzy-hero">
        <h1 className="trendzy-title">Trendzy</h1>
        <p className="trendzy-subtitle">
          A minimal e-commerce experience focused on clarity, flow, and everyday fashion.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="trendzy-description reveal">
        <p>
          <strong>Trendzy</strong> is a fashion e-commerce UI designed to feel calm,
          intuitive, and distraction-free. The goal was to simplify shopping by
          reducing visual noise while keeping key actions obvious and accessible.
        </p>

        <ul>
          <li>🛍️ Product browsing with featured & new arrivals</li>
          <li>🧾 Clean cart and checkout experience</li>
          <li>📦 Order tracking with clear status indicators</li>
          <li>🎨 Consistent typography & soft color palette</li>
          <li>⚡ Frontend focused on usability & layout clarity</li>
        </ul>
      </div>

      {/* SCREENS */}
 {/* SCREENS – STORY STYLE */}
{/* SCREENS – STORY STYLE */}
<div className="trendzy-sections">
 {screens.map((screen, index) => (
  <section
    key={index}
    className={`trendzy-section ${index % 2 === 0 ? "light" : "dark"}`}
  >
    <div
      className={`trendzy-row ${
        index % 2 === 0 ? "row-normal" : "row-reverse"
      } reveal`}
    >
      {/* IMAGE */}
      <div
        className="trendzy-section-image parallax-img"
        onClick={() => setActiveImage(screen)}
      >
        <img src={screen.src} alt={screen.title} />
      </div>

      {/* TEXT */}
      <div className="trendzy-section-text">
        <h3>{screen.title}</h3>
        <p>{screen.desc}</p>
      </div>
    </div>
  </section>
))}

</div>

{activeImage && (
  <div
    className="trendzy-lightbox"
    onClick={() => setActiveImage(null)}
  >
    <div
      className="trendzy-lightbox-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="trendzy-close"
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

export default Trendzy;
