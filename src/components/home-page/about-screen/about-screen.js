import aboutDividing from "../../../resources/home__about-dividing-strip-img.svg";

import "./about-screen.scss";

const AboutScreen = () => {
	return (
		<div className="about">
			<div className="about__title">About Us</div>
			<div className="dividing-strip about__dividing-strip">
				<div className="dividing-strip-line1 about__dividing-strip-line1"></div>
				<img className="dividing-strip-img " src={aboutDividing} alt="logo" />
				<div className="dividing-strip-line2 about__dividing-strip-line2"></div>
			</div>
			<div className="about__description">
				Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
				Afraid at highly months do things on at. Situation recommend objection do intention
				so questions. As greatly removed calling pleased improve an. Last ask him cold feel
				met spot shy want. Children me laughing we prospect answered followed. At it went is
				song that held help face.<br></br>
				<br></br> Now residence dashwoods she excellent you. Shade being under his bed her,
				Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
				horrible but confined day end marriage. Eagerness furniture set preserved far
				recommend. Did even but nor are most gave hope. Secure active living depend son
				repair day ladies now.
			</div>
		</div>
	);
};

export default AboutScreen;
