import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			"Let Pramayo push your business higher digitally through an attractive and user-friendly interface. Our WordPress and Shopify experts are standing by!",
		icon: "icon-design-tools",
<<<<<<< HEAD
		link:"web-service",
=======
		link:"ui-ux-service",
>>>>>>> 2d186025344fbd93ca1bb1790f8ab21941bccd6e
	},
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description:
			"Want a logo and branding that leave a lasting impression? Pramayo brings your vision to life with creative designs and trendy aesthetics!",
		icon: "icon-branding",
<<<<<<< HEAD
		link:"ui-ux-service",
=======
>>>>>>> 2d186025344fbd93ca1bb1790f8ab21941bccd6e
	},
	{
		id: crypto.randomUUID(),
		title: "Application Development",
		description:
			"Pramayo builds high-performance apps to enhance business efficiency and engagement. Our secure, scalable solutions ensure a seamless user experience.",
		icon: "icon-web",
<<<<<<< HEAD
		link:"application-service",
		
=======
>>>>>>> 2d186025344fbd93ca1bb1790f8ab21941bccd6e
	},
	{
		id: crypto.randomUUID(),
		title: "E-Commerce Development",
		description:
			"We build custom e-commerce stores with secure payments, seamless shipping, and efficient management for a smooth shopping experience.",
		icon: "icon-design-thinking",
	},
	{
		id: crypto.randomUUID(),
		title: "Augmented Reality",
		description:
			"We enhance your brand with immersive Augmented Reality experiences, engaging your audience and creating interactive digital interactions for maximum impact.",
		icon: "icon-design-thinking",
<<<<<<< HEAD
		link:"augmentedreality-service",
=======
>>>>>>> 2d186025344fbd93ca1bb1790f8ab21941bccd6e
	},
	{
		id: crypto.randomUUID(),
		title: "SEO",
		description:
			"We refine your content strategy to attract the right audience and drive conversions. Our SEO experts optimize with targeted keywords for maximum impact.",
		icon: "icon-design-thinking",
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			
		</>
	);
}

export default HomeOne;
