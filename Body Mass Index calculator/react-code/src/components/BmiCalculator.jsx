import { useState } from "react";

const BmiCalculator = () => {
  const [selectedOption, setSelectedOption] = useState("metric");
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [ftValue, setFtValue] = useState("");
  const [inValue, setInValue] = useState("");
  const [stValue, setStValue] = useState("");
  const [lbsValue, setLbsValue] = useState("");

  const bmiConvertor = () => {
    let bmi = 0;

    if (selectedOption === "metric") {
      const heightInMetres = Number(heightValue) / 100;
      const weightInKg = Number(weightValue);

      if (heightInMetres > 0 && weightInKg > 0) {
        bmi = weightInKg / (heightInMetres * heightInMetres);
      }
    } else {
      const heightInInches = Number(ftValue) * 12 + Number(inValue);
      const weightInLbs = Number(stValue) * 12 + Number(lbsValue);

      if (heightInInches > 0 && weightInLbs > 0) {
        bmi = (weightInLbs * 703) / (heightInInches * heightInInches);
      }
    }

    return bmi ? bmi.toFixed(1) : null;
  };

  const isMetricComplete =
    selectedOption === "metric" && heightValue && weightValue;
  const isImperialComplete =
    selectedOption === "imperial" && ftValue && inValue && stValue && lbsValue;

  const showResult = isMetricComplete || isImperialComplete;

  return (
    <div className="w-full bmi-container space-y-6 lg:p-8 lg:max-w-120">
      <p className="text-fs4 leading-[120%] tracking-[-5%] font-medium text-blue-900">
        Enter your details below
      </p>

      <div className="flex justify-between">
        <div className="flex items-center gap-4 md:basis-[50%]">
          <input
            type="radio"
            name="conversion"
            id="metric"
            value="metric"
            className="radio-change"
            checked={selectedOption === "metric"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="metric">Metric </label>
        </div>

        <div className="flex items-center gap-4 md:basis-[50%]">
          <input
            type="radio"
            name="conversion"
            id="imperial"
            value="imperial"
            className="radio-change"
            checked={selectedOption === "imperial"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="imperial">Imperial</label>
        </div>
      </div>

      {selectedOption === "metric" ? (
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
              value={heightValue}
              className="number-input lg:py-4"
              onChange={(e) => setHeightValue(e.target.value)}
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
              value={weightValue}
              className="number-input lg:py-4"
              onChange={(e) => setWeightValue(e.target.value)}
            />
            <span className="absolute right-[10%] top-[45%] lg:top-[40%] text-blue-500 text-fs4 leading-[120%] -tracking-[5%] font-medium">
              kg
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:gap-6 text-left space-y-4">
          <div className="relative space-y-2">
            <label
              htmlFor="height"
              className="inline-block text-gray-500 text-fs7 leading-[150%]"
            >
              Height
            </label>

            <div className="flex gap-4 relative">
              <input
                type="number"
                name="height"
                id="height"
                className="number-input lg:py-4"
                value={ftValue}
                onChange={(e) => setFtValue(e.target.value)}
              />
              <span className="absolute left-[35%] top-[50%] -translate-y-[50%]  text-blue-500 text-fs4 leading-[120%] -tracking-[5%] font-medium">
                ft
              </span>

              <input
                type="number"
                name="height"
                id="height"
                className="number-input lg:py-4"
                value={inValue}
                onChange={(e) => setInValue(e.target.value)}
              />
              <span className="absolute right-[6%] top-[50%] -translate-y-[50%]  text-blue-500 text-fs4 leading-[120%] -tracking-[5%] font-medium">
                in
              </span>
            </div>
          </div>

          <div className="relative space-y-2">
            <label
              htmlFor="weight"
              className="inline-block text-gray-500 text-fs7 leading-[150%]"
            >
              Weight
            </label>

            <div className="flex gap-4 relative">
              <input
                type="number"
                name="height"
                id="height"
                className="number-input lg:py-4"
                value={stValue}
                onChange={(e) => setStValue(e.target.value)}
              />
              <span className="absolute left-[35%] top-[50%] -translate-y-[50%]  text-blue-500 text-fs4 leading-[120%] -tracking-[5%] font-medium">
                st
              </span>

              <input
                type="number"
                name="height"
                id="height"
                className="number-input lg:py-4"
                value={lbsValue}
                onChange={(e) => setLbsValue(e.target.value)}
              />
              <span className="absolute right-[6%] top-[50%] -translate-y-[50%]  text-blue-500 text-fs4 leading-[120%] -tracking-[5%] font-medium">
                lbs
              </span>
            </div>
          </div>
        </div>
      )}

      {!showResult ? (
        <div className="bg-blue-500 rounded-2xl p-8 text-left md:rounded-r-full md:rounded-l-2xl">
          <h3 className="text-white">Welcome</h3>
          <p className="text-white text-fs7">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      ) : (
        <div className="bg-blue-500  rounded-2xl p-8 text-left flex flex-col gap-6 md:flex-row md:items-center justify-between md:rounded-r-full md:rounded-l-2xl">
          <div className="basis[55%] lg:basis-[40%] ">
            <p className="text-fs6 leading-[150%] font-semibold text-white">
              Your BMI is...
            </p>

            <p className="text-fs2 leading-[110%] -tracking-[5%] font-medium lg:text-fs1 text-white">
              {bmiConvertor()}
            </p>
          </div>

          <p className="basis-[45%] lg:basis-[60%] text-fs7 text-white">
            Your BMI suggests you're healthy weight. Your ideal weight is
            between <span className="font-bold">63.3kgs - 85.2kgs.</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
