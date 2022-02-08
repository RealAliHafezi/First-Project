// libraries
import styled from "styled-components";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// data
import Intro from "../../data/intro";
// components
import IntroCard from "../introCart/introCard";
// styles
const Container = styled.div`
	position: relative;
	margin-top: 2rem;
	padding: 1rem 4rem;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	background: linear-gradient(
		180deg,
		rgba(215, 127, 161, 0.2),
		rgba(187, 171, 218, 0.5)
	);

	@media only screen and (max-width: 992px) {
		padding: 0;
		background: var(--white);
		margin: 1rem 0 0 0;
		align-items: flex-start;
	}

	& > div {
		width: 100%;
		text-align: right;
	}
`;
const Btn = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	padding: 1rem;
	background-color: rgba(215, 127, 161, 0.5);
	border-radius: 50%;
	color: var(--white);
	cursor: pointer;

	@media only screen and (max-width: 548px) {
		display: none;
	}
`;
const Introduce = () => {
	const sliderRef = useRef(null);
	const slideSettings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 7000,
		arrows: false,
		dots: false,
	};
	const NextSlide = () => {
		sliderRef.current.slickNext();
	};
	const PrevSlide = () => {
		sliderRef.current.slickPrev();
	};

	return (
		<Container>
			<Btn style={{ right: "10px" }} onClick={NextSlide}>
				<i className='fas fa-arrow-right'></i>
			</Btn>
			<Btn style={{ left: "10px" }} onClick={PrevSlide}>
				<i className='fas fa-arrow-left'></i>
			</Btn>
			<Slider {...slideSettings} ref={sliderRef}>
				{Intro.map((item, i) => {
					return (
						<IntroCard
							title={item.title}
							pic={item.avatar}
							key={i}
							desc={item.desc}
							btn={item.btn}
							id={item.id}
						/>
					);
				})}
			</Slider>
		</Container>
	);
};
export default Introduce;
