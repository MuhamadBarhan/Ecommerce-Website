import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/Products';
import './ProductDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducer/cart';


const ProductDetails = () => {
  const params = useParams();
  const dispatch=useDispatch();
  const item = products.find((element) => element.id === parseInt(params.id));

  const addToCart = () => {
    dispatch(addItem(item));
  };


  return (
    <div className="product-detail" key={item.id} >
      <div className="pd-image-container">
        <img src={item.image} alt={item.name} className="pd-image" />
      </div>
      <div className="pd-desc">
        <h3 style={{ paddingLeft: '0.5rem' ,color:'#7A7A7A'}} >{item.name}</h3>
        <span style={{ paddingLeft: '0.5rem' ,fontWeight:'700',fontSize:'30px'}}>Rs.{item.newprice}</span>
        <span style={{ paddingLeft: '0.5rem' ,color:'gray',fontWeight:'500'}}><strike>Rs.{item.oldprice}</strike></span>
        <div className="buyProduct">
          <button className='pd-btn cart' onClick={addToCart}><FontAwesomeIcon icon={faCartShopping}/> Add to Cart</button>
          <button className='pd-btn buy'><FontAwesomeIcon icon={faBoltLightning}/> Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails