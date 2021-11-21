import {
    PACKAGES_DELETE_FAIL,PACKAGES_DELETE_REQUEST,PACKAGES_DELETE_SUCCESS,
    PACKAGES_LIST_BYID_FAIL, PACKAGES_LIST_BYID_REQUEST, PACKAGES_LIST_BYID_SUCCESS,
    PACKAGES_LIST_FAIL, PACKAGES_LIST_REQUEST, PACKAGES_LIST_SUCCESS,
    PACKAGES_ADD_FAIL, PACKAGES_ADD_REQUEST, PACKAGES_ADD_SUCCESS, 
    PACKAGES_UPDATE_FAIL, PACKAGES_UPDATE_REQUEST, PACKAGES_UPDATE_SUCCESS
} from "../constant/packages";

function packagesListReducer(state = { packagesList: [] }, action) {
    switch (action.type) {
        case PACKAGES_LIST_REQUEST:
            return { loading: true, packagesList: [] }
        case PACKAGES_LIST_SUCCESS:
            return { loading: false, packagesList: action.payload }
        case PACKAGES_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function packagesListByIdReducer(state = { packagesListById: [] }, action) {
    switch (action.type) {
        case PACKAGES_LIST_BYID_REQUEST:
            return { loading: true, packagesListById: [] }
        case PACKAGES_LIST_BYID_SUCCESS:
            return { loading: false, packagesListById: action.payload }
        case PACKAGES_LIST_BYID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function packagesAddReducer(state = { packagesAdd: {} }, action) {
    switch (action.type) {
        case PACKAGES_ADD_REQUEST:
            return { loading: true, packagesAdd: {} }
        case PACKAGES_ADD_SUCCESS:
            return { loading: false, success: true, packagesAdd: action.payload }
        case PACKAGES_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function packagesUpdateReducer(state = { packagesUpdate: {} }, action) {
    switch (action.type) {
        case PACKAGES_UPDATE_REQUEST:
            return { loading: true, packagesUpdate: {} }
        case PACKAGES_UPDATE_SUCCESS:
            return { loading: false, success: true, packagesUpdate: action.payload }
        case PACKAGES_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function packagesDeleteReducer(state = { packagesDelete: {} }, action) {
    switch (action.type) {
        case PACKAGES_DELETE_REQUEST:
            return { loading: true, packagesDelete: {} }
        case PACKAGES_DELETE_SUCCESS:
            return { loading: false, success: true, packagesDelete: action.payload }
        case PACKAGES_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export {
    packagesListReducer, packagesListByIdReducer,
    packagesAddReducer, packagesUpdateReducer, packagesDeleteReducer
};