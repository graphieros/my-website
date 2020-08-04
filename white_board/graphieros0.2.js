/*graphieros.js library 1.0
created by Alec Lloyd Probert
2020
*/

//TODO
/*
include css responsive styling
*/

// //initial y coordinates
// let a = 50; //y_top
// let q = 128; //y_mid
// let w = 206; //y_bot

// //initial x glyph coordinates

// let l = 38; //x_left
// let lm = 83; //x_left_mid
// let m = 128; //x_mid
// let rm = 173; //x_right_mid
// let r = 218; //x_right

import { a, q, w, l, lm, m, rm, r, graphieros_dictionnary } from './graphieros_dictionnary.js';


function linear({ section, container, size = 50, color }) {
    let [red, green, blue] = color;
    // console.log(color);
    red = red || 100;
    green = green || 100;
    blue = blue || 100;
    // console.log(section, container);
    const main_section = document.getElementById(section);
    let adjust = size / 2.631578947368421;

    const _p = `<path style="stroke-width:10px;stroke-linecap:round;stroke-linejoin:round;fill:none;" d="M `;
    const p_ = '"/>';

    let glyph_color = `rgb(${red},${green},${blue})`;

    let glyph_database = graphieros_dictionnary.slice(0);

    const xmlns = "http://www.w3.org/2000/svg";

    const graphieros_text = document.getElementsByClassName(container);

    (function process_text_to_glyphs() {


        for (let i = 0; i < graphieros_text.length; i += 1) {

            graphieros_text[i].style.display = "none";

            let svg_paragraph = document.createElementNS(xmlns, "svg");

            svg_paragraph.style.width = `${size}px`;
            svg_paragraph.style.background = "transparent";
            svg_paragraph.style.stroke = glyph_color;
            svg_paragraph.style.strokeLinejoin = "round";
            svg_paragraph.style.strokeLinecap = "round";
            svg_paragraph.style.fill = "none";

            let rebuilt_glyphs_library = [];
            let one_array = graphieros_text[i].innerHTML;
            let one_array_with_spaces = one_array.split(" ");
            let one_array_without_spaces = [];

            for (let j = 0; j < one_array_with_spaces.length; j += 1) {

                function there_is_some_text() {
                    return one_array_with_spaces[j];
                }

                if (there_is_some_text()) {
                    one_array_without_spaces.push(one_array_with_spaces[j]);
                }
            }

            let words_lengths = [];

            for (let j = 0; j < one_array_without_spaces.length; j += 1) {


                let one_word_raw_list = one_array_without_spaces[j].split("-");
                let rebuilt_word = [];

                words_lengths.push(one_word_raw_list.length);

                for (let k = 0; k < one_word_raw_list.length; k += 1) {

                    let one_rebuilt_phono = `_${one_word_raw_list[k]}`;

                    if (one_rebuilt_phono !== "_") {

                        rebuilt_word.push(one_rebuilt_phono);

                    }

                }

                rebuilt_glyphs_library.push(rebuilt_word);

            }

            let incr = 0;
            rebuilt_glyphs_library.forEach(glyph_array => {

                let center_incr = 0;

                glyph_array.forEach((glyph, n) => {

                    glyph_database.forEach(db_element => {

                        function this_phono_is_in_database() {
                            return glyph === db_element.name;
                        }

                        if (this_phono_is_in_database()) {

                            let g = document.createElementNS(xmlns, "g");
                            g.setAttributeNS(null, "class", "word");
                            g.id = db_element.name;
                            let db_paths = db_element.path;

                            db_paths.forEach((db_path) => {

                                let new_path = [];

                                db_path.forEach((coordinate, i) => {

                                    if (i % 2 === 1) {
                                        coordinate += incr;
                                        new_path.push(coordinate);
                                    }
                                    else {
                                        new_path.push(coordinate);
                                    }

                                });

                                g.innerHTML += `${_p}${new_path}${p_}$`;
                                svg_paragraph.appendChild(g);

                            });

                        }
                    });

                    incr += 200;
                    center_incr += 200;
                    svg_paragraph.setAttributeNS(null, "viewBox", `0 0 260 ${(incr + 60)}`);

                });
            });

            let memory = [];

            words_lengths.forEach((word, i) => {

                let x = 128;
                let y = 128;
                let y_start;

                if (i === 0) {
                    y_start = y + (i * word);
                }
                else {
                    y_start = memory.pop() + 200;
                }

                let y_end = y_start + ((word - 1) * 200);
                memory.push(y_end);
                let g = document.createElementNS(xmlns, "g");
                g.setAttributeNS(null, "class", "link");
                g.innerHTML += `${_p}${x} ${y_start},${x} ${y_end}${p_}`;
                svg_paragraph.appendChild(g);

            });

            let svg_wrapper = document.createElement("DIV");
            svg_wrapper.style.boxSizing = "border-box";
            svg_wrapper.className = `svg_paragraph_${section}`;
            svg_wrapper.appendChild(svg_paragraph);
            main_section.appendChild(svg_wrapper);

            main_section.style.display = "grid";
            main_section.style.justifyItems = "center";
            // grid-class-10
            main_section.style.gridTemplateColumns = `repeat(${graphieros_text.length},1fr)`;
            main_section.style.width = `${size * (graphieros_text.length)}px`;
        }

    }());



    let all_paragraphs = document.getElementsByClassName(`svg_paragraph_${section}`);

    for (let i = 0; i < all_paragraphs.length; i += 1) {

        let one_paragraph = all_paragraphs[i];
        if (i % 2 === 1) {
            one_paragraph.style.marginTop = `${adjust}px`;
        }
    }

};
export { linear };

