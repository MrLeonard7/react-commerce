// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../services/productService'


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
    <div className="container-fluid">
      <h2 className="my-4">Página de Productos</h2>
      <p>Productos encontrados: {products.length}</p>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} 
          className="col-auto mb-4"
          style={{height: "319px", width: "206px"}}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top img-fluid object-fit-scale align-self-center border rounded"
                alt={product.title}
                style={{ height: '130px', width: '132px', margin: '23px', }}
              />
              <div className="card-body pt-0">
                <h5 className="card-title ">{product.title}</h5>
                <p className="card-text">
                  <strong>Precio: ${product.price}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}