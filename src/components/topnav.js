import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import './topnav.css';


function Topnav() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // perform search with searchQuery
    console.log(`Search for ${searchQuery}`);
  };

  return (
    <nav className="topnav">
      <div className="topnav-left">
        <img src="https://media.licdn.com/dms/image/C4D0BAQHeNfWIV0kHkw/company-logo_200_200/0/1674837701536?e=2147483647&v=beta&t=zMBYeN-x0HYy7eRf3DJ1hJBtCcK0ydUlm8O1vJCJcaU" alt="Logo" className="topnav-logo" />
      </div>
      <form className="topnav-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="topnav-search-button">
          <FaSearch />
        </button>
      </form>
    </nav>
  );
}

export default Topnav;
