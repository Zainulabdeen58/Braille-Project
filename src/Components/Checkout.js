import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Navbar from "./Navbar";

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const subTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div>
      <Header />
      <Navbar />
      <div class="font-[sans-serif] text-black font-semibold">
        <div class="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
          <div class="bg-gray-100 sm:h-screen sm:sticky sm:top-0 lg:min-w-[50%] sm:min-w-[50%]">
            <div class="relative h-full">
              <div class="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                <div class="space-y-4">
                  {items.map((item) => {
                    return (
                      <div key={item.id} class="flex items-start gap-4">
                        <div class="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md justify-center items-center">
                          <img
                            src={item.img}
                            class="w-full h-full object-cover rounded-md"
                            alt={item.artist}
                          />
                        </div>
                        <div class="w-full">
                          <h3 class="text-base">{item.artist}</h3>
                          <ul class="text-xs  space-y-2 mt-2">
                            <li class="flex flex-wrap gap-4">
                              Dimension{" "}
                              <span class="ml-auto">{item.dimension}</span>
                            </li>
                            <li class="flex flex-wrap gap-4">
                              Quantity{" "}
                              <span class="ml-auto">{item.quantity}</span>
                            </li>
                            <li class="flex flex-wrap gap-4">
                              Total Price{" "}
                              <span class="ml-auto">
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

              <div class="md:absolute md:left-0 md:bottom-0 bg-primary_alt w-full h-auto p-4 ">
                <div class="flex justify-between items-center flex-wrap gap-8 text-base">
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
                <div class="flex flex-wrap gap-4 mt-2 text-base text-white">
                  Total{" "}
                  <span class="ml-auto">
                    ${parseFloat(subTotal).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section in checkout */}
          <div class="max-w-4xl w-full h-max rounded-md px-4 py-8 relative top-0">
            <div className="flex gap-1 flex-col items-center space-y-2 mb-2">
              <span className="text-gray-400 text-sm">Express checkout</span>

              <button className="bg-yellow-400 rounded-full py-3 px-24 flex items-center justify-center mb-4 shadow-lg hover:bg-yellow-500">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="h-5 w-auto"
                />
              </button>
              <div className="flex items-center w-full mt-2">
                <hr className="flex-grow border-gray-300" />
                <span className="text-gray-500 mx-2">OR</span>
                <hr className="flex-grow border-gray-300" />
              </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-800">
              Complete your order
            </h2>
            <form class="mt-8">
              <div>
                <h3 class="text-base font-bold text-gray-800 mb-4">
                  Personal Details
                </h3>
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>

                  <div>
                    <input
                      type="number"
                      placeholder="Phone No."
                      class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <h3 class="text-base font-bold text-gray-800 mb-4">
                  Shipping Address
                </h3>
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Address Line"
                      class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md "
                    />
                  </div>
                </div>

                <div class="flex gap-4 max-md:flex-col mt-8">
                  <button
                    type="button"
                    class="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-primary_alt hover:bg-primary  text-white"
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
