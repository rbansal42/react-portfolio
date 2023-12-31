import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<BsTwitter></BsTwitter>
			</div>
			<div>
				<BsInstagram></BsInstagram>
			</div>
			<div>
				<FaFacebookF></FaFacebookF>
			</div>
		</div>
	);
};

export default SocialMedia;
