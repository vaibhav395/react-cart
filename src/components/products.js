import Single_product from "./single_product";
import { useState, useEffect, useContext} from "react";
import { CartContext } from "../CartContext";
const Products = ()=>{
    // const {name} = useContext(CartContext);

    const[ArrayOfProducts, setProducts] = useState([]);
    useEffect(()=>{
        fetch('/api/products')
        .then(response=>response.json())
        .then(ArrayOfProducts =>{
            setProducts(ArrayOfProducts);
        });
    },[]);



    return(
        <div className="container mx-auto pb-24 max-w-7xl mt-14">
            <h1 className="text-lg font-bold my-8">Products </h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    ArrayOfProducts.map((SingleProduct) => <Single_product key={SingleProduct._id} product_prop={SingleProduct}/>)
                }
            </div>
        </div>
    )
}

export default Products;