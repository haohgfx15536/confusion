import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <RenderMenuItem dish={dish} onClick={props.onClick} />
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

const RenderMenuItem = ({ dish, onClick}) => {
    return (
        <Card onClick={() => onClick(dish.id)} key={dish.id} className="col-12 col-md-5 mt-1">
            <CardImg width="100%" src={dish.image} alt={dish.description} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}


export default Menu;