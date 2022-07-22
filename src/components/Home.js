import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#fff6ed]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="font-bold text-[#7D8E95]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-black">
          Prince Mkhize
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ff9764]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#7D8E95] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building exceptional
          digital experiences. Currently, I’m focused on building responsive
          full-stack web applications.
        </p>
        <div>
          <button className="text-black group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-[#FBE0C3] hover:border-[#ff9764]">
            <a href="/work">View Work</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
