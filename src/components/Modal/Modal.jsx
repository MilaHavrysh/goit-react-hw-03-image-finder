//import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ imgForModal, toggleModal }) => {
  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  });
  window.addEventListener('click', e => {
    if (e.target.localName !== 'img') {
      toggleModal();
    }
  });

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img className={styles.modal_image} src={imgForModal} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imgForModal: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default Modal;
