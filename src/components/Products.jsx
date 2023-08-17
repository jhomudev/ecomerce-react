import React from 'react'
import { useCart } from '../hooks/useCart'
import { PlusSquare, ShoppingCart } from '@phosphor-icons/react'

function ProductItem ({ name, price, img, isInCart, addToCart }) {
  return (
    <article className='bg-white group w-full flex flex-col gap-1 shadow-md rounded-sm overflow-hidden'>
      <picture className='w-full h-[170px] overflow-hidden group-hover:brightness-75 transition-all duration-700 ease-in'>
        <img className='w-full h-full object-fill' src={img} alt={name} />
      </picture>
      <div className='grid px-4 pb-4 pt-2'>
        <strong className='text-c_dark-strong text-ellipsis overflow-hidden whitespace-nowrap'>{name}</strong>
        <span className='text-c_dark-smoth'>$ {price}.00</span>
        <button onClick={addToCart} className='flex items-center gap-2 justify-center text-white bg-c_orange-normal hover:bg-c_orange-hover mt-2 py-2 px-4 rounded-md'>
          {
            isInCart
              ? <PlusSquare size={25} weight='regular' />
              : (<ShoppingCart size={25} weight='regular' />)
          }
        </button>
      </div>
    </article>
  )
}

function ProductsThere ({ products }) {
  const { cart, addToCart } = useCart()
  return products.map((product) => {
    const isInCart = cart.filter((productCart) => productCart.id === product.id).length > 0
    return (
      <ProductItem
        addToCart={() => { addToCart(product) }}
        key={product.id}
        name={product.name}
        price={product.price}
        img={product.img}
        isInCart={isInCart}
      />
    )
  })
}

function NoProductsThere () {
  return (
    <div className='empty grid  gap-2 place-items-center'>
      <img className='w-52' src='https://cdn-icons-png.flaticon.com/512/4826/4826310.png' alt='empty box' />
      <p className='text-c_dark-smoth'>No hay productos</p>
    </div>
  )
}

export function Products ({ products }) {
  const hasProducts = products.length > 0
  return hasProducts ? <ProductsThere products={products} /> : <NoProductsThere />
}
