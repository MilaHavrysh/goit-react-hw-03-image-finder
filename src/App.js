import axios from 'axios';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

function App() {
  const [image, setImage] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [imgForModal, setImgForModal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showButtonLoad, setShowButtonLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const heandleInputValue = e => {
    setInputValue(e.target.value);
  };

  const heandleQuery = e => {
    setQuery(inputValue);
    console.log(image);
    setInputValue('');
    setPage(1);
  };

  const getLargeImg = e => {
    setImgForModal(e.target.dataset.source);
    setShowModal(true);
  };

  const loadPicture = e => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (query !== '') {
      setIsLoading(true);
      setShowButtonLoad(false);
      axios
        .get(
          `https://pixabay.com/api/?key=19836134-b34949b11efa02f4075f5e847&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`,
        )
        .then(res => {
          console.log(res.data.hits);
          if (page === 1) {
            setImage(res.data.hits);
          } else {
            setImage(prev => [...prev, ...res.data.hits]);
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }

          res.data.hits.length > 0
            ? setShowButtonLoad(true)
            : setShowButtonLoad(false);
          setIsLoading(false);
        })
        .catch(error => alert('Ошибка связи с сервером'));
    }
  }, [query, page]);

  return (
    <div className="App">
      <Searchbar
        onGetInputValue={heandleInputValue}
        onSendQuery={heandleQuery}
        inputValue={inputValue}
      />
      <ImageGallery image={image} onGetLargeImg={getLargeImg} />
      {isLoading && (
        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
      )}
      {showButtonLoad && <Button loadPicture={loadPicture} />}
      {showModal && (
        <Modal imgForModal={imgForModal} toggleModal={toggleModal} />
      )}
    </div>
  );
}

export default App;

/*useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=19836134-b34949b11efa02f4075f5e847&q=${query}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => response.json())
      .then(res => setImage(res));
  }, [query]);*/
