import Axios from "axios";
import baseURL from "../config";
import {
    PAYMENT_LIST_BYID_FAIL, PAYMENT_LIST_BYID_REQUEST, PAYMENT_LIST_BYID_SUCCESS,
    PAYMENT_LIST_FAIL, PAYMENT_LIST_REQUEST, PAYMENT_LIST_SUCCESS,
    PAYMENT_ADD_FAIL, PAYMENT_ADD_REQUEST, PAYMENT_ADD_SUCCESS, 
} from "../constant/payment";

const paymentlistAction = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_REQUEST })
        const { data } = await Axios.get(`${baseURL}/payment`)
        dispatch({ type: PAYMENT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PAYMENT_LIST_FAIL, payload: error.message })
    }
}

const paymentlistByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_BYID_REQUEST, payload: id })
        const { data } = await Axios.get(`${baseURL}/payment/${id}`)
        dispatch({ type: PAYMENT_LIST_BYID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PAYMENT_LIST_BYID_FAIL, payload: error.message })
    }
}

const paymentAddDataAction = (Payment_id, cardType, cardNo, CVV, expDate, paymentDate, amountPaid) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_ADD_REQUEST, payload: { Payment_id, cardType, cardNo, CVV, expDate, paymentDate, amountPaid } })
        const { data } = await Axios.post(`${baseURL}/payment`, { Payment_id, cardType, cardNo, CVV, expDate, paymentDate, amountPaid })
        dispatch({ type: PAYMENT_ADD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PAYMENT_ADD_FAIL, payload: error.message })
    }
}

export {
    paymentlistAction, paymentlistByIdAction, 
    paymentAddDataAction
};