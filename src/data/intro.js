import Welcome from "./../assets/images/welcome.jpg";
import Design from "./../assets/images/design.jpg";
import Game from "./../assets/images/game.jpg";

const Intro = [
	{
		title: "همه بازی ها رو امتحان کن",
		desc: "انواع بازی ها رو اینجا جمع کردیم تا سرگرمی کوچیک برای اوغات فراقت شما فراهم کرده باشیم",
		avatar: Game,
		btn: "بازی ها",
		id: "games",
	},
	{
		title: "به وبسایت سرگرمی من خوش آمدید",
		desc: "امیدواریم اوقات خوشی رو در این وبسایت داشته باشید و از سایت خوشتون بیاد",
		avatar: Welcome,
		btn: "درباره ما",
		id: "about",
	},
	{
		title: "با ابزار ها کارت راحت تر میشه",
		desc: "سعی کردیم همه ابزار هایی کع در روزمره استفاده میشه رو برای راحتی شما در یک جا جمع کنیم",
		avatar: Design,
		btn: "ابزار ها",
		id: "works",
	},
];
export default Intro;
