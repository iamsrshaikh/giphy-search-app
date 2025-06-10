import { useState, useEffect } from "react";

import { useGifs } from "./utilities/useGifs";
import SearchBar from "./components/SearchBar/SearchBar";
import GifCard from "./components/GifCard/GifCard";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

import {
  ERROR_MESSAGES,
  HEADINGS,
  LOADING_MESSAGES,
} from "./constants/messages";

import styles from "./App.module.css";

function App() {
  const {
    gifs,
    query,
    setQuery,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useGifs();

  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, setQuery]);

  return (
    <>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>{HEADINGS.title}</h1>
          <p className={styles.subtitle}>{HEADINGS.subtitle}</p>
        </header>

        <SearchBar value={searchTerm} onChangeHandler={setSearchTerm} />
      </div>
      <div className={styles.appContainer}>
        {isError && (
          <div className={styles.errorMessage}>{ERROR_MESSAGES.notFound}</div>
        )}

        <div className={styles.gifsGrid}>
          {gifs.map((gif) => (
            <GifCard key={gif.id} gif={gif} />
          ))}
        </div>

        {(isLoading || isFetchingNextPage) && <LoadingSpinner />}

        {hasNextPage && !isLoading && gifs.length > 0 && (
          <button
            className={styles.loadMoreButton}
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage
              ? LOADING_MESSAGES.initial
              : LOADING_MESSAGES.nextPage}
          </button>
        )}
      </div>
    </>
  );
}

export default App;
