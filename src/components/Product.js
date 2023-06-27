import React from 'react'
import {productData} from '../fackData/productData'
import {Container, Row, Col} from 'react-bootstrap';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
const Product = () => {
    const product = productData.slice(0, 16)
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
                        <li><Link  className="link">Men</Link> </li>
                        <li><Link  className="link">Woman</Link> </li>
                        <li><Link  className="link">Children</Link> </li>
                        <li><Link  className="link">accessories</Link> </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                {
                    product.map(item =>(
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
