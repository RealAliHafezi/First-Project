// libraries
import styled from "styled-components";
import { Link } from "react-router-dom";
// components
import Rocket from "../../components/logos/Rocket1";
// styles
const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: var(--background);

	@media only screen and (max-width: 768px) {
		padding: 1rem;
		height: 100%;
	}
`;
const Links = styled.div`
	margin-bottom: 3rem;

	& span {
		padding: 1rem;
		font-size: 1.5rem;
		border-radius: 5px;
		color: var(--white);
		background: linear-gradient(45deg, var(--green), #3cfc3c);
		cursor: pointer;
		transition: all 0.3s;

		& > i {
			transition: all 0.3s;
		}

		&:hover {
			background: linear-gradient(4deg, green, var(--green));
		}
		&:hover i {
			transform: scale(1.3);
		}
	}
	& > *:not(:last-child) {
		margin-left: 1rem;
	}
	@media only screen and (max-width: 768px) {
		margin: 1rem 0;
	}
`;
const Box = styled.div`
	width: 70%;
	height: auto;
	padding: 2rem;

	color: var(--white);
	background: linear-gradient(
		45deg,
		rgba(0, 0, 0, 0.89) 50%,
		rgba(0, 0, 0, 0.95)
	);
	border: 2px solid var(--purple2);
	border-radius: 50px;
	box-shadow: 10px 10px 50px var(--purple), -10px -10px 50px var(--purple2);

	text-align: center;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	& > h2 {
		font-size: 2.5rem;
		font-weight: 800;
		margin-bottom: 1.3rem;
	}
	& > h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
	}
	& > div {
		font-weight: 600;
		text-align: right;
		& > *:not(:last-child) {
			margin-bottom: 1rem;
		}
		& > *:first-child {
			font-size: 1.25rem;
			margin-bottom: 1.5rem;
		}
	}

	@media only screen and (max-width: 768px) {
		width: 80%;
	}
	@media only screen and (max-width: 564px) {
		width: 95%;
		margin-top: 1rem;
	}
`;
const Login = () => {
	return (
		<>
			<Rocket w='150px' h='150px' left='50px' top='75px' />
			<Rocket w='75px' h='75px' left='90%' top='475px' />
			<Container>
				<Links>
					<Link to={"/signin"}>
						<span>
							<i className='fas fa-sign-in-alt'></i>
						</span>
					</Link>
					<Link to={"/home"}>
						<span>
							<i className='fas fa-home'></i>
						</span>
					</Link>
				</Links>
				<Box>
					<h2>سلام دوستان</h2>
					<h3>امیدوارم حالتون خوب و جیبتون پرپول باشه</h3>
					<div>
						<h3>نکته ای بود که باید عرض میکردم :</h3>
						<p>
							به دلیل نبود تیم برای توسعه سمت سرور سایت ، این وبسایت دارای صفحه
							ثبت نام در سایت نمی باشد
						</p>
						<p>
							اما نگران نباشید و در صورت وجود تیم back کاملا صفحه ثبت نام
							استاندارد و حرفه ای ساخته می شود.
						</p>
						<p>
							اما نکته اینحاست که برای استفاده از بخش های مختلف سایت نیاز به
							ورود به سایت میباشد . درسته . باید از قسمت ورود ، وارد سایت شوید
						</p>
						<p>
							اما وقتی در سایت ثبت نام نکردید چجوری میخواید از قسمت ورود وارد
							سایت بشید ؟
						</p>
						<p>
							برای قسمت ورود به سایت از یک api جعلی و تمرینی استفاده شده که شما
							میتوانید از طریق وارد کردن اطلاعاتی که من به شما میدم وارد سایت
							بشید
						</p>
						<p>
							این اطلاعات شامل چند ایمیل و رمز آن هست که با انتخاب هر کدام از
							آنها میتونید وارد سایت بشید و از قسمت های مختلف سایت استفاده کنید
						</p>
						<p>
							این ایمیل و رمز در همان قسمت ورود به سایت میباشد که به راحتی
							میتوانید آنها را کپی و وارد سایت شوید
						</p>
					</div>
				</Box>
			</Container>
		</>
	);
};
export default Login;
