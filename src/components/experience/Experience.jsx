import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <p>Continuously improving: Continuous improvement is essential for a software engineer to stay relevant and competitive. It's important to continuously learn, experiment, and adapt to new technologies, processes,
           and methodologies to stay ahead of the curve and provide the best solutions to clients.
        </p>
    
      <div className="container experience__container">

        <ListExperiences />
      </div>
    </section>
  );
};
export default Experience;
