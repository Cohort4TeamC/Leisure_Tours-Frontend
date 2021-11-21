import {
    CUSTOMER_DELETE_FAIL,CUSTOMER_DELETE_REQUEST,CUSTOMER_DELETE_SUCCESS,
    CUSTOMER_FORGOT_PASSWORD_FAIL, CUSTOMER_FORGOT_PASSWORD_REQUEST, CUSTOMER_FORGOT_PASSWORD_SUCCESS,
    CUSTOMER_LIST_BYID_FAIL, CUSTOMER_LIST_BYID_REQUEST, CUSTOMER_LIST_BYID_SUCCESS,
    CUSTOMER_LIST_FAIL, CUSTOMER_LIST_REQUEST, CUSTOMER_LIST_SUCCESS,
    CUSTOMER_LOGIN_FAIL, CUSTOMER_LOGIN_REQUEST, CUSTOMER_LOGIN_SUCCESS, 
    CUSTOMER_SIGNUP_FAIL, CUSTOMER_SIGNUP_REQUEST, CUSTOMER_SIGNUP_SUCCESS, 
    CUSTOMER_UPDATE_FAIL, CUSTOMER_UPDATE_REQUEST, CUSTOMER_UPDATE_SUCCESS
} from "../constant/customer";

function customerListReducer(state = { customerList: [] }, action) {
    switch (action.type) {
        case CUSTOMER_LIST_REQUEST:
            return { loading: true, customerList: [] }
        case CUSTOMER_LIST_SUCCESS:
            return { loading: false, customerList: action.payload }
        case CUSTOMER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function customerListByIdReducer(state = { customerListById: [] }, action) {
    switch (action.type) {
        case CUSTOMER_LIST_BYID_REQUEST:
            return { loading: true, customerListById: [] }
        case CUSTOMER_LIST_BYID_SUCCESS:
            return { loading: false, customerListById: action.payload }
        case CUSTOMER_LIST_BYID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function customerForgotPswrdReducer(state = { forgotPswrd: {} }, action) {
    switch (action.type) {
        case CUSTOMER_FORGOT_PASSWORD_REQUEST:
            return { loading: true, forgotPswrd: {} }
        case CUSTOMER_FORGOT_PASSWORD_SUCCESS:
            return { loading: false, success: true, forgotPswrd: action.payload }
        case CUSTOMER_FORGOT_PASSWORD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function customerLoginReducer(state = { customerLogin: {} }, action) {
    switch (action.type) {
        case CUSTOMER_LOGIN_REQUEST:
            return { loading: true, customerLogin: {} }
        case CUSTOMER_LOGIN_SUCCESS:
            return { loading: false, success: true, customerLogin: action.payload }
        case CUSTOMER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function customerSignupReducer(state = { customerSignup: {} }, action) {
    switch (action.type) {
        case CUSTOMER_SIGNUP_REQUEST:
            return { loading: true, customerSignup: {} }
        case CUSTOMER_SIGNUP_SUCCESS:
            return { loading: false, success: true, customerSignup: action.payload }
        case CUSTOMER_SIGNUP_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function customerUpdateReducer(state = { customerUpdate: {} }, action) {
    switch (action.type) {
        case CUSTOMER_UPDATE_REQUEST:
            return { loading: true, customerUpdate: {} }
        case CUSTOMER_UPDATE_SUCCESS:
            return { loading: false, success: true, customerUpdate: action.payload }
        case CUSTOMER_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function customerDeleteReducer(state = { customerDelete: {} }, action) {
    switch (action.type) {
        case CUSTOMER_DELETE_REQUEST:
            return { loading: true, customerDelete: {} }
        case CUSTOMER_DELETE_SUCCESS:
            return { loading: false, success: true, customerDelete: action.payload }
        case CUSTOMER_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export {
    customerListReducer, customerListByIdReducer, customerForgotPswrdReducer,
    customerLoginReducer, customerSignupReducer, customerUpdateReducer, customerDeleteReducer
};