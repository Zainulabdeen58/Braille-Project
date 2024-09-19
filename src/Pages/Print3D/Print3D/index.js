import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { addToCart } from "../../../Redux/cart/cartslice";
import Data from "../../../API/3Ddata";
import Header from "../../../Components/Header";
import Navbar from "../../../Components/Navbar";
import ViewCart from "../../../Components/ViewCart";

function Print3D() {
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = (id) => {
    setIsFavorited((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the clicked item
    }));
  };
  const dispatch = useDispatch();
  const handleAddToCart = (user) => {
    console.log(user);
    dispatch(addToCart(user));
  };
  return (
    <>
      <Header />
      <Navbar />
      <ViewCart/>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-around gap-y-20 gap-x-14 lg:gap-x-10 xlg:gap-x-14 mt-5 mb-5"
      >
        {Data.map((product) => {
          return (
            <div
              key={product.id}
              className="relative w-72 lg:w-56 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <NavLink to={`/3D-prints/${product.id}`}>
                <img
                  src={product.img}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
              </NavLink>
              <div
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-2 right-2 opacity-0 transition-opacity duration-300 cursor-pointer hover:opacity-100 group-hover:opacity-100"
              >
                <FaHeart
                  className={`text-2xl transition-colors duration-300 ${
                    isFavorited[product.id] ? "text-red-500" : "text-white"
                  }`}
                />
              </div>
              <div className="px-4 py-3 w-72 lg:w-56">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Classic
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.artist}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    ${product.price}
                  </p>
                  {/* Icon Add to Cart */}
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus cursor-pointer"
                      viewBox="0 0 16 16"
                      onClick={() => {
                        handleAddToCart(product);
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
<script>
    kofiWidgetOverlay.draw('mohamedghulam', {
            'type': 'floating-chat',
            'floating-chat.donateButton.text': 'Support me',
            'floating-chat.donateButton.background-color': '#323842',
            'floating-chat.donateButton.text-color': '#fff'
        });
</script> */}

      {/* <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center  ">
        {Data.map((user) => {
          return (
            <div key={user.id} id="card" className="w-60 h-[54vh] mt-4 p-2 ">
              <div id="card-img" className="relative w-56 h-[32vh] outline outline-8 outline-slate-700 outline-offset-8 ">
                <NavLink to={`/3D-prints/${user.id}`}>
                  <img
                    src={user.img}
                    alt="Pictures"
                    className="w-full h-full bg-white"
                  />
                </NavLink>
                Wishlist Icon
                <div onClick={() => toggleFavorite(user.id)} className="absolute top-2 right-2 opacity-0 transition-opacity duration-300 cursor-pointer hover:opacity-100 group-hover:opacity-100">
                  <FaHeart className={`text-2xl transition-colors duration-300 ${isFavorited[user.id] ? "text-red-500" : "text-gray-300"}`} />
                </div>
              </div>
              <div id="card-footer">
                <div className="my-4 px-4 flex items-center justify-between md:mt-5 lg:mt-6">
                  <p className="font-bold  underline italic  text-black">{user.artist}</p>
                  <p className="rounded-full bg-primary_alt px-2 py-0.5 text-xs font-semibold text-white">
                    ${user.price}
                  </p>
                </div>

                <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-1 px-3 rounded"  >
                  Add Cart
                </button>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default Print3D;
