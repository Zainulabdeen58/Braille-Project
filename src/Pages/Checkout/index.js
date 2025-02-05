import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Accessibility from "../../Components/Accessibility";
import PaypalCheckoutButton from "../../Components/PaypalCheckoutButton";
import { useDispatch } from "react-redux";
import { speakText } from "../../Redux/accessibility/index";
import Footer from "../../Components/Footer";
import { useFormik } from "formik";
import { paySchema } from "../../Schema";

const Checkout = () => {
  const dispatch = useDispatch();
  const isHighContrast = useSelector(
    (state) => state.accessibility.isHighContrast
  );
  const isTextSize = useSelector((state) => state.accessibility.isTextSize);
  const isTextSpace = useSelector((state) => state.accessibility.isTextSpace);
  const isLineHeight = useSelector((state) => state.accessibility.isLineHeight);
  const isLinkHighLight = useSelector(
    (state) => state.accessibility.isLinkHighLight
  );
  const isSaturation = useSelector((state) => state.accessibility.isSaturation);
  const items = useSelector((state) => state.cart.items);

  const subTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const products = items.map((item) => ({
    name: item.artist, // Name of the item
    unit_amount: {
      currency_code: "USD", // Adjust the currency if necessary
      value: item.price.toFixed(2),
    },
    quantity: item.quantity, // Quantity of the product
  }));

  const handleSpeak = (text) => {
    dispatch(speakText(text));
  };

  useEffect(() => {
    const Checkout = document.getElementById("Checkout");
    Checkout.classList.toggle("saturate-200", isSaturation);
  }, [isSaturation]);

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    validationSchema: paySchema,
    onSubmit: async (values) => {
      console.log("Processing payment...", values);
    },
  });

   const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };
  
  const formatExpiryDate = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");
  
    // Limit to four numeric characters
    const formattedValue = numericValue.slice(0, 4);
  
    // Add the '/' separator after the first two characters
    if (formattedValue.length > 2) {
      return formattedValue.slice(0, 2) + "/" + formattedValue.slice(2);
    } else {
      return formattedValue;
    }
  };
  

  return (
    <div>
      <Header />
      <Navbar />
      <Accessibility />

      <div className="font-[sans-serif] text-black font-semibold" id="Checkout">
        <div className="flex max-sm:flex-col h-full">
          {/* Form Section in checkout */}
          <div className="max-w-4xl w-full h-max rounded-md px-9 py-8 relative top-0 lg:min-w-[52%] sm:min-w-[52%]">
            <div className="flex gap-1 flex-col items-center space-y-2 mb-2">
              <span
                className={`${
                  isHighContrast ? "text-black " : "text-[#575d70]"
                } ${isTextSize ? "text-lg" : "text-base"} ${
                  isTextSpace ? "tracking-widest" : ""
                } `}
                onMouseEnter={() => handleSpeak("Express checkout")}
              >
                Express checkout
              </span>
              {/* Paypal Button */}
              <div className="py-2 px-4 flex items-center justify-center mb-4 w-72 md:w-80 md:mx-auto  ">
                <div className="w-[100%] px-1 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <PaypalCheckoutButton
                    products={products}
                    style={{
                      // color: "blue", // 'blue', 'silver', 'gold', 'white', 'black'
                      shape: "pill", // 'rect' or 'pill'
                      label: "pay", // 'paypal', 'pay', 'buynow', 'checkout'
                      layout: "vertical", // 'vertical' or 'horizontal'
                      height: 45, // Height of the button (default is auto)
                      tagline: false, // Display a tagline (optional)
                    }}
                    subTotal={subTotal}
                  />
                </div>
              </div>

              <div className="flex items-center w-full mt-2">
                <hr className="flex-grow border-gray-300" />
                <span
                  className="text-gray-500 mx-2"
                  onMouseEnter={() => handleSpeak("OR")}
                >
                  OR
                </span>
                <hr className="flex-grow border-gray-300" />
              </div>
            </div>

            <h2
              className={`font-bold text-gray-800 ${
                isTextSize ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"
              } ${isTextSpace ? "tracking-widest" : ""} `}
              onMouseEnter={() => handleSpeak("Complete your order")}
            >
              Complete your order
            </h2>
            <form className="mt-8">
              <div>
                <h3
                  className={` font-bold text-gray-800 mb-4 ${
                    isTextSize ? "text-lg lg:text-xl" : "text-base lg:text-lg"
                  } ${isTextSpace ? "tracking-widest" : ""} `}
                  onMouseEnter={() => handleSpeak("Personal Details")}
                >
                  Personal Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md"
                      onMouseEnter={() => handleSpeak("First Name")}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md "
                      onMouseEnter={() => handleSpeak("Last Name")}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md "
                      onMouseEnter={() => handleSpeak("Email")}
                    />
                  </div>

                  <div>
                    <input
                      type="number"
                      placeholder="Phone No"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md "
                      onMouseEnter={() => handleSpeak("Phone No")}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3
                  className={` font-bold text-gray-800 mb-4 ${
                    isTextSize ? "text-lg lg:text-xl" : "text-base lg:text-lg"
                  } ${isTextSpace ? "tracking-widest" : ""}`}
                  onMouseEnter={() => handleSpeak("Shipping Address")}
                >
                  Shipping Address
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Address Line"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md "
                      onMouseEnter={() => handleSpeak("Address Line")}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md "
                      onMouseEnter={() => handleSpeak("City")}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md "
                      onMouseEnter={() => handleSpeak("State")}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md "
                      onMouseEnter={() => handleSpeak("Zip Code")}
                    />
                  </div>
                </div>

                <div className="flex gap-4 max-md:flex-col mt-8">
                  <button
                    type="button"
                    className={`rounded-md px-6 py-3 w-full text-sm lg:text-base tracking-wide bg-primary_alt hover:bg-primary `}
                    onMouseEnter={() => handleSpeak("Pay Now")}
                  >
                    <span
                      className={`${
                        isLinkHighLight
                          ? "text-yellow-600 bg-white"
                          : "text-white"
                      }`}
                    >
                      Pay Now
                    </span>
                  </button>
                </div>
              </div>
            </form>

            {/* PAY WITH CARD */}
            <div className="max-w-screen-md mx-auto bg-gray-200 p-4 mt-2 rounded-sm">
              <h2
                className={`font-bold text-gray-800  mt-3 ${
                  isTextSize ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"
                } ${isTextSpace ? "tracking-widest" : ""} `}
                onMouseEnter={() => handleSpeak("Pay with card")}
              >
                Pay With Card
              </h2>
              <form className="mt-8" onSubmit={formik.handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Card Number */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="cardNumber"
                      className="font-semibold text-gray-600"
                    >
                      Card Number
                    </label>
                    <input
                      // type=""
                      name="cardNumber"
                      id="cardNumber"
                      placeholder="4444 4444 4444 4444"
                      maxLength="19"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md"
                      onChange={(e) => {
                        e.target.value = formatCardNumber(e.target.value);
                        formik.handleChange(e);
                      }}
                      onBlur={formik.handleBlur}
                      value={formatCardNumber(formik.values.cardNumber)}
                    />
                    <div className="h-4">

                    {formik.touched.cardNumber && formik.errors.cardNumber && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.cardNumber}
                      </p>
                    )}
                    </div>
                  </div>

                  {/* Expiry Date */}
                  <div>
                    <label
                      htmlFor="expiryDate"
                      className="font-semibold text-gray-600"
                    >
                      Expiry Date
                    </label>
                    <input
                      // type="month"
                      placeholder="12/25"
                      name="expiryDate"
                      id="expiryDate"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md"
                      onChange={(e) => {
                        e.target.value = formatExpiryDate(e.target.value);
                        formik.handleChange(e);
                      }}
                      onBlur={formik.handleBlur}
                      value={formatExpiryDate(formik.values.expiryDate)}
                    />
                    <div className="h-8">

                    {formik.touched.expiryDate && formik.errors.expiryDate && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.expiryDate}
                      </p>
                    )}
                    </div>
                  </div>

                  {/* CVV */}
                  <div>
                    <label
                      htmlFor="cvv"
                      className="font-semibold text-gray-600"
                    >
                      CVV
                    </label>
                    <input
                      // type="password"
                      name="cvv"
                      id="cvv"
                      placeholder="e.g., 123"
                      maxLength="4"
                      className="px-4 py-3 text-sm lg:text-base bg-gray-100 focus:bg-transparent text-gray-800 w-full rounded-md"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cvv}
                    />
                    {formik.touched.cvv && formik.errors.cvv && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.cvv}
                      </p>
                    )}
                  </div>
                </div>

                <button
                    type="button"
                    className={`rounded-md px-6 py-3 w-full text-sm lg:text-base tracking-wide bg-primary_alt hover:bg-primary `}
                    onMouseEnter={() => handleSpeak("Pay Now")}
                  >
                    <span
                      className={`${
                        isLinkHighLight
                          ? "text-yellow-600 bg-white"
                          : "text-white"
                      }`}
                    >
                      Pay Now
                    </span>
                  </button>
              </form>
            </div>
          </div>

          {/* Product Section in checkout */}
          <div
            className={`bg-gray-100 sm:h-screen sm:sticky sm:top-0 lg:min-w-[45%] sm:min-w-[45%] ${
              isHighContrast ? "font-bold" : "font-normal"
            } `}
          >
            <div className="relative h-full">
              <div className="px-5 py-6  sm:overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 sm:h-[calc(100vh-60px)]  md:px-7 md:pr-9 md:pb-28">
                <div className="space-y-4">
                  {items.map((item) => {
                    return (
                      <div key={item.id} className="flex items-start gap-4">
                        <div
                          className={`max-lg:w-28 max-lg:h-28 flex p-2 shrink-0  rounded-md justify-center items-center bg-gray-300 ${
                            isTextSize ? "w-36 h-36 " : "w-32 h-32"
                          }`}
                        >
                          <img
                            src={item.img}
                            className="w-full h-full object-cover rounded-md"
                            alt={item.artist}
                          />
                        </div>

                        <div
                          className={`w-full ${
                            isTextSpace ? "tracking-wider" : ""
                          } ${
                            isHighContrast ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {/* */}
                          {/* truncate w-44 */}
                          {/* w-36 sm:w-[10.5rem] lg:w-56 xlg:w-80 */}
                          <h3
                            className={`lg:text-lg md:h-12 h-11 overflow-hidden ${
                              isTextSize
                                ? "text-base lg:text-lg"
                                : "text-sm lg:text-base"
                            } ${isLineHeight ? "leading-relaxed" : ""}`}
                            onMouseEnter={() => handleSpeak(item.artist)}
                          >
                            {item.artist}
                          </h3>
                          <ul
                            className={`${
                              isTextSize
                                ? "text-xs lg:text-base "
                                : "text-xs lg:text-sm"
                            }  space-y-2 mt-1 text-gray-600   `}
                          >
                            <li className="flex">
                              <span
                                onMouseEnter={() => handleSpeak("Dimension")}
                              >
                                Dimension{" "}
                              </span>
                              <span
                                className="ml-auto"
                                onMouseEnter={() => handleSpeak(item.dimension)}
                              >
                                {item.dimension}
                              </span>
                            </li>

                            <li className="flex">
                              <span
                                onMouseEnter={() => handleSpeak("Quantity")}
                              >
                                Quantity
                              </span>
                              <span
                                className="ml-auto"
                                onMouseEnter={() => handleSpeak(item.quantity)}
                              >
                                {item.quantity}
                              </span>
                            </li>

                            <li className="flex">
                              <span
                                onMouseEnter={() => handleSpeak("Total Price")}
                              >
                                Total Price{" "}
                              </span>
                              <span
                                className="ml-auto"
                                onMouseEnter={() =>
                                  handleSpeak(`$ ${item.price * item.quantity}`)
                                }
                              >
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

              <div
                className={`px-5 py-3 md:absolute md:left-0 md:bottom-0 bg-gray-100 w-full h-auto  md:px-7 md:pr-9 ${
                  isHighContrast ? "font-bold" : "font-normal"
                } `}
              >
                {/* For Coupon */}
                <div className="flex justify-between items-center gap-5 md:gap-4">
                  <div className="flex-1">
                    <input
                      className="w-full outline-gray-300 focus:outline-gray-500 rounded-md h-11 p-3 md:h-10 md:p-2 lg:h-11 lg:p-3 font-thin"
                      placeholder="Gift Card, Redemption or Discount Code"
                      onMouseEnter={() =>
                        handleSpeak("Gift Card, Redemption or Discount Code")
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className={`btn  px-4 rounded-3xl border border-gray-300 ${
                      isHighContrast ? "" : "bg-[#d9d9d9ef] text-[#50535de1]"
                    }  lg:px-7 text-[0.93rem]`}
                    onMouseEnter={() => handleSpeak("APPLY")}
                  >
                    APPLY
                  </button>
                </div>

                {/* For Subtotal */}
                <div
                  className={`flex justify-between mt-2 text-primary_alt ${
                    isTextSize ? "text-base" : "text-sm"
                  } ${isTextSpace ? "tracking-widest" : ""}`}
                >
                  <span onMouseEnter={() => handleSpeak("Subtotal Items")}>
                    Subtotal {items.length} Items
                  </span>
                  <span onMouseEnter={() => handleSpeak(`$ ${subTotal}`)}>
                    ${parseFloat(subTotal).toFixed(2)}
                  </span>
                </div>

                {/* For Shipping */}
                {/*  ${isTextSpace? "tracking-widest" : ""} */}
                <div
                  className={`flex justify-between mt-2 ${
                    isTextSize ? "text-base" : "text-sm"
                  }`}
                >
                  <span
                    className={`text-primary_alt  `}
                    onMouseEnter={() => handleSpeak("Shipping")}
                  >
                    Shipping
                  </span>
                  <span
                    className={`text-gray-600 `}
                    onMouseEnter={() => handleSpeak("Enter shipping address")}
                  >
                    Enter shipping address
                  </span>
                </div>

                {/* For Total */}
                <div
                  className={`flex justify-between mt-2  text-primary_alt ${
                    isTextSize ? "text-lg lg:text-xl" : "text-base lg:text-lg"
                  } ${isTextSpace ? "tracking-widest" : ""}`}
                >
                  <span onMouseEnter={() => handleSpeak("Total")}>Total</span>
                  <span onMouseEnter={() => handleSpeak(`$ ${subTotal}`)}>
                    USD ${parseFloat(subTotal).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
