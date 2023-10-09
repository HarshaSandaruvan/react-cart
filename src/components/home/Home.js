import React, { useState, useEffect } from 'react'
// import data from '../../util/Data.js'
import words from '../../util/NewDate.js'
import style from './Home.module.css'
import Item from '../item/Item'
import img from '../../util/images/img1.jpg'
import NavBar from '../NavBar/NavBar.js'
import Cart from '../cart/Cart.js'

export default function Home() {
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    const [size, setSize] = useState([]);
    const[cartItem, setCartItems]=useState([]);



    useEffect(() => {
        words.map(() => {
            setProduct(words)
            
        })
    }, [])



    return (
        <>
       
            <NavBar setShow={setShow} />
            <div className={style.outer}>
                <div className={style.innerContainer}>
                    {
                        product.map((item, index) => {
                            const sizes = item.size;

                            return (
                                <div key={index}>
                                    <Item setCartItems={setCartItems} cartItem={cartItem} item={item} name={item.name} price={item.price} sizes={sizes} img={item.img} />
                                    
                                </div>
                            );
                        })
                    }
                </div>
                
                {
                    show && <Cart setShow={setShow} />
                }
                
            </div>

        </>

    )
}
