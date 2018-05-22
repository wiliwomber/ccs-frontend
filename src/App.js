"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { MovieListView } from './views/MovieListView';
import { MovieDetailView }   from './views/MovieDetailView';
import { MovieFormView }   from './views/MovieFormView';
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";


import UserService from "./services/UserService";
import {MainPageView} from "./views/MainPageView";


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'CampusCourseScheduler',
            routes: [
                { component: UserLoginView, path: '/login'},
                //{component: MainPageView, path: '/', exact: true},
                //{ component: MovieListView , path: '/', exact: true},
                //{ component: MovieDetailView , path: '/show/:id'},
                { component: UserSignupView, path: '/register'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<MainPageView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/'},
                { component: UserLoginView, path: '/login'}


            ]
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return (<div>
            <Router>
                <Switch>
                    {this.state.routes.map((route, i) => (<Route key={i} {...route}/>))}
                </Switch>
            </Router>
        </div>);
    }
}


