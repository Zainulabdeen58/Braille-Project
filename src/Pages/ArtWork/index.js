import React, { useEffect, useRef } from "react";
import Data from "../../API/artworkdata";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cartslice";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { speakText } from "../../Redux/accessibility/index";
import { addfavourite } from "../../Redux/favouritelistslice";
import Container from "../../Components/Container";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ArtWork() {
  const isHighContrast = useSelector(
    (state) => state.accessibility.isHighContrast
  );
  const isTextSize = useSelector((state) => state.accessibility.isTextSize);
  const isTextSpace = useSelector((state) => state.accessibility.isTextSpace);
  const isLineHeight = useSelector((state) => state.accessibility.isLineHeight);
  const isLinkHighLight = useSelector(
    (state) => state.accessibility.isLinkHighLight
  );

  const favouriteItems = useSelector((state) => state.FavouriteList.items);
  const dispatch = useDispatch();
  const cardsRef = useRef([]);  


  // Gsap animation code
  // useEffect(() => {

  //   gsap.fromTo(
  //     cardsRef.current,
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       stagger: 0.2, 
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: "#Projects",
  //         markers:true,
  //         start: "top 70%", 
  //         end:   "bottom top", 
  //         scrub: true,
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // }, []);

  const handleFavourite = (item) => {
    dispatch(addfavourite(item));
  };

  const handleAddToCart = (user) => {
    dispatch(addToCart(user));
    toast.success("Item Added", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleSpeak = (text) => {
    dispatch(speakText(text));
  };

  return (
    <>
      <Container>
        <section 
          id="Projects "
          className={`w-fit mx-auto mt-5 mb-3 grid grid-cols-1 justify-items-center justify-around gap-y-12 gap-x-14 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 2xlg:gap-x-8 
            ${isTextSpace ? "tracking-widest" : ""} 
            ${isLineHeight ? "leading-loose" : ""} 
            ${isHighContrast ? "font-bold text-black" : "font-medium text-gray-400"}`}
        >
          {Data.map((product, index) => {
            const isFavourite = favouriteItems.some(
              (fav) => fav.id === product.id
            );
            return (
              <div
                key={product.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl lg:w-56 xlg:w-64 2xlg:w-72 "
              >
                <NavLink to={`/artwork-shop/${product.id}`}>
                  <img
                    src={product.img}
                    alt="Product"
                    className={`h-80 w-72 object-cover rounded-t-xl ${
                      isLinkHighLight ? "relative" : ""
                    }`}
                    loading="lazy"
                  />
                  
                  {/* HighLight Accessibility  */}
                  <span
                    className={`${
                      isLinkHighLight
                        ? "rounded-t-xl bg-yellow-400 absolute top-0 h-80 w-full opacity-30 z-10"
                        : ""
                    }`}
                  ></span>
                </NavLink>

                <button
                  aria-label={isFavourite ? "Unfavorite" : "Favorite"}
                  onClick={() => handleFavourite(product)}
                  className="absolute top-2 right-2 z-50 cursor-pointer"
                >
                  <FaHeart
                    className={`text-2xl transition-colors duration-300 ${
                      isFavourite ? "text-red-500" : "text-white"
                    }`}
                  />
                </button>

                <div className="px-4 py-3 w-72 h-36 lg:w-56 xlg:w-64 2xlg:w-72">
                  <div className="flex justify-between items-center">
                    <span
                      className={`mr-3 uppercase ${
                        isTextSize ? "text-[0.9rem]" : "text-xs"
                      }`}
                      onMouseEnter={() => handleSpeak(product.dimension)}
                    >
                      {product.dimension}
                    </span>

                    <span
                      className={`font-semibold text-black cursor-auto my-1 ${
                        isTextSize ? "text-xl" : "text-lg"
                      }`}
                      onMouseEnter={() => handleSpeak(`$ ${product.price}`)}
                    >
                      ${product.price}
                    </span>
                  </div>

                  <span
                    className={`text-black h-14 overflow-hidden block capitalize ${
                      isTextSize ? "text-xl" : "text-lg"
                    }`}
                    onMouseEnter={() => handleSpeak(product.artist)}
                  >
                    {product.artist}
                  </span>

                  <div className="flex items-center">
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-bag-plus cursor-pointer hover:text-black absolute bottom-4 right-5"
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
      </Container>
    </>
  );
}

export default ArtWork;
