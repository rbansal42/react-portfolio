import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div
				id={idName}
        width="100%"
				className={`app__container ${classNames}`}
			>
				<SocialMedia />
				<div className="app__wrapper app__flex">
					<Component />

					<div className="copyright">
						<p className="p-text">@2023 Rahul</p>
						<p className="p-text">All Rights Reserverd.</p>
					</div>
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};

export default AppWrap;
