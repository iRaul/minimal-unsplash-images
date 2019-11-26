import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';

import GlobalStyle from './Global';
import DownloadButton from './DownloadButton';
import Container from './Container';
import Loader from './Loader';
import Header from './Header';
import Image from './Image';
import Modal from './Modal';

type ImageType = {
  id: string,
  alt_description: string,
  urls: {
    small: string,
    regular: string
  },
  links: {
    download: string,
  }
}

const App: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [modalImg, setModalImg] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);

  const getImages = async (items = 10, page = 1) => {
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?per_page=${items}&page=${page}&query=minimal&client_id=${process.env.REACT_APP_KEY}`);
      const json = await response.json();
      const res = json.results;
      const newImages = [...images, ...res];

      if (response.status === 200) {
        setImages(newImages);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />

        <InfiniteScroll
          dataLength={images.length}
          next={() => {
            getImages(10, page + 1);
            setPage(page + 1);
          }}
          hasMore
          loader={<Loader />}>
          <Masonry
            breakpointCols={{
              default: 3,
              768: 2,
            }}
            className="m-grid"
            columnClassName="m-grid__column">
            {
              images.map((image: ImageType) => {
                return (
                  <Image
                    key={image.id}
                    src={image.urls.small}
                    alt={image.alt_description}
                    onClick={() => {
                      setModalImg(image.urls.regular);
                      setModal(true);
                    }}>
                  </Image>
                )
              })
            }
          </Masonry>
        </InfiniteScroll>
      </Container>

      <Modal
        src={modalImg}
        active={modal} />
    </>
  );
}

export default App;
