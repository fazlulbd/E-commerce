import React from 'react'
import { increment, decrement, remove } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const {name, price, img, quantity} = cartItem;
    const handleIncrement = (pd)=>{
        dispatch(increment(pd))
    }
    const handleDecrement = (pd)=>{
        dispatch(decrement(pd))
    }
  return (
    <>
     <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            <img src={img} className="w-100" alt="images" />
            </div>
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <p><strong>{name}</strong></p>
            <p>Price: <strong>{price}</strong></p>
            <p>Size: M</p>
            <button className="btn btn-danger btn-sm me-1 mb-2 px-5" onClick={()=>dispatch(remove(cartItem))}>Remove</button>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="d-flex mb-4" style={{width: "180px", marginLeft: "50px"}}>
            <button className=" px-3 me-2" onClick={()=>handleDecrement(cartItem)}> - </button>
            <div className="form-outline">
                <input id="form1" name="quantity" value={quantity} type="number" className="form-control"  onChange={() => null}/>
            </div>
            <button className=" px-3 ms-2" onClick={()=>handleIncrement(cartItem)}> + </button>
            </div>
            <p className="text-start text-md-center"><strong>{(price * quantity).toFixed(2)}</strong></p>
        </div>
        <hr className="my-4" />
     </div>
        
    </>
  )
}

export default CartItem
