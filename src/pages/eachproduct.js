import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../CartContext";

const Eachproduct = () => {
    const [product, setProduct] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const {cart, setCart} = useContext(CartContext);

    useEffect(()=>{
        async function getData(){
            const res = await fetch(`/api/products/${params._id}`)
            const product = await res.json();
            console.log(product); 
            setProduct(product);
        }
        getData();

        // Not working
        // fetch(`api/products/${params._id}`)
        // .then((res) => res.json())
        // .then((product) => {
        //     console.log(product);
        //     setProduct(product);
        // });
    },[params._id]);

    const handleAddCart = (productId)=>{
        let _cart = {...cart};
        if(!_cart.items[productId])
        {
            _cart.items[productId] = 1;
        }
        else
        {
            _cart.items[productId] += 1;
        }

        if(_cart.totalitems)
        {
            _cart.totalitems += 1;
        }
        else
        {
            _cart.totalitems = 1;
        }

        setCart(_cart);
    }


    return(
        <div className="conatiner max-w-7xl mx-auto mt-12">
            <button className="mb-12 font-bold text-lg" onClick={()=>{ navigate(-1) }}>Back</button>
            <div className="flex">
                <img src="/images/peproni.png" alt="imag"/>
                <div className="ml-8">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold mt-2">₹ {product.price}</div>
                    <button onClick={()=>{handleAddCart(product._id)}} className="bg-yellow-500 rounded-full px-5 py-1 mt-2 font-bold">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Eachproduct;