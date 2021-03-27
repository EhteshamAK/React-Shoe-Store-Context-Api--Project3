import React from 'react'
import './Home.css';
import Product from './Product';
import img from '../Images/jordan.jpg'

const Home = () => {
    return (
        <div className="home">
           <div className="home__container">

              <div className="home__row">
              <Product
              id={1234}
              title="Air borne shoes "
              image={img}
              price={29.99}
              rating={5}
              />
              <Product 
               id={1234}
               title="Air borne shoes "
               image={img}
               price={29.99}
               rating={5}
              />
              </div>

              <div className="home__row">
              <Product 
               id={1234}
               title="Air borne shoes "
               image={img}
               price={29.99}
               rating={5}
              />
              <Product 
               id={1234}
               title="Air borne shoes "
               image={img}
               price={29.99}
               rating={5}
              />
              <Product 
               id={1234}
               title="Air borne shoes "
               image={img}
               price={29.99}
               rating={5}
              />
              </div>

              <div className="home__row">
              <Product 
               id={1234}
               title="Air borne shoes "
               image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4ae42e8d-5c40-421a-87b9-9b5930ca942b/superrep-go-2-training-shoe-x6ngsk.jpg"
               price={199.99}
               rating={5}
              />
              </div>

          </div>
        
        </div>
    )
}

export default Home
