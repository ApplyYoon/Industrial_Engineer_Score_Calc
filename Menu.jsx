import { useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div className="menu">
        <ul className="menus">
          <li><Link to={"/"}>최종 점수</Link></li>
          <li><Link to={"/getscore/1st"}>최소 실기 점수</Link></li>
          <li><Link to={"/getscore/2nd"}>최소 필기 점수</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Menu
