class UserMock {
  userWithData = {
    id: 1,
    name: 'Rodrigo',
    email: 'r@r.com',
    password: '123'
  }
  userWithoutData = {
    id: 0,
    name: null,
    email: null,
    password: null
  }
  userWithInvalidData = {
    name: 'Rodrigo',
    email: 'r@r.com',
    password: '123'
  }
  userWithInvalidEmail = {
    id: 1,
    name: 'Rodrigo',
    email: '',
    password: '123'
  }
  userWithInvalidPassword = {
    id: 1,
    name: 'Rodrigo',
    email: 'r@r.com',
    password: ''
  }
  userWithInvalidId = {
    id: 0,
    name: 'Rodrigo',  
    email: 'r@r.com',
    password: '123'
  }
  userWithInvalidName = {
    id: 1,
    name: '',
    email: 'r@r.com',
    password: '123'
  }
}

export default new UserMock();