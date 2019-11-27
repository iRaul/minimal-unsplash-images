import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';

import Image from './Image';
import Loader from './Loader';
import Modal from './Modal';

type ImageType = {
  id: string,
  alt_description: string,
  urls: { regular: string },
  links: { download: string, }
}

const Layout: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [modalImg, setModalImg] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const getImages = (items = 10, page = 1) => {
    const API_URL = 'https://api.unsplash.com/search/photos/';

    axios.get(API_URL, {
      params: {
        per_page: items,
        page: page,
        query: 'minimal',
        client_id: process.env.REACT_APP_KEY
      }
    })
      .then((response) => {
        const json = response.data;
        const results = json.results;
        const newImages = [...images, ...results];

        if (response.status === 200) {
          setImages(newImages);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getImages();
  }, []);

  const closeModal = () => {
    setModalImg('');
  }

  const breackPoints = {
    default: 3,
    768: 2,
  };

  return (
    <>
      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          getImages(10, page + 1);
          setPage(page + 1);
        }}
        hasMore
        loader={<Loader />}>

        <Masonry
          breakpointCols={breackPoints}
          className="m-grid"
          columnClassName="m-grid__column">
          {
            images.map((image: ImageType) => {
              return (
                <Image
                  key={image.id}
                  src={image.urls.regular}
                  alt={image.alt_description}
                  onClick={() => {
                    setModalImg(image.urls.regular);
                  }} />
              )
            })
          }
        </Masonry>

      </InfiniteScroll>

      {
        modalImg &&
        <Modal
          onClick={closeModal}
          src={modalImg} />
      }
    </>
  )
}

export default Layout;