const UserView = require("./../../app/views/userView");

describe("Test for UserView", () => {
    test("Return an error object when try to create a new user with an null", () =>{
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/payload no existe/);
    });

    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name:12,id:'id'}
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });

    test("Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: 'username'};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/faltan datos/);
    });

    test("Create a user by given a valid payload", () => {
        const payload = {username: 'username', id:1,name:'name'};
        const result = UserView.createUser(payload);
        expect(result.name).toBe('name');
        expect(result.username).toBe('username');
        expect(result.id).toBe(1);
    });
})
