import axios from 'axios';

export const pokemons = axios.create({
  baseURL: 'http://localhost:4201',
});
