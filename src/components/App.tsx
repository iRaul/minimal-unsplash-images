import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css'
import InfiniteScroll from 'react-infinite-scroll-component';

import GlobalStyle from './Global';
import Container from './Container';

interface ImageType {
  id: string
  urls: {
    small: string
  }
}

const App: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState<number>(1);

  const getImages = async (items = 5, page = 1) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=${items}&page=${page}&query=minimal&client_id=${process.env.REACT_APP_KEY}`);
    const json = await response.json();
    const res = json.results;

    const newImages = [...images, ...res];

    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <GlobalStyle />

      <Container>
        <InfiniteScroll
          dataLength={images.length}
          next={() => {
            getImages(5, page + 1);
            setPage(page + 1);
          }}
          hasMore
          loader={<span>Loading</span>}>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
              images.map((image: ImageType) => {
                return (
                  <img
                    style={{
                      marginBottom: "10px",
                      width: "100%",
                      display: "block"
                    }}
                    src={image.urls.small} />
                )
              })
            }
          </Masonry>

        </InfiniteScroll>
      </Container>
    </>
  );
}

export default App;
