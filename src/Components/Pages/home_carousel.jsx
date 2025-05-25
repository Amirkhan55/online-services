import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../App.css";
import website_development from "../../assests/slider_images/website-development.jpg";
import mobile_development from "../../assests/slider_images/mobile-app-development.jpg";
import seo from "../../assests/slider_images/seo.jpg";

const images = [
  {
    url: website_development,
    title: "Web Development",
    description: "Discover our most vibrant and successful campaigns yet.",
    buttonLink: "#",
  },
  {
    url: mobile_development,
    title: "Mobile App Development",
    description: "We build Advanced & modern applications for all performs",
    buttonLink: "#",
  },
  {
    url: seo,
    title: "Social Media Marketing",
    description: "We reach people Not just their browsers",
    buttonLink: "#",
  },
];

function HomeCarousel() {
  return (
    <div className="relative h-[400px]">
      {/* <Carousel
        useKeyboardArrows={true}
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
      > */}
      <Carousel
        useKeyboardArrows={true}
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        transitionTime={800} // Smooth 800ms transition
        emulateTouch
        swipeable
      >
        {images.map((item, index) => (
          <div key={index} className="relative h-[800px]">
            <img
              src={item.url}
              alt={item.title}
              className="object-cover w-full h-[800px]"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-6 text-center text-white h-[800px] transition-opacity duration-700 ease-in-out">
              <h2 className="text-2xl md:text-4xl font-bold mb-3">
                {item.title}
              </h2>
              <p className="mb-5 text-sm md:text-base max-w-xl">
                {item.description}
              </p>
              <a
                href={item.buttonLink}
                className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-full text-white font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
