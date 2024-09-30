import React from "react";
import { NavLink } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About Us', className: 'nav-link' , to: "/about-us", current: false },
  { name: 'Exhibitions', className: 'nav-link', to: "/exhibitions", current: false },
  { name: 'Art Shop', className: 'nav-link',to: "/artwork-shop", current: false },
  { name: '3D Prints', className: 'nav-link', to: "/3D-prints", current: false },
  { name: 'Contact Us', className: 'nav-link',to: "/contact-us", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Navbar() {
  
  return (
    <div>
      {/* <ul className='flex justify-around list-none text-[100%] bg-primary text-secondary p-5 '>
        <li><NavLink className="nav-link" to="/about">About Us </NavLink></li>
        <li><NavLink className="nav-link" to="/exhibitions">Exhibitions </NavLink></li>
        <li><NavLink className="nav-link" to="/artwork-shop">Art Shop </NavLink></li>
        <li><NavLink className="nav-link" to="/3D-prints">3D Prints </NavLink></li>
        <li><NavLink className="nav-link" to="/contact-us">Contact Us </NavLink></li>
        <li><NavLink className="nav-link" to="/cart"><MdOutlineShoppingBag className='text-xl sm:text-2xl' /></NavLink></li>
      </ul> */}



 
    <Disclosure as="nav" className="bg-primary pt-1" >
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-12 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-center">
            
            {/* Navbar Larger screen */}
            <div className="hidden sm:block">
              <div className="flex space-x-1 md:space-x-14 lg:space-x-16">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-primary_alt text-secondary' : 'text-secondary hover:bg-primary_alt',
                      'rounded-md px-3 py-2 text-sm lg:text-xl font-medium',
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* Hamburger on buttons on small screen*/}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>

    </div>
  );
}

export default Navbar;
