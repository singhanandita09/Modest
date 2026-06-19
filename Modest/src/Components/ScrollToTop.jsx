import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(true); // always visible for test

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={goTop}
      className="fixed bottom-6 right-6 z-[99999] h-14 w-14 rounded-full bg-[#4B5148] text-3xl text-white shadow-xl"
    >
      ↑
    </button>
  );
}

export default ScrollToTop;