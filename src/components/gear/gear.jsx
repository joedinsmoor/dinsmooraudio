import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/Gear.css";

const Gear = (props) => {
	const { logo, title, description, releasedate, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="Gear">
				<Link to={link}>
					<div className="Gear-container">
						<div className="Gear-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="Gear-title">{title}</div>
						<div className="Gear-description">{description}</div>
						<div className="Gear-release-date">{releasedate}</div>
						<div className="Gear-link">
							<div className="Gear-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="Gear-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Gear;
