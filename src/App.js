import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppIndex from "./Route/AppIndex";
import ShopIndex from "./Shop/ShopIndex";
import AppNavigation from "./Route/AppNavigation";

function App() {
  return (
    <div className="whole">
      <AppNavigation />
    </div>
  );
}

export default App;
