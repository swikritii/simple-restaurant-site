import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './menuCard';
import Navbar from './navbar';

const uniqueList = 
    [...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];  
console.log(uniqueList);

const fooditemList = [...new Set(Menu.map((curElem) => {
            return curElem.name;
        })
    ),
];
console.log(fooditemList);
const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All" ){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };
    // console.log(menuData);
    return (
        <>
            <Navbar filterItem = {filterItem} menuList = {menuList} />
            <MenuCard menuData={ menuData } />
        </>
    )
} 

export default Restaurant
