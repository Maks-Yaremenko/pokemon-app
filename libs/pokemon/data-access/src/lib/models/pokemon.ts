import { Pokemon, PokemonAbility } from '@lib-pokemon/models';

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface PokemonAbilityResponse extends Array<PokemonAbility> {
  [key: number]: PokemonAbility;
}
