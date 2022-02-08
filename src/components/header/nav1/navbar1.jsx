// libraries
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
// styled
const Container = styled.div`
	width: 100%;
	height: 56px;
	padding: 0 2rem;
	background-color: var(--purple2);

	display: flex;
	justify-content: space-between;
	align-items: center;

	position: relative;
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

	& > h1 {
		font-family: Comic Sans MS;
		& > span {
			color: green;
		}
	}
`;
const SearchBox = styled.div`
	@media only screen and (max-width: 548px) {
		display: none;
		width: 35vw;
	}
	& > input {
		padding: 0.5rem 1rem;
		font-size: 1rem;
		width: 25vw;
		border: 1px solid #888;
		border-right: none;
		border-top-left-radius: 12px;
		background-color: var(--white);
	}
	& > button {
		font-size: 1rem;
		padding: calc(0.5rem + 1px);
		border-bottom-right-radius: 12px;
		background-color: var(--green);
		color: var(--white);
		cursor: pointer;
		transition: all 0.3s;
	}
	& > button:hover i {
		transform: scale(1.1);
	}
`;
const List = styled.ul`
	@media only screen and (max-width: 768px) {
		display: none;
	}
	display: flex;
	justify-content: center;
	align-items: center;

	& > *:not(:first-child) {
		margin-right: 1.5rem;
	}
	& > * {
		font-size: 1rem;
		font-weight: 600;
		font-family: sans-serif;
		color: rgba(0, 0, 0, 0.75);
		cursor: pointer;
		transition: all 0.2s;
	}
	& > *:hover {
		color: var(--black);
		transform: scale(1.1);
	}
`;
// responsive
const ResButton = styled.button`
	padding: 0;
	margin: 0;
	font-size: 2rem;
	background-color: transparent;
	display: none;
	cursor: pointer;
	@media only screen and (max-width: 768px) {
		display: block;
	}
`;
const Responsive = styled(motion.div)`
	position: absolute;
	right: 0;
	top: 56px;
	padding: 0;
	width: ${(props) => (props.Menu ? "50vw" : "0")};

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: var(--purple);
	border-bottom-left-radius: 15px;
	z-index: 999;
`;
const ResList = styled.ul`
	padding: 1rem 0.5rem;
	& > * {
		width: 100%;
		padding: 1rem 0.5rem 1rem 1rem;
		margin: 0.5rem 0;
		font-size: 1.2rem;
		font-weight: 600;
		font-family: vazir;
		color: rgba(255, 255, 255, 0.9);
		cursor: pointer;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	& > *:hover {
		background-color: rgb(235, 137, 151);
		color: var(--white);
		border-radius: 10px;
	}
	& > *:hover span {
		transform: translateX(-10px) scale(1.1);
	}
`;
const ResSearchBox = styled.div`
	@media only screen and (min-width: 548px) {
		display: none;
	}
	display: flex;
	justify-content: center;
	margin: 1rem 0;
	width: 100vw;
	& > input {
		padding: 0.75rem 1rem;
		font-size: 1rem;
		width: 75vw;
		border: 1px solid #888;
		border-right: none;
		border-top-left-radius: 12px;
		background-color: var(--white);
	}
	& > button {
		font-size: 1rem;
		padding: calc(0.75rem + 1px);
		border-bottom-right-radius: 12px;
		background-color: var(--green);
		color: var(--white);
		cursor: pointer;
		transition: all 0.3s;
	}
`;
// js

const Nav1 = () => {
	const [Menu, setMenu] = useState(false);
	const log = localStorage.getItem("token");
	return (
		<>
			<Container id='home'>
				<ResButton
					type='button'
					onClick={() => {
						setMenu(!Menu);
					}}>
					{Menu ? (
						<i className='fas fa-times'></i>
					) : (
						<i className='fas fa-bars'></i>
					)}
				</ResButton>
				<List>
					<Link to={"/likes"}>مورد علاقه</Link>
					{!log ? (
						<>
							<Link to={"/signin"}>ورود</Link>
							<Link to={"/login"}>ثبت نام</Link>
						</>
					) : (
						<Link to={"/logout"}>خروج</Link>
					)}
				</List>
				<SearchBox>
					<button type='button'>
						<i className='fas fa-search'></i>
					</button>
					<input type='text' id='search' placeholder='دنبال چی میگردی ؟' />
				</SearchBox>
				{/* responsive */}
				{Menu ? (
					<Responsive
						Menu={Menu}
						initial={{ right: "-50vw" }}
						animate={{ right: 0 }}
						transition={{ type: "spring", duration: 1, delay: 0 }}>
						<ResList>
							<Link to={"/likes"}>
								<span>موردعلاقه</span> <i className='fas fa-heart'></i>
							</Link>
							{!log ? (
								<>
									<Link to={"Login"}>
										<span>ثبت نام</span> <i className='fas fa-user-plus'></i>
									</Link>
									<Link to={"signin"}>
										<span>ورود</span> <i className='fas fa-sign-in-alt'></i>
									</Link>
								</>
							) : (
								<Link to={"/logout"}>
									خروج <i className='fas fa-sign-out-alt'></i>
								</Link>
							)}
						</ResList>
					</Responsive>
				) : null}
				<h1>
					<span>REAL</span>ALI
				</h1>
			</Container>
			<ResSearchBox>
				<button type='button'>
					<i className='fas fa-search'></i>
				</button>
				<input type='text' id='search' placeholder='دنبال چی میگردی ؟' />
			</ResSearchBox>
		</>
	);
};
export default Nav1;
