import React from 'react'
import './Product.css';
import {useStateValue} from '../StateProvider.js';

const Product = ({id,title,price,image,rating }) => {

    const[{basket}, dispatch] = useStateValue();
    console.log(basket);

    const addToBasket = () =>{
        dispatch ({
            type: "Add to Basket",
            item : {
             id: id,
             title: title,
             image: image,
             price: price,
             rating: rating,
            }
        });
        console.log("Works")
    };


    return (
        <div className="product">
            {/* product info  */}
              <div className="product__info">
                    <p> {title} </p>
                     <p className="product__price">
                    <small>$</small>
                     <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                    {Array(rating).fill().map((_, i)=>{
                    <p>*</p>
                    })
                } 
                    </div>
              </div>

              {/* product image  */}

              <img 
              src={image}
              alt=""
              />

              <button onClick={addToBasket}>Add to Basket  </button>
        </div>
    )
}

export default Product
