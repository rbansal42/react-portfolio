import { useState } from "react";
import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};

		client.create(contact).then(() => {
			console.log("submitted", formData);

			setLoading(false);
			setIsFormSubmitted(true);
		});
	};

	return (
		<>
    {!isFormSubmitted?<h2 className="head-text">Take a Coffee & chat with me</h2>:''}
			{/* <h2 className="head-text">Take a Coffee & chat with me</h2> */}
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img
						src={images.email}
						alt="email"
					/>
					<a
						href="mailto:42.rahulbansal@gmail.com"
						className="p-text"
					>
						42.rahulbansal@gmail.com
					</a>
				</div>
				<div className="app__footer-card">
					<img
						src={images.mobile}
						alt="email"
					/>
					<a
						href="tel:9667545342"
						className="p-text"
					>
						9667545342
					</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<div className="app__footer_form app__flex">
					<div className="app__flex">
						<input
							type="text"
							className="p-text"
							placeholder="Your Name"
							value={name}
							onChange={handleChangeInput}
							name="name"
						/>
					</div>
					<div className="app__flex">
						<input
							type="email"
							className="p-text"
							placeholder="Your Email"
							value={email}
							onChange={handleChangeInput}
							name="email"
						/>
					</div>
					<div>
						<textarea
							name="message"
							value={message}
							className="p-text"
							placeholder="Your Message"
							onChange={handleChangeInput}
						></textarea>
					</div>
					<button
						type="button"
						className="p-text"
						onClick={handleSubmit}
					>
						{loading ? "Sending" : "Send Message"}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">
						Thank you for getting in touch
					</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__Footer"),
	"contact",
	"app__whitebg"
);
