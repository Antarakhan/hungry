import { useState } from 'react';
import Header from '../src/components/Layout/Header';
import Meals from '../src/components/Meals/Meals';
import Cart from '../src/components/Cart/Cart';
import CartProvider from '../src/store/CartProvider';

function App() {

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  }

  const handleHideCart = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      { showCart &&  <Cart onClose={handleHideCart} /> }
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
