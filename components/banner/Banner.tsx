"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <section className="h-[600px] w-full overflow-hidden">
      <div className="w-screen h-full relative">
        <div className="absolute inset-0 bg-gradient-to-100 z-10"></div>
        <div className="absolute w-[543px] left-[8%] top-[20%] z-20">
          <p className="text-hero">Find your best rental car?</p>
          <p className="mt-[30px] text-headline3">
            Find and book a great experience.
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
