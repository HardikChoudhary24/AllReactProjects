import React from "react";

const List = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((items) => {
        return (
          <section className="menu-item">
            <img src={items.img} alt={items.title} className="img" />
            <div className="item-info">
              <header>
                <h5>{items.title}</h5>
                <p className="item-price">{items.price}</p>
              </header>
              <p className="item-text">{items.desc}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default List;
