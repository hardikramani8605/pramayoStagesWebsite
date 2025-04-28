import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import ApplicationServiceDetails from "../../components/service/ApplicationServiceDetails";
import ServiceDetails from "../../components/service/ServiceDetails";
function ApplicationService() {
	return (
		<>
			<BreadCrumb title="Application Development" />
			<ApplicationServiceDetails/>
			{/* <Testimonial /> */}
		</>
	);
}

export default ApplicationService;
