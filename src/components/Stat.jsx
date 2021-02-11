
import React, { Component } from 'react';


class Stat extends Component {
    constructor(props){
        super(props)

        this.state={
            status:""
        }
    }

    componentDidMount(){
        fetch(`http://localhost:4000/ava/${this.props.id}`).then(res=>res.json()).then(data=>{this.setState({status:data.status}) })

    }



    render(){
        return (
            <div>
                {this.state.status}
            </div>
        );
    }
}

export default Stat;



