import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website",
};

export default function Home() {
  const skills = {
    Frontend: ["React.js", "Next.js", "HTML", "CSS", "JavaScript"],
    Backend: ["Express.js", "Node.js", "MongoDB", "SQL"],
    Languages: ["C++", "Python", "Java", "JavaScript"],
  };

  const projects = [
    {
      title: "Digital Wallet System",
      period: "February 2024 - July 2024",
      description:
        "A C++-based digital wallet system using data structures to optimize transaction management. Features include user account management, secure transactions, and administrative controls.",
      technologies: ["C++", "Data Structures", "File Handling", "Security"],
      link: "#",
    },
    {
      title: "Self-Diagnosis System",
      period: "March 2023 – July 2023",
      description:
        "A medical self-diagnosis system that helps patients get preliminary diagnoses based on symptoms. Includes patient profiles and doctor recommendations.",
      technologies: ["C++", "Algorithms", "Database Design"],
      link: "#",
    },
    {
      title: "Web Development Projects",
      period: "Summer 2023",
      description:
        "Developed various web applications during internship at Wxora, implementing modern web development practices and SDLC.",
      technologies: ["React.js", "Next.js", "Express.js", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-fadeIn">
            <h1 className="hero-title">
              Hi, I'm{" "}
              <span style={{ color: "var(--primary-color)" }}>
                Jacob Moawad
              </span>
            </h1>
            <p className="hero-subtitle">
              Junior Software Engineer | Full Stack Developer | Computer Science
              Student
            </p>
            <div
              style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
            >
              <a href="#contact" className="button button-primary">
                Get in Touch
              </a>
              <a href="#projects" className="button button-outline">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="grid grid-2">
            <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <p>
                I am a Junior Software Engineer studying Computer Science at
                NJIT, with a strong foundation from Ain Shams University.
                Passionate about full-stack development, I build scalable web
                applications using React.js, Next.js, and Express.js.
              </p>
              <br />
              <p>
                While studying Computer Science at NJIT and working at Taco
                Bell, I continuously seek opportunities to expand my skills. I
                am eager to learn the latest technologies and apply them to
                real-world projects. My goal is to develop high-performance
                applications that enhance user experience and business
                efficiency.
              </p>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <div className="card">
                <h3>Contact Information</h3>
                <p>📍 Linden, NJ</p>
                <p>📞 (908)-494-5095</p>
                <p>✉️ jacobtalat222@gmail.com</p>
              </div>
              <div className="card" style={{ marginTop: "1rem" }}>
                <h3>Experience</h3>
                <p>
                  <strong>Wxora</strong> - Summer Internship
                </p>
                <p>Cairo, Egypt (August 2023 - September 2023)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="grid grid-3">
            <div className="card animate-fadeIn">
              <h3>New Jersey Institute of Technology</h3>
              <p>Computer Science</p>
              <p>August 2024-Present</p>
              <p>Newark, NJ</p>
            </div>
            <div
              className="card animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              <h3>Ain Shams University</h3>
              <p>Computer Science AI Program</p>
              <p>September 2022 - July 2024</p>
              <p>GPA: 3.855</p>
            </div>
            <div
              className="card animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              <h3>Azza Zidan Experimental Language School</h3>
              <p>High School</p>
              <p>September 2019 - August 2022</p>
              <p>Top 3 in class with 83% score</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-3">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className="card animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3>{category}</h3>
                <ul style={{ listStyle: "none", marginTop: "1rem" }}>
                  {skillList.map((skill) => (
                    <li key={skill} style={{ marginBottom: "0.5rem" }}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="card animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3>{project.title}</h3>
                <p style={{ color: "var(--text-light)", marginBottom: "1rem" }}>
                  {project.period}
                </p>
                <p>{project.description}</p>
                <div style={{ marginTop: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          backgroundColor: "var(--primary-color)",
                          color: "white",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "1rem",
                          fontSize: "0.875rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="button button-primary">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <form className="animate-fadeIn">
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid var(--text-light)",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid var(--text-light)",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid var(--text-light)",
                  }}
                />
              </div>
              <button type="submit" className="button button-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
