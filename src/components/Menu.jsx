import React from 'react'

// import "./Menu.scss";
const Menu = ({items}) => {
    return (
        <div className="section-center">
            {items.map((menuItem)=>{ //mappar igenom menuItem (id, title, img, desc, price)
                const { id, title, img, desc, price } = menuItem;
                //hämtar id till key,  hämtar img/title från img och title
                //h4 hämtar title och h4 "price" hämtar price 
                // p hämtar desc från data.js
                return <article key={id} className="menu-item">
                    <img src={img} alt={title} className="photo" />
                    <div className="item-info">
                        <header>
                            <h4>{title}</h4>
                            <h4 className="price">${price}</h4>
                        </header>
                        <p> {desc} </p>
                    </div>
                </article>
            })}
        </div>
    )
}

export default Menu;
