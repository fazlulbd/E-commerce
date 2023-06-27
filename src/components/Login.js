import React, { useState } from 'react'
import { subBanner } from '../fackData/subBanner'
import { Col, Container, Row, Form, Button, Spinner, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { getAuth, signInWithEmailAndPassword,  signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const [emailerror, setEmailerror] = useState('')
  const [passworderror, setPassworderror] = useState('')
  const [showpassword, setShowpassword] = useState(false)
  const [firebaseerror, setFirebaseerror] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoaging] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [forgotpassword, setForgotpassword] = useState('')
  const handelEmail =(e)=>{
    setEmail(e.target.value)
    setEmailerror('')
  }
  const handelPassword =(e)=>{
    setPassword(e.target.value)
    setPassworderror('')
  }
  const handelshowpassword = ()=>{
    setShowpassword(!showpassword)
  }
  const handleResetemail = (e)=>{
    setForgotpassword(e.target.value)
  }

  const handelSubmit = (e)=>{
    e.preventDefault()
    
    if(!email){
      setEmailerror("! Enter your email")
    }
    if(!password){
      setPassworderror("! Enter a password")
    }
    if(email && password){
      setLoaging(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user) 
        setLoaging(false)
        setSuccess('Registration Successfull. Please varify your email ')
        setTimeout(()=>{
          console.log("hi")
          navigate("/")
        },2000)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        if(errorCode.includes('auth/wrong-password')){
          setFirebaseerror("Password not match")
          
        }
        if(errorCode.includes('auth/user-not-found')){
          setFirebaseerror("Email not match")
          
        }
        setLoaging(false)
      });
    }
  }
  const handelGooglelogin = ()=>{
    signInWithPopup(auth, provider).then(()=>{
      navigate("/")
    })
  }
  const handleForgotPassword = ()=>{
    sendPasswordResetEmail(auth, forgotpassword)
  .then(() => {
    // Password reset email sent!
    setForgotpassword("Please check your email")
    setTimeout(()=>{
      setShow(false)
    },2000)
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
  });

  }
  return (
    <>
      <div className="text-center" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596)), url(${subBanner.img}) no-repeat center / cover` }}>
        <h3 className='bann-text'><strong>Login From</strong></h3>
      </div>
      <Container>
        <Row className='d-flex justify-content-center align-items-center mt-5'>
          <Col lg={6}>
            <div className='login-item'>
                <div className="google text-center mb-4">
                    <h3 onClick={handelGooglelogin}><FcGoogle/><span>Login with Google</span></h3>
                </div>
                {
                    success &&
                    <p className='my-4 success'>{success}</p>
                  }
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" onChange={handelEmail} />
                  {
                    emailerror &&
                    <p className='errormessage'>{emailerror}</p>
                  }
                </Form.Group>
                <Form.Group className="mb-3 password" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type={showpassword? "text" : 'password'} onChange={handelPassword} />
                  
                  {
                    showpassword?
                    <h5 onClick={handelshowpassword}> <AiOutlineEye/></h5>
                    :
                    <h5 onClick={handelshowpassword}> <AiOutlineEyeInvisible/></h5>
                  }

                  {
                    passworderror &&
                    <p className='errormessage'>{passworderror}</p>
                  }
                </Form.Group>
                
                
                {
                  loading ?
                  <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                  :
                  <Button variant="success" className='px-5' type="submit" onClick={handelSubmit} >
                    Sign up
                  </Button>
                }
                {
                    firebaseerror &&
                    <p className='my-4 font-numito font-semibold font-sm text-red-600'>{firebaseerror}</p>
                  }
                <hr className='my-4'/>
                <Form.Text className="text-center mb-3">
                  Don't have an account ? <Link to="/registration"  className="login-link"  >Sign Up</Link>
                </Form.Text>
                <div className="my-3 text-center forgotpassword">
                  <Form.Text onClick={handleShow}>
                    Forgot Password?
                  </Form.Text>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className='px-4'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" onChange={handleResetemail} placeholder="Enter email" className='py-3'/>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleForgotPassword}>
            Change Password
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Login

