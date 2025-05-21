import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './CreateUser.module.css'
import { useForm } from 'react-hook-form';
import {DevTool} from '@hookform/devtools'


export default function Details() {

    const {id} = useParams();
    const {register,control,handleSubmit,setValue} = useForm();
    const navigate = useNavigate();
    const getDetails = async ()=>{

        const {data} = await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);
        setValue("userName",data.user.userName);
        setValue("email",data.user.email);
        setValue("phone",data.user.phone);        
    }
    useEffect( ()=>{
        getDetails();
    },[])

    const updateUser = async (value)=>{
        
        const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,{
            userName:value.userName
        });
        if(response.status === 200){
            navigate('/users');
        }
    }
  return (
    <>
      <div className={styles.formContainer}>
      <h2 className={styles.title}>Update User</h2>
      <form className={styles.form} onSubmit={handleSubmit(updateUser)}>
        <label className={styles.label} htmlFor="userName">User Name</label>
        <input type="text" id="userName" name="userName"
        placeholder="Enter user name" className={styles.input} {...register("userName")} required/>

        <label className={styles.label} htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter email address" 
        className={styles.input} {...register("email")} required disabled/>


        <label className={styles.label} htmlFor="phone">Phone number</label>
        <input type="text" id="phone" name="phone" placeholder="Enter phone number" 
        className={styles.input} {...register("phone")} required disabled/>

        <button type="submit" className="btn btn-primary"> Update</button>
      </form>
     </div>
    <DevTool control={control} />
    </>
  )
}
