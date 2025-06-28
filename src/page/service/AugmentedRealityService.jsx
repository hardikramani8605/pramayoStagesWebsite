import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import ApplicationServiceDetails from "../../components/service/ApplicationServiceDetails";
import AugmentedRealityServiceDetails from "../../components/service/AugmentedRealityServiceDetails";
import ServiceDetails from "../../components/service/ServiceDetails";
function AugmentedRealityService() {
	return (
		<>
			<BreadCrumb title="Augmented Reality" />
			<AugmentedRealityServiceDetails/>
			{/* <Testimonial /> */}
		</>
	);
}

export default AugmentedRealityService;
