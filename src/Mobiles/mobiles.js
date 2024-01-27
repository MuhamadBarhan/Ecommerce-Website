import React, { useState } from 'react'
import './mobiles.css'
import xiaomi1 from './Images/xiaomi11i.png'
import xiaomi2 from './Images/xiaomi13.png'
import xiaomi3 from './Images/mi11xpro.png'
import oneplus1 from './Images/oneplus10pro5g.png'
import oneplus2 from './Images/oneplusnord2t5g.png'
import oneplus3 from './Images/oneplus9.png'
import iphone1 from './Images/iphone15.png'
import iphone2 from './Images/iphone13promax.png'
import iphone3 from './Images/iphone15pro.png'

const Mobiles = () => {

    const productlist = [
        { id: 1, title: 'Xiaomi 11i', price: 15000, image: xiaomi1, category: 'android', tag: 'Xiaomi' },
        { id: 2, title: 'Xiaomi 13', price: 15000, image: xiaomi2, category: 'android', tag: 'Xiaomi' },
        { id: 3, title: 'Mi 11x Pro', price: 15000, image: xiaomi3, category: 'android', tag: 'Xiaomi' },
        { id: 4, title: 'Oneplus 10 Pro 5G', price: 15000, image: oneplus1, category: 'android', tag: 'Oneplus' },
        { id: 5, title: 'OnePlus Nord 2T 5G', price: 15000, image: oneplus2, category: 'android', tag: 'Oneplus' },
        { id: 6, title: 'OnePlus 9', price: 15000, image: oneplus3, category: 'android', tag: 'Oneplus' },
        { id: 7, title: 'iPhone 15', price: 15000, image: iphone1, category: 'ios', tag: 'Apple' },
        { id: 8, title: 'iPhone 13 Pro Max', price: 15000, image: iphone2, category: 'ios', tag: 'Apple' },
        { id: 9, title: 'iPhone 15 Pro', price: 15000, image: iphone3, category: 'ios', tag: 'Apple' },
    ];

    const [data, setData] = useState(productlist);
    const filterResult = (catItem) => {
        let result = productlist.filter((curData) => {
            return curData.tag.includes(catItem);
        })
        setData(result);
    }

    const filterCategory = () => {
        var x=document.getElementById('android');
        var y=document.getElementById('ios');
        
        if (x.checked) {
            y.checked=false;
            let result = productlist.filter((curData) => {
                return curData.category.includes('android');
            })
            setData(result);
        }
        
        if (y.checked) {
            x.checked=false;
            let result = productlist.filter((curData) => {
                return curData.category.includes('ios');
            })
            setData(result);
        }
    }




    return (
        <div>
            <div className="mobile-list">
                <div className="leftside">
                    <div className="category-list">
                        <span className="title">Categories</span>
                        <span className='listitems'><input type="checkbox" id="android" name="android" value="android" onChange={filterCategory} />
                            <label for="android">Android</label></span>
                        <span className='listitems'><input type="checkbox" id="ios" name="ios" value="ios" onChange={filterCategory} />
                            <label for="ios">iOS</label></span>
                    </div>
                    <div className="tag-list">
                        <span className="title">Tag</span>
                        <span className='listitems' onClick={() => filterResult('Xiaomi')}>Xiaomi</span>
                        <span className='listitems' onClick={() => filterResult('Oneplus')}>Oneplus</span>
                        <span className='listitems'>Vivo</span>
                        <span className='listitems'>Samsung</span>
                        <span className='listitems'>Oppo</span>
                    </div>
                </div>
                <div className="rightside">
                    <div className="products-list">
                        {data.map((product, index) => (
                            <div className="product-card" key={product.id}>
                                <div className="image-container">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                </div>
                                <h3 style={{ paddingLeft: '0.5rem' }}>{product.title}</h3>
                                <p style={{ paddingLeft: '0.5rem' }}>${product.price}</p>
                                <button className="add-to-cart"><span className="text">Add to Cart</span></button>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobiles