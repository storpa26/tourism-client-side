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
import AddService from './Pages/AddService/AddService';

function App() {
  return (
    <div>
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
          <PrivateRoute exact path="/addservice">
            <NavBar></NavBar>
            <AddService></AddService>
          </PrivateRoute>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
