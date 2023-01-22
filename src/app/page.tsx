"use client";

import { AppButtonFilter } from "@/components/AppButtonFilter";
import { AppCardItem } from "@/components/AppCardItem";
import { AppInputFilter } from "@/components/AppInputFilter";
import { Loading } from "@/components/Loading";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);

  const handleFilter = (e: any) => {
    console.log("test");
  };

  const fetchPokemon = async () => {
    setLoading(true);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    setLoading(false);
    const data = await res.json();
    setPokemon(data.results);
  };

  const handleSearch = (e: any) => {
    const filteredPokemon = pokemon.filter((item: any) => {
      return item.name.includes(e);
    });

    setPokemon(filteredPokemon);

    if (e === "") {
      fetchPokemon();
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const showMore = () => {
    setLimit(limit + 20);
    fetchPokemon();
  };

  return (
    <section className="home">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Pokedex</h1>

        <p className="text-md">
          Search for a Pokemon by name or using the National Pokédex number.
        </p>

        <div className="grid grid-cols-12 gap-3 my-3">
          <AppInputFilter onSearch={handleSearch}></AppInputFilter>
          {/* <AppButtonFilter></AppButtonFilter> */}
        </div>

        <div className="grid grid-cols-2 gap-3 ">
          {pokemon.map((item: any, index) => (
            <AppCardItem
              key={item.name}
              name={item.name}
              type="Grass"
              image={`https://img.pokemondb.net/artwork/large/${item?.name}.jpg`}
            ></AppCardItem>
          ))}
        </div>

        {/* show more */}
        <div className="flex justify-center">
          {loading ? (
            <Loading></Loading>
          ) : (
            <button onClick={showMore} className="btn btn-ghost btn-block">
              Show More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
