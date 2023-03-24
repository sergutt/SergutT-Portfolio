import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Front-end Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> serguttibebu@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> 703 740 7146
        </p>
          <li>
            <a
              href="https://www.linkedin.com/in/sergut-tibebu-202349a8/view"
              target="_blank"
              without
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
      </div>
    </section>
  );
};

export default Contact;
