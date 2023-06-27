import React from 'react'
import {subBanner} from '../fackData/subBanner'
import {Form, Button, Container, Row, Col, FloatingLabel } from 'react-bootstrap'
import { MdLocationOn, MdPhone, MdOutlineMailOutline } from 'react-icons/md';
import {FiGlobe } from 'react-icons/fi';
const Contact = () => {
  return (
    <>
      <div className=" text-center" style={{background:`linear-gradient(rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596)), url(${subBanner.img}) no-repeat center / cover`}}>
      <h3 className='bann-text'><strong>Contact us</strong></h3>
     </div>
      <Container>
        <Row className='mt-5'> 
          <Col lg={8}>
            <h4>Send us a Message</h4>
            <Form>
              <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Phone number" />
              </Form.Group>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '150px', }}
                    />
                </FloatingLabel>
              <Button className='mt-4 px-5'  variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={4}>
          <h4>Contact Us</h4>
          <div className=" mt-4 contact-icon">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua Ut enim.</p>
            <p><span><MdLocationOn/></span> 1234, Parkstreet Avenue, NewYork</p>
            <p><span><MdPhone/></span> +123 456 78900, +009 876 54321</p>
            <p><span><MdOutlineMailOutline/></span> info@e-buy.com, e-buy@info.com</p>
            <p><span><FiGlobe/></span> www.e-buy.com, www.infobuy.com</p>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
