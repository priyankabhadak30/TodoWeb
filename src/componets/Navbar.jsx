// import { useContext, useState } from 'react'
// import { FaSquareCheck } from "react-icons/fa6";
// import { BsCloudSunFill } from "react-icons/bs";
// import { FaCloudMoon } from "react-icons/fa6";
// import { NavLink } from 'react-router-dom';
// import { todocontext } from '../context/Dataprovider';


// function Navbar() {
//   const {togglemode,mode}=useContext(todocontext)
//   return (
//     <div className='navbar'>
//       <div className='logo'>
//         <a href='' className='l1'>TODO</a>
//         <span><FaSquareCheck className='icon' /></span>
//       </div>
//       <div>
//         <ul>
//           <NavLink to={'/'}  className={({ isActive }) => isActive ? 'link-active active' : 'link-active'}aria-current="page">Home
//              {({ isActive }) => isActive && <hr className='line1' />}</NavLink>

//           <NavLink to={'/about'}  className='link-active'>About</NavLink>
//           <NavLink to={'/alltodos'}  className='link-active'>All Todos</NavLink>
//         </ul>

//       </div>
//       <div>
//         <span className='dark-mode-icon'>{mode==='dark'?(<FaCloudMoon onClick={togglemode} />) :(<BsCloudSunFill  onClick={togglemode} className='' />)}</span>

//         <button className='btn-red'>Logout</button>
//       </div>

//     </div>
//   )
// }

// export default Navbar

import { useContext, useState } from 'react';
import { FaSquareCheck, FaCloudMoon } from "react-icons/fa6";
import { BsCloudSunFill } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
import { todocontext } from '../context/Dataprovider';
import Model from './Model';
import { toast } from 'react-toastify';

function Navbar() {
  const { togglemode, mode } = useContext(todocontext);
  const navigate = useNavigate();
  const [model,setmodel]=useState(false);

  const handleLogout = () => {
    localStorage.removeItem("login");
    setmodel(false);
   toast.success('logout successfully')
    navigate('/login');
  };

const openmodel=()=>{
  setmodel(true)
}

  return (
    <>
   {model && <Model />}
      <div className='navbar'>
        <div className='logo'>
          <a href='' className='l1'>TODO</a>
          <span><FaSquareCheck className='icon' /></span>
        </div>

        <div>
          <ul>
            <NavLink to='/' className={({ isActive }) => isActive ? 'link-active active' : 'link-active'}>
              Home
            </NavLink>
            <NavLink to='/about' className='link-active'>About</NavLink>
            <NavLink to='/alltodos' className='link-active'>All Todos</NavLink>
          </ul>
        </div>

        <div>
          <span className='dark-mode-icon'>
            {mode === 'dark' ? (
              <FaCloudMoon onClick={togglemode} className='icon1' />
            ) : (
              <BsCloudSunFill onClick={togglemode} className='icon1' />
            )}
          </span>

          <button className='btn-red' onClick={openmodel}>Logout</button>
          {model && (<Model onclose={()=>setmodel(false) } onlogout={handleLogout }/>)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
