"use strict";

import HttpService from "./HttpService";
import MovieService from "./MovieService";
import CourseService from "./CourseService";

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
        let userId = this.getCurrentUser().id;
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${userId}`, user, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static selectCourse(id){
        let user = this.getCurrentUser();
        let promise = CourseService.getCourse(id);
            promise.then(function(result) {
            console.log("kurs");
            console.log(result);
            console.log('vor push');
            console.log(user);
            user.selectedCourses.push(result);
            console.log('nach push');
            console.log(user);
        })
        console.log("Hallloooooooooooooo")
 
    }


    static getUser(id) {
        console.log('versuche get User');
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving User');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateUser() {
        let userId = this.getCurrentUser().id;
        //let user = this.getUser(userId);
        let user = this.getCurrentUser();
        this.update(user);
    }
}