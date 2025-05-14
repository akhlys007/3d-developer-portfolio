import React from "react";

/**
 * A variation of the main CTA button with inverted colors.
 * Reuses all animations and layout but visually reversed color scheme.
 */

const ProjectButton = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button-inverted group">
        <div className="bg-circle-inverted" />
        <p className="text-inverted">{text}</p>
        <div className="arrow-wrapper-inverted">
          <img src="/images/arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default ProjectButton;
