import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {addCart,removeCart} from '../redux/action/action'

const Cart = () => {
    const state = useSelector((state)=>state.handleCart)
    const dispatch = useDispatch()

    const handleClose = (item) =>{
        dispatch(removeCart(item))
    }

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    
    
    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container">
                    {/* <button className='btn-close float-end' onClick={()=>handleClose()} aria-label='Close'></button> */}
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="200px"/>
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='fw-bold'>Rs.{cartItem.qty} X Rs.{cartItem.price} = Rs.{cartItem.qty * cartItem.price}</p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleClose(cartItem)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark" onClick={()=> handleAdd(cartItem)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Checkout = () => {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }

    const emptyCart = () => {
        return(
        <>
        <div className='my-5 bg-light rounded-3 py-5'>
        <div className="container">
        <div className="row">
            <h3 className='text-center'>Your Cart Is Empty</h3>
        </div>
        </div>
        </div>
        </>
        )
}
    return (
        <>
            {state && state.length!==0 && state.map(cartItems)}
            {state.length === 0 && emptyCart()}
            {state.length !==0 && Checkout()}
        </>
    )
}

export default Cart
