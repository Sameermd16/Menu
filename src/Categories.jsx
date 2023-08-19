import React, { useState } from 'react'
import menu from './data'


export default function Categories({ filteredItems }) {
    
    const allCategories = ['all', ...new Set(menu.map((item) => {
        return item.category
    }))] 
    console.log(allCategories)
    const [menuCategories, setMenuCategories] = useState(allCategories)


    return (
        <section>
            {
                menuCategories.map((item, index) => {
                    return (
                        <button className='btn btn-outline-secondary me-3' key={index}
                            onClick={() => filteredItems(item)}
                        >{item}</button>
                    )
                })
            }
        </section>
    )
}