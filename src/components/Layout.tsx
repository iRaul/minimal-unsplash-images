import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Grid from './Grid';
import Image from './Image';
import Modal from './Modal';
import DownloadButton from './DownloadButton';

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
        modalImg &&
        <Modal
          onClick={() => setModalImg('')}
          src={modalImg} />
      }
    </>
  )
}

export default Layout;