import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DISHES from '../shared/dishes';
import DetailDish from './DetailComponent';

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

                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>

                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onSelectedDish(dishId)} />

                <DetailDish dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

            </React.Fragment>
        );
    }
}

export default Main;