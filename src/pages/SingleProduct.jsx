import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SingleProductImages from "../components/SingleProductImages";
import { useProductsContext } from "../context/productsContext";
import { single_product_url } from "../utils/constants";
import { formatPrice } from "../utils/helperFns";
import AddToCart from "../components/AddToCart";
import Stars from "../components/Stars";
import LoadingSpinner from "../components/LoadingSpinner";

const SingleProduct = () => {
  const { fetchSingleProduct, single_product, single_product_loading } = useProductsContext();
  const { productId } = useParams();
  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${productId}`);
  }, [productId]);
  const { images, company, description, name, price, reviews, stars, stock, id } = single_product;

  if (single_product_loading) {
    return (
      <Wrapper>
        <LoadingSpinner />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className='section section-center single-product'>
        <Link className='back-btn' to='/products'>
          Back To Products
        </Link>

        <div className='product'>
          <SingleProductImages images={images} name={name} />
          <div className='product-info'>
            <h2 className='name'>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <p className='price'>{formatPrice(price)}</p>
            <p className='desc'>{description}</p>
            <p>
              <span className='bold'>Available:</span> {stock > 0 ? "In Stock" : "Out Of Stock"}
            </p>
            <p>
              <span className='bold'>SKU:</span> {id}
            </p>
            <p>
              <span className='bold'>Brand:</span> {company}
            </p>
            <hr />

            {stock > 0 && <AddToCart product={single_product} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 70vh;
  .back-btn {
    background: var(--clr-primary-5);
    border: none;
    outline: none;
    border-radius: 3px;
    padding: 0.4rem 0.5rem;
    color: var(--clr-grey-9);
    font-size: 0.8rem;
    margin-bottom: 2rem;
    display: inline-block;
  }
  .product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
  .product-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .name {
    text-transform: capitalize;
  }
  .price {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
  }
  .bold {
    font-weight: 600;
  }
  .btn {
    text-align: center;
  }
  @media screen and (max-width: 990px) {
    .single-product {
      min-width: 350px;
    }
    .product {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;
export default SingleProduct;
