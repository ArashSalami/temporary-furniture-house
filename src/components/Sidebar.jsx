import React from "react";
import styled from "styled-components/macro";
import { CloseNavBTN } from "./styled/Buttons";
import logo from "../images/logo.png";
import { SidebarNavLinks } from "./styled/NavLinks";
import { useProductsContext } from "../context/productsContext";
const Sidebar = () => {
  const { isSidebarOpen } = useProductsContext();
  return (
    <StyledSidebar isSidebarOpen={isSidebarOpen}>
      <div className='sidebar-header'>
        <div className='img-container'>
          <img className='logo' src={logo} alt='Furniture House' />
        </div>
        <CloseNavBTN />
      </div>
      <SidebarNavLinks className='nav-links' />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  position: fixed;
  padding: 2rem 1.5rem;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: var(--transition);
  background-color: var(--clr-grey-8);
  z-index: 2;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img-container {
      width: 20%;
      min-width: 150px;
    }
    .logo {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    transform: translateX(${(props) => (props.isSidebarOpen ? "0" : "-100%")});
  }
`;
export default Sidebar;
