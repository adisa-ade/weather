function SearchBar() {
    return (
      <div className="search-bar">
        <div className="input">
        <img src="./images/icon-search.svg" alt="Search Icon" />
        <input type="text" placeholder="Search for a place..." />
        </div>
        <button>Search</button>
      </div>
    );
  }
  export default SearchBar;
  