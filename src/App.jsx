import { useState } from 'react'
import './App.css'
import Categories from './Categories'
import MenuItems from './MenuItems'
import menu from './data'

function App() {

  const [menuData, setMenuData] = useState(menu)
  // console.log(menuData)
  // console.log(menu)

  function filteredItems(category) {
    if(category === 'all') {
      setMenuData(menu)
      return 
    }
    const newItems = menu.filter((item) => {
      return item.category === category 
    })
    setMenuData(newItems)
  }

  

  return (
    <main className='container'>
      <h1 className='text-center mb-3'>Our Menu</h1>
      <section>
        <Categories filteredItems={filteredItems} menuData={menuData} />
        <MenuItems menuData={menuData} />
      </section>
    </main>
  )
}

export default App
