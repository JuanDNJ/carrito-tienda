import { useCart } from '../context/CartCtx'
import { AddTocartIcon } from './AddtoCartIcon'
import { DelteToCartIcon } from './DelteTocartIcon'
export function Product({ product }) {

    const { cart, addProdut, deleteProdut } = useCart()
    const handlerAddCart = (product) => {
        // console.log(product)
        addProdut(product)
    }
    const handlerDeleteProduct = (product) => {
        // console.log(product)
        deleteProdut(product)
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
                        <AddTocartIcon fill="#fff" />
                    </button>}
            </div>
        </li>
    )
}