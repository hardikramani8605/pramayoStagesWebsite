import LogoWhiteImg from "../../../assets/images/logo/Pramayo_logo.svg";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="">
						<img src={LogoWhiteImg} alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2025, All Rights Reserved by Pramayo</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
