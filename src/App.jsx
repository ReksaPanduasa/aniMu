import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './routes/Home'
import { ProfileContent } from './routes/ProfileContent'
import { AnimeTerbaru } from './routes/AnimeTerbaru'
import { Genre } from './routes/Genre'
import { Community } from './routes/Community'
import { Help } from './routes/Help'
import { Login } from './routes/Login'
import { Registration } from './routes/Registration'
import { SearchResult } from './routes/SearchResult'
import { CommunityDiscussion } from './routes/CommunityDiscussion'
import { useState, useEffect } from 'react'

function App() {
  const [topAnime, SetTopAnime] = useState([]);

  const getTopAnime = async ()=>{
    const res = await fetch('https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&limit=6')
    const resData = await res.json();
    SetTopAnime(resData.data);
  }

  useEffect(() => {
    getTopAnime();
    console.log('TopAnime');
  }, [])
  
  console.log(topAnime);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home top={topAnime}/>}/>
        <Route path='/profile-content' element={<ProfileContent/>}/>
        <Route path='/anime-terbaru' element={<AnimeTerbaru/>}/>
        <Route path='/genre' element={<Genre/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/search-result' element={<SearchResult/>} />
        <Route path='/community-discussion' element={<CommunityDiscussion/>}/>
      </Routes>
    </Router>  
  )
}

export default App