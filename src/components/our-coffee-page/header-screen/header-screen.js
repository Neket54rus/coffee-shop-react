import "./header-screen.scss";

const HeaderScreen = ({ title }) => {
	return (
		<div className={title === "Our Coffee" ? "our-coffee__header" : "pleasure__header"}>
			<div className="our-coffee__title">{title}</div>
		</div>
		// <div className="our-coffee__header">
		// 	<div className="our-coffee__title">{title}</div>
		// </div>
	);
};

export default HeaderScreen;
