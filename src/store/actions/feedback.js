import Axios from "axios";
import baseURL from "../config";
import {
    FEEDBACK_LIST_FAIL, FEEDBACK_LIST_REQUEST, FEEDBACK_LIST_SUCCESS,
    FEEDBACK_ADD_FAIL, FEEDBACK_ADD_REQUEST, FEEDBACK_ADD_SUCCESS, 
} from "../constant/feedback";

const feedbacklistAction = () => async (dispatch) => {
    try {
        dispatch({ type: FEEDBACK_LIST_REQUEST })
        const { data } = await Axios.get(`${baseURL}/feedback`)
        dispatch({ type: FEEDBACK_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FEEDBACK_LIST_FAIL, payload: error.message })
    }
}

const feedbackAddDataAction = (feedback_id, duration, weekly_schedule, activites, package_price, description, feedback) => async (dispatch) => {
    try {
        dispatch({ type: FEEDBACK_ADD_REQUEST, payload: { feedback_id, duration, weekly_schedule, activites, package_price, description, feedback } })
        const { data } = await Axios.post(`${baseURL}/feedback`, { feedback_id, duration, weekly_schedule, activites, package_price, description, feedback })
        dispatch({ type: FEEDBACK_ADD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FEEDBACK_ADD_FAIL, payload: error.message })
    }
}

export {
    feedbacklistAction, feedbackAddDataAction
};