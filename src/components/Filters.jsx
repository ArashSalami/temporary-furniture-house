import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { formatPrice, getUniqueValues } from "../utils/helperFns";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    updateFilters,
    clearFilters,
    all_products,
    filters: { text, min_price, max_price, price, shipping, color, category },
  } = useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");
  return (
    <StyledFilters>
      <div className='content'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className='form-control'>
            <input
              className='search-input'
              type='text'
              name='text'
              placeholder='Find What You Need!'
              onChange={updateFilters}
              value={text}
            />
          </div>
        </form>
        <div className='form-control'>
          <h5>category</h5>
          <div className='category-btns'>
            {categories.map((cat, index) => {
              return (
                <button
                  name='category'
                  type='button'
                  className={`${
                    category === cat ? "category-btn active" : "category-btn"
                  }`}
                  onClick={updateFilters}
                  key={index}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
        <div className='form-control'>
          <h5>company</h5>
          <select
            onChange={updateFilters}
            className='company'
            name='company'
            id='company'
          >
            {companies.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className='form-control'>
          <h5>colors</h5>
          <div className='colors'>
            {colors.map((c, index) => {
              if (c === "all") {
                return (
                  <button
                    className={`${
                      color === "all" ? "color-all-btn active" : "color-all-btn"
                    }`}
                    data-color='all'
                    name='color'
                    onClick={updateFilters}
                    key='all'
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  className={`${
                    color === c ? "color-btn active" : "color-btn"
                  }`}
                  name='color'
                  key={index}
                  data-color={c}
                  onClick={updateFilters}
                  style={{
                    backgroundColor: c,
                  }}
                >
                  {color === c ? <FaCheck className='color-icon' /> : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className='form-control'>
          <h5>price</h5>
          <p>{formatPrice(price)}</p>
          <input
            type='range'
            name='price'
            id='price'
            min={min_price}
            max={max_price}
            onChange={updateFilters}
            value={price}
          />
        </div>
        <div className='form-control shipping'>
          <span>free shipping</span>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onChange={updateFilters}
          />
        </div>
        <div className='form-control'>
          <button
            type='button'
            className='btn clear-btn'
            onClick={clearFilters}
          >
            clear filters
          </button>
        </div>
      </div>
    </StyledFilters>
  );
};

const StyledFilters = styled.section`
  .form-control {
    margin-bottom: 1rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    border: none;
    padding: 0.4rem 0.5rem;
    background: var(--clr-grey-9);
    border-radius: 5px;
  }

  .category-btn {
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    font-size: 0.9rem;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-4);
    border-bottom: 1px solid transparent;
  }
  .category-btn.active {
    border-color: var(--clr-grey-4);
  }
  .company {
    text-transform: capitalize;
    option {
      text-transform: capitalize;
    }
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin-right: 0.3rem;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .color-icon {
    color: var(--clr-grey-9);
    font-size: 0.6rem;
  }
  .active {
    opacity: 1;
  }
  .color-all-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    font-size: 0.9rem;
    margin-right: 0.3rem;
    border-bottom: 1px solid transparent;
  }
  .color-all-btn.active {
    border-color: var(--clr-grey-4);
  }
  .shipping {
    display: flex;
    gap: 1rem;
    align-items: center;
    text-transform: capitalize;
  }
  .clear-btn {
    text-transform: capitalize;
  }
`;

export default Filters;
