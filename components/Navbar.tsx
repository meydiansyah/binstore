import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { selectAuth } from "@/core/redux/slices/auth";
import { selectCartItems } from "@/core/redux/slices/cart/cartSlices";
import {
  setModalLogin,
  setModalLogout,
  setShowSidebar,
} from "@/core/redux/slices/ui/uiSlice";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const { token, user } = useAppSelector(selectAuth);
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full fixed z-20 top-0 bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between space-x-2">
          <Link href="/">
            <a className="font-josef text-xl cursor-pointer text-black">
              binstore.
            </a>
          </Link>
          <div className="space-x-3  justiy-center items-center flex">
            <div
              className="flex border-r"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {token ? (
                <button
                  onClick={() => dispatch(setModalLogout())}
                  className={`${
                    hover && "hover:text-red-600 hover:border-red-900"
                  } py-4 mx-4 items-center inline-flex text-black border-b-2 border-transparent ease-linear transition-all duration-400`}
                >
                  <div className="block">{hover ? "Logout" : user.name}</div>
                </button>
              ) : (
                <button
                  onClick={() => dispatch(setModalLogin())}
                  className="py-4 mx-4 items-center inline-flex text-black border-b-2 border-transparent hover:text-gray-600 hover:border-blue ease-linear transition-all duration-400"
                >
                  <div className="block">Login</div>
                </button>
              )}
            </div>
            {/* <Link href="/"> */}
            <button
              onClick={() => dispatch(setShowSidebar(true))}
              className="hover:bg-blue-100 hover:border-blue cursor-pointer leading-none px-1 sm:px-3 py-1 border border-solid rounded bg-transparent outline-none focus:outline-none ease-linear transition-all duration-150"
            >
              <div className="flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <span className="text-red-600 self-center ml-1">
                    (
                    {cartItems.reduce(
                      // eslint-disable-next-line no-param-reassign
                      (sum, current) => (sum += current.quantity),
                      0
                    )}
                    )
                  </span>
                )}
              </div>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
