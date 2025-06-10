import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChangeHandler }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for GIFs..."
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;