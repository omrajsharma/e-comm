import React from 'react'
import './ProductDetail.css'
import { useParams } from "react-router-dom";

function ProductDetail() {
    let { id } = useParams();
  return (
    <div>
        <h1>Product Detail</h1>
        <p>Product ID: {id} </p>
    </div>
  )
}

export default ProductDetail