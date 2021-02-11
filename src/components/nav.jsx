import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from '@material-ui/core';

class Nav extends Component {

    constructor(props){
        super(props)
        this.state={
            value:null,
            username:null
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleRedirect=this.handleRedirect.bind(this);
    }

    async componentDidMount(){
        if(window.location.pathname==="/reaktor-assignment/gloves"){
            this.setState({value:0})
        }
        else if(window.location.pathname==="/reaktor-assignment/beanies"){
            this.setState({value:1})
        }
        else if(window.location.pathname==="/reaktor-assignment/facemasks"){
            this.setState({value:2})
        }


    }


    handleChange(event,newValue){
        this.setState({value:newValue})
        
    }

    handleRedirect(){
        if(this.state.value===0){
            return(<Redirect to="/reaktor-assignment/gloves"/>)
        }
        else if(this.state.value===1){
            return(<Redirect to="/reaktor-assignment/beanies"/>)
        }
        else if(this.state.value===2){
            return(<Redirect to="/reaktor-assignment/facemasks"/>)
        }
        else{
            return(null)
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
