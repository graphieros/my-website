import React from 'react';
import Linear from '../graphieros/Linear';
import KioHeader from './KioHeader';
import './css/KioContentLinear.css';
import linear_texts from './subsite_library/linear_texts.json';
import { linear } from '../../libraries/graphieros0.2';

function KioContentLinear(props) {

    let texts = [];
    linear_texts.forEach(text => {
        texts.push(text);
    })

    return (
        <div className={props.className}>
            <KioHeader sequence='ze-qs-wx zw-ex' />
            <div className='kio-linear-body'>
                {Object.keys(linear_texts).map((key) => {
                    return linear_texts[key].map((text, i) => {
                        if (i % 2 === 0) {
                            return (
                                <Linear
                                    className='line-even'
                                    key={`line_${i}`}
                                    sequence={text.line}
                                    size='30'
                                    colors={[29, 55, 104]}
                                />
                            );
                        } else {
                            return (
                                <Linear
                                    className='line-odd'
                                    key={`line_${i}`}
                                    sequence={text.line}
                                    size='30'
                                    colors={[29, 55, 104]}
                                />
                            );
                        }
                    });
                })}
            </div>
        </div>
    )
}

export default KioContentLinear;
