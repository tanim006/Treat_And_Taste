import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Full from './Components/FullRecipe/Full'
import Recipe from './Components/Recipe/Recipe'
import Time from './Components/Timepart/Time'
import Second from './Components/SecondHead/Second'

function App() {
 const [cook,setCook] = useState([])

 const handleCook = cooking =>{
 const newCook = [...cook,cooking]
 setCook(newCook)
 }



  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <Second></Second>
      <div className='md:flex'>
      <div className=' w-4/5  border-4'>
      <Full handleCook={handleCook}></Full>
      </div>    
      <Time cook ={cook} ></Time>  
      </div>



    </>
  )
}

export default App
