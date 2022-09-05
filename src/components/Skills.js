import React from "react";
import { Stacks } from "../data";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#ffffff] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-20">
          <header className="text-4xl text-[#000000] font-bold inline border-b-4 border-[#00bfb2] ">
            Skills
          </header>
          <p className="py-4 text-[#4a4c4c]">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
          {Stacks.map((stack) => (
            <div
              className="shadow-md shadow-[#7d7d7d] rounded-md hover:scale-110 duration-500 bg-[#1B365D]"
              key={stack.id}
            >
              <img
                className="w-20 mx-auto"
                src={stack.img}
                alt="skills icons"
              />
              <p className="my-4 text-[#ffffff]">{stack.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
