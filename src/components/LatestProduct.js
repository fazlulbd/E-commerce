import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {productData} from '../fackData/productData'
import LatestProductItem from './LatestProductItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LatestProduct = () => {
  const latest = productData.slice(16, 21)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Container>
         <div className="latest-head text-center">
         <h3>Latest Products</h3>
        </div>
        {/* ==================================================================== */}
        <Row>
          <Slider {...settings}>
            {
                latest.map(item =>(
                  <LatestProductItem
                    key={item.id}
                    item = {item}
                  />
                ))
            }
           </Slider>
        </Row>

      </Container>
    </>
  )
}

export default LatestProduct
