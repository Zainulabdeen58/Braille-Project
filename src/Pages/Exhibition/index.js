import React from "react";
import * as Image from "../../Assets/Main section Img";
import Container from "../../Components/Container";

function Exhibition() {
  return (
    <Container>
      <div className="h-screen">
        <div className="grid grid-cols-10 grid-rows-[20vh_20vh_20vh_20vh_20vh]  w-full bg-black relative">
          <div className="col-start-1 col-end-4 row-start-1 row-end-3 relative overflow-hidden">
            <img
              src={Image.img1}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-start-6 col-end-11 row-start-5 row-end-6 relative overflow-hidden">
            <img
              src={Image.img1}
              alt="Artwork 2"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-start-1 col-end-5 row-start-3 row-end-4 relative overflow-hidden">
            <img
              src={Image.img1}
              alt="Artwork 3"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-start-5 col-end-8 row-start-5 row-end-6 relative overflow-hidden">
            <img
              src={Image.img1}
              alt="Artwork 4"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-start-1 col-end-5 row-start-4 row-end-6 relative overflow-hidden">
            <img
              src={Image.img2}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-start-4 col-end-9 row-start-4 row-end-5 relative overflow-hidden">
            <img
              src={Image.img2}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-start-4 col-end-8 row-start-1 row-end-3 relative overflow-hidden">
            <img
              src={Image.img2}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-start-5 col-end-7 row-start-1 row-end-3 relative overflow-hidden">
            <img
              src={Image.img2}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-start-8 col-end-11 row-start-1 row-end-4 relative overflow-hidden">
            <img
              src={Image.img3}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-start-5 col-end-8 row-start-3 row-end-4 relative overflow-hidden">
            <img
              src={Image.img4}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-start-8 col-end-11 row-start-4 row-end-5 relative overflow-hidden">
            <img
              src={Image.img1}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}


export default Exhibition;
