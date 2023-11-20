import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function suspanceUser() {
    const num = [1,1,1,1]
  return (
    <>
    {
        num.map(data => 
            <div className="user-body">
                <div className="user-img">
                <Skeleton  width="150" height="150" style={{borderRadius:"50%"}} Skeleton/>
                </div>
                <div className="user-details">
                    <Skeleton count={5}></Skeleton>
                </div>
            </div>
        )
    }
    </>
  )
}
