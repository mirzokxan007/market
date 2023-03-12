import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
// import UseId from "../Hooks/UseId"


const Details = ({products}) => {
  const {id} = useParams()
  const [producte, producteRender] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => producteRender(json));
  }, []);
     return (   <>
      <div className="card mb-3 container m-5 p-2">
      <div className="row g-0">
          <div className=" lorem col-md-4">
          <img src={producte.image}  className="desk-image details_img img-fluid rounded-start" alt="..." />
          </div>
          <div className="lorem col-md-8">
          <div className="my-3 card-body">
              <h5 className=" h2 card-title">TITLE:{producte.title}</h5>
              <p className="card-text">DESCRIPTION:{producte.description}</p>
              <p className="card-text">${producte.price}</p>
              <p className="card-text"><small className="text-muted">CATEGORIA:{producte.category}</small></p>
          </div>
          </div>
      </div>
</div>
<div className="container d-flex justify-content-around">
   <Link to="/" className="btn btn-primary">
    <i className="fa-solid fa-left"></i>
     Back to home
   </Link>
   <Link to="/about" className="btn btn-success">
    <i className="fa-solid fa-right"></i>
      Go to pay
   </Link>
   </div>
   </>
     )
 }
export default Details
