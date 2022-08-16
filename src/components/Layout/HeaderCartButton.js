import {useContext, useEffect, useState } from 'react';
import CartContext from '../../store/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const numOfCartItems = items.reduce((currNum, item) => {
        return currNum + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])


    return(
        <button className={btnClasses} onClick={props.onClick}> 
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span> Your Cart</span>
            <span className={classes.badge}>{numOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;