import React from 'react';
import './app.scss';

import { SmartDemoComponent } from '@lib-pokemon/ui';

export const App = () => {
  return (
    <div className="ui container app-container">
      <h1>Welcome to pokemon-app!</h1>
      <div className="ui card app-container_card">
        <div className="content">
          <SmartDemoComponent></SmartDemoComponent>
        </div>
      </div>
    </div>
  );
};

export default App;
