import { PokemonAbility } from '@lib-pokemon-models/pokemon';

export interface DialogPokemonInfoProps {
  visibility: boolean;
  onHide?: () => void;
  title?: string;
  data?: {
    name: string;
    abilities: PokemonAbility[];
  };
}
