import React from 'react'
import styled from 'styled-components'

type ModalProps = {
  src?: string,
  active: boolean,
}

const Overlay = styled.div`
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
  opacity: ${(props: ModalProps) => props.active ? '1' : '0'};
  visibility: ${(props: ModalProps) => props.active ? 'visible' : 'hidden'};

  img {
    max-width: 500px;
    width: 100%;
  }
`;

const Modal: React.FC<ModalProps> = ({ src, active }) => {
  return (
    <Overlay active={active}>
      <img src={src} />
    </Overlay>
  )
}

export default Modal;