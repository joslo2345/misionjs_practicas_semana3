const User = require("./../models/user");

class UserService{
    static create(id, username, name){
        return new User(id,username,name,"Sin bio")
    }
    
    static getInfo(User){
        const outputUserInfoList = [];
        outputUserInfoList[0] = User.id;
        outputUserInfoList[1] = User.username;
        outputUserInfoList[2] = User.name;
        outputUserInfoList[3] = User.bio;

        return outputUserInfoList;
    }

    static updateUsername(User,name){
        User.setUsername = name;
    }

    static getAllUsernames(usernamesList){
        const outputUsernamesList = usernamesList.map(element => element.getUsername);
        return outputUsernamesList;
    }
}

module.exports = UserService