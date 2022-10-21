import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContextProvider } from "./context/productsContext";
import { FilterContextProvider } from "./context/filterContext";
import { CartContextProvider } from "./context/cartContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContextProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserContextProvider>
      <ProductsContextProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <Router>
              <App />
            </Router>
          </CartContextProvider>
        </FilterContextProvider>
      </ProductsContextProvider>
    </UserContextProvider>
  </Auth0Provider>
  // </React.StrictMode>
);

// dev-hkgc1hpf.us.auth0.com
// wSnni43c6DmE70JZ5L8pJDTitIgFG6Ql
