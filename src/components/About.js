import React from 'react'
import {subBanner} from '../fackData/subBanner'
import { Col, Container, Row, Card } from 'react-bootstrap';
import about from "../fackData/aboutData"
import counter from '../fackData/aboutCount'
import designer from '../fackData/aboutDesigner'
const About = () => {
  return (
    <>
     <div className="text-center" style={{background:`linear-gradient(rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596)), url(${subBanner.img}) no-repeat center / cover`}}>
      <h3 className='bann-text'><strong>About</strong></h3>
     </div>
     <Container>
      <Row className='mt-5 about_box'>
        <Col lg={7} md={12} sm={12}>
        <div className="about_img">
          <img src={about.img} alt=""  className='w-100'/>
        </div>
        </Col>
        <Col lg={6} md={12} sm={12} className='about_text'>
          <p>{about.describe1}</p>
          <p>{about.describe2}</p>
          <p>{about.describe3}</p>
        </Col>
      </Row>
     </Container>
     <section className='mt-5'>
     <div className="about-counter" style={{background:`linear-gradient(rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596)), url(${counter.img}) no-repeat center / cover`}}>
      <Container>
        <Row>
          <Col lg xs={6} className='about_counter_items'>
            <h2>{counter.num1}</h2>
            <h6>{counter.name1}</h6>
          </Col>
          <Col lg xs={6} className='about_counter_items'>
            <h2>{counter.num2}</h2>
            <h6>{counter.name2}</h6>
          </Col>
          <Col lg xs={4} className='about_counter_items'>
            <h2>{counter.num3}</h2>
            <h6>{counter.name3}</h6>
          </Col>
          <Col lg xs={4} className='about_counter_items'>
            <h2>{counter.num4}</h2>
            <h6>{counter.name4}</h6>
          </Col>
          <Col lg  xs={4} className='about_counter_items'>
            <h2>{counter.num5}</h2>
            <h6>{counter.name5}</h6>
          </Col>
        </Row>
      </Container>
      </div>
     </section>
     <Container>
        <div className="about-head text-center mt-5">
         <h3>Our Designer</h3>
        </div>
     <Row>
          {
            designer.map(item =>(
              <Col lg={3} sm={6} key={item.id} className='mt-5'>
                <Card className='designer_items'>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body className='designer_text'>
                    <h5>{item.name}</h5>
                    <h6>{item.titele}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
     </Container>
    </>
  )
}

export default About
