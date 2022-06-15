import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Card onClick={() => this.props.onClick(dish.id)} key={dish.id} className="col-12 col-md-5 mt-1">
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
            </div>
        )
    }
}

export default Menu;