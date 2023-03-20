import React from "react";
import AboutImg from "../assets/sergutprofile.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between ">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
             Hi, My Name Is Sergut Tibebu. 
             I am a Frontend Developer. I build beautiful websites with React, React Native and Tailwind CSS. 
          </p>
          <p className="pb-5">
            Skills
            <ul>
              <li>  
                 HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React.js, React Native, Node.js, Express.js
              </li>
              <li>  
                 MongoDB, Firebase, Dbeaver  
              </li>
            </ul>
          </p>
          <p className="pb-5">
           I use GitHub to store my code and version controlling. 
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="w-4/5 md:w-3/5 mx-auto md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;