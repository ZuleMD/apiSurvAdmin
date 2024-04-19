import axios from 'axios';


export const loginUser = (user) => async dispatch => {

    dispatch({ type: 'USER_LOGIN_REQUEST' })

    try {
        const response = await axios.post('/api/user/login', user)
        console.log(response);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data })
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href = '/admin/dashboard'
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error })
    }

}


export const logoutUser = () => dispatch => {


    localStorage.removeItem('currentUser')
 
    window.location.href = '/'

}

 

export const createUser = (user) => async (dispatch) => {
    dispatch({ type: 'USER_CREATE_REQUEST' });
    try {
        const response = await axios.post('/api/user/create', user);
        console.log(response);
        dispatch({ type: 'USER_CREATE_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'USER_CREATE_FAILED', payload: error});
    }
}



export const getAllUsers = () => async dispatch => {
    dispatch({ type: 'GET_USERS_REQUEST' })
    try {
        const response = await axios.get('/api/user/getAllUsers')
        console.log(response);
        dispatch({ type: 'GET_USERS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_USERS_FAILED', payload: error })

    }

}

// Update the getUserById action creator to include the user ID in the URL
export const getUserById = (userId) => async dispatch => {
    dispatch({ type: 'GET_USERBYID_REQUEST' })

    try {
        const response = await axios.get(`/api/user/getUserById/${userId}`);
        dispatch({ type: 'GET_USERBYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_USERBYID_FAILED', payload: error })
    }
}


export const editUser = (editedUser) => async (dispatch) => {
    dispatch({ type: 'EDIT_USER_REQUEST' });
    try {
        const response = await axios.post('/api/user/editUser', editedUser);
        console.log(response);
        dispatch({ type: 'EDIT_USER_SUCCESS' });
        window.location.href = '/admin/users'
    } catch (error) {
        dispatch({ type: 'EDIT_USER_FAILED', payload: error });
    }
};


export const deleteUser = (userid) => async dispatch => {
    try {
        const response = await axios.post('/api/user/deleteUser', { userid })
        alert('Utilisateur supprimé avec succès')
        console.log(response);
        window.location.reload()
    } catch (error) {
         console.log(error);
    }
}

