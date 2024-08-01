/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "../src/assets/scss/custom.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./Route";
import Error from "./Error";
import AccountLayout from "./pages/Account/Account";
import Protected from "./pages/Account/Protect";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Details = React.lazy(() => import("./components/Common/Details"));
const SmartPhone = React.lazy(() => import("./pages/smart-phone/SmartPhones"));
const Kitchen = React.lazy(() => import("./pages/Kitchen/Kitchen"));
const Television = React.lazy(() => import("./pages/Television/Television"));
const HomeAppliances = React.lazy(() =>
  import("./pages/HomeAppliances/HomeAppliances")
);
const SmartHome = React.lazy(() => import("./pages/SmartHome/SmartHome"));
const Laptop = React.lazy(() => import("./pages/Laptop/Laptop"));
const Camera = React.lazy(() => import("./pages/Camera/Camera"));
const ProductList = React.lazy(() => import("./components/Common/ProductList"));
const ProductDetail = React.lazy(() => import("./components/Common/Details"));
const Signup = React.lazy(() => import("./pages/Account/Signup/Signup"));
const Login = React.lazy(() => import("./pages/Account/Login/Login"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const AddProduct = React.lazy(() => import("./components/seller/AddProduct"));
const SellerCategory = React.lazy(() => import("./seller/Category/Category"));
const Sellerbrand = React.lazy(() => import("./seller/Brand/Brand"));

function App() {
  const [user, setUser] = useState();

  const router = createBrowserRouter([
    {
      element: <RouteLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "smartphones", element: <SmartPhone /> },
        { path: "televisions", element: <Television /> },
        { path: "details", element: <Details /> },
        { path: "kitchen", element: <Kitchen /> },
        { path: "home-appliances", element: <HomeAppliances /> },
        { path: "smarthome", element: <SmartHome /> },
        { path: "laptops", element: <Laptop /> },
        { path: "cameras", element: <Camera /> },
        { path: "product/:name", element: <ProductList /> },
        { path: "product/:name/:productCode", element: <ProductDetail /> },
        { path: "profile", element: <Profile /> },
        {
          path: "addproduct",
          element: <Protected Component={AddProduct} user={user} />,
        },
        { path: "category", element: <SellerCategory /> },
        { path: "brand", element: <Sellerbrand /> },
      ],
    },
    {
      element: <AccountLayout />,
      children: [
        { path: "login", element: <Login setUser={setUser} /> },
        { path: "signup", element: <Signup /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
