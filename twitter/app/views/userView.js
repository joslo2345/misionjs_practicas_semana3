const UserService = require("./../services/userService");

class UserView {
    static createUser(payload){
        if (payload == null){
            return {error: "payload no existe"};
        }
        else{
            const anyValueNull = Object.values(payload).some(value => {
                if (value === null){ return true;}
                else {return false;}
            });
            if (anyValueNull){
                return {error: "necesitan tener un valor válido"};
            }
            else if(payload.username === undefined || payload.name === undefined || payload.id === undefined){
                return {error: "faltan datos"};
            }
            else{
                const user = UserService.create(payload.id,payload.username,
                    payload.name);
                return user;
            }
        }
    }
}

module.exports = UserView