import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { adminForgotPswrdAction } from './actions/admin';
import { adminDeleteReducer, adminForgotPswrdReducer, adminListByIdReducer, adminListReducer, adminLoginReducer, adminSignupReducer, adminUpdateReducer } from './reducers/admin';
import { customerDeleteReducer, customerForgotPswrdReducer, customerListByIdReducer, customerListReducer, customerLoginReducer, customerSignupReducer, customerUpdateReducer } from './reducers/customer';
import { customizePackagesAddReducer, customizePackagesDeleteReducer, customizePackagesListByIdReducer, customizePackagesListReducer, customizePackagesUpdateReducer } from './reducers/customize_packages';
import { feedbackAddReducer, feedbackListReducer } from './reducers/feedback';
import { inquiryAddReducer } from './reducers/inquiry';
import { packagesAddReducer, packagesDeleteReducer, packagesListByIdReducer, packagesListReducer, packagesUpdateReducer } from './reducers/packages';
import { paymentAddReducer, paymentListByIdReducer, paymentListReducer } from './reducers/payment';
import { reservePackagesDeleteReducer, reservePackagesListByIdReducer, reservePackagesListReducer } from './reducers/reserve_package';

const reducer = combineReducers({
    //-------Admin
    adminListData: adminListReducer,
    adminListByIdData: adminListByIdReducer,
    adminForgotPswrd: adminForgotPswrdReducer,
    adminLogin: adminLoginReducer,
    adminSignup: adminSignupReducer,
    adminUpdate: adminUpdateReducer,
    adminDelete: adminDeleteReducer,
    //-------Customer
    customerListData: customerListReducer,
    customerListByIdData: customerListByIdReducer,
    customerForgotPswrd: customerForgotPswrdReducer,
    customerLogin: customerLoginReducer,
    customerSignup: customerSignupReducer,
    customerUpdate: customerUpdateReducer,
    customerDelete: customerDeleteReducer,
    //-------customize Packages
    customizePackagesListData: customizePackagesListReducer,
    customizePackagesListByIdData: customizePackagesListByIdReducer,
    customizePackagesAdd: customizePackagesAddReducer,
    customizePackagesUpdate: customizePackagesUpdateReducer,
    customizePackagesDelete: customizePackagesDeleteReducer,
    //-------Packages
    packagesListData: packagesListReducer,
    packagesListByIdData: packagesListByIdReducer,
    packagesAdd: packagesAddReducer,
    packagesUpdate: packagesUpdateReducer,
    packagesDelete: packagesDeleteReducer,
    //-------Payment
    paymentListData: paymentListReducer,
    paymentListByIdData: paymentListByIdReducer,
    paymentAdd: paymentAddReducer,
    //-------Feedback
    feedbackListData: feedbackListReducer,
    feedbackAdd: feedbackAddReducer,
    //-------Reserve Packages
    reservePackagesListData: reservePackagesListReducer,
    reservePackagesListByIdData: reservePackagesListByIdReducer,
    reservePackagesDelete: reservePackagesDeleteReducer,
    //-------Inquiry
    inquiryAdd: inquiryAddReducer

})
const store = createStore(reducer, applyMiddleware(thunk))

export default store;