import React, { useEffect, useState } from 'react';
import { Message } from '@lib-pokemon/models';
import { getPokemons } from '@lib-pokemon/data-access';

export const App = () => {
  const [{ message }, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    getPokemons().then((message: Message) => setMessage(message));
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to pokemon-app!</h1>
      </div>
      <div>{message}</div>
    </>
  );
};

export default App;
