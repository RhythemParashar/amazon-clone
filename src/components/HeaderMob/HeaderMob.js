import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMob.css';
import Burger from './comp/Burger';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStateValue } from '../../StateProvider';

const HeaderMob = () => {
    const [{ basket, user }] = useStateValue();

    return (
        <div className='headerMob'>
            <div className='headerMob__left'>
                <Link to='/'>
                    <img
                        className='headerMob__logo'
                        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                        alt='amazon logo'
                    />
                </Link>
            </div>

            <div className='headerMob__right'>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>

                <Burger />
            </div>
        </div>
    );
};

export default HeaderMob;
