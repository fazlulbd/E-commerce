import React, { useEffect, useState } from "react";
import {Container, Navbar, Nav, Modal, Form, Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import logo from "../fackData/logoData";
import { BsCart4 } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const {quantity} = useSelector(state => state.cart)
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <>
       <div className={`${ scroll ? "main-manu" : "manu-bar" }`}>
       <Navbar expand="lg">
        <Container>
            <Navbar.Brand to='/' as={Link}> <img src={logo.logo} alt="" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link  to='/' as={Link}>Home</Nav.Link>
                <Nav.Link  to='/about' as={Link}>About</Nav.Link>
                <Nav.Link  to='/' as={Link}>Product</Nav.Link>
                <Nav.Link   to='/contact' as={Link}>Contact us</Nav.Link>
            </Nav>
            <Nav className="mamubar-icon">
                <Nav.Link  to='/' as={Link} onClick={handleShow}><BiUserCircle/></Nav.Link>
                <Nav.Link  to='/cart' as={Link}><BsCart4/><span>{quantity}</span></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container> 
        </Navbar>
       </div>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        
          <Form className="px-5 mt-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <div className="mx-5">
          <Button className="px-5" variant="success">Login</Button>
          </div>
         
          <Form.Text className="text-center mb-3">
             Don't have an account ? <Link className="login-link">Sign Up</Link>
          </Form.Text>
      
      </Modal>
    </>
  )
}

export default Header
