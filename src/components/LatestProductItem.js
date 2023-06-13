import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Col, Card, Button, Row} from 'react-bootstrap'
import { add } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
const LatestProductItem = ({item}) => {
    const dispatch = useDispatch()
    const {name, price, img, rating, brand} = item
    const handleCart = (pd)=>{
        dispatch(add(pd))
    }
  return (
    <>
     <Col lg={3} className='mt-4'>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
        <Row>
            <Col lg={6}>
              <ReactStars
                count={5}
                value={rating}
                size={20}
                activeColor="#ffd700"
                isHalf={true}
                edit = {false}
             />
            </Col>
            <Col lg={6} className='text-end'>
              <h6>{brand}</h6>
            </Col>
          </Row>
          <Card.Text>{name} </Card.Text>
          <Card.Title>Tk: {price}</Card.Title>
        </Card.Body>
        <Card.Footer className='text-center button'>
         <Button className='addcart' onClick={()=>handleCart(item)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
      </Col> 
    </>
  )
}

export default LatestProductItem
