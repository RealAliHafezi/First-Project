// libraries
import styled from "styled-components";
// styles
const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	position: relative;
	@media only screen and (max-width: 992px) {
        height: 65vh;
	}
`;
const Left = styled.div`
	width: 48.5%;
	height: 100%;
	padding: 0 0 0 2rem;
	z-index: 99;
	@media only screen and (max-width: 992px) {
		width: 85%;
		color: var(--white);
	}
	& > h1 {
		margin-top: 3rem;
		font-weight: 700;
		font-size: 3rem;
		font-family: vazir;
		margin-bottom: 2rem;
		@media only screen and (max-width: 546px) {
			font-size: 2.25rem;
		}
	}
	& > p {
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 1.7;
		@media only screen and (max-width: 768px) {
			font-size: 1.2rem;
		}
	}
	& > button {
		margin: 3rem 0 1rem 0;
		padding: 1rem 1.5rem;
		font-size: 1.75rem;
		border-radius: 10px;
        box-shadow: 1px 2px 3px var(--purple) ;
		background: linear-gradient(45deg, var(--purple), var(--purple2));
		color: var(--black);
		cursor: pointer;
		font-weight: 600;
		max-width: 200px;
		transition: all 0.2s;
		&:hover {
			transform: scale(1.1);
		}
		@media only screen and (max-width: 768px) {
			font-size: 1.25rem;
            color: var(--white);
		}
	}
`;
const Right = styled.div`
	width: 48.5%;
	height: 100%;
	display: flex;
	justify-content: left;
	position: relative;

	@media only screen and (max-width: 992px) {
		position: absolute;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
	}

	& > img {
		width: 100%;
		height: 100%;
		max-height: 70vh;
		border-radius: 25px;
		@media only screen and (max-width: 992px) {
			border-radius: 0;
		}
	}
	& > div {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		border-radius: 25px;
		background: linear-gradient(
			180deg,
			rgba(215, 127, 161, 0.1),
			rgba(187, 171, 218, 0.5)
		);
		@media only screen and (max-width: 992px) {
			border-radius: 0;
			z-index: 9;
			background-color: rgba(0, 0, 0, 0.75);
		}
	}
`;
const IntroCard = ({ title, pic, desc, btn, id }) => {
	const scrollUp = (id, e) => {
		e.preventDefault();
		const element = document.getElementById(id);
		console.log(element , id)
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	};
	return (
		<Container>
			<Left>
				<h1>{title}</h1>
				<p>{desc}</p>
				<button onClick={(e) => scrollUp(`${id}`, e)}>{btn}</button>
			</Left>
			<Right>
				<img src={pic} alt='pic' />
				<div></div>
			</Right>
		</Container>
	);
};
export default IntroCard;
