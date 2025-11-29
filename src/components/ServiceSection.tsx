import InfiniteLogo from "./InfiniteLogo";
import TechStack from "./TechStack";

function ServiceSection() {
  return (
    <section id="services">
      <div className="my-5 py-0 md:pt-20  px-1 ">
        <InfiniteLogo />
        <TechStack />
      </div>
    </section>
  );
}

export default ServiceSection;
