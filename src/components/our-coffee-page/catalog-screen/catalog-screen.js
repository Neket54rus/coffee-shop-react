import { Component } from "react";
import { Link } from "react-router-dom";

import "./catalog-screen.scss";

class CatalogScreen extends Component {
	render() {
		const card = this.props.data.map((item) => {
			return (
				<Link to={"/our-coffee/" + item.id} key={item.id} className="catalog-screen__item">
					<img src={item.icon} alt="img" className="catalog-screen__icon" />
					<div className="catalog-screen__title">{item.name}</div>
					<div className="catalog-screen__text">
						<div className="catalog-screen__type">{item.type}</div>
						<div className="catalog-screen__price">{item.price}$</div>
					</div>
				</Link>
			);
		});
		return (
			<div className="catalog-screen">
				<div className="container">
					<div className="catalog-screen__wrapper">{card}</div>
				</div>
			</div>
		);
	}
}

export default CatalogScreen;
