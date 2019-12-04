import React from 'react';
import styled from 'styled-components';

type Props = {
  onClick: () => void,
}

const Button = styled.button`
  background-color: #333;
  position: fixed;
  right: 20px;
  bottom: 20px;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    box-shadow: 0px 0px 0px 2px #999;
  }

  svg {
    display: block;
  }
`;

const ScrollToTop: React.FC<Props> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24">
        <path d="M12 19L12 5"></path>
        <path d="M5 12L12 5 19 12"></path>
      </svg>
    </Button>
  )
}

export default ScrollToTop;