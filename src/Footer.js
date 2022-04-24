import React from "react";

function Footer() {
  return (
    <footer>
      &copy;{" "}
      <a
        href="https://www.nhcarrigan.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Naomi Carrigan
      </a>
      <p><a href={process.env.PUBLIC_URL + "/"}>Return Home</a></p>
    </footer>
  );
}

export default Footer;
