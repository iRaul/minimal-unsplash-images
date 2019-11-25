import React from 'react'
import styled from 'styled-components'

type ModalProps = {
  src: string
}

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  z-index: 4;
  transition: opacity .3s ease;
  padding: 0 15px;

  img {
    max-width: 600px;
    width: 100%;
  }
`;

const Modal: React.FC<ModalProps> = ({ src }) => {
  return (
    <Overlay>
      <img src={src} />
    </Overlay>
  )
}

export default Modal;