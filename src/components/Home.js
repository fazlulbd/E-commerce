import React from 'react'
import Product from './Product'
import Banner from './Banner'
import FeaturedProducts from './FeaturedProducts'
import NewProduct from './NewProduct'
import LatestProduct from './LatestProduct'

const Home = () => {
  return (
    <>
      <Banner/>
      <FeaturedProducts/>
      <Product/>
      <NewProduct/>
      <LatestProduct/>

    </>
  )
}

export default Home
