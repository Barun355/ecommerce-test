import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { fetchData } from '../redux'
import { connect } from 'react-redux'

const Products = ({ fetchProducts, products }) => {
    let { loading, data } = products

    const [currentProduct, setCurrentProduct] = useState('all')
    const [filter, setFilter] = useState(data)
    const [componentDidMount, setComponentDidMount] = useState(false)

    useEffect(() => {
        fetchProducts();
        setComponentDidMount(true)
        // eslint-disable-next-line
    }, [])

    if(componentDidMount && data.length!==0){
        setComponentDidMount(false)
        setFilter(data)
    }

    // console.log(filter)
    const Loading = () => {
        return <>
            <div className="col-md-4">
                <Skeleton height={350} width={270} borderRadius={10} count={1} />
            </div>
            <div className="col-md-4">
                <Skeleton height={350} width={270} borderRadius={10} count={1} />
            </div>
            <div className="col-md-4">
                <Skeleton height={350} width={270} borderRadius={10} count={1} />
            </div>
            <div className="col-md-4">
                <Skeleton height={350} width={270} borderRadius={10} count={1} />
            </div>
            <div className="col-md-4">
                <Skeleton height={350} width={270} borderRadius={10} count={1} />
            </div>
            <div className="col-md-4">
                <Skeleton height={350} width={270} borderRadius={10} count={1} />
            </div>
            <div className="col-md-4">
                <Skeleton height={350} width={270} borderRadius={10} count={1} />
            </div>
            <div className="col-md-4">
                <Skeleton height={350} width={270} borderRadius={10} count={1} />
            </div>
            <div className="col-md-4">
                <Skeleton height={350} width={270} borderRadius={10} count={1} />
            </div>
        </>
    }

    const ShowProduct = () => {
        return filter && filter.map(item => {
            return <div className="card m-1 p-2 col-md-3" key={item.id} >
                {loading ? <Skeleton height={100} width={100} /> : <img className="" src={item.image} alt={item.image} style={{ height: '12rem' }} />}
                <h5 className="card-title">{item.title.substring(0, 12)}...</h5>
                <p className="text-start">{item.description.substring(0, 50)}...</p>
                <span className="text-start fs-3 fw-bold">${item.price}</span>
                <Link to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</Link>
            </div>
        })
    }

    const filterProduct = (products) => {
        setCurrentProduct(products)
        if (products !== "all") {
            setFilter(data.filter(item => item.category === products))
        } else {
            setFilter(data);
        }
    }

    return (
        <>
            <div className="container-fluid p-5 d-flex flex-column gap-3">
                <div className="items text-center d-flex gap-3 justify-content-center container" style={{overflowX: 'auto'}}>
                    <button className="btn btn-outline-primary" onClick={() => filterProduct('all')}>All</button>
                    <button className="btn btn-outline-primary" onClick={() => filterProduct('men\'s clothing')}>Men's Clothing</button>
                    <button className="btn btn-outline-primary" onClick={() => filterProduct('women\'s clothing')}>Women's Clothing</button>
                    <button className="btn btn-outline-primary" onClick={() => filterProduct('electronics')}>Electronics</button>
                    <button className="btn btn-outline-primary" onClick={() => filterProduct('jewelery')}>Jewelery</button>

                </div>
                <div className="container text-center">
                    <h2>Explore the products of <span className="text-primary text-capitalize">{currentProduct}</span></h2>
                    <div className=" row row-cols-1 row-lg-col-4  d-flex justify-content-center flex-wrap ">
                        {
                            loading ? <Loading /> : <ShowProduct />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