function fractal(section, f, size, r, g, b, light) {

    const xmlns = "http://www.w3.org/2000/svg";
    let svg_width = size * 2.5;
    let svg_height = size * 2.5;
    const svg_container = document.getElementById(section);
    const raw_content = document.getElementById(f);
    raw_content.style.display = "none";

    let _p = `<path`;
    let _p_ = `d="M`;
    let p_ = `"/>`;

    const PHI = 1.61803398875;
    let glyph_size = svg_width / 2;
    let stk = glyph_size / 10;

    svg_container.style.height = `${size}px`;
    svg_container.style.width = `${size}px`;

    let svg_size = size;

    let svg_output = document.createElementNS(xmlns, "svg");
    svg_output.setAttributeNS(null, "viewBox", `0 0 ${svg_width} ${svg_height}`);
    svg_output.setAttributeNS(null, "stroke-width", stk);

    let R = r;
    let G = g;
    let B = b;

    let glyph_color = `rgb(${R},${G},${B})`;

    let Xcenter = svg_width / 2;
    let Ycenter = svg_width / 2;
    let color_fade = 1.333;
    let proportion = 2;


    function fractalize() {
        size /= proportion;
        glyph_size /= proportion;
        stk /= proportion;

        if (light === 0 || light === null) {
            R /= color_fade;
            G /= color_fade;
            B /= color_fade;
        } else {
            R *= color_fade;
            G *= color_fade;
            B *= color_fade;
        }

        glyph_color = `rgb(${R},${G},${B})`;
    }


    let all_glyphs = raw_content.innerHTML.split(" ");

    all_glyphs.forEach(glyph => {

        let store = [];
        let pure_content = glyph.split("-");

        let xx = Math.round((Xcenter + size * Math.cos(1 * 2 * Math.PI / 6)) * 100) / 100;
        let xy = Math.round((Ycenter + size * Math.sin(1 * 2 * Math.PI / 6)) * 100) / 100;
        let wx = Math.round((Xcenter + size * Math.cos(2 * 2 * Math.PI / 6)) * 100) / 100;
        let wy = Math.round((Ycenter + size * Math.sin(2 * 2 * Math.PI / 6)) * 100) / 100;
        let qx = Math.round((Xcenter + size * Math.cos(3 * 2 * Math.PI / 6)) * 100) / 100;
        let qy = Math.round((Ycenter + size * Math.sin(3 * 2 * Math.PI / 6)) * 100) / 100;
        let zx = Math.round((Xcenter + size * Math.cos(4 * 2 * Math.PI / 6)) * 100) / 100;
        let zy = Math.round((Ycenter + size * Math.sin(4 * 2 * Math.PI / 6)) * 100) / 100;
        let ex = Math.round((Xcenter + size * Math.cos(5 * 2 * Math.PI / 6)) * 100) / 100;
        let ey = Math.round((Ycenter + size * Math.sin(5 * 2 * Math.PI / 6)) * 100) / 100;
        let dx = Math.round((Xcenter + size * Math.cos(6 * 2 * Math.PI / 6)) * 100) / 100;
        let dy = Math.round((Ycenter + size * Math.sin(6 * 2 * Math.PI / 6)) * 100) / 100;

        function coordinate(a, b) {
            return `${a} ${b}`;
        }

        let x = [xx, xy];
        let X = coordinate(x[0], x[1]);
        let w = [wx, wy];
        let W = coordinate(w[0], w[1]);
        let q = [qx, qy];
        let Q = coordinate(q[0], q[1]);
        let z = [zx, zy];
        let Z = coordinate(z[0], z[1]);
        let e = [ex, ey];
        let E = coordinate(e[0], e[1]);
        let d = [dx, dy];
        let D = coordinate(d[0], d[1]);
        let s = [Xcenter, Ycenter];
        let S = coordinate(s[0], s[1]);

        let hex_dots = [X, W, Q, Z, E, D, S];

        pure_content.forEach(cord => {
            cord = cord.replace(/[s]/g, ` ${S},`);
            cord = cord.replace(/[z]/g, ` ${Z},`);
            cord = cord.replace(/[e]/g, ` ${E},`);
            cord = cord.replace(/[d]/g, ` ${D},`);
            cord = cord.replace(/[x]/g, ` ${X},`);
            cord = cord.replace(/[w]/g, ` ${W},`);
            cord = cord.replace(/[q]/g, ` ${Q},`);
            store.push(cord);
        });

        store.forEach(pth => {
            let g = document.createElementNS(xmlns, "g");
            g.innerHTML += `${_p} class="test" stroke-width="${stk}"style="stroke:${glyph_color}; stroke-linejoin: round; stroke-linecap:round; fill:none;"${_p_}${pth}${p_}`;
            svg_output.appendChild(g);
        });

        hex_dots.forEach(dot => {
            let g = document.createElementNS(xmlns, "g");
            g.innerHTML += `${_p} class="test" stroke-width="${stk}"style="stroke:${glyph_color}; stroke-linejoin: round; stroke-linecap:round; fill:none;"${_p_}${dot},${dot}${p_}`;
            svg_output.appendChild(g);
        })

        fractalize();

    });

    svg_container.appendChild(svg_output);

}
export { fractal };

