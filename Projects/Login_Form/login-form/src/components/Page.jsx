import React from 'react'
import login from '../assets/login.jpg';
import Form from './Form';


export const Page = () => {
  return (
    <div className='page'>
        <div className='image'>
            <img src={login} alt = "login img" className='imgclass'></img>
            <div className='imagetext'>
                <h2 className='financial'>Financial Security Guaranteed</h2>
                <p className='para'>We're here to help you make the most of your money and 
                build a stable financial foundation for the future</p>
            </div>
        </div>
        <Form></Form>
    </div>
  )
}
