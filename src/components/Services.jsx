import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <StyledServices className='section'>
      <div className='section-center'>
        <article className='services-info'>
          <h4 className='services-title'>
            Custom Furniture Built Only For You
          </h4>
          <p className='services-text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            provident qui commodi iste nesciunt quo recusandae ipsa maiores aut
            enim!
          </p>
        </article>
        <div className='services'>
          {services.map(({ id, icon, title, text }) => {
            return (
              <article className='service' key={id}>
                <span className='service-icon'>{icon}</span>
                <h5 className='service-title'>{title}</h5>
                <p className='service-text'>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  background: var(--clr-grey-6);
  /* margin-bottom: -200px; */
  .services-info {
    text-align: center;
    margin-bottom: 2rem;
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
  }
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .service {
    background: var(--clr-grey-9);
    text-align: center;
    border-radius: 8px;
    padding: 2rem 1rem;
  }
  .service-icon {
    color: var(--clr-primary-3);
    font-size: 2.5rem;
  }
  .service-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  .service-text {
    color: var(--clr-grey-4);
  }
  @media screen and (max-width: 1024px) {
    .services {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 767px) {
    .services {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
