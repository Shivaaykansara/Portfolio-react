import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  useGSAP(() => {
    gsap.from("#title", {
      scrollTrigger: {
        trigger: "#title",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      delay: 0.5,
      duration: 0.5,
      opacity: 0,
      y: -50,
    });

    gsap.from("#project", {
      scrollTrigger: {
        trigger: "#project",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      x: -50,
      stagger: 0.2,
    });
  }, []);
  return (

    <section id="Projects" className="w-full   ">
      <div className="flex flex-col justify-center items-center space-y-8 py-8 lg:py-12 lg:mt-20 ">
        <h1 id="title" className="section-title lg:mb-20">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-20  rounded-2xl w-[80vw]">
          {projects.map((project) => (
            <div id="project" key={project.id} > 
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className=" bg-gray-800 bg-opacity-40 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

      
  );
};

export default Projects;
