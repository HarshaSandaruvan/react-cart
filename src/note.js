import React, { useState, useEffect } from 'react'
import data from '../../util/Data.json'
import words from '../../util/Data copy.json'
import style from './Home.module.css'
import Item from '../item/Item'

export default function Home() {
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    



    useEffect(() => {
        words.map(() => {
            setProduct(words)
        })
    }, [])



    return (
        <>
            <div className={style.outer}>
                <button onClick={() => {
                    console.log(product)
                    setShow(true);
                    // console.log(show)
                }}>Load</button>

                {
                    show && <div>
                        {
                            product.map((products, index) => {
                               const sizes=products.size;
                              
                                return (
                                    <div key={index}>
                                        <span>id : {products.id}</span><br/>
                                        <span>name : {products.name}</span><br/>
                                        <span>price : {products.price}</span>
                                       <ul>
                                           {
                                            sizes.map((element, index) => {
                                                return(<li key={index}>{element}</li>)
                                            })
                                           }
                                            
                                       </ul>
                                        <hr />
                                    </div>
                                );
                            })

                            


                        }





                        <button onClick={() => setShow(false)}>Close</button></div>
                }


            </div>

        </>

    )
}
