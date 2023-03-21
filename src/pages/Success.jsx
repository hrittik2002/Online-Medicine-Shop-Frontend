import React from 'react'
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'
const Success = () => {
  const location = useLocation()
  console.log(location.state)
  const data = location.state.stripeDate;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state)
  console.log(currentUser)
 // const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div>Successfull</div>
  )
}

export default Success