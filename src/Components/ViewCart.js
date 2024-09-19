import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function ViewCart() {
  const items = useSelector((state) => state.cart.items); // Adjust according to your state structure

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div>
      {/* Add to Cart  button */}
      <div className="navbar justify-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary_alt"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item text-primary">
                {items.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content z-[1] mt-3 w-52 shadow bg-primary"
          >
            <div className="card-body ">
              <span className="text-lg text-secondary font-bold">
                {items.length} Items
              </span>
              <span className="text-secondary">Subtotal: ${totalPrice}</span>
              <div className="card-actions">
                <NavLink className="nav-link w-full" to="/view-cart">
                  <button className="btn btn-primary-alt btn-block">
                    View Cart
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCart;
