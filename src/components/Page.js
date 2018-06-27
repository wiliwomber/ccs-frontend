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
    height: 100%;
    min-height: 900px;
    background-size:cover;
    display: flex;
    flex-direction: column;
`;

const StyledFooter = styled(Footer)`
    flex-shrink: 0;
`;

const StyledContent = styled.div`
    flex: 1 0 auto;
`;

const CloudContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
`;

export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    componentDidMount() {
        this.setState({
            title: document.title
        });
    }

    render() {
        return (
            <StyledSection>
                <Header title={this.state.title}/>
                <StyledContent>{this.props.children}</StyledContent>
                <CloudContainer/>
                <StyledFooter/>
            </StyledSection>
        );
    }
}