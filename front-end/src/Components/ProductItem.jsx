/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);

  return (
    <Link 
  to={`/product/${id}`} 
  className="block text-brand-dark"
>
  
  {/* Image Wrapper */}
  <div className="w-full h-70 bg-white overflow-hidden rounded-t-2xl">
    <img
      className="w-full h-full object-cover hover:scale-110 transition duration-500"
      src={image[0]}
      alt={name}
    />
  </div>

  {/* Content */}
  <div className="p-4">
    <p className="text-sm font-medium text-brand-primary line-clamp-2">
      {name}
    </p>

    <p className="mt-2 text-lg font-semibold text-brand-dark">
      {currency}{price}
    </p>
  </div>

</Link>
  )
}

export default ProductItem