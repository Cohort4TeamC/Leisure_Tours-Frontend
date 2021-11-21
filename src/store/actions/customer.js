import Axios from "axios";
import baseURL from "../config";
import {
    CUSTOMER_DELETE_FAIL,CUSTOMER_DELETE_REQUEST,CUSTOMER_DELETE_SUCCESS,
    CUSTOMER_FORGOT_PASSWORD_FAIL, CUSTOMER_FORGOT_PASSWORD_REQUEST, CUSTOMER_FORGOT_PASSWORD_SUCCESS,
    CUSTOMER_LIST_BYID_FAIL, CUSTOMER_LIST_BYID_REQUEST, CUSTOMER_LIST_BYID_SUCCESS,
    CUSTOMER_LIST_FAIL, CUSTOMER_LIST_REQUEST, CUSTOMER_LIST_SUCCESS,
    CUSTOMER_LOGIN_FAIL, CUSTOMER_LOGIN_REQUEST, CUSTOMER_LOGIN_SUCCESS,
    CUSTOMER_SIGNUP_FAIL, CUSTOMER_SIGNUP_REQUEST, CUSTOMER_SIGNUP_SUCCESS, 
    CUSTOMER_UPDATE_FAIL, CUSTOMER_UPDATE_REQUEST, CUSTOMER_UPDATE_SUCCESS
} from "../constant/customer";

const listCustomerAction = () => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMER_LIST_REQUEST })
        const { data } = await Axios.get(`${baseURL}/customer`)
        dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMER_LIST_FAIL, payload: error.message })
    }
}

const listByIdCustomerAction = (customer_id) => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMER_LIST_BYID_REQUEST, payload: customer_id })
        const { data } = await Axios.get(`${baseURL}/customer/${customer_id}`)
        dispatch({ type: CUSTOMER_LIST_BYID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMER_LIST_BYID_FAIL, payload: error.message })
    }
}

const customerForgotPswrdAction = (email) => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMER_FORGOT_PASSWORD_REQUEST, payload: email })
        const { data } = await Axios.post(`${baseURL}/customer/forgotpassword`, { email })
        dispatch({ type: CUSTOMER_FORGOT_PASSWORD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMER_FORGOT_PASSWORD_FAIL, payload: error.message })
    }
}

const customerLoginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMER_LOGIN_REQUEST, payload: { email, password } })
        const { data } = await Axios.post(`${baseURL}/customer/userlogin`, { email, password })
        dispatch({ type: CUSTOMER_LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMER_LOGIN_FAIL, payload: error.message })
    }
}

const customerSignupAction = (fname, lname, phone, email, address, srilankan, country, nationality, passport, password) => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMER_SIGNUP_REQUEST, payload: { fname, lname, phone, email, address, srilankan, country, nationality, passport, password } })
        const { data } = await Axios.post(`${baseURL}/customer`, { fname, lname, phone, email, address, srilankan, country, nationality, passport, password })
        dispatch({ type: CUSTOMER_SIGNUP_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMER_SIGNUP_FAIL, payload: error.message })
    }
}

const customerUpdateAction = (fname, lname, phone, email, address, srilankan, country, nationality, passport, password) => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMER_UPDATE_REQUEST, payload: { fname, lname, phone, email, address, srilankan, country, nationality, passport, password } })
        const { data } = await Axios.put(`${baseURL}/customer`, { fname, lname, phone, email, address, srilankan, country, nationality, passport, password })
        dispatch({ type: CUSTOMER_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMER_UPDATE_FAIL, payload: error.message })
    }
}

const customerDeleteAction = (customer_id) => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMER_DELETE_REQUEST, payload: customer_id })
        const { data } = await Axios.delete(`${baseURL}/customer/${customer_id}`)
        dispatch({ type: CUSTOMER_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMER_DELETE_FAIL, payload: error.message })
    }
}

export {
    listCustomerAction, listByIdCustomerAction, customerForgotPswrdAction,
    customerLoginAction, customerSignupAction,customerUpdateAction, customerDeleteAction
};