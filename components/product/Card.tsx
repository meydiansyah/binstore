import useImageOnLoad from "@/core/hooks/useImageOnLoad";
import { useAppDispatch, useAppSelector } from "@/core/redux/hooks";
import { selectAuth } from "@/core/redux/slices/auth";
import { addItems } from "@/core/redux/slices/cart/cartSlices";
import { useGetPostByIdQuery } from "@/core/redux/slices/posts/queries";
import { setToast, setModalLogin } from "@/core/redux/slices/ui/uiSlice";
import { ProductType } from "@/core/types/post";
import { Text, Card, Row, Col, Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ProductCard = ({ data }) => {
  const isImageLoaded = useImageOnLoad(data.image);
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { token } = useAppSelector(selectAuth);

  const addItemToCart = (item: ProductType) => {
    if (token) {
      dispatch(addItems({ ...item, quantity: 1 }));
      dispatch(setToast("Item added to cart"));
      return;
    }
    dispatch(setModalLogin());
  };
  return (
    <>
      {!isImageLoaded && (
        <div className="w-full bg-gray-200 aspect-square animate-pulse" />
      )}
      {isImageLoaded && (
        <Card
          isPressable
          variant="bordered"
          css={{ w: "100%", h: "400px" }}
          onClick={(e) => router.push(`/product/${data.id}`)}
        >
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Text color="black" className="line-clamp-2">
              {data.title}
            </Text>
          </Card.Header>
          <Card.Body css={{ p: 0, justifyContent: "center" }}>
            <Card.Image
              src={data.image}
              width="50%"
              height="50%"
              objectFit="contain"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row align="center">
              <Col>
                <Text color="#000" size={12} b>{`$ ${data.price}`}</Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    flat
                    auto
                    rounded
                    size="sm"
                    color="primary"
                    onClick={() => addItemToCart(data)}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Add to cart
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      )}
    </>
  );
};

export default ProductCard;
