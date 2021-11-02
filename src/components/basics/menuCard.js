import React from 'react';

const MenuCard = ({ menuData }) => {
    //  console.log(menuData);
    return (
        <>
            <section className="main-card--container">
                <div className="main-card--wrap">
                {menuData.map((curElem,index) => {
                    const{ id, category, name , description, image } = curElem;
                    return(
                        <>
                            <div className="card-container" key={ id }>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{index + 1} </span>
                                        <span className="card-author subtle">{category} </span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle">{description}</span>
                                        <div className="card-read">Read</div>
                                        <div className="image-container">
                                            <img src={image} alt="images" className="card-media" />
                                        </div>
                                    </div>
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                         {/*    <div className="card-container" key={ curElem.id }>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{index + 1} </span>
                                        <span className="card-author subtle">{curElem.category} </span>
                                        <h2 className="card-title">{curElem.name}</h2>
                                        <span className="card-description subtle">{curElem.description}</span>
                                        <div className="card-read">Read</div>
                                        <div className="image-container">
                                            <img src={curElem.image} alt="images" classNames="card-media" />
                                        </div>
                                    </div>
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div> */}
                        </>
                    );
                })}
                </div>
            </section>
        </> 
    );
};

export default MenuCard;
