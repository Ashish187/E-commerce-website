import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

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
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts()

    }, [])

    const Loading = () =>{
        return <>
        Loading...
        </>
    }
    const ShowProducts = () =>{
        return (
            <>
            {filter.map((product)=>{
                return (
                    <>
                <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-8" key={product.id} >
                <img src={product.image} class="card-img-top" alt={product.title} height="300px"/>
                <div class="card-body">
                <h5 class="card-title mb-2">{product.title.substr(0,12)}...</h5>
                <p class="card-text fw-bolder">Rs.{product.price}</p>
                <Link to="/" class="btn btn-outline-dark">Go ahead</Link>
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
