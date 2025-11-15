import Marquee from "react-fast-marquee";
import MarqueeCard from "./MarqueeCard";
import { FaReact, FaJava } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io5";
import { RiBootstrapFill } from "react-icons/ri";
import { IoIosGitMerge } from "react-icons/io";
import { DiMongodb, DiMsqlServer, DiMysql, DiRedis } from "react-icons/di";
import { GrDocker } from "react-icons/gr";
import { SiSpring } from "react-icons/si";
function InfiniteLogo() {
  const techList = [
    { icon: FaReact, title: "ReactJS" },
    { icon: TbBrandNextjs, title: "Next.js" },
    { icon: SiTypescript, title: "TypeScript" },
    { icon: BiLogoTailwindCss, title: "Tailwind CSS" },
    { icon: IoLogoJavascript, title: "JavaScript" },
    { icon: RiBootstrapFill, title: "Bootstrap" },
    { icon: IoLogoSass, title: "Sass" },
    { icon: IoIosGitMerge, title: "Git" },
    { icon: DiMongodb, title: "MongoDB" },
    { icon: DiMysql, title: "MySQL" },
    { icon: DiMsqlServer, title: "SQL Server" },
    { icon: GrDocker, title: "Docker" },
    { icon: DiRedis, title: "Redis" },
    { icon: FaJava, title: "Java" },
    { icon: SiSpring, title: "SpringBoot" },
  ];

  return (
    <Marquee
      className="bg-linear-to-r from-(--highlight-color) to-(--accent-color) py-4"
      speed={100}
      gradient={false}
    >
      {techList.map((tech, index) => (
        <div key={index} className="mx-3">
          <MarqueeCard icon={tech.icon} title={tech.title} />
        </div>
      ))}
    </Marquee>
  );
}

export default InfiniteLogo;
