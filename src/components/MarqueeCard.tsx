import React from "react";

function MarqueeCard({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 w-fit h-full bg-transparent mr-10 ">
      <Icon className="w-[50px] h-full  text-white font-black" />
      <span className="text-3xl font-black text-white">{title}</span>
    </div>
  );
}

export default MarqueeCard;
