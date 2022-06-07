import { Component } from "react";
import { Link } from "react-router-dom";

import best__card1 from "../../../resources/best__card-1.png";
import best__card2 from "../../../resources/best__card-2.png";
import best__card3 from "../../../resources/best__card-3.png";

import "./best-screen.scss";

class BestScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ id: 1, img: best__card1, title: "Solimo Coffee Beans 2 kg", price: 10.73 },
				{ id: 2, img: best__card2, title: "Presto Coffee Beans 1 kg", price: 15.99 },
				{ id: 3, img: best__card3, title: "AROMISTICO Coffee 1 kg", price: 6.99 },
			],
		};
	}

	render() {
		const { data } = this.state;
		const card = data.map(({ id, img, title, price }) => {
			return (
				<Link to="/our-coffee" className="best__card" key={id}>
					<img className="best__card-img" src={img} alt="best__card1" />
					<div className="best__card-text">
						<div className="best__card-title">{title}</div>
						<div className="best__card-price">{price}$</div>
					</div>
				</Link>
			);
		});
		return (
			<div className="best">
				<div className="container">
					<div className="best__title">Our best</div>
					<div className="best__cards">{card}</div>
				</div>
			</div>
		);
	}
}

export default BestScreen;
