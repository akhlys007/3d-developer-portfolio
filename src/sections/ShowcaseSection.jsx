import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

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
        <div className="showcaselayout">
        <div ref={rydeRef} className="first-project-wrapper">
  <div className="image-wrapper">
    <img src="/images/project1.png" alt="Full Stack Inventory Management Dashboard" />
  </div>
  <div className="text-content">
    <h2>
      Full Stack Inventory Management Dashboard
      Application
    </h2>
    <p className="text-white-50 md:text-xl">
      A comprehensive full-stack inventory management dashboard built using Next.js, Redux, Node.js, and AWS. This project integrates cutting-edge technologies like Tailwind CSS for styling and Material UI's Data Grid for efficient data management. State management is handled seamlessly using Redux Toolkit and Redux Toolkit Query for optimized data fetching.
    </p>
    <p className="text-white-50 md:text-xl">
      The backend leverages Node.js and Prisma as the ORM for smooth database operations. The application is deployed using AWS services including RDS for database management, EC2 for computing power, and S3 for storage. AWS Amplify handles frontend deployment, while API Gateway facilitates API integration, offering a full-stack, scalable solution.
    </p>
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
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;