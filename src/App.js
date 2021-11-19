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
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import SeeAllOrders from './Pages/SeeAllOrders/SeeAllOrders';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>

          <Switch>
            <Route exact path="/home">
              <Header></Header>
              <HomePage></HomePage>
              <Footer></Footer>
            </Route>
            <Route exact path="/">
              <Header></Header>
              <HomePage></HomePage>
              <Footer></Footer>

            </Route>
            <Route exact path="/login">
              <NavBar></NavBar>
              <Login></Login>
              <Footer></Footer>

            </Route>
            <Route exact path="/services">
              <NavBar></NavBar>
              <Services></Services>
              <Footer></Footer>

            </Route>
            <Route exact path="/about">
              <NavBar></NavBar>
              <About></About>
              <Footer></Footer>

            </Route>
            <Route exact path="/reviews">
              <NavBar></NavBar>
              <Reviews></Reviews>
              <Footer></Footer>

            </Route>
            <PrivateRoute exact path="/services/:id">
              <NavBar></NavBar>
              <OrderPage></OrderPage>
              <Footer></Footer>

            </PrivateRoute>
            <PrivateRoute exact path="/manageallorders">
              <NavBar></NavBar>
              <ManageAllOrders></ManageAllOrders>
              <Footer></Footer>

            </PrivateRoute>
            <PrivateRoute exact path="/seeallorders">
              <NavBar></NavBar>
              <SeeAllOrders></SeeAllOrders>
              <Footer></Footer>

            </PrivateRoute>
            <PrivateRoute exact path="/addservice">
              <NavBar></NavBar>
              <AddService></AddService>
              <Footer></Footer>

            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <NavBar></NavBar>
              <MyOrders></MyOrders>
              <Footer></Footer>

            </PrivateRoute>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
