import Axios from "axios";
import baseURL from "../config";
import {
    RESERVE_PACKAGES_DELETE_FAIL,RESERVE_PACKAGES_DELETE_REQUEST,RESERVE_PACKAGES_DELETE_SUCCESS,
    RESERVE_PACKAGES_LIST_BYID_FAIL, RESERVE_PACKAGES_LIST_BYID_REQUEST, RESERVE_PACKAGES_LIST_BYID_SUCCESS,
    RESERVE_PACKAGES_LIST_FAIL, RESERVE_PACKAGES_LIST_REQUEST, RESERVE_PACKAGES_LIST_SUCCESS,
} from "../constant/reserve_package";

const reservePackagelistAction = () => async (dispatch) => {
    try {
        dispatch({ type: RESERVE_PACKAGES_LIST_REQUEST })
        const { data } = await Axios.get(`${baseURL}/reserve_package`)
        dispatch({ type: RESERVE_PACKAGES_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: RESERVE_PACKAGES_LIST_FAIL, payload: error.message })
    }
}

const reservePackagelistByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: RESERVE_PACKAGES_LIST_BYID_REQUEST, payload: id })
        const { data } = await Axios.get(`${baseURL}/reserve_package/${id}`)
        dispatch({ type: RESERVE_PACKAGES_LIST_BYID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: RESERVE_PACKAGES_LIST_BYID_FAIL, payload: error.message })
    }
}

const reservePackageDeleteAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: RESERVE_PACKAGES_DELETE_REQUEST, payload: id })
        const { data } = await Axios.delete(`${baseURL}/reserve_package/${id}`)
        dispatch({ type: RESERVE_PACKAGES_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: RESERVE_PACKAGES_DELETE_FAIL, payload: error.message })
    }
}

export {
    reservePackagelistAction, reservePackagelistByIdAction, reservePackageDeleteAction
};