"use client";

import Image from "next/image";
import carImage from "@/public/images/car_banner.png";
import SearchBar from "./search-bar/SearchBar";

const Banner = () => {
  return (
    <section className="w-full overflow-hidden ">
      <div className="flex pl-5">
        <Image src={carImage} alt="car image" width={600} height={600} />
        <div className="mt-[100px] w-full">
          <p className="text-hero text-center">Car Rental</p>
          <p className="mt-4 text-headline4 text-center">HELPS YOU</p>
          <div className="ml-3 mt-5">
            <p className="text-[20px] font-medium">
              Here you can rent a car of any brand
            </p>
            <p className="w-[550px] mt-2 font-medium leading-tight">
              The Car Rental revolution: no more paperwork or endless waiting
              lines, premium cars guaranteed and your virtual key directly in
              your smartphone!
            </p>
          </div>
        </div>
      </div>
      <SearchBar />
    </section>
  );
};

export default Banner;
