// libraries
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
// context
import HomeContext from "./pages/home/context/context";
// components
import GlobalStyle from "./globalstyle";
import Protect from "./pages/protect/protect";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignIn from "./pages/sigin/signin";
import GameHome from "./pages/games/GameHome";
import WorkHome from "./pages/works/workhome";
import GameCard from "./pages/games/gamecard";
import WorkCard from "./pages/works/workcard";
import Likes from "./pages/likes/likes";
import LogOut from "./pages/logout/logout";
import Error404 from "./pages/error/error404";
// data
import WorksData from "./data/worksection";
import HomeGames from "./data/gamessection";

const App = () => {
	const [Cards, setCards] = useState([]);
	const LikeBtn = (card) => {
		setCards([...Cards, card]);
		const LS = JSON.stringify([...Cards, card]);
		localStorage.setItem("Likes", LS);
	};
	const RemoveLikeBtn = (id) => {
		const data = [...Cards];
		const filter = data.filter((item) => item.id !== id);
		const LS = JSON.stringify(filter);
		localStorage.setItem("Likes", LS);
		setCards(filter);
	};
	useEffect(() => {
		const cards = localStorage.getItem("Likes");
		if (localStorage.length > 0) {
			setCards(JSON.parse(cards));
		}
	}, []);
	return (
		<>
			<GlobalStyle />
			<HomeContext.Provider
				value={{
					WorkData: WorksData,
					GameData: HomeGames,
					LikeBtn: LikeBtn,
					RemoveLikeBtn: RemoveLikeBtn,
					Cards: Cards,
				}}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='home' element={<Navigate replace to={"/"} />} />
					<Route path='login' element={<Login />} />
					<Route element={<Protect />}>
						<Route path='logout' element={<LogOut />} />
					</Route>
					<Route path='signin' element={<SignIn />} />
					<Route path='games' element={<GameHome />} />
					<Route path='games/:game' element={<GameCard />} />
					<Route path='works' element={<WorkHome />} />
					<Route path='works/:work' element={<WorkCard />} />
					<Route path='likes' element={<Likes />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</HomeContext.Provider>
		</>
	);
};
export default App;
