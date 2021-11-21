import Axios from "axios";
import baseURL from "../config";
import {
    CUSTOMIZE_PACKAGES_DELETE_FAIL,CUSTOMIZE_PACKAGES_DELETE_REQUEST,CUSTOMIZE_PACKAGES_DELETE_SUCCESS,
    CUSTOMIZE_PACKAGES_LIST_BYID_FAIL, CUSTOMIZE_PACKAGES_LIST_BYID_REQUEST, CUSTOMIZE_PACKAGES_LIST_BYID_SUCCESS,
    CUSTOMIZE_PACKAGES_LIST_FAIL, CUSTOMIZE_PACKAGES_LIST_REQUEST, CUSTOMIZE_PACKAGES_LIST_SUCCESS,
    CUSTOMIZE_PACKAGES_ADD_FAIL, CUSTOMIZE_PACKAGES_ADD_REQUEST, CUSTOMIZE_PACKAGES_ADD_SUCCESS, 
    CUSTOMIZE_PACKAGES_UPDATE_STATUS_FAIL, CUSTOMIZE_PACKAGES_UPDATE_STATUS_REQUEST, CUSTOMIZE_PACKAGES_UPDATE_STATUS_SUCCESS
} from "../constant/customize_packages";

const listCustomizePackageAction = () => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMIZE_PACKAGES_LIST_REQUEST })
        const { data } = await Axios.get(`${baseURL}/customize`)
        dispatch({ type: CUSTOMIZE_PACKAGES_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMIZE_PACKAGES_LIST_FAIL, payload: error.message })
    }
}

const listByIdCustomizePackageAction = (customize_id) => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMIZE_PACKAGES_LIST_BYID_REQUEST, payload: customize_id })
        const { data } = await Axios.get(`${baseURL}/customize/${customize_id}`)
        dispatch({ type: CUSTOMIZE_PACKAGES_LIST_BYID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMIZE_PACKAGES_LIST_BYID_FAIL, payload: error.message })
    }
}

const customizePackageAddDataAction = (country, country_location, hotel1, hotel2,activity1, activity2, numbe_of_poeple, start_date, end_date, number_of_nights) => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMIZE_PACKAGES_ADD_REQUEST, payload: { country, country_location, hotel1, hotel2,activity1, activity2, numbe_of_poeple, start_date, end_date, number_of_nights } })
        const { data } = await Axios.post(`${baseURL}/customize`, { country, country_location, hotel1, hotel2,activity1, activity2, numbe_of_poeple, start_date, end_date, number_of_nights })
        dispatch({ type: CUSTOMIZE_PACKAGES_ADD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMIZE_PACKAGES_ADD_FAIL, payload: error.message })
    }
}

const customizePackageUpdateStatusAction = (cp_code, status) => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMIZE_PACKAGES_UPDATE_STATUS_REQUEST, payload: { cp_code, status } })
        const { data } = await Axios.put(`${baseURL}/customize/status`, { cp_code, status})
        dispatch({ type: CUSTOMIZE_PACKAGES_UPDATE_STATUS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMIZE_PACKAGES_UPDATE_STATUS_FAIL, payload: error.message })
    }
}

const customizePackageDeleteAction = (customize_id) => async (dispatch) => {
    try {
        dispatch({ type: CUSTOMIZE_PACKAGES_DELETE_REQUEST, payload: customize_id })
        const { data } = await Axios.delete(`${baseURL}/customize/${customize_id}`)
        dispatch({ type: CUSTOMIZE_PACKAGES_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CUSTOMIZE_PACKAGES_DELETE_FAIL, payload: error.message })
    }
}

export {
    listCustomizePackageAction, listByIdCustomizePackageAction, 
    customizePackageAddDataAction, customizePackageUpdateStatusAction, customizePackageDeleteAction
};