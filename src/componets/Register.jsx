
// import React, { useState } from 'react';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//     const [regdata, setregdata] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmpassword: ''
//     });

//     const [errors, setErrors] = useState({});
//     const nav = useNavigate();

//     const handlechange = (e) => {
//         const { name, value } = e.target;
//         setregdata(prev => ({ ...prev, [name]: value }));
//     };

//     const validate = () => {
//         let newErrors = {};
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!regdata.name.trim()) newErrors.name = 'Name is required';
//         if (!regdata.email.trim()) {
//             newErrors.email = 'Email is required';
//         } else if (!emailRegex.test(regdata.email)) {
//             newErrors.email = 'Invalid email format';
//         }

//         if (!regdata.password) {
//             newErrors.password = 'Password is required';
//         } else if (regdata.password.length < 6) {
//             newErrors.password = 'Password must be at least 6 characters';
//         }

//         if (!regdata.confirmpassword) {
//             newErrors.confirmpassword = 'Please confirm your password';
//         } else if (regdata.password !== regdata.confirmpassword) {
//             newErrors.confirmpassword = 'Passwords do not match';
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handlesubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             localStorage.setItem('userlist', JSON.stringify(regdata));
//             nav('/login');
//         }
//     };

//     return (
//         <div className="register-bg-dark">
//             <div className="register-dark">
//                 <h1 className='main'>Register</h1>
//                 <p className='pera'>Let's create new account</p>
//                 <form onSubmit={handlesubmit} noValidate>
//                     <div>
//                         <label htmlFor="name" className='label'>UserName:</label>
//                         <input
//                             type='text'
//                             name='name'
//                             className='mBottom'
//                             value={regdata.name}
//                             onChange={handlechange}
//                         />
//                         {errors.name && <span className="error">{errors.name}</span>}
//                     </div>
//                     <div>
//                         <label htmlFor="email" className='label'>Email Address:</label>
//                         <input
//                             type='text'
//                             name='email'
//                             className='mBottom'
//                             value={regdata.email}
//                             onChange={handlechange}
//                         />
//                         {errors.email && <span className="error">{errors.email}</span>}
//                     </div>
//                     <div>
//                         <label htmlFor="password" className='label'>Password:</label>
//                         <input
//                             type='password'
//                             name='password'
//                             className='mBottom'
//                             value={regdata.password}
//                             onChange={handlechange}
//                         />
//                         {errors.password && <span className="error">{errors.password}</span>}
//                     </div>
//                     <div>
//                         <label htmlFor="confirmpassword" className='label'>Confirm Password:</label>
//                         <input
//                             type='password'
//                             name='confirmpassword'
//                             className='mBottom'
//                             value={regdata.confirmpassword}
//                             onChange={handlechange}
//                         />
//                         {errors.confirmpassword && <span className="error">{errors.confirmpassword}</span>}
//                     </div>
//                     <button type="submit" className='submit'>Register</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Register;
import React, { useState,useContext } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {

    const [regdata, setregdata] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const [errors, setErrors] = useState({});
    const nav = useNavigate();

    const handlechange = (e) => {
        const { name, value } = e.target;
        setregdata(prev => ({ ...prev, [name]: value }));
       setErrors(prev => ({...prev ,[e.target.name]:''}));
    };

   
   

    const handlesubmit = (e) => {
        e.preventDefault();

       const { name,email,password,confirmpassword}=regdata;
       const newErrors ={};
         
       if(!name.trim()) newErrors.name = "name is required";
       if(!email.trim()) newErrors.email = "email is required";
       if(!password.trim()) newErrors.password = "password is required";
       if(!confirmpassword.trim()) newErrors.confirmpassword = "confirmpassword is required";
       if(password && confirmpassword && password !== confirmpassword){
        newErrors.confirmpassword="password do not match";
       }
       {
               if(Object.keys(newErrors).length > 0){
                setErrors(newErrors);
                return;
               }
                toast.success('registed successfully')

            localStorage.setItem('userlist', JSON.stringify(regdata));
            nav('/login');
        }
    };

    return (
        <div className="register-bg-dark">
            <div className="register-dark">
                <h1 className='main'>Register</h1>
                <p className='pera'>Let's create new account</p>
                <form onSubmit={handlesubmit}>
                    <div>
                        <label htmlFor="name" className='label'>UserName:</label>
                        <input
                            type='text'
                            name='name'
                            className='mBottom'
                            value={regdata.name}
                            onChange={handlechange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className='label'>Email Address:</label>
                        <input
                            type='text'
                            name='email'
                            className='mBottom'
                            value={regdata.email}
                            onChange={handlechange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className='label'>Password:</label>
                        <input
                            type='password'
                            name='password'
                            className='mBottom'
                            value={regdata.password}
                            onChange={handlechange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div>
                        <label htmlFor="confirmpassword" className='label'>Confirm Password:</label>
                        <input
                            type='password'
                            name='confirmpassword'
                            className='mBottom'
                            value={regdata.confirmpassword}
                            onChange={handlechange}
                        />
                        {errors.confirmpassword && <span className="error">{errors.confirmpassword}</span>}
                    </div>
                    <button type="submit" className='submit'>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register


