import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../API/artworkdata";
import Container from "../../Components/Container";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  addToCart,
} from "../../Redux/cartslice/index";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { speakText } from "../../Redux/accessibility";

function SingleProduct() {
  const dispatch = useDispatch();
  const Items = useSelector((state) => state.cart.items);
  const { id } = useParams();

  const Product = Data.find((user) => user.id === Number(id));

  const cartItem = Items.find((item) => item.id === Product.id);

  const handleAddToCart = (user) => {
    dispatch(addToCart(user));
    toast.success("Item Added", {
      position: "bottom-right",
      autoClose: 2000,
      closeOnClick: true,
      draggable: true,
      theme: "light",
    });
  };

  if (!Product) {
    return <h1>Item not found</h1>;
  }

  return (
    <Container>
      <div
        id="product-container"
        className="bg-secondary w-full flex mt-1 flex-col md:flex-row"
      >
        <div
          id="product-image"
          className="w-full md:w-[45%] md:min-h-screen lg:h-[100vh]"
        >
          <img src={Product.img} alt="product_pic" className="h-full w-full" />
        </div>
        <div
          id="product-content"
          className="w-full min-h-screen my-4 flex justify-center items-center md:w-[55%] md:my-0 lg:h-[100vh]"
        >
          <div className="block mx-auto w-[80%] text-center md:w-[60%]">
            <h1
              className="text-3xl font-semibold mb-4 md:text-4xl md:mb-7 md:mt-2 lg:text-5xl"
              onMouseEnter={() => dispatch(speakText(Product.artist))} // Call speakText on focus
              tabIndex={0} // Make it focusable
            >
              {Product.artist}
            </h1>

            <h5
              className="my-3 md:my-4 lg:my-5"
              onMouseEnter={() =>
                dispatch(speakText("Painting, Drawing & Works on Paper"))
              }
            >
              Painting, Drawing & Works on Paper
            </h5>
            <p
              className="text-2xl my-3 underline italic font-bold"
              onMouseEnter={() => dispatch(speakText("Classic"))}
            >
              Classic
            </p>

            <p
              className="text-justify"
              onMouseEnter={() => dispatch(speakText(Product.description))} // Call speakText on focus
              tabIndex={0} // Make it focusable
            >
              {Product.description}
            </p>

            <div className="flex gap-4 max-md:flex-col mt-6 md:mt-4 lg:mt-6">
              <NavLink
                to={"/checkout"}
                className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-primary_alt hover:bg-primary text-white"
                onMouseEnter={() => dispatch(speakText("Checkout"))}
              >
                Checkout
              </NavLink>
            </div>

            <div className="flex gap-4 mt-6 items-center md:mt-4 lg:mt-6 md:mb-2">
              <div className="flex-1">
                <button
                  type="button"
                  className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-primary_alt hover:bg-primary text-white"
                  onClick={() => handleAddToCart(Product)}
                  onMouseEnter={() => dispatch(speakText("Add to Cart"))}
                >
                  Add to Cart
                </button>
              </div>

              <div>
                <span className="flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(decreaseQuantity({ id: Product.id }))
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2.5 fill-current"
                      viewBox="0 0 124 124"
                    >
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
                    </svg>
                  </button>

                  <span className="mx-3 font-bold">
                    {cartItem ? cartItem.quantity : 0}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      dispatch(increaseQuantity({ id: Product.id }))
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2.5 fill-current"
                      viewBox="0 0 42 42"
                    >
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"></path>
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SingleProduct;
