import React from 'react';
import './css/KioIdea.css';
import Linear from '../graphieros/Linear';
import Molecule from '../graphieros/Molecule';
import Fractal from '../graphieros/Fractal';

function KioIdea(props) { 

    const molecules = props.molecule_set;

    return (
        <div className={props.className}>
            <div className="white-margin"/>
            <Fractal
                className={props.frac_class}
                sequence={props.frac_sequence}
                svgSize={props.frac_svgSize}
                size={props.frac_size}
                colors={props.frac_colors}
                dropShadow={props.frac_dropShadow}
                light={props.frac_light}
            />
            <div className='kio-molecules'>
                {molecules.map((mol, i) => <Molecule
                    className='kio-molecule'
                    key={`mol_${i}`}
                    sequence={mol}
                    size='100'
                    colors={[75, 106, 160]}
                />)}
            </div>

        </div>
    )
}

export default KioIdea;
