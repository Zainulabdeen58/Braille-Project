import React, { useEffect } from "react";
// import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { MdAccessibility } from "react-icons/md";
import {
  toggleSpeak,
  stopSpeech,
  toggleHighContrast,
  toggleTextSize,
  toggleCursorSize,
  toggleFontStyle,
  toggleLineHeight,
  toggleTextSpacing,  
  toggleLinkHighLight,
  toggleSaturation,
  // decreaseSaturation,
  // increaseSaturation,
} from "../Redux/accessibility/index";
import { zoomIn , zoomOut } from "../Redux/accessibility/index";

function Accessibility() {
  const dispatch = useDispatch();

  const {
    isSpeechEnabled,
    isHighContrast,
    zoomLevel,
    isTextSize,
    isCursorSize,
    isFontStyle,
    isLineHeight,
    isTextSpace,
    isLinkHighLight,
    isSaturationLevel,
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
  useEffect(()=> {
    document.body.style.zoom = zoomLevel;
    // document.body.style.transform = `scale(${zoomLevel})`;
    // document.body.style.transformOrigin = "0 0";  // Ensures scaling starts from the top-left corner
  }, [zoomLevel]);

  // useEffect(() => {
  //   document.body.style.filter = isSaturationLevel ? "hue-rotate(90deg)" : "none";
  // }, [isSaturationLevel]);
 useEffect(() => {
  document.body.classList.toggle("saturate-200", isSaturationLevel);
  document.body.classList.toggle("none", !isSaturationLevel);
}, [isSaturationLevel]);

// useEffect(() => {
//   document.body.className =  isSaturationLevel ? "saturate-200 " : "saturate-100";
// }, [isSaturationLevel]);

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

  const handleZoomIn = ()=> {
    dispatch(zoomIn());
  };

  const handleZoomOut = ()=> {
    dispatch(zoomOut());
  };
  
  const handleTextSize = () => {
    dispatch(toggleTextSize());
  };

   const handleCursorToggle = () => {
    dispatch(toggleCursorSize());
  };

  const handleFontStyle = () => {
    dispatch(toggleFontStyle());
  };

  const handleLineHeight =()=>{
    dispatch(toggleLineHeight());
  }

  const handleTextSpacing =()=>{
    dispatch(toggleTextSpacing());
  }

  const handleLinkHighLight =()=>{
    dispatch(toggleLinkHighLight());
  }

  // const handleDecreaseSaturation =()=>{
  //   dispatch(decreaseSaturation());
  // }
  
  // const handleIncreaseSaturation =()=>{
  //   dispatch(increaseSaturation());
  // }

  const handleSaturation =()=>{
    dispatch(toggleSaturation())
  }

  return (
    <div className="fixed bottom-3 left-3 z-[101]">

    <div className="fixed bottom-3 left-3 z-[101]">
      {/* Accessibility Button */}
      <div className="dropdown dropdown-top fixed-accessibility-btn">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-primary_alt hover:bg-primary pt-1 ml-2 mt-2"
        >
          <MdAccessibility className="text-3xl text-secondary" />
        </div>
        <div
          tabindex="0"
          className="card card-compact dropdown-content bg-base-100  mt-3 w-52 shadow"
        >
          <div className="card-body">
            <div className="card-actions">
              {/* Voice Button */}

              <label className="inline-flex items-center cursor-pointer">
                
                <input
                  type="checkbox"
                  onClick={handleSpeak}
                  value={isSpeechEnabled}
                  className="sr-only peer"
                  checked={isSpeechEnabled}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                  {isSpeechEnabled ? "Voice ON" : "Voice OFF"}
                </span>
              </label>

              {/* High Contrast Button*/}

              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onClick={handleHighContrast}
                  value={isHighContrast}
                  className="sr-only peer"
                  checked={isHighContrast}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                  {isHighContrast ? "High Contrast" : "Low Contrast"}
                </span>
              </label>

              {/* Text Size */}
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onClick={handleTextSize}
                  value={isTextSize}
                  className="sr-only peer"
                  checked={isTextSize}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                  {isTextSize ? "Bigger Text" : "Default Text"}
                </span>
              </label>

              {/* Cursor Size */}
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onClick={handleCursorToggle}
                  value={isCursorSize}
                  className="sr-only peer"
                  checked={isCursorSize}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                  {isCursorSize ? "Big Cursor" : "Normal Cursor"}
                </span>
              </label>

               {/* Font Style Button */}
               <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onClick={handleFontStyle}
                  value={isFontStyle}
                  className="sr-only peer"
                  checked={isFontStyle}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                {isFontStyle ? "Italic" : "Normal"}
                </span>
              </label> 

               {/* Line Height Button */}
               <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onClick={handleLineHeight}
                  value={isLineHeight}
                  className="sr-only peer"
                  checked={isLineHeight}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                {isLineHeight ? "Height large" : "Height Normal"}
                </span>
              </label> 

               {/* Text Spacing Button */}
               <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onClick={handleTextSpacing}
                  value={isTextSpace}
                  className="sr-only peer"
                  checked={isTextSpace}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                {isTextSpace ? "large Space" : "Normal Space"}
                </span>
              </label> 

               {/* Link High-Light Button */}
               <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onClick={handleLinkHighLight}
                  value={isLinkHighLight}
                  className="sr-only peer"
                  checked={isLinkHighLight}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                {isLinkHighLight ? "Is High-Light" : "Not High-Light"}
                </span>
              </label>                            
              
              {/* Zoom Buttons */}
              <div style={{ textAlign: "center", margin: "10px" }}>
                <button onClick={handleZoomIn} style={{ marginRight: "10px" }}>
                  Zoom In
                </button>
                <button onClick={handleZoomOut}>Zoom Out</button>
              </div>

              {/* Saturation Buttons */}
              {/* <div style={{ textAlign: "center", margin: "10px" }}>
                <button onClick={handleDecreaseSaturation} style={{ marginRight: "10px" }}>

                Saturation 
                </button>
                <button onClick={handleIncreaseSaturation}>Saturation +</button>
              </div> */}
              <button onClick={handleSaturation}>Saturation </button>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Accessibility;
