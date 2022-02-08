// libraries
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useRef, useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// components
import GameSliderCard from "../gameslidercard/gameslidercard";
import HomeTitle from "../titles/homeTitle/title";
import HomeContext from "../../pages/home/context/context";
// styles
const Container = styled(motion.div)`
	background-color: (--background);

	width: 100%;
	padding: 0 4rem;
	position: relative;

	@media only screen and (max-width: 768px) {
		padding: 0 2rem;
	}
`;
const Btn2 = styled.button`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: var(--purple2);
	cursor: pointer;
	position: absolute;
	top: 50%;
	transform: translateY(50%);
	&:active,
	&::selection,
	&::marker,
	&:checked {
		background-color: var(--purple);
		border-radius: 50%;
	}
`;
const GamesSection = () => {
	const Context = useContext(HomeContext);
	const sliderRef = useRef(null);
	// for animation
	const controls = useAnimation();
	const [ref, inView] = useInView();

	const sliderSetting = {
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 676,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	const BtnPrev = () => {
		sliderRef.current.slickPrev();
	};
	const BtnNext = () => {
		sliderRef.current.slickNext();
	};

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);
	return (
		<>
			<HomeTitle text={"بازی ها"} idName={"games"} address={"games"} />
			<Container
				ref={ref}
				animate={controls}
				initial='hidden'
				transition={{ duration: 0.3 }}
				variants={{
					visible: { opacity: 1, scale: 1, y: 0 },
					hidden: { opacity: 0, scale: 0, y: 200 },
				}}>
				<Btn2 style={{ left: "10px" }} onClick={BtnPrev}>
					<i className='fas fa-arrow-left'></i>
				</Btn2>
				<Btn2 style={{ right: "10px" }} onClick={BtnNext}>
					<i className='fas fa-arrow-right'></i>
				</Btn2>
				<Slider {...sliderSetting} ref={sliderRef}>
					{Context.GameData.map((item, index) => {
						return (
							<GameSliderCard
								title={item.title}
								pic={item.avatar}
								desc={item.description}
								key={index}
								created={item.created}
								id={item.id}
								card={item}
							/>
						);
					})}
				</Slider>
			</Container>
		</>
	);
};
export default GamesSection;
