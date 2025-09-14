import styles from "./SearchBar.module.css"
function SearchBar() {
    return (
      <div className={styles.searchBar}>
        <div className={styles.input}>
        <img src="./images/icon-search.svg" alt="Search Icon" />
        <input type="text" placeholder="Search for a place..." />
        </div>        
        <button>Search</button>        
      </div>
    );
  }
  export default SearchBar;
  