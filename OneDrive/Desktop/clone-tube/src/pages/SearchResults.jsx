import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getData } from '../utilis/helpers';
import SideBar from '../components/SideBar';
import Loading from '../components/Loading';
import VideoCard from '../components/VideoCard';
import SceletonLoading from '../components/SceletonLoading';

const SearchResults = () => {
    const [params,setParams]=useSearchParams();
    const [results,setResults] = useState()

    const query= params.get('search_query');

    useEffect(()=>{
        getData(`/search?query=${query}&type=video`)
        .then(res=> setResults(res.data.data))
    },[query])
  return (
    <div className='flex'>
      <SideBar/>
      <div className='flex flex-col items-center gap-5 p-5 overflow-auto h-screen w-full'>
        {!results ? <SceletonLoading/> :
        results.map((item, i) => {
            if(item.type!=='video') return;
            return <VideoCard key={i} video={item} design ={'maw-w-[700px] grid grid-cols-2 gap-5'}/>
        } )
        }

      </div>
    </div>
  )
}

export default SearchResults
