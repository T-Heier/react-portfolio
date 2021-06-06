import React from "react";

function Heading() {
  return (
    <header class="navbar navbar-dark bg-dark">
      <h1 class="page-title">Trent Heier</h1>
      <nav class="nav-list">
        <a href="#about">About Me</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
      </nav>
    </header>
  );
}

export default Heading