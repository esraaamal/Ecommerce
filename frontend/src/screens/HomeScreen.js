import React from 'react';
import Products from '../component/Products';
import data from '../data';

export default function HomeScreen(){
    return (
        <div>
        <div className="row center">
        {
          data.products.map((product) => (

            <Products key={product._id} product={product}> </Products>
          ))}

      </div>
      </div>

        );
}