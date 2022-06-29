import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <header>
        <NavLink to="/pets">Home</NavLink>
      </header>
    </div>
  );
}
