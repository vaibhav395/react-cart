import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext'

const Navigation = ()=>{
    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius:'50px'
    }

   const {cart} = useContext(CartContext); 
    return(
        <>
           <nav className="container sticky top-0 z-50 shadow-lg justify-between py-4 bg-white flex items-center">
                <Link to="/">
                    <img className='ml-14' style={{height:45}} src="/images/logo.png" alt='logo'/>
                </Link>
           <ul className='flex items-center mr-14'>
            <li className='ml-6'> <Link to="/">Home</Link> </li>
            <li className='ml-6'> <Link to="/products"> products</Link> </li>
            <li className='ml-6'>
                <Link to="/cart">
                    <div style={cartStyle}>
                        <span>{cart.totalitems ?  cart.totalitems : 0}</span>
                        <img className='ml-2' src='/images/cart.png' alt='cart-image' />
                    </div>
                </Link>
            </li>
           </ul>
           </nav>
        </>
    )
}

export default Navigation;