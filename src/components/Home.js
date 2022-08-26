import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#ffffff]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="font-bold text-[#000000]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#1b365d]">
          Prince Mkhize
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#179e95]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#4a4c4c] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building exceptional
          digital experiences. Currently, I’m focused on building responsive
          full-stack web applications.
        </p>
        <div>
          <button className="shadow-md shadow-[#7d7d7d] text-black group border-2 border-[#000000] px-6 py-3 my-2 flex items-center hover:bg-[#179e95] hover:text-[#ffffff] rounded-full">
            <a href="/work">View Work</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
