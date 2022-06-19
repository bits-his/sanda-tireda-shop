import { useRoutes } from "react-router-dom";
import ShopCart from "../Shop/ShopCart";
import ShopItems from "../Shop/ShopItems";
import Login from "../SignUp/LogIn";
import SignUp from "../SignUp/SignUp";
import AppIndex from "./AppIndex";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <AppIndex />,
      children: [
        { index: true, element: <ShopItems /> },
        {
          path: "/cart",
          element: <ShopCart />,
        },
        {
          path: "/logIn",
          element: <Login />
        },
        {
          path: "/sign-up",
          element: <SignUp />
        }
      ],
    },
  ]);
  return element;
}
export default AppNavigation;
