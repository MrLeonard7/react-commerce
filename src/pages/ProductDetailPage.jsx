import { useParams } from "react-router-dom"
import { useState, useEffect, use } from "react"
import { getProductById } from "../services/productService"

export const ProductDetailPage = () => {
const { productId } = useParams()
const [product, setProduct] = useState(null)

useEffect(() => {
    const loadProduct = async () => {
        try {
            const productData = await getProductById(productId)
            setProduct(productData)
        } catch (error) {
            console.error("Error fetching product:", error.message)
        }
    }

    loadProduct()
}, [productId])

return (
    <div className="container my-5">
        {product ? (
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-lg border-0">
                        <div className="row g-0">
                            <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="img-fluid rounded"
                                    style={{ maxHeight: "350px", objectFit: "contain" }}
                                />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h1 className="card-title mb-3">{product.title}</h1>
                                    <p className="card-text text-muted mb-4">{product.description}</p>
                                    <h3 className="text-success mb-4">${product.price}</h3>
                                    <button className="btn btn-primary btn-lg w-100 mb-2">
                                        Añadir al carrito
                                    </button>
                                    <p className="text-secondary small mt-3">
                                        Id del producto: {productId}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                <div className="spinner-border text-primary me-2" role="status" />
                <span>Cargando producto...</span>
            </div>
        )}
    </div>
)
}