import { pokeapi } from '../apis/pokeapi';

import * as express from 'express';
import { Request, Response } from 'express';

export class PokemonRoutes {
  private router = express.Router();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get('/pokemon', this.getPokemons);
    this.router.get('/pokemon/:id', this.getPokemonAbilities);
  }

  private getPokemons = async function (req: Request, res: Response) {
    try {
      const response = await pokeapi.get('/pokemon');
      res.send(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong, try again later' });
    }
  };

  private getPokemonAbilities = async function (req: Request, res: Response) {
    try {
      const response = await pokeapi.get(`/pokemon/${req.params.id}`);
      res.send(response.data.abilities);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong, try again later' });
    }
  };
}
