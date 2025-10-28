import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "../style.css";

const App: React.FC = () => {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <MainContent />
      </div>
    </main>
  );
};

export default App;
