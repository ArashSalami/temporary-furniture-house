import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utils/helperFns";

const ProductItem = ({
  name,
  category,
  colors,
  company,
  description,
  featured,
  id,
  image,
  price,
  shipping,
}) => {
  return (
    <Link to={`/products/${id}`}>
      <StyledProductItem>
        <div className='img-container'>
          <img src={image} alt={name} />
        </div>
        <div className='product-info'>
          <p className='name'>{name}</p>
          <p className='price'>{formatPrice(price)}</p>
        </div>
      </StyledProductItem>
    </Link>
  );
};

const StyledProductItem = styled.article`
  .img-container {
    margin-bottom: 0.5rem;
    background: var(--clr-black-faded);
    border-radius: 5px;

    img {
      height: 175px;
      border-radius: 5px;
      transition: var(--transition);
    }
  }

  &:hover img {
    transform: scale(1.03);
  }

  .product-info {
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    align-items: center;
    padding: 0 0.5rem;
    .price {
      color: var(--clr-primary-3);
      font-weight: bold;
      font-size: 0.9rem;
    }
    .name {
      font-weight: 500;
      font-size: 0.9rem;
    }
  }
`;

export default ProductItem;
