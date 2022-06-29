import { useAppSelector } from "@/core/redux/hooks";
import { clearItems } from "@/core/redux/slices/cart/cartSlices";
import { setShowSidebar, setToast } from "@/core/redux/slices/ui/uiSlice";
import React from "react";
import { useDispatch } from "react-redux";
import CartItem from "./product/CartItem";

const SideBar = () => {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const show = useAppSelector((state) => state.ui.showSidebar);

  const tapCheckout = () => {
    dispatch(clearItems());
    dispatch(setShowSidebar(false));
    dispatch(setToast("Item berhasil di checkout"));
  };

  return (
    <div
      className={`top-0 right-0 w-96 bg-blue-600 text-white fixed h-full ease-in-out duration-300 z-40
				${show ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="block overflow-auto py-2 px-5 mb-24 ">
          <div className="flex justify-between">
            <h2 className=" text-2xl font-semibold text-white">
              List checkout
            </h2>
            <button
              onClick={() => dispatch(setShowSidebar(false))}
              className="hover:opacity-50 cursor-pointer leading-none px-1 py-1 bg-transparent outline-none focus:outline-none ease-linear transition-all duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 w-full">
            <div className="py-2 px-5 bg-white flex justify-between rounded m-4">
              <div className="flex flex-col">
                <h2 className="text-base font-semibold text-black m-0">
                  Total
                </h2>
                <h2 className="text-lg font-semibold text-black m-0">{`$ ${cartItems.reduce(
                  (sub, cartItem) => sub + cartItem.price * cartItem.quantity,
                  0
                )}`}</h2>
              </div>
              <button
                onClick={tapCheckout}
                className="px-4 bg-black text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
