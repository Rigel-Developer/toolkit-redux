import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons =
  (page = 0) =>
  async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    // const pokemons = await fetchPokemons(page);
    // let pokemons = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // pokemons = await pokemons.json();

    //AXIOS
    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
