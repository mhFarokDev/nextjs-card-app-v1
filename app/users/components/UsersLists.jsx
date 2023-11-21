"use client"
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUsers } from '../userSlice';

export default function UsersLists() {
    // const usersHere = users
    const {users} = useSelector(selectUsers)
  return (
    <>
    {
        users.map(data => 
            <div className="user-body">
                <div className="user-img">
                <Image src={data.photo} width="200" height="200"/>
                </div>
                <div className="user-details">
                    <p>Name : {data.name}</p>
                    <p>E-mail : {data.email}</p>
                    <p>Call : {data.call}</p>
                    <p>Gender : {data.gender}</p>
                </div>
            </div>
        )
    }
    </>
  )
}
