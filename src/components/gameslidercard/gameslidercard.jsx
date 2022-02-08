// libraries
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
// for animations
// components
import HomeContext from "./../../pages/home/context/context";
// styles
const Box = styled.div`
	box-shadow: -1px 1px 8px rgba(0, 0, 0, 0.7);
	width: 90%;
	margin: 1rem 0;
	margin-left: 5%;
	padding: 1rem 5%;
	border-radius: 5px;
	text-align: right;
`;
const Img = styled.div`
	width: 100%;
	height: 250px;
	position: relative;
	& > img {
		width: 100%;
		height: 100%;
		border-radius: 15px;
		object-fit: fill;
		box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.25);
		&:hover {
			transform: scale(1.2);
		}
	}
	& > div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		/* background: linear-gradient(200deg, blue, black); */
		/* background: linear-gradient(200deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4) 50%); */
		background: radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
		display: flex;
		justify-content: center;
		align-items: center;

		opacity: 0;
		transition: all 0.4s;
		& > i {
			color: var(--white);
			cursor: pointer;
			transform: scale(2);
			transition: all 0.3s;
			&:hover {
				transform: scale(3);
			}
		}
		& > span {
			font-size: 2rem;
			cursor: pointer;
			color: ${(props) => (props.like ? "red" : "white")};
			position: absolute;
			top: 0;
			left: 0;
			opacity: 1;
			transition: opacity 1s, left 1s, top 1s, color 0.5s;
		}
		&:hover {
			opacity: 1;
			& > span {
				opacity: 1;
				left: 10px;
				top: 10px;
			}
		}
	}
`;
const Description = styled.div`
	margin: 1rem 0;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	font-weight: 600;
	font-size: 1rem;

	position: relative;

	& > h1 {
		margin-bottom: 0.5rem;
	}
	& > p {
		color: rgba(0, 0, 0, 0.8);
	}
	& > div {
		position: absolute;
		bottom: 5px;
		left: 10px;
		display: flex;
		& > span {
			width: 3px;
			height: 3px;
			border-radius: 50%;
			margin-right: 3px;
			background-color: rgba(0, 0, 0, 0.8);
		}
		@media only screen and (max-width: 548px) {
			bottom: 10px;
		}
	}
`;
const Created = styled.div`
	width: 100%;
	font-size: 0.75rem;
	text-align: left;
	margin: 0.5rem 0;

	& > span {
		font-size: 0.9rem;
		font-weight: 600;
	}
`;
const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: rgba(0, 0, 0, 0.25);
`;
const Btn = styled.button`
	width: 80%;
	margin: 0.5rem 10%;
	padding: 0.5rem 0;
	border-radius: 8px;
	font-size: 1.2rem;
	color: var(--white);
	background-color: var(--green);
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		background-color: green;
		transform: scale(1.2);
	}
`;

// motion
// const container = {
// 	hidden: { opacity: 0, y: 200 },
// 	show: {
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			staggerChildren: 0.5,
// 			duration: 1,
// 		},
// 	},
// };

const GameSliderCard = ({ pic, title, desc, created, id, card }) => {
	const Context = useContext(HomeContext);
	const [Like, setLike] = useState(false);

	return (
		<Box>
			<Img like={Like}>
				<div>
					<i className='fas fa-play'></i>
					<span
						className='fas fa-heart'
						onClick={() => {
							setLike(!Like);
							if (!Like) {
								Context.LikeBtn(card);
							} else {
								Context.RemoveLikeBtn(id);
							}
						}}></span>
				</div>
				<img src={pic} alt='' />
			</Img>
			<Description>
				<h1>{title}</h1>
				<p>{desc}</p>
				<div>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</Description>
			<Created>
				Created by : <span>{created}</span>
			</Created>
			<Line></Line>
			<Link to={`/games/${id}`}>
				<Btn>! برو بریم</Btn>
			</Link>
		</Box>
	);
};
export default GameSliderCard;
