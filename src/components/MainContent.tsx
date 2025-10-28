import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

type Page = "about" | "portfolio" | "contact";

const MainContent: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>("about");
  const [hoveredNav, setHoveredNav] = useState<Page | null>(null);

  const navItems: { page: Page; label: string; icon: string }[] = [
    { page: "about", label: "About", icon: "👤" },
    { page: "portfolio", label: "Portfolio", icon: "💼" },
    // { page: "contact", label: "Contact", icon: "✉️" },
  ];

  return (
    <div style={{ position: "relative" }}>
      {/* Modern Navbar */}
      <nav
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "20px",
          padding: "0.75rem",
          marginBottom: "2.5rem",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "0.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {navItems.map(({ page, label, icon }) => (
            <li key={page}>
              <button
                onClick={() => setActivePage(page)}
                onMouseEnter={() => setHoveredNav(page)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{
                  background:
                    activePage === page
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : hoveredNav === page
                      ? "rgba(255, 255, 255, 0.1)"
                      : "transparent",
                  color: activePage === page ? "#fff" : "inherit",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: activePage === page ? 600 : 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow:
                    activePage === page
                      ? "0 4px 15px rgba(102, 126, 234, 0.4)"
                      : "none",
                  transform:
                    activePage === page || hoveredNav === page
                      ? "translateY(-2px)"
                      : "translateY(0)",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Page Content with Fade Animation */}
      <div
        style={{
          animation: "fadeIn 0.5s ease-in-out",
        }}
      >
        {activePage === "about" && <About />}
        {activePage === "portfolio" && (
          <article className='portfolio active' data-page='portfolio'>
            <Portfolio />
          </article>
        )}
        {activePage === "contact" && (
          <article className='contact active' data-page='contact'>
            <Contact />
          </article>
        )}
      </div>

      {/* Add CSS Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MainContent;
