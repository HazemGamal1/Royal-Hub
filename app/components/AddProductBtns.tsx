"use client"
import { Button } from "@/components/ui/button";
import useCart from '../store/useCart';
import { fullProduct } from '../utils/interfaces/interface';
import { toast } from "sonner"

const AddProductBtns = ({ product } : { product : fullProduct}) => {
    const {addToCart} = useCart();

    const handleAddProduct = (product: fullProduct) => {
        addToCart(product);
    }
    
  return (
    <div className="flex gap-5">
        <Button onClick={() => handleAddProduct(product)}>Add To Cart</Button>
        
        <Button variant={"ghost"}>Checkout</Button>
    </div>
  )
}

export default AddProductBtns
