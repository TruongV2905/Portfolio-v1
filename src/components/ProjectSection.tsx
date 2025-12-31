import CardDetail from "./CardDetail";
import Carousel from "./Carousel";

function ProjectSection() {
  return (
    <section id="projects">
      <div className="container mx-auto my-5 py-20 px-1 w-full min-h-screen flex justify-center items-center gap- ">
        <Carousel
          loop={false}
          showPagination={false}
          spaceBetween={5}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          effect="flip"
          speed={1000}
          className="h-[600px] w-full"
          slides={[
            <CardDetail
              imgSrc="/portfolio.png"
              url="https://portfolio-v1-coral-phi.vercel.app/"
              title="Portfolio"
              description="Portfolio is a personal showcase website that highlights my projects, skills, and creative journey. It reflects my passion for design and development through a clean, modern, and interactive experience."
            />,
            <CardDetail
              imgSrc="/emob.png"
              title="EMOB"
              description="EMOB is a centralized EV dealer management system that standardizes workflows for vehicle inquiry, quotation, orders, contracts, and delivery. It unifies dealer, customer, vehicle, inventory, promotion, and loyalty data, providing real-time reports to support efficient operations between manufacturers and dealers."
              url="https://emob.io.vn/"
            />,
            <CardDetail
              imgSrc="/netflix-clone.png"
              url="https://netflixclone-git-main-truongv2905s-projects.vercel.app/"
              title="Netflix-clone"
              description="A Netflix-style web clone that provides a movie-browsing interface with categorized lists, detail pages, and streaming-like previews. The site replicates the core layout, thumbnails, and UI patterns of Netflix to demonstrate front-end design and media-catalog functionality."
            />,
            <CardDetail
              imgSrc="/Fodoshi.png"
              url="https://fodoshi-delta.vercel.app/"
              title="Fodoshi"
              description="A simple website introducing a consignment clothing store that offers stylish, pre-loved fashion items for all ages. The platform allows users to browse, buy, and consign quality clothing easily, promoting sustainability and smart shopping. The project was created by a team of designers and developers working together to build an engaging, user-friendly, and visually appealing e-commerce experience."
            />,
            <CardDetail
              imgSrc="/nummerology.png"
              url="https://numerology-bice.vercel.app/"
              title="Numerology"
              description="A responsive website showcasing a numerology platform that allows users to explore their life paths and personality insights through numbers. The project was created as a showcase product to practice coding and teamwork skills, focusing on an interactive, visually appealing, and user-friendly design."
            />,
            <CardDetail
              imgSrc="/beanmind.png"
              url="https://bean-mind-project.vercel.app/"
              title="Beanmind"
              description="Beanmind is a simple website introducing a math-thinking and STEM center that helps children build strong foundations, practical skills, and creative problem-solving through a combined logical-math and STEM learning approach."
            />,
          ]}
        />
      </div>
    </section>
  );
}

export default ProjectSection;
