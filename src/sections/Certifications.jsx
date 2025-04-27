import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { certifications } from '../constants';

const Certifications = () => {
  useGSAP(() => {
    gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#certifications',
        start: 'top center'
      }
    });
  });

  return (
    <div id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Certifications"
          sub="Credentials That Validate My Skills"
        />
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="tech-card group relative overflow-hidden xl:rounded-2xl rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              
              {/* Animated Background */}
              <div className="tech-card-animated-bg" />

              {/* Card Content */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="image-wrapper mb-4">
                  <img
                    src={cert.imgPath}
                    alt={cert.name}
                    className="w-64 h-64 object-contain"
                  />
                </div>
                <div className="padding-x w-full">
                  <h2 className="text-xl font-semibold">{cert.name}</h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
