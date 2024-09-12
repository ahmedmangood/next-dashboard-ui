import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left Side */}
      <div className="scrollbar overflow-y-scroll h-screen w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] border-r">
        <Link
          href={"/"}
          className="flex items-center justify-center my-4 gap-2 "
        >
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={32}
            height={32}
            // className="animate-bounce"
          />
          <span className="text-xl font-bold hidden lg:block text-[#ec547c]">
            ALD<span className="text-black">School</span>
          </span>
        </Link>
        <Menu />
      </div>
      {/* <div>{children}</div> */}
      {/* Right Side */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
