import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "./Data.json";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
    
    render() {
      
        return(
            <>
              <Row xs={1} md={4} className="g-4">{Data.map(x=> <Col> <HornedBeast imgUrl={x.image_url} title={x.title}  description={x.description}/> </Col>)} </Row>
            </>
        )
    }
}
export default Main;
