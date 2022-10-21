import React from "react";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
import { useFilterContext } from "../context/filterContext";
import { useProductsContext } from "../context/productsContext";

import ProductItem from "./ProductItem";
import ProductItemListView from "./ProductItemListView";

export const ProductsList = () => {
  const { filtered_products, grid_view } = useFilterContext();
  const { products_loading: isLoading } = useProductsContext();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (filtered_products.length === 0) {
    return <h5>No Products Found!</h5>;
  }
  if (grid_view) {
    return (
      <ProductsGridView>
        {filtered_products.map((product, index) => {
          return <ProductItem {...product} key={index} />;
        })}
      </ProductsGridView>
    );
  }
  return (
    <ProductsListView>
      {filtered_products.map((product, index) => {
        return <ProductItemListView {...product} key={index} />;
      })}
    </ProductsListView>
  );
};

const ProductsGridView = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ProductsListView = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
