"use strict";

import React from 'react';

import Header from './Header';
import Footer from './Footer';
import styled from "styled-components/";
import img from './../img/background.jpg';

const StyledSection = styled.section`
    responsive;
    background-image: url(${img});
    background-repeat: no-repeat;
    width: auto;
    height: auto;
    min-height: 1000px;
    background-size:contain;
`;

export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    componentDidMount(){
       this.setState({
           title: document.title
       });
    }

    render() {
        return (
            <StyledSection>
                <Header title={this.state.title} />
                {this.props.children}

            </StyledSection>
        );
    }
}//<Footer />