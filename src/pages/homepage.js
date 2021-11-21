import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import Title from '../components/titleComponent';
import SearchAvailablity from '../components/availability';
import Gallery from '../components/gallery';
import PackageCard from '../components/packageCard';
import {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { adminForgotPswrdAction, listAdminAction, listByIdAdminAction } from '../store/actions/admin';

const HomePage = () => {
  const dispatch = useDispatch()

  const adminListData = useSelector(state => state.adminListData);
  const { adminList, loading, error } = adminListData;

  useEffect(() => {
    dispatch(adminForgotPswrdAction("jhajk"))
}, [])

  return (
    <>
      <div className="">
        <div className="nav-comp">
          <NavbarComp />

        </div>

        <Title />
        <SearchAvailablity />
        <Gallery />
        <PackageCard   />
        <FooterComp />
      </div>
    </>
  );
}

export default HomePage;
