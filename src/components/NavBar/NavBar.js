import React from 'react'
import style from './NavBar.module.css'
import cartImg from '../../util/images/cartimg.png'

export default function NavBar({ setShow}) {
  return (
    <div className={style.outer}>
      <span>Shopin Center</span>

      <img className={style.cartImg} src={cartImg} onClick={() => {
        setShow(true);

        
      }}></img>
    </div>
  )
}
