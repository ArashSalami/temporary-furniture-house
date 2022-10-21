import React from "react";
import styled from "styled-components";

import Filters from "../components/Filters";
import { ProductsList } from "../components/ProductsList";
import Sort from "../components/Sort";

const Products = () => {
  return (
    <Wrapper>
      <div className='section section-center products'>
        <Filters />
        <div>
          <Sort />
          <ProductsList />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 70vh;
  .products {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 2rem;
  }
  @media screen and (max-width: 767px) {
    .products {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
