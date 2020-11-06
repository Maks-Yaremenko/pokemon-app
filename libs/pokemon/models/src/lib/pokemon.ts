export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface PokemonAbilityResponse extends Array<PokemonAbility> {
  [key: number]: PokemonAbility;
}
