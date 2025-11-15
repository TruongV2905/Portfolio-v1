import { useScrollTrigger } from "../hook/useScrollTrigger";
import LightRays from "./LightRays";
import "animate.css";
function HeroSection() {
  const { ref, scrolled } = useScrollTrigger();
  return (
    <section ref={ref} className="w-full mx-auto h-screen relative text-white">
      <div className="hidden md:block absolute top-0 left-0 w-full h-full z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffff"
          raysSpeed={0.5}
          lightSpread={0.8}
          rayLength={2.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.5}
          distortion={0.1}
          className="w-full h-full"
        />
      </div>

      {/* Gradient background cho màn nhỏ hơn md */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full z-0">
        {/* Gradient nền */}
        <div className="w-full h-full bg-linear-to-r from-(--highlight-color) to-(--accent-color)"></div>
        {/* Overlay đen mờ */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>

      <div className="flex flex-col justify-center items-center absolute inset-0 text-center px-4">
        <h1 className={`text-5xl font-bold mb-4 ${scrolled ? "animate__animated animate__backInDown" : ""}`}>
          Welcome to My Portfolio
        </h1>
        <p className={`text-xl mb-8 ${scrolled ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}`}>
          Showcasing my projects and skills
        </p>
        <a
          href="#projects"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
