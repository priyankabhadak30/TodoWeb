import { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar';
import Todoform from '../Todoform';
import Tododata from '../Tododata';
import { todocontext } from '../../context/Dataprovider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Home() {
const {mode,appdata,setAppdata}=useContext(todocontext);
const nav=useNavigate()
    const [editId, setEditId] = useState("");
    const [editData, setEditData] = useState(null);
   
    const submithandler = (tododata) => {
        if (editId) {
            setAppdata((prev) => prev.map((item) => item.id === editId ? { ...item, title: tododata.title } : item));
            setEditId("");
            setEditData(null);
        }
        else {
            setAppdata((pre) => { return [...pre, { id: Math.random(), title: tododata.title, completed: false }] })
        }
    }
    const deletehandler = (id) => {
        const deletedata = appdata.filter((item) => id !== item.id)
        setAppdata(deletedata)
          toast.success('Data delete Successfully')
    }

    const edithandler = (id) => {
        const itemToEdit = appdata.find((item) => item.id === id);
        setEditId(id);
        setEditData({ title: itemToEdit.title });
    }
    const toggleComplete = (id) => {
        setAppdata((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };
    const detailspage=(id)=>{
        nav(`/details/${id}`)
    }
    return (
        <>
            {/* <Register/> */}
            {/* <Navbar /> */}
            <div className={`${mode === 'light' ? 'Form-box-dark' : ''}`}>

                <div className={`home-dark ${mode === 'light' ? 'Form-box-dark' : ''}`}>
                    <div className='todo-dark'>
                        <Todoform submithandler={submithandler} mode={mode} editData={editData} editId={editId} />
                        {/* {appdata.length === 0 ? 
                         <div className='notdata'>No Notes Created Yet</div> : 
                         (appdata.map((item) => (<Tododata key={item.id} title={item.title}  deletehandler={() => deletehandler(item.id)} />)))} 
                   */}
                        <div className={`card ${mode === 'light' ? 'Form-box-dark' : ''}`}>
                            {appdata.length === 0 ? (
                                <div className='notdata'>No Notes Created Yet</div>
                            ) : (
                                appdata.map((item) => (
                                    <Tododata key={item.id} title={item.title} completed={item.completed} deletehandler={() => deletehandler(item.id)} edithandler={() => edithandler(item.id)} toggleComplete={() => toggleComplete(item.id)} detailspage={()=>detailspage(item.id)}/>
                                ))

                            )}
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
