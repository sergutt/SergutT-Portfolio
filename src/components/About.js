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
            <ul>
              <li>
                Hi, I'm Sergut Tibebu, a Front-end Developer based in Virginia
                who is passionate about community service. As a mother, spending
                quality time with my family is important to me. I'm also
                dedicated to giving back by volunteering in nonprofit
                organizations, and I take pride in providing school materials to
                young children in my hometown to help them pursue their
                education.
                <li>
                With over two decades of experience in administrative
                duties, customer service, and the travel industry, I bring a
                diverse skill set to my work as a Front-end Developer. I'm
                excited about the potential of technology to positively impact
                people's lives, and I'm eager to contribute to the industry's
                growth and development. If you're looking for a skilled and
                dedicated team player to help your company achieve its goals, I
                would be thrilled to work with you. Please don't hesitate to
                reach out with any questions or inquiries.
                </li> 
              </li>
            </ul>
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
