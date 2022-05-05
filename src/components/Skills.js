import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
//import FireBase from "../assets/firebase.png";
//import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#fff6ed] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-black font-bold inline border-b-4 border-[#ff9764] ">
            Skills
          </p>
          <p className="py-4 text-[#7D8E95]">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ff9764]">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 text-black">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ff9764]">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 text-black">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ff9764]">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 text-black">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ff9764]">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 text-black">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ff9764]">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 text-black">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ff9764]">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 text-black">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ff9764]">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4 text-black">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#ff9764]">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 text-black">TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
