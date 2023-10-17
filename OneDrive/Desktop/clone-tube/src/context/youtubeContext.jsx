import { createContext, useEffect, useState } from "react";
import { categories } from "../utilis/constants";
import { getData } from "../utilis/helpers";

//context temelini oluşturur
export const YoutubeContex = createContext();

//context te tutulan bilgileri uygulamaya aktarır

export const YoutubeProvider = ({children}) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const [videos,setVideos] = useState(null);

    useEffect(()=>{
     if(selectedCategory.type==="home" || selectedCategory.type === 'trending') {
        //eski videoları sil
        setVideos(null)
        getData(`/${selectedCategory.type}`).then(res =>{

            const filtered = res.data.data.filter(item => item.type ==='video');
            setVideos(filtered);
          
        })
     }
     if(selectedCategory.type === "category") {
        //eski stati temizle 
        setVideos(null)
        getData(`/search?query=${selectedCategory.name}`)
        .then(res=> {
            const filtered = res.data.data.filter(item => item.type ==='video');
            setVideos(filtered);
        })
     }
    },[selectedCategory])

    return (
        <YoutubeContex.Provider value={{selectedCategory,setSelectedCategory,videos}}>
            {children}
        </YoutubeContex.Provider>
    )
}