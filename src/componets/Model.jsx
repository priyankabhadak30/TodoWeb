import React from 'react'
import { createPortal } from 'react-dom'

function Model({onclose,onlogout}) {
    return (
        <>
            {createPortal(<><div className='model-containerbox'>
                <div className='model-whitebox'>
                    <div><p className='p1'>Are you sure you want to logout?</p></div>
                    <div className='btn-display'><button className='cancle' onClick={onclose}>Cancle</button>
                        <button className='logout' onClick={onlogout}>Logout</button>
                        </div>

                </div>
            </div></>, document.getElementById('model'))}
        </>
    )
}

export default Model
