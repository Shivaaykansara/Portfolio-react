// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import ScrollDown from "./ScrollDown";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const heroTimeline = gsap.timeline();
  useGSAP(() => {
    heroTimeline
      .from("#heroTitle", {
        opacity: 0,
        x: -50,
        duration: 0.6,
        delay: 0.5,
        ease: "power3.out",
      })
      .from(
        "#heroName",
        {
          opacity: 0,
          y: -50,
          duration: 0.6,
          color: "white",
          stagger: 0.3,
          ease: "power2.out",
        },
        "-=0.3"
      ) // Overlaps the animation slightly
      .from("#heroRole", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
      .from("#heroDesc", {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "power2.inOut",
      })
      .from("#heroButton", {
        opacity: 0,
        y: 50,
        scale: 0.9, // Adds a slight scaling effect
        duration: 0.6,
      });
  }, []);
  return (
    <section id="Home" className="h-screen flex-center relative">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          id="heroTitle"
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl "
        >
          Namaste I’m{" "}
          <span id="heroName" className="font-allura text-orange-400 ">
            Shubham Kansara.
          </span>
          <br /> A Passionate{" "}
          <span id="heroRole" className="font-allura text-green-400">
            Full Stack Web Developer.
          </span>{" "}
        </h1>
        <p
          id="heroDesc"
          className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
        >
          Here at I specialize in crafting beautiful and functional websites
          using modern technologies.
        </p>
        <div
          id="heroButton"
          className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 gap-2"
        >
          <Link to="#Projects" className=" btn-primary">
            View Projects
          </Link>
          <Link to="#Contact" className="btn-primary">
            Contact Me
          </Link>
        </div>
      </div>

      {/* ScrollDown positioned at the bottom */}
      <div className="absolute bottom-10 left-1/2">
        <ScrollDown />
      </div>
    </section>
  );
};

export default Hero;
