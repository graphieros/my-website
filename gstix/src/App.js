import React from 'react';
import './App.css';
import './Gallery/Gallery.css';
import './Item/Item.css';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Item from './Item/Item';
import './Molecule/Molecule';
import Molecule from './Molecule/Molecule';
import Fractal from './Fractal/Fractal';

// section,
// sequence,
// size,
// colors,
// strokeWidth,
// background,
// border,
// borderRadius

// {callifractal({sequence:'zx-ws-qe',svgSize:50, colors: [10,20,30]})}

function App() {

  return (
    <div className="App">
      <Header />

      <Gallery className="gallery" name="Executive_collection" >
        <Item className="gallery_item" id="item_0">
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
        <Item className="gallery_item" id="item_1">
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
        <Item className="gallery_item" id="item_2">
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
        <Item className="gallery_item" id="item_3">
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
        <Item className="gallery_item" id="item_4">
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
        <Item className="gallery_item" id="item_5">
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
      <Gallery className="gallery" name="Green_collection">
        <Item className="gallery_item" id="item_6"><p>plant</p>
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
        <Item className="gallery_item" id="item_7"><p>nature</p>
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
        <Item className="gallery_item" id="item_8"><p>culture</p>
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
      <Gallery className="gallery" name="Bronze_collection">
        <Item className="gallery_item" id="item_9">
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
        <Item className="gallery_item" id="item_10">
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
        <Item className="gallery_item" id="item_11">
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

      <Gallery className="gallery" name="Turbo_collection">
        <Item className="gallery_item" id="item_12">
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
        <Item className="gallery_item" id="item_13"><p>alien</p>
          <Molecule className="molecule_turbo"
            sequence="meama via kio tra"
            strokeWidth="14"
            size="200"
            borderRadius='100%'
            background={[255, 100, 50]}
            colors={[1, 1, 1]}
            border='2px solid rgb(255,255,255)'
          /></Item>
        <Item className="gallery_item" id="item_14">
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
        <Item className="gallery_item" id="item_15">
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
        <Item className="gallery_item" id="item_16">
          <p>energy</p>
          <Fractal className="fractal_turbo"
            sequence="ew-wx-xq-qd-dz qz-ze-ed-dx-xw-wq-qd-dw-wz-zd-xe-eq-qx"
            colors={[255,255,255]}
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
        <Item className="gallery_item" id="item_17">
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
    </div>
  );
}

export default App;
