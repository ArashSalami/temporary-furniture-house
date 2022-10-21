import React from "react";
import styled from "styled-components";
import img1 from "../assets/images/hero-bcg.jpeg";
import img2 from "../assets/images/hero-bcg-2.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <StyledHero className='section-center'>
      <div className='hero-title'>
        <h2>
          <span>Design your</span> <span>comfort zone</span>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          magnam assumenda autem dolor tenetur numquam a officiis perferendis
          quidem ex unde voluptates odio maiores, ab vero quam, omnis excepturi
          maxime?
        </p>
        <Link className='btn' to='/products'>
          Shop Now
        </Link>
      </div>
      <div className='img-container'>
        <img className='img1' src={img1} alt='' />
        <img className='img2' src={img2} alt='' />
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  display: grid;
  height: calc(100vh - 8rem);
  gap: 5rem;
  min-height: 60vh;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
  .hero-title {
    h2 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
  }

  .img-container {
    position: relative;
  }
  .img1 {
    width: 80%;
    margin: 0 auto;
    border-radius: 2px;
  }
  .img2 {
    position: absolute;
    bottom: 0;
    width: 50%;
    border-radius: 2px;
  }
  @media screen and (max-width: 1024px) {
    height: auto;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 3rem 0;
    gap: 2rem;

    .img-container {
      display: none;
    }

    .img1 {
      width: 40%;
      margin: 0 auto;
    }
    .img2 {
      position: absolute;
      bottom: 0;
      width: 40%;
    }
  }
`;

export default Hero;
