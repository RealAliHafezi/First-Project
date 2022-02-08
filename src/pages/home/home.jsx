// libraries
// import { useState } from "react";
// components
import Nav1 from "./../../components/header/nav1/navbar1";
import Nav2 from "./../../components/header/nav2/navbar2";
import Introduce from "../../components/intro/introduce";
import Rocket from "../../components/logos/Rocket1";
import GamesSection from "../../components/games/gamessection";
import WorkSection from "../../components/worksection/worksection";
import AboutSection from "../../components/about/aboutsection";
import ContactSection from "../../components/contactsection/contactsection";
import Footer from "../../components/footer/footer";

// import HomeContext from "./context/context";

const Home = () => {
	return (
		<>
			{/* Header */}
			<Nav1 />
			<Nav2 />
			{/* logo */}
			<Rocket w='70px' h='70px' left='20px' top='75px' />
			{/* intro */}
			<Introduce />
			{/* games */}
			<GamesSection />
			{/* works */}
			<WorkSection />
			{/* about */}
			<AboutSection />
			{/* contact */}
			<ContactSection />
			{/* footer */}
			<Footer />
		</>
	);
};
export default Home;