function molecular(section, mol, size, red, green, blue) {

    const main_section = document.getElementById(section);
    const xmlns = "http://www.w3.org/2000/svg";
    const _p = `<path style="stroke-width:8px;stroke-linecap:round;stroke-linejoin:round;fill:none;" d="M `;
    const p_ = '"/>';

    let R = red;
    let G = green;
    let B = blue;
    let glyph_color = `rgb(${R},${G},${B})`;

    let svg = document.createElementNS(xmlns, "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 512 512")
    svg.style.width = `${size}px`;
    svg.style.background = "rgb()237,237,237)";
    svg.style.stroke = glyph_color;
    svg.style.strokeLinejoin = "round";
    svg.style.strokeLinecap = "round";
    svg.style.fill = "none";

    let glyph_database = graphieros_dictionnary.slice(0);

    const molecule_data = document.getElementById(mol);
    molecule_data.style.display = "none";
    let molecule_array = molecule_data.innerHTML.split(" ");
    let final_array = [];

    molecule_array.forEach(phono => {
        phono = `_${phono}`;
        final_array.push(phono);
    });

    let central_glyph = final_array.shift();

    function make_smaller(arr, shrinx, disp, moveX, moveY) {
        let trans = [];
        arr.forEach((x, n) => {
            x /= shrinx;
            if (n % 2 === 1) {
                x += moveY;
                trans.push(x);
            } else {
                x += moveX;
                trans.push(x);
            }
        });
        disp.innerHTML += `${_p}${trans}${p_}`;
        svg.appendChild(disp);
    }

    function resize_and_draw(arr, inc, disp) {
        let trans = [];
        arr.forEach(x => {
            x += inc;
            trans.push(x);
        });
        disp.innerHTML += `${_p}${trans}${p_}`;
        svg.appendChild(disp);
    }



    glyph_database.forEach(glyph => {
        if (glyph.name === central_glyph) {
            let g = document.createElementNS(xmlns, "g");

            glyph.path.forEach(path => {
                resize_and_draw(path, 128, g);
            });
        }
    });

    if (final_array.length === 1) {
        final_array.forEach((side_glyph, i) => {
            glyph_database.forEach(glyph => {
                if (glyph.name === side_glyph) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 125, 75);
                    });
                }
            });
        });

    } else if (final_array.length === 2) {
        final_array.forEach((side_glyph, i) => {
            glyph_database.forEach(glyph => {
                if (glyph.name === side_glyph && i === 0) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 125, 75);
                    });
                } else if (glyph.name === side_glyph && i === 1) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 260, 309);
                    });
                }
            });
        });
    } else if (final_array.length === 3) {
        final_array.forEach((side_glyph, i) => {
            glyph_database.forEach(glyph => {
                if (glyph.name === side_glyph && i === 0) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 125, 75);
                    });
                } else if (glyph.name === side_glyph && i === 1) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 327, 192);
                    });
                } else if (glyph.name === side_glyph && i === 2) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 125, 309);
                    });
                }
            });
        });
    } else if (final_array.length === 4) {
        final_array.forEach((side_glyph, i) => {
            glyph_database.forEach(glyph => {
                if (glyph.name === side_glyph && i === 0) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 125, 75);
                    });
                } else if (glyph.name === side_glyph && i === 1) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 260, 75);
                    });
                } else if (glyph.name === side_glyph && i === 2) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 260, 309);
                    });
                } else if (glyph.name === side_glyph && i === 3) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 125, 309);
                    });
                }
            });
        });
    } else if (final_array.length === 5) {
        final_array.forEach((side_glyph, i) => {
            glyph_database.forEach(glyph => {
                if (glyph.name === side_glyph && i === 0) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 125, 75);
                    });
                } else if (glyph.name === side_glyph && i === 1) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 260, 75);
                    });
                } else if (glyph.name === side_glyph && i === 2) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 327, 192);
                    });
                } else if (glyph.name === side_glyph && i === 3) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 260, 309);
                    });
                } else if (glyph.name === side_glyph && i === 4) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 125, 309);
                    });
                }
            });
        });

    } else if (final_array.length === 6) {
        final_array.forEach((side_glyph, i) => {
            glyph_database.forEach(glyph => {
                if (glyph.name === side_glyph && i === 0) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 125, 75);
                    });
                } else if (glyph.name === side_glyph && i === 1) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 260, 75);
                    });
                } else if (glyph.name === side_glyph && i === 2) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 327, 192);
                    });
                } else if (glyph.name === side_glyph && i === 3) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 260, 309);
                    });
                } else if (glyph.name === side_glyph && i === 4) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 125, 309);
                    });
                } else if (glyph.name === side_glyph && i === 5) {
                    let g = document.createElementNS(xmlns, "g");
                    glyph.path.forEach(path => {
                        make_smaller(path, 2, g, 57, 192);
                    });
                }
            });
        });
    } else if (final_array.length > 6) {
        console.error(`__________________________________________________________________\n\n ERREUR: Le nombre de glyphes autorisés est dépassé: ${final_array.length} au lieu de 6\n  __________________________________________________________________`);
    }





    main_section.appendChild(svg);

}
export { molecular };

