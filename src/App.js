import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login/Login';
import NavBar from './Pages/NavBar/NavBar';
import Services from './Pages/Services/Services';
import OrderPage from './Pages/OrderPage/OrderPage';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

import MyOrders from './Pages/MyOrders/MyOrders';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddService from './Pages/Admin/AddService/AddService';
import ManageAllOrders from './Pages/Admin/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>

          <Switch>
            <Route exact path="/home">
              <Header></Header>
              <HomePage></HomePage>
            </Route>
            <Route exact path="/">
              <Header></Header>
              <HomePage></HomePage>
            </Route>
            <Route exact path="/login">
              <NavBar></NavBar>
              <Login></Login>
            </Route>
            <Route exact path="/services">
              <NavBar></NavBar>
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/services/:id">
              <NavBar></NavBar>
              <OrderPage></OrderPage>
            </PrivateRoute>
            <PrivateRoute exact path="/manageallorders">
              <NavBar></NavBar>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addservice">
              <NavBar></NavBar>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <NavBar></NavBar>
              <MyOrders></MyOrders>
            </PrivateRoute>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
