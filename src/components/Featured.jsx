import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/productsContext";
import ProductItem from "./ProductItem";

const Featured = () => {
  const { featured_products } = useProductsContext();
  return (
    <StyledFeatured className='section '>
      <div className='section-center'>
        <div className='section-title'>
          <h4>featured products</h4>
        </div>
        <div className='featured-products'>
          {featured_products.map((product) => {
            return <ProductItem key={product.id} {...product} />;
          })}
        </div>
        <div className='all-btn'>
          <Link className='btn' to='/products'>
            All Products
          </Link>
        </div>
      </div>
    </StyledFeatured>
  );
};

const StyledFeatured = styled.section`
  background: var(--clr-grey-9);
  .section-title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .featured-products {
    display: grid;

    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }
  .all-btn {
    text-align: center;
    margin: 2rem auto;
  }
`;
export default Featured;
