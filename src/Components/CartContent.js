import React from "react";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/cart/cartslice/index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartContents = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items); // Adjust according to your state structure

  const dispatch = useDispatch();
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    // <div className="container mx-auto p-4">
    //   <h2 className="text-2xl font-bold mb-4">Cart Items</h2>

    //   {cartItems.length === 0 ? (
    //     <p className="text-gray-500">Your cart is empty.</p>
    //   ) : (
    //     <div className="space-y-4">
    //       {cartItems.map((item) => (
    //         <div
    //           key={item.id}
    //           className="flex items-center bg-white shadow-md rounded-lg p-4"
    //         >
    //           {/* Image */}
    //           <div className="w-20 h-20 overflow-hidden rounded-lg">
    //             <img
    //               src={item.img}
    //               alt={item.name}
    //               className="object-cover w-full h-full"
    //             />
    //           </div>

    //           {/* Details */}
    //           <div className="ml-4 flex-1">
    //             <h3 className="text-lg font-semibold">{item.name}</h3>
    //             <p className="text-gray-600">${item.price}</p>
    //           </div>

    //
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>

    <div className="h-auto">
      
        <div className="grid">
          <div className="p-6 overflow-x-auto">
            <div className="flex border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex-1">
                Shopping Cart
              </h2>
              <h3 className="text-base text-gray-800">4 Items</h3>
            </div>

            <table className="mt-6 w-full border-collapse divide-y">
              <thead className="whitespace-nowrap text-left">
                <tr>
                  <th className="text-base text-gray-800 p-4">Description</th>
                  <th className="text-base text-gray-800 p-4">Quantity</th>
                  <th className="text-base text-gray-800 p-4">Price</th>
                </tr>
              </thead>

              <tbody className="whitespace-nowrap divide-y">
                {cartItems.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="p-4">
                        <div className="flex items-center gap-4 w-max">
                          <div className="h-32 shrink-0">
                            <img
                              src={item.img}
                              alt={item.artist}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>
                          <div>
                            <p className="text-base font-bold text-gray-800">
                              {item.artist}
                            </p>
                            {/*  */}
                            <button
                              type="button"
                              className="mt-2 font-semibold text-red-400 text-sm"
                              onClick={() => {
                                 handleRemoveFromCart(item.id);
                              }}                              
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex divide-x border w-max rounded-lg overflow-hidden">
                          <button
                            type="button"
                            className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
                            onClick={()=>{handleDecreaseQuantity(item.id)}}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 fill-current"
                              viewBox="0 0 124 124"
                            >
                              <path
                                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button>


                          <input
                            type="button"
                            className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base" 
                            value={item.quantity}
                            readOnly 
                            />
                            
                          

                          {/* Increment Button */}
                          <button
                            type="button"
                            className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 fill-current"
                              viewBox="0 0 42 42"
                            >
                              <path
                                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                      {/* Total Price */}
                      <td className="p-4">
                        <h4 className="text-base font-bold text-gray-800">
                          ${item.price * item.quantity}
                        </h4>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <button
          type="button"
          className="p-3 px-6 bg-slate-400 rounded-xl "
          onClick={() => {
            navigate("/3D-prints");
          }}
        >
          BACK
        </button>

        {/* Sub total  */}
        {/* <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div> */}
    
    </div>
  );
};

export default CartContents;
