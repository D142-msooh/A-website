export default function ProjectCard({ title, category, image }) {
  return (
    <div className="project-card fade-in">
      <img src={image} alt={title} />
      <div className="overlay">
        <h3>{title}</h3>
        <span>{category}</span>
      </div>
    </div>
  );
}