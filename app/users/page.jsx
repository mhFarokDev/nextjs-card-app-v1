"use client"
import { getAllUserData } from '@/libs/GetAllusers'
import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, fetchAllUser } from './userAPI'
import { selectUsers } from './userSlice'
import Swal from 'sweetalert2'
import suspanceUser from './components/suspanceUser'
import Image from 'next/image'
import UsersLists from './components/UsersLists'
import "./user.css"

export default function Users() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAllUser())
    }, [dispatch])

    const {users} = useSelector(selectUsers)

    // contact form management
    const [input, setInput] = useState({
        name : "",
        email: "",
        call : "",
        photo : "",
        gender : ""
    })

    // handle inputs fields
    const handleInputs = (e) =>{
        
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
        
    }

    const HandleFormSubmit = (e) =>{
        e.preventDefault()
        const addRes = dispatch(createUser(input))
        if (addRes) {
            Swal.fire({
                title: 'Success!',
                text: 'User added successful.',
                icon: 'success',
                confirmButtonText: 'Cool'
              })

              setInput({
                name : "",
                email: "",
                call : "",
                photo : "",
                gender : ""
            })
        }
        
    }

  return (
    <div className='container'>

        <div className="contact-card">
            <div className="card-title">
                <h1>Add new user</h1>
            </div>
            <div className="card-body">
                <form action="" onSubmit={HandleFormSubmit}>
                    <input type="text" name="name" placeholder='name' value={input.name} onChange={handleInputs} required/>
                    <input type="text" name="email" placeholder='E-mail' value={input.email} onChange={handleInputs} required/>
                    <input type="text" name="call" placeholder='Phone' value={input.call} onChange={handleInputs}/>
                    <input type="text" name="photo" placeholder='photo' value={input.photo} onChange={handleInputs}/>
                    <p><code>Select your Gender :</code></p>
                    <input type="radio" name="gender" value="Male"  onChange={handleInputs}/>Male
                    <input type="radio" name="gender" value="Female"  onChange={handleInputs}/>Female
                    <button>Add user</button>
                </form>
            </div>
        </div>


        <div className="users-list">
            <Suspense fallback={<suspanceUser/>}>
                <UsersLists users={users}/>
            </Suspense>
            
        </div>
    </div>
  )
}
