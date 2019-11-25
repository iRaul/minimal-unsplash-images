import React from 'react'
import styled from 'styled-components'

type ImgProps = {
  src: string,
  alt: string,
  onClick: any,
}

const ImgElem = styled.div`
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
  cursor: zoom-in;
  position: relative;

  &:hover {
    &:before {
      background: linear-gradient(
                          to bottom,
                          rgba(0, 0, 0, 0.1) 0%,
                          rgba(0, 0, 0, 0.1) 100%
                        );
    }
  }

  &:before {
    content: '';
    background: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0.06) 0%,
                        rgba(0, 0, 0, 0.06) 100%
                      );
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

  }

  img {
    width: 100%;
    display: block;
  }
`

const Image: React.FC<ImgProps> = ({ src, alt, onClick }) => {
  return (
    <ImgElem onClick={onClick}>
      <img src={src} alt={alt} />
    </ImgElem>
  )
}


export default Image;