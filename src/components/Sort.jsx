import styled from "styled-components";

import { BsFillGridFill, BsList } from "react-icons/bs";

import React from "react";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const { setGridView, setListView, updateSort, grid_view } =
    useFilterContext();
  return (
    <StyledSort>
      <div className='btn-container'>
        <button type='button' onClick={setGridView}>
          <BsFillGridFill className={`${grid_view ? "active icon" : "icon"}`} />
        </button>
        <button type='button' onClick={setListView}>
          <BsList className={`${!grid_view ? "active icon" : "icon"}`} />
        </button>
      </div>
      <hr />
      <form className='sort-form'>
        <label htmlFor='sort'>Sort By: </label>
        <select name='sort' id='sort' onChange={updateSort}>
          <option value='name-asc'>Name - Ascending</option>
          <option value='name-desc'>Name - Descending</option>
          <option value='price-asc'>Price - Ascending</option>
          <option value='price-desc'>Price - Descending</option>
        </select>
      </form>
    </StyledSort>
  );
};
const StyledSort = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  .btn-container {
    display: flex;
    gap: 1rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      border-radius: 5px;

      cursor: pointer;
      .active {
        background: var(--clr-black);
        color: var(--clr-grey-9);
      }
      .icon {
        padding: 0.25rem;
        font-size: 1.6rem;
      }
    }
  }
  .sort-form {
    select {
      padding: 0.2rem;
      border-radius: 5px;
    }
  }
`;

export default Sort;
