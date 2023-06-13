import React from 'react'
import bannerData from '../fackData/bannerData'
import {Carousel, Container, Row, Col } from "react-bootstrap"
import { FaShippingFast, FaMoneyBillAlt } from 'react-icons/fa';
import { CgSupport } from 'react-icons/cg';
const Banner = () => {
  return (
    <>
   <Carousel>
      {
        bannerData.map(item =>(
            <Carousel.Item interval={3000} key ={item.id}>
            <div className="bann-slider" style={{background:`linear-gradient(rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596)), url(${item.img}) no-repeat center / cover`}}>
             <Container>
             <div className="banner-text">
               <h1>{item.year}</h1>
                <h2>{item.name}</h2>
                <p>{item.descrip}</p>
                <a href="#home" className='bann-button bann-button1'>{item.button1}</a>
                <a href="#home" className='bann-button bann-button2'>{item.button2}</a>
              </div>
             </Container>
            </div>
            </Carousel.Item>
        ))
      }
    </Carousel>
     <div className="offer">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="offer_items text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                 <FaShippingFast/>
                <h4>Free Shipping</h4>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="offer_items text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                 <CgSupport/>
                <h4>Free Shipping</h4>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="offer_items text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <FaMoneyBillAlt/>
                <h4>Free Shipping</h4>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </Col>
         
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Banner
