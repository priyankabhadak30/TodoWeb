import {useContext, useState} from 'react'
import Navbar from '../Navbar'
import { todocontext } from '../../context/Dataprovider';


function About() {
  const {togglemode,mode}=useContext(todocontext)
    return (
        <>
            {/* <Navbar  /> */}
           <div className={`home-dark ${mode === 'light' ? 'Form-box-dark' : ''}`}>
                <div className='content'>
                    <div className='main-title'>About ToDo <hr className='line'></hr></div>
                  
                    <div className='desc'>A to-do list is a list of items that <span className='text-red'>need to be completed</span>.
                        The items on the list can range from simple activities like replying to an email, to more complex tasks like
                        creating project briefs.</div>
                    <div className='desc'>The items on a to-do list are usually <span className='text-red'>action-oriented</span>,
                        such as “Schedule a meet with the R&D team” or “Call back customer X.” Some lists include more abstract goals,
                        such as “improve your time management skills” or “learn how to use a new software program.”</div>
                </div>
            </div>



        </>
    )
}

export default About
