import React from 'react'
import { Button, Col, Container, Row, Form } from 'react-bootstrap'
import logo from '../fackData/logoData'
import { AiOutlineTwitter} from 'react-icons/ai';
import { MdOutlineLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BiPhone} from 'react-icons/bi';
import { CiGlobe,} from 'react-icons/ci';
import { FaFacebookF, FaPinterestP, FaLinkedinIn, FaBehance } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
       <section className='contact'>
        <Container>
          <Row>
            <Col lg={3}>
            <div className="contact_items">
              <div className="contact_logo mb-5">
                <img src={logo.logo} alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
              <p className="mt-4"> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            </Col>
            <Col lg={3}>
             <div className="contact_items">
                <h5>Contact US</h5>
                <div className="contact_address">
                  <p><MdOutlineLocationOn/> <span>1234, Parkstreet Avenue, NewYork</span></p>
                  <p><BiPhone/> <span>+123 456 78900, +009 876 54321</span></p>
                  <p><MdOutlineEmail/> <span>info@e-buy.com, e-buy@info.com</span></p>
                  <p><CiGlobe/> <span> www.e-buy.com, www.infobuy.com</span></p>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div className="contact_items">
                <h5>My Account</h5>
                <div className="contact_link">
                  <p>My Account</p>
                  <p>Wishlist</p>
                  <p>Shopping Cart</p>
                  <p>Compare</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
            <div className="contact_items">
            <h5>Sign Up For Newsletter</h5>
            <Form.Group className="mb-3 d-flex" controlId="formGroupEmail">
              <Form.Control className='input-box' type="email" placeholder="Enter email" />
              <Button className="sub-btn" type="submit">submit</Button>
            </Form.Group>
            <div className="follow_link">
              <h5>Follow me on</h5>
              <ul>
                <li><FaFacebookF/></li>
                <li><AiOutlineTwitter/></li>
                <li><FaPinterestP/></li>
                <li><FaLinkedinIn/></li>
                <li><FaBehance/></li>
              </ul>
            </div>
          </div>
            </Col>
          </Row>
        </Container>
       </section>
    </>
  )
}

export default Footer
