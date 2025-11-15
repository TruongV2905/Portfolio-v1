import { Facebook, Github, Linkedin } from "lucide-react";
import IconCard from "./IconCard";
import { useScrollTrigger } from "../hook/useScrollTrigger";

function AboutMeSection() {
  const { ref, scrolled } = useScrollTrigger();

  return (
    <section
      ref={ref}
      id="about"
      className="container mx-auto my-5 py-20 px-1 w-full h-screen flex items-end justify-center space-x-6"
    >
      <div className="w-2/5  h-fit ">
        <h4
          className={`text-xl mb-4 text-gray-400 ${
            scrolled ? "animate__animated animate__bounceInLeft" : ""
          }`}
        >
          Hi I'm Truonq
        </h4>
        <h2
          className={`text-5xl font-black bg-linear-to-r from-(--highlight-color) to-(--natural-color) bg-clip-text text-transparent mb-3 ${
            scrolled ? "animate__animated  animate__pulse" : ""
          }`}
        >
          Front-end / Back-end developer
        </h2>
        <p
          className={`text-md text-gray-500 mb-3 ${
            scrolled ? "animate__animated  animate__slideInUp" : ""
          }`}
        >
          I'm a passionate developer studying at FPT University HCMC, focused on
          building efficient and user-friendly web applications. I enjoy solving
          complex problems and continuously learning new technologies.
          Currently, I'm deepening my skills in the React ecosystem and building
          robust backend services with Spring Boot. I'm always open to
          connecting, sharing ideas, and exploring new opportunities.
        </p>
        <div className="flex justify-start items-center gap-5 mb-7">
          <IconCard
            icon={Facebook}
            href="https://www.facebook.com/truong.nguyen.452928/"
          />
          <IconCard
            icon={Linkedin}
            href="https://www.linkedin.com/in/truong-nguyen-397038355/"
          />
          <IconCard icon={Github} href="https://github.com/TruongV2905" />
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=truong0345218921@gmail.com&su=Hiring%20Inquiry&body=Hi,%20I'm%20interested%20in%20working%20with%20you."
          className={`bg-(--highlight-color) h-10 text-(--natural-color) flex items-center justify-center px-5 rounded-4xl cursor-pointer font-semibold duration-300 hover:bg-(--accent-color)  text-center ${
            scrolled ? "animate__animated  animate__pulse" : ""
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire me
        </a>
      </div>
      <div className="w-3/5 flex justify-center items-center h-full relative overflow-hidden">
        {/* Blue Shadow Behind */}
        <div className="absolute w-[65%] h-[65%] bg-blue-500 blur-3xl opacity-40 rounded-full" />

        {/* Image */}
        <img
          src="/public/person.png"
          alt=""
          className="w-[90%] object-cover object-center h-auto relative z-1"
        />
        <div className="absolute w-[15%] h-[15%] bg-blue-500 blur-3xl opacity-70 left-[15%] top-[83%] rounded-full z-2" />
      </div>
    </section>
  );
}

export default AboutMeSection;
