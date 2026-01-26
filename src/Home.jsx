import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const fullText = "HEY — I’M SAYALI";
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [cursorClick, setCursorClick] = useState(false);
  const [cursorOut, setCursorOut] = useState(false);

  // Typing effect
  useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal, .reveal-left, .reveal-scale")
    .forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);
 
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Cursor + oval animation timeline
  useEffect(() => {
    // cursor click + oval reveal
    const clickTimer = setTimeout(() => {
      setCursorClick(true);
      setClicked(true);
    }, 1600);

    // cursor exit
    const outTimer = setTimeout(() => {
      setCursorOut(true);
    }, 3100);

    return () => {
      clearTimeout(clickTimer);
      clearTimeout(outTimer);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full h-screen flex flex-col items-center justify-center -translate-y-12 relative">
        {/* Heading */}
        <h1
          className="text-[96px] font-light text-gray-900 text-center"
          style={{ fontFamily: "Sansation, sans-serif" }}
        >
          {text}
          <span className="animate-blink">|</span>
        </h1>

        {/* Oval */}
        <p
          className={`text-center mt-6 oval-box ${
            clicked ? "oval-active" : "oval-black"
          }`}
          style={{
            fontFamily: "Sansation, sans-serif",
            fontSize: "24px",
            width: "649px",
            height: "62px",
            borderRadius: "73px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {clicked && "I make the internet easier and prettier :)"}
        </p>

        {/* Cursor image */}
        <img
          src="/assets/cursor.png"
          alt="cursor"
          className={`cursor-img cursor-animate
            ${cursorClick ? "cursor-click" : ""}
            ${cursorOut ? "cursor-out" : ""}
          `}
        />

        {/* Down arrow */}
        <div
          className="mt-28 cursor-pointer"
          onClick={() =>
            document
              .getElementById("sections")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

{/* NEXT SECTION */}
<div

  id="sections"
  className="w-full min-h-screen flex items-center justify-center"
>
  <div className="triangle-grid">
    <div
      className="triangle clip-up pink left cursor-pointer"
      onClick={() =>
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
        })
      }
    >
      <span>About Me</span>
    </div>

    <div
      className="triangle clip-down blue center cursor-pointer"
      onClick={() =>
        document.getElementById("work")?.scrollIntoView({
          behavior: "smooth",
        })
      }
    >
      <span>My Work</span>
    </div>

    <div
      className="triangle clip-up peach right cursor-pointer"
      onClick={() =>
        document.getElementById("connect")?.scrollIntoView({
          behavior: "smooth",
        })
      }
    >
      <span>Connect</span>
    </div>
  </div>
</div>

<section id="about" className="about-section">
  {/* BACKGROUND BLOCKS (FULL WIDTH) */}
  <div className="about-bg bg-left"></div>
  <div className="about-bg bg-right"></div>
  <div className="about-bg bg-middle"></div>

  {/* CONTENT */}
  <div className="about-container">
    {/* Title */}
    <div className="about-pill reveal-left">About Me</div>


    {/* Text */}
    <div className="about-text-wrapper">
      <p className="about-text reveal">
        I’m an IT engineering student into UI/UX and frontend dev. I like keeping
        things clean, intuitive, and easy on the eyes. From design systems and
        layouts to tiny micro-interactions, I love turning Figma screens into
        smooth, responsive websites. For me, good design isn’t just about how it
        looks—it’s about how it feels to use. I am great at problem solving too
        thanks to my engineering background.
      </p>
    </div>

   <p className="about-subtext reveal" style={{ transitionDelay: "0.15s" }}>
      When I’m not designing or coding, I’m usually behind a camera or on a
      badminton court or in the mountains.
    </p>
  
  

    {/* Gallery */}
<div className="photo-stack reveal">
  <img src="/assets/photography/1.jpg" className="stack-img card-1" />
  <img src="/assets/photography/2.jpg" className="stack-img card-2" />
  <img src="/assets/photography/3.jpg" className="stack-img card-3" />
  <img src="/assets/photography/4.jpg" className="stack-img card-4" />
  <img src="/assets/photography/5.jpg" className="stack-img card-5" />
</div>

<p className="photo-caption reveal">
  A few frames from what I notice when I slow down.
  <p className="photo-caption reveal" style={{ transitionDelay: "0.15s" }}>Photography Account:<a href="https://www.instagram.com/shuttr.stories/" target="_blank" rel="noopener noreferrer"> @shuttr.stories</a></p>
</p>

  </div>
</section>


{/* MY WORK SECTION */}
<section id="work" className="work-section">
  <div className="work-container">

    {/* Title */}
    <div className="work-pill">My Work</div>

    {/* Grid */}
<div className="work-scroll">

  <a href="https://www.behance.net/gallery/238228779/Swiggy-Redesign" className="work-card work-medium">
    <div className="work-thumb">
      <img src="/assets/swiggy.jpg" alt="App Redesign" />
    </div>
    <h3>App Redesign</h3>
  </a>

  <a href="https://www.figma.com/design/ajfO81wZE7QpymT9ocVfNv/HOTEL-DASHBOARD?node-id=0-1&t=Z2AKrNlnzFfjnPqX-1" className="work-card work-medium">
    <div className="work-thumb">
      <img src="/assets/ATG.png" alt="Portfolio Website" />
    </div>
    <h3>Dashboard Design</h3>
  </a>

<Link to="/snapsearch" className="work-card work-medium">
  <div className="work-thumb">
    <img src="/assets/Snapsearch.jpg" alt="Image Sorting Website" />
  </div>
  <h3>Image Sorting Website</h3>
</Link>

  <Link to="/trendzy" className="work-card work-medium">
    <div className="work-thumb">
      <img src="/assets/Trendzyy.png" alt="Trendzy" />
    </div>
    <h3>E-Commerce Website UI</h3>
  </Link>


</div>
  </div>
</section>
{/* CONNECT SECTION */}

<section id="connect" className="connect-section">
  <div className="connect-container">

    {/* Title */}
    <div className="connect-pill">Connect</div>

    <div className="connect-content">
      
      {/* Left links */}
      <div className="connect-links">
        <a href="https://www.linkedin.com/in/sayali-pandav-b4166a273/" target="_blank">LinkedIn</a>
        <a href="https://drive.google.com/file/d/1JbfGTYRsTW30G2Bxx3iRnOItUdFwOuUE/view?usp=sharing" target="_blank">Resume</a>
        <a href="mailto:sayali.rpandav@gmail.com">Email</a>
      </div>

      {/* Right image */}
      <div className="connect-image">
        <img
          src="/assets/sayali.jpg"
          alt="Sayali"
        />
      </div>

    </div>
  </div>
</section>




    </>

    
  );
  
}



export default Home;
