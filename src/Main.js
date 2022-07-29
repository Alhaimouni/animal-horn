import React from "react";
import HornedBeast from "./HornedBeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {
    render() {

        return (

            <>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">find by horn number</Form.Label>
                    <Form.Select id="disabledSelect" onChange={(e)=>this.props.sta(e)}>
                        <option value="">All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">Wow!!!!</option>
                    </Form.Select>
                </Form.Group>



                <Row xs={1} md={4} className="g-4">{(this.props.dt).map(x => <Col>  <HornedBeast imgUrl={x.image_url} title={x.title} description={x.description} click={this.props.display} data={x} /></Col>)}  </Row>
            </>
        )
    }
}
export default Main;
