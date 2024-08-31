import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 
          inline-flex items-center p-3 rounded-full shadow-lg 
          text-white transition-all duration-300 ease-in-out 
          focus:outline-none focus:ring-2 focus:ring-offset-2
        `}
        aria-label="Scroll to top"
      >
        <FaChevronUp className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
