import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAccessibility, MdTextFields, MdZoomInMap } from "react-icons/md";
import { RiTextSpacing, RiVoiceprintFill } from "react-icons/ri";
// import { LuMousePointer2 } from "react-icons/lu";
import { MdContrast } from "react-icons/md";
import { CgDropInvert } from "react-icons/cg";
import {
  toggleSpeak,
  stopSpeech,
  speakText,
  toggleHighContrast,
  toggleTextSize,
  // toggleCursorSize,
  toggleFontStyle,
  toggleLineHeight,
  toggleTextSpacing,
  toggleLinkHighLight,
  toggleSaturation,
  toggleZoomIn,
} from "../Redux/accessibility/index";
import { FaItalic, FaLink, FaTextHeight } from "react-icons/fa";

const Accessibility = ()=> {
  const dispatch = useDispatch();

  const {
    isSpeechEnabled,
    isHighContrast,
    isZoomIn,
    isTextSize,
    isCursorSize,
    isFontStyle,
    isLineHeight,
    isTextSpace,
    isLinkHighLight,
    isSaturation,
  } = useSelector((state) => state.accessibility);

  // Cursor Size

  useEffect(() => {
    document.body.className = isCursorSize ? "large-cursor" : "default-cursor";
  }, [isCursorSize]);

  // Font Style
  useEffect(() => {
    document.body.className = isFontStyle ? "italic" : "normal";
  }, [isFontStyle]);

  // Zoom the screen
  useEffect(() => {
    document.body.style.zoom = isZoomIn ? 1.09 : 1;
    // document.body.style.transform = `scale(${zoomLevel})`;
    // document.body.style.transformOrigin = "0 0";  // Ensures scaling starts from the top-left corner
  }, [isZoomIn]);

  const handleSpeak = () => {
    dispatch(toggleSpeak());
    // If speech is enabled, stop any current speech
    if (isSpeechEnabled) {
      dispatch(stopSpeech());
    }
  };

  const handleHighContrast = () => {
    dispatch(toggleHighContrast());
  };

  const handleZoomIn = () => {
    dispatch(toggleZoomIn());
  };

  const handleTextSize = () => {
    dispatch(toggleTextSize());
  };

  // const handleCursorSize = () => {
  //   dispatch(toggleCursorSize());
  // };

  const handleFontStyle = () => {
    dispatch(toggleFontStyle());
  };

  const handleLineHeight = () => {
    dispatch(toggleLineHeight());
  };

  const handleTextSpacing = () => {
    dispatch(toggleTextSpacing());
  };

  const handleLinkHighLight = () => {
    dispatch(toggleLinkHighLight());
  };

  const handleSaturation = () => {
    dispatch(toggleSaturation());
  };

  return (
    <div className="drawer w-20 fixed bottom-3 left-4 z-[150]">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* View Cart Button */}

        <label htmlFor="my-drawer-5" className="drawer-button">
          <div
            role="button"
            className="btn bg-primary_alt hover:bg-primary pt-1 ml-2 mt-2"
          >
            <div className="indicator">
              <MdAccessibility className="text-3xl text-secondary" />
            </div>
          </div>
        </label>
      </div>

      {/* Page content here */}
      <div className="drawer-side h-[100%]">
        <label
          htmlFor="my-drawer-5"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>

        <div className="w-full max-w-xl bg-gray-200 shadow-lg relative h-full z-[1001] ">
          <div className="overflow-auto  p-2 py-6 h-full md:p-5">
            <div className="flex items-center gap-4 rounded-lg text-white bg-black py-2 px-3">
              <h3
                className={`text-2xl  flex-1 underline ${isHighContrast ? "font-extrabold" : "font-bold" } ${isTextSpace ? "tracking-widest " : ""}`}
                // onMouseEnter={() => handleSpeak("Acessibility")}
                onMouseEnter={() => dispatch(speakText("Acessibility"))}
                >
                Acessibility
              </h3>
              <label htmlFor="my-drawer-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 ml-2 cursor-pointer shrink-0 fill-white hover:fill-red-500"
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

            <div className="w-full h-[100%] md:h-[88%] mt-3 grid justify-items-center content-between gap-y-10 md:gap-0 grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-4">
              

              {/* Contrast Button */}
              <div
                className={`w-32 h-20 relative flex flex-col justify-center items-center rounded-xl cursor-pointer border-2 md:w-32 md:h-20 xlg:w-36 xlg:h-24 bg-white hover:border-black ${
                  isHighContrast ? "border-black" : ""
                }`}
                onClick={handleHighContrast}
              >
                {/* Checked Button */}
                <div className="absolute top-1 right-1 w-5 h-3">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check4"
                      checked={isHighContrast}
                      onChange={handleHighContrast}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <MdContrast className="text-3xl" />
                <p className="font-bold text-base">
                  {isHighContrast ? "High Contrast" : "Low Contrast"}
                </p>
              </div>

              {/* Speak Button */}
              <div
                className={`w-32 h-20 relative flex flex-col justify-center items-center rounded-xl cursor-pointer border-2 md:w-32 md:h-20 xlg:w-36 xlg:h-24 bg-white hover:border-black ${
                  isSpeechEnabled ? "border-black" : ""
                }`}
                onClick={handleSpeak}
              >
                {/* Checked Button */}
                <div className="absolute top-1 right-1 w-5 h-3">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check4"
                      checked={isSpeechEnabled}
                      onChange={handleSpeak}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <RiVoiceprintFill className="text-3xl" />
                <p className="font-bold text-base">
                  {isSpeechEnabled ? "Voice ON" : "Voice OFF"}
                </p>
              </div>

              {/* High-Light-Link Button */}
              <div
                className={`w-32 h-20 relative flex flex-col justify-center items-center rounded-xl cursor-pointer border-2 md:w-32 md:h-20 xlg:w-36 xlg:h-24 bg-white hover:border-black ${
                  isLinkHighLight ? "border-black" : ""
                }`}
                onClick={handleLinkHighLight}
              >
                 {/* Checked Button */}
                 <div className="absolute top-1 right-1 w-5 h-3">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check4"
                      checked={isLinkHighLight}
                      onChange={handleLinkHighLight}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <FaLink className="text-3xl" />
                <p className="font-bold text-base">
                  {isLinkHighLight ? "HighLight On" : "HighLight OFF"}
                </p>
              </div>

              {/* Text Size Button */}
              <div
                className={`w-32 h-20 relative flex flex-col justify-center items-center rounded-xl cursor-pointer border-2 md:w-32 md:h-20 xlg:w-36 xlg:h-24 bg-white hover:border-black ${
                  isTextSize ? "border-black" : ""
                }`}
                onClick={handleTextSize}
              >
                {/* Checked Button */}
                <div className="absolute top-1 right-1 w-5 h-3">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check4"
                      checked={isTextSize}
                      onChange={handleTextSize}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <MdTextFields
                  className={`${isTextSize ? "text-3xl" : "text-2xl"}`}
                />
                <p className="font-bold text-base">
                  {isTextSize ? "Big_Text On" : "Big_Text OFF"}
                </p>
              </div>

              {/* Font Style Button */}
              <div
                className={`w-32 h-20 relative flex flex-col justify-center items-center rounded-xl cursor-pointer border-2 md:w-32 md:h-20 xlg:w-36 xlg:h-24 bg-white hover:border-black ${
                  isFontStyle ? "border-black" : ""
                }`}
                onClick={handleFontStyle}
              >
                {/* Checked Button */}
                 <div className="absolute top-1 right-1 w-5 h-3">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check4"
                      checked={isFontStyle}
                      onChange={handleTextSize}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <FaItalic className="text-3xl" />
                <p className="font-bold text-base">
                  {isFontStyle ? "ITACLIC ON" : "ITACLIC OFF"}
                </p>
              </div>

              {/* Cursor Size Button ********** Image Issue*/}
              {/* <div
                className={`w-32 h-20 relative flex flex-col justify-center items-center rounded-xl cursor-pointer border-2 md:w-32 md:h-20 xlg:w-36 xlg:h-24 bg-white hover:border-black ${
                  isCursorSize ? "border-black" : ""
                }`}
                onClick={handleCursorSize}
              >
                Checked Button *********
                <div className="absolute top-1 right-1 w-5 h-3">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check4"
                      checked={isCursorSize}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                
                <LuMousePointer2 className="text-3xl" />
                <p className="font-bold text-base">
                  {isCursorSize ? "Big Cursor" : "Normal Cursor"}
                </p>
              </div> */}

              {/* Line Height Button */}
              <div
                className={`w-32 h-20 relative flex flex-col justify-center items-center rounded-xl cursor-pointer border-2 md:w-32 md:h-20 xlg:w-36 xlg:h-24 bg-white hover:border-black ${
                  isLineHeight ? "border-black" : ""
                }`}
                onClick={handleLineHeight}
              >
               {/* Checked Button */}
               <div className="absolute top-1 right-1 w-5 h-3">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check4"
                      checked={isLineHeight}
                      onChange={handleLineHeight}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <FaTextHeight
                  className={`${isLineHeight ? "text-3xl" : "text-2xl"}`}
                />
                <p className="font-bold text-base">
                  {isLineHeight ? "Line Height ON" : "Line Height OFF"}
                </p>
              </div>

              {/* text Spacing Button */}
              <div
                className={`w-32 h-20 relative flex flex-col justify-center items-center rounded-xl cursor-pointer border-2 md:w-32 md:h-20 xlg:w-36 xlg:h-24 bg-white hover:border-black ${
                  isTextSpace ? "border-black" : ""
                }`}
                onClick={handleTextSpacing}
              >
                {/* Checked Button */}
                <div className="absolute top-1 right-1 w-5 h-3">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check4"
                      checked={isTextSpace}
                      onChange={handleTextSpacing}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <RiTextSpacing className="text-3xl" />
                <p className="font-bold text-base">
                  {isTextSpace ? "Text Space ON" : "Text Space OFF"}
                </p>
              </div>

              {/* Saturated Button */}
              <div
                className={`w-32 h-20 relative flex flex-col justify-center items-center rounded-xl cursor-pointer border-2 md:w-32 md:h-20 xlg:w-36 xlg:h-24 bg-white hover:border-black ${
                  isSaturation ? "border-black" : ""
                }`}
                onClick={handleSaturation}
              >
               {/* Checked Button */}
               <div className="absolute top-1 right-1 w-5 h-3">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check4"
                      checked={isSaturation}
                      onChange={handleSaturation}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <CgDropInvert className="text-3xl" />
                <p className="font-bold text-base">
                  {`${isSaturation ? "Saturation ON" : "Saturation OFF"}`}
                </p>
              </div>

              {/*Zoom in Button  */}

              <div
                className={`w-32 h-20 relative flex flex-col justify-center items-center rounded-xl cursor-pointer border-2 md:w-32 md:h-20 xlg:w-36 xlg:h-24 bg-white hover:border-black ${
                  isZoomIn ? "border-black" : ""
                }`}
                onClick={handleZoomIn}
              >
              {/* Checked Button */}
              <div className="absolute top-1 right-1 w-5 h-3">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check4"
                      checked={isZoomIn}
                      onChange={handleZoomIn}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <MdZoomInMap className="text-3xl" />
                <p className="font-bold text-base">
                  {`${isZoomIn ? "Zoom In" : "Default"}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;
