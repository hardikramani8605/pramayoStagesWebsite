import Video from "./Video";
import Star2Img from "../../../assets/images/v1/icon/Stars.svg";
import AboutCounter from "./AboutCounter";

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="aximo-title-animation">
								We make your 
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star2Img" />
									</span>
								</span>{" "}
								business shine
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
							Pramayo's experienced team in development, design, and marketing crafts effective strategies to establish a robust digital presence for your business.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
                        
						<Video />
					</div>
					<div className="col-lg-4">
						<AboutCounter />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
