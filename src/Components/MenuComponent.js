import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: [
                {
                    id: "0",
                    name: "Uthappizza",
                    image: "assets/images/uthappizza.png",
                    category: "main",
                    label: "hot",
                    price: "4.99",
                    description: "A unique combination of Indian Uthappam (Panceke and Itanlian pizza, topped with Cerignola olives, rip vine cherry tomatoes, Vidalia onion,, Guntur chillies and Buffalo Panner"
                },
                {
                    id: "1",
                    name: "Uthappizza",
                    image: "assets/images/vadonut.png",
                    category: "main",
                    label: "hot",
                    price: "4.99",
                    description: "A unique combination of Indian Uthappam (Panceke and Itanlian pizza, topped with Cerignola olives, rip vine cherry tomatoes, Vidalia onion,, Guntur chillies and Buffalo Panner"
                },
                {
                    id: "2",
                    name: "Uthappizza",
                    image: "assets/images/buffet.png",
                    category: "main",
                    label: "hot",
                    price: "4.99",
                    description: "A unique combination of Indian Uthappam (Panceke and Itanlian pizza, topped with Cerignola olives, rip vine cherry tomatoes, Vidalia onion,, Guntur chillies and Buffalo Panner"
                },
                {
                    id: "3",
                    name: "Uthappizza",
                    image: "assets/images/elaicheesecake.png",
                    category: "main",
                    label: "hot",
                    price: "4.99",
                    description: "A unique combination of Indian Uthappam (Panceke and Itanlian pizza, topped with Cerignola olives, rip vine cherry tomatoes, Vidalia onion,, Guntur chillies and Buffalo Panner"
                },
                {
                    id: "4",
                    name: "Uthappizza",
                    image: "assets/images/zucchipakoda.png",
                    category: "main",
                    label: "hot",
                    price: "4.99",
                    description: "A unique combination of Indian Uthappam (Panceke and Itanlian pizza, topped with Cerignola olives, rip vine cherry tomatoes, Vidalia onion,, Guntur chillies and Buffalo Panner"
                },
            ]
        }
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
                <Media key={dish.id} tag="li" className="col-12 mt-5">
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.description} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
            )
        })
        return (
            <div className='container'>
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        )
    }
}

export default Menu;