const fs = require("fs");
const path= require('path');

const User = {
  generateId: function () {
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if (lastUser) {
      return lastUser.id + 1;
    } else {
      return 1;
    }
  },
  filename: path.join(__dirname, "../data/usersData.json"),
  getData: function () {
    return JSON.parse(fs.readFileSync(this.filename, "utf-8"));
  },
  findAll: function () {
    return this.getData();
  },
  findByPk: function (id) {
    let allUsers = this.findAll();
    return allUsers.find((user) => (user.id = id));
  },
  findByField: function (field, param) {
    let allUsers = this.findAll();
    return allUsers.find((user) => (user[field] === param));
  },
  create: function (userData) {
    let allUsers = this.findAll();
    let user = {
      id: this.generateId(),
      ...userData,
      
    };
    allUsers.push(user);
    fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, " "));
    return user;
  },
  delete: function (id) {
    let allUser = this.findAll();
    let finalUsers = allUser.filter((user) => user.id !== id);

    fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, " "));
    return true;
  },
};


module.exports= User;