import { useCallback, useContext, useRef, useState } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";

const Cart = () => {
    const {cartData} = useContext(CartContext)
    const total = useRef();
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=>{
        const options = {
            key: "rzp_test_DrfLJIrJ0eMLZH",
            amount: total*100,
            currency: "INR",
            name: "10x-Gaming-Site",
            description: "Gaming Transaction",
            handler: (res) =>{
                console.log(res);
            },
            prefill: {
                name: "Nirbhay Maitra",
                email: "nirbhaymaitra684@gmail.com",
                contact: "9927772070",
            },
            notes: {
                address: "Sunburn Bistro, Crossroads Mall, Dehradun",
            },
            theme:{
                color: "#3399cc",
            },
            

        }
        const rzp1 = new RazorPay(options);
        rzp1.open();

    }, [RazorPay])
    // total.current.price = 0
    return (
        <section>
            <section>
                {cartData.map((cartItem) =>{
                    return(
                        <article>
                            <image src="" alt="" />
                            <article>{cartItem.title}</article>
                            <article>{cartItem.price}</article>
                            <button>Remove from Cart</button>
                        </article>
                    )
                })}
            </section>
            <section>
                <article>Billing Information</article>
                {cartData.map((cart)=>{
                    // total.current.price = total.current.price + cart.price 
                    return <article>
                        <span>{cart.title}</span>
                        <span>{cart.price}</span>
                    </article>
                })}
              
                {/* <article>Total: {total.current.price}</article> */}
                <button onClick={()=>{razorPayDisplay(6000)}}>Checkout</button>
            </section>
        </section>
    )
}

export default Cart;