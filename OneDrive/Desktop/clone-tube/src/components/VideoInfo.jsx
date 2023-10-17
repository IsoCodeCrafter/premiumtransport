import React, { useEffect, useState } from 'react'
import { getData } from '../utilis/helpers'
import Loading from './Loading';
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import millify from 'millify';
import moment from 'moment/moment';
import 'moment/locale/tr';
import StringArea from './StringArea';



const VideoInfo = ({id}) => {
    const [detail,setDetail] =useState(null);
    const [channel,setChannel] =useState(null);
   
    const getInfos = async ()=> {  
        const detailResponse=await getData(`/video/info?id=${id}`)
   
        //kanal detaylarını alır
        const channelResponse = await   getData(`/channel/about?id=${detailResponse.data.channelId}`)

        setDetail(detailResponse.data)
        setChannel(channelResponse.data)
    }

    useEffect( ()=>{  
     getInfos();
    },[])

    if(!channel) return <Loading/>
  
  return (
    <div>
        <h1 className='mt-3 text-xl font-bold '>{detail.title}</h1>
      {/* Kanal Detayları */}
        <div className='flex  justify-between items-center mt-3'>
            <div className='flex items-center gap-4'>
                <img className='rounded-full w-12 h-12' src={channel.avatar[0].url}  />
                <div>
                    <h4 className='font-bold'>{channel.title}</h4>
                    <p>{channel.subscriberCountText}</p>
                </div>
                <button className='bg-white h-9 rounded-full text-black px-3 transition hover:bg-[#4d4343]'>Abone Ol</button>
            </div>
            <div className='flex items-center rounded-full py-1 px-6 text-lg bg-[#4b4a4a] cursor-pointer gap-4'>
                <div className=' mr-3 border-r-[1px] pr-3'>
                    <AiFillLike className='hover:text-green-800'/>
                </div>
                <div>
                    <AiFillDislike className='hover:text-red-800'/>
                </div>
            </div>
        </div>

        {/* Hakkında kısmı */}
      <div className='bg-[#383838] rounded p-2 mt-4 cursor-pointer hover:bg-[#535353]'>
        <div className='flex gap-4 '>
                <p>
                    {millify(detail.viewCount)}
                </p>
                <p>{moment(detail.publishDate).fromNow()}</p>
        </div>
        {/* Yazı içeriği */}
        <StringArea text={detail.description} max={200}/>
      </div>
    </div>
  )
}

export default VideoInfo