import React, { ReactElement, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import { PokemonAbility } from '@lib-pokemon-models/pokemon';
import { DialogPokemonInfoProps } from './dialog-pokemon-info.models';

import './dialog-pokemon-info.scss';

export const DialogPokemonInfo = (props: DialogPokemonInfoProps) => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(props.visibility);
  }, [props.visibility]);

  const footer = (
    <div>
      <Button label="Close" onClick={props.onHide} />
    </div>
  );

  const listItem = (abilities: PokemonAbility[]): ReactElement[] => {
    return abilities.map((i) => {
      return (
        <li key={i.ability.name} className="dialog-pokemon-info_ability-name">
          <span>{i.ability.name}</span>
        </li>
      );
    });
  };

  const listBox = (abilities: PokemonAbility[]): ReactElement => {
    if (!abilities) {
      return null;
    }
    return (
      <div>
        <h5 className="dialog-pokemon-info_ability-list-header">
          Pokemon abilities:
        </h5>
        <ul className={'dialog-pokemon-info_ability-list'}>
          {listItem(abilities)}
        </ul>
      </div>
    );
  };

  return (
    <Dialog
      header={props.title}
      footer={footer}
      visible={visibility}
      style={{ width: '30vw' }}
      modal
      className="dialog-pokemon-info"
      onHide={props.onHide}
    >
      {listBox(props.data?.abilities)}
    </Dialog>
  );
};
