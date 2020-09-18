import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p className='order__time'>
                {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
            </p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>

            {order.data.basket.map((item) => (
                <CheckoutItem
                    Key={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    hideButton
                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <h3 className='order__total'>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />
        </div>
    );
};

export default Order;
