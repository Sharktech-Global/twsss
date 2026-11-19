import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/newproject.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import qt from "../../public/Project-images//imgi_26_qt-hotel-critical.webp";
import sydney from "../../public/Project-images/imgi_27_sydney-central-station.webp";
import picton from "../../public/Project-images/imgi_20_Sewage_Treatment_Plant.webp";
import cons from "../../public/Project-images/imgi_21_water.webp";
import landscape from "../../public/Project-images/imgi_22_landscaping.webp";
import bungonia from "../../public/Project-images/imgi_25_bungonia-pumping.webp";
import southern from "../../public/Project-images/imgi_24_southern-highland-water.webp";
import sewer from "../../public/Project-images/imgi_23_sewer-ejector.webp";


export default function SliderProject() {
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
      name: "QT Hotel Critical Plumbing Works", 
      img:qt.src ,
      link: "/projects?show=p8",
    },

    { 
      name: "Sydney Central Station Critical Plumbing Works", 
      img:sydney.src,
      link: "/projects?show=p7",
    },

    { 
      name: "Picton Sewage Treatment Plant Reuse Farm Upgrade", 
      img:picton.src,
      link: "/projects?show=p1",
    },

    {
      name: "Consultation and New Water Standards Writing", 
      img:cons.src,
      link: "/projects?show=p6",
    },

    {
      name: "Landscape Thirlmere Landscape Design & Construct (multi award winning)",
      img: landscape.src,
      link: "/projects?show=p3",
    },

    {
      name: "Sewer Ejector Pump Upgrade",
      img:sewer.src,
      link: "/projects?show=p2",
    },

    {
      name: "Southern Highland Water Treatment Plant",
      img:southern.src,
      link: "/projects?show=p4",
    },

    {
      name: "Bungonia Pumping and Commercial Reverse Osmosis Water Treatment Plant",
      img:bungonia.src,
      link: "/projects?show=p5", 
    }
  ];

  return (
    <section className="services-section peoject">
      <div className="container">

        {/* Left Title + Button */}
        <div className="services-left" data-aos="fade-right">
          <h2 className="section-title">
            <span>Our Projects</span>
          </h2>
          <a
            href="/projects"
            className="services-btn"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Read More
          </a>
        </div>

        {/* Swiper Carousel */}
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
                  className="slide-data1"
                  
                >
                  <img src={service.img} alt={service.name} />
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
