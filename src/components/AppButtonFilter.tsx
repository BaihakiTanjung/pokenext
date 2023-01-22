"use client";

import Image from "next/image";

type AppButtonFilterProps = {
  onClick?: () => {};
};

export const AppButtonFilter = ({ onClick }: AppButtonFilterProps) => {
  const handleClick = () => {
    console.log("test");
  };
  return (
    <button onClick={handleClick} className="col-span-4 rounded-lg btn">
      <Image
        width={25}
        height={25}
        src="/assets/icon/filter.svg"
        alt="Search"
      />
    </button>
  );
};
