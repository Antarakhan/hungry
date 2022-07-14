import React from 'react';
import Header from '../src/components/Layout/Header';
import Meals from '../src/components/Meals/Meals';

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
