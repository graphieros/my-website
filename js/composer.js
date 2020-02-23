(function molecularize() {

    const SVGWRAPPER = document.getElementById("IO_SVG");
    const sides = 6;
    const xmlns = "http://www.w3.org/2000/svg";
    const SVG = document.createElementNS(xmlns, "svg");
    SVG.id = "IO_molecular_SVG";
    let SVGSIZE = 1024;
    SVG.setAttributeNS(null, "viewBox", `0 0 ${SVGSIZE} ${SVGSIZE*1.6}`);
    const STM = document.getElementById("STM_M");
    const LTM = document.getElementById("LTM_M");
    const PRINTER = document.getElementById("molecular_printer");
    let MOLOUT = document.getElementById("wrapper_IO_right");

    let OPTION0 = document.getElementById("choice0");
    let OPTION1 = document.getElementById("choice1");
    let OPTION2 = document.getElementById("choice2");
    let OPTION3 = document.getElementById("choice3");

    let CP0 = document.getElementById("cp0");
    let CP1 = document.getElementById("cp1");
    let CP2 = document.getElementById("cp2");
    let CP3 = document.getElementById("cp3");
    let CP4 = document.getElementById("cp4");

    let Xarray = [];
    let Yarray = [];
    let allInputCircles = [];
    let drawnLines = [];
    let size = SVGSIZE / 5;


    function buildCoreSVG() {

        SVG.innerHTML = "";
        Xarray = [];
        Yarray = [];
        allInputCircles = [];
        drawnLines = [];
        LTM.innerHTML = "";

        //X coordinates are hardcoded. Unfortunately

        Xarray = [
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
            0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000,
            20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020,
        ];



        let Y_colCount = 26;
        let Y_rowCount = 49;
        let Y_row_incr = 34.6;
        let Y_init = 20;

        // let X_colCount = 26;
        // let X_rowCount = 15;
        // let X_col_incr = 40;
        // let X_init0 = 0;
        // let X_init20 = 20;

        let k;

        for (i = 0; i < Y_rowCount; i += 1) {
            for (k = 0; k < Y_colCount; k += 1) {
                Yarray.push(Y_init);
            }
            Y_init += Y_row_incr;
        }

        for (i = 0; i < Xarray.length; i += 1) {
            let circle = document.createElementNS(xmlns, "circle");
            circle.setAttributeNS(null, "cx", Xarray[i]);
            circle.setAttributeNS(null, "cy", Yarray[i]);

            circle.setAttributeNS(null, "r", 20);
            circle.setAttributeNS(null, "class", "circles_mol_min");

            circle.setAttributeNS(null, "fill", "rgba(255,255,255,0.4");
            circle.setAttributeNS(null, "cursor", "pointer");
            circle.setAttributeNS(null, "transition", "all 0.3s ease");
            allInputCircles.push(circle)
            SVG.appendChild(circle);
        };

        SVGWRAPPER.appendChild(SVG);


        for (i = 0; i < allInputCircles.length; i += 1) {
            let oneCircle = allInputCircles[i];
            oneCircle.addEventListener("mouseover", function() {
                oneCircle.setAttributeNS(null, "fill", "gold");
            });
            oneCircle.addEventListener("mouseout", function() {
                oneCircle.setAttributeNS(null, "fill", "rgba(255,255,255,0.4");
            });
        }
    }

    function createSvg() {
        buildCoreSVG();

        for (i = 0; i < allInputCircles.length; i += 1) {
            let oneCircle = allInputCircles[i];
            let oneX = Math.round(Xarray[i]);
            let oneY = Math.round(Yarray[i]);

            oneCircle.addEventListener("click", function() {
                drawnLines.push([oneX, oneY]);
                drawLine();
            });
        }


        function drawLine() {
            if (drawnLines.length >= 1) {
                let path = document.createElementNS(xmlns, "path");
                path.setAttributeNS(null, 'stroke', "gold");
                path.setAttributeNS(null, 'stroke-width', 4);
                path.setAttributeNS(null, 'stroke-linejoin', "round");
                path.setAttributeNS(null, 'stroke-linecap', 'round');
                path.setAttributeNS(null, 'd', `M ${drawnLines.join(' ')}`);
                path.setAttributeNS(null, 'opacity', 1);
                path.setAttributeNS(null, "fill", "none");
                SVG.appendChild(path);
            }
            STM.innerHTML = drawnLines;
        }
    };

    createSvg();

    // (function cut() {
    //     SVG.setAttributeNS(null, "width", "500");
    //     SVG.setAttributeNS(null, "height", "800");

    //     const BTNCUT = document.getElementById("CUT_mol");

    //     BTNCUT.addEventListener("click", function() {
    //         let path = document.createElementNS(xmlns, "path");
    //         path.setAttributeNS(null, 'stroke', "tomato");
    //         path.setAttributeNS(null, 'stroke-width', 4);
    //         path.setAttributeNS(null, 'stroke-linejoin', "round");
    //         path.setAttributeNS(null, 'stroke-linecap', 'round');
    //         path.setAttributeNS(null, 'd', `M ${STM.innerHTML}`);
    //         path.setAttributeNS(null, 'opacity', 1);
    //         path.setAttributeNS(null, "fill", "none");
    //         SVG.appendChild(path);

    //         LTM.innerText += `<path d="M ${drawnLines}"/>`;
    //         allInputCircles = [];
    //         drawnLines = [];
    //     });
    // }());

    (function cutGOLD(){
        SVG.setAttributeNS(null, "width", "500");
        SVG.setAttributeNS(null, "height", "800");

        CP0.addEventListener("click", function() {
            let path = document.createElementNS(xmlns, "path");
            path.setAttributeNS(null, 'stroke', "tomato");
            path.setAttributeNS(null, 'stroke-width', 4);
            path.setAttributeNS(null, 'stroke-linejoin', "round");
            path.setAttributeNS(null, 'stroke-linecap', 'round');
            path.setAttributeNS(null, 'd', `M ${STM.innerHTML}`);
            path.setAttributeNS(null, 'opacity', 1);
            path.setAttributeNS(null, "fill", "none");
            SVG.appendChild(path);

            LTM.innerText += `<path d="M ${drawnLines}" style="stroke:gold;"/>`;
            allInputCircles = [];
            drawnLines = [];
        });
    }());

    (function cutGREEN(){
        SVG.setAttributeNS(null, "width", "500");
        SVG.setAttributeNS(null, "height", "800");

        CP1.addEventListener("click", function() {
            let path = document.createElementNS(xmlns, "path");
            path.setAttributeNS(null, 'stroke', "tomato");
            path.setAttributeNS(null, 'stroke-width', 4);
            path.setAttributeNS(null, 'stroke-linejoin', "round");
            path.setAttributeNS(null, 'stroke-linecap', 'round');
            path.setAttributeNS(null, 'd', `M ${STM.innerHTML}`);
            path.setAttributeNS(null, 'opacity', 1);
            path.setAttributeNS(null, "fill", "none");
            SVG.appendChild(path);

            LTM.innerText += `<path d="M ${drawnLines}" style="stroke:rgb(101, 146, 34);"/>`;
            allInputCircles = [];
            drawnLines = [];
        });
    }());

    (function cutCORN(){
        SVG.setAttributeNS(null, "width", "500");
        SVG.setAttributeNS(null, "height", "800");

        CP2.addEventListener("click", function() {
            let path = document.createElementNS(xmlns, "path");
            path.setAttributeNS(null, 'stroke', "tomato");
            path.setAttributeNS(null, 'stroke-width', 4);
            path.setAttributeNS(null, 'stroke-linejoin', "round");
            path.setAttributeNS(null, 'stroke-linecap', 'round');
            path.setAttributeNS(null, 'd', `M ${STM.innerHTML}`);
            path.setAttributeNS(null, 'opacity', 1);
            path.setAttributeNS(null, "fill", "none");
            SVG.appendChild(path);

            LTM.innerText += `<path d="M ${drawnLines}" style="stroke:cornflowerblue;"/>`;
            allInputCircles = [];
            drawnLines = [];
        });
    }());

    (function cutTOMATO(){
        SVG.setAttributeNS(null, "width", "500");
        SVG.setAttributeNS(null, "height", "800");

        CP3.addEventListener("click", function() {
            let path = document.createElementNS(xmlns, "path");
            path.setAttributeNS(null, 'stroke', "tomato");
            path.setAttributeNS(null, 'stroke-width', 4);
            path.setAttributeNS(null, 'stroke-linejoin', "round");
            path.setAttributeNS(null, 'stroke-linecap', 'round');
            path.setAttributeNS(null, 'd', `M ${STM.innerHTML}`);
            path.setAttributeNS(null, 'opacity', 1);
            path.setAttributeNS(null, "fill", "none");
            SVG.appendChild(path);

            LTM.innerText += `<path d="M ${drawnLines}" style="stroke:tomato;"/>`;
            allInputCircles = [];
            drawnLines = [];
        });
    }());

    (function cutBLACK(){
        SVG.setAttributeNS(null, "width", "500");
        SVG.setAttributeNS(null, "height", "800");

        CP4.addEventListener("click", function() {
            let path = document.createElementNS(xmlns, "path");
            path.setAttributeNS(null, 'stroke', "tomato");
            path.setAttributeNS(null, 'stroke-width', 4);
            path.setAttributeNS(null, 'stroke-linejoin', "round");
            path.setAttributeNS(null, 'stroke-linecap', 'round');
            path.setAttributeNS(null, 'd', `M ${STM.innerHTML}`);
            path.setAttributeNS(null, 'opacity', 1);
            path.setAttributeNS(null, "fill", "none");
            SVG.appendChild(path);

            LTM.innerText += `<path d="M ${drawnLines}" style="stroke:black;"/>`;
            allInputCircles = [];
            drawnLines = [];
        });
    }());

    (function print() {
        const BTNPRINT = document.getElementById("LINK_mol");

        BTNPRINT.addEventListener("click", function() {
            let R = Math.round(Math.random()*255);
            let G = Math.round(Math.random()*255);
            let B = Math.round(Math.random()*255);
            let color = `rgb(${R}, ${G}, ${B})`;
            let printSVG = document.createElementNS(xmlns, "svg");
            printSVG.setAttributeNS(null, "viewBox", `0 0 ${SVGSIZE} ${SVGSIZE*1.6}`);
            printSVG.setAttributeNS(null, "width", "500px");
            printSVG.setAttributeNS(null, "height", "800px");
            printSVG.setAttributeNS(null, "stroke-width", "2px");
            printSVG.setAttributeNS(null, "stroke-linecap", "round");
            printSVG.setAttributeNS(null, "stroke-linejoin", "round");
            printSVG.setAttributeNS(null, "fill", "none");
            printSVG.setAttributeNS(null, "stroke", color);
            printSVG.style.background = "white";
            printSVG.style.border = "1px solid lightgrey";
            printSVG.style.borderRadius = "15px";

            printSVG.innerHTML = LTM.innerHTML.split('&lt;').join('<').split('&gt;').join('>');
            PRINTER.appendChild(printSVG);

        })
    }());

    function clear() {
        const BTNCLEAR = document.getElementById("CLEAR_mol");

        BTNCLEAR.addEventListener("click", function() {
            STM.innerHTML = "";
            SVGWRAPPER.innerHTML = "";
            createSvg();
        })
    };

    clear();

    (function wash() {
        const BTNWASH = document.getElementById("WASH_mol");
        BTNWASH.addEventListener("click", function() {
            PRINTER.innerHTML = "";
        });
    }());

    (function mol() {
        let MOL = document.getElementById("MOLECULE");
        MOL.addEventListener("click", function() {
            let MOLOUT_SVG = document.createElementNS(xmlns, "svg");
            MOLOUT_SVG.setAttributeNS(null, "viewBox", `0 0 ${SVGSIZE} ${SVGSIZE*1.6}`);
            MOLOUT_SVG.setAttributeNS(null, "height", "240px");
            MOLOUT_SVG.setAttributeNS(null, "width", "150px");
            MOLOUT_SVG.setAttributeNS(null, "stroke-width", "5px");
            MOLOUT_SVG.setAttributeNS(null, "stroke-linecap", "round");
            MOLOUT_SVG.setAttributeNS(null, "stroke-linejoin", "round");
            MOLOUT_SVG.setAttributeNS(null, "fill", "none");
            MOLOUT_SVG.setAttributeNS(null, "stroke", "black");
            MOLOUT_SVG.innerHTML = LTM.innerHTML.split('&lt;').join('<').split('&gt;').join('>');;
            MOLOUT.appendChild(MOLOUT_SVG);
        });
    }());

    (function dissolve() {
        let DISSOLVE = document.getElementById("DISSOLVE_mol");
        DISSOLVE.addEventListener("click", function() {
            MOLOUT.innerHTML = "";
            PRINTER.innerHTML = "";
        });
    }());

    (function rotateLight() {
        let light = document.getElementById("inner_SVG");
        let menu_hexes = document.getElementsByClassName("hexagon");
        let h;

        for (h = 0; h < menu_hexes.length; h += 1) {
            let oneHex = menu_hexes[h];
            oneHex.addEventListener("click", function() {
                light.style.transform = "rotate(-90deg)";
                setTimeout(function() {
                    light.style.transform = "rotate(0deg)";
                }, 500);
            });
            // oneHex.addEventListener("mouseout", function() {
            //     light.style.transform = "rotate(180deg)";
            // });
        }
    }());
   
    let mess = document.getElementById("move"); 

    function drag_start(event) {
        let style = window.getComputedStyle(event.target, null);
        event.dataTransfer.setData("text/plain",
        (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
    } 

    function drop(event) {
        var offset = event.dataTransfer.getData("text/plain").split(',');
        let dm = document.getElementById('hexWrap');
        dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
        dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
        event.preventDefault();
        return false;
    }

    function drag_over(event) {
        mess.innerHTML = "&#128520;";
        mess.style.fontSize = "3em";
        mess.style.cursor = "pointer";
        event.preventDefault();
        return false;
    } 

    let dm = document.getElementById('hexWrap');
    dm.addEventListener('dragstart',drag_start,false);
    document.body.addEventListener('dragover',drag_over,false);
    document.body.addEventListener('drop',drop,false); 

    (function showLinearTemplate(){
        OPTION0.addEventListener("click", function(){

            for(i = 0; i < allInputCircles.length; i += 1){
                allInputCircles[i].style.fill = "grey";
                allInputCircles[i].setAttributeNS(null, "stroke", "none");
            }

            for(let a = 0; a < 20; a +=1 ){
                allInputCircles[a+3].style.fill = "black";
                allInputCircles[a+3].setAttributeNS(null, "stroke", "white");
                allInputCircles[a+4].style.fill = "black";
                allInputCircles[a+4].setAttributeNS(null, "stroke", "white");
                a+=5;
            }
            for(let b = 0; b < 20; b +=1 ){
                allInputCircles[b+28].style.fill = "black";
                allInputCircles[b+28].setAttributeNS(null, "stroke", "white");
                allInputCircles[b+29].style.fill = "black";
                allInputCircles[b+29].setAttributeNS(null, "stroke", "white");
                allInputCircles[b+30].style.fill = "black";
                allInputCircles[b+30].setAttributeNS(null, "stroke", "white");
                b+=5;
            }
            
            for(let c = 0; c < 24; c +=1 ){

                allInputCircles[c+55].style.fill = "black";
                allInputCircles[c+55].setAttributeNS(null, "stroke", "white");
                allInputCircles[c+56].style.fill = "black";
                allInputCircles[c+56].setAttributeNS(null, "stroke", "white");
                c+=5;
            }

            for(let a0 = 0; a0 < 18; a0 += 1){
                allInputCircles[a0+58].style.fill = "black";
                allInputCircles[a0+58].setAttributeNS(null, "stroke", "white");
                allInputCircles[a0+59].style.fill = "black";
                allInputCircles[a0+59].setAttributeNS(null, "stroke", "white");
                a0 += 5;
            }

            for(let b0 = 0; b0 < 18; b0 += 1){
                allInputCircles[b0+83].style.fill = "black";
                allInputCircles[b0+83].setAttributeNS(null, "stroke", "white");
                allInputCircles[b0+84].style.fill = "black";
                allInputCircles[b0+84].setAttributeNS(null, "stroke", "white");
                allInputCircles[b0+85].style.fill = "black";
                allInputCircles[b0+85].setAttributeNS(null, "stroke", "white");
                b0 += 5;
            }

            for(let c0 = 0; c0 < 18; c0 += 1){
                allInputCircles[c0+110].style.fill = "black";
                allInputCircles[c0+110].setAttributeNS(null, "stroke", "white");
                allInputCircles[c0+111].style.fill = "black";
                allInputCircles[c0+111].setAttributeNS(null, "stroke", "white");
                c0 += 5;
            }

            for(let d = 0; d < 20; d +=1 ){
                allInputCircles[d+107].style.fill = "black";
                allInputCircles[d+107].setAttributeNS(null, "stroke", "white");
                allInputCircles[d+108].style.fill = "black";
                allInputCircles[d+108].setAttributeNS(null, "stroke", "white");
                d+=5;
            }

            for(let e = 0; e < 20; e +=1 ){
                allInputCircles[e+132].style.fill = "black";
                allInputCircles[e+132].setAttributeNS(null, "stroke", "white");
                allInputCircles[e+133].style.fill = "black";
                allInputCircles[e+133].setAttributeNS(null, "stroke", "white");
                allInputCircles[e+134].style.fill = "black";
                allInputCircles[e+134].setAttributeNS(null, "stroke", "white");
                e+=5;
            }

            for(let f = 0; f < 20; f +=1 ){
                allInputCircles[f+159].style.fill = "black";
                allInputCircles[f+159].setAttributeNS(null, "stroke", "white");
                allInputCircles[f+160].style.fill = "black";
                allInputCircles[f+160].setAttributeNS(null, "stroke", "white");
                f+=5;
            }

            for(let a1 = 0; a1 < 18; a1 += 1){
                allInputCircles[a1+162].style.fill = "black";
                allInputCircles[a1+162].setAttributeNS(null, "stroke", "white");
                allInputCircles[a1+163].style.fill = "black";
                allInputCircles[a1+163].setAttributeNS(null, "stroke", "white");
                a1 += 5;
            }

            for(let b1 = 0; b1 < 18; b1 += 1){
                allInputCircles[b1+187].style.fill = "black";
                allInputCircles[b1+187].setAttributeNS(null, "stroke", "white");
                allInputCircles[b1+188].style.fill = "black";
                allInputCircles[b1+188].setAttributeNS(null, "stroke", "white");
                allInputCircles[b1+189].style.fill = "black";
                allInputCircles[b1+189].setAttributeNS(null, "stroke", "white");
                b1 += 5;
            }

            for(let c1 = 0; c1 < 18; c1 += 1){
                allInputCircles[c1+214].style.fill = "black";
                allInputCircles[c1+214].setAttributeNS(null, "stroke", "white");
                allInputCircles[c1+215].style.fill = "black";
                allInputCircles[c1+215].setAttributeNS(null, "stroke", "white");
                c1 += 5;
            }

            for(let g = 0; g < 20; g += 1){
                allInputCircles[g+211].style.fill = "black";
                allInputCircles[g+211].setAttributeNS(null, "stroke", "white");
                allInputCircles[g+212].style.fill = "black";
                allInputCircles[g+212].setAttributeNS(null, "stroke", "white");
                g += 5;
            }

            for(let g1 = 0; g1 < 20; g1 += 1){
                allInputCircles[g1+236].style.fill = "black";
                allInputCircles[g1+236].setAttributeNS(null, "stroke", "white");
                allInputCircles[g1+237].style.fill = "black";
                allInputCircles[g1+237].setAttributeNS(null, "stroke", "white");
                allInputCircles[g1+238].style.fill = "black";
                allInputCircles[g1+238].setAttributeNS(null, "stroke", "white");
                g1 += 5;
            }

            for(let g2 = 0; g2 < 20; g2 += 1){
                allInputCircles[g2+263].style.fill = "black";
                allInputCircles[g2+263].setAttributeNS(null, "stroke", "white");
                allInputCircles[g2+264].style.fill = "black";
                allInputCircles[g2+264].setAttributeNS(null, "stroke", "white");
                g2 += 5;
            }

            for(let a2 = 0; a2 < 18; a2 += 1){
                allInputCircles[a2+266].style.fill = "black";
                allInputCircles[a2+266].setAttributeNS(null, "stroke", "white");
                allInputCircles[a2+267].style.fill = "black";
                allInputCircles[a2+267].setAttributeNS(null, "stroke", "white");
                a2 += 5;
            }

            for(let b2 = 0; b2 < 18; b2 += 1){
                allInputCircles[b2+291].style.fill = "black";
                allInputCircles[b2+291].setAttributeNS(null, "stroke", "white");
                allInputCircles[b2+292].style.fill = "black";
                allInputCircles[b2+292].setAttributeNS(null, "stroke", "white");
                allInputCircles[b2+293].style.fill = "black";
                allInputCircles[b2+293].setAttributeNS(null, "stroke", "white");
                b2 += 5;
            }

            for(let c2 = 0; c2 < 18; c2 += 1){
                allInputCircles[c2+318].style.fill = "black";
                allInputCircles[c2+318].setAttributeNS(null, "stroke", "white");
                allInputCircles[c2+319].style.fill = "black";
                allInputCircles[c2+319].setAttributeNS(null, "stroke", "white");
                c2 += 5;
            }

            for(let h = 0; h < 20; h += 1){
                allInputCircles[h+315].style.fill = "black";
                allInputCircles[h+315].setAttributeNS(null, "stroke", "white");
                allInputCircles[h+316].style.fill = "black";
                allInputCircles[h+316].setAttributeNS(null, "stroke", "white");
                h += 5;
            }

            for(let h1 = 0; h1 < 20; h1 += 1){
                allInputCircles[h1+340].style.fill = "black";
                allInputCircles[h1+340].setAttributeNS(null, "stroke", "white");
                allInputCircles[h1+341].style.fill = "black";
                allInputCircles[h1+341].setAttributeNS(null, "stroke", "white");
                allInputCircles[h1+342].style.fill = "black";
                allInputCircles[h1+342].setAttributeNS(null, "stroke", "white");
                h1 += 5;
            }

            for(let h2 = 0; h2 < 20; h2 += 1){
                allInputCircles[h2+367].style.fill = "black";
                allInputCircles[h2+367].setAttributeNS(null, "stroke", "white");
                allInputCircles[h2+368].style.fill = "black";
                allInputCircles[h2+368].setAttributeNS(null, "stroke", "white");
                h2 +=5;
            }

            for(let a3 = 0; a3 < 18; a3 += 1){
                allInputCircles[a3+370].style.fill = "black";
                allInputCircles[a3+370].setAttributeNS(null, "stroke", "white");
                allInputCircles[a3+371].style.fill = "black";
                allInputCircles[a3+371].setAttributeNS(null, "stroke", "white");
                a3 += 5;
            }

            for(let b3 = 0; b3 < 18; b3 += 1){
                allInputCircles[b3+395].style.fill = "black";
                allInputCircles[b3+395].setAttributeNS(null, "stroke", "white");
                allInputCircles[b3+396].style.fill = "black";
                allInputCircles[b3+396].setAttributeNS(null, "stroke", "white");
                allInputCircles[b3+397].style.fill = "black";
                allInputCircles[b3+397].setAttributeNS(null, "stroke", "white");
                b3 +=5;
            }

            for(let c3 = 0; c3 < 18; c3 += 1){
                allInputCircles[c3+422].style.fill = "black";
                allInputCircles[c3+422].setAttributeNS(null, "stroke", "white");
                allInputCircles[c3+423].style.fill = "black";
                allInputCircles[c3+423].setAttributeNS(null, "stroke", "white");
                c3 += 5;
            }

            for(let k=0; k < 20; k += 1){
                allInputCircles[k+419].style.fill = "black";
                allInputCircles[k+419].setAttributeNS(null, "stroke", "white");
                allInputCircles[k+420].style.fill = "black";
                allInputCircles[k+420].setAttributeNS(null, "stroke", "white");
                k += 5;
            }

            for(let k2 = 0; k2 < 20; k2 += 1){
                allInputCircles[k2+444].style.fill = "black";
                allInputCircles[k2+444].setAttributeNS(null, "stroke", "white");
                allInputCircles[k2+445].style.fill = "black";
                allInputCircles[k2+445].setAttributeNS(null, "stroke", "white");
                allInputCircles[k2+446].style.fill = "black";
                allInputCircles[k2+446].setAttributeNS(null, "stroke", "white");
                k2 += 5;
            }

            for(let k3 = 0; k3 < 20; k3 += 1){
                allInputCircles[k3+471].style.fill = "black";
                allInputCircles[k3+471].setAttributeNS(null, "stroke", "white");
                allInputCircles[k3+472].style.fill = "black";
                allInputCircles[k3+472].setAttributeNS(null, "stroke", "white");
                k3 += 5;
            }

            for(let a4 = 0; a4 < 18; a4 += 1){
                allInputCircles[a4+474].style.fill = "black";
                allInputCircles[a4+474].setAttributeNS(null, "stroke", "white");
                allInputCircles[a4+475].style.fill = "black";
                allInputCircles[a4+475].setAttributeNS(null, "stroke", "white");
                a4 += 5;
            }

            for(let b4 = 0; b4 < 18; b4 += 1){
                allInputCircles[b4+499].style.fill = "black";
                allInputCircles[b4+499].setAttributeNS(null, "stroke", "white");
                allInputCircles[b4+500].style.fill = "black";
                allInputCircles[b4+500].setAttributeNS(null, "stroke", "white");
                allInputCircles[b4+501].style.fill = "black";
                allInputCircles[b4+501].setAttributeNS(null, "stroke", "white");
                b4 += 5;
            }
            
            for(let c4 = 0; c4 < 18; c4 += 1){
                allInputCircles[c4+526].style.fill = "black";
                allInputCircles[c4+526].setAttributeNS(null, "stroke", "white");
                allInputCircles[c4+527].style.fill = "black";
                allInputCircles[c4+527].setAttributeNS(null, "stroke", "white");
                c4 += 5;
            }

            for(let l = 0; l < 20; l += 1){
                allInputCircles[l+523].style.fill = "black";
                allInputCircles[l+523].setAttributeNS(null, "stroke", "white");
                allInputCircles[l+524].style.fill = "black";
                allInputCircles[l+524].setAttributeNS(null, "stroke", "white");
                l += 5;
            }

            for(let l2 = 0; l2 < 20; l2 += 1){
                allInputCircles[l2+548].style.fill = "black";
                allInputCircles[l2+548].setAttributeNS(null, "stroke", "white");
                allInputCircles[l2+549].style.fill = "black";
                allInputCircles[l2+549].setAttributeNS(null, "stroke", "white");
                allInputCircles[l2+550].style.fill = "black";
                allInputCircles[l2+550].setAttributeNS(null, "stroke", "white");
                l2 += 5;
            }

            for(let l3 = 0; l3 < 20; l3 += 1){
                allInputCircles[l3+575].style.fill = "black";
                allInputCircles[l3+575].setAttributeNS(null, "stroke", "white");
                allInputCircles[l3+576].style.fill = "black";
                allInputCircles[l3+576].setAttributeNS(null, "stroke", "white");
                l3 += 5;
            }

            for(let a5 = 0; a5 < 18; a5 += 1){
                allInputCircles[a5+578].style.fill = "black";
                allInputCircles[a5+578].setAttributeNS(null, "stroke", "white");
                allInputCircles[a5+579].style.fill = "black";
                allInputCircles[a5+579].setAttributeNS(null, "stroke", "white");
                a5 += 5;
            }

            for(let b5 = 0; b5 < 18; b5 += 1){
                allInputCircles[b5+603].style.fill = "black";
                allInputCircles[b5+603].setAttributeNS(null, "stroke", "white");
                allInputCircles[b5+604].style.fill = "black";
                allInputCircles[b5+604].setAttributeNS(null, "stroke", "white");
                allInputCircles[b5+605].style.fill = "black";
                allInputCircles[b5+605].setAttributeNS(null, "stroke", "white");
                b5 += 5;
            }

            for(let c5 = 0; c5 < 18; c5 += 1){
                allInputCircles[c5+630].style.fill = "black";
                allInputCircles[c5+630].setAttributeNS(null, "stroke", "white");
                allInputCircles[c5+631].style.fill = "black";
                allInputCircles[c5+631].setAttributeNS(null, "stroke", "white");
                c5 += 5;
            }

            for(let m = 0; m < 20; m += 1){
                allInputCircles[m+627].style.fill = "black";
                allInputCircles[m+627].setAttributeNS(null, "stroke", "white");
                allInputCircles[m+628].style.fill = "black";
                allInputCircles[m+628].setAttributeNS(null, "stroke", "white");
                m += 5;
            }

            for(let m2 = 0; m2 < 20; m2 += 1){
                allInputCircles[m2+652].style.fill = "black";
                allInputCircles[m2+652].setAttributeNS(null, "stroke", "white");
                allInputCircles[m2+653].style.fill = "black";
                allInputCircles[m2+653].setAttributeNS(null, "stroke", "white");
                allInputCircles[m2+654].style.fill = "black";
                allInputCircles[m2+654].setAttributeNS(null, "stroke", "white");
                m2 += 5;
            }

            for(let m3 = 0; m3 < 20; m3 += 1){
                allInputCircles[m3+679].style.fill = "black";
                allInputCircles[m3+679].setAttributeNS(null, "stroke", "white");
                allInputCircles[m3+680].style.fill = "black";
                allInputCircles[m3+680].setAttributeNS(null, "stroke", "white");
                m3 += 5;
            }

            for(let a6 = 0; a6 < 18; a6 += 1){
                allInputCircles[a6+682].style.fill = "black";
                allInputCircles[a6+682].setAttributeNS(null, "stroke", "white");
                allInputCircles[a6+683].style.fill = "black";
                allInputCircles[a6+683].setAttributeNS(null, "stroke", "white");
                a6 += 5;
            }

            for(let b6 = 0; b6 < 18; b6 += 1){
                allInputCircles[b6+707].style.fill = "black";
                allInputCircles[b6+707].setAttributeNS(null, "stroke", "white");
                allInputCircles[b6+708].style.fill = "black";
                allInputCircles[b6+708].setAttributeNS(null, "stroke", "white");
                allInputCircles[b6+709].style.fill = "black";
                allInputCircles[b6+709].setAttributeNS(null, "stroke", "white");
                b6 += 5;
            }

            for(let c6 = 0; c6 < 18; c6 += 1){
                allInputCircles[c6+734].style.fill = "black";
                allInputCircles[c6+734].setAttributeNS(null, "stroke", "white");
                allInputCircles[c6+735].style.fill = "black";
                allInputCircles[c6+735].setAttributeNS(null, "stroke", "white");
                c6 += 5;
            }

            for(let n = 0; n < 20; n += 1){
                allInputCircles[n+731].style.fill = "black";
                allInputCircles[n+731].setAttributeNS(null, "stroke", "white");
                allInputCircles[n+732].style.fill = "black";
                allInputCircles[n+732].setAttributeNS(null, "stroke", "white");
                n += 5;
            }

            for(let n2 = 0; n2 < 20; n2 += 1){
                allInputCircles[n2+756].style.fill = "black";
                allInputCircles[n2+756].setAttributeNS(null, "stroke", "white");
                allInputCircles[n2+757].style.fill = "black";
                allInputCircles[n2+757].setAttributeNS(null, "stroke", "white");
                allInputCircles[n2+758].style.fill = "black";
                allInputCircles[n2+758].setAttributeNS(null, "stroke", "white");
                n2 += 5;
            }

            for(let n3 = 0; n3 < 20; n3 += 1){
                allInputCircles[n3+783].style.fill = "black";
                allInputCircles[n3+783].setAttributeNS(null, "stroke", "white");
                allInputCircles[n3+784].style.fill = "black";
                allInputCircles[n3+784].setAttributeNS(null, "stroke", "white");
                n3 += 5;
            }

            for(let a7 = 0; a7 < 18; a7 += 1){
                allInputCircles[a7+786].style.fill = "black";
                allInputCircles[a7+786].setAttributeNS(null, "stroke", "white");
                allInputCircles[a7+787].style.fill = "black";
                allInputCircles[a7+787].setAttributeNS(null, "stroke", "white");
                a7 += 5;
            }

            for(let b7 = 0; b7 < 18; b7 += 1){
                allInputCircles[b7+811].style.fill = "black";
                allInputCircles[b7+811].setAttributeNS(null, "stroke", "white");
                allInputCircles[b7+812].style.fill = "black";
                allInputCircles[b7+812].setAttributeNS(null, "stroke", "white");
                allInputCircles[b7+813].style.fill = "black";
                allInputCircles[b7+813].setAttributeNS(null, "stroke", "white");
                b7 += 5;
            }

            for(let c7 = 0; c7 < 18; c7 += 1){
                allInputCircles[c7+838].style.fill = "black";
                allInputCircles[c7+838].setAttributeNS(null, "stroke", "white");
                allInputCircles[c7+839].style.fill = "black";
                allInputCircles[c7+839].setAttributeNS(null, "stroke", "white");
                c7 += 5;
            }

            for(let o = 0; o < 20; o += 1){
                allInputCircles[o+835].style.fill = "black";
                allInputCircles[o+835].setAttributeNS(null, "stroke", "white");
                allInputCircles[o+836].style.fill = "black";
                allInputCircles[o+836].setAttributeNS(null, "stroke", "white");
                o += 5;
            }

            for(let o2 = 0; o2 < 20; o2 += 1){
                allInputCircles[o2+860].style.fill = "black";
                allInputCircles[o2+860].setAttributeNS(null, "stroke", "white");
                allInputCircles[o2+861].style.fill = "black";
                allInputCircles[o2+861].setAttributeNS(null, "stroke", "white");
                allInputCircles[o2+862].style.fill = "black";
                allInputCircles[o2+862].setAttributeNS(null, "stroke", "white");
                o2 += 5;
            }

            for(let o3 = 0; o3 < 20; o3 += 1){
                allInputCircles[o3+887].style.fill = "black";
                allInputCircles[o3+887].setAttributeNS(null, "stroke", "white");
                allInputCircles[o3+888].style.fill = "black";
                allInputCircles[o3+888].setAttributeNS(null, "stroke", "white");
                o3 += 5;
            }

            for(let a8 = 0; a8 < 18; a8 += 1){
                allInputCircles[a8+890].style.fill = "black";
                allInputCircles[a8+890].setAttributeNS(null, "stroke", "white");
                allInputCircles[a8+891].style.fill = "black";
                allInputCircles[a8+891].setAttributeNS(null, "stroke", "white");
                a8 += 5;
            }

            for(let b8 = 0; b8 < 18; b8 += 1){
                allInputCircles[b8+915].style.fill = "black";
                allInputCircles[b8+915].setAttributeNS(null, "stroke", "white");
                allInputCircles[b8+916].style.fill = "black";
                allInputCircles[b8+916].setAttributeNS(null, "stroke", "white");
                allInputCircles[b8+917].style.fill = "black";
                allInputCircles[b8+917].setAttributeNS(null, "stroke", "white");
                b8 += 5;
            }

            for(let c8 = 0; c8 < 18; c8 += 1){
                allInputCircles[c8+942].style.fill = "black";
                allInputCircles[c8+942].setAttributeNS(null, "stroke", "white");
                allInputCircles[c8+943].style.fill = "black";
                allInputCircles[c8+943].setAttributeNS(null, "stroke", "white");
                c8 += 5;
            }

            for(let p = 0; p < 20; p += 1){
                allInputCircles[p+939].style.fill = "black";
                allInputCircles[p+939].setAttributeNS(null, "stroke", "white");
                allInputCircles[p+940].style.fill = "black";
                allInputCircles[p+940].setAttributeNS(null, "stroke", "white");
                p += 5;
            }

            for(let p2 = 0; p2 < 20; p2 += 1){
                allInputCircles[p2+964].style.fill = "black";
                allInputCircles[p2+964].setAttributeNS(null, "stroke", "white");
                allInputCircles[p2+965].style.fill = "black";
                allInputCircles[p2+965].setAttributeNS(null, "stroke", "white");
                allInputCircles[p2+966].style.fill = "black";
                allInputCircles[p2+966].setAttributeNS(null, "stroke", "white");
                p2 += 5;
            }

            for(let p3 = 0; p3 < 20; p3 += 1){
                allInputCircles[p3+991].style.fill = "black";
                allInputCircles[p3+991].setAttributeNS(null, "stroke", "white");
                allInputCircles[p3+992].style.fill = "black";
                allInputCircles[p3+992].setAttributeNS(null, "stroke", "white");
                p3 += 5;
            }

            for(let a9 = 0; a9 < 18; a9 += 1){
                allInputCircles[a9+994].style.fill = "black";
                allInputCircles[a9+994].setAttributeNS(null, "stroke", "white");
                allInputCircles[a9+995].style.fill = "black";
                allInputCircles[a9+995].setAttributeNS(null, "stroke", "white");
                a9 += 5;
            }

            for(let b9 = 0; b9 < 18; b9 +=1){
                allInputCircles[b9+1019].style.fill = "black";
                allInputCircles[b9+1019].setAttributeNS(null, "stroke", "white");
                allInputCircles[b9+1020].style.fill = "black";
                allInputCircles[b9+1020].setAttributeNS(null, "stroke", "white");
                allInputCircles[b9+1021].style.fill = "black";
                allInputCircles[b9+1021].setAttributeNS(null, "stroke", "white");
                b9 += 5;
            }

            for(let c9 = 0; c9 < 18; c9 += 1){
                allInputCircles[c9+1046].style.fill = "black";
                allInputCircles[c9+1046].setAttributeNS(null, "stroke", "white");
                allInputCircles[c9+1047].style.fill = "black";
                allInputCircles[c9+1047].setAttributeNS(null, "stroke", "white");
                c9 += 5;
            }

            for(let q = 0; q < 20; q += 1){
                allInputCircles[q+1043].style.fill = "black";
                allInputCircles[q+1043].setAttributeNS(null, "stroke", "white");
                allInputCircles[q+1044].style.fill = "black";
                allInputCircles[q+1044].setAttributeNS(null, "stroke", "white");
                q += 5;
            }

            for(let q2 = 0; q2 < 20; q2 += 1){
                allInputCircles[q2+1068].style.fill = "black";
                allInputCircles[q2+1068].setAttributeNS(null, "stroke", "white");
                allInputCircles[q2+1069].style.fill = "black";
                allInputCircles[q2+1069].setAttributeNS(null, "stroke", "white");
                allInputCircles[q2+1070].style.fill = "black";
                allInputCircles[q2+1070].setAttributeNS(null, "stroke", "white");
                q2 += 5;
            }

            for(let q3 = 0; q3 < 20; q3 += 1){
                allInputCircles[q3+1095].style.fill = "black";
                allInputCircles[q3+1095].setAttributeNS(null, "stroke", "white");
                allInputCircles[q3+1096].style.fill = "black";
                allInputCircles[q3+1096].setAttributeNS(null, "stroke", "white");
                q3 += 5;
            }

            for(let a10 = 0; a10 < 18; a10 += 1){
                allInputCircles[a10+1098].style.fill = "black";
                allInputCircles[a10+1098].setAttributeNS(null, "stroke", "white");
                allInputCircles[a10+1099].style.fill = "black";
                allInputCircles[a10+1099].setAttributeNS(null, "stroke", "white");
                a10 += 5;
            }

            for(let b10 = 0; b10 < 18; b10 += 1){
                allInputCircles[b10+1123].style.fill = "black";
                allInputCircles[b10+1123].setAttributeNS(null, "stroke", "white");
                allInputCircles[b10+1124].style.fill = "black";
                allInputCircles[b10+1124].setAttributeNS(null, "stroke", "white");
                allInputCircles[b10+1125].style.fill = "black";
                allInputCircles[b10+1125].setAttributeNS(null, "stroke", "white");
                b10 += 5;
            }

            for(let c10 = 0; c10 < 18; c10 += 1){
                allInputCircles[c10+1150].style.fill = "black";
                allInputCircles[c10+1150].setAttributeNS(null, "stroke", "white");
                allInputCircles[c10+1151].style.fill = "black";
                allInputCircles[c10+1151].setAttributeNS(null, "stroke", "white");
                c10 += 5;
            }

            for(let r = 0; r < 20; r += 1){
                allInputCircles[r+1147].style.fill = "black";
                allInputCircles[r+1147].setAttributeNS(null, "stroke", "white");
                allInputCircles[r+1148].style.fill = "black";
                allInputCircles[r+1148].setAttributeNS(null, "stroke", "white");
                r += 5;
            }

            for(let r2 = 0; r2 < 20; r2 += 1){
                allInputCircles[r2+1172].style.fill = "black";
                allInputCircles[r2+1172].setAttributeNS(null, "stroke", "white");
                allInputCircles[r2+1173].style.fill = "black";
                allInputCircles[r2+1173].setAttributeNS(null, "stroke", "white");
                allInputCircles[r2+1174].style.fill = "black";
                allInputCircles[r2+1174].setAttributeNS(null, "stroke", "white");
                r2 +=5;
            }

            for(let r3 = 0; r3 < 20; r3 += 1){
                allInputCircles[r3+1199].style.fill = "black";
                allInputCircles[r3+1199].setAttributeNS(null, "stroke", "white");
                allInputCircles[r3+1200].style.fill = "black";
                allInputCircles[r3+1200].setAttributeNS(null, "stroke", "white");
                r3 += 5;
            }
        })
    }());

    (function showDoubleTemplate(){
        OPTION1.addEventListener("click", function(){
            for(i = 0; i < allInputCircles.length; i += 1){
                allInputCircles[i].style.fill = "grey";
                allInputCircles[i].setAttributeNS(null, "stroke", "none");
            }
            for(let a0 = 0; a0 < 20; a0 +=1 ){
                allInputCircles[a0+3].style.fill = "black";
                allInputCircles[a0+3].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a0+5].style.fill = "black";
                allInputCircles[a0+5].setAttributeNS(null, "stroke", "tomato");
                a0 +=8;
            }
            for(let a1 = 0; a1 < 20; a1 += 1){
                allInputCircles[a1+54].style.fill = "black";
                allInputCircles[a1+54].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a1+56].style.fill = "black";
                allInputCircles[a1+56].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a1+58].style.fill = "black";
                allInputCircles[a1+58].setAttributeNS(null, "stroke", "tomato");
                a1 += 8;
            }
            for(let a2 = 0; a2 < 20; a2 += 1){
                allInputCircles[a2+107].style.fill = "black";
                allInputCircles[a2+107].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a2+109].style.fill = "black";
                allInputCircles[a2+109].setAttributeNS(null, "stroke", "tomato");
                a2 += 8;
            }
            for(let z0 = 0; z0 < 18; z0 += 1){
                allInputCircles[z0+85].style.fill = "black";
                allInputCircles[z0+85].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z0+87].style.fill = "black";
                allInputCircles[z0+87].setAttributeNS(null, "stroke", "greenyellow");
                z0 += 8;
            }
            for(let z1 = 0; z1 < 18; z1 += 1){
                allInputCircles[z1+136].style.fill = "black";
                allInputCircles[z1+136].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z1+138].style.fill = "black";
                allInputCircles[z1+138].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z1+140].style.fill = "black";
                allInputCircles[z1+140].setAttributeNS(null, "stroke", "greenyellow");
                z1 += 8;
            }
            for(let z2 = 0; z2 < 18; z2 += 1){
                allInputCircles[z2+189].style.fill = "black";
                allInputCircles[z2+189].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z2+191].style.fill = "black";
                allInputCircles[z2+191].setAttributeNS(null, "stroke", "greenyellow");
                z2 += 8;
            }
            for(let a3 = 0; a3 < 20; a3 += 1){
                allInputCircles[a3+159].style.fill = "black";
                allInputCircles[a3+159].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a3+161].style.fill = "black";
                allInputCircles[a3+161].setAttributeNS(null, "stroke", "tomato");
                a3 += 8;
            }
            for(let a4 = 0; a4 < 20; a4 += 1){
                allInputCircles[a4+210].style.fill = "black";
                allInputCircles[a4+210].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a4+212].style.fill = "black";
                allInputCircles[a4+212].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a4+214].style.fill = "black";
                allInputCircles[a4+214].setAttributeNS(null, "stroke", "tomato");
                a4 += 8;
            }
            for(let a5 = 0; a5 < 20; a5 += 1){
                allInputCircles[a5+263].style.fill = "black";
                allInputCircles[a5+263].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a5+265].style.fill = "black";
                allInputCircles[a5+265].setAttributeNS(null, "stroke", "tomato");
                a5 += 8;
            }
            for(let z3 = 0; z3 < 18; z3 += 1){
                allInputCircles[z3+241].style.fill = "black";
                allInputCircles[z3+241].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z3+243].style.fill = "black";
                allInputCircles[z3+243].setAttributeNS(null, "stroke", "greenyellow");
                z3 += 8;
            }
            for(let z4 = 0; z4 < 18; z4 += 1){
                allInputCircles[z4+292].style.fill = "black";
                allInputCircles[z4+292].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z4+294].style.fill = "black";
                allInputCircles[z4+294].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z4+296].style.fill = "black";
                allInputCircles[z4+296].setAttributeNS(null, "stroke", "greenyellow");
                z4 += 8;
            }
            for(let z5 = 0; z5 < 18; z5 += 1){
                allInputCircles[z5+345].style.fill = "black";
                allInputCircles[z5+345].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z5+347].style.fill = "black";
                allInputCircles[z5+347].setAttributeNS(null, "stroke", "greenyellow");
                z5 += 8;
            }
            for(let a6 = 0; a6 < 20; a6 += 1){
                allInputCircles[a6+315].style.fill = "black";
                allInputCircles[a6+315].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a6+317].style.fill = "black";
                allInputCircles[a6+317].setAttributeNS(null, "stroke", "tomato");
                a6 += 8;
            }
            for(let a7 = 0; a7 < 20; a7 += 1){
                allInputCircles[a7+366].style.fill = "black";
                allInputCircles[a7+366].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a7+368].style.fill = "black";
                allInputCircles[a7+368].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a7+370].style.fill = "black";
                allInputCircles[a7+370].setAttributeNS(null, "stroke", "tomato");
                a7 += 8;
            }
            for(let a8 = 0; a8 < 20; a8 += 1){
                allInputCircles[a8+419].style.fill = "black";
                allInputCircles[a8+419].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a8+421].style.fill = "black";
                allInputCircles[a8+421].setAttributeNS(null, "stroke", "tomato");
                a8 += 8;
            }
            for(let z6 = 0; z6 < 18; z6 += 1){
                allInputCircles[z6+397].style.fill = "black";
                allInputCircles[z6+397].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z6+399].style.fill = "black";
                allInputCircles[z6+399].setAttributeNS(null, "stroke", "greenyellow");
                z6 += 8;
            }
            for(let z7 = 0; z7 < 18; z7 += 1){
                allInputCircles[z7+448].style.fill = "black";
                allInputCircles[z7+448].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z7+450].style.fill = "black";
                allInputCircles[z7+450].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z7+452].style.fill = "black";
                allInputCircles[z7+452].setAttributeNS(null, "stroke", "greenyellow");
                z7 += 8;
            }
            for(let z8 = 0; z8 < 18; z8 += 1){
                allInputCircles[z8+501].style.fill = "black";
                allInputCircles[z8+501].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z8+503].style.fill = "black";
                allInputCircles[z8+503].setAttributeNS(null, "stroke", "greenyellow");
                z8 += 8;
            }
            for(let a9 = 0; a9 < 20; a9 += 1){
                allInputCircles[a9+471].style.fill = "black";
                allInputCircles[a9+471].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a9+473].style.fill = "black";
                allInputCircles[a9+473].setAttributeNS(null, "stroke", "tomato");
                a9 += 8;
            }
            for(let a10 = 0; a10 < 20; a10 += 1){
                allInputCircles[a10+522].style.fill = "black";
                allInputCircles[a10+522].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a10+524].style.fill = "black";
                allInputCircles[a10+524].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a10+526].style.fill = "black";
                allInputCircles[a10+526].setAttributeNS(null, "stroke", "tomato");
                a10 += 8;
            }
            for(let a11 = 0; a11 < 20; a11 += 1){
                allInputCircles[a11+575].style.fill = "black";
                allInputCircles[a11+575].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a11+577].style.fill = "black";
                allInputCircles[a11+577].setAttributeNS(null, "stroke", "tomato");
                a11 += 8;
            }
            for(let z9 = 0; z9 < 18; z9 += 1){
                allInputCircles[z9+553].style.fill = "black";
                allInputCircles[z9+553].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z9+555].style.fill = "black";
                allInputCircles[z9+555].setAttributeNS(null, "stroke", "greenyellow");
                z9 += 8;
            }
            for(let z10 = 0; z10 < 18; z10 += 1){
                allInputCircles[z10+604].style.fill = "black";
                allInputCircles[z10+604].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z10+606].style.fill = "black";
                allInputCircles[z10+606].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z10+608].style.fill = "black";
                allInputCircles[z10+608].setAttributeNS(null, "stroke", "greenyellow");
                z10 += 8;
            }
            for(let z11 = 0; z11 < 18; z11 += 1){
                allInputCircles[z11+657].style.fill = "black";
                allInputCircles[z11+657].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z11+659].style.fill = "black";
                allInputCircles[z11+659].setAttributeNS(null, "stroke", "greenyellow");
                z11 += 8;
            }
            for(let a12 = 0; a12 < 20; a12 += 1){
                allInputCircles[a12+627].style.fill = "black";
                allInputCircles[a12+627].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a12+629].style.fill = "black";
                allInputCircles[a12+629].setAttributeNS(null, "stroke", "tomato");
                a12 += 8;
            }
            for(let a13 = 0; a13 < 20; a13 += 1){
                allInputCircles[a13+678].style.fill = "black";
                allInputCircles[a13+678].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a13+680].style.fill = "black";
                allInputCircles[a13+680].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a13+682].style.fill = "black";
                allInputCircles[a13+682].setAttributeNS(null, "stroke", "tomato");
                a13 += 8;
            }
            for(let a14 = 0; a14 < 20; a14 += 1){
                allInputCircles[a14+731].style.fill = "black";
                allInputCircles[a14+731].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a14+733].style.fill = "black";
                allInputCircles[a14+733].setAttributeNS(null, "stroke", "tomato");
                a14 += 8;
            }
            for(let z12 = 0; z12 < 18; z12 += 1){
                allInputCircles[z12+709].style.fill = "black";
                allInputCircles[z12+709].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z12+711].style.fill = "black";
                allInputCircles[z12+711].setAttributeNS(null, "stroke", "greenyellow");
                z12 += 8;
            }
            for(let z13 = 0; z13 < 18; z13 += 1){
                allInputCircles[z13+760].style.fill = "black";
                allInputCircles[z13+760].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z13+762].style.fill = "black";
                allInputCircles[z13+762].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z13+764].style.fill = "black";
                allInputCircles[z13+764].setAttributeNS(null, "stroke", "greenyellow");
                z13 += 8;
            }
            for(let z14 = 0; z14 < 18; z14 += 1){
                allInputCircles[z14+813].style.fill = "black";
                allInputCircles[z14+813].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z14+815].style.fill = "black";
                allInputCircles[z14+815].setAttributeNS(null, "stroke", "greenyellow");
                z14 += 8;
            }
            for(let a15 = 0; a15 < 20; a15 += 1){
                allInputCircles[a15+783].style.fill = "black";
                allInputCircles[a15+783].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a15+785].style.fill = "black";
                allInputCircles[a15+785].setAttributeNS(null, "stroke", "tomato");
                a15 += 8;
            }
            for(let a16 = 0; a16 < 20; a16 += 1){
                allInputCircles[a16+834].style.fill = "black";
                allInputCircles[a16+834].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a16+836].style.fill = "black";
                allInputCircles[a16+836].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a16+838].style.fill = "black";
                allInputCircles[a16+838].setAttributeNS(null, "stroke", "tomato");
                a16 += 8;
            }
            for(let a17 = 0; a17 < 20; a17 += 1){
                allInputCircles[a17+887].style.fill = "black";
                allInputCircles[a17+887].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a17+889].style.fill = "black";
                allInputCircles[a17+889].setAttributeNS(null, "stroke", "tomato");
                a17 += 8;
            }
            for(let z15 = 0; z15 < 18; z15 += 1){
                allInputCircles[z15+865].style.fill = "black";
                allInputCircles[z15+865].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z15+867].style.fill = "black";
                allInputCircles[z15+867].setAttributeNS(null, "stroke", "greenyellow");
                z15 += 8;
            }
            for(let z16 = 0; z16 < 18; z16 += 1){
                allInputCircles[z16+916].style.fill = "black";
                allInputCircles[z16+916].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z16+918].style.fill = "black";
                allInputCircles[z16+918].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z16+920].style.fill = "black";
                allInputCircles[z16+920].setAttributeNS(null, "stroke", "greenyellow");
                z16 += 8;
            }
            for(let z17 = 0; z17 < 18; z17 += 1){
                allInputCircles[z17+969].style.fill = "black";
                allInputCircles[z17+969].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z17+971].style.fill = "black";
                allInputCircles[z17+971].setAttributeNS(null, "stroke", "greenyellow");
                z17 += 8;
            }
            for(let a18 = 0; a18 < 20; a18 +=1){
                allInputCircles[a18+939].style.fill = "black";
                allInputCircles[a18+939].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a18+941].style.fill = "black";
                allInputCircles[a18+941].setAttributeNS(null, "stroke", "tomato");
                a18 += 8;
            }
            for(let a19 = 0; a19 < 20; a19 += 1){
                allInputCircles[a19+990].style.fill = "black";
                allInputCircles[a19+990].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a19+992].style.fill = "black";
                allInputCircles[a19+992].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a19+994].style.fill = "black";
                allInputCircles[a19+994].setAttributeNS(null, "stroke", "tomato");
                a19 += 8;
            }
            for(let a20 = 0; a20 < 20; a20 += 1){
                allInputCircles[a20+1043].style.fill = "black";
                allInputCircles[a20+1043].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a20+1045].style.fill = "black";
                allInputCircles[a20+1045].setAttributeNS(null, "stroke", "tomato");
                a20 += 8;
            }
            for(let z18 = 0; z18 < 18; z18 += 1){
                allInputCircles[z18+1021].style.fill = "black";
                allInputCircles[z18+1021].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z18+1023].style.fill = "black";
                allInputCircles[z18+1023].setAttributeNS(null, "stroke", "greenyellow");
                z18 += 8;
            }
            for(let z19 = 0; z19 < 18; z19 += 1){
                allInputCircles[z19+1072].style.fill = "black";
                allInputCircles[z19+1072].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z19+1074].style.fill = "black";
                allInputCircles[z19+1074].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z19+1076].style.fill = "black";
                allInputCircles[z19+1076].setAttributeNS(null, "stroke", "greenyellow");
                z19 += 8;
            }
            for(let z20 = 0; z20 < 18; z20 +=1){
                allInputCircles[z20+1125].style.fill = "black";
                allInputCircles[z20+1125].setAttributeNS(null, "stroke", "greenyellow");
                allInputCircles[z20+1127].style.fill = "black";
                allInputCircles[z20+1127].setAttributeNS(null, "stroke", "greenyellow");
                z20 += 8;
            }
            for(let a21 = 0; a21 < 20; a21 += 1){
                allInputCircles[a21+1095].style.fill = "black";
                allInputCircles[a21+1095].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a21+1097].style.fill = "black";
                allInputCircles[a21+1097].setAttributeNS(null, "stroke", "tomato");
                a21 += 8;
            }
            for(let a22 = 0; a22 < 20; a22 += 1){
                allInputCircles[a22+1146].style.fill = "black";
                allInputCircles[a22+1146].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a22+1148].style.fill = "black";
                allInputCircles[a22+1148].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a22+1150].style.fill = "black";
                allInputCircles[a22+1150].setAttributeNS(null, "stroke", "tomato");
                a22 += 8;
            }
            for(let a23 = 0; a23 < 20; a23 += 1){
                allInputCircles[a23+1199].style.fill = "black";
                allInputCircles[a23+1199].setAttributeNS(null, "stroke", "tomato");
                allInputCircles[a23+1201].style.fill = "black";
                allInputCircles[a23+1201].setAttributeNS(null, "stroke", "tomato");
                a23 +=8;
            }

        })
    }());

    (function showMolecularTemplate(){
        OPTION2.addEventListener("click", function(){
            for(i = 0; i < allInputCircles.length; i += 1){
                allInputCircles[i].style.fill = "grey";
                allInputCircles[i].setAttributeNS(null, "stroke", "none");
            }

            for(let x0 = 0; x0 < 18; x0 += 1){
                allInputCircles[x0+6].style.fill = "black";
                allInputCircles[x0+6].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x0+7].style.fill = "black";
                allInputCircles[x0+7].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x0+9].style.fill = "black";
                allInputCircles[x0+9].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x0+10].style.fill = "black";
                allInputCircles[x0+10].setAttributeNS(null, "stroke", "cornflowerblue");
                x0 += 8;
            }
            for(let x1 = 0; x1 < 18; x1 += 1){
                allInputCircles[x1+31].style.fill = "black";
                allInputCircles[x1+31].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x1+32].style.fill = "black";
                allInputCircles[x1+32].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x1+33].style.fill = "black";
                allInputCircles[x1+33].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x1+34].style.fill = "black";
                allInputCircles[x1+34].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x1+35].style.fill = "black";
                allInputCircles[x1+35].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x1+36].style.fill = "black";
                allInputCircles[x1+36].setAttributeNS(null, "stroke", "cornflowerblue");
                x1 += 8;
            }
            for(let x2 = 0; x2 < 18; x2 += 1){
                allInputCircles[x2+58].style.fill = "black";
                allInputCircles[x2+58].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x2+59].style.fill = "black";
                allInputCircles[x2+59].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x2+61].style.fill = "black";
                allInputCircles[x2+61].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x2+62].style.fill = "black";
                allInputCircles[x2+62].setAttributeNS(null, "stroke", "cornflowerblue");
                x2 += 8;
            }
            for(let x3 = 0; x3 < 18; x3 += 1){
                allInputCircles[x3+82].style.fill = "black";
                allInputCircles[x3+82].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x3+83].style.fill = "black";
                allInputCircles[x3+83].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x3+88].style.fill = "black";
                allInputCircles[x3+88].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x3+89].style.fill = "black";
                allInputCircles[x3+89].setAttributeNS(null, "stroke", "cornflowerblue");
                x3 += 8;
            }
            for(let x4 = 0; x4 < 18; x4 += 1){
                allInputCircles[x4+108].style.fill = "black";
                allInputCircles[x4+108].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x4+109].style.fill = "black";
                allInputCircles[x4+109].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x4+110].style.fill = "black";
                allInputCircles[x4+110].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x4+112].style.fill = "black";
                allInputCircles[x4+112].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x4+114].style.fill = "black";
                allInputCircles[x4+114].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x4+115].style.fill = "black";
                allInputCircles[x4+115].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x4+116].style.fill = "black";
                allInputCircles[x4+116].setAttributeNS(null, "stroke", "cornflowerblue");
                x4 += 8;
            }
            for(let x5 = 0; x5 < 18; x5 += 1){
                allInputCircles[x5+134].style.fill = "black";
                allInputCircles[x5+134].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x5+135].style.fill = "black";
                allInputCircles[x5+135].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x5+140].style.fill = "black";
                allInputCircles[x5+140].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x5+141].style.fill = "black";
                allInputCircles[x5+141].setAttributeNS(null, "stroke", "cornflowerblue");
                x5 += 8;
            }
            for(let x6 = 0; x6 < 18; x6 += 1){
                allInputCircles[x6+162].style.fill = "black";
                allInputCircles[x6+162].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x6+163].style.fill = "black";
                allInputCircles[x6+163].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x6+165].style.fill = "black";
                allInputCircles[x6+165].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x6+166].style.fill = "black";
                allInputCircles[x6+166].setAttributeNS(null, "stroke", "cornflowerblue");
                x6 += 8;
            }
            for(let x7 = 0; x7 < 18; x7 += 1){
                allInputCircles[x7+187].style.fill = "black";
                allInputCircles[x7+187].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x7+188].style.fill = "black";
                allInputCircles[x7+188].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x7+189].style.fill = "black";
                allInputCircles[x7+189].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x7+190].style.fill = "black";
                allInputCircles[x7+190].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x7+191].style.fill = "black";
                allInputCircles[x7+191].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x7+192].style.fill = "black";
                allInputCircles[x7+192].setAttributeNS(null, "stroke", "cornflowerblue");
                x7 += 8;
            }

            for(let x8 = 0; x8 < 18; x8 += 1){
                allInputCircles[x8+214].style.fill = "black";
                allInputCircles[x8+214].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x8+215].style.fill = "black";
                allInputCircles[x8+215].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x8+217].style.fill = "black";
                allInputCircles[x8+217].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x8+218].style.fill = "black";
                allInputCircles[x8+218].setAttributeNS(null, "stroke", "cornflowerblue");
                x8 += 8;
            }
            for(let x9 = 0; x9 < 8; x9 += 1){
                allInputCircles[x9+244].style.fill = "black";
                allInputCircles[x9+244].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x9+245].style.fill = "black";
                allInputCircles[x9+245].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x9+247].style.fill = "black";
                allInputCircles[x9+247].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x9+248].style.fill = "black";
                allInputCircles[x9+248].setAttributeNS(null, "stroke", "cornflowerblue");
                x9 += 8;
            }
            for(let x10 = 0; x10 < 6; x10 += 1){
                allInputCircles[x10+270].style.fill = "black";
                allInputCircles[x10+270].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x10+271].style.fill = "black";
                allInputCircles[x10+271].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x10+272].style.fill = "black";
                allInputCircles[x10+272].setAttributeNS(null, "stroke", "cornflowerblue");
                x10 += 2;
            }
            for(let x11 = 0; x11 < 6; x11 += 1){
                allInputCircles[x11+296].style.fill = "black";
                allInputCircles[x11+296].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[x11+297].style.fill = "black";
                allInputCircles[x11+297].setAttributeNS(null, "stroke", "cornflowerblue");
                x11 += 2;
            }
            for(let y0 = 0; y0 < 18; y0 += 1){
                allInputCircles[y0+318].style.fill = "black";
                allInputCircles[y0+318].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y0+319].style.fill = "black";
                allInputCircles[y0+319].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y0+321].style.fill = "black";
                allInputCircles[y0+321].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y0+322].style.fill = "black";
                allInputCircles[y0+322].setAttributeNS(null, "stroke", "cornflowerblue");
                y0 += 8;
            }
            for(let y1 = 0; y1 < 18; y1 += 1){
                allInputCircles[y1+343].style.fill = "black";
                allInputCircles[y1+343].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y1+344].style.fill = "black";
                allInputCircles[y1+344].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y1+345].style.fill = "black";
                allInputCircles[y1+345].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y1+346].style.fill = "black";
                allInputCircles[y1+346].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y1+347].style.fill = "black";
                allInputCircles[y1+347].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y1+348].style.fill = "black";
                allInputCircles[y1+348].setAttributeNS(null, "stroke", "cornflowerblue");
                y1 += 8;
            }
            for(let y2 = 0; y2 < 18; y2 += 1){
                allInputCircles[y2+370].style.fill = "black";
                allInputCircles[y2+370].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y2+371].style.fill = "black";
                allInputCircles[y2+371].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y2+373].style.fill = "black";
                allInputCircles[y2+373].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y2+374].style.fill = "black";
                allInputCircles[y2+374].setAttributeNS(null, "stroke", "cornflowerblue");
                y2 += 8;
            }
            for(let y3 = 0; y3 < 18; y3 += 1){
                allInputCircles[y3+394].style.fill = "black";
                allInputCircles[y3+394].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y3+395].style.fill = "black";
                allInputCircles[y3+395].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y3+400].style.fill = "black";
                allInputCircles[y3+400].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y3+401].style.fill = "black";
                allInputCircles[y3+401].setAttributeNS(null, "stroke", "cornflowerblue");
                y3 += 8;
            }
            for(let y4 = 0; y4 < 18; y4 += 1){
                allInputCircles[y4+420].style.fill = "black";
                allInputCircles[y4+420].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y4+421].style.fill = "black";
                allInputCircles[y4+421].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y4+422].style.fill = "black";
                allInputCircles[y4+422].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y4+424].style.fill = "black";
                allInputCircles[y4+424].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y4+426].style.fill = "black";
                allInputCircles[y4+426].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y4+427].style.fill = "black";
                allInputCircles[y4+427].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y4+428].style.fill = "black";
                allInputCircles[y4+428].setAttributeNS(null, "stroke", "cornflowerblue");
                y4 += 8;
            }
            for(let y5 = 0; y5 < 18; y5 += 1){
                allInputCircles[y5+446].style.fill = "black";
                allInputCircles[y5+446].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y5+447].style.fill = "black";
                allInputCircles[y5+447].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y5+452].style.fill = "black";
                allInputCircles[y5+452].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y5+453].style.fill = "black";
                allInputCircles[y5+453].setAttributeNS(null, "stroke", "cornflowerblue");
                y5 += 8;
            }
            for(let y6 = 0; y6 < 18; y6 += 1){
                allInputCircles[y6+474].style.fill = "black";
                allInputCircles[y6+474].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y6+475].style.fill = "black";
                allInputCircles[y6+475].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y6+477].style.fill = "black";
                allInputCircles[y6+477].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y6+478].style.fill = "black";
                allInputCircles[y6+478].setAttributeNS(null, "stroke", "cornflowerblue");
                y6 += 8;
            }
            for(let y7 = 0; y7 < 18; y7 += 1){
                allInputCircles[y7+499].style.fill = "black";
                allInputCircles[y7+499].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y7+500].style.fill = "black";
                allInputCircles[y7+500].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y7+501].style.fill = "black";
                allInputCircles[y7+501].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y7+502].style.fill = "black";
                allInputCircles[y7+502].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y7+503].style.fill = "black";
                allInputCircles[y7+503].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y7+504].style.fill = "black";
                allInputCircles[y7+504].setAttributeNS(null, "stroke", "cornflowerblue");
                y7 += 8;
            }
            for(let y8 = 0; y8 < 18; y8 += 1){
                allInputCircles[y8+526].style.fill = "black";
                allInputCircles[y8+526].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y8+527].style.fill = "black";
                allInputCircles[y8+527].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y8+529].style.fill = "black";
                allInputCircles[y8+529].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y8+530].style.fill = "black";
                allInputCircles[y8+530].setAttributeNS(null, "stroke", "cornflowerblue");
                y8 += 8;
            }
            for(let y9 = 0; y9 < 6; y9 += 1){
                allInputCircles[y9+556].style.fill = "black";
                allInputCircles[y9+556].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y9+557].style.fill = "black";
                allInputCircles[y9+557].setAttributeNS(null, "stroke", "cornflowerblue");
                y9 += 2;
            }
            for(let y10 = 0; y10 < 6; y10 += 1){
                allInputCircles[y10+582].style.fill = "black";
                allInputCircles[y10+582].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y10+583].style.fill = "black";
                allInputCircles[y10+583].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y10+584].style.fill = "black";
                allInputCircles[y10+584].setAttributeNS(null, "stroke", "cornflowerblue");
                y10 += 2;
            }
            for(let y11 = 0; y11 < 6; y11 += 1){
                allInputCircles[y11+608].style.fill = "black";
                allInputCircles[y11+608].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[y11+609].style.fill = "black";
                allInputCircles[y11+609].setAttributeNS(null, "stroke", "cornflowerblue");
                y11 += 2;
            }
            for(let z0 = 0; z0 < 18; z0 += 1){
                allInputCircles[z0+630].style.fill = "black";
                allInputCircles[z0+630].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z0+631].style.fill = "black";
                allInputCircles[z0+631].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z0+633].style.fill = "black";
                allInputCircles[z0+633].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z0+634].style.fill = "black";
                allInputCircles[z0+634].setAttributeNS(null, "stroke", "cornflowerblue");
                z0 += 8;
            }
            for(let z1 = 0; z1 < 18; z1 += 1){
                allInputCircles[z1+655].style.fill = "black";
                allInputCircles[z1+655].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z1+656].style.fill = "black";
                allInputCircles[z1+656].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z1+657].style.fill = "black";
                allInputCircles[z1+657].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z1+658].style.fill = "black";
                allInputCircles[z1+658].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z1+659].style.fill = "black";
                allInputCircles[z1+659].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z1+660].style.fill = "black";
                allInputCircles[z1+660].setAttributeNS(null, "stroke", "cornflowerblue");
                z1 += 8;
            }
            for(let z2 = 0; z2 < 18; z2 += 1){
                allInputCircles[z2+682].style.fill = "black";
                allInputCircles[z2+682].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z2+683].style.fill = "black";
                allInputCircles[z2+683].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z2+685].style.fill = "black";
                allInputCircles[z2+685].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z2+686].style.fill = "black";
                allInputCircles[z2+686].setAttributeNS(null, "stroke", "cornflowerblue");
                z2 += 8;
            }
            for(let z3 = 0; z3 < 18; z3 += 1){
                allInputCircles[z3+706].style.fill = "black";
                allInputCircles[z3+706].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z3+707].style.fill = "black";
                allInputCircles[z3+707].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z3+712].style.fill = "black";
                allInputCircles[z3+712].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z3+713].style.fill = "black";
                allInputCircles[z3+713].setAttributeNS(null, "stroke", "cornflowerblue");
                z3 += 8;
            }
            for(let z4 = 0; z4 < 18; z4 += 1){
                allInputCircles[z4+732].style.fill = "black";
                allInputCircles[z4+732].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z4+733].style.fill = "black";
                allInputCircles[z4+733].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z4+734].style.fill = "black";
                allInputCircles[z4+734].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z4+736].style.fill = "black";
                allInputCircles[z4+736].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z4+738].style.fill = "black";
                allInputCircles[z4+738].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z4+739].style.fill = "black";
                allInputCircles[z4+739].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z4+740].style.fill = "black";
                allInputCircles[z4+740].setAttributeNS(null, "stroke", "cornflowerblue");
                z4 += 8;
            }
            for(let z5 = 0; z5 < 18; z5 += 1){
                allInputCircles[z5+758].style.fill = "black";
                allInputCircles[z5+758].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z5+759].style.fill = "black";
                allInputCircles[z5+759].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z5+764].style.fill = "black";
                allInputCircles[z5+764].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z5+765].style.fill = "black";
                allInputCircles[z5+765].setAttributeNS(null, "stroke", "cornflowerblue");
                z5 += 8;
            }
            for(let z6 = 0; z6 < 18; z6 += 1){
                allInputCircles[z6+786].style.fill = "black";
                allInputCircles[z6+786].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z6+787].style.fill = "black";
                allInputCircles[z6+787].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z6+789].style.fill = "black";
                allInputCircles[z6+789].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z6+790].style.fill = "black";
                allInputCircles[z6+790].setAttributeNS(null, "stroke", "cornflowerblue");
                z6 += 8;
            }
            for(let z7 = 0; z7 < 18; z7 += 1){
                allInputCircles[z7+811].style.fill = "black";
                allInputCircles[z7+811].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z7+812].style.fill = "black";
                allInputCircles[z7+812].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z7+813].style.fill = "black";
                allInputCircles[z7+813].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z7+814].style.fill = "black";
                allInputCircles[z7+814].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z7+815].style.fill = "black";
                allInputCircles[z7+815].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z7+816].style.fill = "black";
                allInputCircles[z7+816].setAttributeNS(null, "stroke", "cornflowerblue");
                z7 += 8;
            }
            for(let z8 = 0; z8 < 18; z8 += 1){
                allInputCircles[z8+838].style.fill = "black";
                allInputCircles[z8+838].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z8+839].style.fill = "black";
                allInputCircles[z8+839].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z8+841].style.fill = "black";
                allInputCircles[z8+841].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z8+842].style.fill = "black";
                allInputCircles[z8+842].setAttributeNS(null, "stroke", "cornflowerblue");
                z8 += 8;
            }
            for(let z9 = 0; z9 < 6; z9 += 1){
                allInputCircles[z9+868].style.fill = "black";
                allInputCircles[z9+868].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z9+869].style.fill = "black";
                allInputCircles[z9+869].setAttributeNS(null, "stroke", "cornflowerblue");
                z9 +=2;
            }
            for(let z10 = 0; z10 < 6; z10 += 1){
                allInputCircles[z10+894].style.fill = "black";
                allInputCircles[z10+894].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z10+895].style.fill = "black";
                allInputCircles[z10+895].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z10+896].style.fill = "black";
                allInputCircles[z10+896].setAttributeNS(null, "stroke", "cornflowerblue");
                z10 += 2;
            }
            for(let z11 = 0; z11 < 6; z11 += 1){
                allInputCircles[z11+920].style.fill = "black";
                allInputCircles[z11+920].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[z11+921].style.fill = "black";
                allInputCircles[z11+921].setAttributeNS(null, "stroke", "cornflowerblue");
                z11 += 2;
            }
            for(let w0 = 0; w0 < 18; w0 += 1){
                allInputCircles[w0+942].style.fill = "black";
                allInputCircles[w0+942].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w0+943].style.fill = "black";
                allInputCircles[w0+943].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w0+945].style.fill = "black";
                allInputCircles[w0+945].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w0+946].style.fill = "black";
                allInputCircles[w0+946].setAttributeNS(null, "stroke", "cornflowerblue");
                w0 += 8;
            }
            for(let w1 = 0; w1 < 18; w1 += 1){
                allInputCircles[w1+967].style.fill = "black";
                allInputCircles[w1+967].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w1+968].style.fill = "black";
                allInputCircles[w1+968].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w1+969].style.fill = "black";
                allInputCircles[w1+969].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w1+970].style.fill = "black";
                allInputCircles[w1+970].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w1+971].style.fill = "black";
                allInputCircles[w1+971].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w1+972].style.fill = "black";
                allInputCircles[w1+972].setAttributeNS(null, "stroke", "cornflowerblue");
                w1 += 8;
            }
            for(let w2 = 0; w2 < 18; w2 += 1){
                allInputCircles[w2+994].style.fill = "black";
                allInputCircles[w2+994].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w2+995].style.fill = "black";
                allInputCircles[w2+995].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w2+997].style.fill = "black";
                allInputCircles[w2+997].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w2+998].style.fill = "black";
                allInputCircles[w2+998].setAttributeNS(null, "stroke", "cornflowerblue");
                w2 += 8;
            }
            for(let w3 = 0; w3 < 18; w3 += 1){
                allInputCircles[w3+1018].style.fill = "black";
                allInputCircles[w3+1018].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w3+1019].style.fill = "black";
                allInputCircles[w3+1019].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w3+1024].style.fill = "black";
                allInputCircles[w3+1024].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w3+1025].style.fill = "black";
                allInputCircles[w3+1025].setAttributeNS(null, "stroke", "cornflowerblue");
                w3 += 8;
            }
            for(let w4 = 0; w4 < 18; w4 += 1){
                allInputCircles[w4+1044].style.fill = "black";
                allInputCircles[w4+1044].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w4+1045].style.fill = "black";
                allInputCircles[w4+1045].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w4+1046].style.fill = "black";
                allInputCircles[w4+1046].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w4+1048].style.fill = "black";
                allInputCircles[w4+1048].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w4+1050].style.fill = "black";
                allInputCircles[w4+1050].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w4+1051].style.fill = "black";
                allInputCircles[w4+1051].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w4+1052].style.fill = "black";
                allInputCircles[w4+1052].setAttributeNS(null, "stroke", "cornflowerblue");
                w4 += 8;
            }
            for(let w5 = 0; w5 < 18; w5 += 1){
                allInputCircles[w5+1070].style.fill = "black";
                allInputCircles[w5+1070].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w5+1071].style.fill = "black";
                allInputCircles[w5+1071].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w5+1076].style.fill = "black";
                allInputCircles[w5+1076].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w5+1077].style.fill = "black";
                allInputCircles[w5+1077].setAttributeNS(null, "stroke", "cornflowerblue");
                w5 += 8;
            }
            for(let w6 = 0; w6 < 18; w6 += 1){
                allInputCircles[w6+1098].style.fill = "black";
                allInputCircles[w6+1098].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w6+1099].style.fill = "black";
                allInputCircles[w6+1099].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w6+1101].style.fill = "black";
                allInputCircles[w6+1101].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w6+1102].style.fill = "black";
                allInputCircles[w6+1102].setAttributeNS(null, "stroke", "cornflowerblue");
                w6 += 8;
            }
            for(let w7 = 0; w7 < 18; w7 += 1){
                allInputCircles[w7+1123].style.fill = "black";
                allInputCircles[w7+1123].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w7+1124].style.fill = "black";
                allInputCircles[w7+1124].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w7+1125].style.fill = "black";
                allInputCircles[w7+1125].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w7+1126].style.fill = "black";
                allInputCircles[w7+1126].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w7+1127].style.fill = "black";
                allInputCircles[w7+1127].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w7+1128].style.fill = "black";
                allInputCircles[w7+1128].setAttributeNS(null, "stroke", "cornflowerblue");
                w7 += 8;
            }
            for(let w8 = 0; w8 < 18; w8 += 1){
                allInputCircles[w8+1150].style.fill = "black";
                allInputCircles[w8+1150].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w8+1151].style.fill = "black";
                allInputCircles[w8+1151].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w8+1153].style.fill = "black";
                allInputCircles[w8+1153].setAttributeNS(null, "stroke", "cornflowerblue");
                allInputCircles[w8+1154].style.fill = "black";
                allInputCircles[w8+1154].setAttributeNS(null, "stroke", "cornflowerblue");
                w8 += 8;
            }

            allInputCircles[194].style.fill = "black";
            allInputCircles[194].setAttributeNS(null, "stroke", "cornflowerblue");
            allInputCircles[350].style.fill = "black";
            allInputCircles[350].setAttributeNS(null, "stroke", "cornflowerblue");
            allInputCircles[506].style.fill = "black";
            allInputCircles[506].setAttributeNS(null, "stroke", "cornflowerblue");
            allInputCircles[662].style.fill = "black";
            allInputCircles[662].setAttributeNS(null, "stroke", "cornflowerblue");
            allInputCircles[818].style.fill = "black";
            allInputCircles[818].setAttributeNS(null, "stroke", "cornflowerblue");
            allInputCircles[974].style.fill = "black";
            allInputCircles[974].setAttributeNS(null, "stroke", "cornflowerblue");
        })
    }());

    (function makeCirclesGrey(){
        OPTION3.addEventListener("click", function(){
            for(i = 0; i < allInputCircles.length; i += 1){
                allInputCircles[i].style.fill = "grey";
                allInputCircles[i].setAttributeNS(null, "stroke", "none");
            }
        })
    }());

    mess.addEventListener("click", function(){
        location.reload();
    })

}());

