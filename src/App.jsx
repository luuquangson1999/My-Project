import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Cart from "./page/cart/Cart";
import Footer from "./page/footer/Footer";
import Header from "./page/header/Header";
import "./App.scss";
import Scroll from "./component/scroll/Scroll";
import ProductList from "./component/product/ProductList";
import ProductDetail from "./component/product/ProductDetail";
import Slide from "./component/slide/Slide";
import Register from "./page/register/Register";
import Login from "./page/login/Login";
import LoginWithGoogle from "./page/login/LoginWithGoogle";
import LoginWithFacebook from "./page/login/LoginWithFacebook";



class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Slide />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/Login" component={Login} />
          <Route path="/loginWithGoogle" component={LoginWithGoogle} />
          <Route path="/Register" component={Register} />
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
        <Scroll />
        <Footer />
      </Router>);
  }
}
export default App;


