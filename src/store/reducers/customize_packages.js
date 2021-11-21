import {
    CUSTOMIZE_PACKAGES_DELETE_FAIL,CUSTOMIZE_PACKAGES_DELETE_REQUEST,CUSTOMIZE_PACKAGES_DELETE_SUCCESS,
    CUSTOMIZE_PACKAGES_LIST_BYID_FAIL, CUSTOMIZE_PACKAGES_LIST_BYID_REQUEST, CUSTOMIZE_PACKAGES_LIST_BYID_SUCCESS,
    CUSTOMIZE_PACKAGES_LIST_FAIL, CUSTOMIZE_PACKAGES_LIST_REQUEST, CUSTOMIZE_PACKAGES_LIST_SUCCESS,
    CUSTOMIZE_PACKAGES_ADD_FAIL, CUSTOMIZE_PACKAGES_ADD_REQUEST, CUSTOMIZE_PACKAGES_ADD_SUCCESS, 
    CUSTOMIZE_PACKAGES_UPDATE_STATUS_FAIL, CUSTOMIZE_PACKAGES_UPDATE_STATUS_REQUEST, CUSTOMIZE_PACKAGES_UPDATE_STATUS_SUCCESS
} from "../constant/customize_packages";

function customizePackagesListReducer(state = { customizePackagesList: [] }, action) {
    switch (action.type) {
        case CUSTOMIZE_PACKAGES_LIST_REQUEST:
            return { loading: true, customizePackagesList: [] }
        case CUSTOMIZE_PACKAGES_LIST_SUCCESS:
            return { loading: false, customizePackagesList: action.payload }
        case CUSTOMIZE_PACKAGES_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function customizePackagesListByIdReducer(state = { customizePackagesListById: [] }, action) {
    switch (action.type) {
        case CUSTOMIZE_PACKAGES_LIST_BYID_REQUEST:
            return { loading: true, customizePackagesListById: [] }
        case CUSTOMIZE_PACKAGES_LIST_BYID_SUCCESS:
            return { loading: false, customizePackagesListById: action.payload }
        case CUSTOMIZE_PACKAGES_LIST_BYID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function customizePackagesAddReducer(state = { customizePackagesAdd: {} }, action) {
    switch (action.type) {
        case CUSTOMIZE_PACKAGES_ADD_REQUEST:
            return { loading: true, customizePackagesAdd: {} }
        case CUSTOMIZE_PACKAGES_ADD_SUCCESS:
            return { loading: false, success: true, customizePackagesAdd: action.payload }
        case CUSTOMIZE_PACKAGES_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function customizePackagesUpdateReducer(state = { customizePackagesUpdate: {} }, action) {
    switch (action.type) {
        case CUSTOMIZE_PACKAGES_UPDATE_STATUS_REQUEST:
            return { loading: true, customizePackagesUpdate: {} }
        case CUSTOMIZE_PACKAGES_UPDATE_STATUS_SUCCESS:
            return { loading: false, success: true, customizePackagesUpdate: action.payload }
        case CUSTOMIZE_PACKAGES_UPDATE_STATUS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function customizePackagesDeleteReducer(state = { customizePackagesDelete: {} }, action) {
    switch (action.type) {
        case CUSTOMIZE_PACKAGES_DELETE_REQUEST:
            return { loading: true, customizePackagesDelete: {} }
        case CUSTOMIZE_PACKAGES_DELETE_SUCCESS:
            return { loading: false, success: true, customizePackagesDelete: action.payload }
        case CUSTOMIZE_PACKAGES_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export {
    customizePackagesListReducer, customizePackagesListByIdReducer,
    customizePackagesAddReducer, customizePackagesUpdateReducer, customizePackagesDeleteReducer
};