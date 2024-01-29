import React from 'react';
import ImageCarousel from './Components/ImageCarousel';
import './Styles/home.css';
import { Link } from 'react-router-dom';
import { products } from '../data/Products';
import ProductCard from './Components/ProductCard'


const Home = () => {

  //Carousel Images
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
  ];


  const category = [
    { id: 1, name: 'Mobiles', image: '/image5.png', link: '/mobiles' },
    { id: 2, name: 'Electronics', image: '/image6.png', link: '/products' },
    { id: 3, name: 'Smart Watches', image: '/image7.png', link: '/products' },
    { id: 4, name: 'Shoes', image: '/image8.png', link: '/products' },
    { id: 5, name: 'Accessories', image: '/image9.png', link: '/products' },
  ];


  return (
    <div>
      <div className="container">
        <div className="category-container">
          {category.map((product, index) => (
            <div className="shop-category">
              <Link to={product.link}><img src={product.image} alt={product.name} className="shopImage" id='cat-img' /></Link>
              <label for='cat-img' className='catlabel'>{product.name}</label>
            </div>
          ))}
        </div>
        <div className="image-carousel">
          <ImageCarousel images={images} />
        </div>
        <div className="productCardContainer">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
