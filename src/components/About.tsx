import React from "react";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "ai" | "tools";
}

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: "TypeScript", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "TensorFlow", category: "ai" },
    { name: "Hugging Face", category: "ai" },
    { name: "LangChain", category: "ai" },
    { name: "Git", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "CI/CD", category: "tools" },
  ];

  const categoryColors = {
    frontend: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    backend: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    ai: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tools: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  };

  return (
    <article className='about active' data-page='about'>
      <header style={{ marginBottom: "2.5rem" }}>
        <h2
          className='h2 article-title'
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          About Me
        </h2>
      </header>

      {/* Introduction Section */}
      <section
        style={{
          background:
            "linear-gradient(to bottom right, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
          borderRadius: "20px",
          padding: "2rem",
          marginBottom: "2.5rem",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "1.2rem",
            color: "inherit",
          }}
        >
          I am a <strong>Full-Stack Developer</strong> with proven expertise in
          TypeScript, JavaScript, Node.js, React, Next.js, and PostgreSQL. I
          specialize in building scalable, high-performance web applications
          that balance functionality with exceptional user experience.
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "1.2rem",
            color: "inherit",
          }}
        >
          With a strong background in both frontend and backend development, I
          continuously stay updated with emerging technologies and best
          practices. I take pride in writing efficient, well-documented code
          that aligns with business objectives.
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "inherit",
          }}
        >
          My passion for technology drives me to continuously evolve, with a
          current focus on <strong>AI and Machine Learning</strong>. I'm
          actively expanding my knowledge in deep learning, NLP, and integrating
          AI solutions into real-world applications.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
            color: "inherit",
          }}
        >
          Technical Skills
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          {skills.map((skill) => (
            <span
              key={skill.name}
              style={{
                background: categoryColors[skill.category],
                color: "white",
                padding: "0.6rem 1.2rem",
                borderRadius: "50px",
                fontSize: "0.9rem",
                fontWeight: 500,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
                cursor: "default",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.2)";
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Core Competencies Section */}
      <section>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
            color: "inherit",
          }}
        >
          Core Competencies
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              title: "Problem Solving",
              icon: "🧩",
              desc: "Analytical thinking and creative solutions",
            },
            {
              title: "Communication",
              icon: "💬",
              desc: "Clear technical documentation and collaboration",
            },
            {
              title: "Agile Methodology",
              icon: "⚡",
              desc: "Scrum, sprints, and iterative development",
            },
            {
              title: "Team Collaboration",
              icon: "🤝",
              desc: "Cross-functional teamwork and leadership",
            },
            {
              title: "AI & Machine Learning",
              icon: "🤖",
              desc: "Building and integrating AI models for dynamic, data-driven features",
            },
            {
              title: "Cloud Architecture",
              icon: "☁️",
              desc: "Designing scalable, cloud-based systems with AWS and Docker",
            },
            {
              title: "Microservices Architecture",
              icon: "⚙️",
              desc: "Designing modular systems for easy scaling and maintainability",
            },
          ].map((competency) => (
            <div
              key={competency.title}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "15px",
                padding: "1.5rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>
                {competency.icon}
              </div>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "inherit",
                }}
              >
                {competency.title}
              </h4>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: "1.6",
                }}
              >
                {competency.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default About;
