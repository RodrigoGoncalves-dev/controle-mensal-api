"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserMock {
    constructor() {
        this.userWithData = {
            id: 1,
            name: 'Rodrigo',
            email: 'r@r.com',
            password: '123'
        };
        this.userWithoutData = {
            id: 0,
            name: null,
            email: null,
            password: null
        };
        this.userWithInvalidData = {
            name: 'Rodrigo',
            email: 'r@r.com',
            password: '123'
        };
        this.userWithInvalidEmail = {
            id: 1,
            name: 'Rodrigo',
            email: '',
            password: '123'
        };
        this.userWithInvalidPassword = {
            id: 1,
            name: 'Rodrigo',
            email: 'r@r.com',
            password: ''
        };
        this.userWithInvalidId = {
            id: 0,
            name: 'Rodrigo',
            email: 'r@r.com',
            password: '123'
        };
        this.userWithInvalidName = {
            id: 1,
            name: '',
            email: 'r@r.com',
            password: '123'
        };
    }
}
exports.default = new UserMock();
