import genderIcon from "../assets/images/icon-gender.svg";
import ageIcon from "../assets/images/icon-age.svg";
import muscleIcon from "../assets/images/icon-muscle.svg";
import pregnancyIcon from "../assets/images/icon-pregnancy.svg";
import raceIcon from "../assets/images/icon-race.svg";
import arrowleft from "../assets/images/pattern-curved-line-right.svg";

const Limitations = () => {
  return (
    <section className="wrapper lg:mt-24 space-y-14 md:px-10.5 relative">
      <div className="text-center lg:text-left lg:max-w-141 relative">
        <h2 className="mb-8">Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
        <img src={arrowleft} alt="" className="absolute top-50 right-90" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center mx-auto lg:grid-cols-10 lg:absolute top-0 right-0 pb-20 lg:ml-50 xl:left-10">
        <div className="box space-y-4 lg:col-start-6 lg:col-end-9">
          <h4 className="flex items-center gap-4">
            <img src={genderIcon} alt="" />
            Gender
          </h4>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>

        <div className="box space-y-4 lg:col-start-3 lg:col-end-6">
          <h4 className="flex items-center gap-4">
            <img src={ageIcon} alt="" />
            Age
          </h4>
          <p>
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>

        <div className="box space-y-4 lg:col-start-7 lg:col-end-10">
          <h4 className="flex items-center gap-4">
            <img src={muscleIcon} alt="" />
            Muscle
          </h4>
          <p>
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>

        <div className="box space-y-4  lg:col-start-1 lg:col-end-4">
          <h4 className="flex items-center gap-4">
            <img src={pregnancyIcon} alt="" />
            Pregnancy
          </h4>
          <p>
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>

        <div className="box space-y-4 md:justify-self-center lg:col-start-5 lg:col-end-8">
          <h4 className="flex items-center gap-4">
            <img src={raceIcon} alt="" />
            Race
          </h4>
          <p>
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Limitations;
