import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

  return (
  
    <button
    type="button"
    className="p-3 px-6 bg-slate-400 rounded-xl "
    onClick={() => {
      navigate("/3D-prints");
    }}
  >
    BACK
  </button>
  )
}

export default About
