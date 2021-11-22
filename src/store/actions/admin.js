import Axios from "axios";
import baseURL from "../config";
import {
    ADMIN_DELETE_FAIL,ADMIN_DELETE_REQUEST,ADMIN_DELETE_SUCCESS,
    ADMIN_FORGOT_PASSWORD_FAIL, ADMIN_FORGOT_PASSWORD_REQUEST, ADMIN_FORGOT_PASSWORD_SUCCESS,
    ADMIN_LIST_BYID_FAIL, ADMIN_LIST_BYID_REQUEST, ADMIN_LIST_BYID_SUCCESS,
    ADMIN_LIST_FAIL, ADMIN_LIST_REQUEST, ADMIN_LIST_SUCCESS,
    ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS,
    ADMIN_SIGNUP_FAIL, ADMIN_SIGNUP_REQUEST, ADMIN_SIGNUP_SUCCESS, 
    ADMIN_UPDATE_FAIL, ADMIN_UPDATE_REQUEST, ADMIN_UPDATE_SUCCESS
} from "../constant/admin";

const listAdminAction = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_LIST_REQUEST })
        const { data } = await Axios.get(`${baseURL}/admin`)
        dispatch({ type: ADMIN_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_LIST_FAIL, payload: error.message })
    }
}

const listByIdAdminAction = (admin_id) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_LIST_BYID_REQUEST, payload: admin_id })
        const { data } = await Axios.get(`${baseURL}/admin/${admin_id}`)
        dispatch({ type: ADMIN_LIST_BYID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_LIST_BYID_FAIL, payload: error.message })
    }
}

const adminForgotPswrdAction = (email) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_FORGOT_PASSWORD_REQUEST, payload: email })
        const { data } = await Axios.post(`${baseURL}/admin/forgotpassword`, { email })
        dispatch({ type: ADMIN_FORGOT_PASSWORD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_FORGOT_PASSWORD_FAIL, payload: error.message })
    }
}

const adminLoginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_LOGIN_REQUEST, payload: { email, password } })
        const { data } = await Axios.post(`${baseURL}/admin/login`, { email, password })
        dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_LOGIN_FAIL, payload: error.message })
    }
}

const adminSignupAction = (admin_id, fname, lname, email, mobile, address, admin_control, password) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_SIGNUP_REQUEST, payload: { admin_id, fname, lname, email, mobile, address, admin_control, password } })
        const { data } = await Axios.post(`${baseURL}/admin`, { admin_id, fname, lname, email, mobile, address, admin_control, password })
        dispatch({ type: ADMIN_SIGNUP_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_SIGNUP_FAIL, payload: error.message })
    }
}

const adminUpdateAction = (admin_id, fname, lname, email, mobile, address, admin_control, password) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_UPDATE_REQUEST, payload: { admin_id, fname, lname, email, mobile, address, admin_control, password } })
        const { data } = await Axios.put(`${baseURL}/admin`, { admin_id, fname, lname, email, mobile, address, admin_control, password })
        dispatch({ type: ADMIN_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_UPDATE_FAIL, payload: error.message })
    }
}

const adminDeleteAction = (admin_id) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_DELETE_REQUEST, payload: admin_id })
        const { data } = await Axios.delete(`${baseURL}/admin/${admin_id}`)
        dispatch({ type: ADMIN_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_DELETE_FAIL, payload: error.message })
    }
}

export {
    listAdminAction, listByIdAdminAction, adminForgotPswrdAction,
    adminLoginAction, adminSignupAction,adminUpdateAction, adminDeleteAction
};