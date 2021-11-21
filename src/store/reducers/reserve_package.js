import {
    RESERVE_PACKAGES_DELETE_FAIL,RESERVE_PACKAGES_DELETE_REQUEST,RESERVE_PACKAGES_DELETE_SUCCESS,
    RESERVE_PACKAGES_LIST_BYID_FAIL, RESERVE_PACKAGES_LIST_BYID_REQUEST, RESERVE_PACKAGES_LIST_BYID_SUCCESS,
    RESERVE_PACKAGES_LIST_FAIL, RESERVE_PACKAGES_LIST_REQUEST, RESERVE_PACKAGES_LIST_SUCCESS,
} from "../constant/reserve_package";

function reservePackagesListReducer(state = { reservePackagesList: [] }, action) {
    switch (action.type) {
        case RESERVE_PACKAGES_LIST_REQUEST:
            return { loading: true, reservePackagesList: [] }
        case RESERVE_PACKAGES_LIST_SUCCESS:
            return { loading: false, reservePackagesList: action.payload }
        case RESERVE_PACKAGES_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function reservePackagesListByIdReducer(state = { reservePackagesListById: [] }, action) {
    switch (action.type) {
        case RESERVE_PACKAGES_LIST_BYID_REQUEST:
            return { loading: true, reservePackagesListById: [] }
        case RESERVE_PACKAGES_LIST_BYID_SUCCESS:
            return { loading: false, reservePackagesListById: action.payload }
        case RESERVE_PACKAGES_LIST_BYID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

function reservePackagesDeleteReducer(state = { reservePackagesDelete: {} }, action) {
    switch (action.type) {
        case RESERVE_PACKAGES_DELETE_REQUEST:
            return { loading: true, reservePackagesDelete: {} }
        case RESERVE_PACKAGES_DELETE_SUCCESS:
            return { loading: false, success: true, reservePackagesDelete: action.payload }
        case RESERVE_PACKAGES_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export {
    reservePackagesListReducer, reservePackagesListByIdReducer, reservePackagesDeleteReducer
};