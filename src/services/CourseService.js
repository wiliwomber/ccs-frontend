"use strict";

import HttpService from './HttpService';
import UserService from "./UserService";

export default class CourseService {
    constructor(){
    }

    static baseURL() {return "http://localhost:3000/courses" }


    //get all courses
    static getCourses(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    //get the courses for course list row and schedule view
    static getCourse(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${CourseService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving course');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }


//create course
    static createCourse(course) {
        console.log(course);
        course.id = Math.floor((Math.random() * 100000000) + 1).toString();
        UserService.notifyListeners("courseCreated");
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


    //update a course
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
