import React from "react";
import { navLinks } from "../constants/constants";

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{navLinks.map((navLink, index) => (
				<a
					href={navLink.href}
					key={navLink.label + index}
					className="app__navigation-dot"
					style={
						active === navLink.label
							? { backgroundColor: "#313BAC" }
							: {}
					}
				/>
			))}
		</div>
	);
};

export default NavigationDots;
