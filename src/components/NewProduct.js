import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import newproductData from '../fackData/nweproductData'
const NewProduct = () => {
    const [nproduct, setNproduct] = useState([])
    useEffect(()=>{
        setNproduct(newproductData)
    },[])
  return (
    <>
      <section className='surface'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="surface_img">
                       <img src={nproduct.img} alt=""  className='w-100'/>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="surface_text">
                        <h4>{nproduct.title}</h4>
                        <h2>{nproduct.name}</h2>
                        <p>{nproduct.describe}</p>
                        <div className="launch_counter">
                        <h3>{nproduct.headding}</h3>
                        <div className="counter_box">
                            <div className="counter_items">
                            <p id="demo1"></p>
                            <span>Days</span>
                            </div>
                            <div className="counter_items">
                            <p id="demo2"></p>
                            <span>Hours</span>
                            </div>
                            <div className="counter_items">
                            <p id="demo3"></p>
                            <span>Mins</span>
                            </div>
                            <div className="counter_items">
                            <p id="demo4"></p>
                            <span>Sec</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default NewProduct
