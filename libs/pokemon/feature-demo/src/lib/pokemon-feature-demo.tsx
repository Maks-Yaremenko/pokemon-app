import React, { SyntheticEvent, useEffect, useState } from 'react';

import './pokemon-feature-demo.scss';

import {
  PokemonAbilityResponse,
  PokemonsResponse,
} from '@lib-pokemon-models/pokemon';
import {
  getPokemon,
  getPokemons,
} from '@lib-pokemon-data-access/services/pokemon.service';

import {
  DialogPokemonInfo,
  DialogPokemonInfoProps,
  StickyHeadTable,
} from './components';

/* eslint-disable-next-line */
export interface PokemonFeatureDemoProps {}

export const PokemonFeatureDemo = (props: PokemonFeatureDemoProps) => {
  const [loading, setLoading] = useState<boolean>();
  const [dataSource, setDataSource] = useState<PokemonsResponse>();
  const [dialogData, setDialogData] = useState<DialogPokemonInfoProps>({
    title: '',
    visibility: false,
    data: null,
  });
  const pokemonTableColumns = [
    {
      field: 'name',
      header: 'Pokemon name',
      headerClassName: 'sticky-head-table_header-column',
      className: 'sticky-head-table_column',
    },
  ];

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
        columnConfig={pokemonTableColumns}
      ></StickyHeadTable>
      <DialogPokemonInfo {...dialogData} onHide={dialogOnHide} />
    </>
  );
};
