import { Express } from 'express';
import { Message } from '@lib-pokemon/models';

const greeting: Message = { message: 'Welcome to api!' };

export function addPokemonRoutes(app: Express) {
  app.get('/api', function (req, res) {
    res.send(greeting);
  });
}
