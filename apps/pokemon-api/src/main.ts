import * as cors from 'cors';
import { corsConfig } from './app/config/cors';

import App from './app';

// Routes import
import { PokemonRoutes } from './app/routes/pokemon';

// Server config
const app = new App({
  port: process.env.PORT || 4201,
  controllers: [new PokemonRoutes()],
  middleWares: [cors(corsConfig)],
});

app.listen();
