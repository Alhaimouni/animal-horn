import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./HornedBeast.css";


class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0 }
    }

    addCount = () => {

        this.setState({ counter: this.state.counter + 1 })

    }


    render() {

        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imgUrl} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                    <Button className="b" onClick={this.addCount} variant="primary"> ❤️ {this.state.counter}</Button>
                </Card.Body>
            </Card>



        )
    }
}

export default HornedBeast;

