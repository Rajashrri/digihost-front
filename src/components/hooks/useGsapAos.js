import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapAos() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-gsap]");

    elements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    ScrollTrigger.refresh();
  }, []);
}