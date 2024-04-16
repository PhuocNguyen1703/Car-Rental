"use client";

import Image from "next/image";
import React from "react";

interface LogoProps {
  height: number;
  width: number;
}

const Logo: React.FC<LogoProps> = ({ height, width }) => {
  return (
    <Image className="object-cover" alt="logo" height={height} width={width} src="/images/logo.png" />
  );
};

export default Logo;
