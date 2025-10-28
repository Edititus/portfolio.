import React, { useState } from "react";
import ediomoImage from "../assets/Ediomo.jpg";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  link?: string;
  emoji: string;
}

const Sidebar: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/Edititus",
      icon: "logo-github",
      color: "#333",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ediomo-titus-30398219b/",
      icon: "logo-linkedin",
      color: "#0077b5",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: "logo-instagram",
      color: "#e4405f",
    },
    {
      name: "Showwcase",
      url: "https://www.showwcase.com/edititus",
      icon: "briefcase-outline",
      color: "#667eea",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/",
      icon: "logo-twitter",
      color: "#1da1f2",
    },
  ];

  const contactItems: ContactItem[] = [
    {
      icon: "mail-outline",
      label: "Email",
      value: "tediomo.et@gmail.com",
      link: "mailto:tediomo.et@gmail.com",
      emoji: "✉️",
    },
    {
      icon: "location-outline",
      label: "Location",
      value: "Lagos, Nigeria",
      emoji: "📍",
    },
  ];

  return (
    <aside
      className='sidebar'
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        padding: "2rem",
        display: "flex",
        gap: "2rem",
      }}
    >
      {/* Profile Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Avatar with Gradient Border */}
        <div
          style={{
            position: "relative",
            padding: "4px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
          }}
        >
          <img
            src={ediomoImage}
            alt='Ediomo Titus'
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid rgba(0, 0, 0, 0.8)",
            }}
          />
        </div>

        {/* Name & Title */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              margin: 0,
              marginBottom: "0.5rem",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <span>Ediomo Titus</span>
            <span>Full-Stack Developer</span>
          </p>
        </div>
      </div>

      {/* Separator */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
        }}
      />

      {/* Contact Information */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {contactItems.map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.75rem",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.transform = "translateX(5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                minWidth: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.emoji}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255, 255, 255, 0.5)",
                  margin: 0,
                  marginBottom: "0.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </p>
              {item.link ? (
                <a
                  href={item.link}
                  style={{
                    fontSize: "0.9rem",
                    color: "inherit",
                    textDecoration: "none",
                    wordBreak: "break-word",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "inherit";
                  }}
                >
                  {item.value}
                </a>
              ) : (
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "inherit",
                    margin: 0,
                  }}
                >
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Separator */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
        }}
      />

      {/* Social Links */}
      <div>
        <h3
          style={{
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "rgba(255, 255, 255, 0.6)",
            marginBottom: "1rem",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Connect
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => setHoveredSocial(social.name)}
              onMouseLeave={() => setHoveredSocial(null)}
              style={{
                width: "45px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                background:
                  hoveredSocial === social.name
                    ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    : "rgba(255, 255, 255, 0.05)",
                color: "inherit",
                fontSize: "1.5rem",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transform:
                  hoveredSocial === social.name
                    ? "translateY(-5px) scale(1.1)"
                    : "translateY(0) scale(1)",
                boxShadow:
                  hoveredSocial === social.name
                    ? "0 8px 20px rgba(102, 126, 234, 0.4)"
                    : "none",
              }}
            >
              <ion-icon name={social.icon}></ion-icon>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
