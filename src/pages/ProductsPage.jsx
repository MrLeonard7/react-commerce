// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../services/productService'
import { ProductCard } from '../components/ProductCard'


export const ProductsPage = () => {
  const [products, setProducts] = useState([])

  const loadProducts = async () => {
    try {
      setProducts(await getAllProducts())
      console.log(products)
    } catch (error) {
      console.error("Error fetching products:", error.message)  
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <>
      <ProductCard product={products}></ProductCard>
    </>
  )
}