import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './components/landing';
import RestaurantDetails from './components/restaurantDetails';
import UserLogin from './components/userlogin';
import OwnerLogin from './components/ownerlogin';
import SignUp from './components/signup';
import About from './components/about'




export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/userlogin' component={UserLogin} />
                    <Route exact path='/ownerlogin' component={OwnerLogin} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/about' component={About} />
                </div>
            </Router>
            
        );
    }
}