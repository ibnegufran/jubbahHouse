/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));

    },[products]);
    
  return (
    <div className='my-10'>
        <div className="text-center mb-14">

        <h2 className="text-4xl font-semibold text-brand-primary tracking-wide">
          Latest <span className="text-brand-accent">Collection</span>
        </h2>

        {/* Gold Accent Line */}
        <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>

        <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          Discover our newest arrivals crafted with elegance and tradition.
          Premium Omani and Arabic Jubbahs designed for modern style.
        </p>

      </div>

        {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {latestProducts.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm shadow-xl transition duration-300"
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}

      </div>
    </div>
  )
}

export default LatestCollection