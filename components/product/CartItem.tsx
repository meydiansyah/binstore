import { useAppDispatch } from "@/core/redux/hooks";
import {
  addQuantity,
  deleteItem,
  subtractQuantity,
} from "@/core/redux/slices/cart/cartSlices";
import { useRouter } from "next/router";
import React from "react";

const CartItem = ({ item }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const deleteFromCart = () => {
    dispatch(deleteItem(item.id));
  };
  const add = () => {
    dispatch(addQuantity(item.id));
  };
  const substract = () => {
    if (item.quantity > 1) dispatch(subtractQuantity(item.id));
  };
  return (
    <div className="justify-between cursor-pointer mt-4 overflow-hidden border border-gray-300 rounded-md grid grid-cols-10 bg-white">
      <div
        onClick={() => router.push(`/product/${item.id}`)}
        className="flex p-4 space-x-3 col-span-9"
      >
        <img
          src={item.image}
          className="object-contain w-12 aspect-square "
          alt=""
        />
        <div className="flex flex-col justify-between px-3">
          <p className="flex-shrink text-gray-800">{item.title}</p>
          <p className="text-sm text-gray-600">{item.quantity}pcs</p>
          <p className="text-sm font-bold text-gray-700">
            $ {item.price * item.quantity}
          </p>
        </div>
      </div>
      <div className="col-span-1 grid grid-rows-3 grid-cols-2">
        <button
          onClick={deleteFromCart}
          type="button"
          className="flex items-center justify-center bg-red-500 cursor-pointer col-span-2 hover:bg-red-400 active:bg-red-500 row-span-2"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={substract}
          className="flex items-center justify-center bg-gray-900 cursor-pointer hover:bg-gray-800 active:bg-gray-900"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={add}
          className="flex items-center justify-center bg-gray-900 cursor-pointer hover:bg-gray-800 active:bg-gray-900"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
