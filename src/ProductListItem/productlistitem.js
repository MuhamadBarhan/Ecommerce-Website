import React from 'react'

const ProductListItem = (props) => {
  return (
    <div className="productCardContainer">
            <div className="productCard" key={props.id}>
              <div className="imageContainer">
                <img src={props.image} alt={props.name} className="productImage" />
              </div>
              <h3 style={{ paddingLeft: '0.5rem' }}>{props.name}</h3>
              <span style={{ paddingLeft: '0.5rem' }}>Rs.{props.newprice}</span>
              <span style={{ paddingLeft: '0.5rem',color:'gray' }}><strike>Rs.{props.oldprice}</strike></span>
            </div>
         
        </div>
  )
}

export default ProductListItem