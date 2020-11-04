import { pokemons } from '../apis/pokemons';
import { PokemonAbilityResponse, PokemonsResponse } from '../models/pokemon';

export const getPokemons = (url?: string): Promise<PokemonsResponse> => {
  return pokemons.get(url ? url : '/pokemon').then((r) => r.data);
};

export const getPokemon = (url: string): Promise<PokemonAbilityResponse> => {
  const part = 'pokemon/';
  const idx = url.indexOf(part);

  return pokemons.get(url.substring(idx)).then((r) => r.data);
};
