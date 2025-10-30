import React, { useState } from "react";
import glacrImage from "../assets/portfolio/glacr.ai.png";
import ediomoImage from "./assets/images/Ediomo.jpg";
import docuhelpImage from "../assets/portfolio/docuhelp.ai.png";
import MindConnectImage from "../assets/portfolio/mindconnect.png";
import fipayImage from "../assets/portfolio/fipay.io.png";
import billTrackerImage from "../assets/portfolio/billTracker.png";
import techImage from "../assets/portfolio/3d7tech.png";
interface ProjectCard {
  id: number;
  thumb: string;
  title: string;
  category: string;
  url: string;
  description?: string;
  technologies?: string[];
}

const dataCards: ProjectCard[] = [
  {
    id: 4,
    thumb: fipayImage,
    title: "Fipay",
    category: "Others",
    url: "https://www.fipay.io/",
    description:
      "Fipay is a fintech platform designed to provide payment solutions and transaction management with a focus on user experience and scalability",
    technologies: ["React", "TypeScript", "Graphql", "Tailwind CSS"],
  },
  {
    id: 5,
    thumb: glacrImage,
    title: "Glacr",
    category: "AI-Powered",
    url: "https://glacr.ai/",
    description:
      "Glacr is a web platform designed to facilitate onboarding and career guidance. It combines AI-powered chat with dynamic user flows to provide personalized onboarding experiences for users.",
    technologies: [
      "React",
      "TypeScript",
      "langchain",
      "Postgres",
      "Tailwind CSS",
    ],
  },
  {
    id: 1,
    thumb: docuhelpImage,
    title: "Docuhelp.ai",
    category: "AI-Powered",
    url: "https://docuhelp.ai/",
    description: "AI-powered document analysis and assistance platform",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API"],
  },

  {
    id: 6,
    thumb: billTrackerImage,
    title: "Bill Tracker",
    category: "Others",
    url: "https://billtracker.naltf.gov.ng/",
    description:
      "Bill Tracker is a legislative bill tracking system built to streamline the process of monitoring and managing bills in a legislative context. It enables users to track bills across parliamentary committees, government publications, and updates on their progress",
    technologies: ["React", "TypeScript", "Postgres", "Tailwind CSS"],
  },
  {
    id: 2,
    thumb: techImage,
    title: "3d7 Tech",
    category: "Others",
    url: "https://www.3d7tech.com/",
    description: "Technology solutions provider website",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3"],
  },
  {
    id: 3,
    thumb: MindConnectImage,
    title: "MindConnect",
    category: "Others",
    url: "https://mindconnect.netlify.app/",
    description: "Mental health and wellness platform",
    technologies: ["React", "Firebase", "Node.js", "Material-UI"],
  },
];

const categories: string[] = ["Others", "AI-Powered"];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Others");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredCards =
    selectedCategory === "Others"
      ? dataCards.filter((card) => card.category === selectedCategory)
      : dataCards.filter((card) => card.category === selectedCategory);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1.5rem",
        fontFamily: "'Nunito', 'Poppins', sans-serif",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          My Projects
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Here are some of my recent works. Each project represents a unique
          challenge and solution.
        </p>
      </div>

      {/* Category Filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "2.5rem",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              background:
                selectedCategory === cat
                  ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  : "rgba(255, 255, 255, 0.05)",
              color:
                selectedCategory === cat ? "#fff" : "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "0.5rem 1.25rem",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "0.95rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              textTransform: "capitalize",
              backdropFilter: "blur(10px)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
          paddingBottom: "3rem",
          width: "100%",
        }}
      >
        {filteredCards.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              transition: "all 0.3s ease",
              transform:
                hoveredProject === project.id
                  ? "translateY(-5px)"
                  : "translateY(0)",
              boxShadow:
                hoveredProject === project.id
                  ? "0 15px 30px rgba(102, 126, 234, 0.2)"
                  : "none",
            }}
            className='port'
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                overflow: "hidden",
                height: "100%",
                transition: "all 0.3s ease",
                ":hover": {
                  borderColor: "rgba(102, 126, 234, 0.4)",
                },
              }}
            >
              {/* Project Image with Overlay */}
              <div
                style={{
                  position: "relative",
                  paddingTop: "60%",
                  overflow: "hidden",
                  background: "#0f1420",
                  cursor: "pointer",
                }}
              >
                <img
                  src={project.thumb}
                  alt={project.title}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform:
                      hoveredProject === project.id
                        ? "scale(1.05)"
                        : "scale(1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to bottom, rgba(15, 23, 42, 0.3) 0%, rgba(15, 23, 42, 0.9) 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.5rem",
                    opacity: hoveredProject === project.id ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    color: "#fff",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      marginBottom: "1rem",
                      lineHeight: "1.6",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        style={{
                          background: "rgba(102, 126, 234, 0.2)",
                          color: "#8fa3ff",
                          fontSize: "0.7rem",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "50px",
                          fontWeight: 600,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      color: "#fff",
                      background: "rgba(255, 255, 255, 0.1)",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      transition: "all 0.3s ease",
                      marginTop: "auto",
                      alignSelf: "flex-start",
                      ":hover": {
                        background: "rgba(255, 255, 255, 0.2)",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    View Project
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      style={{
                        marginLeft: "0.5rem",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <line x1='5' y1='12' x2='19' y2='12'></line>
                      <polyline points='12 5 19 12 12 19'></polyline>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      margin: 0,
                      color: "#fff",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.75rem",
                    color: "#667eea",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "opacity 0.3s ease",
                    opacity: hoveredProject === project.id ? 1 : 0.7,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCards.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "4rem 1rem",
            background: "rgba(255, 255, 255, 0.02)",
            borderRadius: "16px",
            border: "1px dashed rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              marginBottom: "1rem",
              opacity: 0.7,
            }}
          >
            🚧
          </div>
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "0.5rem",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            No projects found
          </h3>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            There are no projects in this category at the moment. Check back
            later for updates!
          </p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
