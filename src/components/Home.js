import React from 'react'
import { Link } from 'react-router-dom'
import background from '../assets/background.jpg'
const Home = () => {
    return (
        <>
            <div className="card border-0 ">
                <img src={background} className="card-img" alt="background" style={{height: '87.6vh'}} />
                <div className="card-img-overlay mx-5 my-5">
                    <h5 className="card-title">Welcome To the iMart Sale</h5>
                    <Link to="/products" className="border-1 text-center btn btn-outline-dark">Explore more</Link>
                </div>
            </div>
        </>
    )
}

export default Home
