import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { navigate } from "../models/model";
import SendEmailButton from "./SendEmailButton";
import { motion } from "framer-motion";

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navigateItems: navigate[] = [
    { to: "/#", label: "Home" },
    { to: "/#about", label: "About me" },
    { to: "/#services", label: "Services" },
    { to: "/#projects", label: "Projects" },
    { to: "/#contact", label: "Contact me" },
  ];

  return (
    <header className="px-6 py-4 bg-[rgba(0,0,0,.65)] fixed  top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between max-w-[1250px] mx-auto">
        {/* Logo */}
        <h1 className="text-white font-bold text-3xl">NQT</h1>

        <nav className="hidden md:flex text-(--natural-color) w-2/3 justify-center">
          <ul className="flex justify-between items-center gap-10 text-[17px]">
            {navigateItems.map((item) => (
              <li
                key={item.to}
                className={`cursor-pointer hover:text-(--highlight-color) duration-300 ${
                  location.pathname === item.to
                    ? "text-(--highlight-color) font-semibold"  
                    : ""
                }`}
              >
                <a href={item.to}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block w-fit">
          <SendEmailButton />
        </div>

        {/* Button + Menu toggle (mobile) */}
        <div className="flex md:hidden items-center gap-4">
          <button
            className=" text-(--natural-color)"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="md:hidden bg-[rgba(0,0,0,.65)] text-(--natural-color) absolute top-full left-0 w-full py-5 px-6 flex flex-col text-lg "
        >
          <ul className="flex flex-col w-full justify-center items-start">
            {navigateItems.map((item) => (
              <li className="w-full h-fit text-center">
                <a
                  key={item.to}
                  href={item.to}
                  className={`hover:text-(--highlight-color)  w-full inline-block py-2.5 duration-300 ${
                    location.pathname === item.to
                      ? "text-(--highlight-color) font-semibold"
                      : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <SendEmailButton />
        </motion.div>
      )}
    </header>
  );
}

export default Header;
