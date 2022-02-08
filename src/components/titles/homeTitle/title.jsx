import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
	margin: 2rem 0;
	text-align: center;
	font-size: 2rem;
	font-weight: 800;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	position: relative;
	&::before {
		content: "";
		width: 200px;
		height: 2px;
		position: absolute;
		right: 50%;
		bottom: -10px;
		transform: translateX(50%);
		background: linear-gradient(180deg, rgb(215, 127, 161), rgb(187, 171, 218));
	}
	@media only screen and (max-width: 546px) {
		font-size: 2.5rem;
		&::before {
			width: 100px;
		}
	}
`;
const HomeTitle = ({ text, address, idName }) => {
	return <Title id={idName} color="var(--black)">{text}</Title>;
};
export default HomeTitle;
