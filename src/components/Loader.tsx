import React from 'react'
import styled from 'styled-components';

const CubesGrid = styled.div`
  width: 40px;
  height: 40px;
  margin: 80px auto;

.cube {
  width: 33%;
  height: 33%;
  background-color: #333;
  float: left;
  animation: scale 1.3s infinite ease-in-out;
}

.cube--1 { animation-delay: 0.2s; }
.cube--2 { animation-delay: 0.3s; }
.cube--3 { animation-delay: 0.4s; }
.cube--4 { animation-delay: 0.1s; }
.cube--5 { animation-delay: 0.2s; }
.cube--6 { animation-delay: 0.3s; }
.cube--7 { animation-delay: 0s; }
.cube--8 { animation-delay: 0.1s; }
.cube--9 { animation-delay: 0.2s; }

@keyframes scale {
  0%, 70%, 100% { transform: scale3D(1, 1, 1); }
  35% { transform: scale3D(0, 0, 1); }
}
`;

const Loader: React.FC = () => {
  return (
    <CubesGrid>
      <div className="cube cube--1"></div>
      <div className="cube cube--2"></div>
      <div className="cube cube--3"></div>
      <div className="cube cube--4"></div>
      <div className="cube cube--5"></div>
      <div className="cube cube--6"></div>
      <div className="cube cube--7"></div>
      <div className="cube cube--8"></div>
      <div className="cube cube--9"></div>
    </CubesGrid>
  )
};

export default Loader;