import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#ffffff] text-[#4a4c4c]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <header className="text-4xl text-black font-bold inline border-b-4 border-[#179e95]">
              About
            </header>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl text-[#179e95] font-bold">
            <p>Hi. I'm Prince, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-[#4a4c4c]">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
