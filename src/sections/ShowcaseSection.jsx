import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";


gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    

    <div id="work" ref={sectionRef} className="app-showcase">

      <div className="w-full">
      <TitleHeader
          title="My Projects"
        />
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://github.com/marwa-q/Medistore"><img src="/images/project1.png" alt="Medistore App Interface" />
                </a>
            </div>
            <div className="text-content">
              <h2>
                Medistore E-Commerce Website
              </h2>
              <p className="text-white-50 md:text-xl">
              Medistore is an e-commerce platform designed to sell medical supplies and equipment online. The website offers an organized, user-friendly interface for customers to browse, search, and purchase a variety of medical products securely.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a href="https://github.com/marwa-q/Java_Script_Project">
                <img
                  src="/images/project3.png"
                  alt="Travel booking Platform"
                />
                </a>
              </div>
              <h2>Tripify Travel Booking Web Application</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://github.com/marwa-q/BetterTogether">
                  <img src="/images/project2.png" alt="Volunteer Management Web Platform" />
                </a>
              </div>
              <h2>Grow Volunteer Management Web Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
