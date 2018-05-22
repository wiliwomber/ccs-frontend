"use strict";

import React from 'react';

import AddModule from './../components/AddModule';
import ModuleService from "../services/ModuleService";


export class AddModuleView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          module : undefined
        };
    }

    createModule(module) {

            ModuleService.createModule(module).then((data) => {
                this.props.history.push('/');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating module'}));
            });
        }


    render() {

        return (<AddModule module={this.state.module} onSubmit={(module) => this.createModule(module)} error={this.state.error} />);
    }
}
