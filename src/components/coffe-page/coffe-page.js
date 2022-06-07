import HeaderScreen from "../our-coffee-page/header-screen/header-screen";

import img from "../../resources/coffe-page__img.jpg";
import aboutDividing from "../../resources/home__about-dividing-strip-img.svg";

import "./coffe-page.scss";

const CoffeePage = ({ item }) => {
	return (
		<div className="coffe-page">
			<HeaderScreen title="Our Coffee" />
			<div className="container">
				<div className="coffe-page__wrapper">
					<img className="coffe-page__img" src={img} alt="img" />
					<div className="coffe-page__text">
						<div className="coffe-page__title">About it</div>
						<div className="dividing-strip">
							<div className="dividing-strip-line1 about-screen__dividing-strip-line1"></div>
							<img className="dividing-strip-img" src={aboutDividing} alt="logo" />
							<div className="dividing-strip-line2 about-screen__dividing-strip-line2"></div>
						</div>
						<div className="coffe-page__type">
							<strong>Country:</strong> {item.type}
						</div>
						<div className="coffe-page__descr">
							<strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</div>
						<div className="coffe-page__price">
							Price: <strong>6.99$</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeePage;
