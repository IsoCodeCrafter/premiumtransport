import React, { useState } from 'react'
import millify from 'millify';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({video,design}) => {
  const [isHover,setIsHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div 
         onClick={()=>navigate(`/watch?v=${video.videoId}`)}
          onMouseEnter={()=>setIsHover(true)}
          onMouseLeave={()=> setIsHover(false)}
          className={`cursor-pointer ${design}`}
          >
        {/* resim kısmı */}
        <div> 
            {/* video içerisindeki resmin url sini alasıya kadar beklemesi için ? işareti koyduk */}
            <img 
            className='rounded-lg w-full object-contain' 
            src={isHover && video.richThumbnail ?  // imleç üzerine geldi ise ve videonun önyüklemesi var ise onu gösterir
              video.richThumbnail[0]?.url : 
              video?.thumbnail[0]?.url} />  
        </div>
        {/* alt kısım */}
        <div className='flex gap-4 mt-5'>
          <img  style={{display:design ? 'none' : ''}}
           className='w-14 h-14 rounded-full' src={video.channelThumbnail[0]?.url} alt="" />
          <div>
            <h4 className='font-bold'>{video?.title}</h4>
            <p>
              {video?.channelTitle}
            </p>
            <div className='flex'>
              <p>{millify(video.viewCount)} görüntülenme</p>
              <p>{video.publishedTimeText}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VideoCard