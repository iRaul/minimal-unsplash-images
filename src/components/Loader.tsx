import React from 'react';
import styled from 'styled-components';

type Props = {
	delay: string;
};

const CubesGrid = styled.div`
	width: 40px;
	height: 40px;
	margin: 80px auto;
`;

const Cube = styled.div<Props>`
	width: 33%;
	height: 33%;
	background-color: #333;
	float: left;
	animation: scale 1.3s infinite ease-in-out;
	animation-delay: ${props => props.delay};

	@keyframes scale {
		0%,
		70%,
		100% {
			transform: scale3D(1, 1, 1);
		}
		35% {
			transform: scale3D(0, 0, 1);
		}
	}
`;

const Loader: React.FC = () => {
	return (
		<CubesGrid>
			<Cube delay='0.2s' />
			<Cube delay='0.3s' />
			<Cube delay='0.4s' />
			<Cube delay='0.1s' />
			<Cube delay='0.2s' />
			<Cube delay='0.3s' />
			<Cube delay='0s' />
			<Cube delay='0.1s' />
			<Cube delay='0.2s' />
		</CubesGrid>
	);
};

export default Loader;
