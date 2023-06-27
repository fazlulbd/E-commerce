import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import newproductData from '../fackData/nweproductData'
const NewProduct = () => {
    const [nproduct, setNproduct] = useState([])
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [min, setMin] = useState(0)
    const [seconds, setSeconds] = useState(0)
    
    const dateline = "December, 31, 2023"
    useEffect(()=>{
        setNproduct(newproductData)
    },[])
    const  getTime = ()=>{
      const time = Date.parse(dateline)- Date.now()
      setDays(Math.floor(time/(1000*60*60*24)))
      setHours(Math.floor(time/(1000*60*60)%24))
      setMin(Math.floor((time/(1000*60))%60))
      setSeconds(Math.floor((time/1000)%60))
    }
    useEffect(()=>{
      const interval = setInterval(()=> getTime(),1000)
      return ()=> clearInterval(interval)
    },[])
  return (
    <>
      <section className='surface'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="surface_img">
                       <img src={nproduct.img} alt=""  className='w-100'/>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="surface_text">
                        <h4>{nproduct.title}</h4>
                        <h2>{nproduct.name}</h2>
                        <p>{nproduct.describe}</p>
                        <div className="launch_counter">
                        <h3>{nproduct.headding}</h3>
                        <div className="counter_box">
                            <div className="counter_items">
                            <p id="demo1">{days<10 ? "0"+days : days}</p>
                            <span>Days</span>
                            </div>
                            <div className="counter_items">
                            <p id="demo2"> {hours<10 ? "0"+hours : hours} </p>
                            <span>Hours</span>
                            </div>
                            <div className="counter_items">
                            <p id="demo3"> {min<10 ? "0"+min : min} </p>
                            <span>Mins</span>
                            </div>
                            <div className="counter_items">
                            <p id="demo4"> {seconds<10 ? "0"+seconds : seconds} </p>
                            <span>Sec</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default NewProduct
