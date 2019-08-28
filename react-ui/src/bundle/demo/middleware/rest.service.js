/* eslint-disable no-undef */

/** REST Call **/
const SERVICE_API = 'http://localhost:3070';

/** Call for All Users from Server**/
export const fetchUsers = async () => {
    let response;
    response = await fetch(SERVICE_API + '/users');
    return response;
};

/** Add User**/
export const addUser = async (user) => {
    let response = await fetch(SERVICE_API + '/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return response;
};

/** Get User **/
export const fetchUser = async (id) => {
    let response = await fetch(SERVICE_API + '/user/' + id);
    return response;
};

/**  Dekete User **/
export const deleteUser = async (id) => {
    let response = await fetch(SERVICE_API + '/user/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json'
        }
    });
    return response;
};

/** Update User ***/
// export const updateUser = async (user) => {
//     let response = await fetch(SERVICE_API + '/user/' + user.id, {
//         method: 'PUT',
//         headers: {
//             'Accept': 'application/json'
//         },
//         body: user
//     });
//     return response;
// };
