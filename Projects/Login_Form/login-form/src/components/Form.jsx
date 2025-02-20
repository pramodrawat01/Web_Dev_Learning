import React from 'react'
import { SingIn } from './SingIn';
import { SignUp } from './SignUp';
import { Header } from './Header';
import { Route, Routes, NavLink } from 'react-router-dom';

export default function Form() {
  return (
    <div className='form'>
        <nav>
            <div className='header'>
                <NavLink to="/">SingIn</NavLink><br></br>
                <NavLink to="/SignUp">SingUp</NavLink>
            </div>
        </nav>
        <Routes>
            <Route path='/' element={<Header/>}>
                <Route index element={<SingIn/>}/>
                <Route path='/SignUp' element={<SignUp/>}/>
            </Route>
        </Routes>
    </div>
  )
}
