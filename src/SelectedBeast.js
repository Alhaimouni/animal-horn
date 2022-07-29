import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        return (
            <>
                <Modal show={this.props.show} >
                    <Modal.Header >
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <img src={this.props.info.image_url} alt={this.props.info.title}/>
                    <Modal.Body>{this.props.info.title}</Modal.Body>
                    <Button onClick={this.props.handleClose} >Close meee fast</Button>
                </Modal>
            </>
        )
    }

}
export default SelectedBeast;