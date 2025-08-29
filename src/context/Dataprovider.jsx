import React, { createContext, useEffect, useState } from 'react'

export const todocontext = createContext();
function Dataprovider({ children }) {
  const [mode, setmode] = useState('dark');
  const [appdata, setAppdata] = useState(JSON.parse(localStorage.getItem('todoform')) || []);
  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light')
    } else {
      setmode('dark')
    }
  }
      useEffect(() => { localStorage.setItem('todoform', JSON.stringify(appdata)) }, [appdata])

  return (
    <>
      <todocontext.Provider value={{ mode, togglemode,appdata,setAppdata }}>{children}</todocontext.Provider>
    </>
  )
}

export default Dataprovider
