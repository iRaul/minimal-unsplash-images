import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  transition: opacity .3s ease;
  padding: 0 15px;
  opacity: 1;
  visibility: visible;
`;

const Image = styled.img`
  max-width: 500px;
  width: 100%;
`;

const Modal: React.FC<{ src: string }> = ({ src }) => {
  return (
    <ModalWrapper>
      <Image src={src} />
    </ModalWrapper>
  )
}

export default Modal;