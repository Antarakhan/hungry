import { Fragment, useState } from 'react';
import Header from '../src/components/Layout/Header';
import Meals from '../src/components/Meals/Meals';
import Cart from '../src/components/Cart/Cart';

function App() {

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  }

  const handleHideCart = () => {
    setShowCart(false);
  }

  return (
    <Fragment>
      { showCart &&  <Cart onClose={handleHideCart} /> }
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
