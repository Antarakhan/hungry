import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props)  => {

    const cartCtx = useContext(CartContext);
    const [showCheckout, setShowCheckout] = useState(false);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length;

    const cartItemRemoveHandler = id =>{
        cartCtx.removeItem(id);

    }

    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item, amount: 1});
    }

    const handleOrder = () => {
        setShowCheckout(true);
    }

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map( item =>  
            <CartItem 
                key={item.id} 
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)} />)}</ul>;

    const modalButtons = 
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
            Close
        </button>
        {hasItems && 
           <button onClick={handleOrder}className={classes.button}>
           Order
       </button>}
    </div>
    

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {showCheckout && <Checkout onCancel={props.onClose}/> }
            {!showCheckout && modalButtons}
        </Modal>
    )

}

export default Cart;