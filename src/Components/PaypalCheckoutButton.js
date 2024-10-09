import React, { useEffect, useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";

function PaypalCheckoutButton(props) {
  const { products, style, subTotal } = props;

  const [error, setError] = useState(null);

  // Check if product.id exists before accessing localStorage

  // const hasAlreadyBoughtItem = paidFor || (localStorage.getItem(`paid_${product.id}`)); ********* we need this code later



  function handleApprove(orderId) {
    toast.success("Payment is done");
      
     // localStorage.setItem(`paid_${product.id}`, "true");  *********   // Use product.id to mark the product as paid
     //  console.log("Payment stored for product:", product.id);
  }

  

  // Show a toast when there's an error
  useEffect(() => {
    if (error) {
      toast.error("Paypal Checkout payment error: " + error);
    }
  }, [error]);

  return (
    <PayPalScriptProvider>
      
        <PayPalButtons
          style={style}

          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: products.description,
                  amount: {
                    currency_code : "USD",
                    value: subTotal,
                    breakdown:{
                      item_total:{
                        currency_code: "USD",
                        value: subTotal,
                      },
                    },
                  },
                  items : products,
                },
              ],
            });
          }}

          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log("Order capture", order);

            console.log("data.orderID", data.orderID);
            handleApprove(data.orderID);  // Mark the product as approved
          }}

          onCancel={() => {
            toast.success("Payment was cancelled.");
          }}

          onError={(err) => {
            setError(err);
            console.log("PayPal checkout error", err);
          }}

        />
     
    </PayPalScriptProvider>
  );
}

export default PaypalCheckoutButton;





 // onClick={(data, actions) => { ********************* we need this code later
          //   if (hasAlreadyBoughtItem) {
          //     setError("You have already bought this item.");
          //     return actions.reject();
          //   } else {
          //     return actions.resolve();
          //   }
          // }}