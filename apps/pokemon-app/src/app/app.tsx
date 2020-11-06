import React from 'react';
import './app.scss';

import { PokemonFeatureDemo } from '@pokemon-feature-demo';

export const App = () => {
  return (
    <div className="ui container app-container">
      <h1>Welcome to pokemon-app!</h1>
      <div className="ui card">
        <div className="content">
          <PokemonFeatureDemo></PokemonFeatureDemo>
        </div>
      </div>
    </div>
  );
};

export default App;
