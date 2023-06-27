import React from 'react'
import {productData} from "../fackData/productData"
import {subBanner} from '../fackData/subBanner'
import { useParams } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { add } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import ReactStars from "react-rating-stars-component";
const SingleProduct = () => {
    const dispatch = useDispatch()
    const {pid} = useParams()
    const product = productData.find(product => product.id === parseInt(pid))
    console.log(product)
    const handleCart = (pd)=>{
      dispatch(add(pd))
  }
  return (
    <>
     <div className=" text-center" style={{background:`linear-gradient(rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.596)), url(${subBanner.img}) no-repeat center / cover`}}>
      <h3 className='bann-text'><strong>Product</strong></h3>
     </div>
      <Container>
        <Row>
          <Col lg={5}>
            <img src={product.img} alt=""  className='w-100'/>
          </Col>
          <Col lg={5}>
            <div className="single-item">
              <h2><strong>{product.name}</strong></h2>
              <h5>Brand: {product.brand}</h5>
              <div className=''>
              <ReactStars
                count={5}
                value={product.rating}
                size={20}
                activeColor="#f0c14b"
                isHalf={true}
                edit = {false}
             />
              </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illo vel sunt molestias repellendus facere adipisci repellat veritatis quod, enim commodi neque at, suscipit, nostrum corrupti quisquam maxime. Totam ullam doloremque sequi cupiditate eaque eum, voluptatem modi aspernatur ducimus vel? Eum, id soluta numquam doloremque doloribus dolor dignissimos at laborum.</p>
              <hr className="my-4" />
              <div className="">
                <h5>price: {product.price}Tk</h5>
                <Button  className='addcart' onClick={()=>handleCart(product)}>Add To Cart</Button>
              </div>
            </div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </>
  )
}

export default SingleProduct
