import profileImage from "../assets/images/irene-photo.jpg";

export default function Info() {
  return (
    <div className="info-page">
      <section className="about-intro">
        <div className="about-image-left">
          <img src={profileImage} alt="Irene" className="profile-photo" />
        </div>
        
        <div className="about-content">
          <h1>About Me</h1>
          <p className="lead">
            I'm Irene, a passionate graphic designer with over 5 years of experience
            in creating visual narratives that inspire and engage.
          </p>
          <p>
            My journey in design started with a fascination for how colors, shapes, and
            typography can evoke emotions and tell stories. Today, I work with clients
            worldwide to bring their visions to life through thoughtful, impactful design.
          </p>
          <p>
            I believe great design is more than aesthetics—it's about solving problems,
            communicating ideas, and creating experiences that resonate with people.
          </p>
        </div>
      </section>

      <section className="skills-section">
        <h2>Skills & Tools</h2>
        <p>Adobe Photoshop, Illustrator, Figma, InDesign, After Effects, Blender</p>
      </section>
    </div>
  );
}