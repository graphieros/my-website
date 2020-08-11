import React, { useState } from 'react';
import './App.css';
import './Gallery/Gallery.css';
import './Item/Item.css';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Item from './Item/Item';
import Molecule from './Molecule/Molecule';
import Fractal from './Fractal/Fractal';
import Modal from './Modal/Modal';
import stix_laptop_0 from './Pics/stix_laptop_0.png';
import stix_laptop_1 from './Pics/stix_laptop_1.png';
import stix_laptop_2 from './Pics/stix_laptop_2.png';
import stix_laptop_3 from './Pics/stix_laptop_3.png';

function App() {

  const [modal_state, set_modal_state] = useState({
    className: 'invisible'
  })

  const show_modal = () => {
    set_modal_state({
      className: 'visible'
    });

  }

  const hide_modal = () => {
    set_modal_state({
      className: 'invisible'
    })
  }

  return (
    <div className="App">
      <Header />

      <Modal id="modal_showcase" className={modal_state.className}>
        <div id="quit_button" onClick={hide_modal}>
          <Fractal sequence="zx-we"
            colors={[255, 255, 255]}
            size=""
            svgSize="60"
            radius=""
            background='rgb(163, 54, 46)'
            light={true}
            intensity=""
            border="2px solid rgb(255,255,255)"
            backgroundRadius="100%" />
        </div>
        <div id="temp_svg">
    
        </div>

      </Modal>

      <Gallery className="gallery" name="Executive_collection" >
        <Item className="gallery_item" id="item_numbers" show_modal_window={show_modal}>
          <p>numbers</p>
          <Molecule className="molecule_executive"
            sequence="sro kfa du srei ktu foi ksi"
            strokeWidth=""
            size="200"
            borderRadius='100%'
            background={[100, 130, 150]}
            colors={[255, 255, 255]}
            border='2px solid rgb(255,255,255)'
          />
        </Item>
        <Item className="gallery_item" id="item_light" show_modal_window={show_modal}>
          <p>light</p>
          <Fractal className="fractal_executive"
            sequence="wz-zd-dw-qs-se-xs"
            colors={[100, 130, 150]}
            size=""
            svgSize=""
            radius=""
            background='rgb(255,255,255)'
            light={true}
            intensity=""
            border="2px solid rgb(100,130,150)"
            backgroundRadius="100%"
          />
        </Item>
        <Item className="gallery_item" id="item_love" show_modal_window={show_modal}>
          <p>love</p>
          <Molecule className="molecule_executive"
            sequence='mea sa kme'
            colors={[100, 130, 150]}
            size='200'
            borderRadius='100%'
            background={[255, 255, 255]}
            border='2px solid rgb(100,130,150)'
          />

        </Item>
        <Item className="gallery_item" id="item_42" show_modal_window={show_modal}>
          <p>42</p>
          <Fractal className="fractal_executive"
            sequence="wz-ze-ex-xw wz-zd"
            colors={[100, 130, 150]}
            size=""
            svgSize=""
            radius=""
            background='radial-gradient(white, rgb(100,130,150))'
            light={false}
            intensity=""
            border="2px solid rgb(255,255,255)"
            backgroundRadius="100%"
          />
        </Item>
        <Item className="gallery_item" id="item_growth" show_modal_window={show_modal}>
          <p>growth</p>
          <Molecule className="molecule_executive"
            sequence='hea blea kto skai'
            colors={[100, 130, 150]}
            size='200'
            borderRadius='100%'
            background={[255, 255, 255]}
            border='2px solid rgb(100,130,150)'
          />
        </Item>
        <Item className="gallery_item" id="item_bloom" show_modal_window={show_modal}>
          <p>bloom</p>
          <Fractal className="fractal_executive"
            sequence="zq-qx-wd-de"
            colors={[255, 255, 255]}
            size=""
            svgSize=""
            radius=""
            background='rgb(100,130,150)'
            light={false}
            intensity=""
            border="2px solid rgb(255,255,255)"
            backgroundRadius="100%"
          />
        </Item>
      </Gallery>
      <img className="stix_on_laptops" src={stix_laptop_0} alt="an Executive Gstix on a laptop" />

      <Gallery className="gallery" name="Green_collection">
        <Item className="gallery_item" id="item_plant" show_modal_window={show_modal}>
          <p>plant</p>
          <Fractal className="fractal_green"
            sequence="zw-wd-qx-ew qw-wx-zw-wd-we"
            colors={[192, 224, 182]}
            size=""
            svgSize=""
            radius=""
            background='rgb(61,97,50)'
            light={true}
            intensity=""
            border="2px solid rgb(255,255,255)"
            backgroundRadius="100%"
          />
        </Item>
        <Item className="gallery_item" id="item_nature" show_modal_window={show_modal}>
          <p>nature</p>
          <Molecule className="molecule_green"
            sequence="mea hae to trea frey"
            strokeWidth=""
            size="200"
            borderRadius='100%'
            background={[192, 224, 182]}
            colors={[61, 97, 50]}
            border='2px solid rgb(255,255,255)'
          />
        </Item>
        <Item className="gallery_item" id="item_culture" show_modal_window={show_modal}>
          <p>culture</p>
          <Molecule className="molecule_green"
            sequence="ka ksea grae tvai"
            strokeWidth=""
            size="200"
            borderRadius='100%'
            background={[61, 97, 50]}
            colors={[192, 224, 182]}
            border='2px solid rgb(255,255,255)'
          /></Item>
      </Gallery>      
      <img className="stix_on_laptops" src={stix_laptop_1} alt="a Green Gstix on a laptop" />
      
      <Gallery className="gallery" name="Bronze_collection">
        <Item className="gallery_item" id="item_summertime" show_modal_window={show_modal}>
          <p>summertime</p>
          <Fractal className="fractal_bronze"
            sequence="ze-ed-ew-eq-ex zw-wd-dz-qs-se-sx"
            colors={[112, 73, 67]}
            size=""
            svgSize=""
            radius=""
            background='radial-gradient(white,rgb(112,73,67))'
            light={true}
            intensity="2"
            border="2px solid rgb(255,255,255)"
            backgroundRadius="100%"
          />
        </Item>
        <Item className="gallery_item" id="item_beauty" show_modal_window={show_modal}>
          <p>beauty</p>
          <Molecule className="molecule_bronze"
            sequence="mea keo grey hea"
            strokeWidth=""
            size="200"
            borderRadius='100%'
            background={[112, 73, 67]}
            colors={[237, 188, 180]}
            border='2px solid rgb(255,255,255)'
          /></Item>
        <Item className="gallery_item" id="item_play" show_modal_window={show_modal}>
          <p>play</p>
          <Fractal className="fractal_bronze"
            sequence="we-ex-xw-qs-zd wz-zd-dw-qw-ze-xd"
            colors={[232, 152, 139]}
            size=""
            svgSize=""
            radius="20"
            background='rgb(112,73,67)'
            light={true}
            intensity="1.4"
            border="2px solid rgb(255,255,255)"
            backgroundRadius="100%"
          />
        </Item>
      </Gallery>
      <img className="stix_on_laptops" src={stix_laptop_2} alt="a Bronze Gstix on a laptop" />

      <Gallery className="gallery" name="Turbo_collection">
        <Item className="gallery_item" id="item_fighter" show_modal_window={show_modal}>
          <p>fighter</p>
          <Fractal className="fractal_turbo"
            sequence="zx-ws-qe qw-we-dx-xz"
            colors={[10, 10, 10]}
            size=""
            svgSize=""
            radius=""
            background='rgb(255,100,50)'
            light={true}
            intensity="100"
            border="2px solid rgb(255,255,255)"
            backgroundRadius="100%"
          />
        </Item>
        <Item className="gallery_item" id="item_alien" show_modal_window={show_modal}>
          <p>alien</p>
          <Molecule className="molecule_turbo"
            sequence="meama via kio tra"
            strokeWidth="14"
            size="200"
            borderRadius='100%'
            background={[255, 100, 50]}
            colors={[1, 1, 1]}
            border='2px solid rgb(255,255,255)'
          /></Item>
        <Item className="gallery_item" id="item_echo" show_modal_window={show_modal}>
          <p>echo</p>
          <Fractal className="fractal_turbo"
            sequence="zq-qw-xd-de zq-qw-xd-de zq-qw-xd-de"
            colors={[10, 10, 10]}
            size=""
            svgSize=""
            radius=""
            background='rgb(255,100,50)'
            light={false}
            intensity="100"
            border="2px solid rgb(255,255,255)"
            backgroundRadius="100%"
          />
        </Item>
        <Item className="gallery_item" id="item_inside" show_modal_window={show_modal}>
          <p>inside</p>
          <Molecule className="molecule_turbo"
            sequence="nsa"
            strokeWidth="20"
            size="200"
            borderRadius='100%'
            background={[255, 100, 50]}
            colors={[1, 1, 1]}
            border='2px solid rgb(255,255,255)'
          /></Item>
        <Item className="gallery_item" id="item_energy" show_modal_window={show_modal}>
          <p>energy</p>
          <Fractal className="fractal_turbo"
            sequence="ew-wx-xq-qd-dz qz-ze-ed-dx-xw-wq-qd-dw-wz-zd-xe-eq-qx"
            colors={[255, 255, 255]}
            size="20"
            svgSize=""
            radius="15"
            background='rgb(255,100,50)'
            light={false}
            intensity="100"
            border="2px solid rgb(255,255,255)"
            backgroundRadius="100%"
          />
        </Item>
        <Item className="gallery_item" id="item_lava" show_modal_window={show_modal}>
          <p>lava</p>
          <Molecule className="molecule_turbo"
            sequence="trea fwo frey"
            strokeWidth="14"
            size="200"
            borderRadius='100%'
            background={[255, 100, 50]}
            colors={[1, 1, 1]}
            border='2px solid rgb(255,255,255)'
          /></Item>
      </Gallery>    
      <img className="stix_on_laptops" src={stix_laptop_3} alt="a Turbo Gstix on a laptop" />

    </div>
  );
}

export default App;
