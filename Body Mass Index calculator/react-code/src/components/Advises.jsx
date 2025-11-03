import React from "react";
import eatingIcon from "../assets/images/icon-eating.svg";
import exerciseIcon from "../assets/images/icon-exercise.svg";
import sleepIcon from "../assets/images/icon-sleep.svg";

const Advises = () => {
  return (
    <section className="wrapper py-12 px-6 bg-linear-to-b from-[hsl(183,95%,98%)] to-[hsl(216,95%,98%)] advise-container lg:grid-cols-3 max-w-[90%] rounded-[2.1875rem] lg:mb-24">
      <div className="flex flex-col md:flex-row md:items-center gap-10 lg:flex-col lg:items-start">
        <img src={eatingIcon} alt="" className="w-16 h-16" />
        <div>
          <h3>Healthy eating</h3>
          <p>
            {" "}
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-10 lg:flex-col lg:items-start">
        <img src={exerciseIcon} alt="" className="w-16 h-16" />
        <div>
          <h3>Regular exercise</h3>
          <p>
            {" "}
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-10 lg:flex-col lg:items-start">
        <img src={sleepIcon} alt="" className="w-16 h-16" />
        <div>
          <h3>Adequate sleep</h3>
          <p>
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advises;
