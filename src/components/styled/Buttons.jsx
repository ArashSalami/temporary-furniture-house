import styled from "styled-components/macro";
import { FaBars, FaTimes } from "react-icons/fa";
import { useProductsContext } from "../../context/productsContext";

export const NavToggleBtn = () => {
  const { openSidebar } = useProductsContext();
  return (
    <StyledNavToggleBtn
      onClick={() => {
        openSidebar();
      }}
    >
      <FaBars className='toggle-icon' />
    </StyledNavToggleBtn>
  );
};
const StyledNavToggleBtn = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  background: transparent;
  cursor: pointer;
  border: none;
  display: none;
  .toggle-icon {
    color: var(--clr-grey-3);
    font-size: 1.5rem;
  }
  @media screen and (max-width: 767px) {
    display: block;
    justify-self: flex-end;
    grid-area: b;
  }
`;

export const CloseNavBTN = () => {
  const { closeSidebar } = useProductsContext();
  return (
    <StyledCloseNavBTN
      onClick={() => {
        closeSidebar();
      }}
    >
      <FaTimes className='close-icon' />
    </StyledCloseNavBTN>
  );
};
const StyledCloseNavBTN = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  background: transparent;
  cursor: pointer;
  border: none;
  display: none;
  .close-icon {
    color: var(--clr-red-dark);
    font-size: 1.5rem;
  }
  @media screen and (max-width: 767px) {
    display: block;
    justify-self: flex-end;
  }
`;

export const PrimaryBtn = ({ type, children, onClick }) => {
  return (
    <StyledPrimaryBtn onClick={onClick} type={type || "button"}>
      {children}
    </StyledPrimaryBtn>
  );
};

const StyledPrimaryBtn = styled.button`
  background: var(--clr-primary-5);
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 0.4rem 0.5rem;
  color: var(--clr-grey-9);
  font-size: 0.8rem;
  cursor: pointer;
`;

// export const CartBtn = ({ onClick }) => {
//   const { total_items } = useCartContext();
//   return (
//     <Link to='/cart'>
//       <StyledCartBtn onClick={onClick} type='button'>
//         <FaShoppingCart className='cart-icon' />
//         <p className='cart-value'>{total_items}</p>
//       </StyledCartBtn>
//     </Link>
//   );
// };

// const StyledCartBtn = styled.button`
//   background: transparent;
//   border: none;
//   outline: none;
//   font-size: 1rem;
//   cursor: pointer;
//   position: relative;
//   color: var(--clr-grey-9);

//   .cart-value {
//     position: absolute;
//     font-size: 0.6rem;
//     font-weight: 600;
//     background: var(--clr-primary-7);
//     padding: 4px 8px;
//     border-radius: 50%;
//     top: -18px;
//     right: -18px;
//     color: var(--clr-grey-9);
//   }
// `;

// export const AuthBtn = ({ onClick }) => {
//   return (
//     <Link to='/login'>
//       <StyledAuthBtn onClick={onClick} type='button'>
//         <BiUserCheck className='auth-icon' />
//       </StyledAuthBtn>
//     </Link>
//   );
// };

// const StyledAuthBtn = styled.button`
//   background: transparent;
//   border: none;
//   outline: none;
//   font-size: 1.5rem;
//   color: var(--clr-grey-9);

//   cursor: pointer;
// `;
