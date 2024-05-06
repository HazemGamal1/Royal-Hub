"use client"
import { Button } from "@/components/ui/button";
import useCart from '../store/useCart';
import { cartItem } from '../utils/interfaces/interface';
import { toast } from 'react-toastify';
import { IoCart } from "react-icons/io5";

const AddProductBtns = ({ product } : { product : cartItem}) => {
  const {cart, addToCart} = useCart();

  
  const handleAddProduct = (product: cartItem) => {
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
        <Button onClick={() => handleAddProduct(product)} className="flex gap-3"><IoCart className="text-lg"/> Add To Cart</Button>
        <Button variant={"ghost"}>Checkout</Button>
    </div>
  )
}

export default AddProductBtns
