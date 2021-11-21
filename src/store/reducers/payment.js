import {
    PAYMENT_LIST_BYID_FAIL, PAYMENT_LIST_BYID_REQUEST, PAYMENT_LIST_BYID_SUCCESS,
    PAYMENT_LIST_FAIL, PAYMENT_LIST_REQUEST, PAYMENT_LIST_SUCCESS,
    PAYMENT_ADD_FAIL, PAYMENT_ADD_REQUEST, PAYMENT_ADD_SUCCESS, 
} from "../constant/payment";

function paymentListReducer(state = { paymentList: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_REQUEST:
            return { loading: true, paymentList: [] }
        case PAYMENT_LIST_SUCCESS:
            return { loading: false, paymentList: action.payload }
        case PAYMENT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function paymentListByIdReducer(state = { paymentListById: [] }, action) {
    switch (action.type) {
        case PAYMENT_LIST_BYID_REQUEST:
            return { loading: true, paymentListById: [] }
        case PAYMENT_LIST_BYID_SUCCESS:
            return { loading: false, paymentListById: action.payload }
        case PAYMENT_LIST_BYID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function paymentAddReducer(state = { paymentAdd: {} }, action) {
    switch (action.type) {
        case PAYMENT_ADD_REQUEST:
            return { loading: true, paymentAdd: {} }
        case PAYMENT_ADD_SUCCESS:
            return { loading: false, success: true, paymentAdd: action.payload }
        case PAYMENT_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export {
    paymentListReducer, paymentListByIdReducer,
    paymentAddReducer,
};