import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
export const Navbar = () => {
    return (
        <nav class="navbar text-bg-primary">
            <div class="container-fluid">
                <Link class="navbar-brand text-white text-uppercase fw-bolder" to="/">
                <FontAwesomeIcon icon={faReact} size="2xl" /> ReactCommerce
                </Link>
                <form class="d-flex" role="search">
                    <Link class="btn  btn btn-primary me-2" to="/products"><FontAwesomeIcon icon={faShop} color="white" size="lg" /></Link>
                    <Link class="btn  btn btn-primary me-2" to="/cart"><FontAwesomeIcon icon={faCartShopping} color="white" size="lg" /></Link>
                </form>
            </div>
        </nav>
    )
}

