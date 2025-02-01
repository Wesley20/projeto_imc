import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        {/* <li><Link to="/about" style={styles.link}>Sobre</Link></li> */}
        {/* <li><Link to="/contact" style={styles.link}>Contato</Link></li> */}
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "#333",
    padding: "10px",
    textAlign: "center",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default NavBar;
