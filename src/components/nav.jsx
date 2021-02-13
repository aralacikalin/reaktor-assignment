import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from '@material-ui/core';
import ItemList from '../containers/ItemList';

class Nav extends Component {

    constructor(props){
        super(props)
        this.state={
            gloves:[],
            beanies:[],
            facemasks:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleRedirect=this.handleRedirect.bind(this);
    }

    componentDidMount(){
        fetch("https://calm-temple-69565.herokuapp.com/gloves").then(res=>res.json()).then(data=>{this.setState({gloves:data})})
        fetch("https://calm-temple-69565.herokuapp.com/beanies").then(res=>res.json()).then(data=>{this.setState({beanies:data})})
        fetch("https://calm-temple-69565.herokuapp.com/facemasks").then(res=>res.json()).then(data=>{this.setState({facemasks:data})})


    }


    handleChange(event,newValue){
        this.setState({value:newValue})
        
    }

    handleRedirect(){
        if(this.state.value===0){
            return(<ItemList data={this.state.gloves}/>)
        }
        else if(this.state.value===1){
            return(<ItemList data={this.state.beanies}/>)
        }
        else if(this.state.value===2){
            return(<ItemList data={this.state.facemasks}/>)
        }
        else{
            return(<ItemList data={this.state.gloves}/>)
        }
    }

    render(){

        return (
            <Paper square>
            <Tabs
                value={this.state.value|undefined}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleChange}
                scrollButtons="on"
                variant="scrollable"
            >
            <Tab label="gloves" />
            <Tab label="beanies" />
            <Tab label="facemasks" />
            </Tabs>
            {this.handleRedirect()}
        </Paper>
        );
    }
}

export default Nav;
