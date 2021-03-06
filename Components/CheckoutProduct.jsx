import React from 'react'
import './CheckoutProduct.css';
import {useStateValue } from './../StateProvider.js'

function CheckoutProduct({id,title, image,price,rating}) {
    const [{basket}, dispatch ] = useStateValue();
    const removeFromBasket = () => {
        // remove item from basket ...
        dispatch ({
            type: "Remove from Basket",
            id: id,
        });

    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

         <div className="checkoutProduct__info">
             <p className="checkoutProduct__title">
              {title}
             </p>
             <p className="checkoutProduct__price">
                 <small>$</small>
                 <strong>{price}</strong>
             </p>

             <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_)=>(
                    <strong>*</strong>
                ))}
                </div>
                <button onClick={removeFromBasket} className="checkoutProduct__button"> Remove from Basket </button>
         </div>
            
        </div>
    )
}

export default CheckoutProduct
