import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }

        this.renderSelectedDish = this.renderSelectedDish.bind(this);

    }

    onSelectedDish(dish) {
        this.setState({
            selectedDish: dish
        })
    }

    renderSelectedDish(dish) {
        if (dish !== null)
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.description} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        else {
            return <div></div>
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Card onClick={() => this.onSelectedDish(dish)} key={dish.id} className="col-12 col-md-5 mt-1">
                    <CardImg width="100%" src={dish.image} alt={dish.description} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            )
        })
        return (
            <div className='container'>
                <div className="row">
                    {menu}
                </div>
                {this.renderSelectedDish(this.state.selectedDish)}
            </div>

        )
    }
}

export default Menu;