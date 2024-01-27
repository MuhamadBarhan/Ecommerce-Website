import Login from "./Login/login"
import Home from "./Home/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup/signup"
import Fpass from "./Forgotpass/fpass";
import Navbar from './Navbar/navbar'
import Mobiles from "./Mobiles/mobiles";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./Cart/Cart";
import Wishlist from "./WishList/Wishlist";
import ProductDetails from "./ProductDetails/ProductDetails";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forgotpass" element={<Fpass/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/mobiles" element={<Mobiles/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/productdetails/:id" element={<ProductDetails/>}/>

        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;