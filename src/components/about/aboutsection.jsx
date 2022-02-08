// libraries
import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// components
import HomeTitle from "../titles/homeTitle/title";
// image
import Me from "./../../assets/images/me.jpg";
import Face from "./../../assets/images/face.png";
import Waves from "./../../assets/images/waves.svg";
// file
import Resume from "./../../assets/files/alihafezi.pdf";
// styles
const Container = styled.div`
	display: flex;
	justify-content: center;
	position: relative;

	width: 100%;
	height: auto;
	max-height: 100vh;
	padding: 2rem 0;
	margin: 3rem 0 0 0;
	background-color: var(--black);

	@media only screen and (max-width: 882px) {
		flex-direction: column;
	}
`;
const Image = styled(motion.div)`
	width: calc(40% - 2rem);
	height: 100%;
	position: relative;

	display: flex;
	justify-content: center;
	& > img {
		width: 80%;
		object-fit: cover;
	}
	& > div {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.9);
		display: none;
	}
	@media only screen and (max-width: 1024px) {
		width: calc(50% - 2rem);
	}
	@media only screen and (max-width: 882px) {
		width: calc(100% - 2rem);
		position: absolute;
		left: 0;
		& > div {
			display: block;
		}
		& > img {
			width: 100%;
		}
	}
	@media only screen and (max-width: 518px) {
		& > div {
			background: rgba(0, 0, 0, 0.75);
		}
	}
`;
const Text = styled(motion.div)`
	margin: 0 1rem;
	padding: 1rem 2rem;
	width: calc(60% - 2rem);
	height: auto;

	text-align: right;
	position: relative;
	@media only screen and (max-width: 1024px) {
		width: calc(50% - 2rem);
	}
	@media only screen and (max-width: 882px) {
		width: calc(100% - 2rem);
	}
`;
const Line = styled.div`
	width: 2px;
	height: 100%;
	position: absolute;
	right: 5px;
	top: 0;
	background: linear-gradient(180deg, rgb(215, 127, 161), rgb(187, 171, 218));
	@media only screen and (max-width: 768px) {
		right: 15px;
	}
`;
const Desc = styled.div`
	color: white;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	& > h1 {
		font-size: 3rem;
		font-weight: 700;
		margin: 1rem 0 3rem 0;
	}
	& > h3 {
		margin: 1.5rem 0;
	}
	@media only screen and (max-width: 768px) {
		& > h1 {
			font-size: 2.5rem;
		}
	}
	@media only screen and (max-width: 518px) {
		& > h1 {
			font-size: 2rem;
		}
	}
`;
const Btn = styled.button`
	padding: 1rem 3rem;
	margin-top: 1rem;
	border-radius: 30px;
	font-size: 1.5rem;
	font-weight: 600;
	color: var(--white);
	box-shadow: 1px 1px 5px white;
	cursor: pointer;
	background: linear-gradient(270deg, rgb(231, 112, 158), rgb(147, 122, 196));
	transition: all 0.5s;
	& > a {
		color: var(--white);
	}
	&:hover {
		background: linear-gradient(90deg, rgb(231, 112, 158), rgb(147, 122, 196));
		transform: scale(1.1);
	}
	&:active {
		background: linear-gradient(90deg, rgb(231, 112, 158), rgb(147, 122, 196));
		transform: scale(1.1);
	}
	@media only screen and (max-width: 518px) {
		padding: 1rem 2rem;
		font-size: 1.25rem;
	}
`;
const anime = keyframes`
	from {
		transform: translateX(0) translateY(0) rotate(345deg);
	}
	to {
		transform: translateX(20px) translateY(20px) rotate(365deg);
	}
`;
const Logo = styled(motion.div)`
	width: 200px;
	height: 200px;
	position: absolute;
	left: 2rem;
	top: 50%;
	transform: translateY(-50%);

	@media only screen and (max-width: 1024px) {
		width: 100px;
		height: 100px;
	}
	@media only screen and (max-width: 992px) {
		display: none;
	}
	@media only screen and (max-width: 518px) {
		display: none;
	}
	& > img {
		width: 100%;
		height: 100%;
		object-fit: fill;
		transform: rotate(330deg);
		animation: ${anime} 3s infinite alternate;
	}
`;
const WAVES = styled.div`
	position: static;
	width: 100%;
	height: 100%;
	max-height: 7rem;

	& > img {
		width: 100%;
		height: 100%;
	}
	@media only screen and (max-width: 548px) {
		max-height: 4rem;
	}
`;
const AboutSection = () => {
	// for animation
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);
	return (
		<>
			<HomeTitle text={"درباره ما"} address={"about"} idName={"about"} />
			<Container>
				<Image
					ref={ref}
					animate={controls}
					initial='hidden'
					transition={{ duration: 1.5 }}
					variants={{
						visible: { opacity: 1, scale: 1, x: 0 },
						hidden: { opacity: 0, scale: 0, x: 200 },
					}}>
					<div></div>
					<img src={Me} alt='' />
				</Image>
				<Text
					ref={ref}
					animate={controls}
					initial='hidden'
					transition={{ duration: 1 }}
					variants={{
						visible: { opacity: 1, scale: 1, y: 0 },
						hidden: { opacity: 0, scale: 0, y: 200 },
					}}>
					<Line></Line>
					<Desc>
						<h1>علی حافظی سنج</h1>
						<h3>تولد : ۰۱ / ۱۱ / ۱۳۸۳</h3>
						<h3>محل سکونت : تهران</h3>
						<h3>مدرک : دانشجوی دیپلم</h3>
						<h3>رشته : شبکه و نرم افزار کامپیوتر</h3>
						<h3>سابقه کار : ندارم</h3>
						<h3>آماده به کار ...</h3>
					</Desc>
					<Btn>
						<a href={Resume} download={true}>
							درباره من
						</a>
					</Btn>
				</Text>
				<Logo
					ref={ref}
					animate={controls}
					initial='hidden'
					transition={{ duration: 2 }}
					variants={{
						visible: { y: 0 },
						hidden: { y: 200 },
					}}>
					<img src={Face} alt='face' />
				</Logo>
			</Container>
			<WAVES>
				<img src={Waves} alt='Waves' />
			</WAVES>
		</>
	);
};
export default AboutSection;
