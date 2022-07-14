import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {

    return(
        <>
        <header className={classes.header}>
            <h1>Hungry</h1>
            <button>Cart</button>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='table of food'/> 
            </div>
        </header>
        </>
    )
}

export default Header;