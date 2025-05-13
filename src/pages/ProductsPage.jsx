// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../services/productService'
import { ProductCard } from '../components/ProductCard'


export const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadProducts = async () => {
    setLoading(true)
    setError(null)
    try {
      setProducts(await getAllProducts())
      setLoading(false)
      console.log(products)
    } catch (error) {
      setError("Error fetching products:", error.message)  
      setLoading(false)
      console.error("Error fetching products:", error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className="container-fluid">
      <h1 className="text-center mt-4">Pagina de Productos</h1>
      {loading &&<div class="d-flex justify-content-center pt-5"> 
                <div class="spinner-border text-primary ali" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div> 
                </div>}
      {error && <p className="text-danger text-center">{error}</p>}
      {!loading && !error && products.length === 0 && (
        <p className="text-center">No hay productos disponibles</p>
      )}
      {!loading && !error && products.length > 0 && (
        <p className="text-center">Se encontraron {products.length} productos</p>
      )}
      <ProductCard product={products}></ProductCard>
    </div>
  )
}