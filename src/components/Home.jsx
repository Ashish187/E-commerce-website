import React from 'react'
import './Home.css'
import img1 from '../images/b.jpg'
import img2 from '../images/l.jpg'
import img3 from '../images/phone.jpg'
import Products from './Products'

const Home = () => {
    return (
        <>
        <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="image1" />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="image2" />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="image3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='sale'>
   <h1>SALE IS LIVE NOW</h1>
   <h3>10% instant discount* with Sbi credit card & also on Emi Trxns</h3>
</div>

<Products/>
</div>
        </>
        
    )
}

export default Home
