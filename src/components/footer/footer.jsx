// libraries
import styled from "styled-components";
// styles
const Container = styled.div`
	width: 100%;
	height: auto;
	background-color: #01011a;
	color: var(--white);
	padding: 1rem 0;
	text-align: center;
`;
const Title = styled.h1`
	font-weight: 700;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	margin: 1rem 0;
`;
const Contact = styled.div`
	display: flex;
	width: 100%;

	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
const Right = styled.div`
	width: calc(50% - 2rem);
	display: flex;
	flex-direction: column;
	text-align: center;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	& > h3 {
		font-size: 1.4rem;
		margin: 1rem 0;
	}
	& > div > a {
		font-size: 1.5rem;
        color: var(--white);
		&:not(:last-child) {
			margin-left: 1rem;
		}
		cursor: pointer;

		&:active,
		&:hover {
			color: var(--blue);
		}
	}
	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;
const Left = styled.div`
	width: calc(50% - 2rem);
	text-align: right;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	& > p {
		margin: 1rem 2rem 1rem 1rem;
		font-weight: 600;
		font-size: 1rem;
	}

	@media only screen and (max-width: 768px) {
		width: 100%;
		margin-top: 2rem;
	}
`;
const Text = styled.p`
	margin: 2rem 0 1rem 0;
	font-size: 0.8rem;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Footer = () => {
	return (
		<>
			<Container>
				<Title>پل ارتباطی</Title>
				<Contact>
					<Right>
						<h3>شبکه های اجتماعی</h3>
						<div>
							<a href='https://instagram/realali_me' target={"_blank"}>
								<i className='fab fa-instagram'></i>
							</a>
							<a href='https://twitter.com/RealaliMe' target={"_blank"}>
								<i className='fab fa-twitter'></i>
							</a>
							<a href='https://t.me/realiali_me' target={"_blank"}>
								<i className='fab fa-telegram'></i>
							</a>
							<a href='https://facebook.com' target={"_blank"}>
								<i className='fab fa-facebook'></i>
							</a>
							<a href='https://github.com' target={"_blank"}>
								<i className='fab fa-github'></i>
							</a>
							<a href='https://linkedin.com' target={"_blank"}>
								<i className='fab fa-linkedin'></i>
							</a>
						</div>
					</Right>
					<Left>
						<p>آدرس : تهران - شهرری - شهرک علایین - مجتمع میلاد</p>
						<p>تلفن : 33422166 - 021</p>
						<p>واتساپ : 09380397555</p>
					</Left>
				</Contact>
				<Text>
					تمامی حقوق این سایت <i className='far fa-copyright'></i> مربوط به شخص
					علی حافظی میباشد
				</Text>
			</Container>
		</>
	);
};
export default Footer;
