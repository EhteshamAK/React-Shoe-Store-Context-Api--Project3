import React from 'react'
import './Store.css';
import Subtotal from './Subtotal';
import {useStateValue } from './../StateProvider.js'
import CheckoutProduct from './CheckoutProduct';

const Store = () => {
    const [{basket}] = useStateValue();

    return (
        <div className="store">
            
            <div className="store__left">
                
                <div className="store__ad">

                </div>

                <div>
                    <h2 className="store__title">
                        Your Shopping Basket 
                    </h2>
                    { basket?.map((item) => (
                           <CheckoutProduct 
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating}
                        />
                        ))}
                </div>

            </div>


            <div className="store__right">
              <Subtotal />

            </div>


        </div>
    )
}

export default Store
