import React from 'react'
import styles from './CreateUser.module.css'
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {

  const navigate = useNavigate();
  const {register,control,handleSubmit} = useForm();

  const registerUser = async(data)=>{
    
    const response = await axios.post(`${import.meta.env.VITE_BURL}/users`,data);
    if(response.status === 201){
      navigate('/users');
    }
  }

  return (
    <>
      <div className={styles.formContainer}>
      <h2 className={styles.title}>Create New User</h2>
      <form className={styles.form} onSubmit={handleSubmit(registerUser)}>
        <label className={styles.label} htmlFor="userName">User Name</label>
        <input type="text" id="userName" name="userName"
        placeholder="Enter user name" className={styles.input} {...register("userName")} required/>

        <label className={styles.label} htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter email address" 
        className={styles.input} {...register("email")} required/>

        <label className={styles.label} htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password" 
        className={styles.input} {...register("password")} required/>

        <label className={styles.label} htmlFor="phone">Phone number</label>
        <input type="text" id="phone" name="phone" placeholder="Enter phone number" 
        className={styles.input} {...register("phone")} required/>

        <button type="submit" className="btn btn-primary"> Create User </button>
      </form>
    </div>
    <DevTool control={control} />
    </>
  )
}
