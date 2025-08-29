
import { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { todocontext } from '../../context/Dataprovider';

function Alltodos() {
  const { togglemode, mode } = useContext(todocontext);
  const [apidata, setapidata] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the todos based on the search query
  const filteredItems = apidata.filter(item =>
    item.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  async function fetchdata() {
    try {
      const response = await fetch('  ');
      const res = await response.json();
      setapidata(res.todos);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className='services'>
        <div className={`home-dark ${mode === 'light' ? 'Form-box-dark' : ''}`}>
          <div className='content1'>
            <div className='main-title'>
              List of ToDos
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <hr className='line' />
            </div>
            <div className='container'>
              {filteredItems.map((item) => (
                <div
                  className={`${mode === 'dark' ? 'card-dark' : 'card-light'}`}
                  key={item.id}
                >
                  <div className='todo-title'>{item?.todo}</div>
                  <div
                    className={`${item?.completed ? 'chip complet' : 'chip pending'}`}>
                    {item?.completed ? 'Complete' : 'Pending'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alltodos
