"use strict";

import React from 'react';

import AddModule from './../components/AddModule';
import MovieService from "../services/MovieService";


export class AddModuleView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          module : undefined
        };
    }

    updateModule(module) {
        if(this.state.module == undefined) {
            ModuleService.createMovie(movie).then((data) => {
                this.props.history.push('/');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating movie'}));
            });
        } else {
            MovieService.updateMovie(movie).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating movie'}));
            });
        }
    }

    render() {

        return (<AddModule module={this.state.module} onSubmit={(module) => this.updateModule(module)} error={this.state.error} />);
    }
}
