"use client"
import { getAllUserData } from '@/libs/GetAllusers'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUser } from './userAPI'
import { selectUsers } from './userSlice'

export default function Users() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAllUser())
    }, [dispatch])

    const {users} = useSelector(selectUsers)
    console.log(users);
  return (
    <div>Users</div>
  )
}
