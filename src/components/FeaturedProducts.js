import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import featurData from '../fackData/featurData'
import { Link } from 'react-router-dom'
const FeaturedProducts = () => {
  return (
    <>
     <Container>
        <div className="featured-head text-center">
         <h3>Featured Products</h3>
        </div>
        <Row>
        {
            featurData.map(item =>(
              <Col lg={4} key={item.id}>
             <div className="featured_items mt-3">
                <div className="featured_img">
                 <img src={item.img} alt="" />
                </div>
                <div className="featured_overley">
                <div className="featured_overley_text">
                    <h3>{item.year}</h3>
                    <h5>{item.name}</h5>
                    <Link className="btn"> {item.button1}</Link>
                </div>
                </div>
                <h6>{item.title}</h6>
             </div>
              </Col>  
            ))
        }
        </Row>
     </Container>
    </>
  )
}

export default FeaturedProducts
