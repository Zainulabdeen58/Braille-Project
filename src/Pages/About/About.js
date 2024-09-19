// import React from 'react'

// function About() {
//   return (
  
//       <div className="grid">
//         <div className="p-6 bg-slate-500 overflow-x-auto">
//           <div className="flex border-b pb-4">
//             <h2 className="text-2xl font-bold text-gray-800 flex-1">Shopping Cart</h2>
//             <h3 className="text-base text-gray-800">4 Items</h3>
//           </div>

//           <table className="mt-6 w-full border-collapse divide-y">
//             <thead className="whitespace-nowrap text-left">
//               <tr>
//                 <th className="text-base text-gray-800 p-4">Description</th>
//                 <th className="text-base text-gray-800 p-4">Quantity</th>
//                 <th className="text-base text-gray-800 p-4">Price</th>
//               </tr>
//             </thead>

//             <tbody className="whitespace-nowrap divide-y">
//               <tr>
//                 <td className="p-4">
//                   <div className="flex items-center gap-4 w-max">
//                     <div className="h-32 shrink-0">
//                       <img src='https://readymadeui.com/images/product6.webp' className="w-full h-full object-contain rounded-lg" />
//                     </div>
//                     <div>
//                       <p className="text-base font-bold text-gray-800">Black T-Shirt</p>
//                       <button type="button" className="mt-2 font-semibold text-red-400 text-sm">
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p-4">
//                   <div className="flex divide-x border w-max rounded-lg overflow-hidden">
//                     <button type="button" className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
//                         <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
//                       </svg>
//                     </button>
//                     <button type="button" className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base">
//                       1
//                     </button>
//                     <button type="button" className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
//                         <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
//                       </svg>
//                     </button>
//                   </div>
//                 </td>
//                 <td className="p-4">
//                   <h4 className="text-base font-bold text-gray-800">$18.5</h4>
//                 </td>
//               </tr>

//               <tr>
//                 <td className="p-4">
//                   <div className="flex items-center gap-4 w-max">
//                     <div className="h-32 shrink-0">
//                       <img src='https://readymadeui.com/images/product3.webp' className="w-full h-full object-contain rounded-lg" />
//                     </div>
//                     <div>
//                       <p className="text-base font-bold text-gray-800">Gray T-Shirt</p>
//                       <button type="button" className="mt-2 font-semibold text-red-400 text-sm">
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p-4">
//                   <div className="flex divide-x border w-max rounded-lg overflow-hidden">
//                     <button type="button" className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
//                         <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
//                       </svg>
//                     </button>
//                     <button type="button" className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base">
//                       1
//                     </button>
//                     <button type="button" className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
//                         <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
//                       </svg>
//                     </button>
//                   </div>
//                 </td>
//                 <td className="p-4">
//                   <h4 className="text-base font-bold text-gray-800">$18</h4>
//                 </td>
//               </tr>

//               <tr>
//                 <td className="p-4">
//                   <div className="flex items-center gap-4 w-max">
//                     <div className="h-32 shrink-0">
//                       <img src='https://readymadeui.com/images/product7.webp' className="w-full h-full object-contain rounded-lg" />
//                     </div>
//                     <div>
//                       <p className="text-base font-bold text-gray-800">Black T-Shirt</p>
//                       <button type="button" className="mt-2 font-semibold text-red-400 text-sm">
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p-4">
//                   <div className="flex divide-x border w-max rounded-lg overflow-hidden">
//                     <button type="button" className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
//                         <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
//                       </svg>
//                     </button>
//                     <button type="button" className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base">
//                       1
//                     </button>
//                     <button type="button" className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
//                         <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
//                       </svg>
//                     </button>
//                   </div>
//                 </td>
//                 <td className="p-4">
//                   <h4 className="text-base font-bold text-gray-800">$15.5</h4>
//                 </td>
//               </tr>

//               <tr>
//                 <td className="p-4">
//                   <div className="flex items-center gap-4 w-max">
//                     <div className="h-32 shrink-0">
//                       <img src='https://readymadeui.com/images/product3.webp' className="w-full h-full object-contain rounded-lg" />
//                     </div>
//                     <div>
//                       <p className="text-base font-bold text-gray-800">Gray T-Shirt</p>
//                       <button type="button" className="mt-2 font-semibold text-red-400 text-sm">
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p-4">
//                   <div className="flex divide-x border w-max rounded-lg overflow-hidden">
//                     <button type="button" className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
//                         <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
//                       </svg>
//                     </button>
//                     <button type="button" className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base">
//                       1
//                     </button>
//                     <button type="button" className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
//                         <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
//                       </svg>
//                     </button>
//                   </div>
//                 </td>
//                 <td className="p-4">
//                   <h4 className="text-base font-bold text-gray-800">$18</h4>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         </div>
//   )
// }

// export default About
