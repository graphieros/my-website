import React from 'react';
import MenuFractal from './MenuFractal';
import MenuCategory from './MenuCategory';

const Menu = (props) => {

    return (
        <div className={props.className}>

            <MenuFractal />

            <MenuCategory
                className='menuCategory'
                id='menuCategoryBio'
                title='BIO'
                viewbox = '0 0 400 400'
                fontSize = '100'
                basLine = 'bottom'
                name = 'curveBio'
                startOffset = '230'
                clicked={props.buttonAction}
                stroke = 'white'
                fill = 'white' />

            <MenuCategory
                className='menuCategory'
                id='menuCategoryPorfolio'
                title = 'PORTFOLIO'
                viewbox = '0 0 400 400'
                fontSize = '100'
                baseLine='middle'
                name='curvePortfolio'
                startOffset = '0'
                clicked={props.buttonAction}
                stroke= 'white'
                fill = 'white' />

            <MenuCategory
                className='menuCategory'
                id="menuCategoryGraphieros"
                title='GRAPHIEROS'
                viewbox = '0 0 400 400'
                fontSize = '100'
                baseLine='bottom'
                name='curveGraphieros'
                startOffset = '-30'
                clicked={props.buttonAction}
                stroke = 'white'
                fill = 'white' />

        </div>
    )
}

export default Menu;