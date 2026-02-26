/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets.js';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

const Collection = () => {
  const {products , search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
const [open, setOpen] = useState(false);
  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));      
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));      
    }
    setFilterProducts(productsCopy);
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=> (a.price - b.price)))
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=> (b.price - a.price)))
        break;
    
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category, subCategory,search,showSearch,products]);

  useEffect(()=> {
    sortProduct();
  },[sortType])

  return (
  <div className="bg-brand-secondary min-h-screen py-12 border-t">

    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">

      {/* ================= FILTER SIDEBAR ================= */}
      <div className="lg:w-64 bg-white rounded-2xl shadow-md p-6 h-fit">

        <h2 className="text-xl font-semibold text-brand-primary mb-6">
          Filters
        </h2>

        {/* CATEGORY */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-brand-dark mb-3">
            Categories
          </p>

          <div className="space-y-3 text-sm text-gray-600">
            {["Men", "Kids"].map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="accent-[#0F3D3E]"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* SUBCATEGORY */}
        <div>
          <p className="text-sm font-semibold text-brand-dark mb-3">
            Jubbah Type
          </p>

          <div className="space-y-3 text-sm text-gray-600">
            {["Omani", "Arabic", "Classic", "Modern"].map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  value={type}
                  onChange={toggleSubCategory}
                  className="accent-[#0F3D3E]"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

      </div>

      {/* ================= PRODUCT SECTION ================= */}
      <div className="flex-1">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">

          <h1 className="text-3xl font-semibold text-brand-primary">
            Our Premium Collection
          </h1>

         <div className="relative w-64">
  <button
    onClick={() => setOpen(!open)}
    className="w-full bg-white border border-brand-primary rounded-lg px-4 py-2 flex justify-between items-center shadow-sm hover:border-brand-accent transition"
  >
    <span className="text-brand-dark">
      {sortType === "low-high"
        ? "Price: Low to High"
        : sortType === "high-low"
        ? "Price: High to Low"
        : "Sort by: Relevant"}
    </span>
    <span className="text-brand-primary">▼</span>
  </button>

  {open && (
    <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
      <p onClick={()=>setSortType("relevant")} className="px-4 py-2 hover:bg-brand-accent hover:text-white cursor-pointer">Relevant</p>
      <p onClick={()=>setSortType("low-high")} className="px-4 py-2 hover:bg-brand-accent hover:text-white cursor-pointer">Low to High</p>
      <p onClick={()=>setSortType("high-low")} className="px-4 py-2 hover:bg-brand-accent hover:text-white cursor-pointer">High to Low</p>
    </div>
  )}
</div>

        </div>

        {/* GOLD DIVIDER */}
        <div className="w-20 h-1 bg-brand-accent mb-8"></div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filterProducts.map((item, index) => (
            <div
  key={index}
  className="bg-white rounded-2xl shadow-md hover:shadow-xl 
  transition duration-300 overflow-hidden"
>
              <ProductItem
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>
)
}

export default Collection