import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../config/Header'

function User() {
    const {state} = useLocation()
    // const {value} = state.value
  return (
    <div>
        <Header />
        {

            JSON.stringify(state)
        }
    </div>
  )
}

export default User