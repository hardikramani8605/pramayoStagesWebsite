import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<FadeInStaggerTwo>
				<FadeInStaggerTwoChildren>
					<h1>
						<span className="aximo-title-animation">
							Bradning
<<<<<<< HEAD
							
						</span>{" "}
						Web Solutions for Businesses.
                      <img src={StarImg} alt="StarImg" />
=======
							<img src={StarImg} alt="StarImg" />
						</span>{" "}
						Web Solutions for Businesses.

>>>>>>> 2d186025344fbd93ca1bb1790f8ab21941bccd6e
					</h1>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<p>
						{`Our skilled professionals handle your project with expertise in development, design, and digital marketing. Partner with Pramayo and watch your business grow effortlessly!`}
					</p>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<div className="aximo-hero-user-wrap">
						<div className="aximo-hero-user-thumb">
							<div className="aximo-hero-user-thumb-item">
								<img src={User1Img} alt="User1Img" />
							</div>
							<div className="aximo-hero-user-thumb-item">
								<img src={User3Img} alt="User3Img" />
							</div>
							<div className="aximo-hero-user-thumb-item">
								<img src={User2Img} alt="User2Img" />
							</div>
						</div>
						<div className="aximo-hero-user-data">
							<p>Believed by more than a thousand people</p>
						</div>
					</div>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="aximo-call-btn" to="/contact-us">
						Book a free consultation <i className="icon-call"></i>
					</Link>
					<div className="aximo-hero-shape">
<<<<<<< HEAD
						{/* <img src={ShapeImg} alt="ShapeImg" /> */}
=======
						<img src={ShapeImg} alt="ShapeImg" />
>>>>>>> 2d186025344fbd93ca1bb1790f8ab21941bccd6e
					</div>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
