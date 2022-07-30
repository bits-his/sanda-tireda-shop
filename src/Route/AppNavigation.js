import { useRoutes } from "react-router-dom";
import Account from "../Shop/Dashboard/Account";
import AccountHome from "../Shop/Dashboard/AccountHome";
import Orders from "../Shop/Dashboard/Orders";
import Overview from "../Shop/Dashboard/Overview";
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
    {

      path: "/account",
      element: <Account />,
      children: [
        { index: true, element: <AccountHome /> },
      ]
    }
  ]);
  return element;
}
export default AppNavigation;
