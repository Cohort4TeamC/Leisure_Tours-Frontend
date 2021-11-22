import {
    ADMIN_DELETE_FAIL, ADMIN_DELETE_REQUEST, ADMIN_DELETE_SUCCESS,
    ADMIN_FORGOT_PASSWORD_FAIL, ADMIN_FORGOT_PASSWORD_REQUEST, ADMIN_FORGOT_PASSWORD_SUCCESS,
    ADMIN_LIST_BYID_FAIL, ADMIN_LIST_BYID_REQUEST, ADMIN_LIST_BYID_SUCCESS,
    ADMIN_LIST_FAIL, ADMIN_LIST_REQUEST, ADMIN_LIST_SUCCESS,
    ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, 
    ADMIN_SIGNUP_FAIL, ADMIN_SIGNUP_REQUEST, ADMIN_SIGNUP_SUCCESS, 
    ADMIN_UPDATE_FAIL, ADMIN_UPDATE_REQUEST, ADMIN_UPDATE_SUCCESS
} from "../constant/admin";

function adminListReducer(state = { adminList: [] }, action) {
    switch (action.type) {
        case ADMIN_LIST_REQUEST:
            return { loading: true, adminList: [] }
        case ADMIN_LIST_SUCCESS:
            return { loading: false, adminList: action.payload }
        case ADMIN_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function adminListByIdReducer(state = { adminListById: [] }, action) {
    switch (action.type) {
        case ADMIN_LIST_BYID_REQUEST:
            return { loading: true, adminListById: [] }
        case ADMIN_LIST_BYID_SUCCESS:
            return { loading: false, adminListById: action.payload }
        case ADMIN_LIST_BYID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function adminForgotPswrdReducer(state = { forgotPswrd: {} }, action) {
    switch (action.type) {
        case ADMIN_FORGOT_PASSWORD_REQUEST:
            return { loading: true, forgotPswrd: {} }
        case ADMIN_FORGOT_PASSWORD_SUCCESS:
            return { loading: false, success: true, forgotPswrd: action.payload }
        case ADMIN_FORGOT_PASSWORD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function adminLoginReducer(state = { adminLogin: {} }, action) {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
            return { loading: true, adminLogin: {} }
        case ADMIN_LOGIN_SUCCESS:
            return { loading: false, success: true, adminLogin: action.payload }
        case ADMIN_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function adminSignupReducer(state = { adminSignup: {} }, action) {
    switch (action.type) {
        case ADMIN_SIGNUP_REQUEST:
            return { loading: true, adminSignup: {} }
        case ADMIN_SIGNUP_SUCCESS:
            return { loading: false, success: true, adminSignup: action.payload }
        case ADMIN_SIGNUP_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function adminUpdateReducer(state = { adminUpdate: {} }, action) {
    switch (action.type) {
        case ADMIN_UPDATE_REQUEST:
            return { loading: true, adminUpdate: {} }
        case ADMIN_UPDATE_SUCCESS:
            return { loading: false, success: true, adminUpdate: action.payload }
        case ADMIN_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function adminDeleteReducer(state = { adminDelete: {} }, action) {
    switch (action.type) {
        case ADMIN_DELETE_REQUEST:
            return { loading: true, adminDelete: {} }
        case ADMIN_DELETE_SUCCESS:
            return { loading: false, success: true, adminDelete: action.payload }
        case ADMIN_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export {
    adminListReducer, adminListByIdReducer, adminForgotPswrdReducer,
    adminLoginReducer, adminSignupReducer, adminUpdateReducer, adminDeleteReducer
};