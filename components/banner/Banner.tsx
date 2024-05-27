"use client";

import Image from "next/image";
import SearchBar from "./search-bar/SearchBar";

const Banner = () => {
  return (
    <section className="relative h-[calc(100vh-60px)] w-full overflow-hidden">
      <div className="w-screen h-full relative">
        <div className="relative pt-6 font-poppins text-center select-none z-10">
          <p className=" text-headline1">Explore, Experience, and Enjoy</p>
          <p className="w-[1130px] mt-4 mx-auto text-headline4">
            Be it a business trip, family vacation, or a spontaneous road trip,
            we provide the cars that take you where you want to go.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white from-0.2% to-transparent to-40% z-[2]"></div>
        <Image
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
          fill
          sizes="100%"
          className="absolute inset-0 object-cover"
        />
      </div>
      <SearchBar />
    </section>
  );
};

export default Banner;
