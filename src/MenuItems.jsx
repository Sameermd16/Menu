import React from 'react'


export default function MenuItems({menuData}) {

    // console.log(menuData)

    return (
        <section>
            {
                menuData.map((item) => {
                    const {id, title, category, price, img, desc} = item
                    return (
                        <article key={id}>
                            <img src={img} />
                            <div>
                                <p>{title}</p>
                                <span>{price}</span>
                            </div>
                            <p>{desc}</p>
                        </article>
                    )
                })
            }
        </section>
    )
}