import { Component } from "react";

import "./filter.scss";

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			btns: [
				{ name: "all", label: "All" },
				{ name: "brazil", label: "Brazil" },
				{ name: "kenya", label: "Kenya" },
				{ name: "columbia", label: "Columbia" },
			],
		};
	}

	render() {
		const { onFilter, filter } = this.props;

		const btn = this.state.btns.map((btn) => {
			const active = btn.name === filter ? " active" : "";
			return (
				<button
					key={btn.name}
					onClick={() => onFilter(btn.name)}
					className={"filter__btn" + active}
				>
					{btn.label}
				</button>
			);
		});

		return (
			<div className="filter">
				<div className="filter__title">Or filter</div>
				{btn}
				{/* <button onClick={() => onFilter("all")} name={"all"} className="filter__btn active">
					All
				</button>
				<button onClick={() => onFilter("brazil")} name={"brazil"} className="filter__btn">
					Brazil
				</button>
				<button onClick={() => onFilter("kenya")} name={"kenya"} className="filter__btn">
					Kenya
				</button>
				<button
					onClick={() => onFilter("columbia")}
					name={"columbia"}
					className="filter__btn"
				>
					Columbia
				</button> */}
			</div>
		);
	}
}

export default Filter;
