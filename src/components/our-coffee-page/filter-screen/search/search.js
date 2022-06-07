import { Component } from "react";

import "./search.scss";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
	}

	changes = (e) => {
		this.setState({ value: e.target.value });
		this.props.onSearch(e.target.value);
	};

	render() {
		return (
			<div className="search">
				<div className="search__title">Lookiing for</div>
				<input
					className="search__input"
					value={this.state.value}
					type="text"
					placeholder="start typing here..."
					onChange={this.changes}
				/>
			</div>
		);
	}
}

export default Search;
