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
        svg_copy.id = 'temp_svg';

        sticker.addEventListener('click', () => {
            let svg_to_delete = showcase.getElementsByTagName("svg")[0];

            if (svg_to_delete.id === 'temp_svg') {
                svg_to_delete.remove();
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

