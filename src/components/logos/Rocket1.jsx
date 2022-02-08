// libraries
import styled, { keyframes } from "styled-components";
// image
import Rocket1 from "./../../assets/images/pinkrocket.png";
// styles
const Anime = keyframes`
    0% {
        transform : translateX(-10px) translateY(10px)
    }
    50% {
        transform : translateX(0) translateY(0)
    }
    100% {
        transform : translateX(-10px) translateY(10px)
    }
`;
const Container = styled.div`
	position: absolute;
	top: 75px;
	left: 20px;
	z-index: 99;

	@media only screen and (max-width: 768px) {
		display: none;
	}

	& > img {
		width: 100%;
		height: 100%;
		animation: ${Anime} 2s infinite;
	}
`;

const Rocket = ({ w, h, left, top }) => {
	return (
		<Container
			style={{ width: `${w}`, height: `${h}`, top: `${top}`, left: `${left}` }}>
			<img src={Rocket1} alt='rocket' />
		</Container>
	);
};
export default Rocket;
