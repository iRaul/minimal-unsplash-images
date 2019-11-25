import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 34px;
    margin: 0;
    color: #2e2e2e;
    letter-spacing: 2px;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }

  span {
    display: block;
    font-size: 20px;
    color: #676767;
  }
`;

const Header: React.FC = () => {
  return (
    <Title>
      <h1>Minimal Images</h1>
      <span>Minimal Images from Unsplash</span>
    </Title>
  )
}

export default Header;