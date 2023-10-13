import React from "react";
import "./Navbar.scss";
import images from "../../constants/images";
import { navLinks } from "../../constants/constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{navLinks.map((navLink) => (
					<li
						key={`link-${navLink.label}`}
						className="app__flex p-text">
						<div></div>
						<a href={navLink.href}>{navLink.label}</a>
					</li>
				))}
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{
							duration: 0.85,
							ease: "easeIn",
						}}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
						  {navLinks.map((navLink) => (
						  	<li
						  		key={navLink.label}
						  		className="app__flex p-text">
						  		<a
						  			href={navLink.href}
						  			onClick={() => setToggle(false)}>
						  			{navLink.label}
						  		</a>
						  	</li>
						  ))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
