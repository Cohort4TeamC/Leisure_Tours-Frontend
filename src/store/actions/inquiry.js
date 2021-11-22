import Axios from "axios";
import baseURL from "../config";
import {
    INQUIRY_ADD_FAIL,INQUIRY_ADD_REQUEST,INQUIRY_ADD_SUCCESS,
} from "../constant/inquiry";

const inquiryAddAction = (email, inquiry_desc) => async (dispatch) => {
    try {
        dispatch({ type: INQUIRY_ADD_REQUEST, payload: {email, inquiry_desc} })
        const { data } = await Axios.delete(`${baseURL}/inquiries`, {email, inquiry_desc})
        dispatch({ type: INQUIRY_ADD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: INQUIRY_ADD_FAIL, payload: error.message })
    }
}

export { inquiryAddAction };