import { useSelector } from 'react-redux'
import Navbar from './Components/Navbar'
import React from 'react'
import Card from './Components/Card'

const ViewCart = () => {
 
  let selector = useSelector(state => state.cart.cartItems)

  console.log(selector);

 return (

    <>
    

<Navbar/>


<div className='bg-base-300'>

<h1 className='text-center text-3xl font-semibold m-5 p-2'>Cart Details</h1>    


    {selector.length >0 ? selector.map((item , index)=>{

return <div key={index} className='bg-base-300 m-5' style={{
  display:"inline-flex",
  justifyContent:"center",
  alignItems:"center",
  gap:"5rem",
  marginTop:"2rem",
  backgroundColor:"" 

}}>

  <Card category={item.category} className="mt-5" desc={item.description} price={item.price} thumbnail={item.thumbnail}
  // btn={      <button className="btn btn-primary" onClick={()=>handleAddCartItem(item)}>Add to Cart</button>
  // }
  />

</div>
}): <h1 className='text-center text-4xl font-bold'>No Items Found..</h1> }




</div>
    </>
  )
}

export default ViewCart