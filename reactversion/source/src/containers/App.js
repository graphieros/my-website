import React, { useState } from 'react';
import './App.css';
import './Bio/Bio.css';
import './Portfolio/Portfolio.css';
import './Graphieros/Graphieros.css';
import Bio from './Bio/Bio';
import Portfolio from './Portfolio/Portfolio';
import Graphieros from './Graphieros/Graphieros';
import Me from '../components/Me/Me';
import MenuFractal from '../components/Menu/MenuFractal';
import MenuContactFractal from '../components/Menu/MenuContactFractal';
import BioFractal from './Bio/BioFractal';
import PortfolioFractal from './Portfolio/PorfolioFractal';
import GraphierosFractal from './Graphieros/GraphierosFractal';
import MenuCategory from '../components/Menu/MenuCategory';
import SubMenuContent from '../components/SubMenuContent/SubMenuContent';
import SubMenuBioDo from '../components/SubMenuContent/SubMenuBioDo';
import SubMenuParcours from '../components/SubMenuContent/SubMenuParcours';
import SubMenuOutil from '../components/SubMenuContent/SubMenuOutil';
import SubMenuPeinture from '../components/SubMenuContent/SubMenuPeinture';
import SubMenuWeb from '../components/SubMenuContent/SubMenuWeb';

