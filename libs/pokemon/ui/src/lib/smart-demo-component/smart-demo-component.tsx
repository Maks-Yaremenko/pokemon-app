import React, { SyntheticEvent, useEffect, useState } from 'react';

import { StickyHeadTable } from '../sticky-head-table/sticky-head-table';
import { PokemonInfo, PokemonInfoProps } from '../pokemon-info/pokemon-info';

import { getPokemon, getPokemons } from '@lib-pokemon/data-access';

import './smart-demo-component.scss';

export const SmartDemoComponent = () => {
  const [dataSource, setDataSource] = useState<any>();
  const [dialogData, setDialogData] = useState<PokemonInfoProps>({
    title: '',
    visibility: false,
    data: null,
  });

  useEffect(() => {
    getPokemons().then((dataSource) => setDataSource(dataSource));
  }, []);

  const nextPage = () => {
    getPokemons(dataSource.next).then((dataSource): void =>
      setDataSource(dataSource)
    );
  };

  const prevPage = () => {
    getPokemons(dataSource.previous).then((dataSource): void =>
      setDataSource(dataSource)
    );
  };

  const onSelected = (event: {
    originalEvent: SyntheticEvent;
    value: any;
  }): void => {
    getPokemon(event.value.url).then((abilities) => {
      setDialogData({
        visibility: true,
        title: `Pokemon name: ${event.value.name}`,
        data: {
          name: event.value.name,
          abilities,
        },
      });
    });
  };

  const dialogOnHide = (): void => {
    setDialogData({ visibility: false });
  };

  return (
    <>
      <StickyHeadTable
        dataSource={dataSource}
        nextPage={nextPage}
        prevPage={prevPage}
        onSelected={onSelected}
        itemsPerPage={20}
      ></StickyHeadTable>
      <PokemonInfo {...dialogData} onHide={dialogOnHide} />
    </>
  );
};
