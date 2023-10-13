import images from "./images";

export const navLinks = [
	{ href: "#home", label: "home" },
	{ href: "#about", label: "about" },
	{ href: "#work", label: "work" },
	{ href: "#skills", label: "skills" },
	{ href: "#testimonials", label: "testimonials" },
	{ href: "#contact", label: "contact" },
];

export const aboutMe = [
	{
		title: "Web Development",
		description: "I am a good web developer.",
		imgUrl: images.about01,
	},
	{
		title: "Frontend Development",
		description: "I am a good web developer.",
		imgUrl: images.about02,
	},
	{
		title: "Backend Development",
		description: "I am a good web developer.",
		imgUrl: images.about03,
	},
	{
		title: "MERN Stack",
		description: "I am a good web developer.",
		imgUrl: images.about04,
	},
];

export default {
	navLinks,
	aboutMe,
};

export { default as images } from "./images";
