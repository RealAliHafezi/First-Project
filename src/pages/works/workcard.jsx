// libraries
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// data
import WorksData from "../../data/worksection";
// components
import Nav1 from "./../../components/header/nav1/navbar1";
// styles
const Btns = styled.div`
	display: block;
	margin: 1.5rem 0;
	text-align: center;
	span {
		padding: 0.5rem;
		margin: 0 1rem;
		font-size: 1.5rem;
		border-radius: 5px;
		color: var(--white);
		background: linear-gradient(270deg, #28b415, #05cc05);
		cursor: pointer;
		&:hover,
		&:active {
			background: linear-gradient(270deg, #05cc05, #28b415);
			& > i {
				transform: scale(1.2);
			}
		}
	}
`;
const Container = styled.div`
	background-color: var(--white);
	width: 60%;
	height: auto;
	margin: 0 auto;
	padding: 2rem;

	@media only screen and (max-width: 768px) {
		width: 80%;
	}
	@media only screen and (max-width: 546px) {
		width: 90%;
	}
`;
const Image = styled.div`
	width: 90%;
	height: 450px;
	margin: 0 auto 1rem;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: fill;
		border-radius: 50px;
	}
	@media only screen and (max-width: 768px) {
		height: 350px;
	}
	@media only screen and (max-width: 546px) {
		height: 250px;
		width: 95%;
		& > img {
			border-radius: 10px;
		}
	}
`;
const Desc = styled.div`
	width: 85%;
	margin: 0 auto;
	text-align: center;
	font-size: 1.3rem;
	font-weight: 700;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	& > h1 {
		font-family: monospace;
		margin: 1rem auto 2rem;
	}
	@media only screen and (max-width: 546px) {
		font-size: 1.2rem;
		& > h1 {
			margin: 1rem auto 1rem;
		}
	}
`;
const Description = styled.div`
	text-align: right;
	line-height: 1.5;
	& > p {
		line-height: 1.7;
		font-size: 1.2rem;
		margin-top: 0.75rem;
	}
	@media only screen and (max-width: 546px) {
		& > h3 {
			font-size: 1.2rem;
		}
		& > p {
			font-size: 1rem;
		}
	}
`;
const Created = styled.div`
	text-align: right;
	margin: 1.5rem auto 0;
	font-size: 1.2rem;
	& > span {
		font-weight: 600;
		font-family: cursive;
		font-size: 1.1rem;
	}
	@media only screen and (max-width: 546px) {
		font-size: 1.1rem;
		& > span {
			font-weight: 800;
		}
	}
`;
const Btn = styled.div`
	width: 80%;
	height: auto;
	margin: 3rem auto 1rem;

	& > button {
		width: 100%;
		padding: 1rem 0;
		font-size: 1.2rem;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 600;
		border-radius: 10px;
		background-color: var(--green);
		color: var(--white);
		transition: all 0.3s;
		cursor: pointer;
		&:active {
			background-color: green;
		}
		&:hover {
			background-color: green;
			transform: scale(1.1);
		}
	}
	@media only screen and (max-width: 546px) {
		width: 95%;
	}
`;
const WorkCard = () => {
	const { work } = useParams();
	const [Card, setCard] = useState(null);
	useEffect(() => {
		function fetch() {
			const ele = WorksData.find((item) => item.id === work);
			setCard(ele);
		}
		fetch();
	}, []);
	return (
		<>
			{" "}
			<Nav1 />
			<Btns>
				<Link to={"/"}>
					<span>
						<i className='fas fa-home'></i>
					</span>
				</Link>
				<Link to={"games"}>
					<span>
						<i className='fas fa-gamepad'></i>
					</span>
				</Link>
				<span
					onClick={() => {
						window.history.back();
					}}>
					<i className='fas fa-arrow-left'></i>
				</span>
			</Btns>
			{Card ? (
				<Container>
					<Image>
						<img src={Card.avatar} alt='' />
					</Image>
					<Desc>
						<h1>{Card.title}</h1>
						<Description>
							<h3>توضیحات عمومی ابزار : </h3>
							<p>{Card.desc}</p>
						</Description>
						<Created>
							سازنده : <span>{Card.created}</span>
						</Created>
						<Created>
							تاریخ : <span>{Card.date}</span>
						</Created>
					</Desc>
					<Link to={"/"}>
						<Btn>
							<button>شروع بازی</button>
						</Btn>
					</Link>
				</Container>
			) : null}
		</>
	);
};
export default WorkCard;
