import { Link } from "react-router-dom";
import dividing from "../../../resources/home__dividing-strip-img.svg";

import "./first-screen.scss";

const FirstScreen = () => {
	return (
		<div className="main">
			<div className="main__title">Everything You Love About Coffee</div>
			<div className="dividing-strip main__dividing-strip">
				<div className="dividing-strip-line1"></div>
				<img className="dividing-strip-img" src={dividing} alt="logo" />
				<div className="dividing-strip-line2"></div>
			</div>
			<div className="main__subtitle">
				We makes every day full of energy and taste<br></br>Want to try our beans?
			</div>
			<Link to="/our-coffee" className="main__btn">
				More
			</Link>
		</div>
	);
};

export default FirstScreen;
