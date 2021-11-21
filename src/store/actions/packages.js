import Axios from "axios";
import baseURL from "../config";
import {
    PACKAGES_DELETE_FAIL,PACKAGES_DELETE_REQUEST,PACKAGES_DELETE_SUCCESS,
    PACKAGES_LIST_BYID_FAIL, PACKAGES_LIST_BYID_REQUEST, PACKAGES_LIST_BYID_SUCCESS,
    PACKAGES_LIST_FAIL, PACKAGES_LIST_REQUEST, PACKAGES_LIST_SUCCESS,
    PACKAGES_ADD_FAIL, PACKAGES_ADD_REQUEST, PACKAGES_ADD_SUCCESS, 
    PACKAGES_UPDATE_FAIL, PACKAGES_UPDATE_REQUEST, PACKAGES_UPDATE_SUCCESS
} from "../constant/packages";

const packagelistAction = () => async (dispatch) => {
    try {
        dispatch({ type: PACKAGES_LIST_REQUEST })
        const { data } = await Axios.get(`${baseURL}/package`)
        dispatch({ type: PACKAGES_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PACKAGES_LIST_FAIL, payload: error.message })
    }
}

const packagelistByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PACKAGES_LIST_BYID_REQUEST, payload: id })
        const { data } = await Axios.get(`${baseURL}/package/${id}`)
        dispatch({ type: PACKAGES_LIST_BYID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PACKAGES_LIST_BYID_FAIL, payload: error.message })
    }
}

const packageAddDataAction = (package_code, package_name, country, country_area1, number_of_nights, weekly_schedule, start_date, end_date, hotel1, hotel2, activity1, activity2,  description, price_per_person) => async (dispatch) => {
    try {
        dispatch({ type: PACKAGES_ADD_REQUEST, payload: { package_code, package_name, country, country_area1, number_of_nights, weekly_schedule, start_date, end_date, hotel1, hotel2, activity1, activity2,  description, price_per_person } })
        const { data } = await Axios.post(`${baseURL}/package`, { package_code, package_name, country, country_area1, number_of_nights, weekly_schedule, start_date, end_date, hotel1, hotel2, activity1, activity2,  description, price_per_person })
        dispatch({ type: PACKAGES_ADD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PACKAGES_ADD_FAIL, payload: error.message })
    }
}

const packageUpdateAction = (package_code, package_name, country, country_area1, number_of_nights, weekly_schedule, start_date, end_date, hotel1, hotel2, activity1, activity2,  description, price_per_person) => async (dispatch) => {
    try {
        dispatch({ type: PACKAGES_UPDATE_REQUEST, payload: { package_code, package_name, country, country_area1, number_of_nights, weekly_schedule, start_date, end_date, hotel1, hotel2, activity1, activity2,  description, price_per_person } })
        const { data } = await Axios.put(`${baseURL}/package`, { package_code, package_name, country, country_area1, number_of_nights, weekly_schedule, start_date, end_date, hotel1, hotel2, activity1, activity2,  description, price_per_person})
        dispatch({ type: PACKAGES_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PACKAGES_UPDATE_FAIL, payload: error.message })
    }
}

const packageDeleteAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PACKAGES_DELETE_REQUEST, payload: id })
        const { data } = await Axios.delete(`${baseURL}/package/${id}`)
        dispatch({ type: PACKAGES_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PACKAGES_DELETE_FAIL, payload: error.message })
    }
}

export {
    packagelistAction, packagelistByIdAction, 
    packageAddDataAction, packageUpdateAction, packageDeleteAction
};