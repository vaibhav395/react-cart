// import Products from '../components/Products'
import Products from "../components/products";
const home = ()=>{
    return(
        <>
        <div className="hero py-16 mt-12">
            <div className="container mx-auto max-w-7xl flex items-center justify-between">
                <div className="w-1/2">
                    <h6 className="text-lg"><em>Are you hungry?</em></h6>
                    <h1 className="text-3xl md:text-4xl font-bold">Don't Wait</h1>
                    <button className="px-6 py-2 rounded-full text-white font-bold bg-yellow-500 mt-4 hover:bg-yellow-600">Order Now</button>
                </div>
                <div className="w-1/2">
                    <img className="width:4/5" src="/images/pizza.png"></img>
                </div>
            </div>
        </div>
        <div>
           <Products />
        </div>
        </>
    )
}

export default home;