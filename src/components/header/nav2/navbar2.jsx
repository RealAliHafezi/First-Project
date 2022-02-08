// libraries
import styled from "styled-components";

// styles
const Container = styled.div`
	width: 85%;
	background-color: rgba(0, 0, 0, 0.15);
	margin: 0 auto;
	padding: 0.5rem 2rem;
	border-bottom-left-radius: 45px;
	border-bottom-right-radius: 45px;

	& > ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;

		font-size: 1.2rem;
		font-weight: 500;
		font-family: vazir;
		color: rgba(0, 0, 0, 0.75);
	}
	& > ul > li {
		padding: 1rem 1rem;
		cursor: pointer;
        font-family: vazir;
		transition: all 0.3s;
	}
	& > ul > li:hover,
	& > ul > li:focus {
		color: var(--white);
		background-color: var(--black);
		border-radius: 10px;
		transform: scale(1.1);
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
		& > ul {
			font-size: 1rem;
		}
		& > ul > li {
			padding: 0.5rem 0.5rem 0 0.5rem;
		}
	}
`;
const Nav2 = () => {
	const scrollUp = (id, e) => {
		e.preventDefault();
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	};
	return (
		<>
			<Container>
				<ul>
					<li onClick={(e) => scrollUp("home", e)}>صفحه نخست</li>
					<li onClick={(e) => scrollUp("games", e)}>بازی ها</li>
					<li onClick={(e) => scrollUp("works", e)}>ابزار ها</li>
					<li onClick={(e) => scrollUp("about", e)}>درباره ما</li>
					<li onClick={(e) => scrollUp("contact", e)}>ارتباط با ما</li>
				</ul>
			</Container>
		</>
	);
};
export default Nav2;
