import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrash3Fill } from "react-icons/bs";
import { speakText } from "../../Redux/accessibility/index";
import { toast } from "react-toastify";
import Container from "../../Components/Container";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../Redux/cartslice/index";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items); // Adjust according to your state structure

  const handleSpeak = (text) => {
    dispatch(speakText(text));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Remove Form Cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <>
      <Container>
      <div className="bg-white divide-y divide-gray-300 px-4 mx-auto md:max-w-[85%] lg:max-w-[80%]">
          <h1 className="text-3xl underline font-bold p-5 lg:text-5xl">Cart</h1>
          {/*  */}
          {items.map((item) => {
            return (
              <div className="grid md:grid-cols-5  items-center gap-4 py-4">
                <div className="col-span-3 flex items-center gap-6 ">
                <div className="w-28 h-28 shrink-0 md:w-32 md:h-32">
                  <img src={item.img} className="w-full h-full object-contain" alt={item.artist} />
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 h-12 md:h-14 overflow-hidden"
                   onMouseEnter={()=> handleSpeak(item.artist)}>
                    {item.artist}
                  </h3>
                  <h6 className="text-sm  text-gray-500 mt-1">{item.dimension}</h6>
                  <BsFillTrash3Fill  className="mt-1 cursor-pointer text-xl"
                  onClick={() => {
                    handleRemoveFromCart({ id: item.id })
                  }}/>
                </div>
                </div>

                <h4 className="text-base font-bold text-gray-800 md:text-lg">
                  ${item.price * item.quantity}
                </h4>
                <div className="flex items-center col-span-2 md:col-span-1">
                      <div className="flex divide-x border w-max rounded-lg overflow-hidden cursor-pointer  md:text-base shrink-0 ml-auto">
                        <button
                          type="button"
                          className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
                          onClick={() => {
                            handleDecreaseQuantity(item.id);
                          }}
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
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default Cart;
