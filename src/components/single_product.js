import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
const Single_product = (props)=>{
    const {product_prop} = props;  //Destructing the props
    const { cart, setCart } = useContext(CartContext);
    const[IsAdding, setIsAdding] = useState(false);
    
    const AddtoCart = (event, product)=>{
        event.preventDefault();
        let _cart = {...cart};
        if(!_cart.items)
        {
            _cart.items = {};
        }
        if(_cart.items[product._id])
        {
            _cart.items[product._id] += 1;
        }
        else
        {
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalitems)
        {
            _cart.totalitems = 0;
        }
        _cart.totalitems += 1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(()=>{
            setIsAdding(false);
        }, 1000);

        

        // const cart = {
        //     items:{
        //         "608c28e8e165f6137f02b550":2,
        //         "608c2878e165f6137f02b54b":4
        //     },
        //     totalitems:6
        // }
    }
    return (
        <Link to={`/products/${props.product_prop._id}`}>
            <div>
                <img src="/images/peproni.png" />
                <div className="text-center">  {/*This div is created just to center the h2 and span*/}
                    <h2 className="text-lg font-bold py-2">{product_prop.name}</h2>
                    <span className="bg-gray-200 rounded-full py-1 px-4 text-sm">{product_prop.size}</span>
                </div>
                <div className="flex justify-between items-center mt-4 ">
                    <span>₹ {product_prop.price}</span>
                    <button disabled={IsAdding} onClick={(e)=>{AddtoCart(e,product_prop)}} className={`${IsAdding ? 'bg-green-500' : 'bg-yellow-500'}  py-1 px-4 rounded-full font-bold`}>ADD{`${IsAdding ? 'ED' : ''}`}</button>
                </div>
            </div>
        </Link>
    )
}
export default Single_product;