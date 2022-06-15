import React, { Component } from 'react';
import Menu from './MenuComponent';
import DISHES from '../shared/dishes';
import DetailDish from './DetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onSelectedDish(dishId)} />

                <DetailDish dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;