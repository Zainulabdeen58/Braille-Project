import React from "react";
import * as Image from "../../Assets/artist-data";
import Container from "../../Components/Container";


function Home() {
  return (
    <Container>
      <div className="h-screen">
        <div className="grid grid-cols-10 grid-rows-[10vh_10vh_10vh_10vh_10vh_10vh_10vh_10vh_10vh_10vh]  w-full bg-black relative">
            
          <div className="col-start-1 col-end-4 row-start-1 row-end-11 relative overflow-hidden">
            <img
              src={Image.Sample_1}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="col-start-3 col-end-6 row-start-5 row-end-11 relative overflow-hidden z-10">
            <img
              src={Image.Sample_4}
              alt="Artwork 4"
              className="w-full h-full object-center transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="col-start-6 col-end-9 row-start-6 row-end-11 relative overflow-hidden">
            <img
              src={Image.Sample_2}
              alt="Artwork 2"
              className="w-full h-full object-fit transition-transform duration-300 ease-in-out"
            />
          </div>
          
          <div className="col-start-8 col-end-11 row-start-1 row-end-11 relative overflow-hidden">
            <img
              src={Image.img5}
              alt="Artwork 1"
              className="w-full h-full object-center transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="col-start-7 col-end-9 row-start-1 row-end-5 relative overflow-hidden z-10">
            <img
              src={Image.Sample_2}
              alt="Artwork 2"
              className="w-full h-full object-fit transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="col-start-4 col-end-8 row-start-1 row-end-6 relative overflow-hidden">
            <img
              src={Image.img7}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="col-start-7 col-end-10 row-start-7 row-end-10 relative overflow-hidden">
            <img
              src={Image.img6}
              alt="Artwork 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>

          

        </div>
      </div>
    </Container>
  );
}

export default Home;
