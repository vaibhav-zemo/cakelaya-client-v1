import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Form from "./pages/form";
import MyOrder from "./pages/MyOrder";
import Admin from "./pages/AdminHome";
import Headq from "./pages/headq";
import Customized from "./pages/Customize";
import { About } from "./pages/About";
import Gift from "./pages/Gift";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Privacy from "./pages/Privacy";
import Profile from "./pages/Profile";
import Cancel from "./pages/Cancel";
import Term from "./pages/Term";
import Refund from './pages/Refund'
import Return from './pages/Return'
import Shipping from './pages/Shipping'

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/inventory">
          {!user ? <Redirect to="/login" /> : <Admin />}
        </Route>
        <Route path="/headq">
          <Headq />
        </Route>
        <Route path="/gift">
          <Gift />
        </Route>
        <Route path="/customized">
          <Customized />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/myorders">
          {!user ? <Redirect to="/login" /> : <MyOrder />}
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/cancel">
          <Cancel />
        </Route>
        <Route path="/term">
          <Term />
        </Route>
        <Route path="/refund">
          <Refund />
        </Route>
        <Route path="/return">
          <Return />
        </Route>
        <Route path="/shipping">
          <Shipping />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
