import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { useStateValue } from '../../StateProvider';
import FlipMove from 'react-flip-move';

const Checkout = () => {
    const [{ basket, user }] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt=''
                />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout__title'>Your Shoping Basket</h2>
                    <FlipMove leaveAnimation='accordionVertical'>
                        {basket?.map((element) => (
                            <CheckoutItem
                                Key={element.id}
                                title={element.title}
                                price={element.price}
                                rating={element.rating}
                                image={element.image}
                            />
                        ))}
                    </FlipMove>
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
