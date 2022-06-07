import aboutDividing from "../../../resources/home__about-dividing-strip-img.svg";
// import aboutScreenImage from "../../../resources/our-about-screen__image.png";

import "./about-screen.scss";

const AboutScreen = ({ img }) => {
	return (
		<div className="about-screen">
			<div className="container">
				<div className="about-screen__wrapper">
					<img className="about-screen__image" src={img} alt="coffee" />
					<div className="about-screen__text">
						<div className="about-screen__title">About our goods</div>
						<div className="dividing-strip">
							<div className="dividing-strip-line1 about-screen__dividing-strip-line1"></div>
							<img className="dividing-strip-img" src={aboutDividing} alt="logo" />
							<div className="dividing-strip-line2 about-screen__dividing-strip-line2"></div>
						</div>
						<div className="about-screen__descr">
							Extremity sweetness difficult behaviour he of. On disposal of as
							landlord horrible.<br></br>
							<br></br>Afraid at highly months do things on at. Situation recommend
							objection do intention so questions.<br></br>
							<br></br>As greatly removed calling pleased improve an. Last ask him
							cold feel met spot shy want. Children me laughing we prospect answered
							followed. At it went is song that held help face.
						</div>
					</div>
				</div>
			</div>
			<div className="about-screen__hr"></div>
		</div>
	);
};

export default AboutScreen;
