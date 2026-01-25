// Skills.jsx
import { useState } from "react";
import "./Skill.css";
import { skills } from "./SkillData";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p className="skill-desc">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
