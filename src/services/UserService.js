"use strict";

import HttpService from "./HttpService";

export default class UserService {

    static listeners ={};
    constructor() {

    }


    static baseURL() {
        return "http://localhost:3000/auth";
    }

    //listeners so that when a asynchronus call for changing the schedule in the database
    // is done, the calender and the lists are updated
    static registerListener(event, fn) {
        if (!UserService.listeners.hasOwnProperty(event)) {
            UserService.listeners[event] = [];
        }
        UserService.listeners[event].push(fn);
    }

    static notifyListeners(event) {
        if (UserService.listeners.hasOwnProperty(event)) {
            UserService.listeners[event].forEach(fn => fn());
        }
    }

    static register(user, pass, sem, cos) {
        console.log(cos);
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/register`, {
                username: user,
                password: pass,
                semester: sem,
                courseOfStudies: cos,
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


    static updateSelectedCourses(user) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/deSelectCourse`, user, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }



    static deSelectCourse(id){
        let currentUser = undefined;
        UserService.getUser()
            .then(user => {
                currentUser = user;
                //index of course to deselect
                console.log(currentUser.chosenCourses);
                console.log('i was here');
                for (let index in currentUser.chosenCourses){
                    if(currentUser.chosenCourses.hasOwnProperty(index)){
                        if(currentUser.chosenCourses[index].course == id){
                            currentUser.chosenCourses.splice(index, 1);
                            break;
                        }
                    }
                }
                UserService.updateSelectedCourses(currentUser)
                    .then( user => {
                        UserService.notifyListeners("courseChanged");
                        // Snackbar
                        UserService.notifyListeners("Snack_CourseRemoved");
                    })
                    .catch(error =>
                    {
                        console.log(error);
                    });

            })
            .catch(error => {
                console.log(error);
            });
    }


    static selectCourse(id,semester){
        console.log(semester + 'sem');
        let tempUser = undefined;
        let selectedCourse = {course: id, semester: semester};
        UserService.getUser().
        then(user => {
            tempUser = user;
            let courseNotExisting = true;
            for (var key in tempUser.chosenCourses) {
                if (tempUser.chosenCourses.hasOwnProperty(key)) {
                    if(tempUser.chosenCourses[key].course == id){
                        //@TODO add course exist snackbar
                        console.log("Course already existing");
                        courseNotExisting = false;
                        //in case the semester was changed, the course stillneeds to be updated
                        if(tempUser.chosenCourses[key].semester != semester){
                            tempUser.chosenCourses[key].semester = semester;
                            this.updateSelectedCourses(tempUser)
                                .then(()=>{ UserService.notifyListeners("courseChanged");})
                                .catch(error => {console.log(error)});
                        }
                    }
                }
            }
            if(courseNotExisting) {
                tempUser.chosenCourses.push(selectedCourse);
                this.updateSelectedCourses(tempUser)
                    .then(()=>{ UserService.notifyListeners("courseChanged");})
                    .catch(error => {console.log(error)});
            }

        })
            .catch( error => {
                console.log(error);
            })
    }


    static getUser() {
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/me`, function(data) {
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

}