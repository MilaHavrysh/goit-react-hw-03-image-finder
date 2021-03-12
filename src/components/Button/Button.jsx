import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ loadPicture }) => {
  return (
    <>
      <button type="button" className={styles.button} onClick={loadPicture}>
        Load more
      </button>
    </>
  );
};

Button.prototype = {
  loadPicture: PropTypes.func.isRequired,
};

export default Button;
