import axios from 'axios';
import { environment } from '@pokemon-app/environments/environment';

export const pokemons = axios.create({
  baseURL: environment.production
    ? window.location.origin
    : `http://localhost:4201`,
});
