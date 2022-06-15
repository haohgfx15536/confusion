import React, { Component } from 'react';
import HomePage from './HomeComponent';
import Menu from './MenuComponent';
import DISHES from '../shared/dishes';
import DetailDish from './DetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom'; 

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }

        this.onSelectedDish = this.onSelectedDish.bind(this)
    }

    onSelectedDish(dishId) {
        this.setState({
            selectedDish: dishId
        })
    }

    render() {

        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;