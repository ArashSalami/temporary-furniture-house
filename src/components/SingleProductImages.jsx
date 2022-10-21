import React from "react";
import { useState } from "react";
import styled from "styled-components";

const SingleProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const mainImageHandler = (index) => {
    setMainImage(images[index]);
  };
  return (
    <StyledSingleProductImages>
      <img className='main-img' src={mainImage.url} alt={mainImage.filename} />
      <div className='gallery-container'>
        {images.map((image, index) => {
          return (
            <img
              onClick={() => {
                mainImageHandler(index);
              }}
              src={image.url}
              alt={image.filename}
              key={index}
              className={image.url === mainImage.url ? "active gallery-img" : "gallery-img"}
            />
          );
        })}
      </div>
    </StyledSingleProductImages>
  );
};

const StyledSingleProductImages = styled.div`
  .main-img {
    height: 500px;
    margin-bottom: 1rem;
    border-radius: 3px;
    width: 100%;
    object-fit: cover;
  }

  .gallery-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
  .gallery-img {
    cursor: pointer;
    height: 75px;
    border-radius: 3px;
    border: 2px solid transparent;
    width: 100%;
    object-fit: cover;
  }
  .active {
    border: 2px solid var(--clr-primary-5);
    transform: scale(1.05);
  }
  @media screen and (max-width: 990px) {
    .main-img {
      height: 300px;
    }
    .gallery-img {
      height: 100px;
    }
  }
  @media screen and (max-width: 576px) {
    .main-img {
      height: 300px;
    }
    .gallery-img {
      height: 50px;
    }
  }
`;

export default SingleProductImages;
