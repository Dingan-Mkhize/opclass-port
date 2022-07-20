import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#fff6ed] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/5e0c3639-5b94-40f5-8485-a1785faaf278"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ff9764] text-black">
            Contact
          </p>
          <p className="text-[#7D8E95] py-4">
            Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-black border-black border-2 hover:bg-[#FBE0C3] hover:border-[#ff9764] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
