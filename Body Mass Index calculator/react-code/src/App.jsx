import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Advises from "./components/Advises";
import Limitations from "./components/Limitations";

const App = () => {
  return (
    <div className="w-full">
      <div className="absolute top-0 left-0 h-[42.576rem] bg-linear-to-b from-[#D6FCFE] to-[#D6E6FE] w-full -z-10 rounded-br-[35px] rounded-bl-[35px] lg:rounded-bl-none lg:max-w-[75%]"></div>

      <div className="lg:pl-35">
        <Header />
        <main>
          <Hero />
          <About />
          <Advises />
          <Limitations />
        </main>
      </div>
    </div>
  );
};

export default App;
