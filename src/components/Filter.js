"use strict";

import React from 'react';
import {Grid, Cell, Button, SelectField, TextField, FontIcon, Slider} from 'react-md';
import './../App.css';
import styled from "styled-components";
import {AddCourseView} from "../views/AddCourseView";


const NUMBER_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const StyledCell = styled(Cell)`
    margin: 0px;
    padding: 4px;
    padding-left: 9px;
    padding-right: 9px;
`;
const StyledTextField = styled(TextField)`
    font-size: 10px;
`;

const StyledSelectField = styled(SelectField)`
    font-size: 10px;
`;

const StyledSlider  = styled(Slider)`
    font-size: 10px;
`;




export class Filter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    this.handleChangeSearchCredits = this.handleChangeSearchCredits.bind(this);
    this.handleChangeSearchDay = this.handleChangeSearchDay.bind(this);
    this.handleChangeSearchSemester = this.handleChangeSearchSemester.bind(this);
    this.handleChangeSearchTerm = this.handleChangeSearchTerm.bind(this);
    this.handleResetFilters = this.handleResetFilters.bind(this);
    }


    handleChangeSearchTerm(value){
        let filter = this.props.filter;
        filter.searchTerm = value;
        this.props.updateFilter(filter);
    }

    handleChangeSearchCredits(value){
        let filter = this.props.filter;
        filter.searchCredits = value;
        this.props.updateFilter(filter);
    }

    handleChangeSearchSemester(value){
        let filter = this.props.filter;
        filter.searchSemester = value;
        this.props.updateFilter(filter);
    }

    handleChangeSearchDay(value){
        let filter = this.props.filter;
        filter.searchDay = value;
        this.props.updateFilter(filter);
    }

    handleResetFilters(){
        let filter = this.props.filter;
        filter.searchDay = '';
        filter.searchTerm = '';
        filter.searchCredits = '';
        filter.searchSemester = '';
        this.props.updateFilter(filter);
    }

    render() {

        return (
                <Grid>
                    <StyledCell size={5}>
                        <StyledSlider
                            id="semesterSlider"
                            label="Semester"
                            leftIcon={<FontIcon>hourglass_empty</FontIcon>}
                            onChange={this.handleChangeSearchSemester}
                            defaultValue={1}
                            min={1}
                            max={6}
                            discrete
                        />
                    </StyledCell>

                    <StyledCell size={5}>
                        <StyledSlider
                            id="creditSlider"
                            label="Credits"
                            leftIcon={<FontIcon>school</FontIcon>}
                            onChange={this.handleChangeSearchCredits}
                            defaultValue={5}
                            min={1}
                            max={10}
                            discrete
                        />
                    </StyledCell>

                    <StyledCell size={2} id="createCourseCell">
                        <AddCourseView/>
                    </StyledCell>

                    <StyledCell size={5} >
                        <StyledTextField
                            id="searchField"
                            placeholder="Search for ..."
                            resize={{min:200, max:800}}
                            value={this.props.filter.searchTerm.toLocaleLowerCase()}
                            className="md-cell md-cell--right"
                            leftIcon={<FontIcon>search</FontIcon>}
                            onChange={this.handleChangeSearchTerm}
                        />
                    </StyledCell>
                    <StyledCell size={5}>
                        <StyledSelectField
                            id="dayFilter"
                            placeholder="Day of the week"
                            size="150px"
                            menuItems={DAYS}
                            onChange={this.handleChangeSearchDay}
                            position={SelectField.Positions.TOP_RIGHT}
                        />
                    </StyledCell>

                    <StyledCell size={2}>
                        <Button id="resetFilter" type="submit" raised secondary className="md-cell md-cell--3" onClick = {this.handleResetFilters}>
                        Reset Filters
                        </Button>
                    </StyledCell>
                </Grid>
        );
    }
}


