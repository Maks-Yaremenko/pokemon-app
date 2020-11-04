import React, { ReactElement, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import './pokemon-info.scss';

import { PokemonAbility } from '@lib-pokemon/models';

/* eslint-disable-next-line */
export interface PokemonInfoProps {
  visibility: boolean;
  onHide?: () => void;
  title?: string;
  data?: {
    name: string;
    abilities: PokemonAbility[];
  };
}

export const PokemonInfo = (props: PokemonInfoProps) => {
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
        <div key={i.ability.name} className="item">
          <div className="content">{i.ability.name}</div>
        </div>
      );
    });
  };

  const listBox = (abilities: PokemonAbility[]): ReactElement => {
    if (!abilities) {
      return null;
    }
    return (
      <>
        <h5 className="ui header">Pokemon abilities:</h5>
        <div className="ui middle aligned divided list">
          {listItem(abilities)}
        </div>
      </>
    );
  };

  return (
    <Dialog
      header={props.title}
      footer={footer}
      visible={visibility}
      style={{ width: '30vw' }}
      modal
      onHide={props.onHide}
    >
      {listBox(props.data?.abilities)}
    </Dialog>
  );
};
