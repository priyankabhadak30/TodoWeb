import React, { useState } from 'react';
import './Register.css';
import {useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const [regdata, setregdata] = useState({
        name: '',
        password: '',
    });

    const [error, setError] = useState('');
    const nav = useNavigate();

    const handlechange = (e) => {
        const { name, value } = e.target;
        setregdata(prev => ({ ...prev, [name]: value }));

        // Clear the error message for this field
        setError('');
    };



    const handlesubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("userlist")) || [];
        if(user.name === regdata.name || user.password === regdata.password){
          toast.success('Login successfully')
            localStorage.setItem("login",JSON.stringify(regdata));
            nav('/');
        }

     
    };

    return (
        <div className="register-bg-dark">
            <div className="register-dark">
                <h1 className='main'>Login</h1>

                <form onSubmit={handlesubmit} >
                    <div>
                        <label htmlFor="name" className='label'>Username:</label>
                        <input
                            type='text'
                            name='name'
                            className='mBottom'
                       
                        />
                    
                    </div>
                    <div>
                        <label htmlFor="password" className='label'>Password:</label>
                        <input
                            type='password'
                            name='password'
                            className='mBottom'
                           
                        />
                     
                    </div>

                    <button  className='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login


