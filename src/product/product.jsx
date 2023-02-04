import React from 'react'

import {
  useParams
} from "react-router-dom";

function product() {
  console.log(useParams())
  console.log("hello world")
  const { id } = useParams();
  console.log(id)
  return (
    <div>products list : {id} </div>
  )
}

export default product