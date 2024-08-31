import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#", label: "AnaSayfa" },
    { href: "#Projects", label: "Projeler" },
    { href: "#Skills", label: "Yetenekler" },
    { href: "#Accounts", label: "İletişim" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <header className="container mx-auto flex justify-between items-center h-24 px-5 md:px-8 z-50">
        <h1 className="text-white font-bold text-3xl tracking-wider">
          isminiz
        </h1>
        <OutsideClickHandler onOutsideClick={() => setNav(false)}>
          <nav
            className={`md:static fixed inset-y-0 right-0 transform ${
              nav ? "translate-x-0" : "translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out bg-gray-900/90 md:bg-transparent w-72 md:w-auto md:flex items-center backdrop-blur-md md:backdrop-blur-none`}
          >
            <ul className="flex flex-col md:flex-row md:gap-10 p-8 md:p-0">
              {menuItems.map((item) => (
                <li key={item.href} className="mb-6 md:mb-0">
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </OutsideClickHandler>
        <div className="flex items-center gap-6">
          <button
            className="md:hidden text-white focus:outline-none transition-transform duration-200 hover:scale-110"
            onClick={() => setNav(!nav)}
          >
            {nav ? <IoMdClose size={28} /> : <RxHamburgerMenu size={28} />}
          </button>
          <button className="hidden md:block bg-green-500 px-5 py-2.5 rounded-full text-white hover:bg-green-600 transition-all duration-200 transform hover:scale-105 font-medium">
            TR/EN
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
