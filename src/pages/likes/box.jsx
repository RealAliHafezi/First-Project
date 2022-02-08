// libraries
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
// components
import HomeContext from "../home/context/context";
// gif
import NullGif from "./../../assets/gif/null.gif";
// styles
const Box = styled(motion.div)`
	box-shadow: -1px 1px 8px rgba(0, 0, 0, 0.7);
	margin: 1rem 0;
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
		left: 50px;
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
// if Cards length = 0
const NullContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	width: 90vw;
	padding: 0;
	height: auto;
	& > h1 {
		cursor: default;
	}
	@media only screen and (max-width: 546px) {
		& > h1 {
			font-size: 1.5rem;
		}
		width: 100%;
	}
`;
const NullBtn = styled.button`
	background: linear-gradient(300deg, var(--green), green);
	padding: 0.75rem 2rem;
	margin: 1rem 0;
	font-size: 1.5rem;
	color: var(--white);
	border-radius: 5px;
	border: 2px dashed green;
	cursor: pointer;
	transition: all 0.5s;
	&:hover,
	&:active {
		& > i {
			transform: scale(1.2);
		}
		background: linear-gradient(300deg, green, var(--green));
	}
`;
const NullImg = styled.div`
	width: 100%;
	& > img {
		width: 75%;
		height: 60%;
	}
	@media only screen and (max-width: 546px) {
		& > img {
			width: 100%;
			height: 60vh;
		}
	}
`;

// motion
const container = {
	hidden: { opacity: 0, y: 200 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.5,
			duration: 1,
		},
	},
};
const LikeBox = () => {
	const Context = useContext(HomeContext);

	return Context.Cards.length > 0 ? (
		Context.Cards.map((item, index) => {
			const { title, description, avatar, id, created } = item;
			return (
				<Box
					key={index}
					variants={container}
					// in container object children
					initial='hidden'
					animate='show'
					exit={{
						opacity: 0,
						transition: { duration: 0.5 },
					}}>
					<Img>
						<div>
							<i className='fas fa-play'></i>
							<span
								className='fas fa-times'
								onClick={() => {
									Context.RemoveLikeBtn(id);
								}}></span>
						</div>
						<img src={avatar} alt='picture' />
					</Img>
					<Description>
						<h1>{title}</h1>
						<p>{description}</p>
						<div>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</Description>
					<Created>
						Created by <span>{created}</span>
					</Created>
					<Line></Line>
					<Link to={`/games/${id}`}>
						<Btn>! برو بریم</Btn>
					</Link>
				</Box>
			);
		})
	) : (
		<NullContainer>
			<Link to={"/home"}>
				<NullBtn>
					<i className='fas fa-home'></i>
				</NullBtn>
			</Link>
			<h1>هنوز کارتی انتخاب نکرده اید !!</h1>
			<NullImg>
				<img src={NullGif} alt='' />
			</NullImg>
		</NullContainer>
	);
};
export default LikeBox;
