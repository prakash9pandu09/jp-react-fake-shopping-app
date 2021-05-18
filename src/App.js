import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/products/:productid" component={ProductDetails} />
          <Route>
            <div style={{ padding: "10rem" }}>404 Not Found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
