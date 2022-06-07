import { Link } from "react-router-dom";

import logoSvg from "../../resources/blackLogo.svg";
import aboutDividing from "../../resources/home__about-dividing-strip-img.svg";

import "./footer.scss";

const Foter = () => {
	return (
		<div className="footer">
			<div className="footer__links">
				<img className="logo footer__logo" src={logoSvg} alt="logo" />
				<ul className="footer__link-list">
					<li className="footer__link-item">
						<Link className="footer__link" to="/">
							Coffee house
						</Link>
					</li>
					<li className="footer__link-item">
						<Link className="footer__link" to="/our-coffee">
							Our coffee
						</Link>
					</li>
					<li className="footer__link-item">
						<Link className="footer__link" to="/for-your-pleasure">
							For your pleasure
						</Link>
					</li>
				</ul>
			</div>

			<div className="dividing-strip footer__dividing-strip">
				<div className="dividing-strip-line1 footer__dividing-strip-line1"></div>
				<img className="dividing-strip-img " src={aboutDividing} alt="logo" />
				<div className="dividing-strip-line2 footer__dividing-strip-line2"></div>
			</div>
		</div>
	);
};

export default Foter;
