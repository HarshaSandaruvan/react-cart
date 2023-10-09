import React from 'react'
import style from './Cart.module.css'

export default function Cart({setShow}) {
  return (
    <div className={style.outer}>
            <span className={style.title}>Cart</span>
            <button onClick={()=>setShow(false)}>close</button>
    </div>
    
  )
}
