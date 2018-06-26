"use strict";

import HttpService from "./HttpService";

export default class UserService {

    static listeners ={};
    constructor() {

    }


    static baseURL() {
        return "http://localhost:3000/auth";
    }

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
                let index = currentUser.selectedCourses.indexOf(id);
                currentUser.selectedCourses.splice(index, 1);
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

    static selectCourse(id){
        let tempUser = undefined;
      UserService.getUser().
        then(user => {
          tempUser = user;
        let courseNotExisting = true;
          for (var key in tempUser.selectedCourses) {
              if (tempUser.selectedCourses.hasOwnProperty(key)) {
                  if(tempUser.selectedCourses[key] == id){
                      //@TODO add course exist snackbar
                      console.log("Course already existing");
                      courseNotExisting = false;
                      UserService.notifyListeners("test");
                      UserService.notifyListeners("courseChanged");
                  }
              }
          }
      if(courseNotExisting) {
          return new Promise((resolve, reject) => {
                  HttpService.put(`${UserService.baseURL()}/selectCourse`, {
                      courseId: id,
                  }, function (data) {
                      resolve(data);
                      // UserService.notifyListeners("Snack_CourseAdded");
                      UserService.notifyListeners("courseChanged");
                  }, function (textStatus) {
                      reject(textStatus);
                  });
              });

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