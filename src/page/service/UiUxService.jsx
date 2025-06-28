import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import ServiceDetails from "../../components/service/ServiceDetails";
import UiUxServiceDetails from "../../components/service/UiUxServiceDetails";
function UiUxService() {
	return (
		<>
			<BreadCrumb title="UI/UX Design Services" />
			<UiUxServiceDetails />
			{/* <Testimonial /> */}
		</>
	);
}

export default UiUxService;
