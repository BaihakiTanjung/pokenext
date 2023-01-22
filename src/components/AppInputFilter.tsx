"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const AppInputFilter = (_props: any) => {
  const [search, setSearch] = useState<string>("");

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      _props.onSearch(search);
    }
  };

  return (
    <div className="relative col-span-12">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2">
        <Image
          width={25}
          height={25}
          src="/assets/icon/search.svg"
          alt="Search"
        />
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Name or number"
        className="w-full py-2 pl-10 rounded-lg input"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
