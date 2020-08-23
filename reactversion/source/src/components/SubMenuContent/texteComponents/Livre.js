import React from 'react';

const Livre = (props) => {
    return (
        <div className={props.className}>
            <img
                src={props.image}
                alt={props.imageAlt}
            />
            <p>
                <span>
                    {props.title}
                </span>
                <br />
                <br />
                {props.description}
            </p>
        </div>
    )
}

export default Livre;