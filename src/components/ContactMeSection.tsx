import { Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";
import IconCard from "./IconCard";
function ContactMeSection() {
  return (
    <section
      id="contact"
      className="flex justify-center items-center flex-col  p-6 
  backdrop-blur-lg bg-linear-to-t from-[#4a70a9]/20 to-transparent shadow-lg "
    >
      <div className="flex justify-center md:justify-start items-center gap-5 mb-7">
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
      <div className="w-full flex justify-center items-center gap-3 md:gap-10 text-white md:text-lg text-sm md:flex-row flex-col">
        <p>
          <Mail className="inline-block md:mr-2" />
          truong0703191624@gmail.com
        </p>
        <p>
          <Phone className="inline-block mr-2" />
          +0703191624
        </p>
      </div>
    </section>
  );
}

export default ContactMeSection;
