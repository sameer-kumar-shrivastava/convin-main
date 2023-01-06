import {
    REQUEST_USER_LIST_PENDING,
    REQUEST_USER_LIST_SUCCESS,
    REQUEST_USER_LIST_FAILED,
    REQUEST_SINGLE_USER_PENDING,
    REQUEST_SINGLE_USER_SUCCESS,
    REQUEST_SINGLE_USER_FAILED
} from './constants';



const initialStateUsers = {
    isPending: false,
    users: [],
    error: ''
}

export const requestUsers = (state = initialStateUsers, action = {}) => {
    switch (action.type) {
        case REQUEST_USER_LIST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_USER_LIST_SUCCESS:
            return Object.assign({}, state, { users: action.payload, isPending: false })
        case REQUEST_USER_LIST_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}


const initialStateSingleUser = {
    isSingleUserPending: false,
    singleUser: [],
    singleUserError: '',
    isClickedOnce: false
}
export const requestSingleUser = (state = initialStateSingleUser, action = {}) => {
    switch (action.type) {
        case REQUEST_SINGLE_USER_PENDING:
            return Object.assign({}, state, { isSingleUserPending: true, isClickedOnce: true })
        case REQUEST_SINGLE_USER_SUCCESS:
            return Object.assign({}, state, { singleUser: action.payload, isSingleUserPending: false, isClickedOnce: true })
        case REQUEST_SINGLE_USER_FAILED:
            return Object.assign({}, state, { singleUserError: action.payload, isSingleUserPending: false, isClickedOnce: true })
        default:
            return state;
    }
}