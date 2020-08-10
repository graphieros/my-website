import React from 'react';

const Gallery = (props) => {

    const style = {
        display: 'grid',
        width: '100vw',
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '150px'
    }

    return(
        <section className = {props.className} id = {props.name} style = {style}>
            <div className = 'gallery_title' id={`${props.name}_title`}>{props.name.replace("_"," ")}</div>
            {props.children}
        </section>
    )
}

export default Gallery;