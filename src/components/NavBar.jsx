import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.logo}>
        BlogApp
      </Link>

      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>

      <SearchBar onSearch={setSearchQuery} />
    </nav>
  );
};

export default NavBar;
