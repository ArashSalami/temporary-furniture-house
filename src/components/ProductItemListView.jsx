import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utils/helperFns";

const ProductItemListView = ({
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
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='product-info'>
        <p className='name'>{name}</p>
        <p className='price'>{formatPrice(price)}</p>
        <p className='description'>{description.slice(0, 150)}...</p>
        <Link className='btn details-btn' to={`/products/${id}`}>
          Details
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  align-items: center;
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
    flex-direction: column;

    text-transform: capitalize;
    justify-content: left;
    padding: 0 0.5rem;
    .price {
      color: var(--clr-primary-3);
      font-weight: bold;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .name {
      font-weight: 500;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    .description {
      max-width: 45em;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    .details-btn {
      width: fit-content;
      font-size: 0.6rem;
      padding: 0.2rem 0.4rem;
    }
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    .img-container {
      width: 75%;
    }
  }
`;

export default ProductItemListView;
