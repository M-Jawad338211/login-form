import './App.css';
import { useState } from 'react';

export default function App() {
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [changeLayout, isChangeLayout] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const FormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", {
      Username: Name,
      Password: password
    });
    setName("");
    setPassword("");
  };

  
  const Signup = (event) => {
    event.preventDefault();
    console.log("signup");
   
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="bg-white h-[450px] rounded-lg shadow-lg w-[30%] m-auto p-8">
        {changeLayout ? (
          
          <>
            <h1 className="text-3xl font-bold text-black">Signup</h1>
            <form onSubmit={Signup}>
              <div className='mt-10'>
                <input
                  className='h-10 w-full p-2 rounded border bg-[#ffffffdd] border-gray-400'
                  placeholder='Username'
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mt-10'>
                <input
                  className='h-10 w-full p-2 rounded border bg-[#ffffffdd] border-gray-400 '
                  placeholder='Create Password'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mt-10'>
                <input
                  className='h-10 w-full p-2 rounded border bg-[#ffffffdd] border-gray-400 '
                  placeholder='Confirm Password'
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className='justify-center flex mt-6'>
                <div className="flex justify-center items-center  h-19 w-44 rounded bg-blue-600 hover:bg-red-500 ">
                  <button className="hover:text-red-500 font-bold py-2 px-4 rounded text-white hover:text-black" type='submit'>
                    Signup
                  </button>
                </div>
              </div>
              <div className='mt-5 flex justify-center'>
                <h1 className='text-[#0c0c0cdd] ' >Already have an account?</h1>
                <button className='text-blue-500' onClick={() => isChangeLayout(false)}>Login</button>
              </div>
            </form>
          </>
        ) : (
          // Login Form
          <>
            <h1 className="text-3xl font-bold text-black">LOGIN</h1>
            <form onSubmit={FormSubmit}>
              <div className='mt-14'>
                <input
                  className='h-10 w-full border border-gray-400 p-2 rounded bg-[#ffffffdd] '
                  placeholder='Username'
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mt-10'>
                <input
                  className='h-10 w-full p-2 border border-gray-400 rounded bg-[#ffffffdd] '
                  placeholder='Password'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='justify-center flex mt-6'>
                <div className="flex justify-center rounded bg-blue-600 hover:bg-red-500 items-center h-19 w-44   ">
                  <button className=" text-white font-bold py-2 px-4
                   rounded hover:text-black" type='submit'>
                    Login
                  </button>
                </div>
              </div>
              <div className='mt-5 flex justify-center'>
                <h1 className='text-[#0c0c0cdd] ' >
                 Don't have an account?
                </h1>
                <button className='text-blue-500' onClick={() => isChangeLayout(true)}>Signup</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
