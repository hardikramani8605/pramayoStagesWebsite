import Logo from "../../assets/images/logo/Pramayo_logo.svg";
import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="aximo-logo-section">
			<div className="container">
				<Link to="/">
					<img src={Logo} alt="Logo" />
				</Link>
			</div>
		</div>
	);
}

export default Header;
