import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from './config/redux/reducers/cartSlice'

const Home = () => {

let [product,setProduct] = useState('')


useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
      setProduct(res.products)
      console.log(res.products);
    
    })
    .catch(err => console.log(err))
}, [])

let dispatch = useDispatch()

let selector = useSelector(state => state.cart)

console.log(selector.cartItems);


let handleAddCartItem= (item)=>{
  // console.log(item);
  dispatch(addCartItem ({
    item
  }))
}

return (
<>

<Navbar />

<div className='bg-base-300'>


<h1 className='text-center text-3xl font-semiblod p-3'>App </h1>


{product .length >0 ? product.map((item , index)=>{

return <div className='bg-base-300 m-5' key={index}  style={{
  display:"inline-flex",
  justifyContent:"center",
  alignItems:"center",
  gap:"5rem",
  marginTop:"2rem",
  backgroundColor:"" 

}}>

  <Card category={item.category} className="mt-5" desc={item.description} price={item.price} thumbnail={item.thumbnail}
  btn={      <button className="btn btn-primary" onClick={()=>handleAddCartItem(item)}>Add to Cart</button>
  }
  />

</div>
}): <h1 className='text-center text-4xl font-bold'>Loading......</h1> }


</div>

</>
  )
}

export default Home