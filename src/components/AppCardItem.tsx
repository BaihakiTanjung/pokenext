"use client";

import Image from "next/image";
import Link from "next/link";
import { capitalizeString } from "@/helpers/string";

type AppCardItemProps = {
  name: string;
  type: string;
  image: string;
};

export const AppCardItem = ({ name, type, image }: AppCardItemProps) => {
  return (
    <Link href="/pokemon/[id]" as={`/pokemon/${name}`}>
      <div className="flex flex-col justify-center h-full gap-3 p-5 align-middle bg-white card">
        <div className="mx-auto card__image">
          <Image width="100" height={100} src={image} alt="Bulbasaur" />
        </div>
        <div className="text-center card__body">
          <h2 className="font-bold card__title">{capitalizeString(name)}</h2>
        </div>
      </div>
    </Link>
  );
};
