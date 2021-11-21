import React from 'react';
import './card.css'
import { connect } from 'react-redux'
import {getProducts} from '../store/actions/index'
import { Container,Card,ListGroup, Row,Col,Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Customcard=(props)=> {
      useEffect(() => {

   console.log(props.packageCurrent) 
  }, []);


    const PackageData={
        Duration:props.duration,
        Schedule:props.schedule,
        Activity:props.activity,
        Price:props.price,
        Name:props.name,
        Code:props.code
    }
    
    return (
        <div>
         <Container className="card-package card-book-tour">

<Card className="card-container">
<Card.Img variant="top" className="card-image" src={props.image} />
<ListGroup variant="flush">
<ListGroup.Item className="pkg-include">{props.code} </ListGroup.Item>
<ListGroup.Item className="price-package tour-price">{props.price} <span><Button className="book-package"> <Link to="/details" onClick={()=>props.addPackage(PackageData)}> Details </Link> </Button></span></ListGroup.Item>

</ListGroup>
</Card>
</Container>

        </div>
    );
    
}
const mapStateToProps = (state) => {
    return {
        packageCurrent: state.currentPackage
    }
}


const mapDispatchToProps = (dispatch) => ({
    addPackage: (ProductData) => dispatch(getProducts(ProductData))
})


export default connect(mapStateToProps, mapDispatchToProps)(Customcard);