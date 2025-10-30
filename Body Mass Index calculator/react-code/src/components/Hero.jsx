import React from "react";
import BmiCalculator from "./BmiCalculator";

const Hero = () => {
  return (
    <section className="mb-8 lg:mb-12 wrapper pt-0">
      <div className="hero gap-8 lg:flex-row items-center">
        <div className="basis-[50%]">
          <h1 className="lg:text-left lg:text-fs1 font-bold lg:mb-8">
            Body Mass <br />
            Index Calculator
          </h1>
          <p className=" md:max-w-171.5 lg:max-w-116.25 text-center lg:text-left">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>

        <BmiCalculator />
      </div>
    </section>
  );
};

export default Hero;
