import { Link } from "react-router-dom"

export const ProductCard = ({ product }) => {
    return (

    <section className="container-fluid ">
        <div className="row justify-content-center mt-4">
            {product.map((product) => (
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
                    <h5 className="card-title card-title-truncate"><Link to={`/products/${product.id}`} className="text-decoration-none text-dark">{product.title}</Link></h5>
                    <p className="card-text">
                    <strong>Precio: ${product.price}</strong>
                    </p>
                </div>
                </div>
            </div>
            ))}
        </div>
    </section>

    )
}