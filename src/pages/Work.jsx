import { useNavigate } from "react-router-dom";

export default function Work() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      img: "/assets/swiggy.jpg",
      link: "https://www.behance.net/gallery/238228779/Swiggy-Redesign",
      title: "Swiggy Redesign",
      subtitle: "A redesign of the Swiggy app, focusing on improving the user experience and visual appeal."
    },
    {
      id: 2,
      img: "/assets/lasicilia.png",
      link: "https://www.behance.net/gallery/246581403/Smart-Menu-UI-Redesign",
      title: "Smart Menu UI Redesign",
      subtitle: "A redesign of the Smart Menu UI, enhancing usability and aesthetics."
    },
    {
      id: 3,
      img: "/assets/ATG.png",
      link: "/ATG",
      title: "Dashboard Design",
      subtitle: "A dashboard design project, showcasing data visualization and UI skills."
    },
    {
      id: 4,
      img: "/assets/Snapsearch.jpg",
      link: "/snapsearch",
      title: "SnapSearch AI",
      subtitle: "Frontend design for a photo album management website."
    },
    {
      id: 5,
      img: "/assets/Trendzyy.png",
      link: "/trendzy",
      title: "Trendzyy",
      subtitle: "Design for a shopping website."
    },
    {
      id: 6,
      img: "/assets/drafto.png",
      link: "/drafto",
      title: "Drafto",
      subtitle: "Content management system design."
    },
    {
      id: 7,
      img: "/assets/hp.png",
      link: "/Athena",
      title: "Athena",
      subtitle: "Industrial marketplace UI/UX."
    }
  ];

  const handleClick = (link) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank"); // external
    } else {
      navigate(link); // internal
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page work-page">

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>

        <h1 className="work-title">MY WORK</h1>
        <button
  className="resume-btn"
  onClick={() => window.open( "https://drive.google.com/drive/folders/1oJ8KKXHvUWVLFDDsJnk6YLGTI1bodQsb?usp=drive_link")}
>
  View Resume
</button>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => handleClick(project.link)}
            >
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>

              <div className="project-footer">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}