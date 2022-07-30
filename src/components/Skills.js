import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#ffffff] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <header className="text-4xl text-[#000000] font-bold inline border-b-4 border-[#00bfb2] ">
            Skills
          </header>
          <p className="py-4 text-[#4a4c4c]">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1B365D]">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 text-[#ffffff]">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1B365D]">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 text-[#ffffff]">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1B365D]">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 text-[#ffffff]">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1B365D]">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 text-[#ffffff]">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1B365D]">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 text-[#ffffff]">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1B365D]">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 text-[#ffffff]">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1B365D]">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4 text-[#ffffff]">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#1B365D]">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 text-[#ffffff]">TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
