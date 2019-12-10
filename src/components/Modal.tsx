import React from 'react';
import styled from 'styled-components';

type Props = {
	src: string;
	onClick: () => void;
};

type Ref = HTMLDivElement;

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 4;
	transition: opacity 0.3s ease;
	padding: 0 15px;
	opacity: 1;
	visibility: visible;
`;

const ImageWrapper = styled.div`
	border-radius: 4px;
	position: relative;
`;

const Image = styled.img`
	max-width: 500px;
	width: 100%;
`;

const Close = styled.button`
	position: absolute;
	top: -10px;
	right: -10px;
	border: none;
	background-color: #fff;
	padding: 0;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
	outline: none;

	svg {
		display: block;
		height: 20px;
	}
`;

const Modal = React.forwardRef<Ref, Props>((props, ref) => (
	<ModalWrapper>
		<ImageWrapper ref={ref}>
			<Image src={props.src} />
			<Close onClick={props.onClick}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					fill='none'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					viewBox='0 0 24 24'
				>
					<path d='M18 6L6 18'></path>
					<path d='M6 6L18 18'></path>
				</svg>
			</Close>
		</ImageWrapper>
	</ModalWrapper>
));

export default Modal;
