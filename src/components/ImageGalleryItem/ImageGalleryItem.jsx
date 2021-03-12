import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';
import { v4 as uuidv4 } from 'uuid';

const ImageGalleryItem = ({ image }) => {
  return (
    image !== undefined &&
    image.map(el => (
      <li key={uuidv4()} className={styles.image_gallery_item}>
        <img
          src={el.webformatURL}
          alt={el.tag}
          data-source={el.largeImageURL}
          className={styles.image_gallery_item_image}
        />
      </li>
    ))
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGalleryItem;
