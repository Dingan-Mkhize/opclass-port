import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#ffffff] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/5e0c3639-5b94-40f5-8485-a1785faaf278"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <header className="text-4xl font-bold inline border-b-4 border-[#00bfb2] text-[#000000]">
            Contact
          </header>
          <p className="text-[#4a4c4c] py-4">
            Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>

        <input
        title="name"
          id="inputID"
          className="bg-[#dadfdf] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />

        <input
        title="email"
          id="inputID"
          className="my-4 p-2 bg-[#dadfdf]"
          type="email"
          placeholder="Email"
          name="email"
        />

        <textarea
        title="message"
          id="inputID"
          className="bg-[#dadfdf] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>

        <button className="text-black border-black border-2 hover:bg-[#179e95]  hover:text-[#ffffff] px-4 py-3 my-8 mx-auto flex items-center rounded-full">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
