/* eslint-disable jsx-a11y/label-has-associated-control */
import { useGetCategoriesQuery } from "@/core/redux/slices/posts/queries";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Filters = () => {
  const { isLoading, data } = useGetCategoriesQuery();
  const router = useRouter();
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    if (router.query.category) {
      setFilter(router.query.category);
      return;
    }
    setFilter(null);
  }, [router.query]);

  const resetFilter = () => {
    router.push(`/`);
  };

  const onChanged = (e: any) => {
    setFilter(e.target.id);

    router.push(`?category=${e.target.id}`);
  };
  return (
    <details
      open
      className="overflow-hidden border border-gray-200 bg-white rounded md:sticky md:top-20 md:left-0 col-span-1 h-max"
    >
      <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
        <span className="text-sm font-medium">Toggle Filters</span>

        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>

      <form action="" className="border-t border-gray-200 lg:border-t-0">
        <fieldset>
          <legend className="block w-full px-5 font-bold ">Categories</legend>

          <div className="px-5 py-6 space-y-2">
            {isLoading &&
              [...new Array(4)].map((i, idx) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className="w-full h-5 mb-3 bg-gray-200 animate-pulse"
                />
              ))}
            {data &&
              data.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    onChange={onChanged}
                    checked={filter === category}
                    id={category}
                    type="checkbox"
                    name={category}
                    className="w-5 h-5 text-black border-gray-300 rounded accent-black"
                  />

                  <label
                    htmlFor={category}
                    className="ml-3 text-sm font-medium"
                  >
                    {category.slice(0, 1).toUpperCase() + category.slice(1)}
                  </label>
                </div>
              ))}

            <div className="pt-2">
              <button
                onClick={resetFilter}
                type="button"
                className="text-xs text-gray-500 underline"
              >
                Reset Category
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </details>
  );
};
export default Filters;
