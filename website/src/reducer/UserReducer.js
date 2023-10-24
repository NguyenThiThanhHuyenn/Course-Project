import cookie from "react-cookies";

// const initState = {
//     id: '',
//     userName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: ''
// };

const UserReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return action.payload;
        case "logout":
            cookie.remove("user");
            return null;
    }
    return state;
}

export default UserReducer;