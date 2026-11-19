import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/newservice.css";
import handyman from"../../public/service-home/handyman-services-01.webp";
import irrigation from "../../public/service-home/commerical irrigation-01.webp";
import community from "../../public/service-home/community-communication-01.webp";
import dust from "../../public/service-home/dust-supperssion.webp";
import electric from "../../public/service-home/electrical-services-01.webp";
import metal from "../../public/service-home/metal-roofing-01.webp";
import road from "../../public/service-home/road-repairs-01.webp";
import skyrise from "../../public/service-home/skyrise-protect-01.webp";
import water from "../../public/service-home/water-treatment-01.webp";

export default function SliderServices() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // AOS is initialized once globally in Layout.astro. Just re-scan so the
    // slide elements this island renders after mount get picked up.
    AOS.refresh();
  }, []);

  if (!mounted) return null;

  const services = [
    {
      name: "Handyman Services",
      img:handyman.src,
      link: "/services/integrated-maintenance-services#handyman-services",
    },
    {
      name: "Road And Driveway Services",
      img:road.src,
      link: "/services/integrated-maintenance-services#road-driveway-repairs",
    },
    {
      name: "Skyrise Protect: High-Rise Rooftop Sealing",
      img:skyrise.src,
      link: "/services/integrated-maintenance-services#skyrise-protect",
    },
    {
      name: "Commercial Metal Roofing Replacement and Upgrading",
      img:metal.src,
      link: "/services/integrated-maintenance-services#commerical-metal-roofing",
    },
    {
      name: "Community Communication Notification Support",
      img:community.src,
      link: "/services/integrated-maintenance-services#community-communication-notification-support",
    },
    {
      name: "Irrigation Services",
      img: "/servicesimages/icon-1.webp",
      link: "/services/irrigation-and-dust-suppression-system",
    },
    {
      name: "Fabrication Services",
      img: "/servicesimages/fabrication-services-01.png",
      link: "/services/integrated-maintenance-services#fabrication-services",
    },
    {
      name: "Dust Suppression Services",
      img:dust.src,
      link: "/services/irrigation-and-dust-suppression-system#dust-supression-services",
    },
    {
      name: "Commercial Irrigation",
      img:irrigation.src,
      link: "/services/irrigation-and-dust-suppression-system#commerical-irrigation",
    },
    {
      name: "Electrical Services",
      img:electric.src,
      link: "/services/integrated-maintenance-services#electrical-services",
    },
    {
      name: "Fire Services",
      img: "/servicesimages/imgi_12_fire-services-01.webp",
      link: "/services/integrated-maintenance-services#fire-services",
    },
    {
      name: "Capital Project (CapEx) Upgrades",
      img: "/servicesimages/imgi_9_capital-project-01.png",
      link: "/services/integrated-maintenance-services#capital-project",
    },
    {
      name: "Cooling Tower Repairs",
      img: "/servicesimages/imgi_10_cooling-tower-01.png",
      link: "/services/integrated-maintenance-services#cooling-tower-repairs",
    },
    {
      name: "Landscape Installation & Repairs",
      img: "/servicesimages/imgi_11_landscape-installation-01.png",
      link: "/services/integrated-maintenance-services#landscape-installation-and-repairs",
    },
    {
      name: "Water Treatment System Design, Installation, and Servicing",
      img:water.src,
      link: "/services/integrated-maintenance-services#water-treatment-system-design-installation-and-services",
    },
    {
      name: "Plumbing Services",
      img: "/servicesimages/imgi_10_plumbing-services-01.webp",
      link: "/services/integrated-maintenance-services",
    },
  ];

  return (
    <section className="section pb-0 services-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">
          <span>Our Services</span>
        </h2>

        <div className="services-carousel">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={4}
            spaceBetween={40}
            grabCursor={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={3000}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <a
                  href={service.link}
                  className="slide-data"
                  
                >
                  <img src={service.img} alt={service.name} loading="eager" fetchpriority="high" />
                  <p>{service.name}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
