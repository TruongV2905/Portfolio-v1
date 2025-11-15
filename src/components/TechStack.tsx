import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaJava,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiSpringboot,
  SiDotnet,
} from "react-icons/si";
import { useScrollTrigger } from "../hook/useScrollTrigger";

function TechStack() {
  const frontend = [
    { icon: FaHtml5, color: "#E34F26" },
    { icon: FaCss3Alt, color: "#1572B6" },
    { icon: FaSass, color: "#CC6699" },
    { icon: FaJs, color: "#F7DF1E" },
    { icon: SiTypescript, color: "#3178C6" },
    { icon: FaReact, color: "#61DAFB" },
    { icon: TbBrandNextjs, color: "#ffffff" },
    { icon: SiTailwindcss, color: "#06B6D4" },
    { icon: FaBootstrap, color: "#7952B3" },
  ];

  const tools = [
    { icon: SiMongodb, color: "#47A248" },
    { icon: SiRedis, color: "#DC382D" },
    { icon: SiMysql, color: "#00758F" },
    { icon: FaGitAlt, color: "#F05032" },
    { icon: FaDocker, color: "#2496ED" },
  ];

  const backend = [
    { icon: FaJava, color: "#E76F00" },
    { icon: SiSpringboot, color: "#6DB33F" },
    { icon: SiDotnet, color: "#512BD4" },
    { icon: FaNodeJs, color: "#3C873A" },
  ];

  // GSAP ScrollTrigger hooks
  const { ref: frontendRef, scrolled: frontendVisible } = useScrollTrigger();
  const { ref: toolsRef, scrolled: toolsVisible } = useScrollTrigger();
  const { ref: backendRef, scrolled: backendVisible } = useScrollTrigger();

  const container = {
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto w-full min-h-[80vh] flex flex-col items-center justify-center text-white space-y-12">
      {/* Frontend */}
      <div ref={frontendRef} className="flex flex-col items-center space-y-3">
        <motion.div
          className="flex space-x-6"
          variants={container}
          initial="hidden"
          animate={frontendVisible ? "visible" : "hidden"}
        >
          {frontend.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div key={i} variants={item}>
                <Icon
                  size={50}
                  color={tech.color}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Tools */}
      <div ref={toolsRef} className="flex flex-col items-center space-y-3">
        <motion.div
          className="flex space-x-6"
          variants={container}
          initial="hidden"
          animate={toolsVisible ? "visible" : "hidden"}
        >
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div key={i} variants={item}>
                <Icon
                  size={50}
                  color={tool.color}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Backend */}
      <div ref={backendRef} className="flex flex-col items-center space-y-3">
        <motion.div
          className="flex space-x-6"
          variants={container}
          initial="hidden"
          animate={backendVisible ? "visible" : "hidden"}
        >
          {backend.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div key={i} variants={item}>
                <Icon
                  size={50}
                  color={tech.color}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default TechStack;
