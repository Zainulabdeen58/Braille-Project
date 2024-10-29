import React, { useState, Suspense } from "react";
import Data from "../../API/artworkdata";
import { NavLink } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { addToCart } from "../../Redux/cartslice";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { speakText } from "../../Redux/accessibility/index";
import Container from "../../Components/Container";
import { BallTriangle } from "react-loader-spinner";


function ArtWork() {
  const isHighContrast = useSelector((state)=> state.accessibility.isHighContrast);
  const isTextSize = useSelector((state)=> state.accessibility.isTextSize);
  const isTextSpace = useSelector((state)=> state.accessibility.isTextSpace);
  const isLineHeight = useSelector((state)=> state.accessibility.isLineHeight);
  const isLinkHighLight = useSelector((state)=> state.accessibility.isLinkHighLight);


  const [isFavorited, setIsFavorited] = useState(false);
  const dispatch = useDispatch();

  const toggleFavorite = (id) => {
    setIsFavorited((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the clicked item
    }));
  };

  
  const handleAddToCart = (user) => {
    dispatch(addToCart(user));
    console.log(user);
    toast.success("Item Add", {
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
 
  const handleSpeak =(text)=>{    
    dispatch(speakText(text))
  }
  return (
    <>
      <Container>
      <Suspense fallback={<BallTriangle/>}>
        <section
          id="Projects"
          className={`w-fit mx-auto mt-5 mb-3 grid grid-cols-1 justify-items-center justify-around gap-y-12 gap-x-14  md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 2xlg:gap-x-8 ${isHighContrast? "font-bold text-black" : "text-gray-400"} ${isTextSpace? "tracking-widest" : ""} ${isLineHeight ? "leading-loose" :  ""}`}
        >
          {/* Card Image Section */}
          {Data.map((product) => {
            return (
              <div
                key={product.id}
                className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl lg:w-56 xlg:w-64 2xlg:w-72"
              >
                {/* Card Image */}

                <NavLink to={`/artwork-shop/${product.id}`}>
                
                  <img
                    src={product.img}
                    alt="Product"
                    className={`h-80 w-72 object-cover rounded-t-xl ${isLinkHighLight ? "relative":  ""}`}
                    loading="lazy"
                  />
                  <span className={`${ isLinkHighLight ? "rounded-t-xl bg-yellow-400 absolute top-0 h-80 w-full opacity-30 z-10" : "" }`}></span>
                </NavLink>

                 {/* Favourite Button */}
                <button
                  aria-label={
                    isFavorited[product.id] ? "Unfavorite" : "Favorite"
                  }
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-2 right-2 z-50 opacity-0 transition-opacity duration-300 cursor-pointer hover:opacity-100 group-hover:opacity-100"
                >
                  <FaHeart
                    className={`text-2xl transition-colors duration-300 ${
                      isFavorited[product.id] ? "text-red-500" : "text-white"
                    }`}
                  />
                </button>

                {/* Card Content section */}
                <div className="px-4 py-3 w-72 lg:w-56 xlg:w-64 2xlg:w-72">
                  <span className={` mr-3 uppercase  ${isTextSize? "text-[0.9rem]" : "text-xs"}`} onMouseEnter={()=> handleSpeak(product.dimension)}>
                    {product.dimension}
                  </span>
                  <span className={`font-bold text-black truncate block capitalize ${isTextSize? "text-xl" : "text-lg"}`} onMouseEnter={()=> handleSpeak(product.artist)}>
                    {product.artist}
                  </span>
                  <div className="flex items-center">
                  <span className={`font-semibold text-black cursor-auto my-3 ${isTextSize? "text-xl" : "text-lg"}`} onMouseEnter={()=> handleSpeak(`$ ${product.price}`)}>
                      ${product.price}
                    </span>
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
      </Suspense>
      </Container>
     
    </>
  );
}

export default ArtWork;
