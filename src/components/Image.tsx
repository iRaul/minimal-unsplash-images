import React from 'react';
import styled from 'styled-components';

type Props = {
  src: string;
  alt: string;
  onClick: () => void;
};

const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s ease;
`;

const ImageWrapper = styled.div`
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
  cursor: zoom-in;
  position: relative;
  object-fit: cover;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:hover ${ImageOverlay} {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

const Image: React.FC<Props> = ({ src, alt, onClick, children }) => {
  return (
    <ImageWrapper>
      <Img src={src} alt={alt} />
      <ImageOverlay onClick={onClick}>{children}</ImageOverlay>
    </ImageWrapper>
  );
};

export default Image;
