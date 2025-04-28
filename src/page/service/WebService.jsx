import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import ApplicationServiceDetails from "../../components/service/ApplicationServiceDetails";
import ServiceDetails from "../../components/service/ServiceDetails";
import WebServiceDetails from "../../components/service/WebServiceDetails";
function WebService() {
	return (
		<>
			<BreadCrumb title="Web Development" />
			<WebServiceDetails/>
			{/* <Testimonial /> */}
		</>
	);
}

export default WebService;
