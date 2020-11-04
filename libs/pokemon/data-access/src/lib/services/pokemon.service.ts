import { pokemons } from '../apis/pokemons';
import { Message } from '@lib-pokemon/models';

export const getPokemons = (url?: string): Promise<Message> => {
  return pokemons.get(url ? url : '/pokemon').then((r) => r.data);
};

export const getPokemon = (url: string) => {
  const part = 'pokemon/';
  const idx = url.indexOf(part);

  return pokemons.get(url.substring(idx)).then((r) => r.data);
};
