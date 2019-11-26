import React from 'react';
import styled from 'styled-components';

type ImgProps = {
  src: string,
  alt: string,
  onClick: () => void,
}

const ImageWrapper = styled.div`
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
  cursor: zoom-in;
  position: relative;

  &:hover {
    a {
      opacity: 1;
      visibility: visible;
    }

    &:before {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) , rgba(0, 0, 0, 0.3));
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) , rgba(0, 0, 0, 0.02));
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

const Image: React.FC<ImgProps> = ({ src, alt, onClick, children }) => {
  return (
    <ImageWrapper onClick={onClick}>
      <Img src={src} alt={alt} />
      {children}
    </ImageWrapper>
  )
}


export default Image;