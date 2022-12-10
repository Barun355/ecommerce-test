import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { buyItem, sellItem } from '../redux';

const Product = (props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])


  useEffect(() => {

    const fetchProduct = async () => {
      setLoading(true)
      const response = await fetch(`http://fakestoreapi.com/products/${id}`)
      const product = await response.json()
      setData(product)
      setLoading(false)
    }

    fetchProduct()
    // eslint-disable-next-line
  }, [])

  console.log(data)
  return (
    <div className="d-flex justify-content-center my-4">
      {props.cart}
      <div className="card p-3" style={{ maxWidth: '75%' }}>
        {
          loading ? <Skeleton height={400} width={800} /> : <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center">
              <img src={data.image} className="img-fluid rounded-start" alt={data.title} style={{height: "70%"}} />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="text-start">{data.description}</p>
                <span className="text-start fs-3 fw-bold">${data.price}</span>
                <div className="container d-flex m-2 p-4 gap-3">
                  <button className="btn btn-outline-primary" onClick={props.sellItem}>Buy Now</button>
                  <button className="btn btn-outline-primary" onClick={props.buyItem}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}


const mapDispatchToProps = dispatch =>{
  return {
    buyItem: () => dispatch(buyItem()),
    sellItem: () => dispatch(sellItem())
  }
}

export default connect(null, mapDispatchToProps)(Product)
