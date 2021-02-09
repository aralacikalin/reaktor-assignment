
import React, { Component } from 'react';


class GlovesPage extends Component {
    ismounted=false
    constructor(props){
        super(props)

        this.state={
            gloves:[],
            a:false
        }
    }

    componentDidMount(){
        fetch("http://localhost:4000/gloves").then(res=>res.json()).then(data=>{this.setState({gloves:data},()=>{console.log(this.state.gloves)})})
    }



    render(){
        return (
            <div>
                {this.state.gloves.map((value)=>(<div>{value.name}</div>))}
                {this.state.a?(<div>{this.state.gloves[1].id}</div>):null}
                <button onClick={()=>{this.setState({a:!this.state.a})}}></button>
            </div>
        );
    }
}

export default GlovesPage;



