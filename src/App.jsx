import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUser } from './features/users';
import { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineSave } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import Header from './components/header';

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <Header />
      <div className='App flex flex-col items-center justify-center'>
        <div className='relative flex flex-col justify-center items-center w-full max-w-lg shadow-md bg-gray-100 mt-10 px-14 py-16 rounded-md'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full mb-2 p-2 rounded-sm'
            placeholder='Name'
          />
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full mb-2 p-2 rounded-sm'
            placeholder='Username'
          />
          <button
            className='bg-sky-500 w-full p-2 rounded-md'
            onClick={() => {
              dispatch(
                addUser({
                  id: userList.length > 0 ? userList[userList.length - 1].id + 1 : 0,
                  name,
                  username,
                })
              );
              setName('');
              setUsername('');
            }}>
            Add User
          </button>
          <BiHelpCircle
            className='absolute top-4 cursor-pointer'
            size={28}
            color='grey'
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={() => setShowTooltip(false)}
          />
          {showTooltip && (
            <div className='absolute top-12 bg-gray-300 p-4 rounded-md shadow-lg'>
              <p className=''>
                Enter Name or Username and click on <br />
                <AiOutlineSave size={25} className='inline-block' /> to UPDATE the user
              </p>
            </div>
          )}
        </div>
        <div className='flex flex-col justify-center items-center w-full max-w-lg shadow-md bg-gray-100 my-10 px-14 pb-16 pt-8 rounded-md'>
          <h1 className='text-2xl mb-4'>Users:</h1>
          {userList.map((user) => {
            return (
              <div className='w-full border-b-2 py-2'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h1>{user.name}</h1>
                    <h1>{user.username}</h1>
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        dispatch(updateUser({ id: user.id, name, username }));
                        setName('');
                        setUsername('');
                      }}>
                      <AiOutlineSave size={25} />
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteUser({ id: user.id }));
                        setName('');
                        setUsername('');
                      }}>
                      <RiDeleteBinLine color='red' size={25} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
