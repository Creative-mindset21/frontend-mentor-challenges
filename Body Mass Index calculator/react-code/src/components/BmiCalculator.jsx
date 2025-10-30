import React from "react";

const BmiCalculator = () => {
  return (
    <div className="bmi-container space-y-6 lg:p-8 lg:max-w-120 basis-[50%]">
      <p className="text-fs4 leading-[120%] tracking-[-5%] font-medium text-blue-900">
        Enter your details below
      </p>

      <div className="flex justify-between">
        <div className="flex items-center gap-4 md:basis-[50%]">
          <input
            type="radio"
            name="conversion"
            id="metric"
            className="radio-change"
          />
          <label htmlFor="metric">Metric </label>
        </div>

        <div className="flex items-center gap-4 md:basis-[50%]">
          <input
            type="radio"
            name="conversion"
            id="imperial"
            className="radio-change"
          />
          <label htmlFor="imperial">Imperial</label>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-6 text-left space-y-4">
        <div className="relative space-y-2">
          <label
            htmlFor="height"
            className="inline-block text-gray-500 text-fs7 leading-[150%]"
          >
            Height
          </label>

          <input
            type="number"
            name="height"
            id="height"
            className="number-input lg:py-4"
          />
          <span className="absolute right-[10%] top-[45%]  text-blue-500 text-fs4 leading-[120%] -tracking-[5%] font-medium">
            cm
          </span>
        </div>

        <div className="relative space-y-2">
          <label
            htmlFor="weight"
            className="inline-block text-gray-500 text-fs7 leading-[150%]"
          >
            Weight
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            className="number-input lg:py-4"
          />
          <span className="absolute right-[10%] top-[45%] lg:top-[40%] text-blue-500 text-fs4 leading-[120%] -tracking-[5%] font-medium">
            kg
          </span>
        </div>
      </div>

      <div className="bg-blue-500  rounded-2xl p-8 text-left flex flex-col gap-6 md:flex-row md:items-center justify-between md:rounded-r-full md:rounded-l-2xl">
        <div className="basis[55%] lg:basis-[30%] ">
          <p className="text-fs6 leading-[150%] font-semibold text-white">
            Your BMI is...
          </p>

          <p className="text-fs2 leading-[110%] -tracking-[5%] font-medium lg:text-fs1 text-white">
            23.4
          </p>
        </div>

        <p className="basis-[45%] lg:basis-[70%] text-fs7 text-white">
          Your BMI suggests you're healthy weight. Your ideal weight is between{" "}
          <span className="font-bold">63.3kgs - 85.2kgs.</span>
        </p>
      </div>
    </div>
  );
};

export default BmiCalculator;
