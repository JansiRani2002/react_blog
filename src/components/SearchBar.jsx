import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // dynamic search
  };

  const toggleMobileSearch = () => {
    setIsMobileOpen((prev) => !prev);
    if (isMobileOpen) {
      setQuery("");
      onSearch("");
    }
  };

  return (
    <div className={styles.searchContainer}>
      <label htmlFor="search" className={styles.visuallyHidden}>
        Search posts
      </label>

      <input
        id="search"
        type="text"
        className={`${styles.input} ${isMobileOpen ? styles.mobileOpen : ""}`}
        placeholder="Search posts..."
        value={query}
        onChange={handleChange}
      />

      <button
        className={styles.iconButton}
        onClick={toggleMobileSearch}
        aria-label="Toggle search"
      >
        {isMobileOpen ? "✕" : "🔍"}
      </button>
    </div>
  );
};

export default SearchBar;
