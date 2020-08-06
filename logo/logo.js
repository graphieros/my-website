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
import { stickers } from './stickers.js';

(function gallery() {

    stickers.forEach(sticker => {
        add_gallery_component({ ...sticker });
    });

}());


// definition and styling of all graphieros SVGs
import { linear, fractal, molecular, callifractal } from '../graphieros0.2.js';

(function graphieros() {

    function draw_sticker(params, func) {
        func(params);
    }

    draw_sticker({
        section: 'start_animation',
        sequence: 'nmo ka tae',
        colors: [240, 240, 235],
        border: '20px solid rgb(230,230,225)',
        borderRadius: '100%',
    }, molecular)

    draw_sticker({
        section: 'stix_0',
        sequence: 'zw-wd-dz-qs-se-xs',
        svgSize: 160,
        background: 'white',
        colors: [100, 130, 150],
        border: '2px solid rgb(100,130,150)'
    }, callifractal);


    draw_sticker({
        section: 'stix_1',
        sequence: 'sro kfa du srei ktu foi ksi',
        size: 160,
        colors: [255, 255, 255],
        strokeWidth: '',
        background: [100, 130, 150],
        border: '2px solid rgb(255,255,255)',
        borderRadius: '100%'
    }, molecular);

    draw_sticker({
        section: 'stix_2',
        sequence: 'mea sa kme',
        size: 160,
        colors: [100, 130, 150],
        strokeWidth: '',
        background: [255, 255, 255],
        border: '2px solid rgb(100,130,150)',
        borderRadius: '100%'
    }, molecular);

    draw_sticker({
        section: 'stix_3',
        sequence: 'zw-wx-xe-ez wz-zd',
        svgSize: 160,
        background: '',
        colors: [255, 255, 255],
        light: true,
        border: '2px solid white',
        dropShadow: '3px 3px 3px rgb(77,55,33)',
        wrapperBackground: 'radial-gradient(white,rgb(100,130,150))',
        backgroundRadius: '100%'
    }, callifractal);

    draw_sticker({
        section: 'stix_4',
        sequence: 'hea blea kto skai',
        size: 160,
        colors: [100, 130, 150],
        strokeWidth: '',
        background: [255, 255, 255],
        border: '2px solid rgb(100,130,150)',
        borderRadius: '100%'
    }, molecular);

    draw_sticker({
        section: 'stix_5',
        sequence: 'zq-qx-ed-dw',
        svgSize: 160,
        colors: [255, 255, 255],
        light: true,
        border: '2px solid white',
        dropShadow: '3px 3px 3px rgb(77,55,33)',
        wrapperBackground: 'radial-gradient(at top, white, rgb(100,130,150))',
        backgroundRadius: '100%'
    }, callifractal);

    draw_sticker({
        section: 'stix_6',
        sequence: 'mea hae to trea frey',
        size: 160,
        colors: [43, 74, 33],
        strokeWidth: '',
        background: [192, 224, 182],
        border: '2px solid rgb(255,255,255)',
        borderRadius: '100%'
    }, molecular);

    draw_sticker({
        section: 'stix_7',
        sequence: 'zw-wd-qx-ew qw-wx-zw-wd-we',
        svgSize: 160,
        colors: [192, 224, 182],
        light: true,
        intensity: 1.2,
        border: '2px solid white',
        dropShadow: '3px 3px 3px rgb(77,55,33)',
        wrapperBackground: 'radial-gradient(at top, white, rgb(43,74,33))',
        backgroundRadius: '100%'
    }, callifractal);

    draw_sticker({
        section: 'stix_8',
        sequence: 'ka ksea grae tvai',
        size: 160,
        colors: [192, 224, 182],
        strokeWidth: '',
        background: [43, 74, 33],
        border: '2px solid rgb(255,255,255)',
        borderRadius: '100%'
    }, molecular);

    draw_sticker({
        section: 'stix_9',
        sequence: 'ze-ed-eq-ex-ew zw-wd-dz-qs-se-sx',
        svgSize: 160,
        colors: [235, 188, 181],
        light: true,
        intensity: 1.6,
        border: '2px solid white',
        dropShadow: '3px 3px 3px rgb(77,55,33)',
        wrapperBackground: 'radial-gradient(at top, white, rgb(112,73,67))',
        backgroundRadius: '100%'
    }, callifractal);

    draw_sticker({
        section: 'stix_10',
        sequence: 'mea keo grey hea',
        size: 160,
        colors: [235, 188, 181],
        strokeWidth: '',
        background: [112, 73, 67],
        border: '2px solid rgb(255,255,255)',
        borderRadius: '100%'
    }, molecular);

    draw_sticker({
        section: 'stix_11',
        sequence: 'we-ex-xw-sq-dz qe-ws-sx',
        svgSize: 160,
        colors: [255, 255, 255],
        radius: 20,
        light: true,
        intensity: 1.6,
        border: '2px solid white',
        dropShadow: '3px 3px 3px rgb(77,55,33)',
        wrapperBackground: 'radial-gradient(at top, white, rgb(112,73,67))',
        backgroundRadius: '100%'
    }, callifractal);

    draw_sticker({
        section: 'stix_12',
        sequence: 'zx-ws-qe qw-we-dx-xz',
        svgSize: 160,
        colors: [20, 20, 20],
        radius: '',
        light: true,
        intensity: 30,
        border: '2px solid white',
        dropShadow: '',
        wrapperBackground: 'rgb(255,100,50)',
        backgroundRadius: '100%'
    }, callifractal);

    draw_sticker({
        section: 'stix_13',
        sequence: 'meama via kio tra',
        size: 160,
        colors: [1,1,1],
        strokeWidth: '20',
        background: [255, 100, 50],
        border: '2px solid rgb(255,255,255)',
        borderRadius: '100%'
    }, molecular);

    draw_sticker({
        section: 'stix_14',
        sequence: 'zq-qw-xd-de zq-qw-xd-de zq-qw-xd-de',
        svgSize: 160,
        colors: [20, 20, 20],
        radius: '10',
        light: false,
        intensity: 0,
        border: '2px solid white',
        dropShadow: '',
        wrapperBackground: 'rgb(255,100,50)',
        backgroundRadius: '100%'
    }, callifractal);


}());
