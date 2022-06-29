import { useEffect, useState } from "react";

const useOnScroll = (): boolean => {
  const [scrolled, setScrolled] = useState(false);
  const stickNavbar = () => {
    if (window !== undefined) {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return scrolled;
};
export default useOnScroll;
