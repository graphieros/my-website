import React from 'react';
import { Link } from 'react-router-dom';
import SubMenu from '../components/SubMenu/SubMenu';
import '././css/Parcours.css';

const Parcours = () => {
    return (
        <div className="parcours">

            <Link to='/parcours/bio' className='subMenuLink'>
                <SubMenu
                    svgSize={200}
                    sequence='we-xs-xw-wq-qz-ze-ed-dx-dz zx-ws-qe ze-eq-xw-wd'
                    R={122}
                    G={161}
                    B={216}
                    dropShadow='0px 2px 2px rgb(5,5,20)'
                    light={true}
                    intensity='1.5'
                    content='bio'
                />
            </Link>

            <Link to='/parcours/media' className='subMenuLink'>
                <SubMenu
                    svgSize={200}
                    sequence='xe-dz-zq-qs-sw ws-sx-xw-wz-ze-ex dq-qe-xq-zs-sw'
                    R={99}
                    G={215}
                    B={71}
                    dropShadow='0px 2px 2px rgb(5,5,20)'
                    light={true}
                    intensity='1.5'
                    content='ce que je fais'
                />
            </Link>

            <Link to='/parcours/outils' className='subMenuLink'>
                <SubMenu
                    svgSize={200}
                    sequence='ws-sx-xw-wz-ze-ex wz-ze-ex-xw-we-xz-qd'
                    R={255}
                    G={99}
                    B={71}
                    dropShadow='0px 2px 2px rgb(5,5,20)'
                    light={true}
                    intensity='1.5'
                    content='mes outils'
                />
            </Link>
        </div>
    )
}

export default React.memo(Parcours);