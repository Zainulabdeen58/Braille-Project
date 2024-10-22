import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAccessibility } from "react-icons/md";
import {
  toggleSpeak,
  stopSpeech,
  toggleHighContrast,
} from "../Redux/accessibility/index";
import { zoomIn , zoomOut } from "../Redux/accessibility/index";

function Accessibility() {
  const dispatch = useDispatch();

  const isSpeechEnabled = useSelector((state) => state.accessibility.isSpeechEnabled);

  const isHighContrast = useSelector((state) => state.accessibility.isHighContrast);

  const zoomLevel = useSelector((state)=> state.accessibility.zoomLevel);


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
  
  useEffect(()=> {
    document.body.style.zoom = zoomLevel;
    // document.body.style.transform = `scale(${zoomLevel})`;
    // document.body.style.transformOrigin = "0 0";  // Ensures scaling starts from the top-left corner

  }, [zoomLevel]);

  return (
    <div className="fixed bottom-3 left-3 z-[101]">
      {/* Accessibility Button */}
      <div className="dropdown dropdown-top">
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
              {/*  */}

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
              {/*  */}

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

              {/* Zoom Buttons */}

              <div style={{ textAlign: "center", margin: "20px" }}>
                <button onClick={handleZoomIn} style={{ marginRight: "10px" }}>
                  Zoom In
                </button>
                <button onClick={handleZoomOut}>Zoom Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;
