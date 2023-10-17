import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineSearch, AiFillBell, AiFillVideoCamera} from 'react-icons/ai'

const Header = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const query= e.target[0].value; 
    //kullanıcıyı arama  sonuçları sayfasına yönlendirme 
    navigate(`/results?search_query=${query}`)

  }
  return (
    <header className='flex justify-between items-center p-4'>
      <Link className='flex items-center gap-4' to={'/'}>
        <img className='w-[50px]' src="/youtube-logo.png" alt="" />
        <h1 className='text-2xl font-bold hidden md:block'>YouTube</h1>
      </Link>

      <form onSubmit={handleSubmit} className='flex justify-between items-center border border-gray-400 rounded-[20px] overflow-hidden'>
        <input className='outline-none  py-1 px-3 bg-[#201f20]' type="search" />
        <button className='border-l px-2'>
          <AiOutlineSearch/>
        </button>
      </form>

      <div className='flex gap-3 text-xl cursor-pointer'>
      <AiFillBell/>
      <AiFillVideoCamera/>
      </div>
    </header>
  )
}

export default Header
