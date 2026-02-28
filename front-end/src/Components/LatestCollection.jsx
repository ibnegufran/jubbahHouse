/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductItem from './ProductItem'

const LatestCollection = () => {

  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10))
      setLoading(false)
    }
  }, [products])

  return (
    <section className="bg-brand-secondary py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-brand-primary tracking-wide">
            Latest <span className="text-brand-accent">Collection</span>
          </h2>

          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>

          <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
            Discover our newest arrivals crafted with elegance and tradition.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {loading
            ? Array(10).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-4 animate-pulse"
                >
                  <div className="w-full h-52 bg-gray-200 rounded-xl"></div>
                  <div className="h-4 bg-gray-200 rounded mt-4 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mt-2 w-1/2"></div>
                </div>
              ))
            : latestProducts.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <ProductItem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              ))
          }

        </div>

      </div>

    </section>
  )
}

export default LatestCollection