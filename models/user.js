var executeQuery = require('../config/database');

function getUsers() {
    var query = 'SELECT * FROM user';
    return new executeQuery(query);
}

function addUser(paramters) {
    var query = 'INSERT INTO user SET ?;';
    return new executeQuery(query, paramters);
}

function updateUser(paramters, id) {
    var query = `UPDATE user SET ? WHERE U_ID = ${id};`;
    return new executeQuery(query, paramters);
}

function deleteUser(id) {
    var query = `Delete FROM user WHERE U_ID = ${id};`;
    return new executeQuery(query);
}

var k = new getUsers();
k.on('results',function(results){
    console.log(results[0]);
})

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser
}