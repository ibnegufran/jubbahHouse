/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RelatedProducts from '../Components/RelatedProducts'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {

  const { productId } = useParams();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
const {addToCart} = useContext(ShopContext);

  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/product/single/${productId}`
      )

      if (response.data.success) {
        setProductData(response.data.product)
        setImage(response.data.product.image[0])
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])

  return productData ? (
  <div className="bg-brand-secondary min-h-screen py-12">

    <div className="max-w-7xl mx-auto px-6">

      <div className="flex gap-12 flex-col lg:flex-row">

        {/* ================== IMAGE SECTION ================== */}
        <div className="flex-1 flex flex-col-reverse gap-4 lg:flex-row">

          {/* Thumbnail Images */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:w-24">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition 
                ${image === item ? "border-brand-accent" : "border-transparent"}`}
                alt=""
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-4">
            <img
              src={image}
              className="w-full h-[500px] object-contain rounded-2xl"
              alt=""
            />
          </div>

        </div>

        {/* ================== INFO SECTION ================== */}
        <div className="flex-1">

          <h1 className="text-3xl font-semibold text-brand-primary">
            {productData.name}
          </h1>

          {/* Gold Divider */}
          <div className="w-20 h-1 bg-brand-accent mt-3 mb-6"></div>

          <p className="text-3xl font-bold text-brand-dark">
            ₹{productData.price}
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            {productData.description}
          </p>

          {/* ================== SIZE SELECTION ================== */}
          <div className="mt-8">
            <p className="font-medium text-brand-primary mb-3">
              Select Age Size
            </p>

            <div className="flex flex-wrap gap-3">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item.ageRange)}
                  className={`px-5 py-2 rounded-md border transition-all duration-300
                  ${
                    item.ageRange === size
                      ? "bg-brand-primary text-white border-brand-primary"
                      : "bg-white border-gray-300 hover:border-brand-accent"
                  }`}
                >
                  {item.ageRange}
                </button>
              ))}
            </div>
          </div>

          {/* ================== ADD TO CART ================== */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="mt-8 w-full md:w-auto bg-brand-primary text-white px-10 py-3 rounded-lg 
            hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-md"
          >
            ADD TO CART
          </button>

          {/* ================== TRUST SECTION ================== */}
          <div className="mt-10 text-sm text-gray-600 space-y-2 border-t pt-6">
            <p>✔ 100% Original Product</p>
            <p>✔ Cash on Delivery Available</p>
            <p>✔ Easy Return within 7 Days</p>
          </div>

        </div>

      </div>

      {/* ================== RELATED PRODUCTS ================== */}
      <div className="mt-20">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>

    </div>

  </div>
) : (
  <div className="flex justify-center items-center h-screen bg-brand-secondary">
    <p className="text-brand-primary text-lg">Loading...</p>
  </div>
);
}

export default Product