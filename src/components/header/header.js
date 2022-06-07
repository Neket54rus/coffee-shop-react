import { Link } from "react-router-dom";
// import ForYourPleasurePage from "../for-your-pleasure-page/for-your-pleasure-page";

import "./header.scss";
import logoSvg from "../../resources/logo.svg";

const Header = () => {
	return (
		<div className="header">
			<div className="header__container">
				<img className="logo header__logo" src={logoSvg} alt="logo" />
				<ul className="header__link-list">
					<li className="header__link-item">
						<Link className="header__link" to="/">
							Coffee house
						</Link>
					</li>
					<li className="header__link-item">
						<Link className="header__link" to="/our-coffee">
							Our coffee
						</Link>
					</li>
					<li className="header__link-item">
						<Link className="header__link" to="/for-your-pleasure">
							For your pleasure
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
