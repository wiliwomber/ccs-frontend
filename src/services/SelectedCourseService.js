"use strict";

import HttpService from './HttpService';

export default class SelectedCourseService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/selectedcourses" }


    static getSelectedCoursesByMat (matriculation) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${SelectedCourseService.baseURL()}/${matriculation}`, function(data) {
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
            HttpService.post(`${SelectedCourseService.baseURL()}/${id}/${matriculation}`, function(data) {
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
            HttpService.delete(`${SelectedCourseService.baseURL()}/${id},/${matriculation}`, function(data) {
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