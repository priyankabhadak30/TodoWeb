import React from 'react';
import { IoIosCheckbox } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

export default function Tododata({ title, completed, deletehandler, edithandler, toggleComplete,detailspage }) {
     
    return (
        <div className='todo-list'>
            <div className="task-dark">
                <div className="task-title">
                    <p className={`title1 ${completed ? 'completed' : ''}`}>{title}</p>
                </div>
                <div className="actions">
                    <div className="complete-btn" onClick={toggleComplete}>
                        <span><IoIosCheckbox /></span>
                    </div>
                    <div className="edit-btn">
                        <span><FaEdit onClick={edithandler} /></span>
                    </div>
                    <div className="delete-btn">
                       
                        <span><MdDelete onClick={deletehandler} /></span>
                    </div>
                    <div className="more-btn">
                        <span><MdArrowForward onClick={detailspage} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
