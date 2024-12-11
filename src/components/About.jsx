import { useGSAP } from "@gsap/react";
import { skills } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useGSAP(() => {
    // About Title Animation
    gsap.from("#aboutt", {
      scrollTrigger: {
        trigger: "#aboutt",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      delay: 0.5,
      duration: 0.5,
      opacity: 0,
      y: -50,
    });

    // Skills Grid Animation
    gsap.from("#skills", {
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: -50,
      stagger: 0.2,
    });
  }, []);
  return (
    <section id="About" className="">
      <div
        id="aboutt"
        className=" flex-col space-y-10 flex-center py-8 lg:py-12"
      >
        <h1 className="section-title">About Me</h1>
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
          <p className="mb-6 sm:text-lg font-normal text-gray-200 lg:text-xl sm:px-16 px-8 xl:px-48">
            I am a creative tech enthusiast passionate about web development,
            animation, and 3D design. Skilled in the MERN stack, I love crafting
            engaging digital experiences that blend creativity and technology.
          </p>
        </blockquote>
      </div>
      <div className="flex-center flex-col  space-y-10 ">
        <h1 className="text-4xl font-bold">Skills</h1>
        <div className="grid gap-14 lg:gap-20 row-gap-6 mt-10 grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <div id="skills" key={skill.id} className="text-center">
              <div className="skill-item">
                <img
                  src={skill.logo}
                  alt={skill.title}
                  className="md:w-20 md:h-20 rounded-full"
                />
              </div>
              <h6 className="mb-2 font-semibold leading-5">{skill.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
