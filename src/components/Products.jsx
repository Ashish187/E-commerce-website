import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './Products.css'
import Skeleton from 'react-loading-skeleton'

const Products = () => {

    const [data,setData] = useState([])
    const [filter,setFilter] = useState(data)
    const [loading,setLoading] = useState(false)
    let componentMounted = true

    useEffect(() => {
        const getProducts = async () =>{
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if(componentMounted){
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                // console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts()

    }, [])

    const Loading = () =>{
        return (

        <>
        <div className="col-md-3">
        <Skeleton height={350}/>
         </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
         </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
         </div>
        </>
        )
    }
    const ShowProducts = () =>{
        return (
            <>
            {filter.map((product)=>{
                return (
                    <>
                <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-8" key={product.id} >
                <img src={product.image} className="card-img-top" alt={product.title} height="300px"/>
                <div className="card-body">
                <h5 className="card-title mb-2">{product.title.substr(0,12)}...</h5>
                <p className="card-text fw-bolder">Rs.{product.price}</p>
                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Go ahead</NavLink>
                </div>
            </div>
        </div>
                </>
                )
            })}
            </>
        )
    }

    return (
        <div>
            <div className="container">
                <h1 className='text-center'>All Items</h1>

                <div className="row">
                    {loading ? <Loading/>:<ShowProducts/>}
                </div>
            </div>
        </div>
    )
}

export default Products
