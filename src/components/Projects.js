import React from "react";
import reactNative from "../assets/reactNative.png";
import fullStack from "../assets/fullstack.png";
import portfolio from "../assets/portfolio.png";


const Projects = () => {
  const projects = [
    {
      img: fullStack,
      title: "Fullstack project",
      desc: " Blog Post Fullstack App",
      code: "https://github.com/sergutt/Blog-Post-Fullstack-APP",
    },
    
    {
      img: reactNative,
      title: "React Native",
      desc: "Frontend project",
      code: "https://github.com/sergutt/React-Native-Push-Notify-Full-APP",
    },
    {
      img: portfolio,
      title: "My portfolio",
      desc: "React portfolio project",
      code: "https://github.com/sergutt/SergutT-Portfolio",
    },
  ]; 

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my projects. I have built in the apprenticeship with React and React Native. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;