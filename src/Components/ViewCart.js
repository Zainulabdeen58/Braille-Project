import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/cartslice/index";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiSolidShoppingBags  } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { speakText } from "../Redux/accessibility";

function ViewCart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items); // Adjust according to your state structure
  const isTextSize = useSelector((state) => state.accessibility.isTextSize);
  const isHighContrast = useSelector((state) => state.accessibility.isHighContrast);
  const isLineHeight = useSelector((state) => state.accessibility.isLineHeight);
  const isTextSpace = useSelector((state) => state.accessibility.isTextSpace);
  const isLinkHighLight = useSelector((state)=> state.accessibility.isLinkHighLight);


  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSpeak = (text) => {
    dispatch(speakText(text));
  };

  if (items.length === 0) {
    return (
      <div className="drawer-end fixed bottom-3 right-4 z-50 ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* View Cart Button */}
          <label htmlFor="my-drawer-4" className="drawer-button">
            <div
              role="button"
              className="btn bg-primary_alt hover:bg-primary pt-1 ml-2 mt-2"
            >
              <div className="indicator">
                <MdOutlineShoppingBag className="text-3xl text-secondary" />
              </div>
            </div>
          </label>
        </div>

        {/* Page content here */}
        <div className="drawer-side h-[100%]">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="w-full max-w-xl bg-white shadow-lg relative ml-auto h-[100%]  z-[1001]">
            <div className="overflow-auto pt-6 px-6 h-full ">
              <div className="flex items-center gap-4 text-gray-800">
                <h3
                  className="text-2xl font-bold flex-1"
                  onMouseEnter={() => handleSpeak("Shopping Cart")}
                >
                  Shopping cart
                </h3>
                <label htmlFor="my-drawer-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex flex-col justify-center items-center h-[90%]">
              <BiSolidShoppingBags  className="text-9xl"/>
              <h1 className="font-bold mt-3 text-2xl" >Cart Is Empty</h1>

              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    );
  }

  
  return (
    <div className="drawer-end fixed bottom-3 right-4 z-[110] ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* View Cart Button */}

        <label htmlFor="my-drawer-4" className="drawer-button">
          <div
            role="button"
            className="btn bg-primary_alt hover:bg-primary pt-1 ml-2 mt-2"
          >
            <div className="indicator">
              <MdOutlineShoppingBag className="text-3xl text-secondary" />
              <span className="badge badge-sm indicator-item text-primary z-0">
                {items.length}
              </span>
            </div>
          </div>
        </label>
      </div>

      {/* Page content here */}
      <div className="drawer-side h-[100%]">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="w-full max-w-xl bg-white shadow-lg relative ml-auto h-full z-[1001]">
          <div className="overflow-auto p-6 h-[calc(100vh-135px)]">
            <div className="flex items-center gap-4 text-gray-800">
              <h3
                className={`text-2xl  flex-1 ${isHighContrast? "font-extrabold" : "font-bold"} ${isTextSpace ? "tracking-widest " : ""}`}
                onMouseEnter={() => handleSpeak("Shopping Cart")}
              >
                Shopping cart
              </h3>
              <label htmlFor="my-drawer-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </label>
            </div>

            {items.map((item) => {
              return (
                <div key={item.id}>
                  <hr className="border-gray-300 my-3" />

                  <div className="grid grid-cols-3 items-start gap-4">
                    <div className="col-span-2 flex items-start gap-4">
                      <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                        <img
                          alt={item.artist}
                          src={item.img}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className={`flex flex-col  `}>
                        <h3
                          className={` ${isTextSize? "text-lg" : "text-base"} max-sm:text-sm ${isHighContrast? "font-extrabold" : "font-bold"}  ${isTextSpace ? "tracking-widest " : ""} text-gray-800`}
                          onMouseEnter={() => handleSpeak(item.artist)}
                        >
                          {item.artist}
                        </h3>
                        <p
                          className={` ${isTextSize? "text-sm" : "text-xs"} ${isHighContrast? "font-bold" : "font-semibold"} ${isTextSpace ? "tracking-widest " : ""} ${isLineHeight ? "leading-loose" : ""} text-gray-500 mt-0.5`} 
                          onMouseEnter={() => handleSpeak(item.dimension)}
                        >
                          {item.dimension}
                        </p>
                        {/* Remove Button */}
                        <button
                          type="button"
                          className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                          onClick={() => {
                            dispatch(removeFromCart({ id: item.id }));
                          }}
                          onMouseEnter={() => handleSpeak("remove")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 fill-current inline"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000"
                            ></path>
                            <path
                              d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000"
                            ></path>
                          </svg>
                          REMOVE
                        </button>
                      </div>
                    </div>

                    <div className="ml-auto">
                      <h4
                        className={`text-lg max-sm:text-base text-gray-800 ${isHighContrast? "font-extrabold" : "font-bold"} ${isTextSpace ? "tracking-widest " : ""}`}
                        onMouseEnter={() =>
                          handleSpeak(`$ ${item.price * item.quantity}`)
                        }
                      >
                        ${parseFloat(item.price * item.quantity).toFixed(2)}
                      </h4>

                      <span className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                        {/* Decrease Button */}
                        <button
                          type="button"
                          onClick={() => {
                            dispatch(decreaseQuantity(item.id ));
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 fill-current "
                            viewBox="0 0 124 124"
                          >
                            <path
                              d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </button>

                        <span
                          className="mx-3 font-bold"
                          onMouseEnter={() => handleSpeak(item.quantity)}
                        >
                          {item.quantity}
                        </span>
                        {/* Increase Button */}
                        <button
                          type="button"
                          onClick={() => {
                            dispatch(increaseQuantity(item.id));
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 fill-current"
                            viewBox="0 0 42 42"
                          >
                            <path
                              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className={`p-6 absolute bottom-0 w-full border-t bg-white ${isTextSize? "text-xl" : "text-lg"} ${isHighContrast? "font-extrabold" : " font-bold"} ${isTextSpace ? "tracking-widest " : ""}`}>
            <ul className="text-gray-800 divide-y">
              <li className="flex flex-wrap gap-4 ">
                <span onMouseEnter={() => handleSpeak("Subtotal")}>
                  Subtotal
                </span>
                <span
                  className="ml-auto"
                  onMouseEnter={() => handleSpeak(`$ ${totalPrice}`)}
                >
                  ${parseFloat(totalPrice).toFixed(2)}
                </span>
              </li>
            </ul>
            <NavLink to={"/checkout"}>
              <button
                type="button"
                className="mt-6 text-sm font-semibold px-6 py-3 w-full bg-primary_alt hover:bg-primary  text-white rounded-md tracking-wide"
                onMouseEnter={() => handleSpeak("Checkout")}
              >
                <span className={`${ isLinkHighLight ? "text-yellow-500 bg-white" : "" }`}>
                Checkout
                </span>
                
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default ViewCart;
