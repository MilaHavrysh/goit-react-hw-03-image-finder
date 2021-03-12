import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onGetInputValue, onSendQuery, inputValue }) => {
  return (
    <header className={styles.searchbar}>
      <form className={styles.search_form} onSubmit={e => e.preventDefault()}>
        <button
          type="submit"
          className={styles.search_form_button}
          onClick={onSendQuery}
        >
          <span className={styles.search_form_button_label}>Search</span>
        </button>

        <input
          className={styles.search_form_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onGetInputValue}
          value={inputValue}
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onGetInputValue: PropTypes.func,
  onSendQuery: PropTypes.func,
  inputValue: PropTypes.string,
};

export default Searchbar;
