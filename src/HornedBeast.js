import React from "react";
class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {counter : 0}
    }

    addCount = () => {

        this.setState({counter : this.state.counter+1})

    }




    render() {
        
        return(
            <>
            <h2>{this.props.title}</h2>
            <p>Likes = {this.state.counter}</p>
            <img onClick={this.addCount} src={this.props.imgUrl} alt={this.props.description} height="200" />
            <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast;

