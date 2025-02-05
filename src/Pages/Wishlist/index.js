import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrash3Fill } from "react-icons/bs";
import { removefavourite } from "../../Redux/favouritelistslice/index";
import { speakText } from "../../Redux/accessibility/index";
import { addToCart } from "../../Redux/cartslice";
import { toast } from "react-toastify";
import Container from "../../Components/Container";



function WishList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.FavouriteList.items);
  const isTextSize = useSelector((state)=> state.accessi)

  const handleSpeak = (text) => {
    dispatch(speakText(text));
  };

  const handleRemoveFavourite = (id)=>{
    dispatch(removefavourite(id));
    toast.error("Remove Form the Wishlist", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
  }

  const handleAddtoCart = (product)=>{
    dispatch(addToCart(product));
    console.log(product);
    
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
  }

  return (
    <>
    <Container>
      <div className="bg-white divide-y divide-gray-300 px-4 mx-auto md:max-w-[85%] lg:max-w-[80%]">
        <h1 className="text-3xl underline text-center font-bold p-5 italic lg:text-5xl">Wishlist</h1>
        {/*  */}
        {items.map((item) => {
          return (
            <div className="grid md:grid-cols-5  items-center gap-4 py-4">
              <div className="col-span-3 flex items-center gap-6 ">
                <div className="w-28 h-28 shrink-0 md:w-32 md:h-32 lg:w-36 lg:h-36">
                  <img src={item.img} className="w-full h-full object-contain" alt={item.artist} />
                </div>

                <div>
                  <h3 className="text-base md:text-lg xlg:text-xl font-bold text-gray-800 h-12 md:h-14 overflow-hidden"
                   onMouseEnter={()=> handleSpeak(item.artist)}>
                    {item.artist}
                  </h3>
                  <h6 className="text-sm  text-gray-500 mt-1">{item.dimension}</h6>
                  <BsFillTrash3Fill  className="mt-1 cursor-pointer text-xl"
                  onClick={() => {
                    handleRemoveFavourite({ id: item.id })
                  }}/>
                </div>
              </div>

              <h4 className="text-lg font-bold text-gray-800 md:text-lg lg:text-xl">${item.price}</h4>
              <div className="flex items-center col-span-2 md:col-span-1">
                <button
                  type="button"
                  className="btn bg-primary_alt hover:bg-primary text-secondary cursor-pointer  md:text-base shrink-0 ml-auto"
                  onClick={()=> handleAddtoCart(item)}
                  onMouseEnter={()=> handleSpeak("Add to cart")}
                >
                  Add to cart
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </Container>
    

    </>
  );
}

export default WishList;