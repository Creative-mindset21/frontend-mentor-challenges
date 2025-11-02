import aboutImg from "../assets/images/image-man-eating.webp";

const About = () => {
  return (
    <section className="flex flex-col gap-12 md:flex-row md:items-center wrapper md:pl-0 lg:gap-32.5">
      <div className="basis-[50%]">
        <img src={aboutImg} alt="A man holding sushi with chopsticks" />
      </div>

      <div className="space-y-8 basis-[50%] lg:pt-30">
        <h2>What your BMI result means</h2>
        <p className="lg:max-w-[465px]">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};

export default About;
