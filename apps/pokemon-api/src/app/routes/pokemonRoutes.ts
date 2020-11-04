import { Express } from 'express';
import { pokeapi } from '../apis/pokeapi';

const getPokemons = async function (req, res) {
  try {
    const response = await pokeapi.get('/pokemon');
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, try again later' });
  }
};

const getPokemonById = async function (req, res) {
  try {
    const response = await pokeapi.get(`/pokemon/${req.params.id}`);
    res.send(response.data.abilities);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, try again later' });
  }
};

export const addPokemonRoutes = (app: Express) => {
  app.get('/pokemon', getPokemons);
  app.get('/pokemon/:id', getPokemonById);
};
