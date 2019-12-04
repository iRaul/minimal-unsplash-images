import React from 'react';
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

type Props = {
  dataLength: number,
  next: () => void,
}

const breakPoints = {
  default: 3,
  768: 2,
};

const Grid: React.FC<Props> = ({ dataLength, next, children }) => {
  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={next}
      hasMore
      loader={<Loader />}>
      <Masonry
        breakpointCols={breakPoints}
        className="m-grid"
        columnClassName="m-grid__column">
        {children}
      </Masonry>
    </InfiniteScroll>
  );
}

export default Grid;