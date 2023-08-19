import { useState } from 'react'
import './App.css'
import Category from './Category'
import MenuItems from './MenuItems'
import menu from './data'

function App() {

  const [menuData, setMenuData] = useState(menu)
  // console.log(menuData)
  const [categories, setCategories] = useState([])

  

  return (
    <main className='container'>
      <h1 className='text-center mb-3'>Our Menu</h1>
      <section>
        <Category menuData={menuData} />
        <MenuItems menuData={menuData} />
      </section>
    </main>
  )
}

export default App
