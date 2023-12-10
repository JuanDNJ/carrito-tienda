import { useCartCtx } from '../context/CartCtx'
import { CartIcon } from './CartIcon'
import { DelteToCartIcon } from './DelteTocartIcon'

export function Product({ product }) {

    const { cart, addToCart, deleteToCart } = useCartCtx()
    const handlerAddCart = (product) => {
        addToCart(product)
    }
    const handlerDeleteProduct = (product) => {
        deleteToCart(product)
    }
    return (
        <li>
            <img className='photoProduct' src={product.image} alt={product.title} />
            <div className='first-child'>
                <span>{product.title}</span>
            </div>
            <div className='midle-child'>
                <strong>$</strong>&nbsp;<span>{product.price}</span>
            </div>
            <div className='last-child' >
                {cart && cart.find(res => res.id === product.id) ?
                    <button title='Delete to cart' className='deleteToCart' type='button' onClick={() => handlerDeleteProduct(product)}>
                        <DelteToCartIcon fill="#fff" />
                    </button> :
                    <button title='Add to cart' type='button' onClick={() => handlerAddCart(product)}>
                        <CartIcon fill="#fff" />
                    </button>}
            </div>
        </li>
    )
}