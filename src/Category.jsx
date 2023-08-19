import React from 'react'
import menu from './data'


export default function Category({menuData}) {
    console.log(menuData)
    
    const categories = menuData.map((item) => {
        return (
            item.category
        )
    })

    return (
        <section>
            <p>{categories}</p>
        </section>
    )
}