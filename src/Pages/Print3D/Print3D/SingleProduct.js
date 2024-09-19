import React from 'react'
import { useParams } from "react-router-dom"
import Data from '../../../API/3Ddata'
// import Header from '../../../Components/Header';
import Navbar from '../../../Components/Navbar';


function SingleProduct() {
    const Param = useParams();
    const { id } = Param;

    const Product = Data.find((user)=> user.id.toString() ===  id)
    
    if(!Product){
        return(
            <h1>item is found</h1>
        )
    }
  return (
    <div>
     {/* <Header/> */}
     <Navbar/>
    <div id='product-container' className='bg-secondary w-full flex mt-1 flex-col-reverse md:flex-row'>
        <div id='product-content' className='w-full flex justify-center items-center md:w-[55%]'>
            <div className='block mx-auto w-[80%] text-center md:w-[60%]'>
            <h1 className='text-3xl mb-4 md:text-5xl md:mb-8'>ELON MUSK</h1>
            <h5 className='my-3 md:my-5'>Painting, Drawing & Works on Paper</h5>
            <p className='text-2xl my-3 underline italic font-bold'>3D ART</p>
               <p className='text-justify'>Painter ELON MUSK’s work was recently featured in <i> New American Paintings #146 </i> curated by New York Magazine's Jerry Saltz. 
                Additional features include Architectural Digest, ArtMaze, and Vice / Garage. Elrod is co-director of the artist-run gallery Underdonk 
                in New York, and co-curated at Heliopolis Gallery from 2012-2015.</p>
            </div>
            
        </div>  
        <div id='product-image' className='w-full md:w-[45%]'>
            <img src={Product.img} alt="product_pic" className='h-[100vh] w-full'/>
        </div>    
    </div>
    </div>
  )
}

export default SingleProduct;
