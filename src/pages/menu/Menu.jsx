import React from 'react'
import MenuMain from '../../components/menu-main/MenuMain'
import About from '../../components/menu-main/about/About'
import './Menu.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Menu() {
  return (
    <div id="menu">
      <p style={{color: 'var(--red-like-color)'}}>OUR MENU</p>
      <div className="menu-sliders">
        <h1 style={{marginTop: '10px',marginBottom: '20px'}}>Menu That always <br />make youFall in Love</h1>
        <div>
          <button className='slider left'>
            <FaAngleLeft size={20} color='#7e7e7e' />
          </button>
          <button className='slider right'>
            <FaAngleRight size={20} color='#fff' />
          </button>
        </div>
      </div>
      <MenuMain />
      <About />
    </div>
  )
}

export default Menu