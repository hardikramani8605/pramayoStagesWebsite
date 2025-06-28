import Star2Img from "../../../assets/images/v1/icon/Stars.svg";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
						      Pramayo
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
						
					</h2>
					<p>
					Pramayo is an India-based development and design company, specializing in a range of digital services, including digital marketing. We are committed to providing high-quality, tech-driven, and cost-effective solutions that align with your business objectives while ensuring project satisfaction within your budget.
					</p>
				</div>

				<StoryPhotos />

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
