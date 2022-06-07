import Search from "./search/search";
import Filter from "./filter/filter";

import "./filter-screen.scss";

const FilterScreen = ({ onSearch, onFilter, filter }) => {
	return (
		<div className="filter-screen">
			<div className="container">
				<div className="filter-screen__wrapper">
					<Search onSearch={onSearch} />
					<Filter onFilter={onFilter} filter={filter} />
				</div>
			</div>
		</div>
	);
};

export default FilterScreen;
