import React from 'react'
import { Broom, Trash } from '@phosphor-icons/react'
import { useCart } from '../hooks/useCart'

function ProductItemCart ({ name, img, price, quantity, removeProduct }) {
  const total = (price * quantity).toFixed(2)
  return (
    <li className='w-full flex items-center gap-3 hover:bg-slate-200 py-2 px-3 rounded-sm'>
      <picture className='imgBox w-[50px] h-[50px]'>
        <img className='w-full h-full object-cover' src={img} alt={name} />
      </picture>
      <div className='info text-c_dark-smoth'>
        <p>{name}</p>
        <p>${price}.00 x {quantity} <span className='text-c_dark-strong font-bold ml-3'>${total}</span></p>
      </div>
      <button onClick={removeProduct} className='text-c_dark-strong hover:text-red-600 ml-auto'><Trash size={20} /></button>
    </li>
  )
}

function ProductsCartThere ({ products }) {
  const { removeProduct } = useCart()
  return (
    <>
      <ul className='grid place-items-center gap-2 min-h-[60px] max-h-[60vh] overflow-auto'>
        {products.map((product) => (
          <ProductItemCart
            removeProduct={() => { removeProduct(product) }}
            key={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            quantity={product.quantity}
          />))}
      </ul>
      <button className='w-full py-2 px-3 bg-c_orange-normal hover:bg-c_orange-hover text-white font-semibold rounded-md text-lg'>Comprar</button>
    </>
  )
}

export const Cart = ({ isShow }) => {
  const { cart, clearCart } = useCart()
  const hasProducts = cart.length > 0

  return (
    <div className={`${isShow ? 'opacity-100 max-h-screen' : ' opacity-0 max-h-0 pointer-events-none'} p-5 transition-all duration-700 overflow-hidden fixed top-[5rem] sm:absolute z-10 right-0 sm:top-full bg-white w-full sm:w-[clamp(300px,100vw,330px)] grid gap-3 shadow-2xl rounded-md`}>
      <div className='flex items-center justify-between border-b-2 border-b-c_dark-high pb-2'>
        <h4 className='text-c_dark-strong font-semibold'>Carrito</h4>
        <button title='Vaciar carrito' onClick={clearCart} className='grid place-items-center p-1 ml-auto rounded-full hover:bg-slate-300 hover:text-red-500'><Broom size={18} /></button>
      </div>
      {
        hasProducts
          ? <ProductsCartThere products={cart} />
          : <p className='text-center text-c_dark-smoth h-10 grid place-items-center'>No hay productos en el carrito</p>
      }
    </div>
  )
}
