import {
    INQUIRY_ADD_FAIL, INQUIRY_ADD_REQUEST, INQUIRY_ADD_SUCCESS,
} from "../constant/inquiry";

function inquiryAddReducer(state = { inquiryAdd: {} }, action) {
    switch (action.type) {
        case INQUIRY_ADD_REQUEST:
            return { loading: true, inquiryAdd: {} }
        case INQUIRY_ADD_SUCCESS:
            return { loading: false, success: true, inquiryAdd: action.payload }
        case INQUIRY_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export { inquiryAddReducer };