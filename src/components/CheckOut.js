import React from 'react'
import {subBanner} from '../fackData/subBanner'
import { Col, Container, Row, Form, FloatingLabel } from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux'
import { clear } from '../redux/cartSlice'; 
const CheckOut = () => {
    const dispatch = useDispatch()
    const {total} = useSelector(state => state.cart)
    let shipping = 0;
    if(total === 0){
        shipping = 0;
    }
    else if(total <500){
        shipping = 60;
    }
    else if(total >500){
        shipping = 50;
    }
    
  return (
    <>
     <div className=" text-center" style={{background:`linear-gradient(rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596)), url(${subBanner.img}) no-repeat center / cover`}}>
      <h3 className='bann-text'><strong>Check Out</strong></h3>
     </div>
     <Container>
        <Row>
            <Col lg={9}>
                <Form>
                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="password"/>
                    <Form.Control type="password" placeholder="confrom password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Phone number" />
                </Form.Group>
                <Form.Select className='mb-3' aria-label="Default select example">
                    <option> select City</option>
                    <option value="1">Dhaka</option>
                    <option value="2">Sylthe</option>
                    <option value="3">chattogram</option>
                    <option value="4">Ragshahi</option>
                </Form.Select>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '250px', }}
                    />
                </FloatingLabel>
                </Form>
            </Col>
            <Col lg={3}>
            <div className="card mb-4 mt-5">
                <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>{(total).toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>{shipping}</span>
                    </li>
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                        <strong>Total amount</strong>
                        </div>
                        <span><strong>{(total + shipping).toFixed(2)}</strong></span>
                    </li>
                    </ul>
                    <button className='order-button' onClick={()=>dispatch(clear())}>place order</button>
                  </div>
                </div>
            </Col>
        </Row>
     </Container>
    </>
  )
}

export default CheckOut
