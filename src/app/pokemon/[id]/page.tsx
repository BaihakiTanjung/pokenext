"use client";

import { useEffect } from "react";
import Image from "next/image";
import { capitalizeString } from "@/helpers/string";
import { useState } from "react";
import Link from "next/link";
import { Loading } from "@/components/Loading";

export default function Detail({ params: { id } }: any) {
  const [pokemon, setPokemon] = useState([]) as any;
  const [loading, setLoading] = useState(false);

  const fetchPokemonDetail = async () => {
    setLoading(true);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setLoading(false);
    const data = await res.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemonDetail();
  }, []);

  return (
    pokemon && (
      <section className="detail">
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="absolute">
              <Link href="/">
                <Image
                  width={25}
                  height={25}
                  src="/assets/icon/back.svg"
                  alt="Search"
                />
              </Link>
            </div>
            <div className="mx-auto text-center">
              <div className="text-3xl font-bold">
                {capitalizeString(pokemon.name)}
              </div>
              <div className="text-xl font-bold">00{pokemon?.id}</div>
            </div>
          </div>
          <div className="mt-5 bg-white shadow-xl card rounded-xl">
            <div className="flex justify-center p-16">
              {loading ? (
                <Loading></Loading>
              ) : (
                <Image
                  width={200}
                  height={200}
                  src={`https://img.pokemondb.net/artwork/large/${pokemon?.name}.jpg`}
                  alt="Search"
                />
              )}
            </div>
          </div>
          <div className="flex gap-5 mt-3 overflow-x-auto text-xl font-bold ">
            <div>Types</div>
          </div>
          <div className="flex gap-5 overflow-x-auto text-2xl font-bold ">
            {pokemon?.types?.map((item: any) => (
              <div key={item.type.name} className="text-center">
                <div className="badge badge-outline">
                  {capitalizeString(item.type.name)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-5 mt-3 overflow-x-auto text-xl font-bold ">
            <div>Forms</div>
          </div>
          <div className="flex gap-5 overflow-x-auto text-2xl font-bold ">
            {pokemon?.forms?.map((item: any) => (
              <template
                key={item.name}
                className="p-3 bg-white shadow-xl card rounded-xl"
              >
                {loading ? (
                  <Loading></Loading>
                ) : (
                  <Image
                    width={100}
                    height={200}
                    src={`https://img.pokemondb.net/artwork/large/${pokemon?.name}.jpg`}
                    alt="Search"
                  />
                )}
              </template>
            ))}
          </div>
          <div className="flex gap-5 mt-3 overflow-x-auto text-xl font-bold ">
            <div>Mega Evolution</div>
          </div>
          <div className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatibus ab similique alias ipsum numquam, consequatur quasi
            necessitatibus aliquid ipsam autem pariatur modi odio ipsa quis
            nihil nesciunt voluptatum aspernatur fuga reiciendis possimus
            ratione illo? Non possimus a ducimus sapiente laborum sunt nobis
            reiciendis consequatur repudiandae dolor repellat saepe, praesentium
            est dicta accusamus. Similique a adipisci possimus voluptas dolor
            dolore, explicabo inventore facilis harum ex hic molestias, maiores
            deserunt dolorem. Temporibus veritatis adipisci, ea excepturi cumque
            ipsum, dicta commodi delectus ut reprehenderit consectetur possimus
            sit, aspernatur modi eum obcaecati totam molestiae cupiditate
            dolorem? Tempore accusamus nesciunt vitae quas blanditiis
            voluptates?
          </div>
        </div>
      </section>
    )
  );
}
