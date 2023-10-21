import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="bg-hero-pattern bg-cover bg-center brightness-100 h-[90vh] w-full">
        <div className="flex flex-col pt-[30px] items-center text-center w-[90%] mx-auto  ">
          <div className="bg-slate-50 bg-opacity-75 h-[600px] rounded-md shadow-md mt-10 font-Roboto lg:px-40">
            <h1 className="text-5xl md:text-6xl font-bold mt-40">
              Saving Lives, One Pup at a Time
            </h1>
            <p className="mt-10 text-[18px] lg:text-[20px] ">
              At Pupples Rescue and Board, we are dedicated to providing a safe
              haven for animals in need. Our mission is to rescue, rehabilitate,
              and find loving homes for dogs and cats.
            </p>
            <div className="flex gap-2 mt-20 justify-center font-semibold">
            <button className="bg-[#023047] w-[150px] h-[50px] rounded-md text-white">
            <Link href="/">
            Donate
            </Link>
              
            </button>
            <button className="bg-[#8ECAE6]  w-[150px] h-[50px] rounded-md">
            <Link href="/">
            Adopt
            </Link>
        
            </button>
          </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
