// import { useContext } from "react";
import styled from "styled-components";
// components
// import HomeContext from "../home/context/context";
import LikeBox from "./box";
// styles
const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 1rem 3rem;

	background-color: var(--white);
	
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	@media only screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}
	@media only screen and (max-width: 546px) {
		grid-template-columns: repeat(1, 1fr);
		gap: 1rem;
	}
`;
const Likes = () => {
	// const Context = useContext(HomeContext);
	return (
		<>
			<Container>
				<LikeBox />
			</Container>
		</>
	);
};
export default Likes;
