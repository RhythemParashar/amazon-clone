import React from 'react';
import './CheckoutItem.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../StateProvider';

const CheckoutItem = React.forwardRef(
    ({ Key, title, image, price, rating, hideButton }, ref) => {
        const [{ basket }, dispatch] = useStateValue();

        const removeFromBasket = () => {
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: Key,
            });
        };

        return (
            <div ref={ref} className='checkoutItem'>
                <img className='checkoutItem__image' src={image} alt='' />
                <div className='checkoutItem__info'>
                    <p className='checkoutItem__title'>{title}</p>
                    <p className='checkoutItem__price'>
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>

                    <div className='checkoutItem__rating'>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <StarIcon />
                            ))}
                    </div>

                    {!hideButton && (
                        <button onClick={removeFromBasket}>
                            Remove from basket
                        </button>
                    )}
                </div>
            </div>
        );
    }
);

export default CheckoutItem;
