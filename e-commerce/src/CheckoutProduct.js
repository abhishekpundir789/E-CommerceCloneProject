import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
        })
    }
    return (
        <div className="checkoutProduct">
            <img className = 'checkoutProduct__image' src={image} />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}> Remove from Cart </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
