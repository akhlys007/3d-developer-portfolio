import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const patientRef = useRef(null);
  const aws_ci_cd_projectRef = useRef(null);
  const inventoryRef = useRef(null);
  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [patientRef.current, aws_ci_cd_projectRef.current, inventoryRef.current];

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
        <div ref={patientRef} className="first-project-wrapper">
          <div className="image-wrapper">
            <img src="/images/project1.png" alt="Full Stack Inventory Management Dashboard" />
          </div>
          <div className="text-content">
          <h2>
            Microservices-Based Patient Management System
          </h2>
          <p className="text-white-50 md:text-xl">
            Currently building a production-ready healthcare system built with Spring Boot and Docker using a microservices architecture. Each service handles a core function like patients, billing, or authentication.
          </p>
          <p className="text-white-50 md:text-xl">
            Services communicate via gRPC and Kafka as a message broker. The system is deployed using AWS tools like ECS, MSK, RDS, and API Gateway, with full authentication and integration testing.
          </p>
            <div className="button-grid">
              <a href="https://github.com/akhlys007/patient-management/" target="_blank" rel="noopener noreferrer">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                      <p className="text">Github Repo</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-right.svg" alt="arrow" />
                    </div>
                  </div>
              </a>
              {/* <a href="https://main.d1yhhw9mo24p21.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="cta-button group">
                  <div className="bg-circle" />
                    <p className="text">Live Demo</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-right.svg" alt="arrow" />
                  </div>
                </div>
              </a> */}
            </div>
            
          </div>
        </div>


          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={aws_ci_cd_projectRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="AWS CI/CD Nodejs App"
                />
              </div>
              <h2>AWS CI/CD Pipeline Nodejs App</h2>
              <div className="button-grid">
                <a href="https://github.com/akhlys007/ci-cd-pipeline-project" target="_blank" rel="noopener noreferrer">
                    <div className="cta-button group">
                      <div className="bg-circle" />
                        <p className="text">Github Repo</p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-right.svg" alt="arrow" />
                      </div>
                    </div>
                </a>
                <a href="nodejs-server-alb-1-1198286681.eu-north-1.elb.amazonaws.com" target="_blank" rel="noopener noreferrer">
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

            <div div className="project" ref={inventoryRef}>
          <div className="image-wrapper bg-[#dbfeff]">
            <img src="/images/project3.png" alt="Full Stack Inventory Management Dashboard" />
          </div>
          <div className="text-content">
            <h2>
              Full Stack Inventory Management Dashboard
              Application
            </h2>
            {/* <p className="text-white-50 md:text-xl">
              A full-stack inventory dashboard built with Next.js, Redux, Node.js, and AWS. Styled using Tailwind CSS, with Material UI's Data Grid for advanced data handling. Redux Toolkit and Query manage state and data fetching.
            </p>
            <p className="text-white-50 md:text-xl">
              The backend uses Node.js and Prisma as the ORM. Deployed with AWS services like RDS, EC2, S3, API Gateway and Amplify for a robust, scalable solution.
            </p> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;