import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Navbar from "./Navbar";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const subTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const products = items.map((item) => ({
    name: item.artist, // Name of the item
    unit_amount: {
      currency_code: "USD", // Adjust the currency if necessary
      value: item.price.toFixed(2),
    },
    quantity: item.quantity, // Quantity of the product
  }));

  return (
    <div>
      <Header />
      <Navbar />
      <div className="font-[sans-serif] text-black font-semibold">
        <div className="flex max-sm:flex-col h-full">
          {/* Form Section in checkout */}
          <div className="max-w-4xl w-full h-max rounded-md px-9 py-8 relative top-0 lg:min-w-[52%] sm:min-w-[52%]">
            <div className="flex gap-1 flex-col items-center space-y-2 mb-2">
              <span className="text-gray-400 text-sm">Express checkout</span>
              <div className="py-2 px-4 flex items-center justify-center mb-4 w-full">
                <div className="w-[100%]">
                  <PaypalCheckoutButton
                    products={products}
                    style={{
                      color: "blue", // 'blue', 'silver', 'gold', 'white', 'black'
                      shape: "pill", // 'rect' or 'pill'
                      label: "pay", // 'paypal', 'pay', 'buynow', 'checkout'
                      layout: "horizontal", // 'vertical' or 'horizontal'
                      height: 45, // Height of the button (default is auto)
                      tagline: false, // Display a tagline (optional)
                    }}
                    subTotal={subTotal}
                  />
                </div>
              </div>

              <div className="flex items-center w-full mt-2">
                <hr className="flex-grow border-gray-300" />
                <span className="text-gray-500 mx-2">OR</span>
                <hr className="flex-grow border-gray-300" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Complete your order
            </h2>
            <form className="mt-8">
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-4">
                  Personal Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>

                  <div>
                    <input
                      type="number"
                      placeholder="Phone No."
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-base font-bold text-gray-800 mb-4">
                  Shipping Address
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Address Line"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>
                </div>

                <div className="flex gap-4 max-md:flex-col mt-8">
                  <button
                    type="button"
                    className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-primary_alt hover:bg-primary  text-white"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Product Section in checkout */}
          <div className="bg-gray-100 sm:h-screen sm:sticky sm:top-0 lg:min-w-[45%] sm:min-w-[45%]">
            <div className="relative h-full">
              <div className="px-5 py-6  sm:overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 sm:h-[calc(100vh-60px)]  md:px-7 md:pr-9 md:pb-28">
                <div className="space-y-4">
                  {items.map((item) => {
                    return (
                      <div key={item.id} className="flex items-start gap-4">

                        <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-2 shrink-0 bg-gray-300 rounded-md justify-center items-center">
                          <img
                            src={item.img}
                            className="w-full h-full object-cover rounded-md"
                            alt={item.artist}
                          />
                        </div>

                        <div className="w-full">
                          <h3 className="text-base">{item.artist}</h3>
                          <ul className="text-xs  space-y-2 mt-2 text-gray-600">
                            <li className="flex">
                              Dimension{" "}
                              <span className="ml-auto">{item.dimension}</span>
                            </li>
                            <li className="flex">
                              Quantity{" "}
                              <span className="ml-auto">{item.quantity}</span>
                            </li>
                            <li className="flex">
                              Total Price{" "}
                              <span className="ml-auto">
                                $
                                {parseFloat(item.price * item.quantity).toFixed(
                                  2
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="px-5 py-3 md:absolute md:left-0 md:bottom-0 bg-gray-100 w-full h-auto  md:px-7 md:pr-9">
                
                {/* For Coupon */}
                <div className="flex justify-between items-center gap-5 md:gap-4">
                  <div className="flex-1">
                    <input
                      className="w-full outline-gray-300 focus:outline-gray-500 rounded-md h-11 p-3 md:h-10 md:p-2 lg:h-11 lg:p-3 font-thin"
                      placeholder="Gift Card, Redemption or Discount Code"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn px-4 rounded-3xl border border-gray-300 text-gray-500 lg:px-7 text-[15px]"
                  >
                    APPLY
                  </button>
                </div>
                 
                 {/* For Subtotal */}
                <div className="flex justify-between mt-2 text-primary_alt font-thin text-[14px]">
                  <span>Subtotal {items.length} Items</span>
                  <span>
                    ${parseFloat(subTotal).toFixed(2)}
                  </span>
                </div>
                
                {/* For Shipping */}
                <div className="flex justify-between mt-2 font-thin text-[14px]">
                  <span className="text-primary_alt">Shipping</span>

                  {/* which one is set in this place */}
                  <span className="text-gray-500">Enter shipping address</span>
                  
                  {/* <input
                      className="w-[40%] outline-none bg-gray-500  h-10 md:h-10  lg:h-7 font-thin"
                      placeholder="Enter Shipping Address"
                    /> */}
                </div>
                
                {/* For Total */}
                <div className="flex justify-between mt-2 text-base text-primary_alt">
                  Total{" "}
                  <span >
                    USD ${parseFloat(subTotal).toFixed(2)}
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
