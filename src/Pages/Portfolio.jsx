import { useState } from "react";
import projects from "../data";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <section style={{ background: "var(--bg-section)" }}>
    <section className="page fade-up">
      <h2>Portfolio</h2>
      <p>
        Below are just but a sample of different designs i have created.
        <br />Feel free to reach out if you would like to see more of my work
        or discuss a potential project.
      </p>

      <div className="filters">
        {["All", "Branding", "UI", "Print", "Digital"].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
    </section>
  );
}