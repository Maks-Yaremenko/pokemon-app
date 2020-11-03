import { pokemons } from '../apis/pokemons';
import { Message } from '@lib-pokemon/models';

export const getPokemons = (): Promise<Message> => {
  return pokemons.get('/api').then((r) => r.data);
};