function App() {

  const [menuState, setMenuState] = useState({
    className: 'menuInitial'
  });

  //BIO SUBMENU STATE
  const clickBioCategoryHandler = () => {
    setBioState({
      className: 'bioStandby'
    });
    setBioStandbyState({
      className: 'bioStandbyOn'
    });
    setPortfolioStandbyState({
      className: 'hidden'
    });
    setGraphierosStandbyState({
      className: 'hidden'
    });
    setContactState({
      className: 'hidden'
    });
  }

  //BIO SUBCATEGORY HANDLING
  const clickBioDoHandler = (upperHandler) => {
    upperHandler();
    setBioDoState({
      className: 'bioDoOn'
    });
    setBioParcoursState({
      className: 'hidden'
    });
    setBioOutilState({
      className: 'hidden'
    });
  }

  const clickParcoursHandler = (upperHandler) => {
    upperHandler();
    setBioDoState({
      className: 'hidden'
    });
    setBioParcoursState({
      className: 'bioParcoursOn'
    });
    setBioOutilState({
      className: 'hidden'
    });
  }

  const clickOutilHandler = (upperHandler) => {
    upperHandler();
    setBioDoState({
      className: 'hidden'
    });
    setBioParcoursState({
      className: 'hidden'
    });
    setBioOutilState({
      className: 'bioOutilOn'
    });
  }

  //PORFOLIO SUBMENU STATE
  const clickPortfolioCategoryHandler = () => {
    setPortfolioState({
      className: 'portfolioStandby'
    });
    setBioStandbyState({
      className: 'hidden'
    });
    setPortfolioStandbyState({
      className: 'portfolioStandbyOn'
    });
    setGraphierosStandbyState({
      className: 'hidden'
    });
    setContactState({
      className: 'hidden'
    });
  }

  //PORTFOLIO SUBCATEGORY HANDLING

  const clickWebHandler = (upperHandler) => {
    upperHandler();
    setWebState({
      className: 'webOn'
    });
  }

  const clickPeintureHandler = (upperHandler) => {
    upperHandler();
    setPeintureState({
      className: 'peintureOn'
    });
  }


  //GRAPHIEROS SUBMENU STATE
  const clickGraphierosCategoryHandler = () => {
    setGraphierosState({
      className: 'graphierosStandby'
    });
    setBioStandbyState({
      className: 'hidden'
    });
    setGraphierosStandbyState({
      className: 'graphierosStandbyOn'
    });
    setPortfolioStandbyState({
      className: 'hidden'
    });
    setContactState({
      className: 'hidden'
    });
  }

  //RESET MENU STATE
  const resetMenuHandler = () => {
    setMenuState({
      className: 'menuInitial'
    });
    setMeState({
      className: 'meLanding',
      lec: 'lec',
      loyd: 'loyd',
      robert: 'robert'
    });
    setBioState({
      className: 'bioOff'
    });

    setBioStandbyState({
      className: 'hidden'
    });
    setPortfolioState({
      className: 'hidden'
    });
    setGraphierosState({
      className: 'hidden'
    });
    setBioDoState({
      className: 'hidden'
    });
    setBioParcoursState({
      className: 'hidden'
    });
    setBioOutilState({
      className: 'hidden'
    });
    setPeintureState({
      className: 'hidden'
    });
    setWebState({
      className: 'hidden'
    });
    setContactState({
      className: 'menuContact'
    });
  }

  //BOTTOM NAME STATE
  const [meState, setMeState] = useState({
    className: 'meLanding',
    lec: 'lec',
    loyd: 'loyd',
    robert: 'robert'
  });


  // BIO SUBMENU STATE
  const [bioState, setBioState] = useState({
    className: 'bioOff'
  });

  const [bioStandbyState, setBioStandbyState] = useState({
    className: 'hidden'
  });

  const [bioDoState, setBioDoState] = useState({
    className: 'hidden'
  });

  const [bioParcoursState, setBioParcoursState] = useState({
    className: 'hidden'
  });

  const [bioOutilState, setBioOutilState] = useState({
    className: 'hidden'
  });

  const clickBioHandler = () => {
    setMenuState({
      className: 'menuClicked'
    });
    setMeState({
      className: 'meLeaving'
    });
    setBioState({
      className: 'bioOn'
    });
  }

  //RESET BIO SUBMENU STATE
  const resetBioHandler = () => {
    setBioState({
      className: 'bioOn'
    });
    setBioStandbyState({
      className: 'hidden'
    });
    setPortfolioStandbyState({
      className: 'hidden'
    });
    setGraphierosStandbyState({
      clasName: 'hidden'
    });
    setBioDoState({
      className: 'hidden'
    });
    setBioParcoursState({
      className: 'hidden'
    });
    setBioOutilState({
      className: 'hidden'
    });
    setContactState({
      className: 'menuContact'
    });
  }

  //PORTFOLIO SUBMENU STATE
  const [portfolioState, setPortfolioState] = useState({
    className: 'portfolioOff'
  });

  const [portfolioStandbyState, setPortfolioStandbyState] = useState({
    className: 'hidden'
  });

  const [peintureState, setPeintureState] = useState({
    className: 'hidden'
  });

  const [webState, setWebState] = useState({
    className: 'hidden'
  });

  const clickPortfolioHandler = () => {
    setMenuState({
      className: 'menuClicked'
    });
    setMeState({
      className: 'meLeaving'
    });
    setPortfolioState({
      className: 'portfolioOn'
    });
  }

  //RESET PORTFOLIO SUBMENU STATE
  const resetPortfolioHandler = () => {
    setPortfolioState({
      className: 'portfolioOn'
    });
    setPortfolioStandbyState({
      className: 'hidden'
    });
    setPeintureState({
      className: 'hidden'
    });
    setWebState({
      className: 'hidden'
    })
    setContactState({
      className: 'menuContact'
    });
  }

  //GRAPHIEROS SUBMENU STATE
  const [graphierosState, setGraphierosState] = useState({
    className: 'graphierosOff'
  });

  const [graphierosStandbyState, setGraphierosStandbyState] = useState({
    className: 'hidden'
  });

  const clickGraphierosHandler = () => {
    setMenuState({
      className: 'menuClicked'
    });
    setMeState({
      className: 'meLeaving'
    });
    setGraphierosState({
      className: 'graphierosOn'
    });
  }

  //RESET GRAPHIEROS SUBMENU STATE
  const resetGraphierosHandler = () => {
    setGraphierosState({
      className: 'graphierosOn'
    });
    setGraphierosStandbyState({
      className: 'hidden'
    });
    setContactState({
      className: 'menuContact'
    });
  }

  // CONTACT STATE
  const [contactState, setContactState] = useState({
    className: 'menuContact'
  });

  return (
    <div className="App">

      <div
        className={menuState.className}>
        <MenuFractal />

        <MenuCategory
          className='menuCategory'
          id='menuCategoryBio'
          title='BIO'
          viewbox='0 0 400 400'
          fontSize='100'
          basLine='bottom'
          name='curveBio'
          startOffset='230'
          clicked={clickBioHandler}
          stroke='white'
          fill='white' />

        <MenuCategory
          className='menuCategory'
          id='menuCategoryPorfolio'
          title='PORTFOLIO'
          viewbox='0 0 400 400'
          fontSize='100'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='0'
          clicked={clickPortfolioHandler}
          stroke='white'
          fill='white' />

        <MenuCategory
          className='menuCategory'
          id="menuCategoryGraphieros"
          title='GRAPHIEROS'
          viewbox='0 0 400 400'
          fontSize='100'
          baseLine='bottom'
          name='curveGraphieros'
          startOffset='-30'
          clicked={clickGraphierosHandler}
          stroke='white'
          fill='white' />
      </div>

      <div
        id="resetMenu"
        onClick={resetMenuHandler} />

      <div
        className={bioStandbyState.className}
        onClick={resetBioHandler} />

      <div
        className={portfolioStandbyState.className}
        onClick={resetPortfolioHandler} />

      <div
        className={graphierosStandbyState.className}
        onClick={resetGraphierosHandler} />

      <Bio className={bioState.className}>
        <BioFractal />
        <MenuCategory clicked={() => clickBioDoHandler(clickBioCategoryHandler)}
          className='menuCategory'
          id='menuCategoryBioDo'
          title='CE QUE JE FAIS'
          viewbox='0 0 400 400'
          fontSize='80'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='0'
          stroke='rgb(143,126,50)'
          strokewidth='8'
          fill='rgb(143,126,50)'>
        </MenuCategory>

        <SubMenuContent className={bioDoState.className}>
          <SubMenuBioDo className="bioDoContent"></SubMenuBioDo>
        </SubMenuContent>

        <MenuCategory clicked={() => clickParcoursHandler(clickBioCategoryHandler)}
          className='menuCategory'
          id='menuCategoryBioParcours'
          title='MON PARCOURS'
          viewbox='0 0 400 400'
          fontSize='80'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='0'
          stroke='rgb(143,126,50)'
          strokewidth='8'
          fill='rgb(143,126,50)' />

        <SubMenuContent className={bioParcoursState.className}>
          <SubMenuParcours className="bioParcoursContent"></SubMenuParcours>
        </SubMenuContent>

        <MenuCategory clicked={() => clickOutilHandler(clickBioCategoryHandler)}
          className='menuCategory'
          id='menuCategoryBioOutil'
          title='MES OUTILS'
          viewbox='0 0 400 400'
          fontSize='80'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='0'
          stroke='rgb(143,126,50)'
          strokewidth='8'
          fill='rgb(143,126,50)' />

        <SubMenuContent className={bioOutilState.className}>
          <SubMenuOutil className="bioOutilContent"></SubMenuOutil>
        </SubMenuContent>

      </Bio>

      <Portfolio className={portfolioState.className}>
        <PortfolioFractal />
        <MenuCategory clicked={() => clickWebHandler(clickPortfolioCategoryHandler)}
          className='menuCategory'
          id='menuCategoryPortfolioWeb'
          title='WEB DEV'
          viewbox='0 0 400 400'
          fontSize='80'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='100'
          stroke='rgb(38,70,133)'
          strokewidth='8'
          fill='rgb(38,70,133)' />

        <SubMenuContent className={webState.className}>
          <SubMenuWeb className="webContent"></SubMenuWeb>
        </SubMenuContent>

        <MenuCategory clicked={() => clickPeintureHandler(clickPortfolioCategoryHandler)}
          className='menuCategory'
          id='menuCategoryPortfolioPeinture'
          title='PEINTURE'
          viewbox='0 0 400 400'
          fontSize='80'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='80'
          stroke='rgb(38,70,133)'
          strokewidth='8'
          fill='rgb(38,70,133)' />

        <SubMenuContent className={peintureState.className}>
          <SubMenuPeinture className="peintureContent"></SubMenuPeinture>
        </SubMenuContent>

        <MenuCategory
          className='menuCategory'
          id='menuCategoryPortfolioTexte'
          title='TEXTES'
          viewbox='0 0 400 400'
          fontSize='80'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='140'
          stroke='rgb(38,70,133)'
          strokewidth='8'
          fill='rgb(38,70,133)' />
      </Portfolio>

      <Graphieros className={graphierosState.className}>
        <GraphierosFractal />
        <MenuCategory clicked={clickGraphierosCategoryHandler}
          className='menuCategory'
          id='menuCategoryGraphierosCle'
          title='LA CLE'
          viewbox='0 0 400 400'
          fontSize='80'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='130'
          stroke='rgb(99,38,27)'
          strokewidth='8'
          fill='rgb(99,38,27)' />

        <MenuCategory
          className='menuCategory'
          id='menuCategoryGraphierosLexique'
          title='LEXIQUE'
          viewbox='0 0 400 400'
          fontSize='80'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='120'
          stroke='rgb(99,38,27)'
          strokewidth='8'
          fill='rgb(99,38,27)' />

        <MenuCategory
          className='menuCategory'
          id='menuCategoryGraphierosEditeur'
          title='EDITEUR'
          viewbox='0 0 400 400'
          fontSize='80'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='110'
          stroke='rgb(99,38,27)'
          strokewidth='8'
          fill='rgb(99,38,27)' />

        <MenuCategory
          className='menuCategory'
          id='menuCategoryGraphierosTexte'
          title='TEXTES'
          viewbox='0 0 400 400'
          fontSize='80'
          baseLine='middle'
          name='curvePortfolio'
          startOffset='140'
          stroke='rgb(99,38,27)'
          strokewidth='8'
          fill='rgb(99,38,27)' />
      </Graphieros>

      <Me
        className={meState.className}
        lec={meState.lec}
        loyd={meState.loyd}
        robert={meState.robert} />

      <MenuContactFractal className={contactState.className} />

    </div>
  );
}

export default App;