function calligraphic({ sect, coords, svgSize, size, colors, radius, background }) {

    let [red, green, blue] = colors;

    size = size || 50;
    red = red || 200;
    green = green || 200;
    blue = blue || 200;
    radius = radius || size / 5.5;
    background = background || "transparent";
    svgSize = svgSize || 100;

    let glyph_color = `rgb(${red},${green},${blue})`;
    const section = document.getElementById(sect);
    const coordinates = document.getElementById(coords);
    coordinates.style.display = "none";

    const xmlns = "http://www.w3.org/2000/svg";
    const _p = `<path style="stroke-width:2px;stroke-linecap:round;stroke-linejoin:round;" d="M `;
    const p_ = '"/>';

    const SVG = document.createElementNS(xmlns, "svg");
    SVG.setAttributeNS(null, "viewBox", `0 0 260 260`);
    SVG.style.background = background;
    SVG.setAttributeNS(null, "height", svgSize);
    SVG.setAttributeNS(null, "width", svgSize);

    let raw_data = coordinates.innerHTML;
    let lines = raw_data.split(" ");

    (function translate_data_to_coordinates() {

        /* 

         d2 d3
        d1 d0 d4
         d6 d5

        */

        let d0 = [m, q],
            d1 = [l, q],
            d2 = [lm, a],
            d3 = [rm, a],
            d4 = [r, q],
            d5 = [rm, w],
            d6 = [lm, w];

        let newRed = red,
            newGreen = green,
            newBlue = blue;

        function fractalize() {

            d1[0] += ((m - d1[0]) / 2);
            d4[0] -= ((d4[0] - m) / 2);
            d2[0] += ((m - d2[0]) / 2);
            d2[1] = q - ((q - d2[1]) / 2);
            d3[0] -= ((d3[0] - m) / 2);
            d3[1] = q + ((d3[1] - q) / 2);
            d5[0] -= ((d5[0] - m) / 2);
            d5[1] = q - ((q - d5[1]) / 2);
            d6[0] += ((m - d6[0]) / 2);
            d6[1] = q - ((q - d6[1]) / 2);

            radius /= 2;
            straight_deviation /= 2;
            x_sideShift /= 2;
            y_sideShift /= 2;
            x_equShift /= 2;
            y_equShift /= 2;

            colors[0] /= 1.3;
            colors[1] /=1.3;
            colors[2] /= 1.3;

            stroke_defs();

        }

        function draw(element) {
            let g = document.createElementNS(xmlns, "g");
            g.innerHTML += element;
            let child = g.childNodes;
            child[0].setAttributeNS(null, "fill", `rgb(${colors})`);
            SVG.appendChild(g);
        }

        let straight_deviation = size * 0.18;
        let x_sideShift = size * 0.16;
        let y_sideShift = size * 0.09;
        let x_equShift = size * 0.1;
        let y_equShift = size * 0.15;

        let S_d0_d1,
            S_d1_d4,
            S_d0_d2,
            S_d2_d5,
            S_d0_d3,
            S_d3_d6,
            S_d0_d4,
            S_d0_d5,
            S_d0_d6,
            S_d1_d2,
            S_d2_d3,
            S_d3_d4,
            S_d4_d5,
            S_d5_d6,
            S_d6_d1,
            S_d2_d6,
            S_d3_d5,
            S_d1_d3,
            S_d4_d6,
            S_d2_d4,
            S_d5_d1;

        // strokes definition
        function stroke_defs() {
            S_d0_d1 = `${_p}
                        ${d0[0]} ${d0[1] + straight_deviation}, 
                        ${d0[0]} ${d0[1] - straight_deviation},
                        ${d1[0]} ${d1[1] + straight_deviation},
                        ${d1[0]} ${d1[1] - straight_deviation} 
                        Z${p_}`;

            S_d1_d4 = `${_p}
                        ${d1[0]} ${d1[1] + straight_deviation}, 
                        ${d1[0]} ${d1[1] - straight_deviation},
                        ${d4[0]} ${d4[1] + straight_deviation},
                        ${d4[0]} ${d4[1] - straight_deviation} 
                        Z${p_}`;

            S_d0_d2 = `${_p}
                        ${d0[0] - x_sideShift} ${d0[1] + y_sideShift},
                        ${d0[0] + x_sideShift} ${d0[1] - y_sideShift},
                        ${d2[0] - x_sideShift} ${d2[1] + y_sideShift},
                        ${d2[0] + x_sideShift} ${d2[1] - y_sideShift}
                        Z${p_}`;

            S_d2_d5 = `${_p}
                        ${d2[0] - x_sideShift} ${d2[1] + y_sideShift},
                        ${d2[0] + x_sideShift} ${d2[1] - y_sideShift},
                        ${d5[0] - x_sideShift} ${d5[1] + y_sideShift},
                        ${d5[0] + x_sideShift} ${d5[1] - y_sideShift}
                        Z${p_}`;

            S_d0_d3 = `${_p}
                        ${d0[0] + x_sideShift} ${d0[1] + y_sideShift},
                        ${d0[0] - x_sideShift} ${d0[1] - y_sideShift},
                        ${d3[0] + x_sideShift} ${d3[1] + y_sideShift},
                        ${d3[0] - x_sideShift} ${d3[1] - y_sideShift}
                        Z${p_}`;

            S_d3_d6 = `${_p}
                        ${d3[0] + x_sideShift} ${d3[1] + y_sideShift},
                        ${d3[0] - x_sideShift} ${d3[1] - y_sideShift},
                        ${d6[0] + x_sideShift} ${d6[1] + y_sideShift},
                        ${d6[0] - x_sideShift} ${d6[1] - y_sideShift}
                        Z${p_}`;

            S_d0_d4 = `${_p}
                        ${d0[0]} ${d0[1] + straight_deviation}, 
                        ${d0[0]} ${d0[1] - straight_deviation},
                        ${d4[0]} ${d4[1] + straight_deviation},
                        ${d4[0]} ${d4[1] - straight_deviation} 
                        Z${p_}`;

            S_d0_d5 = `${_p}
                        ${d0[0] - x_sideShift} ${d0[1] + y_sideShift},
                        ${d0[0] + x_sideShift} ${d0[1] - y_sideShift},
                        ${d5[0] - x_sideShift} ${d5[1] + y_sideShift},
                        ${d5[0] + x_sideShift} ${d5[1] - y_sideShift}
                        Z${p_}`;

            S_d0_d6 = `${_p}
                        ${d0[0] + x_sideShift} ${d0[1] + y_sideShift},
                        ${d0[0] - x_sideShift} ${d0[1] - y_sideShift},
                        ${d6[0] + x_sideShift} ${d6[1] + y_sideShift},
                        ${d6[0] - x_sideShift} ${d6[1] - y_sideShift}
                        Z${p_}`;

            S_d1_d2 = `${_p}
                        ${d1[0] + x_sideShift} ${d1[1] + y_sideShift},
                        ${d1[0] - x_sideShift} ${d1[1] - y_sideShift},
                        ${d2[0] + x_sideShift} ${d2[1] + y_sideShift},
                        ${d2[0] - x_sideShift} ${d2[1] - y_sideShift}
                        Z${p_}`;

            S_d2_d3 = `${_p}
                        ${d2[0]} ${d2[1] + straight_deviation}, 
                        ${d2[0]} ${d2[1] - straight_deviation},
                        ${d3[0]} ${d3[1] + straight_deviation},
                        ${d3[0]} ${d3[1] - straight_deviation} 
                        Z${p_}`;

            S_d3_d4 = `${_p}
                        ${d3[0] - x_sideShift} ${d3[1] + y_sideShift},
                        ${d3[0] + x_sideShift} ${d3[1] - y_sideShift},
                        ${d4[0] - x_sideShift} ${d4[1] + y_sideShift},
                        ${d4[0] + x_sideShift} ${d4[1] - y_sideShift}
                        Z${p_}`;

            S_d4_d5 = `${_p}
                        ${d4[0] + x_sideShift} ${d4[1] + y_sideShift},
                        ${d4[0] - x_sideShift} ${d4[1] - y_sideShift},
                        ${d5[0] + x_sideShift} ${d5[1] + y_sideShift},
                        ${d5[0] - x_sideShift} ${d5[1] - y_sideShift}
                        Z${p_}`;

            S_d5_d6 = `${_p}
                        ${d5[0]} ${d5[1] + straight_deviation}, 
                        ${d5[0]} ${d5[1] - straight_deviation},
                        ${d6[0]} ${d6[1] + straight_deviation},
                        ${d6[0]} ${d6[1] - straight_deviation} 
                        Z${p_}`;

            S_d6_d1 = `${_p}
                        ${d6[0] - x_sideShift} ${d6[1] + y_sideShift},
                        ${d6[0] + x_sideShift} ${d6[1] - y_sideShift},
                        ${d1[0] - x_sideShift} ${d1[1] + y_sideShift},
                        ${d1[0] + x_sideShift} ${d1[1] - y_sideShift}
                        Z${p_}`;

            S_d2_d6 = `${_p}
                        ${d2[0] + straight_deviation} ${d2[1]},
                        ${d2[0] - straight_deviation} ${d2[1]},
                        ${d6[0] + straight_deviation} ${d6[1]},
                        ${d6[0] - straight_deviation} ${d6[1]}
                        Z${p_}`;

            S_d3_d5 = `${_p}
                        ${d3[0] + straight_deviation} ${d3[1]},
                        ${d3[0] - straight_deviation} ${d3[1]},
                        ${d5[0] + straight_deviation} ${d5[1]},
                        ${d5[0] - straight_deviation} ${d5[1]}
                        Z${p_}`;

            S_d1_d3 = `${_p}
                        ${d1[0] - x_equShift} ${d1[1] - y_equShift},
                        ${d1[0] + x_equShift} ${d1[1] + y_equShift},
                        ${d3[0] - x_equShift} ${d3[1] - y_equShift},
                        ${d3[0] + x_equShift} ${d3[1] + y_equShift}
                        Z${p_}`;

            S_d4_d6 = `${_p}
                        ${d4[0] - x_equShift} ${d4[1] - y_equShift},
                        ${d4[0] + x_equShift} ${d4[1] + y_equShift},
                        ${d6[0] - x_equShift} ${d6[1] - y_equShift},
                        ${d6[0] + x_equShift} ${d6[1] + y_equShift}
                        Z${p_}`;

            S_d2_d4 = `${_p}
                        ${d2[0] + x_equShift} ${d2[1] - y_equShift},
                        ${d2[0] - x_equShift} ${d2[1] + y_equShift},
                        ${d4[0] + x_equShift} ${d4[1] - y_equShift},
                        ${d4[0] - x_equShift} ${d4[1] + y_equShift}
                        Z${p_}`;

            S_d5_d1 = `${_p}
                        ${d5[0] + x_equShift} ${d5[1] - y_equShift},
                        ${d5[0] - x_equShift} ${d5[1] + y_equShift},
                        ${d1[0] + x_equShift} ${d1[1] - y_equShift},
                        ${d1[0] - x_equShift} ${d1[1] + y_equShift}
                        Z${p_}`;
        };

        stroke_defs();

        lines.forEach(line => {

            let circle0 = document.createElementNS(xmlns, "circle");
            let circle1 = document.createElementNS(xmlns, "circle");
            let circle2 = document.createElementNS(xmlns, "circle");
            let circle3 = document.createElementNS(xmlns, "circle");
            let circle4 = document.createElementNS(xmlns, "circle");
            let circle5 = document.createElementNS(xmlns, "circle");
            let circle6 = document.createElementNS(xmlns, "circle");

            (function circle_parameters() {
                circle0.setAttributeNS(null, "cx", d0[0]);
                circle0.setAttributeNS(null, "cy", d0[1]);
                circle0.setAttributeNS(null, "r", radius);
                circle0.setAttributeNS(null, "fill", `rgb(${colors})`);


                circle1.setAttributeNS(null, "cx", d1[0]);
                circle1.setAttributeNS(null, "cy", d1[1]);
                circle1.setAttributeNS(null, "r", radius);
                circle1.setAttributeNS(null, "fill", `rgb(${colors})`);


                circle2.setAttributeNS(null, "cx", d2[0]);
                circle2.setAttributeNS(null, "cy", d2[1]);
                circle2.setAttributeNS(null, "r", radius);
                circle2.setAttributeNS(null, "fill", `rgb(${colors})`);


                circle3.setAttributeNS(null, "cx", d3[0]);
                circle3.setAttributeNS(null, "cy", d3[1]);
                circle3.setAttributeNS(null, "r", radius);
                circle3.setAttributeNS(null, "fill", `rgb(${colors})`);


                circle4.setAttributeNS(null, "cx", d4[0]);
                circle4.setAttributeNS(null, "cy", d4[1]);
                circle4.setAttributeNS(null, "r", radius);
                circle4.setAttributeNS(null, "fill", `rgb(${colors})`);


                circle5.setAttributeNS(null, "cx", d5[0]);
                circle5.setAttributeNS(null, "cy", d5[1]);
                circle5.setAttributeNS(null, "r", radius);
                circle5.setAttributeNS(null, "fill", `rgb(${colors})`);


                circle6.setAttributeNS(null, "cx", d6[0]);
                circle6.setAttributeNS(null, "cy", d6[1]);
                circle6.setAttributeNS(null, "r", radius);
                circle6.setAttributeNS(null, "fill", `rgb(${colors})`);
            }());

            let plots = line.split("-");
            plots.forEach(plot => {
                if (plot === "sq" || plot === "qs") {
                    draw(S_d0_d1);
                }
                if (plot === "zs" || plot === "sz") {
                    draw(S_d0_d2);
                }
                if (plot === "se" || plot === "es") {
                    draw(S_d0_d3);
                }
                if (plot === "sd" || plot === "ds") {
                    draw(S_d0_d4);
                }
                if (plot === "sx" || plot === "xs") {
                    draw(S_d0_d5);
                }
                if (plot === "ws" || plot === "sw") {
                    draw(S_d0_d6);
                }
                if (plot === "qz" || plot === "zq") {
                    draw(S_d1_d2);
                }
                if (plot === "ze" || plot === "ez") {
                    draw(S_d2_d3);
                }
                if (plot === "ed" || plot === "de") {
                    draw(S_d3_d4);
                }
                if (plot === "dx" || plot === "xd") {
                    draw(S_d4_d5);
                }
                if (plot === "xw" || plot === "wx") {
                    draw(S_d5_d6);
                }
                if (plot === "wq" || plot === "qw") {
                    draw(S_d6_d1);
                }
                if (plot === "wz" || plot === "zw") {
                    draw(S_d2_d6);
                }
                if (plot === "ex" || plot === "xe") {
                    draw(S_d3_d5);
                }
                if (plot === "qe" || plot === "eq") {
                    draw(S_d1_d3);
                }
                if (plot === "wd" || plot === "dw") {
                    draw(S_d4_d6);
                }
                if (plot === "xq" || plot === "qx") {
                    draw(S_d5_d1);
                }
                if (plot === "zd" || plot === "dz") {
                    draw(S_d2_d4);
                }
                if (plot === "qd" || plot === "dq") {
                    draw(S_d1_d4);
                }
                if (plot === "zx" || plot === "xz") {
                    draw(S_d2_d5);
                }
                if (plot === "we" || plot === "ew") {
                    draw(S_d3_d6);
                }
            });

            SVG.appendChild(circle0);
            SVG.appendChild(circle1);
            SVG.appendChild(circle2);
            SVG.appendChild(circle3);
            SVG.appendChild(circle4);
            SVG.appendChild(circle5);
            SVG.appendChild(circle6);

            fractalize();
        });

    }());



    let wrapper = document.createElement("DIV");

    wrapper.appendChild(SVG);
    section.appendChild(wrapper);

}
export { calligraphic };