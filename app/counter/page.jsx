"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreement, increement, selectCount } from './counterSlice'

import "./counter.css"

 
export default function Counter() {
    const {count} = useSelector(selectCount)
    const despatch = useDispatch()
  return (
    <div className='container'>
        <div className="counter-body">
            <h1>{count}</h1>
            <hr />
            <button onClick={() => despatch(decreement())}>--</button>
            <button onClick={() => despatch(increement())}>++</button>
        </div>
    </div>
  )
}
