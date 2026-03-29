import { useEffect } from "react";

export default function Home() {

  // 🔥 Scroll actions
  const handleYes = () => {
    document.getElementById("connect")?.scrollIntoView({
      behavior: "smooth"
    });
  };

const handleNo = () => {
  const section = document.getElementById("about");

  if (section) {
    const yOffset = -80; // adjust based on your layout
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
const handleMyWork = (e) => {
  e.preventDefault();

  document.body.style.opacity = "0";   // fade out

  setTimeout(() => {
    window.location.href = "/work";
  }, 300); // match animation time
};
  // ✨ Scroll reveal
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => {
      section.classList.add("hidden");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-box">

          <h1 className="hero-text">
  <span className="mono">BUILDING</span>{" "}
  <span className="aldrich">things</span><br />
  <span className="aldrich">that</span>{" "}
  <span className="mono">MATTER.</span>
</h1>

         <div className="question-box">
  
  <div className="line"></div>

  <div className="question-text">
    <p>DO YOU</p>
    <p className="bold">KNOW</p>
    <p>ME?</p>
  </div>

  <div className="buttons">
    <button className="yes-btn" onClick={handleYes}>YES</button>

    <button className="no-btn" onClick={handleNo}>NO</button>
  </div>

</div>

          <a href="#" className="my-work" onClick={handleMyWork}>
            My Work
          </a>

          {/* Vertical Name */}


        </div>
              <div className="name-wrapper">
  <div className="name-horizontal">SAYALI</div>
  <div className="name-vertical">PANDAV</div>
</div>
      </section>


      {/* ABOUT */}
    <section id="about" className="about">

  <h2 className="about-title">ABOUT ME</h2>

  <div className="about-content">

    <div className="about-left">
    <p>
  I’m an IT engineering student who turns <span className="highlight">ideas into experiences</span>.

  I enjoy designing <span className="highlight">interfaces that look good</span>, feel smooth, and actually make sense.

  I love mixing <span className="highlight">creativity with code</span> — whether it's building UI, adding micro-interactions, or developing full-stack projects.
</p>

      <p>
        Currently leveling up in UI/UX and frontend development, and always <span className="highlight">open to creating something cool</span>.
      </p>
    </div>

<div className="about-right">
  <p>Hi, I’m Sayali!</p>

  <div className="photo-box">
    <img src="/assets/sayali.jpg" className="about-photo" />
  </div>
</div>

  </div>

  {/* SKILLS FLOATING BOX */}
<div className="skills-box">
  <h3>SKILLS</h3>

  <div className="skills-grid">
    <img src="/assets/logos/figma.png" />
    <img src="/assets/logos/html.png" />
    <img src="/assets/logos/react.png" />
    <img src="/assets/logos/mysql.png" />
    <img src="/assets/logos/mongodb.png" />
    <img src="/assets/logos/ps.png" />

    <img src="/assets/logos/css.png" />
    <img src="/assets/logos/js.png" />
    <img src="/assets/logos/nodejs.png" />
    <img src="/assets/logos/postgre.png" />
    <img src="/assets/logos/cpp.png" />
    <img src="/assets/logos/davinci.png" />
  </div>
</div>

</section>
    


      {/* GALLERY */}
  <section className="gallery">

 <p className="gallery-title">
  Check out{" "}
  <a 
    href="https://instagram.com/shuttr.stories" 
    target="_blank" 
    rel="noopener noreferrer"
    className="insta-link"
  >
    @shuttr.stories
    <span className="insta-icon">📸</span>
  </a>
</p>

  <div className="gallery-content">

    {/* LEFT GRID */}
    <div className="gallery-grid">
      <div className="box box1"><img src="/assets/photography/1.jpg" /></div>
      <div className="box box2"><img src="/assets/photography/2.jpg" /></div>
      <div className="box box3"><img src="/assets/photography/3.jpg" /></div>
      <div className="box box4"><img src="/assets/photography/4.jpg" /></div>
      <div className="box box5"><img src="/assets/photography/5.jpg" /></div>
   
    </div>

    {/* RIGHT TEXT */}
    <div className="gallery-text">
      <p>
        Beyond coding, I enjoy exploring creative outlets like 
        <span className="highlight"> designing</span>, 
        <span className="highlight"> editing aesthetic reels</span>, 
        and capturing moments through visuals.  
        I also love discovering new ideas, trends, and experiences that 
        <span className="highlight"> inspire my work and creativity</span>.
      </p>

      <p>
        Outside of this, I enjoy 
        <span className="highlight"> trekking</span>, 
        playing badminton, and 
        <span className="highlight"> photography</span> — 
        experiences that keep me refreshed and continuously fuel my creativity.
      </p>
    </div>

  </div>

</section>



      {/* CONNECT */}
      <section id="connect" className="connect">
        <h2>CONNECT</h2>

        <div className="icons">
          <div
            className="icon linkedin"
            onClick={() => window.open("https://www.linkedin.com/in/sayali-pandav-b4166a273", "_blank")}
          >
            in
          </div>

        <div
  className="icon gmail"
  onClick={() =>
    window.location.href =
      "mailto:sayali.rpandav@gmail.com?subject=Let's Connect&body=Hi Sayali,"
  }
>
  G
</div>

          <div
            className="icon behance"
            onClick={() => window.open("https://www.behance.net/sayalipandav", "_blank")}
          >
            Be
          </div>
        </div>
      </section>

    </div>
  );
}