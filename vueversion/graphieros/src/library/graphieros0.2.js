/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/*graphieros.js library 1.0
created by Alec Lloyd Probert
2020
Special thanx to Thundree, friend & mentor
*/

import { a, q, w, l, lm, m, rm, r, graphieros_dictionnary } from './graphieros_dictionnary.js';

function linear({
    sequence,
    size,
    background,
    colors,
    padding,
    cartouche,
    border,
    boxShadow,
}) {

    let [red, green, blue] = colors;
    red = red || 100;
    green = green || 100;
    blue = blue || 100;
    size = size || 50;
    background = background || "transparent";
    padding = padding || 0;
    cartouche = cartouche || false;
    border = border || '0px solid transparent';
    boxShadow = boxShadow || 'none';

    const _p = `<path style="stroke-width:10px;stroke-linecap:round;stroke-linejoin:round;fill:none;" d="M `;
    const p_ = '"/>';

    let glyph_color = `rgb(${red},${green},${blue})`;

    let glyph_database = graphieros_dictionnary.slice(0);

    const xmlns = "http://www.w3.org/2000/svg";
    let svg_paragraph = document.createElementNS(xmlns, "svg");

    svg_paragraph.style.width = `${size}px`;
    svg_paragraph.style.stroke = glyph_color;
    svg_paragraph.style.strokeLinejoin = "round";
    svg_paragraph.style.strokeLinecap = "round";
    svg_paragraph.style.fill = "none";
    svg_paragraph.style.boxSizing = "border-box";
    svg_paragraph.style.paddingTop = `${padding}px`;
    svg_paragraph.style.paddingBottom = `${padding}px`;
    svg_paragraph.style.paddingRight = `${padding / 6}px`;
    svg_paragraph.style.paddingLeft = `${padding / 6}px`;
    svg_paragraph.style.background = background;
    svg_paragraph.style.border = border;
    svg_paragraph.style.boxShadow = boxShadow;

    if (cartouche === true) {
        svg_paragraph.style.borderRadius = `${size}px`;
    }

    let everyThing = [];
    everyThing = sequence.replace(/-/g, " ");
    everyThing = everyThing.split(" ");

    let rebuilt_glyphs_library = [];
    let one_array = sequence;
    let one_array_with_spaces = one_array.split(" ");
    let one_array_without_spaces = [];

    for (let j = 0; j < one_array_with_spaces.length; j += 1) {

        if (one_array_with_spaces[j]) {
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


        glyph_array.forEach((glyph, n) => {

            glyph_database.forEach(db_element => {

                if (glyph === db_element.name) {

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
            svg_paragraph.setAttributeNS(null, "viewBox", `0 0 260 ${(incr + 60)}`);
        });

        svg_paragraph.style.height = `${(everyThing.length + 1) * (size * 0.8)}px`;

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
    svg_wrapper.appendChild(svg_paragraph);
    return svg_wrapper.innerHTML;

}
export { linear };


function fractal({
    sequence,
    size,
    svgSize,
    colors,
    light,
    intensity
}) {

    svgSize = svgSize || 100;
    size = size || 100;
    light = light || null;
    let [r, g, b] = colors;
    r = r || 200;
    g = g || 200;
    b = b || 200;
    intensity = intensity || 1.3333;


    const xmlns = "http://www.w3.org/2000/svg";
    let svg_width = size * 2.5;
    let svg_height = size * 2.5;

    const raw_content = sequence;

    let _p = `<path`;
    let _p_ = `d="M`;
    let p_ = `"/>`;

    let glyph_size = svg_width / 2;
    let stk = glyph_size / 10;

    let svg_output = document.createElementNS(xmlns, "svg");
    svg_output.setAttributeNS(null, "viewBox", `0 0 ${svg_width} ${svg_height}`);
    svg_output.style.height = size;
    svg_output.style.width = size;
    svg_output.setAttributeNS(null, "stroke-width", stk);
    // svg_output.id = `fractal_${section}`;

    let R = r;
    let G = g;
    let B = b;

    let glyph_color = `rgb(${R},${G},${B})`;

    let Xcenter = svg_width / 2;
    let Ycenter = svg_width / 2;
    let proportion = 2;

    function fractalize() {
        size /= proportion;
        glyph_size /= proportion;
        stk /= proportion;

        if (light === 0 || light === null) {
            R /= intensity;
            G /= intensity;
            B /= intensity;
        } else {
            R *= intensity;
            G *= intensity;
            B *= intensity;
        }

        glyph_color = `rgb(${R},${G},${B})`;
    }

    let all_glyphs = raw_content.split(" ");

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
        });

        fractalize();

    });

    let svg_container = document.createElement("DIV");
    svg_container.style.display = "grid";
    svg_container.style.justifyItems = "center";
    svg_container.style.alignItems = "center";

    svg_container.appendChild(svg_output);

    return svg_container.innerHTML;

}
export { fractal };


function molecular({
    // section,
    sequence,
    size,
    colors,
    strokeWidth,
    background,
    border,
    borderRadius
}) {

    let [red, green, blue] = colors;
    red = red || 200;
    green = green || 200;
    blue = blue || 200;
    strokeWidth = Number(strokeWidth) || 8;
    background = `rgb(${background})` || "transparent";
    borderRadius = borderRadius || 0;
    border = border || '0px solid transparent';

    const xmlns = "http://www.w3.org/2000/svg";
    const _p = `<path style="stroke-width:${strokeWidth}px;stroke-linecap:round;stroke-linejoin:round;fill:none;" d="M `;
    const p_ = '"/>';

    let R = red;
    let G = green;
    let B = blue;
    let glyph_color = `rgb(${R},${G},${B})`;

    let svg = document.createElementNS(xmlns, "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 512 512");
    svg.style.width = `${size}px`;
    svg.style.height = `${size}px`;
    svg.style.background = background;
    svg.style.stroke = glyph_color;
    svg.style.borderRadius = borderRadius;
    svg.style.border = border;
    svg.style.strokeLinejoin = "round";
    svg.style.strokeLinecap = "round";
    svg.style.fill = "none";
    // svg.id = `molecular_${section}`;

    let glyph_database = graphieros_dictionnary.slice(0);

    const molecule_data = sequence;
    let molecule_array = molecule_data.split(" ");
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

    let backgroundDiv = document.createElement("DIV");
    backgroundDiv.appendChild(svg);

    return backgroundDiv.innerHTML;

}
export { molecular };


function callifractal({
    // section,
    sequence,
    svgSize,
    size,
    colors,
    radius,
    background,
    light,
    intensity,
    border,
    dropShadow,
    wrapperBackground,
    backgroundRadius,
    fit
}) {

    // let [red, green, blue] = colors;

    size = size || 50;

    // red = red || 200;
    // green = green || 200;
    // blue = blue || 200;

    radius = radius || size / 5.5;
    background = background || "transparent";
    svgSize = svgSize || 100;
    light = light || false;
    intensity = intensity || 1.3;
    sequence = sequence || [];
    fit = fit || false;
    border = border || '0px solid transparent';
    dropShadow = `drop-shadow(${dropShadow})` || 'none';
    wrapperBackground = wrapperBackground || 'transparent';
    backgroundRadius = backgroundRadius || '0px';

    // const SECTION = document.getElementById(section);
    const coordinates = sequence;

    const xmlns = "http://www.w3.org/2000/svg";
    const _p = `<path style="stroke-width:2px;stroke-linecap:round;stroke-linejoin:round;" d="M `;
    const p_ = '"/>';

    const SVG = document.createElementNS(xmlns, "svg");
    SVG.setAttributeNS(null, "viewBox", `0 0 260 260`);
    SVG.style.background = background;
    SVG.style.border = border;
    SVG.style.boxSizing = "border-box";
    SVG.setAttributeNS(null, "height", svgSize);
    SVG.setAttributeNS(null, "width", svgSize);
    SVG.style.filter = dropShadow;
    SVG.style.borderRadius = backgroundRadius;
    // SVG.id = sequence.replace(" ", "");

    let raw_data = coordinates;
    let lines = raw_data.split(" ");

    (function translate_sequence_to_coordinates() {

        /* hex coordinates

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
    }

    stroke_defs();

        function fractalize() {

            d1[0] += ((m - d1[0]) / 2);
            d2[0] += ((m - d2[0]) / 2);
            d2[1] = q - ((q - d2[1]) / 2);
            d3[0] -= ((d3[0] - m) / 2);
            d3[1] = q + ((d3[1] - q) / 2);
            d4[0] -= ((d4[0] - m) / 2);
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

            if (light === true) {
                colors[0] *= intensity;
                colors[1] *= intensity;
                colors[2] *= intensity;
            } else {
                colors[0] /= intensity;
                colors[1] /= intensity;
                colors[2] /= intensity;
            }

            stroke_defs();

        }

        function draw(element) {
            let g = document.createElementNS(xmlns, "g");
            g.innerHTML += element;
            let child = g.childNodes;
            child[0].setAttributeNS(null, "fill", `rgb(${colors})`);
            SVG.appendChild(g);
        }

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

                //TO DO : loop if( ['sq', 'ds'].includes(plot)) {} 

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
    wrapper.style.background = wrapperBackground;
    wrapper.style.borderRadius = backgroundRadius;
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";
    wrapper.style.display = "grid";
    wrapper.style.justifyItems = "center";
    wrapper.style.alignItems = "center";

    wrapper.appendChild(SVG);
    if (fit === true) {
        wrapper.style.marginTop = `-${svgSize / 2.35294117647}px`;
    }

    wrapper.appendChild(SVG);

    return wrapper.innerHTML;
    // SECTION.appendChild(wrapper);

}
export { callifractal };


function fastLine({
    sequence,
    width,
    colors
}) {

    //globals
    const XMLNS = "http://www.w3.org/2000/svg";
    const SVG = document.createElementNS(XMLNS, 'svg');
    const G = document.createElementNS(XMLNS, 'g');
    let STROKE_WIDTH = width || 10;
    colors = colors || [0, 0, 0];
    let GLYPH_HEIGHT = 156;
    let SVG_WIDTH = 256;
    let incrementX = 0;
    const ADDER = 200;
    let INCR = 200;
    let SPACE = 44;
    let X = 128;


    // almost pure functions

    function mySplit(arr, splitter) {
        return arr.split(splitter);
    }


    const concat = (string0, string1) => `${string1}${string0}`;

    const convertString = (sequence, split0, split1, conc) => {
        return mySplit(sequence, split0)
            .map(el => mySplit(el, split1))
            .map(arr => {
                return arr.map(el => el = concat(el, conc));
            });
    }


    const getOneGlyphCords = (glyph, database, incrY, incrX, oddIncr) => {
        INCR += ADDER;
        return database.filter(el => el.name === glyph)
            .map((entry, k) => k === 0 ? entry.path
                .map(cords => cords
                    .map((cord, i) => i % 2 === 1 ? cord + incrY + oddIncr : cord + incrX)) : entry.path
                        .map(cords => cords
                            .map((cord, i) => i % 2 === 1 ? cord + incrY : cord + incrX)));
    }



    const getAllCords = (array, database, incrX, oddIncr) => {
        return array.map(arr => arr.map(el => getOneGlyphCords(el, database, INCR, incrX, oddIncr)))
    }



    const populatePath = (array, classnm) => array
        .map(el => `<path class=${classnm} d='M ${el}'/>`)
        .toString()
        .replaceAll(',', ' ');


    const getWordCountAndLength = arr => {
        const output = [];
        mySplit(arr, ' ')
            .forEach(split => output
                .push(mySplit(split, '-').length));
        return output;
    }


    const buildLinks = (array, incrX, oddIncr) => {
        const output = [];
        let Y = 328;
        array.forEach((el, i) => {
            if (el > 1) {
                output.push([X + incrX, Y + oddIncr, X + incrX, Y + oddIncr + (((el - 1) * GLYPH_HEIGHT)) + (((el - 1) * SPACE))]);
                Y += (((el) * GLYPH_HEIGHT)) + (((el) * SPACE));
            } else {
                Y += (((el) * GLYPH_HEIGHT)) + (((el) * SPACE));
            }
        });
        return output;
    }


    // glyphs DOM mounting

    const DOM_paths = [];
    const DOM_lines = mySplit(sequence, ' / ');

    const renderGlyphs = (seq, incrX, oddIncr) => {
        const DOM_render_glyphs = getAllCords(convertString(seq, ' ', '-', '_'), graphieros_dictionnary, incrX, oddIncr);
        let DOM_links = [];

        DOM_links = buildLinks(getWordCountAndLength(seq), incrX, oddIncr);
        DOM_paths.push(populatePath(DOM_links, 'link'));

        DOM_render_glyphs.forEach(level0 => {
            level0.forEach(level1 => {
                level1.forEach(level2 => {
                    DOM_paths.push(populatePath(level2, 'glyph'));
                });
            });
        });
    }


    const allHeights = [];

    for (let i = 0; i < DOM_lines.length; i += 1) {

        let oddIncr;
        i % 2 === 1 ? oddIncr = 100 : oddIncr = 0;

        renderGlyphs(DOM_lines[i], incrementX, oddIncr);
        incrementX += 170;
        INCR = 200;
        oddIncr = 0;
        let wordsHeights = getWordCountAndLength(DOM_lines[i]).reduce((n0, n1) => n0 + n1);
        allHeights.push(wordsHeights);
    }

    if (DOM_lines.length === 1) {
        SVG_WIDTH += 70; //stupid hack
    }

    let maxHeight = Math.max(...allHeights);


    // SVG styling
    SVG.setAttributeNS(null, 'viewBox', `0 0 ${(SVG_WIDTH - 70) * DOM_lines.length} ${maxHeight * (GLYPH_HEIGHT + SPACE) + 550}`);
    SVG.setAttributeNS(null, 'height', '100%');
    SVG.setAttributeNS(null, 'width', '100%'); // adapt width to number of lines
    G.setAttributeNS(null, 'fill', 'none');
    G.setAttributeNS(null, 'stroke-linejoin', 'round');
    G.setAttributeNS(null, 'stroke-linecap', 'round');
    G.setAttributeNS(null, 'stroke-width', STROKE_WIDTH)// set width according to final size ?
    G.setAttributeNS(null, 'stroke', `rgb(${colors})`) // set color in parameter

    // final mounting
    G.innerHTML = DOM_paths;
    SVG.appendChild(G);

    let svg_wrapper = document.createElement("DIV");
    svg_wrapper.appendChild(SVG);
    return svg_wrapper.innerHTML;
}

export { fastLine };