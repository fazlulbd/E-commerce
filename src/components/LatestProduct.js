import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import latest from '../fackData/latestproductData'
import LatestProductItem from './LatestProductItem'

const LatestProduct = () => {
  return (
    <>
      <Container>
         <div className="latest-head text-center">
         <h3>Latest Products</h3>
        </div>
        {/* ==================================================================== */}
        <Row>
            {
                latest.map(item =>(
                  <LatestProductItem
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

export default LatestProduct
