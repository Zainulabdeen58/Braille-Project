// import React from "react";
// import * as Image from "../../Assets/artist-data";
// import Container from "../../Components/Container";

import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import SocialBar from "../../Components/SocialBar";
const About = () => {
  return (
    <>
      <SocialBar />
      <Header />
      <Navbar />
      <div className="min-h-screen bg-white">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-8 tracking-tight">
              About Us
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              A contemporary art space dedicated to showcasing exceptional works
              from emerging and established artists worldwide.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-10 md:p-16 shadow-sm">
              <h3 className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 tracking-tight">
                Our Story
              </h3>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
                <p>
                  Founded in 2010, Braille Contemporary Art Gallery has become a
                  beacon for art enthusiasts and collectors seeking unique,
                  thought-provoking contemporary works. Our name, inspired by
                  the tactile reading system, reflects our commitment to making
                  art accessible and meaningful to all viewers.
                </p>
                <p>
                  We believe that art transcends visual boundaries and speaks to
                  the soul through form, color, and emotion. Our curated
                  collection represents diverse voices from around the globe,
                  offering perspectives that challenge, inspire, and move our
                  community.
                </p>
                <p>
                  Over the years, we've hosted hundreds of exhibitions,
                  supported countless artists in their creative journeys, and
                  fostered a vibrant community of art lovers who share our
                  passion for contemporary expression.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-gray-900 rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-900 rounded-full mb-6"></div>
              <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-light">
                To cultivate a dynamic platform where contemporary artists can
                showcase their work, connect with collectors, and contribute to
                the ever-evolving dialogue of modern art. We strive to make
                exceptional art accessible while supporting the creative
                community.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full mb-6"></div>
              <h3 className="text-3xl font-light text-white mb-6 tracking-tight">
                Our Vision
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                To be recognized as a leading contemporary art gallery that
                bridges traditional and digital art forms, fostering innovation
                and creativity while maintaining the highest standards of
                artistic excellence and ethical practice in the art world.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-normal text-gray-900 mb-16 text-center tracking-tight">
                What We Offer
              </h3>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 border-2 border-white rounded-full"></div>
                  </div>
                  <h4 className="text-2xl font-normal text-gray-900 mb-4 tracking-tight">
                    Curated Exhibitions
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    Rotating exhibitions featuring works from emerging and
                    established artists across various contemporary mediums and
                    styles.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 border-2 border-white rounded"></div>
                  </div>
                  <h4 className="text-2xl font-normal text-gray-900 mb-4 tracking-tight">
                    Art Consultation
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    Professional guidance for collectors and interior designers
                    seeking the perfect pieces to complement their spaces.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 border-2 border-white"></div>
                  </div>
                  <h4 className="text-2xl font-normal text-gray-900 mb-4 tracking-tight">
                    Artist Support
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    Comprehensive representation and promotion services for
                    artists looking to expand their reach and build their
                    careers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visit Us CTA */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-normal text-white mb-6 tracking-tight">
                Experience Art in Person
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-light">
                Visit our gallery to explore our current exhibitions and
                discover your next favorite piece.
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-white text-gray-900 text-lg font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Plan Your Visit
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;

// function About() {
//   return (
//     <Container>
//       <div className="h-screen">
//         <div className="grid grid-cols-10 grid-rows-[10vh_10vh_10vh_10vh_10vh_10vh_10vh_10vh_10vh_10vh]  w-full bg-black relative">
//           <div className="col-start-1 col-end-4 row-start-1 row-end-11 relative overflow-hidden">
//             <img
//               src={Image.Sample_1}
//               alt="Artwork 1"
//               className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
//             />
//             {/* <span className="absolute top-0 right-0 w-full h-11 bg-slate-600 text-warning-content">1 Image</span> */}
//           </div>

//           <div className="col-start-3 col-end-6 row-start-5 row-end-11 relative overflow-hidden z-10">
//             <img
//               src={Image.Sample_4}
//               alt="Artwork 4"
//               className="w-full h-full object-center transition-transform duration-300 ease-in-out"
//             />
//           </div>

//           <div className="col-start-6 col-end-9 row-start-6 row-end-11 relative overflow-hidden">
//             <img
//               src={Image.Sample_2}
//               alt="Artwork 2"
//               className="w-full h-full object-fit transition-transform duration-300 ease-in-out"
//             />
//           </div>

//           <div className="col-start-8 col-end-12 row-start-1 row-end-9 relative overflow-hidden">
//             <img
//               src={Image.img5}
//               alt="Artwork 1"
//               className="w-full h-full object-center transition-transform duration-300 ease-in-out"
//             />
//           </div>

//           <div className="col-start-4 col-end-8 row-start-1 row-end-6 relative overflow-hidden">
//             <img
//               src={Image.img7}
//               alt="Artwork 1"
//               className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
//             />
//           </div>

//           <div className="col-start-8 col-end-12 row-start-7 row-end-11 relative overflow-hidden">
//             <img
//               src={Image.img6}
//               alt="Artwork 1"
//               className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
//             />
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default About;
