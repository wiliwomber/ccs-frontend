"use strict";

import HttpService from './HttpService';
import UserService from "./UserService";

export default class CourseService {
    static listeners ={};
    constructor(){
    }


/*

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
*/

    static baseURL() {return "http://localhost:3000/courses" }

    static getCourses(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getCourse(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${CourseService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving movie');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }


    static createCourse(course) {
        console.log(course);
        course.id = Math.floor((Math.random() * 100000000) + 1).toString();
        return new Promise((resolve, reject) => {
            HttpService.post(
                CourseService.baseURL(),
                course,
                function(data) {
                    resolve(data);
                },
                function(textStatus) {
                    reject(textStatus);
                });
        });
    }


    static updateCourse(course) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${course._id}`, course, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }
}
