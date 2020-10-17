import React, { useState } from 'react';
import './css/ShapeSearcher2.css';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import Fractal from './graphieros/Fractal';
import Linear from './graphieros/Linear';

function ShapeSearcher2(props) {

    const mainSearchOptions = [
        {
            shape: 'HEX',
            cords: 'qz-ze-ed-dx-xw-wq'
        },
        {
            shape: 'RECT',
            cords: 'ze-ex-xw-wz'
        },
        {
            shape: 'TRI',
            cords: 'zw-wd-dz'
        },
        {
            shape: 'ARR',
            cords: 'ed-dx-zq-qw'
        },
        {
            shape: 'X',
            cords: 'zx-we'
        },
        {
            shape: 'N',
            cords: 'wz-zx-xe'
        }
    ];

    const search_HEX = [
        {
            shape: 'HEX',
            cords: 'qz-ze-ed-dx-xw-wq'
        },
        {
            shape: 'MEX_t',
            cords: 'qz-ze-ed-dq'
        },
        {
            shape: 'MEX_b',
            cords: 'qd-dx-xw-wq'
        },
        {
            shape: 'MEX_bl',
            cords: 'zq-qw-wx-xz'
        },
        {
            shape: 'MEX_tl',
            cords: 'ez-zq-qw-we'
        },
        {
            shape: 'MEX_tr',
            cords: 'ze-ed-dx-xz'
        },
        {
            shape: 'C_l',
            cords: 'ez-zq-qw-wx'
        },
        {
            shape: 'C_t',
            cords: 'wq-qz-ze-ed-dx'
        },
        {
            shape: 'C_b',
            cords: 'zq-qw-wx-xd-de'
        },
        {
            shape: 'COL_b',
            cords: 'qw-wx-xd'
        },
        {
            shape: 'COL_t',
            cords: 'qz-ze-ed'
        },
        {
            shape: 'PENTA_l',
            cords: 'zw-wx-xd-de-ez'
        },
        {
            shape: 'EQ',
            cords: 'ze-qd-wx'
        },
        {
            shape: 'NE',
            cords: 'ss'
        }
    ];

    const search_RECT = [
        {
            shape: 'RECT',
            cords: 'zw-wx-xe-ez'
        },
        {
            shape: 'PIPE',
            cords: 'zw-ex'
        },
        {
            shape: 'RECT_l',
            cords: 'zq-qx-xd-dz'
        },
        {
            shape: 'RECT_r',
            cords: 'qw-wd-de-eq'
        },
        {
            shape: 'LOS_l',
            cords: 'zq-qw-ws-sz'
        },
        {
            shape: 'LOS_r',
            cords: 'se-ed-dx-xs'
        },
        {
            shape: 'LOS_tl',
            cords: 'qz-ze-es-sq'
        },
        {
            shape: 'LOS_tr',
            cords: 'sz-ze-ed-ds'
        },
        {
            shape: 'LOS_br',
            cords: 'sd-dx-xw-ws'
        },
        {
            shape: 'LOS_bl',
            cords: 'xw-wq-qs-sx'
        },
        {
            shape: 'MEC_l',
            cords: 'ez-zw-wx'
        },
        {
            shape: 'MEC_r',
            cords: 'ze-ex-xw'
        },
        {
            shape: 'U',
            cords: 'zw-wx-xe'
        },
        {
            shape: 'U_rev',
            cords: 'wz-ze-ex'
        },
        {
            shape: 'DIAM',
            cords: 'eq-qw-wx-xe'
        }

    ];

    const search_TRI = [
        {
            shape: 'TRI_0',
            cords: 'zw-wd-dz'
        },
        {
            shape: 'TRI_1',
            cords: 'qx-xe-eq'
        },
        {
            shape: 'TRI_2',
            cords: 'zw-wd-dz-xe-eq-qx'
        },
        {
            shape: 'tri_bl',
            cords: 'qs-sw-wq'
        },
        {
            shape: 'tri_tl',
            cords: 'qz-zs-sq'
        },
        {
            shape: 'tri_t',
            cords: 'ze-es-sz'
        },
        {
            shape: 'tri_tr',
            cords: 'se-ed-ds'
        },
        {
            shape: 'tri_br',
            cords: 'sd-dx-xs'
        },
        {
            shape: 'tri_b',
            cords: 'ws-sx-xw'
        },
        {
            shape: 'TRI_out_l',
            cords: 'wq-qz-zw'
        },
        {
            shape: 'TRI_out_r',
            cords: 'ed-dx-xe'
        },
        {
            shape: 'TRI_in_r',
            cords: 'es-sx-xe'
        },
        {
            shape: 'TRI_in_l',
            cords: 'zs-sw-wz'
        },
        {
            shape: 'TRI_out_br',
            cords: 'wx-xd-dw'
        },
        {
            shape: 'TRI_out_tl',
            cords: 'qz-ze-eq'
        },
        {
            shape: 'TRI_in_tl',
            cords: 'qs-se-eq'
        },
        {
            shape: 'TRI_in_br',
            cords: 'ws-sd-dw'
        },
        {
            shape: 'TRI_out_bl',
            cords: 'qw-wx-xq'
        },
        {
            shape: 'TRI_out_tr',
            cords: 'ze-ed-dz'
        },
        {
            shape: 'TRI_in_tr',
            cords: 'zs-sd-dz'
        },
        {
            shape: 'TRI_in_bl',
            cords: 'qs-sx-xq'
        },
        {
            shape: 'TREC_sbl',
            cords: 'zw-wx-xz'
        },
        {
            shape: 'TREC_sbr',
            cords: 'we-ex-xw'
        },
        {
            shape: 'TREC_stl',
            cords: 'wz-ze-ew'
        },
        {
            shape: 'TREC_str',
            cords: 'ze-ex-xz'
        },
        {
            shape: 'TREC_bl',
            cords: 'wq-qe-ew'
        },
        {
            shape: 'TREC_br',
            cords: 'dx-xz-zd'
        },
        {
            shape: 'TREC_tl',
            cords: 'xq-qz-zx'
        },
        {
            shape: 'TREC_tr',
            cords: 'ed-dw-we'
        },
        {
            shape: 'TREC_hbl',
            cords: 'wq-qd-dw'
        },
        {
            shape: 'TREC_hbr',
            cords: 'qd-dx-xq'
        },
        {
            shape: 'TREC_htr',
            cords: 'ed-dq-qe'
        }
    ];

    const search_ARR = [
        {
            shape: 'MA',
            cords: 'zq-qw-xd-de'
        },
        {
            shape: 'ARR_l',
            cords: 'zq-qw-dq'
        },
        {
            shape: 'ARR_r',
            cords: 'ed-dx-dq'
        },
        {
            shape: 'POINT_l',
            cords: 'eq-qx'
        },
        {
            shape: 'POINT_r',
            cords: 'zd-dw'
        },
        {
            shape: 'HI',
            cords: 'zd-dw-eq-qx'
        },
        {
            shape: 'ARR_db_l',
            cords: 'zq-qw-es-sx'
        },
        {
            shape: 'ARR_dbl_r',
            cords: 'zs-sw-ed-dx'
        },
        {
            shape: 'PIC_br',
            cords: 'qx-xe'
        },
        {
            shape: 'PIC_tl',
            cords: 'wz-zd'
        },
        {
            shape: 'PIC_bl',
            cords: 'zw-wd'
        },
        {
            shape: 'PIC_tr',
            cords: 'qe-ex'
        },
        {
            shape: 'arr_t',
            cords: 'wz-qz-zs'
        },
        {
            shape: 'arr_b',
            cords: 'zw-qw-ws'
        }
    ];

    const search_X = [
        {
            shape: 'X',
            cords: 'zx-we'
        },
        {
            shape: 'X_plur',
            cords: 'zs-sd-sw'
        },
        {
            shape: 'X_all',
            cords: 'zx-we-qd'
        },
        {
            shape: 'KA',
            cords: 'zx-ws-qe'
        },
        {
            shape: 'CROSS_b',
            cords: 'qx-dw'
        },
        {
            shape: 'CROSS_t',
            cords: 'zd-qe'
        },
        {
            shape: 'DASH',
            cords: 'wx-zd'
        }
    ];

    const search_N = [
        {
            shape: 'N',
            cords: 'wz-zx-xe'
        },
        {
            shape: 'N_rev',
            cords: 'xe-ew-wz'
        },
        {
            shape: 'Z',
            cords: 'ze-ew-wx'
        },
        {
            shape: 'Z_rev',
            cords: 'ez-zx-xw'
        },
        {
            shape: 'N_r',
            cords: 'qe-ew-wd'
        },
        {
            shape: 'N_l',
            cords: 'xq-qd-dz'
        },
        {
            shape: 'N_lrev',
            cords: 'dz-zx-xq'
        },
        {
            shape: 'N_rrev',
            cords: 'eq-qd-dw'
        },
        {
            shape: 'W',
            cords: 'qw-ws-sx-xd'
        },
        {
            shape: 'M',
            cords: 'qz-zs-se-ed'
        },
        {
            shape: 'E',
            cords: 'ez-zs-sw-wx'
        },
        {
            shape: 'E_rev',
            cords: 'ze-es-sx-xw'
        },
        {
            shape: 'N_weird',
            cords: 'qd-dw-wx'
        }
    ]


    const [subOptionState, setSubOptionState] = useState({
        content: ''
    });

    const [resultState, setResultState] = useState({
        content: ''
    });

    const handleResult = (props) => {
        const selectedShape = props.target.id;
        console.log(selectedShape);
        let memoryGlyphs = [],
            memoryFr = [];

        graphieros_dictionnary.forEach(entry => {
            entry.shapes.forEach(sh => {
                if (sh === selectedShape) {
                    memoryGlyphs.push(entry.name.replace("_", ""));
                    memoryFr.push(entry.fr);
                }
            });
        });

        const len = memoryGlyphs.length;

        setResultState({
            content: memoryGlyphs.map((m, i) => <div className='glyph-result' key={`res_${i}`}>
                <span className='span-result-fr'>{memoryFr[i]}</span>
                <Linear
                    className='linear-result'
                    sequence={m}
                    size='35'
                    colors={[255, 255, 255]}
                />
                <span className='span-result-phono'>{`[ ${m} ]`}</span>
            </div>)
        });
    }

    const handleSubOptionDisplay = (props) => {
        console.log(props.target.id)
        const option_id = props.target.id;

        setResultState({
            content: ''
        });

        if (option_id === 'opt_0') {
            setSubOptionState({
                content: search_HEX.map((sh, i) => <div className='sb-wrapper' key={`HEXopt_${i}`}>
                    <div
                        className='wrapper-click'
                        onClick={(e) => handleResult(e)}
                        id={sh.shape} />
                    <Fractal
                        className='search-option'
                        sequence={sh.cords}
                        colors={[122, 161, 216]}
                        size='40'
                        svgSize='30'
                    />
                </div>)
            })
        }
        if (option_id === 'opt_1') {
            setSubOptionState({
                content: search_RECT.map((sh, i) => <div className='sb-wrapper' key={`HEXopt_${i}`}>
                    <div
                        className='wrapper-click'
                        onClick={(e) => handleResult(e)}
                        id={sh.shape} />
                    <Fractal
                        className='search-option'
                        sequence={sh.cords}
                        colors={[122, 161, 216]}
                        size='40'
                        svgSize='30'
                    />
                </div>
                )
            })
        }
        if (option_id === 'opt_2') {
            setSubOptionState({
                content: search_TRI.map((sh, i) => <div className='sb-wrapper' key={`HEXopt_${i}`}>
                    <div
                        className='wrapper-click'
                        onClick={(e) => handleResult(e)}
                        id={sh.shape} />
                    <Fractal
                        className='search-option'
                        sequence={sh.cords}
                        colors={[122, 161, 216]}
                        size='40'
                        svgSize='30'
                    />
                </div>
                )
            })
        }
        if (option_id === 'opt_3') {
            setSubOptionState({
                content: search_ARR.map((sh, i) => <div className='sb-wrapper' key={`HEXopt_${i}`}>
                    <div
                        className='wrapper-click'
                        onClick={(e) => handleResult(e)}
                        id={sh.shape} />
                    <Fractal
                        className='search-option'
                        sequence={sh.cords}
                        colors={[122, 161, 216]}
                        size='40'
                        svgSize='30'
                    />
                </div>
                )
            })
        }
        if (option_id === 'opt_4') {
            setSubOptionState({
                content: search_X.map((sh, i) => <div className='sb-wrapper' key={`HEXopt_${i}`}>
                    <div
                        className='wrapper-click'
                        onClick={(e) => handleResult(e)}

                        id={sh.shape} />
                    <Fractal
                        className='search-option'
                        sequence={sh.cords}
                        colors={[122, 161, 216]}
                        size='40'
                        svgSize='30'
                    />
                </div>
                )
            });
        }
        if (option_id === 'opt_5') {
            setSubOptionState({
                content: search_N.map((sh, i) => <div className='sb-wrapper' key={`HEXopt_${i}`}>
                    <div
                        className='wrapper-click'
                        onClick={(e) => handleResult(e)}

                        id={sh.shape} />
                    <Fractal
                        className='search-option'
                        sequence={sh.cords}
                        colors={[122, 161, 216]}
                        size='40'
                        svgSize='30'
                    />
                </div>
                )
            });
        }
    }

    return (
        <>
            <div className={props.className}>
                {props.children}
                <div className='shape-searcher2-body'>

                    {mainSearchOptions.map((so, i) =>
                        <div className='sb-wrapper' key={`fracOpt_${i}`}>
                            <div onClick={(e) => handleSubOptionDisplay(e)}
                                className='wrapper-click'
                                id={`opt_${i}`} />
                            <Fractal
                                className='search-option-main'
                                sequence={so.cords}
                                colors={[255, 255, 255]}
                                size='40'
                                svgSize='30'
                            />
                        </div>)}
                </div>
                <div className='sub-options'>
                    {subOptionState.content}
                </div>
                <div className='new-search-results'>
                    {resultState.content}
                </div>
            </div>

        </>
    )
}

export default ShapeSearcher2;
