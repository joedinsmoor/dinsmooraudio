import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Gear = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "gear");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Gear List | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="Gear" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="Gear-container">
						<div className="title Gear-title">
							Gear List:
						</div>

						<div className="subtitle Gear-subtitle">
							Tube Amps, Plugins, Modelers:
                                Peavey 5150
                                Peavey 5150II
                                Mesa Dual Recitifer Revision F
                                Dinsmoor Amplification Mark 1
								Marshall JVM205H
								Mesa Triple Rectifier 3 Channel Non Multi Watt
								Fryette Deliverance
                                Mesa Rectifier Oversized 4x12 w/ UK V30s
                                Eminence Custom 2x12 w/ Black Label G-12T75s
                            Preamps and Converters:
                                Universal Audio Apollo Twin
                                Focusrite Clarett 8Pre
                            Outboard Gear:
                                Rane Dual Channel 48 Band EQ
                                Hairball Audio 1176 Rev C
                            Microphones:
                                Shure SM7B
                                Shure SM57 - 8x
                                Sennheiser MD-421 - 2x
                                Shure Beta 52
                            Monitoring:
                                Kali Audio LP-6
                                Sennheiser HD600
                                Sennheiser HD58x
                                Beyerdynamic DT770 250ohm
						</div>
					</div>

					<div className="socials-container">
						<div className="Gear-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Gear;
