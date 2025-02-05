import React from "react";
import { NavLink } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { speakText } from "../Redux/accessibility/index";

const navigation = [
  { name: "About Us", className: "nav-link", to: "/about-us", current: false },
  { name: "Exhibitions", className: "nav-link", to: "/exhibitions",current: false},
  { name: "Art Shop", className: "nav-link", to: "/artwork-shop", current: false},
  { name: "3D Prints",className: "nav-link", to: "/3D-prints", current: false},
  { name: "Contact Us", className: "nav-link", to: "/contact-us",current: false },
  { name: "Test", className: "nav-link", to: "/test",current: false },

];

const smNavigation = [
  { name: "About Us", className: "nav-link", to: "/about-us", current: false },
  { name: "Exhibitions", className: "nav-link", to: "/exhibitions",current: false},
  { name: "Art Shop", className: "nav-link", to: "/artwork-shop", current: false},
  { name: "3D Prints",className: "nav-link", to: "/3D-prints", current: false},
  { name: "Contact Us", className: "nav-link", to: "/contact-us",current: false },
  { name: "Wishlist", className: "nav-link", to: "/wishlist",current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {
  const dispatch = useDispatch();
  const isTextSize = useSelector((state)=> state.accessibility.isTextSize);
  const isTextSpace = useSelector((state)=> state.accessibility.isTextSpace);
  const isLinkHighLight = useSelector((state)=> state.accessibility.isLinkHighLight);

  return (
      <Disclosure as="nav" className="bg-primary">
        <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-12 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              
              <DisclosureButton
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-center">
              {/* Navbar Larger screen */}
              <div className="hidden sm:block">
                <div className="flex space-x-1 md:space-x-12 lg:space-x-14">
                  {navigation.map((nav) => (
                    <NavLink
                      key={nav.name}
                      to={nav.to}
                      className={classNames(
                        nav.current ? "bg-primary_alt text-secondary" : "text-secondary hover:bg-primary_alt",
                        "rounded-md px-3 py-2 font-medium md:text-sm",
                        isTextSize ?"lg:text-xl" : "lg:text-lg",
                        isTextSpace? "lg:tracking-widest md:tracking-wide": ""
                        

                      )}
                      onMouseEnter={() => dispatch(speakText(nav.name))}
                      aria-current={nav.current ? "page" : undefined}
                    >
                      <span className={`${ isLinkHighLight ? "text-yellow-500 bg-white" : "" }`} >
                      {nav.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hamburger menu for small screen */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {smNavigation.map((nav) => (
              <NavLink
                key={nav.name}
                to={nav.to}
                aria-current={nav.current ? "page" : undefined}
                className={classNames(
                  nav.current
                    ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white",
                  "block rounded-md px-3 py-2 font-medium",
                  isTextSize ? " text-lg " : "text-base",
                  isTextSpace ? "tracking-widest": "",
                )}
                onMouseEnter={() => dispatch(speakText(nav.name))}
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      
  );
}

export default Navbar;












 