import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroExperience from "../components/Models/HeroModels/HeroExperience";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
      {
        y: 50,
        opcaity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut'
      }
    )
  })
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/*LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Hi, I’m Tim, a developer and engineer from Kenya with experience in
            </p>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            embedded systems, cloud architecture, and full-stack web applications.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL*/}
        <figure>
            <div className="hero-3d-layout">
                <HeroExperience/>
            </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
