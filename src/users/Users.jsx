import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Users.module.css'
import { Link } from 'react-router-dom';


export default function Users() {

    const [users,setUsers] = useState([]);
    const getUsers = async ()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_BURL}/users`);
        setUsers(data.users);
    }

    useEffect( ()=>{
        getUsers();
    },[users])

    const deleteUser = async (id)=>{
      await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
    }


  return (
    <>
    <div className="my-container">
        <Link className='btn btn-primary' to={'/create'}>Create User</Link>
        <h1 className='text-center my-4'>Users List</h1>
        <div className={styles.userGrid}>
        {
        users.map(user=>
          <div className={styles.userCard}>
            <h2> Name : {user.userName}</h2>
            <p> Email : {user.email}</p>
            <button className='btn btn-danger' onClick={()=>deleteUser(user._id)}>Delete</button>
            <Link className='btn btn-secondary' to={`/users/${user._id}`}>Details</Link>
          </div>
        )
      }
      </div>
    </div>
    </>
  )
}
