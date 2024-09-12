import { menuItems, OtherLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      <div className="flex flex-col gap-2 p-0 lg:p-2">
        <h5 className="hidden lg:block text-gray-400 fonr-light my-4 text-xl">
          Menu
        </h5>
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 px-0 lg:px-2"
          >
            <Image src={item.icon} alt={item.label} width={20} height={20} />
            <span className="hidden lg:block">{item.label}</span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2 p-0 lg:p-2">
        <h5 className="hidden lg:block text-gray-400 fonr-light my-4 text-xl">
          Other
        </h5>
        {OtherLinks.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 px-0 lg:px-2"
          >
            <Image src={item.icon} alt={item.label} width={20} height={20} />
            <span className="hidden lg:block">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
