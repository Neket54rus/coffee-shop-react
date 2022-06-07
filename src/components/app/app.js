import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ForYourPleasurePage from "../for-your-pleasure-page/for-your-pleasure-page";
import OurCoffeePage from "../our-coffee-page/our-coffee-page";
import Header from "../header/header";
import { Component } from "react";

import HomePage from "../home-page/home-page";
import Footer from "../footer/footer";
import CoffeePage from "../coffe-page/coffe-page";

import ourCoffeePageImage from "../../resources/our-about-screen__image.png";
import forYourPleasurePage from "../../resources/for-your-pleasure-screen.png";
import icon from "../../resources/catalog-screen__icon.png";

import "./app.scss";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [
				{ id: 1, name: "AROMISTICO Coffee 1 kg", icon: icon, type: "Brazil", price: 6.99 },
				{ id: 2, name: "AROMISTICO Coffee 2 kg", icon: icon, type: "Kenya", price: 6.99 },
				{
					id: 3,
					name: "AROMISTICO Coffee 5 kg",
					icon: icon,
					type: "Columbia",
					price: 6.99,
				},
				{ id: 4, name: "AROMISTICO Coffee 3 kg", icon: icon, type: "Brazil", price: 6.99 },
				{ id: 5, name: "AROMISTICO Coffee 4 kg", icon: icon, type: "Brazil", price: 6.99 },
				{
					id: 6,
					name: "AROMISTICO Coffee 6 kg",
					icon: icon,
					type: "Columbia",
					price: 6.99,
				},
			],
			search: "",
			filter: "all",
		};
	}

	onSearch = (value) => {
		this.setState({ search: value });
	};

	onFilter = (name) => {
		this.setState({ filter: name });
	};

	search = (data, value) => {
		if (value === undefined) {
			return data;
		}

		return data.filter((item) => {
			return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
		});
	};

	filter = (data, value) => {
		switch (value) {
			case "brazil":
				return data.filter((item) => item.type === "Brazil");
			case "kenya":
				return data.filter((item) => item.type === "Kenya");
			case "columbia":
				return data.filter((item) => item.type === "Columbia");
			default:
				return data;
		}
	};

	render() {
		const { cards, search, filter } = this.state;
		const coffePage = cards.map((item) => {
			return (
				<Route
					key={item.id}
					exact
					path={`/our-coffee/${item.id}`}
					element={<CoffeePage item={item} />}
				/>
			);
		});
		return (
			<div className="App">
				<Router>
					<Header />
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route
							exact
							path="/our-coffee"
							element={
								<OurCoffeePage
									data={this.filter(this.search(cards, search), filter)}
									img={ourCoffeePageImage}
									title="Our Coffee"
									onSearch={this.onSearch}
									onFilter={this.onFilter}
									filter={filter}
								/>
							}
						/>
						<Route
							exact
							path="/for-your-pleasure"
							element={
								<OurCoffeePage
									data={this.filter(this.search(cards, search), filter)}
									img={forYourPleasurePage}
									title="For your pleasure"
									onSearch={this.onSearch}
									onFilter={this.onFilter}
									filter={filter}
								/>
							}
						/>
						{coffePage}
					</Routes>
					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;
