// import { graphieros } from './logo.js';

// Landing page animation

(function landing_animation() {

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

(function click_stickers() {

    const STICKERS = document.getElementsByClassName("stix");
    let stickers_list = [];

    for (let i = 0; i < STICKERS.length; i += 1) {
        stickers_list.push(STICKERS[i]);
    }

    const showcase = document.getElementById("showcase_0");
    const standard_laptop_sticker_container = document.getElementById("standard_laptop_sticker_container");

    stickers_list.forEach(sticker => {
        let sticker_svg = sticker.getElementsByTagName("svg");
        let svg_copy = sticker_svg[0].cloneNode(true);
        let original_id = sticker_svg[0].id;
        svg_copy.id = 'temp_svg';
        let svg_back_color = svg_copy.style.background;

        sticker.addEventListener('click', () => {
            let svg_to_delete = showcase.getElementsByTagName("svg")[0];

            if (svg_to_delete.id === 'temp_svg') {
                svg_to_delete.remove();
            }

            // hack to compensate the lack of background of callifractal SVGs due to the lazy use of filter for drop-shadow that doesn't show when the SVG background is not transparent:

            if (original_id === 'callifractal_stix_3' || original_id === 'callifractal_stix_5') {
                standard_laptop_sticker_container.style.background = 'radial-gradient(white,rgb(100,130,150))';
            } else if (original_id === 'callifractal_stix_7') {
                standard_laptop_sticker_container.style.background = 'radial-gradient(at top, white, rgb(43,74,33))';
            } else if (original_id === 'callifractal_stix_9' || original_id === 'callifractal_stix_11') {
                standard_laptop_sticker_container.style.background = 'radial-gradient(at top, white, rgb(112,73,67))';
            } else if (original_id === 'callifractal_stix_12' || original_id === 'callifractal_stix_14') {
                standard_laptop_sticker_container.style.background = 'rgb(255,100,50)';
            } else {
                standard_laptop_sticker_container.style.background = svg_back_color;
            }


            showcase.style.display = "grid";
            showcase.style.opacity = 1;
            standard_laptop_sticker_container.appendChild(svg_copy);
        });
    });

}());


(function modal_windows() {
    function quit_modal(btn, win) {
        btn = document.getElementById(btn);
        win = document.getElementById(win);

        btn.addEventListener('click', () => {
            win.style.opacity = 0;

            setTimeout(() => {
                win.style.display = "none";
                win.style.zIndex = 0;
            }, 500);
        });
    }

    quit_modal('quit_modal', 'showcase_0');
}());

