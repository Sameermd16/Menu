import { useState } from 'react'
import './App.css'
import Category from './Category'
import MenuItems from './MenuItems'
import menu from './data'

function App() {

  const [menuData, setMenuData] = useState(menu)
  // console.log(menuData)

  return (
    <main>
      <h1>Our Menu</h1>
      <section>
        <Category />
        <MenuItems menuData={menuData} />
      </section>
    </main>
  )
}

export default App
