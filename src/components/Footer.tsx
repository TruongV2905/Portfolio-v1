import type { navigate } from "../models/model";

function Footer() {
  const navigateItems: navigate[] = [
    { to: "/#", label: "Home" },
    { to: "/#about", label: "About me" },
    { to: "/#services", label: "Services" },
    { to: "/#projects", label: "Projects" },
    { to: "/#contact", label: "Contact me" },
  ];
  return (
    <footer className="bg-(--accent-color) flex justify-center flex-col items-center p-4">
      <nav className="hidden md:flex text-(--natural-color) w-2/3 justify-center mb-3">
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
      <div className="w-[30%] h-px bg-(--natural-color)" />
      <p className="text-white text-lg">Created by NQT @2025</p>
    </footer>
  );
}

export default Footer;
