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

        this.setState({ counter: this.state.counter + 1 });
        this.props.click(this.props.data);
        
    }
    
    render() {

        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imgUrl} onClick={this.addCount}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                    <Button className="b"  variant="primary" > ❤️ Love {this.state.counter} </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeast;

