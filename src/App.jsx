import './App.css';
export default function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-black">


      <div className="bg-white h-[450px]  rounded-lg shadow-lg w-[30%] m-auto p-8">



        <h1 className="text-3xl font-bold text-red-500">LOGIN</h1>
        <form>
          <div className='mt-14'>
            <input className='h-10 w-full p-2 rounded bg-[#f8f3f3dd] placeholder-black' placeholder='Username ' type="text"/>
          </div>
          <div className='mt-14'>
            <input className='h-10 w-full p-2 rounded bg-[#f8f3f3dd] placeholder-black' placeholder='Password' type="password"/>
          </div>
          
          <div className='justify-center flex mt-6'>
          <div className="flex justify-center items-center h-19 w-44  border-4 border-[rgba(198,184,184,0.87)] hover:border-red-500 ">
            <button className=" hover:text-red-500 font-bold py-2 px-4 rounded text-[#171616dd]">
              Go
            </button>
          </div>
          </div>
          <div className='mt-5 flex justify-center'>
            <a className='text-[#0c0c0cdd] ' href='#'>Forgot Your Password?</a>
          </div> 

        </form>
      </div>
       
    </div>
   
  )
}