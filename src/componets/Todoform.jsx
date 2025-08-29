import { useEffect, useState } from 'react';
import { FaSquareCheck } from 'react-icons/fa6';
import { toast } from 'react-toastify';

export default function Todoform({ submithandler, mode, editData, editId }) {
    const [tododata, settododata] = useState({ title: '' });
    const [titleError, setTitleError] = useState('');

    const handlechange = (e) => {
        const { name, value } = e.target;   
        settododata((prev) => { return { ...prev, [name]: value } })
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        setTitleError('');

        if (tododata.title === '') {
            setTitleError('Title is required');
            return;
        }
        submithandler(tododata);
       
    toast.success(editId ? 'Data updated successfully' : 'Data added successfully');
       settododata({ title: '' });
        };
    useEffect(() => {
        if (editData) {
            settododata(editData);
        }
    }, [editData]);
    return (

        <div className={`todo-form ${mode === 'light' ? 'Form-box-dark' : ''}`}>
            <div className='title'>
                My Todos <span><FaSquareCheck className='icon' /></span>
            </div>
            <form onSubmit={handlesubmit}>
                <input
                    type='text'
                    placeholder='Enter your task...'
                    id='title'
                    name='title'
                    value={tododata.title}
                    onChange={handlechange}
                />
                {titleError && <p className="errorMessage">{titleError}</p>}
                <button type='submit' className='add-btn'>{editId ? 'Update' : 'Add'}</button>
            </form>
        </div>


    );
}

