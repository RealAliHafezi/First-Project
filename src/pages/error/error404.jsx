// libraries
import styled from "styled-components";
import { Link } from "react-router-dom";
// gif
import ErrorGif from "./../../assets/gif/error404.gif";
// styles
const Container = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;

	& > img {
		width: 100%;
		height: 100%;
	}
	& button {
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);

		padding: 10px 20px;
		font-size: 1.5rem;
		color: var(--white);
		border-radius: 10px;
		border: 2px dotted green;
		background: linear-gradient(200deg, var(--green), green);
		cursor: pointer;
		transition: all 0.5s;

		&:hover,
		&:active {
			& > i {
				transform: scale(1.1);
			}
			background: linear-gradient(100deg, var(--green), green);
		}
	}
`;
const Error404 = () => {
	return (
		<Container>
			<img src={ErrorGif} alt='' />
			<Link to={"/home"}>
				<button>
					<i className='fas fa-home'></i>
				</button>
			</Link>
		</Container>
	);
};
export default Error404;
