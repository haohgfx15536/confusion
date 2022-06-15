import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap"

const DetailDish = (props) => {
    if (props.dish !== undefined) {
        return (
           <RenderDish dish={props.dish} />
        )
    }

    else
        return (
            <div>

            </div>
        )
}

const RenderDish = ({dish}) => {
    return (
        <div className="container">
            <div className="row">
                <Card className="col-12 col-md-5 mt-1">
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default DetailDish;