import React from 'react'
import productData from '../fackData/productData'
import {Container, Row, Col} from 'react-bootstrap';
import ProductItem from './ProductItem';
const Product = () => {
  return (
    <>
       <Container>
            <Row className='product'>
                <Col className='product-item' lg={6}>
                    Top Product
                </Col>
                <Col lg={6}>
                    <ul>
                        <li><a href="">All</a></li>
                        <li><a href="">Boys Collection</a></li>
                        <li><a href="">Girl Collection</a></li>
                        <li><a href="">Shose Collection</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                {
                    productData.map(item =>(
                        <ProductItem
                            key={item.id}
                            item = {item}
                        />
                    ))
                }
            </Row>
        </Container>
    </>
  )
}

export default Product
