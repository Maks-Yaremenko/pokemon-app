import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';

import { corsConfig } from './app/configs/cors';

// Routes import
import { addPokemonRoutes } from './app/routes/pokemonRoutes';

const app = express();

// Middlewares
app.use(cors(corsConfig));
app.use(express.static(path.join('dist/apps/pokemon-app')));

// Routes
addPokemonRoutes(app);

// Server launch configs
const port = process.env.port || 4201;

const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});

server.on('error', (err) => {
  console.log('Server error:', err);
});
