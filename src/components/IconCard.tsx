function IconCard({
  icon: Icon,
  href,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        w-14 h-14 rounded-xl border border-white/20 
        bg-white/10 backdrop-blur-xl
        flex items-center justify-center 
        transition-all duration-500 group 
        hover:bg-[linear-gradient(to_bottom_right,var(--highlight-color),var(--accent-color))]
        hover:border-transparent  hover:shadow-[0px_0_30px_var(--highlight-color)]
      "
    >
      <Icon
        className="
          w-6 h-6 text-gray-300 transition-all duration-500 
          group-hover:text-white group-hover:rotate-360 group-hover:scale-110
        "
      />
    </a>
  );
}

export default IconCard;
