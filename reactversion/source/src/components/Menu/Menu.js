import React from 'react';
import MenuFractal from './MenuFractal';
import MenuCategory from './MenuCategory';

const Menu = (props) => {

    console.log(props);

    return(
        <div className={props.className} onClick={props.click}>
            <MenuFractal />
            <MenuCategory className='menuCategory' id='menuCategoryBio' />
        </div>
    )
}

export default Menu;