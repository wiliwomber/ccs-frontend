"use strict";

import HttpService from './HttpService';

export default class CourseService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/course" }

    static getCourses(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
    static getCoursesByID (id) {
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




    static deleteCourse(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${CourseService.baseURL()}/${id}`, function(data) {
                if(data.message != undefined) {
                    resolve(data.message);
                }
                else {
                    reject('Error while deleting');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateCourse(id) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${CourseService._id}`, CourseService, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static createCourse(course) {
        course.courseid = Math.floor((Math.random() * 100000000) + 1).toString();
        return new Promise((resolve, reject) => {
            HttpService.post(CourseService.baseURL(), course, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getSelectedCoursesByIDMat (matriculation) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${CourseService.baseURL()}/${matriculation}`, function(data) {
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

    static postSelectedCoursesByID (id, matriculation) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${CourseService.baseURL()}/${id}/${matriculation}`, function(data) {
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

    static deleteSelectedCoursesByID (id, matriculation) {
        return new Promise((resolve, reject) => {
            HttpService.delete(`${CourseService.baseURL()}/${id},/${matriculation}`, function(data) {
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





}