import React from "react";
import { Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ProductsPage } from "../pages/ProductsPage"
import { CartPage } from "../pages/CartPage"
import { Navbar } from "../components/Navbar"

export const AppRouter = () => {
    return (
        <> 
            <Navbar />
            <Routes >
                <Route path="/" element={<HomePage />}  />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<h2>404 Not Found</h2>} />
                <Route path="/products/:productId"/>
            </Routes>
        </>
    )
}