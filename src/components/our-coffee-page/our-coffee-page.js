import HeaderScreen from "./header-screen/header-screen";
import AboutScreen from "./about-screen/about-screen";
import CatalogScreen from "./catalog-screen/catalog-screen";
import FilterScreen from "./filter-screen/filter-screen";

import "./our-coffee-page.scss";

const OurCoffeePage = ({ img, title, data, onSearch, onFilter, filter }) => {
	return (
		<div className="our-coffee">
			<HeaderScreen title={title} />
			<AboutScreen img={img} />
			<FilterScreen onSearch={onSearch} onFilter={onFilter} filter={filter} />
			<CatalogScreen data={data} />
		</div>
	);
};

export default OurCoffeePage;
