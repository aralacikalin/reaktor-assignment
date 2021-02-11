
import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
import Stat from "../components/Stat"


class GlovesPage extends Component {
    ismounted=false
    constructor(props){
        super(props)

        this.state={
            gloves:[],
            page:0,
            rowsPerPage:15

        }
    }

    componentDidMount(){
        fetch("http://localhost:4000/gloves").then(res=>res.json()).then(data=>{this.setState({gloves:data},()=>{console.log(this.state.gloves)})})
    }

    handleChangePage = (event, newPage) => {
        this.setState({page:newPage});
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage:parseInt(event.target.value, 10)});
        this.setState({page:0});

    };

    render(){

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table  size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">name</TableCell>
                            <TableCell align="right">manufacturer</TableCell>
                            <TableCell align="right">type</TableCell>
                            <TableCell align="right">price</TableCell>
                            <TableCell align="right">color</TableCell>
                            <TableCell align="right">stock</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.gloves.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage) .map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.manufacturer}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.color}</TableCell>
                            <TableCell align="right"><Stat id={row.id.toUpperCase()}/></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    rowsPerPageOptions={[10, 15, 20]}
                    count={this.state.gloves.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    rowsPerPage={this.state.rowsPerPage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
            </div>
        );
    }
}

export default GlovesPage;



