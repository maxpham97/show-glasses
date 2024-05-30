import React from 'react';
import styles from './styles.module.scss';
import SearchIcon from '../../assets/icons/search.svg';

const CustomSearchInput = () => {
  const [isActiveSearch, setIsActiveSearch] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const searchRef = React.useRef();

  //Closes Search Input when clicking outside
  React.useEffect(() => {
    const handleSearchClick = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsActiveSearch(false);
        setSearchValue('');
      }
    };

    document.body.addEventListener('click', handleSearchClick);

    return () => {
      document.body.removeEventListener('click', handleSearchClick);
    };
  }, [isActiveSearch]);
  return (
    <>
      {isActiveSearch ? (
        <div className={styles.inputContainer}>
          <img alt="icon" src={SearchIcon} />
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      ) : (
        <img
          onClick={() => setIsActiveSearch(true)}
          style={{ cursor: 'pointer' }}
          alt="icon"
          src={SearchIcon}
        />
      )}
    </>
  );
};

export default CustomSearchInput;
