import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import './App.css';
import Station from '../StationPage/Station';
import Menu from '../MenuPage/Menu';
import Dish from '../DishPage/Dish';
import StationAdmin from '../StationAdmin/StationAdmin';
import Admin from '../Admin/Admin';
import Orders from '../Orders/Orders';
import MenuAdmin from '../MenuAdmin/MenuAdmin';
import CreateDish from '../CreateDish/CreateDish';
import BottomNavBar from '../MaterialUI/BottomNavBar';
import PrepList from '../PrepList/PrepList';
import 'typeface-roboto';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          {/* <TopNav /> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact path="/admin"
              component={Admin}
            />
            <ProtectedRoute
              exact path="/admin/stations"
              component={StationAdmin}
            />
            <ProtectedRoute
              exact path="/admin/menu"
              component={MenuAdmin}
            />
            <ProtectedRoute
              exact path="/preplist"
              component={PrepList}
            />
            <ProtectedRoute
              exact path="/admin/menu/createdish"
              component={CreateDish}
            />
            <ProtectedRoute
              exact path="/admin/orders"
              component={Orders}
            />
            <ProtectedRoute
              exact path="/stations"
              component={Station}
            />
            <ProtectedRoute
              exact path="/menu/:id"
              component={Menu}
            />
            <ProtectedRoute
              exact path="/dish/:id"
              component={Dish}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          {this.props.user.id ? <BottomNavBar /> : <Footer />}
        </div>
      </Router>
  )}
}
const mapStateToProps = reduxState => ({
  user: reduxState.user,
});

export default connect(mapStateToProps)(App);
