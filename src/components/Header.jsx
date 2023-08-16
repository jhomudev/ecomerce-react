import React, { useState } from 'react'
import logo from './../assets/img/logo-company.svg'
import { ShoppingCart } from '@phosphor-icons/react'
import { Cart } from './Cart'
import { useCart } from '../hooks/useCart'

function Header () {
  const [showCart, setShowCart] = useState(false)
  const { cart } = useCart()

  function handleToggleCart () {
    setShowCart(!showCart)
  }
  return (
    <header className='sticky top-0 left-0 z-20 header w-full bg-white shadow-md'>
      <div className='header-content container mx-auto px-2 h-20 flex items-center gap-10'>
        <div className='logoBox w-[200px]'>
          <img className='w-full h-full object-contain' src={logo} alt='sneakers company logo' />
        </div>
        <nav className='h-full'>
          <ul className='h-full flex gap-7 items-center justify-center'>
            <li className='link-header relative h-full grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Collections</a></li>
            <li className='link-header relative h-full grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Men</a></li>
            <li className='link-header relative h-full grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Women</a></li>
            <li className='link-header relative h-full grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>About</a></li>
            <li className='link-header relative h-full grid place-items-center text-c_dark-smoth hover:text-c_dark-strong font-medium'><a href=''>Contact</a></li>
          </ul>
        </nav>
        <div className='right-side flex gap-5 ml-auto'>
          <div className='relative grid place-items-center'>
            <button onClick={handleToggleCart} className='relative text-c_dark-smoth hover:text-c_dark-strong font-medium'>
              <ShoppingCart size={25} />
              {
                cart.length > 0 &&
                  <span className='absolute bottom-[60%] left-[60%] grid place-items-center bg-c_orange-normal rounded-full p-[1px_5px] text-white text-xs'>{cart.length}</span>
              }
            </button>
            <Cart isShow={showCart} />
          </div>
          <div className='userBox w-11 h-11 rounded-full overflow-hidden border-c_orange-normal border-2'>
            <img className='w-full h-full object-cover' src='https://unavatar.io/midudev' alt='avatar' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
