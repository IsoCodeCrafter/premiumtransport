import axios from "axios"

const options = {
    params: {geo:'TR', lang:'tr'},
    headers: {
      'X-RapidAPI-Key': '28f66ef8c2mshf0f2a43acd94a34p1552fejsn50d66535fa1c',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };
  axios.defaults.baseURL= 'https://yt-api.p.rapidapi.com';
//verdiğimiz url ye istek atıp 
export const getData = async (url) => {
   try {
    const response = await axios.get(url,options);
    return response;
   }catch (err) {
    console.log('verileri çekerken hata oluştu')
   }
}