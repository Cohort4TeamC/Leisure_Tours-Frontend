import {
    FEEDBACK_LIST_FAIL, FEEDBACK_LIST_REQUEST, FEEDBACK_LIST_SUCCESS,
    FEEDBACK_ADD_FAIL, FEEDBACK_ADD_REQUEST, FEEDBACK_ADD_SUCCESS, 
} from "../constant/feedback";

function feedbackListReducer(state = { feedbackList: [] }, action) {
    switch (action.type) {
        case FEEDBACK_LIST_REQUEST:
            return { loading: true, feedbackList: [] }
        case FEEDBACK_LIST_SUCCESS:
            return { loading: false, feedbackList: action.payload }
        case FEEDBACK_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function feedbackAddReducer(state = { feedbackAdd: {} }, action) {
    switch (action.type) {
        case FEEDBACK_ADD_REQUEST:
            return { loading: true, feedbackAdd: {} }
        case FEEDBACK_ADD_SUCCESS:
            return { loading: false, success: true, feedbackAdd: action.payload }
        case FEEDBACK_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export {
    feedbackListReducer, feedbackAddReducer,
};