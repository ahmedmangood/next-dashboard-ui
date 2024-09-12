import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex gap-2 text-xs ring-1 ring-gray-300 items-center justify-center rounded-full">
        <Image
          src={"/search.png"}
          alt="Search"
          width={14}
          height={14}
          className="m-2"
        />
        <input
          type="text"
          className="outline-none w-[200px] p-2 bg-transparent"
          placeholder="Search..."
        />
      </div>
      {/* User and Icons */}
      <div className="flex gap-3 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="message" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src={"/announcement.png"}
            alt="annoucement"
            width={20}
            height={20}
          />
          <span className="text-xs absolute top-[-9px] right-[-7px] bg-purple-600 rounded-full p-1 w-4 h-4 flex items-center justify-center text-white">
            3
          </span>
        </div>
        <div className="flex flex-col px-6">
          <span className="text-xs leading-3 font-medium">Joun Doe</span>
          <span className="text-[12px] text-gray-400 text-right">Admin</span>
        </div>
        <Image
          src={"/avatar.png"}
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
