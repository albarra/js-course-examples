const Config = require('config');
const jwt = require('jsonwebtoken');

const userRepository = [{
    user: "pablo",
    password: "pablo123",
    role: "write"
},
{
    user: "jose",
    password: "jose123",
    role: "read"
}];

const credentials = Config.get('secret');

module.exports = class UserService {
    login (data) {
        var token = null;
        let user = userRepository.find(u => u.user === data.user)
        if(user && user.password === data.password) {
            token = jwt.sign({ user: user.user, role: user.role }, credentials);
        }
        return token;
    }
    hasRole(user, required) {
        return user === required
    }
}