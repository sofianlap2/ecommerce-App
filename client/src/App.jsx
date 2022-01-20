import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// class ProtectedRoute extends React.Component {
//   render() {
//     const { component: Component, ...props } = this.props

//     return (
//       <Route 
//         {...props} 
//         render={props => (
//           this.state.authenticated ?
//             <Component {...props} /> :
//             <Navigate to='/login' />
//         )} 
//       />
//     )
//   }
// }

const App = () => {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login">
          { user ? <Navigate to="/" /> : <Login /> }
        </Route> */}
      </Routes>
    </Router>
  );
};

export default App;