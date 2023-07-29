import { useNavigate } from "react-router-dom";

import "./header.css";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <h1 onClick={() => navigate("/")}>Video Library</h1>
    </header>
  );
}
