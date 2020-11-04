import React, { SyntheticEvent, useEffect, useState } from 'react';

import { StickyHeadTable } from '../sticky-head-table/sticky-head-table';
import { PokemonInfo, PokemonInfoProps } from '../pokemon-info/pokemon-info';

import {
  getPokemon,
  getPokemons,
  PokemonAbilityResponse,
  PokemonsResponse,
} from '@lib-pokemon/data-access';

import './smart-demo-component.scss';

export const SmartDemoComponent = () => {
  const [loading, setLoading] = useState<boolean>();
  const [dataSource, setDataSource] = useState<PokemonsResponse>();
  const [dialogData, setDialogData] = useState<PokemonInfoProps>({
    title: '',
    visibility: false,
    data: null,
  });

  useEffect(() => {
    getPokemons().then((dataSource: PokemonsResponse) => {
      setDataSource(dataSource);
    });
  }, []);

  const nextPage = (): void => {
    getPokemons(dataSource.next).then((dataSource: PokemonsResponse): void =>
      setDataSource(dataSource)
    );
  };

  const prevPage = (): void => {
    getPokemons(
      dataSource.previous
    ).then((dataSource: PokemonsResponse): void => setDataSource(dataSource));
  };

  const onSelected = (event: {
    originalEvent: SyntheticEvent;
    value: any;
  }): void => {
    setLoading(true);
    getPokemon(event.value.url).then((abilities: PokemonAbilityResponse) => {
      setLoading(false);
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
        loading={loading}
      ></StickyHeadTable>
      <PokemonInfo {...dialogData} onHide={dialogOnHide} />
    </>
  );
};
