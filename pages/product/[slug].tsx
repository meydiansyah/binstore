import MainLayout from "@/components/layout/App";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { selectAuth } from "@/core/redux/slices/auth";
import { addItems } from "@/core/redux/slices/cart/cartSlices";
import { useGetPostByIdQuery } from "@/core/redux/slices/posts/queries";
import { setModalLogin, setToast } from "@/core/redux/slices/ui/uiSlice";
import { ProductType } from "@/core/types/post";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Product: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { slug } = router.query;
  const [quantity, setQuantity] = useState<number>(1);
  const { data } = useGetPostByIdQuery(Number(slug));
  const { token } = useAppSelector(selectAuth);
  const changeQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };
  const addItemToCart = (item: ProductType) => {
    if (token) {
      dispatch(addItems({ ...item, quantity }));
      dispatch(setToast("Item added to cart"));
      return;
    }
    dispatch(setModalLogin());
  };
  return (
    <MainLayout>
      {data && (
        <section className="max-w-5xl mx-auto mt-28">
          <div className="relative px-4 sm:px-6 lg:px-8 py-8 mx-auto">
            <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
              <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
                <div className="aspect-w-1 col-span-2 aspect-h-1">
                  <img
                    alt="product"
                    className="object-cover rounded-xl"
                    src={data.image}
                  />
                </div>
              </div>

              <div className="sticky top-20">
                <div className="flex justify-between">
                  <div className="max-w-[35ch]">
                    <h1 className="text-2xl font-bold">{data.title}</h1>

                    <p className="mt-0.5 text-sm">Highest Rated Product</p>

                    <div className="flex mt-2 -ml-0.5">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="w-5 h-5 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-lg font-bold">${data.price}</p>
                </div>

                <div className="block mt-4">
                  <div className="prose max-w-none group-open:hidden">
                    <p>{data.description}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex mt-8">
                    <input
                      onChange={changeQuantity}
                      value={quantity}
                      type="number"
                      id="quantity"
                      min="1"
                      className="w-24 px-2 py-3 text-xs text-center border border-gray-200 rounded no-spinners"
                    />

                    <button
                      type="button"
                      onClick={() => addItemToCart(data)}
                      className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-gray-800 rounded hover:bg-gray-900"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default Product;
