import React from 'react'


function Card({thumbnail ,category
,price, desc ,btn}) {
  return (
<>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={thumbnail}
      alt="Shoes"
      className="rounded-xl w-[10rem] h-[10rem]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{category
    }</h2>
    <p>{desc.length > 50 ? desc.slice(0,50) + ' ' +"....":desc}</p>
    <p>Price {price} $ </p>
    <div className="card-actions">

<p>

{btn}   
</p>
 </div>
  </div>
</div>



</>  )
}

export default Card