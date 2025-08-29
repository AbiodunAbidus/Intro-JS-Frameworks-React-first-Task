import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <h1 className='Title'>My first Profile Card</h1>
    <ProfileCard name={'C. Ronaldo'} 
  img={"https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"} 
  description={"This is Ronaldo in Al-nassar Jersey "}/>
  <ProfileCard name={'Messi'} 
  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4RsCfoBYE4gan-EGNAvN3uRY0x43GwyK5A&s"} 
  description={"This is Messi in Argentina Jersey "}/>
  <ProfileCard name={'Okocha'} 
  img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEq2-SPUzG27W0FKrgA0329bwIWhpadTIIaQ&s"} 
  description={"This is Okocha In Nigeria Jersey "}/>
  <ProfileCard name={'Kanu'} 
  img={"https://www.sporting-heroes.net/content/thumbnails/00159/15808-zoom.jpg"}
   description={"This is Kanu in Arsenal Jersey "}/>

     
    </>
  )
}

export default App
