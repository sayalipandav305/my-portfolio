import React from "react";
import { useNavigate } from "react-router-dom";

export default function ATG() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <div className="page project-page">
        
        <div className="project-container">
          
          <button className="back-btn" onClick={() => navigate("/work")}>
            ← Back
          </button>

          <h1 className="project-title">HOTEL DASHBOARD DESIGN</h1>

          <p className="project-desc">
            A modern hotel booking dashboard focused on usability, clarity, and seamless user experience.
          </p>

          <div className="project-images">
            <img src="/assets/ATG/DASHBOARD.png" alt="Dashboard" />
            <img src="/assets/ATG/reasoning.png" alt="Reasoning" />
          </div>

        </div>

      </div>
    </div>
  );
}