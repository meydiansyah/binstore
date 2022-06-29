import Filters from "@/components/Filter";
import MainLayout from "@/components/layout/App";
import ProductCard from "@/components/product/Card";
import ProductCardSkeleton from "@/components/product/skeleton_card";
import { useLazyGetPostsQuery } from "@/core/redux/slices/posts/queries";
import { Grid } from "@nextui-org/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const [trigger, { isLoading, data, isFetching }] = useLazyGetPostsQuery();
  useEffect(() => {
    trigger(router.query.category as string);
  }, [router.query]);
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto pt-18 pb-24">
        {/* <SaleSection /> */}
        <section>
          <div className="px-4 sm:px-6 lg:px-8 py-8 pt-20">
            <div className="md:grid grid-cols-4 mt-4 gap-8">
              <Filters />

              <div className="col-span-3 pt-10 md:mt-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-8">
                {(isLoading || isFetching) &&
                  [...new Array(10)].map((a, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ProductCardSkeleton key={idx} />
                  ))}
                {data &&
                  !isLoading &&
                  !isFetching &&
                  data.map((product) => (
                    <ProductCard data={product} key={product.id} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
