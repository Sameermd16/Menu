import React from 'react'


export default function MenuItems({menuData}) {

    // console.log(menuData)

    return (
        <section>
            {
                menuData.map((item) => {
                    const {id, title, category, price, img, desc} = item
                    return (
                        <article key={id} className='border border-secondary rounded my-2 p-3'>
                            <img src={img} width='200px' />
                            <div className='d-flex justify-content-between mt-2'>
                                <p className='text-primary'>{title}</p>
                                <span className='text-danger'>${price}</span>
                            </div>
                            <p>{desc}</p>
                        </article>
                    )
                })
            }
        </section>
    )
}