import "bootstrap/dist/css/bootstrap.min.css";
import "./Shop/ShopIndex.css";
import "./App.css";
import AppNavigation from "./Route/AppNavigation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { init } from "./redux/action/auth";


function App() {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      dispatch(init(history));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);
  return (
    <div className="whole">
      <AppNavigation />
    </div>
  );
}

export default App;
