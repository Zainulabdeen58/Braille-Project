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
  const product = {
    id: "1556",
    description: "My Product",
    price: subTotal,
  };
  return (
    <div>
      <Header />
      <Navbar />
      <div className="font-[sans-serif] text-black font-semibold">
        <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
          <div className="bg-gray-100 sm:h-screen sm:sticky sm:top-0 lg:min-w-[50%] sm:min-w-[50%]">
            <div className="relative h-full">
              <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                <div className="space-y-4">
                  {items.map((item) => {
                    return (
                      <div key={item.id} className="flex items-start gap-4">
                        <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md justify-center items-center">
                          <img
                            src={item.img}
                            className="w-full h-full object-cover rounded-md"
                            alt={item.artist}
                          />
                        </div>
                        <div className="w-full">
                          <h3 className="text-base">{item.artist}</h3>
                          <ul className="text-xs  space-y-2 mt-2">
                            <li className="flex flex-wrap gap-4">
                              Dimension{" "}
                              <span className="ml-auto">{item.dimension}</span>
                            </li>
                            <li className="flex flex-wrap gap-4">
                              Quantity{" "}
                              <span className="ml-auto">{item.quantity}</span>
                            </li>
                            <li className="flex flex-wrap gap-4">
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

              <div className="md:absolute md:left-0 md:bottom-0 bg-primary_alt w-full h-auto p-4 ">
                <div className="flex justify-between items-center flex-wrap gap-8 text-base">
                  <div className="flex-1">
                    <input
                      className="w-full rounded-md h-12 p-3 md:h-10 md:p-2 lg:h-12 lg:p-3"
                      placeholder="Gift Card, Redemption or Discount Code"
                    />
                  </div>
                  <button type="button" className="btn rounded-3xl ">
                    Apply
                  </button>
                </div>
                <div className="flex flex-wrap gap-4 mt-2 text-base text-white">
                  Total{" "}
                  <span className="ml-auto">
                    ${parseFloat(subTotal).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section in checkout */}
          <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 relative top-0">
            <div className="flex gap-1 flex-col items-center space-y-2 mb-2">
              <span className="text-gray-400 text-sm">Express checkout</span>
              <div className="py-2 px-4 flex items-center justify-center mb-4 w-full">
                <div className="w-[100%]">

                <PaypalCheckoutButton
                  product={product}
                  style={{
                    color: "blue", // 'blue', 'silver', 'gold', 'white', 'black'
                    shape: "pill", // 'rect' or 'pill'
                    label: "pay", // 'paypal', 'pay', 'buynow', 'checkout'
                    layout: "horizontal", // 'vertical' or 'horizontal'
                    height: 45, // Height of the button (default is auto)
                    tagline: false, // Display a tagline (optional)
                  }}
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
        </div>
      </div>
    </div>
  );
}

export default Checkout;
