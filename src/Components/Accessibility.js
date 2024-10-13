import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAccessibility } from "react-icons/md";
import { toggleSpeak,stopSpeech } from "../Redux/cart/accessibility";

function Accessibility() {
  const dispatch = useDispatch();
  const isSpeechEnabled = useSelector((state)=> state.accessibility.isSpeechEnabled);
  const handleSpeak = ()=>{
     // Toggle speech on checkbox click
     dispatch(toggleSpeak());

     // If speech is enabled, stop any current speech
     if (isSpeechEnabled) {
       dispatch(stopSpeech()); // Stop speaking if it's already enabled
     }
  }

  return (
    <div className="fixed bottom-5 left-4 z-20">
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
          className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
        >
          <div className="card-body">
            
            <div className="card-actions">
              {/*  */}

              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox"  onClick={() => handleSpeak()} value={isSpeechEnabled} className="sr-only peer"/>
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                  {isSpeechEnabled ? "Voice ON" : "Voice OFF"}
                </span>
              </label>
              {/*  */}

              {/* <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox"  onClick={() => handleSpeak()} value={isSpeechEnabled} className="sr-only peer"/>
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 ">
                  {isSpeechEnabled ? "High Contrast" : "Low Contrast"}
                </span>
              </label> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;
