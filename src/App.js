import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import Deals from './Components/Deals/Deals';
import NotMatch from './Components/NotMatch/NotMatch';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckOut from './Components/CheckOut/CheckOut';
import AddProduct from './Components/AddProduct/AddProduct';
import ManageProduct from './Components/ManageProduct/ManageProduct';
export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignin:false,
  })
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/orders">
           <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
           <CheckOut/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
           <Admin/>
          </PrivateRoute>
          <Route path="/deals">
           <Deals/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/addproduct">
            <AddProduct/>
          </Route>
          <Route path="/manageproduct">
           <ManageProduct/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="*">
            <NotMatch />
          </Route>
        </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
