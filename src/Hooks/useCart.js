import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect( () => {
        let storedCart = getStoredCart();
        let savedCart = [];
        for (let id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct) {
                let quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
    }, [products]);



    return [cart, setCart]
}

export default useCart;