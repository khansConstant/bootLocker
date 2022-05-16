
import React from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delCart } from '../../redux/action/index'

const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delCart(item))
    }


    const cartItems = (product) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(product)} className="btn-close float-end" aria-label='close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="200px" />
                            <h1>{product.title}</h1>
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary w-25">Proceed To Checkout</NavLink>
                </div>
            </div>
        )
    }
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}

        </>
    )
}
export default Cart;
