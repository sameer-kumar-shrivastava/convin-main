import {
    REQUEST_USER_LIST_PENDING,
    REQUEST_USER_LIST_SUCCESS,
    REQUEST_USER_LIST_FAILED,
    REQUEST_SINGLE_USER_PENDING,
    REQUEST_SINGLE_USER_SUCCESS,
    REQUEST_SINGLE_USER_FAILED,
} from './constants';

export const requestUsers = () => (dispatch) => {
    dispatch({ type: REQUEST_USER_LIST_PENDING })
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_USER_LIST_SUCCESS, payload: data.data }))
        .catch(error => dispatch({ type: REQUEST_USER_LIST_FAILED, payload: error }))
}


export const requestSingleUser = (id) => (dispatch) => {
    dispatch({ type: REQUEST_SINGLE_USER_PENDING })
    fetch(`https://reqres.in/api/users/${id}`)
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_SINGLE_USER_SUCCESS, payload: data.data }))
        .catch(error => dispatch({ type: REQUEST_SINGLE_USER_FAILED, payload: error }))
}
