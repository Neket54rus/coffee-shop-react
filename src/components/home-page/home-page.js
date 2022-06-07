import FirstScreen from "./first-screen/first-screen";
import AboutScreen from "./about-screen/about-screen";
import BestScreen from "./best-screen/best-screen";

import "./home-page.scss";

const HomePage = () => {
	return (
		<div className="home">
			<FirstScreen />
			<AboutScreen />
			<BestScreen />
		</div>
	);
};

export default HomePage;
