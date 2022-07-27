import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UserData extends React.Component {

    constructor(probs){
        super(probs);

        this.state = {}
    }

    render() {

        return (
            
        < Form >
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Select  number of horn</Form.Label>
                    <Form.Select id="disabledSelect">
                        <option value="1">1 horn</option>
                        <option value="2">2 horns</option>
                        <option value="3">3 horns</option>
                        <option value="100">100 horns</option>
                    </Form.Select>
                </Form.Group>
         </Form >

    )
}
}

export default UserData;
