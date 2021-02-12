import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from '@material-ui/core';
import GlovesPage from '../containers/GlovesPage';
import BeaniesPage from '../containers/BeaniesPage';
import FacemasksPage from '../containers/FacemasksPage';

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


    handleChange(event,newValue){
        this.setState({value:newValue})
        
    }

    handleRedirect(){
        if(this.state.value===0){
            return(<GlovesPage/>)
        }
        else if(this.state.value===1){
            return(<BeaniesPage/>)
        }
        else if(this.state.value===2){
            return(<FacemasksPage/>)
        }
        else{
            return(<GlovesPage/>)
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
