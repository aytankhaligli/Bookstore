import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Searchbar.module.css";
function SearchBar() {
  return (
    <div className={styles.search_box}>
      <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
      <input className={styles.search_input} placeholder="Search" />
    </div>
  );
}

export default SearchBar;
