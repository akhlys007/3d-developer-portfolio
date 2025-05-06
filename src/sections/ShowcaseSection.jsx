import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const inventoryRef = useRef(null);
  const libraryRef = useRef(null);
  const RydeRef = useRef(null);
  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [inventoryRef.current, libraryRef.current, RydeRef.current];

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
        <div className="showcaselayout">
        <div ref={inventoryRef} className="first-project-wrapper">
  <div className="image-wrapper">
    <img src="/images/project1.png" alt="Full Stack Inventory Management Dashboard" />
  </div>
  <div className="text-content">
    <h2>
      Full Stack Inventory Management Dashboard
      Application
    </h2>
    <p className="text-white-50 md:text-xl">
      A full-stack inventory dashboard built with Next.js, Redux, Node.js, and AWS. Styled using Tailwind CSS, with Material UI's Data Grid for advanced data handling. Redux Toolkit and Query manage state and data fetching.
    </p>
    <p className="text-white-50 md:text-xl">
      The backend uses Node.js and Prisma as the ORM. Deployed with AWS services like RDS, EC2, S3, API Gateway and Amplify for a robust, scalable solution.
    </p>
    <div className="button-grid">
      <a href="https://github.com/akhlys007/inventory-management" target="_blank" rel="noopener noreferrer">
          <div className="cta-button group">
            <div className="bg-circle" />
              <p className="text">Github Repo</p>
            <div className="arrow-wrapper">
              <img src="/images/arrow-right.svg" alt="arrow" />
            </div>
          </div>
      </a>
      <a href="https://main.d1yhhw9mo24p21.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
        <div className="cta-button group">
          <div className="bg-circle" />
            <p className="text">Live Demo</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-right.svg" alt="arrow" />
          </div>
        </div>
      </a>
    </div>
    
  </div>
</div>


          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>The Library Management Platform</h2>
              <div className="button-grid">
                <a href="https://github.com/akhlys007/wildrydes-site" target="_blank" rel="noopener noreferrer">
                    <div className="cta-button group">
                      <div className="bg-circle" />
                        <p className="text">Github Repo</p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-right.svg" alt="arrow" />
                      </div>
                    </div>
                </a>
                <a href="https://main.d1i0h8c42mmdit.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                      <p className="text">Live Demo</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-right.svg" alt="arrow" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="project" ref={RydeRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>Wild Rydes - Ride Sharing App</h2>
              <div className="button-grid">
                <a href="https://github.com/akhlys007/wildrydes-site" target="_blank" rel="noopener noreferrer">
                    <div className="cta-button group">
                      <div className="bg-circle" />
                        <p className="text">Github Repo</p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-right.svg" alt="arrow" />
                      </div>
                    </div>
                </a>
                <a href="https://main.d1i0h8c42mmdit.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                      <p className="text">Live Demo</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-right.svg" alt="arrow" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;