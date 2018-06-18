"use strict";

import HttpService from "./HttpService";
import MovieService from "./MovieService";

export default class UserService {

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/auth";
    }

    static register(user, pass, sem) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/register`, {
                username: user,
                password: pass,
                semester: sem,
            }, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static login(user, pass) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/login`, {
                username: user,
                password: pass,

            }, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static logout() {
        window.localStorage.removeItem('jwtToken');
    }

    static getCurrentUser() {
        let token = window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return {
            id: JSON.parse(window.atob(base64)).id,
            username: JSON.parse(window.atob(base64)).username,
            semester: JSON.parse(window.atob(base64)).semester,
            selectedCourses: JSON.parse(window.atob(base64)).selectedCourses
        };
    }

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }


    static update(user) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/update`, user, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateUser() {
        console.log('updateUser im frontend vor getCurrentUser');
        let user = this.getCurrentUser();
        console.log(user);
        return new Promise((resolve, reject) => {
            HttpService.post(`${this.baseURL()}/select`, user, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }
}