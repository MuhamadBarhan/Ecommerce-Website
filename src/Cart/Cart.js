import React from 'react'
import { useSelector } from 'react-redux'
import ProductListItem from '../ProductListItem/productlistitem'

const Cart = () => {
    const list=useSelector((state)=>state.cart.list)
  return (
    <>
    {list.map((item)=>(
      <ProductListItem {...item} key={item.id}/>
    ))}
    </>
  )
}

export default Cart