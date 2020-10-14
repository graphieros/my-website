import React from 'react';
import KioHeader from './KioHeader';
import './css/KioContentIdeas.css';
import KioIdea from './KioIdea';
import ideas_library from './subsite_library/ideas_library.json';

function KioContentIdeas(props) {

    return ( 
        <div className={props.className}>
            <KioHeader sequence='qs-se-eq-xs-wd zw-wd-dz-qs-se-xs' />
            <div className='kio-idea-content'>

                {ideas_library.map((set,k) => <KioIdea
                    key={`kioSet_${k}`}
                    className='kio-idea'
                    frac_class='kio-idea-frac'
                    frac_sequence={set.frac_sequence}
                    frac_svgSize='100'
                    frac_size='30'
                    frac_colors={[75, 106, 160]}
                    frac_dropShadow='0px 0px 3px rgba(255,255,255,0.6)'
                    frac_light={true}
                    molecule_set={set.molecules}
                />)}
            </div>

        </div>
    )
}

export default KioContentIdeas;
