import React from 'react'
import style from './Item.module.css'

export default function Item({item, cartItem, name, price, img}, ) {
   

   
    return (
        <div className={style.outer}>
            <div className={style.imgContainer} style={{backgroundImage:`url(${img})`,}}></div>
            <div className={style.txtContainer}>
                <span className={style.Title}>{name}</span>
                <div className={style.innerContainer}>
                    <span>Rs. {price}</span>
                    <button className={style.btn} onClick={()=>{
                        alert(`${name} is added`)
                    }}>Add to cart</button>

                </div>
            </div>
        </div>

    )
}
