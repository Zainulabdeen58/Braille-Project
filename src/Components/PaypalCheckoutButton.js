import React, { useEffect, useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";

function PaypalCheckoutButton(props) {
  const { product, style } = props;

  const [paidFor, setPaidFor] = useState(false);  // Track if the user has paid
  const [error, setError] = useState(null);

  // Check if product.id exists before accessing localStorage
  const hasAlreadyBoughtItem = paidFor || (localStorage.getItem(`paid_${product.id}`));

  // Handle successful approval
  function handleApprove(orderId) {
 
      setPaidFor(true);
      localStorage.setItem(`paid_${product.id}`, "true");  // Use product.id to mark the product as paid
      console.log("Payment stored for product:", product.id);
   
  }

  // Show a toast when the payment is successful
  useEffect(() => {
    if (paidFor) {
      toast.success("Payment is done");
      console.log("payment is done");
      
    }
  }, [paidFor]);

  // Show a toast when there's an error
  useEffect(() => {
    if (error) {
      toast.error("Paypal Checkout payment error: " + error);
      console.log("Paypal Checkout payment error:", error);

    }
  }, [error]);

  return (
    <PayPalScriptProvider>
      
        <PayPalButtons
          style={style}
          // Check if the user has already bought the item before allowing payment
          onClick={(data, actions) => {
            if (hasAlreadyBoughtItem) {
              setError("You have already bought this item.");
              return actions.reject();
            } else {
              return actions.resolve();
            }
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: {
                    value: product.price,
                  },
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

