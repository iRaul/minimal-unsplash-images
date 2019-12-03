import React, { useState, useEffect, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';

import axios from 'axios';

import Grid from './Grid';
import Image from './Image';
import Modal from './Modal';
import DownloadButton from './DownloadButton';
import ScrollToTop from './ScrollToTop';

type ImageType = {
  id: string,
  alt_description: string,
  urls: {
    regular: string
  },
  links: {
    download: string
  }
}

const Layout: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [modalImg, setModalImg] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [scrollToTopVisible, setScrollToTopVisible] = useState<boolean>(false);
  const overlayRef = useRef(null)

  useOnClickOutside(overlayRef, () => setModalImg(''));

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

  const handleScroll = () => {
    const y = window.scrollY;

    if (y >= 600) {
      setScrollToTopVisible(true);
    } else {
      setScrollToTopVisible(false);
    }
  }

  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (window) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  });

  return (
    <>
      <Grid
        dataLength={images.length}
        next={() => {
          getImages(10, page + 1);
          setPage(page + 1);
        }}>
        {
          images.map((image: ImageType) => {
            return (
              <Image
                key={image.id}
                src={image.urls.regular}
                alt={image.alt_description}
                onClick={() => {
                  setModalImg(image.urls.regular);
                }} >
                <DownloadButton
                  onClick={(e) => e.stopPropagation()}
                  href={image.links.download}
                  download={image.id} />
              </Image>
            )
          })
        }
      </Grid>

      {
        scrollToTopVisible &&
        <ScrollToTop onClick={scrollToTop} />
      }

      {
        modalImg &&
        <Modal
          ref={overlayRef}
          onClick={() => setModalImg('')}
          src={modalImg} />
      }
    </>
  )
}

export default Layout;