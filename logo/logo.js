// DOM manipulation
(function logo_main() {

    const main = document.getElementById("main");
    const start_animation = document.getElementById("start_animation");
    const span_logo = document.getElementById("span_logo");

    function load(element) {
        setTimeout(() => {
            element.style.opacity = 1;
        }, 500);

    }

    document.body.onload = load(span_logo);

    start_animation.addEventListener("click", () => {
        setTimeout(() => {
            start_animation.style.opacity = 0;

        }, 100);
        setTimeout(() => {
            start_animation.style.display = "none";
            main.style.opacity = 1;
        }, 101);
    });

}());

// gallery components
import { add_gallery_component } from './gallery.js';

(function gallery() {

    let stix_0 = {
        contentIdentity: 'stix_0',
        title: 'light',
        className: 'fractal_stix',
        color: 'rgb(100,130,150)',
        background: 'rgb(240,240,240)',
        fontFamily: "'Lobster', cursive",
        fontSize: '20px',
        parentId: 'gallery'
    }

    add_gallery_component({ ...stix_0 });

    let stix_1 = {
        contentIdentity: 'stix_1',
        title: 'numbers',
        className: 'molecular_stix',
        color: 'rgb(100,130,150)',
        background: 'rgb(240,240,240)',
        fontFamily: "'Lobster', cursive",
        fontSize: '20px',
        parentId: 'gallery'
    }

    add_gallery_component({ ...stix_1 });

    let stix_2 = {
        contentIdentity: 'stix_2',
        title: 'love',
        className: 'molecular_stix',
        color: 'rgb(100,130,150)',
        background: 'rgb(240,240,240)',
        fontFamily: "'Lobster', cursive",
        fontSize: '20px',
        parentId: 'gallery'
    }

    add_gallery_component({ ...stix_2 });

    let stix_3 = {
        contentIdentity: 'stix_3',
        title: '42',
        className: 'fractal_stix',
        color: 'rgb(100,130,150)',
        background: 'rgb(240,240,240)',
        fontFamily: "'Lobster', cursive",
        fontSize: '20px',
        parentId: 'gallery'
    }

    add_gallery_component({ ...stix_3 });

    let stix_4 = {
        contentIdentity: 'stix_4',
        title: 'growth',
        className: 'molecular_stix',
        color: 'rgb(100,130,150)',
        background: 'rgb(240,240,240)',
        fontFamily: "'Lobster', cursive",
        fontSize: '20px',
        parentId: 'gallery'
    }

    add_gallery_component({ ...stix_4 });

    let stix_5 = {
        contentIdentity: 'stix_5',
        title: 'bloom',
        className: 'molecular_stix',
        color: 'rgb(100,130,150)',
        background: 'rgb(240,240,240)',
        fontFamily: "'Lobster', cursive",
        fontSize: '20px',
        parentId: 'gallery'
    }

    add_gallery_component({ ...stix_5 });

}());

// definition and styling of all graphieros SVGs
import { linear, fractal, molecular, callifractal } from '../graphieros0.2.js';

(function graphieros() {

    let start_animation = {
        section: 'start_animation',
        sequence: 'nmo ka tae',
        colors: [240, 240, 235],
        border: '20px solid rgb(230,230,225)',
        borderRadius: '100%',
    }

    molecular({ ...start_animation });

    let callifractal_stix_0 = {
        section : 'stix_0',
        sequence: 'zw-wd-dz-qs-se-xs',
        svgSize: 160,
        background: 'white',
        colors: [100,130,150],
        border: '2px solid rgb(100,130,150)'
    }

    callifractal({ ...callifractal_stix_0 });

    let molecular_stix_1 = {
        section: 'stix_1',
        sequence: 'sro kfa du srei ktu foi ksi',
        size: 160,
        colors: [255,255,255],
        strokeWidth: '',
        background: [100,130,150],
        border: '2px solid rgb(255,255,255)',
        borderRadius: '100%'
    }

    molecular({ ...molecular_stix_1 });

    let molecular_stix_2 = {
        section: 'stix_2',
        sequence: 'mea sa kme',
        size: 160,
        colors: [100,130,150],
        strokeWidth: '',
        background: [255,255,255],
        border: '2px solid rgb(100,130,150)',
        borderRadius: '100%'
    }

    molecular({ ...molecular_stix_2 });

    let callifractal_stix_3 = {
        section : 'stix_3',
        sequence: 'zw-wx-xe-ez wz-zd',
        svgSize: 160,
        background: 'rgb(100,130,150)',
        colors: [255,255,255],
        light: true,
        border: '2px solid white',
    }

    callifractal({ ...callifractal_stix_3 });

    let molecular_stix_4 = {
        section: 'stix_4',
        sequence: 'hea blea kto skai',
        size: 160,
        colors: [100,130,150],
        strokeWidth: '',
        background: [255,255,255],
        border: '2px solid rgb(100,130,150)',
        borderRadius: '100%'
    }

    molecular({ ...molecular_stix_4 });

    let callifractal_stix_5 = {
        section : 'stix_5',
        sequence: 'zq-qx-ed-dw',
        svgSize: 160,
        background: 'rgb(100,130,150)',
        colors: [255,255,255],
        light: true,
        border: '2px solid white',
    }

    callifractal({ ...callifractal_stix_5 });

}());
