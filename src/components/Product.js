import React from 'react'
import productData from '../fackData/productData'
import {Container, Row, Col} from 'react-bootstrap';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
const Product = () => {
  return (
    <>
       <Container>
            <Row className='product'>
                <Col className='product-item' lg={6}>
                    Top Product
                </Col>
                <Col lg={6} className='product-button'>
                    <ul>
                        <li><Link  className="link">All</Link> </li>
                        <li><Link  className="link">Boys Collection</Link> </li>
                        <li><Link  className="link">Girl Collection</Link> </li>
                        <li><Link  className="link">Shose Collection</Link> </li>
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
