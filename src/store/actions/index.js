import { React, useState } from 'react'
export const getProducts = (currentPackage) => {
    return (dispatch) => {

        dispatch({
            type: "ADDCURRENTPACKAGE",
            payload: currentPackage

        })
    }
}