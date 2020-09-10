import React from 'react';
import { Link } from 'react-router-dom';
import SubMenu from '../components/SubMenu/SubMenu';
import '././css/Art.css';

const Art = () => {
    return (
        <div className="art">

            <Link to='/art/galerie' className='subMenuLink'>
                <SubMenu
                    svgSize={200}
                    sequence='zq-qw-wx-xd-de eq-qx-dq-ws-sz wz-zd-dw-qs-se-xs'
                    R={255}
                    G={215}
                    B={1}
                    dropShadow='0px 2px 2px rgb(5,5,20)'
                    light={true}
                    intensity='1.4'
                    content='galerie'
                />
            </Link>

            <Link to='/art/graphieros' className='subMenuLink'>
                <SubMenu
                    svgSize={200}
                    sequence='zq-qw-ws-sx-xd-de qw-wz-sx-xe ws-sx-xw-wq-qz-ze-ed-dx'
                    R={50}
                    G={155}
                    B={200}
                    dropShadow='0px 2px 2px rgb(5,5,20)'
                    light={true}
                    intensity='1.5'
                    content='graphieros'
                />
            </Link>

            <Link to='/art/livres' className='subMenuLink'>
                <SubMenu
                    svgSize={200}
                    sequence='wz-ze-ex-xw-ws-sx ze-qs-wx zs-sd-ws'
                    R={122}
                    G={90}
                    B={219}
                    dropShadow='0px 2px 2px rgb(5,5,20)'
                    light={true}
                    intensity='1.5'
                    content='livres'
                />
            </Link>

        </div>
    )
}

export default React.memo(Art);