import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap"

const DetailDish = (props) => {
    if (props.dish !== undefined) {
        return (
            <div className="container">
                <div className="row">
                    <Card className="col-12 col-md-5 mt-1">
                        <CardImg src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }

    else
        return (
            <div>

            </div>
        )
}

export default DetailDish;