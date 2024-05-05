"use client"
import { Button } from "@/components/ui/button";
import useCart from '../store/useCart';
import { fullProduct } from '../utils/interfaces/interface';
import { toast } from 'react-toastify';
const AddProductBtns = ({ product } : { product : fullProduct}) => {
  const {cart, addToCart} = useCart();

  const handleAddProduct = (product: fullProduct) => {
        if(cart.some(cartItem => cartItem.name ===  product.name)){
          toast.error("Item already in cart", {
            autoClose: 1000,
            hideProgressBar: true,
            draggable: true
          });
          return;
        }
        addToCart(product);
        toast.success("Added To Cart", {
          autoClose: 1000,
          hideProgressBar: true,
          draggable: true
        });
        
    }
  return (
    <div className="flex gap-5">
        <Button onClick={() => handleAddProduct(product)}>Add To Cart</Button>
        <Button variant={"ghost"}>Checkout</Button>
    </div>
  )
}

export default AddProductBtns
