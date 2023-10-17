import React, { useContext } from 'react'
import {categories} from './../utilis/constants'
import { YoutubeContex } from '../context/youtubeContext'

const SideBar = () => {
  const {selectedCategory,setSelectedCategory}= useContext(YoutubeContex);
 
  return (
    <nav className='flex flex-col p-1 md:p-4'>
      {categories.map((item, index)=>(
        <div key={index} >
            <div onClick={()=>setSelectedCategory(item)} 
            className = {` ${  // seçili kategoriye arka plan verme
              item.name === selectedCategory.name && 'bg-[#2d2d2d]'
              } flex items-center gap-2 py-4 px-1 md:px-2 text-sm md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]`}>
                {item.icon}
                <span>{item.name}</span>
            </div>
            {/* divider değeri true ise  */}
            {item.divider && <hr/>}
        </div>

      ))}
    </nav>
  )
}

export default SideBar
