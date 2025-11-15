import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const useScrollTrigger = ({
  start = "top 80%",
  end = "bottom 20%",
} = {}) => {
  const ref = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start,
      end,
      onEnter: () => setScrolled(true),
      onEnterBack: () => setScrolled(true),
      onLeave: () => setScrolled(false),
      onLeaveBack: () => setScrolled(false),
    });

    return () => trigger.kill();
  }, [start, end]);

  return { ref, scrolled };
};
