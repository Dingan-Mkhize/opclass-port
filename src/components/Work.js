import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import { Projects } from "../data";
//import realEstate from "../assets/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#4a4c4c] bg-[#ffffff]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-[#00bfb2]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Project 1 */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Projects.map((project) => (
            <div
              style={{ backgroundImage: `url(${WorkImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {project.title}
                </span>
                <div className="pt-8 text-center">
                  <a target="_blank" rel="noopener noreferrer" href={project.link}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
