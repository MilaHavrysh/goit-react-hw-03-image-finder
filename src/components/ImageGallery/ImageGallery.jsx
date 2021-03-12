import styles from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ image, onGetLargeImg, inputValue }) => {
  return (
    <ul className={styles.image_gallery} onClick={onGetLargeImg}>
      <ImageGalleryItem image={image} inputValue={inputValue} />
    </ul>
  );
};

ImageGallery.propTypes = {
  image: PropTypes.arrayOf(PropTypes.object),
  onGetLargeImg: PropTypes.func,
  inputValue: PropTypes.string,
};

export default ImageGallery;
