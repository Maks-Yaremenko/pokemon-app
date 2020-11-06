import axios from 'axios';

import {
  PokemonAbilityResponse,
  PokemonsResponse,
} from '@lib-pokemon-models/pokemon';

export const getPokemons = (url?: string): Promise<PokemonsResponse> => {
  return axios.get(url ? url : '/pokemon').then((r) => r.data);
};

export const getPokemon = (url: string): Promise<PokemonAbilityResponse> => {
  const idx = url.indexOf('pokemon/');
  return axios.get(url.substring(idx)).then((r) => r.data);
};
