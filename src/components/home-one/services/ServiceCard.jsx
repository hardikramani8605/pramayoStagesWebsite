import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
<<<<<<< HEAD
function ServiceCard({ service: { title, description, icon, link } }) {
	console.log(link);
	
=======
function ServiceCard({ service: { title, description, icon } }) {
>>>>>>> 2d186025344fbd93ca1bb1790f8ab21941bccd6e
	return (
		<div className="aximo-iconbox-wrap">
			<div className="aximo-iconbox-icon">
				<i className={`${icon}`}></i>
			</div>
			<div className="aximo-iconbox-data">
				<h3>{title}</h3>
				<p>{description}</p>
<<<<<<< HEAD
				<Link to={`/${link}`} className="aximo-icon">
=======
				<Link to="/single-service" className="aximo-icon">
>>>>>>> 2d186025344fbd93ca1bb1790f8ab21941bccd6e
					<img src={ArrowRightImg} alt="arrow right" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
