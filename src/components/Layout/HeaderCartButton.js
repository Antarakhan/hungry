import {useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numOfCartItems = cartCtx.items.reduce((currNum, item) => {
        return currNum + item.amount;
    }, 0);


    return(
        <button className={classes.button} onClick={props.onClick}> 
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span> Your Cart</span>
            <span className={classes.badge}>{numOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;