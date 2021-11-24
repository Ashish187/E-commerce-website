import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action/action'
import { NavLink, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import './ProductPage.css'

const ProductPage = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) =>{
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () =>{
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [id])

    const Loading = () =>{
        return (
            <>
        <div className="col-md-5">
        <Skeleton height={300}/>
        </div>
        <div className="col-md-6">
            <Skeleton height={50} width={300}/>
            <Skeleton height={75}/>
            <Skeleton height={25} width={150}/>
            <Skeleton height={50}/>
            <Skeleton height={150}/>
        </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} width="300px" height="300px"/>
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase'>{product.category}</h4>
                    <h1 className='display-5 title'>{product.title}</h1>
                    <p className='fw-bold'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fas fa-star'></i>
                    </p>
                    <h3>Rs.{product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark' onClick={()=>addProduct(product)}>Add To Cart</button>

                    <NavLink to="/cart" className='btn btn-dark mx-3'>Go To Cart</NavLink>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    )
}

export default ProductPage
