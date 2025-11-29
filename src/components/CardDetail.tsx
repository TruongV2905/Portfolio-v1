import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollTrigger } from "../hook/useScrollTrigger";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function CardDetail({
  imgSrc,
  title,
  description,
  url,
}: {
  imgSrc?: string;
  title?: string;
  description?: string;
  url?: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  const { ref, scrolled } = useScrollTrigger({
    start: "top 85%",
    end: "bottom 15%",
  });

  const isMobile = useMediaQuery({ maxWidth: 1280 });

  const shortDesc =
    description && description.length > 100
      ? description.slice(0, 100) + "..."
      : description || "Project description goes here.";

  return (
    <motion.div
      ref={ref}
      className=" max-w-sm md:max-w-md  w-full aspect-[1/1.1] cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={scrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onClick={() => {
        if (url) {
          window.open(url, "_blank");
        } else {
          navigate("/#projects");
        }
      }}
    >
      <motion.div
        className="bg-linear-to-b from-zinc-900/80 to-black/90 rounded-3xl border-2 h-full border-zinc-700/50 backdrop-blur-xl shadow-2xl"
        whileHover={{ scale: 1.02, borderColor: "rgba(113,113,122,0.6)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Illustration Section */}
        <div className="relative h-[60%] bg-linear-to-b from-zinc-800/50 to-zinc-900/50 overflow-hidden rounded-t-3xl">
          <img
            src={imgSrc}
            alt="Illustration"
            className="object-cover object-center w-full h-full rounded-t-3xl"
          />
        </div>

        {/* Content Section */}
        <motion.div
          className="p-6 bg-black/50 rounded-b-3xl relative h-[40%]"
          initial={{ opacity: 0 }}
          animate={scrolled ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h2
            className="text-white text-2xl mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={scrolled ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {title || "Project Title"}
          </motion.h2>

          <motion.p
            className="text-zinc-400 text-sm leading-relaxed relative"
            initial={{ opacity: 0, x: -20 }}
            animate={scrolled ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {shortDesc}

            {/* Tooltip hiển thị full description */}
            {description &&
              description.length > 100 &&
              showTooltip &&
              !isMobile && (
                <motion.div
                  className="absolute left-1/4 top-1/2 mt-2 w-72 p-3 bg-linear-to-b from-zinc-800/80 to-zinc-900/80 text-zinc-100 text-xs rounded-xl shadow-lg border border-zinc-700 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {description}
                </motion.div>
              )}
          </motion.p>
        </motion.div>

        {/* Bottom gradient accent */}
        <div className="h-1 bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
      </motion.div>
    </motion.div>
  );
}

export default CardDetail;
