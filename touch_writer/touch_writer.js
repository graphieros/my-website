/*
TODO:
    > save to jpg : http://bl.ocks.org/biovisualize/8187844
    > function to change colors: modal window
    > function to change size of glyphs
    > sketch for pattern recognition to translate basic concepts
*/ 

(function main(){

    //initial y glyph coordinates
    let y_top = 50;
    let y_mid = 128;
    let y_bot = 206;

    //initial x glyph coordinates
    let x_left = 38;
    let x_left_mid = 83;
    let x_mid = 128;
    let x_right_mid = 173;
    let x_right = 218;

    const _p = `<path d="M `;
    // const _p_ = `style="stroke:${grab_color()};" d="M`;
    const p_ = '"/>';

    const svg_container = document.getElementById("svg_container");
    const xmlns = "http://www.w3.org/2000/svg";
    const output_area = document.createElementNS(xmlns, "svg");
    output_area.id = "output_area";
    
    let svg_width= 3000;

    let svg_height = svg_width * 2;
    output_area.setAttributeNS(null, "viewBox", `0 0 ${svg_width} ${svg_height}`);
    output_area.style.height = "800px";
    output_area.style.width = "400px";
    svg_container.appendChild(output_area);
    output_area.setAttributeNS(null, "stroke", "white");

    let svg_preview = document.createElementNS(xmlns, "svg");
    svg_preview.setAttributeNS(null, "viewBox", "0 0 260 260");
    svg_preview.setAttributeNS(null, "stroke", "white");
    svg_preview.height = "100px";
    svg_preview.width = "100px";
    svg_preview.id = "svg_preview";
    document.body.appendChild(svg_preview);

    const outahere = document.getElementById("claver");
    const keys = document.getElementsByClassName("key");
    const view = document.getElementById("view");
    const erase = document.getElementById("erase");
    const ok = document.getElementById("ok");
    const space = document.getElementById("space");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const erase_all = document.getElementById("erase_all");
    const translator = document.getElementById("translator");
    const circle_preview = document.getElementById("circle_preview");
    const light = document.getElementById("light");
    const counter_left = document.getElementById("left_counter");
    const counter_up = document.getElementById("up_counter");
    const counter_down = document.getElementById("down_counter");
    const counter_right = document.getElementById("right_counter");
    let circles = document.getElementsByClassName("circles");


    let up_down_counter = 0;
    let left_right_counter = 0;
    let stax = [];

    function curse(){
        for(let i = 0; i < circles.length; i += 1){
            stax.push(circles[i]);
        }

        if(stax.length >= 1){
            let lastel = stax[stax.length - 1];

            if(stax.length > 1 || lastel.id !== "dummy"){
                let xx = document.getElementById("g_cursor");
                output_area.removeChild(xx);
            }

            let circle = document.createElementNS(xmlns, "circle");
            circle.id = "g_cursor";
            circle.className = "circles";
            circle.setAttributeNS(null, "cx", x_mid);
            circle.setAttributeNS(null, "cy", y_mid);
            stax.push(circle);
            output_area.appendChild(stax.pop());
        }

        stax = [];

        for(let i = 0; i < circles.length; i += 1){
            stax.push(circles[i]);
        }
    }

    document.onload = curse();

    light.addEventListener("click", function(){

        if(light.innerHTML === "0"){
            output_area.style.stroke = "black";
            output_area.style.background = "white";
            this.innerHTML = "1";
            this.style.background = "black";
            this.style.border = "2px solid white";
        }else{
            output_area.style.stroke = "white";
            output_area.style.background = "black";
            this.innerHTML = "0";
            this.style.background ="white";
            this.style.border = "2px solid black";
        }

    });


    let glyph_reference = [
        {
            name: '_nmo',
            fr: 'nommer',
            path: [[x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot]]
        },
        {
            name: '_sola',
            fr: 'son',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_sota',
            fr: 'ton',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid]],
        },
        {
            name: '_kwi',
            fr: 'qui',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_ze',
            fr: 'utiliser',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_bot]],
        },
        {
            name: '_vrea',
            fr: 'vrai',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_v3ai',
            fr: 'vouloir',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_flae',
            fr: 'voler',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_vloi',
            fr: 'volume',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_sta',
            fr: 'voir',
            path: [[x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot]],
        },
        {
            name: '_ko',
            fr: 'voici',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_vlo',
            fr: 'vitesse',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid]],
        },
        {
            name: '_vzi',
            fr: 'visage',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_vzy',
            fr: 'virus',
            path: [[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top]],
        },
        {
            name: '_vle',
            fr: 'violet',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_ldo',
            fr: 'vieux',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_vey',
            fr: 'vieillard',
            path: [[x_left,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid]],
        },
        {
            name: '_vde',
            fr: 'vider',
            path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_vzey',
            fr: 'vice',
            path: [[x_left_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_vba',
            fr: 'vibrer',
            path: [[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left,y_mid,x_left,y_mid]],
        },
        {
            name: '_vry',
            fr: 'vertu',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_vrae',
            fr: 'vert',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_kto',
            fr: 'vers',
            path: [[x_left,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_rmye',
            fr: 'ver',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_sloi',
            fr: 'vendre',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_pio',
            fr: 'végétal',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]],
        },
        {
            name: '_vnia',
            fr: 'varier',
            path: [[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_vlia',
            fr: 'valoriser',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_vkye',
            fr: 'vaincre',
            path: [[x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_waa',
            fr: 'trouver',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_tro',
            fr: 'trop',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_bse',
            fr: 'trébucher',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_tie',
            fr: 'traverser',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_tvai',
            fr: 'travailler',
            path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_zit',
            fr: 'transitionner',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_mne',
            fr: 'transgenre',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_tew',
            fr: 'tout',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_bot]],
        },
        {
            name: '_pko',
            fr: 'toucher',
            path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_tnogma',
            fr: 'tonne',
            path: [[x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_pley',
            fr: 'tirer',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_tra3',
            fr: 'théâtre',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_toi',
            fr: 'texte',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_tea',
            fr: 'tête',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_ste',
            fr: 'tester',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_trea',
            fr: 'terre',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_kpoile',
            fr: 'temps',
            path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot]],
        },
        {
            name: '_po',
            fr: 'température',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_tle',
            fr: 'téléphoner',
            path: [[x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_zlae',
            fr: 'tant',
            path: [[x_left,y_mid,x_left_mid,y_top],[x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_sai',
            fr: 'taille',
            path: [[x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_stu',
            fr: 'synthétiser',
            path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_sbo',
            fr: 'symboliser',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_tpe',
            fr: 'sur',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_flo',
            fr: 'suivre',
            path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_pkae',
            fr: 'sujet',
            path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_ske',
            fr: 'sucrer',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_fi',
            fr: 'subjonctif',
            path: [[x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_svo',
            fr: 'souvent',
            path: [[x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top]],
        },
        {
            name: '_nde',
            fr: 'sous',
            path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_sple',
            fr: 'souple',
            path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_3nu',
            fr: 'soumettre',
            path: [[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_soma',
            fr: 'soi',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid]],
        },
        {
            name: '_mki',
            fr: 'singe',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_snea',
            fr: 'simplifier',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_zei',
            fr: 'si',
            path: [[x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_skwa',
            fr: 'sexe',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_lno',
            fr: 'seul',
            path: [[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_trey',
            fr: 'séparer',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_smu',
            fr: 'sentir',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_vye',
            fr: 'sens',
            path: [[x_left,y_mid,x_mid,y_mid],[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_sge',
            fr: 'segmenter',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_sky',
            fr: 'sécuriser',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_d3y',
            fr: 'seconde',
            path: [[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_so',
            fr: 'se',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_',
            fr: '',
            path: [[]],
        },
        {
            name: '_sle',
            fr: 'saler',
            path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid]],
        },
        {
            name: '_rgo',
            fr: 'rouge',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_rwe',
            fr: 'roue',
            path: [[x_right,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_rgya',
            fr: 'rongeur',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_lfaw',
            fr: 'rire',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_left_mid,y_top],[x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_rgi',
            fr: 'rigide',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_ne',
            fr: 'rien',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_swo',
            fr: 'revenir',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
        },
        {
            name: '_rve',
            fr: 'réveiller',
            path: [[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_mid,y_mid]],
        },
        {
            name: '_rto',
            fr: 'retourner',
            path: [[x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_lvoi',
            fr: 'retirer',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_zle',
            fr: 'résulter',
            path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_pta',
            fr: 'reptile',
            path: [[x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid,x_right,y_mid,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_rpie',
            fr: 'répéter',
            path: [[x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_top,x_mid,y_mid]],
        },
        {
            name: '_fksi',
            fr: 'réparer',
            path: [[x_right,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_floi',
            fr: 'remplir',
            path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_rdai',
            fr: 'refaire',
            path: [[x_mid,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid,x_mid,y_mid]],
        },
        {
            name: '_tba',
            fr: 'récipient',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_rsea',
            fr: 'recevoir',
            path: [[x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_rbae',
            fr: 'rebondir',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_snoi',
            fr: 'rayonner',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]],
        },
        {
            name: '_groi',
            fr: 'ramper',
            path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid]],
        },
        {
            name: '_rma',
            fr: 'ramasser',
            path: [[x_left,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_slo',
            fr: 'ralentir',
            path: [[x_right,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_wo',
            fr: 'questionner',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_kwa',
            fr: 'que',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_kta',
            fr: 'quantité',
            path: [[x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid]],
        },
        {
            name: '_fkwe',
            fr: 'quand',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_3e',
            fr: 'protéger',
            path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_prai',
            fr: 'proportionner',
            path: [[x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_prio',
            fr: 'programmer',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_tpia',
            fr: 'profond',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_pre',
            fr: 'près',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_ra',
            fr: 'prendre',
            path: [[x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_frya',
            fr: 'pouvoir',
            path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_psie',
            fr: 'pousser',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_vwa',
            fr: 'pourquoi',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_psu',
            fr: 'positionner',
            path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot],[x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_ptoi',
            fr: 'porter',
            path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid]],
        },
        {
            name: '_lbay',
            fr: 'porcin',
            path: [[x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top]],
        },
        {
            name: '_ptea',
            fr: 'poitriner',
            path: [[x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_psaw',
            fr: 'poisson',
            path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_fky',
            fr: 'pointer',
            path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_ploi',
            fr: 'poil',
            path: [[x_left,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_vdio',
            fr: 'plus',
            path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_tsi',
            fr: 'pluriel',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_plwe',
            fr: 'plume',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_pli',
            fr: 'plier',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_pto',
            fr: 'pleuvoir',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_pla',
            fr: 'planifier',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_left,y_mid]],
        },
        {
            name: '_pnae',
            fr: 'planète',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_aria',
            fr: 'planer',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_top,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_ueoa',
            fr: 'plaisir',
            path: [[x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid]],
        },
        {
            name: '_pvo',
            fr: 'pivoter',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_vdibwa',
            fr: 'pire',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_pke',
            fr: 'piquant',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_gwi',
            fr: 'pingouin',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_trai',
            fr: 'piéger',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_fti',
            fr: 'pied',
            path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
        },
        {
            name: '_sfi',
            fr: 'peur',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_psia',
            fr: 'peser',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_lse',
            fr: 'perdre',
            path: [[x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_dri',
            fr: 'percer',
            path: [[x_right,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_left,y_mid]],
        },
        {
            name: '_hia',
            fr: 'penser',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid]],
        },
        {
            name: '_pda',
            fr: 'pendant',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_prye',
            fr: 'part',
            path: [[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_psoi',
            fr: 'passé',
            path: [[x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_pmi',
            fr: 'parmi',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top]],
        },
        {
            name: '_vga',
            fr: 'parfumer',
            path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_smai',
            fr: 'parfois',
            path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_prae',
            fr: 'parcourir',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid]],
        },
        {
            name: '_ba',
            fr: 'par',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_mriy',
            fr: 'papillon',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_sra',
            fr: 'pacifier',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_pno',
            fr: 'ouvrir',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid]],
        },
        {
            name: '_he',
            fr: 'oui',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_roi',
            fr: 'ou',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_sdey',
            fr: 'où',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_bnio',
            fr: 'os',
            path: [[x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_via',
            fr: 'originer',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid]],
        },
        {
            name: '_rgia',
            fr: 'organe',
            path: [[x_right_mid,y_top,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top],[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_rdo',
            fr: 'ordonner',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_r3y',
            fr: 'orange',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_vroi',
            fr: 'or',
            path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_gnae',
            fr: 'onde',
            path: [[x_left,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_broi',
            fr: 'ombre',
            path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_zo',
            fr: 'oiseau',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_gwa',
            fr: 'oeuf',
            path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_ptae',
            fr: 'objet',
            path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_ney',
            fr: 'nouveau',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_fdu',
            fr: 'nourrir',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_nia',
            fr: 'non',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid, y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_na',
            fr: 'ni',
            path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_top]],
        },
        {
            name: '_nsio',
            fr: 'nécessiter',
            path: [[x_left_mid,y_top,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_zmi',
            fr: 'musique',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_mso',
            fr: 'muscler',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_mksi',
            fr: 'multiplier',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_ftey',
            fr: 'mou',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_mtu',
            fr: 'montagne',
            path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_mu',
            fr: 'mollusque',
            path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_mni',
            fr: 'moins',
            path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_d3io',
            fr: 'minute',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_mina',
            fr: 'minéral',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,x_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_mlimza',
            fr: 'millimètre',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_mligma',
            fr: 'milligramme',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_mdo',
            fr: 'milieu',
            path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_vdikeo',
            fr: 'mieux',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_pne',
            fr: 'mettre',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_mid,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_mza',
            fr: 'mètre',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
        },
        {
            name: '_mto',
            fr: 'métal',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_bwa',
            fr: 'mauvais',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_mtai',
            fr: 'matière',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid, x_right_mid,y_bot]],
        },
        {
            name: '_lfe',
            fr: 'mastodonte',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_top]],
        },
        {
            name: '_chka',
            fr: 'masquer',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_msy',
            fr: 'marsupial',
            path: [[x_left,y_mid,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_top],[x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_mrai',
            fr: 'marquer',
            path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_mno',
            fr: 'mâle',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_nfea',
            fr: 'maladie',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_pro',        
            fr: 'mais',        
            path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],        
        },        
        {        
            name: '_sna',        
            fr: 'maigrir',        
            path: [[x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid]],        
        },        
        {        
            name: '_lya',        
            fr: 'lune',        
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid]]        
        },        
        {        
            name: '_hea',        
            fr: 'lumière',        
            path: [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot]],        
        },        
        {        
            name: '_lro',        
            fr: 'lourd',        
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],        
        },        
        {        
            name: '_lgya',        
            fr: 'long',        
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top]],        
        },        
        {        
            name: '_fra',        
            fr: 'loin',        
            path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top]]        
        },        
        {       
            name: '_sti',        
            fr: 'lister',        
            path: [[x_right_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top]]        
        },        
        {        
            name: '_lpae',        
            fr: 'lèvre',        
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]]        
        },        
        {        
            name: '_lgy',        
            fr: 'légume',        
            path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]]        
        },        
        {        
            name: '_lgio',        
            fr: 'langage',        
            path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]]
        },
        {
            name: '_ska',
            fr: 'lancer',
            path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_klotogma',
            fr: 'kilotonne',
            path: [[x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_klomza',
            fr: 'kilomètre',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid]],
        },
        {
            name: '_klogma',
            fr: 'kilogramme',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_tli',
            fr: 'jusque',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_kadwa',
            fr: 'jour',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
        },
        {
            name: '_3go',
            fr: 'jouer',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_ntew',
            fr: 'interrompre',
            path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_nsa',
            fr: 'intérieur',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_kea',
            fr: 'intelligence',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top]],
        },
        {
            name: '_chra',
            fr: 'insulter',
            path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_pse',
            fr: 'insuffire',
            path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_skew',
            fr: 'insecte',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_nfo',
            fr: 'informer',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_ngla',
            fr: 'inégaler',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_tso',
            fr: 'indiquer',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_knea',
            fr: 'incliner',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_kpie',
            fr: 'inachever',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_top]],
        },
        {
            name: '_fo',
            fr: 'impératif',
            path: [[x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_stoia',
            fr: 'imaginer',
            path: [[x_right,y_mid,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot]],
        },
        {
            name: '_3ne',
            fr: 'jeune',
            path: [[x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_dea',
            fr: 'idée',
            path: [[x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
        },
        {
            name: '_si',
            fr: 'ici',
            path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_r3a',
            fr: 'jaune',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_lgae',
            fr: 'jambe',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_fwo',
            fr: 'hors',
            path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_rzo',
            fr: 'horizon',
            path: [[x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_hro',
            fr: 'heure',
            path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_fro',
            fr: 'hermaphrodite',
            path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_pa',
            fr: 'haut',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_kio',
            fr: 'habiter',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_dvie',
            fr: 'habiller',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_kwe',
            fr: 'grouper',
            path: [[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_bot],[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_gro',
            fr: 'grossir',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_gva',
            fr: 'graviter',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot]],
        },
        {
            name: '_gma',
            fr: 'gramme',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_gra',
            fr: 'graisser',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_tsae',
            fr: 'goûter',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right,y_mid]],
        },
        {
            name: '_sla',
            fr: 'glisser',
            path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_gzai',
            fr: 'gaz',
            path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_dray',
            fr: 'gauche',
            path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_kpae',
            fr: 'garder',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top]],
        },
        {
            name: '_ftu',
            fr: 'futur',
            path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_fzo',
            fr: 'fusionner',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_ray',
            fr: 'fuir',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_ftae',
            fr: 'frustrer',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_fry',
            fr: 'fruit',
            path: [[x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_gry',
            fr: 'frapper',
            path: [[x_left_mid,y_top,x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_gew',
            fr: 'fort',
            path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_fai',
            fr: 'former',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_fkai',
            fr: 'fonctionner',
            path: [[x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_blea',
            fr: 'fleurir',
            path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_fni',
            fr: 'finir',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_brea',
            fr: 'filtrer',
            path: [[x_left,y_mid,x_right,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_fli',
            fr: 'fil',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_lvia',
            fr: 'feuille',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid]],
        },
        {
            name: '_frey',
            fr: 'feu',
            path: [[x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid,x_right,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_kloi',
            fr: 'fermer',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid, x_mid,y_mid]],
        },
        {
            name: '_mna',
            fr: 'femelle',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_kti',
            fr: 'félin',
            path: [[x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_nrea',
            fr: 'faux',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_sga',
            fr: 'faucher',
            path: [[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_fa',
            fr: 'faire',
            path: [[x_mid,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid]],
        },
        {
            name: '_vea',
            fr: 'faible',
            path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_fsa',
            fr: 'face',
            path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid]],
        },
        {
            name: '_stre',
            fr: 'extrémité',
            path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_stra',
            fr: 'extraire',
            path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_tra',
            fr: 'extérieur',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_vlye',
            fr: 'évoluer',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_vne',
            fr: 'événement',
            path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_stea',
            fr: 'étoile',
            path: [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_meama',
            fr: 'étant',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_te',
            fr: 'et',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_bia',
            fr: 'équilibrer',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
        },
        {
            name: '_kdea',
            fr: 'équidé',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_left,y_mid]],
        },
        {
            name: '_nto',
            fr: 'entre',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_srye',
            fr: 'entourer',
            path: [[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_sko',
            fr: 'entendre',
            path: [[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid]],
        },
        {
            name: '_nki',
            fr: 'entailler',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_kdie',
            fr: 'enfant',
            path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_3ia',
            fr: 'énergie',
            path: [[x_left_mid,y_top,x_right,y_mid,x_left,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top]],
        },
        {
            name: '_ni',
            fr: 'bas',
            path: [[x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_nwo',
            fr: 'en',
            path: [[x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_pkoi',
            fr: 'empaqueter',
            path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid]],
        },
        {
            name: '_skoi',
            fr: 'émotion',
            path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_vzu',
            fr: 'électricité',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_gla',
            fr: 'égaler',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_fke',
            fr: 'effet',
            path: [[x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_to',
            fr: 'eau',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_drye',
            fr: 'durer',
            path: [[x_mid,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_drei',
            fr: 'dur',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_drya',
            fr: 'droite',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_dro',
            fr: 'droit',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_rdwa',
            fr: 'draper',
            path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_rmi',
            fr: 'dormir',
            path: [[x_left,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid]],
        },
        {
            name: '_glo',
            fr: 'dont',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_dku',
            fr: 'donc',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_left,y_mid]],
        },
        {
            name: '_dvi',
            fr: 'diviser',
            path: [[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_dme',
            fr: 'dimensionner',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_dvey',
            fr: 'différer',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot]],
        },
        {
            name: '_dvo',
            fr: 'devoir',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_dva',
            fr: 'devant',
            path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_dzye',
            fr: 'détruire',
            path: [[x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid,x_left_mid,y_top,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot]],
        },
        {
            name: '_nbia',
            fr: 'déséquilibrer',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid]],
        },
        {
            name: '_dre',
            fr: 'derrière',
            path: [[x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_fmai',
            fr: 'depuis',
            path: [[x_right,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_chna',
            fr: 'démasquer',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_dle',
            fr: 'délicieux',
            path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_d3a',
            fr: 'déjà',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid]],
        },
        {
            name: '_klue',
            fr: 'défaut',
            path: [[x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_dfo',
            fr: 'défaire',
            path: [[x_right_mid,y_top,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_3i',
            fr: 'découvrir',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_ktye',
            fr: 'découper',
            path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid]],
        },
        {
            name: '_dsimza',
            fr: 'décimère',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid]],
        },
        {
            name: '_dsigma',
            fr: 'décigramme',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_trie',
            fr: 'déchêt',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_da',
            fr: 'de',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top],[x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_dfie',
            fr: 'dauphin',
            path: [[x_right_mid,y_top,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left,y_mid],[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_dse',
            fr: 'danser',
            path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid]],
        },
        {
            name: '_di',
            fr: 'dans',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left,y_mid]],
        },
        {
            name: '_d3e',
            fr: 'danger',
            path: [[x_mid,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_dwa',
            fr: 'cycle',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
        },
        {
            name: '_kraw',
            fr: 'crustacé',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_grae',
            fr: 'croître',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_bot]],
        },
        {
            name: '_kru',
            fr: 'croiser',
            path: [[x_left_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_kro',
            fr: 'croire',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_kri',
            fr: 'crier',
            path: [[x_left_mid,y_top,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_kvae',
            fr: 'couvrir',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_kry',
            fr: 'court',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_krye',
            fr: 'courrier',
            path: [[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_klo',
            fr: 'colorer',
            path: [[x_right,y_mid,x_left,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_kte',
            fr: 'côté',
            path: [[x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid]],
        },
        {
            name: '_bdi',
            fr: 'corps',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_sno',
            fr: 'contre',
            path: [[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_kpoi',
            fr: 'continuer',
            path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid]],
        },
        {
            name: '_ksea',
            fr: 'construire',
            path: [[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_left_mid,y_top,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
        },
        {
            name: '_knoi',
            fr: 'connecter',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_kno',
            fr: 'connaître',
            path: [[x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_kfay',
            fr: 'confondre',
            path: [[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top]],
        },
        {
            name: '_troi',
            fr: 'conflit',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_top]],
        },
        {
            name: '_hi',
            fr: 'condition',
            path: [[x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_kteu',
            fr: 'compter',
            path: [[x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_plea',
            fr: 'complexe',
            path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid]],
        },
        {
            name: '_haw',
            fr: 'comment',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_fta',
            fr: 'commencer',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_ki',
            fr: 'clé',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_rkai',
            fr: 'classer',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
        },
        {
            name: '_srie',
            fr: 'circuit',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid]],
        },
        {
            name: '_kwo',
            fr: 'couper',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_skai',
            fr: 'ciel',
            path: [[x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_swa',
            fr: 'choisir',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_sdae',
            fr: 'chaque',
            path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left,y_mid],[x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_sni',
            fr: 'chanter',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_fgy',
            fr: 'champignon',
            path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_fle',
            fr: 'chair',
            path: [[x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_bzea',
            fr: 'cervidé',
            path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_srea',
            fr: 'céréale',
            path: [[x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid]],
        },
        {
            name: '_tru',
            fr: 'cercler',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_sye',
            fr: 'centrer',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_stimza',
            fr: 'centimètre',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid]],
        },
        {
            name: '_stigma',
            fr: 'centigramme',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_sley',
            fr: 'cellule',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_de',
            fr: 'ce',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_kzo',
            fr: 'causer',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_gzo',
            fr: 'car',
            path: [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_knew',
            fr: 'canonner',
            path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_klio',
            fr: 'canin',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_rko',
            fr: 'caillou',
            path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_glio',
            fr: 'but',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_bze',
            fr: 'business',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_bra',
            fr: 'bras',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_dvea',
            fr: 'brancher',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_bo',
            fr: 'bovidé',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid]],
        },
        {
            name: '_bu',
            fr: 'boucler',
            path: [[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_blu',
            fr: 'bleu',
            path: [[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_keo',
            fr: 'bien',
            path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
        },
        {
            name: '_bly',
            fr: 'baleine',
            path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_left_mid,y_bot]],
        },
        {
            name: '_zaw',
            fr: 'aussi',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_vi',
            fr: 'avec',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_ntea',
            fr: 'avant',
            path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_rpa',
            fr: 'attraper',
            path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_spea',
            fr: 'attendre',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_tmei',
            fr: 'atome',
            path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
        },
        {
            name: '_ktea',
            fr: 'arrêter',
            path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name:'_rkye',
            fr: 'arachnide',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_bot]],
        },
        {
            name: '_ftea',
            fr: 'après',
            path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_znie',
            fr: 'appuyer',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_zai',
            fr: 'apparaître',
            path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_piz',
            fr: 'apaiser',
            path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_kpaw',
            fr: 'antenne',
            path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top]],
        },
        {
            name: '_pkia',
            fr: 'animal',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid, y_top, x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_glei',
            fr: 'angle',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_mrya',
            fr: 'amplifier',
            path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_mid,y_mid]],
        },
        {
            name: '_mre',
            fr: 'amer',
            path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_prba',
            fr: 'âme',
            path : [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_tae',
            fr: 'alterner',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_slio',
            fr: 'alors',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]]
        },
        {
            name: '_le',
            fr: 'aller',
            path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid]],
        },
        {
            name: '_hio',
            fr: 'alléger',
            path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_lea',
            fr: 'aléa',
            path: [[x_left,y_mid,x_right,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_fsu',
            fr: 'ajuster',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_hae',
            fr: 'air',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]],
        },
        {
            name: '_kli',
            fr: 'qualité',
            path: [[x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_nmae',
            fr: 'nombre',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_zno',
            fr: '11',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_dza',
            fr: '10',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top]],
        },
        {
            name: '_nwa',
            fr: '9',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid]],
        },
        {
            name: '_sme',
            fr: 'identique',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_tsio',
            fr: '8',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid]],
        },
        {
            name: '_stei',
            fr: '7',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_ksi',
            fr: '6',
            path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_foi',
            fr: '5',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_ktu',
            fr: '4',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_srei',
            fr: '3',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid, x_left_mid, y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_du',
            fr: '2',
            path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_kfa',
            fr: '1',
            path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_sro',
            fr: '0',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: ',',
            fr: ',',
            path: [[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '!',
            fr: '!',
            path: [[x_left_mid,y_top,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '?',
            fr: '?',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '.',
            fr: '.',
            path: [[x_mid,y_mid,x_mid,y_mid],[x_mid,y_mid,x_mid,y_mid]],
        },
        {
            name: '_mea',
            fr: 'déterminer',
            path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_ma',
            fr: 'être',
            path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]]
        },
        {
            name: '_kde',
            fr: 'adolescent',
            path: [[x_right_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
        },
        {
            name: '_dly',
            fr: 'adulte',       
            path: [[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid]],        
        },        
        {        
            name: '_pfae',        
            fr: 'agir',        
            path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_top],[x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],        
        },
        {
            name: '_dna',
            fr: 'adn',
            path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot]],
        },
        {
            name: '_sde',
            fr: 'acide',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_left_mid,y_bot]],
        },
        {
            name: '_bai',
            fr: 'acheter',
            path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right_mid,y_bot]],
        },
        {
            name: '_kmia',
            fr: 'accumuler',
            path: [[x_left_mid,y_top,x_right,y_mid,x_mid,y_mid,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
        },
        {
            name: '_grey',
            fr: 'accrocher',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
        },
        {
            name: '_ksu',
            fr: 'accélérer',
            path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_boi',
            fr: 'à',
            path: [[x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_fya',
            fr: 'donner',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
        },
        {
            name: '_fy',
            fr: 'refléter',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_go',
            fr: 'avoir',
            path:[[x_left_mid, y_bot, x_mid, y_mid, x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid]],
        },
        {
            name: '_ka',
            fr: 'humain',
            path: [[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
        },
        {
            name: '_kme',
            fr: 'pour',
            path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
        },
        {
            name: '_sa',
            fr: 'vivre',
            path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
        },
        {
            name: '_smia',
            fr: 'isme',
            path: [[x_right_mid,y_bot,x_left,y_mid,x_right,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
        }
    ];


    for(let i = 0; i < keys.length; i += 1){
        let that_key = keys[i];

        that_key.addEventListener("click", function(){
            view.innerHTML += that_key.innerHTML.toLocaleLowerCase();
        });
        
    }

    erase.addEventListener("click", function(){
        stax = [];
        if(view.innerHTML === ""){
            svg_preview.style.display = "none";
            circle_preview.style.display = "none";
            //now erase previous glyph, bit by bit
            let last_glyph = output_area.lastChild;
            if(last_glyph.id !== "dummy"){
                output_area.removeChild(last_glyph);
            }
            kill_link();
        }else{
            let view_string = view.innerHTML;
            let sliced_view = view_string.slice(0, -1);
            view.innerHTML = sliced_view;
            search_reference(sliced_view);
            let last_glyph = output_area.lastChild;
            if(last_glyph.id !== "dummy"){
                output_area.removeChild(last_glyph);
            }
            curse();
        }
        if(output_area.innerHTML === ""){
            output_area.appendChild(circles[0]);
            curse();
            location.reload(); //ok brutal.
        }
    });


    function erase_view(){
        view.innerHTML = "";
        svg_preview.style.display = "none";
        circle_preview.style.display = "none";
    }

    let center_link_counter = 0;
    let center_link_memory = [];

    function kill_link(){
        center_link_counter = 0;
        center_link_memory = [];
    }


    function draw_glyph(path){
        curse();
        center_link_counter += 1;
        center_link_memory.push(`${x_mid} ${y_mid}`);

        for(let x = 0; x < path.length; x += 1){
            let one_path = path[x];
            output_area.innerHTML += `${_p}${one_path}${p_}`;
        }

        if(center_link_counter > 1){
            let first = center_link_memory[0];
            let last = center_link_memory[center_link_memory.length -1];
            output_area.innerHTML += `${_p}${first},${last}${p_}`;
        }
    }


    function increment_y(){
        y_top += 200;
        y_mid += 200;
        y_bot += 200;
    }


    function decrement_y(){
        center_link_counter = 0;
        center_link_memory = [];
        space.style.background = "initial";
        space.innerHTML = "";
        y_top -= 200;
        y_mid -= 200;
        y_bot -= 200;
    }


    let semi_line = 0;
    function check_semi_line(){
        if(semi_line === 0){

            y_top = 153;
            y_mid = 231;
            y_bot = 309;
            semi_line = 1;

        }else{

            y_top = 50;
            y_mid = 128;
            y_bot = 206;
            semi_line = 0;

        }
    }


    function increment_x(){

        check_semi_line();

        x_left += 170;
        x_left_mid += 170;
        x_mid += 170;
        x_right_mid += 170;
        x_right += 170;
    }


    function decrement_x(){

        check_semi_line();
        
        x_left -= 170;
        x_left_mid -= 170;
        x_mid -= 170;
        x_right_mid -= 170;
        x_right -= 170;
        
    }


    function erase_svg_content(){
        location.reload();
    }


    function clear_space(){
        space.style.background = "initial";
        space.innerHTML = "";
    }


    function notify_combo(){
        space.style. background = "radial-gradient(at top left, white, grey)";
        svg_preview.innerHTML += `<text class="prev_text" x="45" y="140">COMBO!</text>`;
    }


    function search_reference(text_searched){
        curse();
        circle_preview.style.display = "block";
        svg_preview.innerHTML = "";
        svg_preview.style.display = "block";
        space.innerHTML = "";
        let w;

        for(w = 0; w < glyph_reference.length; w += 1){
            let one_ref = glyph_reference[w];
            if(text_searched !== "_" && one_ref.name === text_searched || one_ref.fr.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === text_searched){ //removing all accents from one_ref.fr
                space.style. background = "radial-gradient(at top left, white, grey)";
                space.innerHTML = `${one_ref.fr}: [${one_ref.name.replace("_","")}]`;

                for(let v = 0; v < one_ref.path.length; v += 1){
                    let p1 = one_ref.path[v];
                    svg_preview.innerHTML += `${_p}${p1}${p_}`;
                }
            }
        }

        //readymade word cumulations combo notifications
        function display_combo(options, write){
            for(let i = 0; i < options.length; i += 1){
                let that_option = options[i];
                if(text_searched === that_option){
                    space.innerHTML += write;
                    notify_combo();
                }
            }
        }

        display_combo(["aimer","_sakme"],"aimer: [sa-kme]");
        display_combo(["alec","lloyd","_nmokatae"],`"L'artiste": [nmo-ka-tae]`);
        display_combo(["je","moi","_kafygo"],"je: [ka-fy-go]");
        display_combo(["manger","_rafdu"],"manger: [ra-fdu]");
        display_combo(["tu","toi","_kafyafy"],"tu,toi: [ka-fya-fy]");
        display_combo(["beau"],"beau: [kli-keoègrey-hea]");

    }


    (function display_search(){
        for(let c = 0; c < keys.length; c += 1){
            let one_key = keys[c];

            one_key.addEventListener("click", function(){
                search_reference(view.innerHTML);
            });
        }
    }());


    function search_and_draw(text_searched){

        let glyph_database = [
            {
                name: '_nmo',
                fr: 'nommer',
                path: [[x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot]]
            },
            {
                name: '_sola',
                fr: 'son',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_sota',
                fr: 'ton',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid]],
            },
            {
                name: '_kwi',
                fr: 'qui',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_ze',
                fr: 'utiliser',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_bot]],
            },
            {
                name: '_vrea',
                fr: 'vrai',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_v3ai',
                fr: 'vouloir',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_flae',
                fr: 'voler',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_vloi',
                fr: 'volume',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_sta',
                fr: 'voir',
                path: [[x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot]],
            },
            {
                name: '_ko',
                fr: 'voici',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_vlo',
                fr: 'vitesse',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid]],
            },
            {
                name: '_vzi',
                fr: 'visage',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_vzy',
                fr: 'virus',
                path: [[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top]],
            },
            {
                name: '_vle',
                fr: 'violet',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_ldo',
                fr: 'vieux',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_vey',
                fr: 'vieillard',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid]],
            },
            {
                name: '_vde',
                fr: 'vider',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_vzey',
                fr: 'vice',
                path: [[x_left_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_vba',
                fr: 'vibrer',
                path: [[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left,y_mid,x_left,y_mid]],
            },
            {
                name: '_vry',
                fr: 'vertu',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_vrae',
                fr: 'vert',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_kto',
                fr: 'vers',
                path: [[x_left,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_rmye',
                fr: 'ver',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_sloi',
                fr: 'vendre',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_pio',
                fr: 'vegetal',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]],
            },
            {
                name: '_vnia',
                fr: 'varier',
                path: [[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_vlia',
                fr: 'valoriser',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_vkye',
                fr: 'vaincre',
                path: [[x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_waa',
                fr: 'trouver',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_tro',
                fr: 'trop',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_bse',
                fr: 'trebucher',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_tie',
                fr: 'traverser',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_tvai',
                fr: 'travailler',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_zit',
                fr: 'transitionner',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_mne',
                fr: 'transgenre',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_tew',
                fr: 'tout',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_bot]],
            },
            {
                name: '_pko',
                fr: 'toucher',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_tnogma',
                fr: 'tonne',
                path: [[x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_pley',
                fr: 'tirer',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_tra3',
                fr: 'theatre',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_toi',
                fr: 'texte',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_tea',
                fr: 'tete',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_ste',
                fr: 'tester',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_trea',
                fr: 'terre',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_kpoile',
                fr: 'temps',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot]],
            },
            {
                name: '_po',
                fr: 'temperature',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_tle',
                fr: 'telephoner',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_zlae',
                fr: 'tant',
                path: [[x_left,y_mid,x_left_mid,y_top],[x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_sai',
                fr: 'taille',
                path: [[x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_stu',
                fr: 'synthetiser',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_sbo',
                fr: 'symboliser',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_tpe',
                fr: 'sur',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_flo',
                fr: 'suivre',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_pkae',
                fr: 'sujet',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_ske',
                fr: 'sucrer',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_fi',
                fr: 'subjonctif',
                path: [[x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_svo',
                fr: 'souvent',
                path: [[x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top]],
            },
            {
                name: '_nde',
                fr: 'sous',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_sple',
                fr: 'souple',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_3nu',
                fr: 'soumettre',
                path: [[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_soma',
                fr: 'soi',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid]],
            },
            {
                name: '_mki',
                fr: 'singe',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_snea',
                fr: 'simplifier',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_zei',
                fr: 'si',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_skwa',
                fr: 'sexe',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_lno',
                fr: 'seul',
                path: [[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_trey',
                fr: 'separer',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_smu',
                fr: 'sentir',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_vye',
                fr: 'sens',
                path: [[x_left,y_mid,x_mid,y_mid],[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_sge',
                fr: 'segmenter',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_sky',
                fr: 'securiser',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_d3y',
                fr: 'seconde',
                path: [[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_so',
                fr: 'se',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_',
                fr: '',
                path: [[]],
            },
            {
                name: '_sle',
                fr: 'saler',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid]],
            },
            {
                name: '_rgo',
                fr: 'rouge',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_rwe',
                fr: 'roue',
                path: [[x_right,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_rgya',
                fr: 'rongeur',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_lfaw',
                fr: 'rire',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_left_mid,y_top],[x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_rgi',
                fr: 'rigide',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_ne',
                fr: 'rien',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_swo',
                fr: 'revenir',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
            },
            {
                name: '_rve',
                fr: 'reveiller',
                path: [[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_mid,y_mid]],
            },
            {
                name: '_rto',
                fr: 'retourner',
                path: [[x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_lvoi',
                fr: 'retirer',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_zle',
                fr: 'resulter',
                path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_pta',
                fr: 'reptile',
                path: [[x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid,x_right,y_mid,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_rpie',
                fr: 'repeter',
                path: [[x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_top,x_mid,y_mid]],
            },
            {
                name: '_fksi',
                fr: 'reparer',
                path: [[x_right,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_floi',
                fr: 'remplir',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_rdai',
                fr: 'refaire',
                path: [[x_mid,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid,x_mid,y_mid]],
            },
            {
                name: '_tba',
                fr: 'recipient',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_rsea',
                fr: 'recevoir',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_rbae',
                fr: 'rebondir',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_snoi',
                fr: 'rayonner',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]],
            },
            {
                name: '_groi',
                fr: 'ramper',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid]],
            },
            {
                name: '_rma',
                fr: 'ramasser',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_slo',
                fr: 'ralentir',
                path: [[x_right,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_wo',
                fr: 'questionner',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_kwa',
                fr: 'que',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_kta',
                fr: 'quantite',
                path: [[x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid]],
            },
            {
                name: '_fkwe',
                fr: 'quand',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_3e',
                fr: 'proteger',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_prai',
                fr: 'proportionner',
                path: [[x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_prio',
                fr: 'programmer',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_tpia',
                fr: 'profond',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_pre',
                fr: 'pres',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_ra',
                fr: 'prendre',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_frya',
                fr: 'pouvoir',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_psie',
                fr: 'pousser',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_vwa',
                fr: 'pourquoi',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_psu',
                fr: 'positionner',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot],[x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_ptoi',
                fr: 'porter',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid]],
            },
            {
                name: '_lbay',
                fr: 'porcin',
                path: [[x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top]],
            },
            {
                name: '_ptea',
                fr: 'poitriner',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_psaw',
                fr: 'poisson',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_fky',
                fr: 'pointer',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_ploi',
                fr: 'poil',
                path: [[x_left,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_vdio',
                fr: 'plus',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_tsi',
                fr: 'pluriel',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_plwe',
                fr: 'plume',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_pli',
                fr: 'plier',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_pto',
                fr: 'pleuvoir',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_pla',
                fr: 'planifier',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_left,y_mid]],
            },
            {
                name: '_pnae',
                fr: 'planete',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_aria',
                fr: 'planer',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_top,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_ueoa',
                fr: 'plaisir',
                path: [[x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid]],
            },
            {
                name: '_pvo',
                fr: 'pivoter',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_vdibwa',
                fr: 'pire',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_pke',
                fr: 'piquant',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_gwi',
                fr: 'pingouin',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_trai',
                fr: 'pieger',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_fti',
                fr: 'pied',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
            },
            {
                name: '_sfi',
                fr: 'peur',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_psia',
                fr: 'peser',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_lse',
                fr: 'perdre',
                path: [[x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_dri',
                fr: 'percer',
                path: [[x_right,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_left,y_mid]],
            },
            {
                name: '_hia',
                fr: 'penser',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid]],
            },
            {
                name: '_pda',
                fr: 'pendant',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_prye',
                fr: 'part',
                path: [[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_psoi',
                fr: 'passe',
                path: [[x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_pmi',
                fr: 'parmi',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top]],
            },
            {
                name: '_vga',
                fr: 'parfumer',
                path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_smai',
                fr: 'parfois',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_prae',
                fr: 'parcourir',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid]],
            },
            {
                name: '_ba',
                fr: 'par',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_mriy',
                fr: 'papillon',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_sra',
                fr: 'pacifier',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_pno',
                fr: 'ouvrir',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid]],
            },
            {
                name: '_he',
                fr: 'oui',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_roi',
                fr: 'ou',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_sdey',
                fr: 'où',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_bnio',
                fr: 'os',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_via',
                fr: 'originer',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid]],
            },
            {
                name: '_rgia',
                fr: 'organe',
                path: [[x_right_mid,y_top,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top],[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_rdo',
                fr: 'ordonner',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_r3y',
                fr: 'orange',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_vroi',
                fr: 'or',
                path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_gnae',
                fr: 'onde',
                path: [[x_left,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_broi',
                fr: 'ombre',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_zo',
                fr: 'oiseau',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_gwa',
                fr: 'oeuf',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_ptae',
                fr: 'objet',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_ney',
                fr: 'nouveau',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_fdu',
                fr: 'nourrir',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_nia',
                fr: 'non',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid, y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_na',
                fr: 'ni',
                path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_top]],
            },
            {
                name: '_nsio',
                fr: 'necessiter',
                path: [[x_left_mid,y_top,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_zmi',
                fr: 'musique',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_mso',
                fr: 'muscler',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_mksi',
                fr: 'multiplier',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_ftey',
                fr: 'mou',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_mtu',
                fr: 'montagne',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_mu',
                fr: 'mollusque',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_mni',
                fr: 'moins',
                path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_d3io',
                fr: 'minute',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_mina',
                fr: 'mineral',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,x_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_mlimza',
                fr: 'millimetre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_mligma',
                fr: 'milligramme',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_mdo',
                fr: 'milieu',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_vdikeo',
                fr: 'mieux',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_pne',
                fr: 'mettre',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_mid,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_mza',
                fr: 'metre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
            },
            {
                name: '_mto',
                fr: 'metal',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_bwa',
                fr: 'mauvais',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_mtai',
                fr: 'matiere',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid, x_right_mid,y_bot]],
            },
            {
                name: '_lfe',
                fr: 'mastodonte',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_top]],
            },
            {
                name: '_chka',
                fr: 'masquer',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_msy',
                fr: 'marsupial',
                path: [[x_left,y_mid,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_top],[x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_mrai',
                fr: 'marquer',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_mno',
                fr: 'male',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_nfea',
                fr: 'maladie',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_pro',        
                fr: 'mais',        
                path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],        
            },        
            {        
                name: '_sna',        
                fr: 'maigrir',        
                path: [[x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid]],        
            },        
            {        
                name: '_lya',        
                fr: 'lune',        
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid]]        
            },        
            {        
                name: '_hea',        
                fr: 'lumiere',        
                path: [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot]],        
            },        
            {        
                name: '_lro',        
                fr: 'lourd',        
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],        
            },        
            {        
                name: '_lgya',        
                fr: 'long',        
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top]],        
            },        
            {        
                name: '_fra',        
                fr: 'loin',        
                path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top]]        
            },        
            {       
                name: '_sti',        
                fr: 'lister',        
                path: [[x_right_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top]]        
            },        
            {        
                name: '_lpae',        
                fr: 'levre',        
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]]        
            },        
            {        
                name: '_lgy',        
                fr: 'legume',        
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]]        
            },        
            {        
                name: '_lgio',        
                fr: 'langage',        
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]]
            },
            {
                name: '_ska',
                fr: 'lancer',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_klotogma',
                fr: 'kilotonne',
                path: [[x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_klomza',
                fr: 'kilometre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid]],
            },
            {
                name: '_klogma',
                fr: 'kilogramme',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_tli',
                fr: 'jusque',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_kadwa',
                fr: 'jour',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
            },
            {
                name: '_3go',
                fr: 'jouer',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_ntew',
                fr: 'interrompre',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_nsa',
                fr: 'interieur',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_kea',
                fr: 'intelligence',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top]],
            },
            {
                name: '_chra',
                fr: 'insulter',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_pse',
                fr: 'insuffire',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_skew',
                fr: 'insecte',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_nfo',
                fr: 'informer',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_ngla',
                fr: 'inegaler',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_tso',
                fr: 'indiquer',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_knea',
                fr: 'incliner',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_kpie',
                fr: 'inachever',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_top]],
            },
            {
                name: '_fo',
                fr: 'imperatif',
                path: [[x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_stoia',
                fr: 'imaginer',
                path: [[x_right,y_mid,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot]],
            },
            {
                name: '_3ne',
                fr: 'jeune',
                path: [[x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_dea',
                fr: 'idee',
                path: [[x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
            },
            {
                name: '_si',
                fr: 'ici',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_r3a',
                fr: 'jaune',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_lgae',
                fr: 'jambe',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_fwo',
                fr: 'hors',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_rzo',
                fr: 'horizon',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_hro',
                fr: 'heure',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_fro',
                fr: 'hermaphrodite',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_pa',
                fr: 'haut',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_kio',
                fr: 'habiter',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_dvie',
                fr: 'habiller',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_kwe',
                fr: 'grouper',
                path: [[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_bot],[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_gro',
                fr: 'grossir',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_gva',
                fr: 'graviter',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot]],
            },
            {
                name: '_gma',
                fr: 'gramme',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_gra',
                fr: 'graisser',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_tsae',
                fr: 'goûter',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right,y_mid]],
            },
            {
                name: '_sla',
                fr: 'glisser',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_gzai',
                fr: 'gaz',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_dray',
                fr: 'gauche',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_kpae',
                fr: 'garder',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top]],
            },
            {
                name: '_ftu',
                fr: 'futur',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_fzo',
                fr: 'fusionner',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_ray',
                fr: 'fuir',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_ftae',
                fr: 'frustrer',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_fry',
                fr: 'fruit',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_gry',
                fr: 'frapper',
                path: [[x_left_mid,y_top,x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_gew',
                fr: 'fort',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_fai',
                fr: 'former',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_fkai',
                fr: 'fonctionner',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_blea',
                fr: 'fleurir',
                path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_fni',
                fr: 'finir',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_brea',
                fr: 'filtrer',
                path: [[x_left,y_mid,x_right,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_fli',
                fr: 'fil',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_lvia',
                fr: 'feuille',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid]],
            },
            {
                name: '_frey',
                fr: 'feu',
                path: [[x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid,x_right,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_kloi',
                fr: 'fermer',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid, x_mid,y_mid]],
            },
            {
                name: '_mna',
                fr: 'femelle',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_kti',
                fr: 'felin',
                path: [[x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_nrea',
                fr: 'faux',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_sga',
                fr: 'faucher',
                path: [[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_fa',
                fr: 'faire',
                path: [[x_mid,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid]],
            },
            {
                name: '_vea',
                fr: 'faible',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_fsa',
                fr: 'face',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid]],
            },
            {
                name: '_stre',
                fr: 'extremite',
                path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_stra',
                fr: 'extraire',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_tra',
                fr: 'exterieur',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_vlye',
                fr: 'evoluer',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_vne',
                fr: 'evenement',
                path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_stea',
                fr: 'etoile',
                path: [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_meama',
                fr: 'etant',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_te',
                fr: 'et',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_bia',
                fr: 'equilibrer',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
            },
            {
                name: '_kdea',
                fr: 'equide',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_left,y_mid]],
            },
            {
                name: '_nto',
                fr: 'entre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_srye',
                fr: 'entourer',
                path: [[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_sko',
                fr: 'entendre',
                path: [[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid]],
            },
            {
                name: '_nki',
                fr: 'entailler',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_kdie',
                fr: 'enfant',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_3ia',
                fr: 'energie',
                path: [[x_left_mid,y_top,x_right,y_mid,x_left,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top]],
            },
            {
                name: '_ni',
                fr: 'bas',
                path: [[x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_nwo',
                fr: 'en',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_pkoi',
                fr: 'empaqueter',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid]],
            },
            {
                name: '_skoi',
                fr: 'emotion',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_vzu',
                fr: 'electricite',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_gla',
                fr: 'egaler',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_fke',
                fr: 'effet',
                path: [[x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_to',
                fr: 'eau',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_drye',
                fr: 'durer',
                path: [[x_mid,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_drei',
                fr: 'dur',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_drya',
                fr: 'droite',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_dro',
                fr: 'droit',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_rdwa',
                fr: 'draper',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_rmi',
                fr: 'dormir',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid]],
            },
            {
                name: '_glo',
                fr: 'dont',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_dku',
                fr: 'donc',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_left,y_mid]],
            },
            {
                name: '_dvi',
                fr: 'diviser',
                path: [[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_dme',
                fr: 'dimensionner',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_dvey',
                fr: 'differer',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot]],
            },
            {
                name: '_dvo',
                fr: 'devoir',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_dva',
                fr: 'devant',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_dzye',
                fr: 'detruire',
                path: [[x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid,x_left_mid,y_top,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot]],
            },
            {
                name: '_nbia',
                fr: 'desequilibrer',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid]],
            },
            {
                name: '_dre',
                fr: 'derriere',
                path: [[x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_fmai',
                fr: 'depuis',
                path: [[x_right,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_chna',
                fr: 'demasquer',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_dle',
                fr: 'delicieux',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_d3a',
                fr: 'dejà',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid]],
            },
            {
                name: '_klue',
                fr: 'defaut',
                path: [[x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_dfo',
                fr: 'defaire',
                path: [[x_right_mid,y_top,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_3i',
                fr: 'decouvrir',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_ktye',
                fr: 'decouper',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid]],
            },
            {
                name: '_dsimza',
                fr: 'decimere',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid]],
            },
            {
                name: '_dsigma',
                fr: 'decigramme',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_trie',
                fr: 'dechet',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_da',
                fr: 'de',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top],[x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_dfie',
                fr: 'dauphin',
                path: [[x_right_mid,y_top,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left,y_mid],[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_dse',
                fr: 'danser',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid]],
            },
            {
                name: '_di',
                fr: 'dans',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left,y_mid]],
            },
            {
                name: '_d3e',
                fr: 'danger',
                path: [[x_mid,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_dwa',
                fr: 'cycle',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
            },
            {
                name: '_kraw',
                fr: 'crustace',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_grae',
                fr: 'croître',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_bot]],
            },
            {
                name: '_kru',
                fr: 'croiser',
                path: [[x_left_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_kro',
                fr: 'croire',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_kri',
                fr: 'crier',
                path: [[x_left_mid,y_top,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_kvae',
                fr: 'couvrir',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_kry',
                fr: 'court',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_krye',
                fr: 'courrier',
                path: [[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_klo',
                fr: 'colorer',
                path: [[x_right,y_mid,x_left,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_kte',
                fr: 'cote',
                path: [[x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid]],
            },
            {
                name: '_bdi',
                fr: 'corps',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_sno',
                fr: 'contre',
                path: [[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_kpoi',
                fr: 'continuer',
                path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid]],
            },
            {
                name: '_ksea',
                fr: 'construire',
                path: [[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_left_mid,y_top,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
            },
            {
                name: '_knoi',
                fr: 'connecter',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_kno',
                fr: 'connaître',
                path: [[x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_kfay',
                fr: 'confondre',
                path: [[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top]],
            },
            {
                name: '_troi',
                fr: 'conflit',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_top]],
            },
            {
                name: '_hi',
                fr: 'condition',
                path: [[x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_kteu',
                fr: 'compter',
                path: [[x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_plea',
                fr: 'complexe',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid]],
            },
            {
                name: '_haw',
                fr: 'comment',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_fta',
                fr: 'commencer',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_ki',
                fr: 'cle',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_rkai',
                fr: 'classer',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
            },
            {
                name: '_srie',
                fr: 'circuit',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid]],
            },
            {
                name: '_kwo',
                fr: 'couper',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_skai',
                fr: 'ciel',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_swa',
                fr: 'choisir',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_sdae',
                fr: 'chaque',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left,y_mid],[x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_sni',
                fr: 'chanter',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_fgy',
                fr: 'champignon',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_fle',
                fr: 'chair',
                path: [[x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_bzea',
                fr: 'cervide',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_srea',
                fr: 'cereale',
                path: [[x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid]],
            },
            {
                name: '_tru',
                fr: 'cercler',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_sye',
                fr: 'centrer',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_stimza',
                fr: 'centimetre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid]],
            },
            {
                name: '_stigma',
                fr: 'centigramme',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_sley',
                fr: 'cellule',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_de',
                fr: 'ce',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_kzo',
                fr: 'causer',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_gzo',
                fr: 'car',
                path: [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_knew',
                fr: 'canonner',
                path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_klio',
                fr: 'canin',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_rko',
                fr: 'caillou',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_glio',
                fr: 'but',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_bze',
                fr: 'business',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_bra',
                fr: 'bras',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_dvea',
                fr: 'brancher',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_bo',
                fr: 'bovide',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid]],
            },
            {
                name: '_bu',
                fr: 'boucler',
                path: [[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_blu',
                fr: 'bleu',
                path: [[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_keo',
                fr: 'bien',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
            },
            {
                name: '_bly',
                fr: 'baleine',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_left_mid,y_bot]],
            },
            {
                name: '_zaw',
                fr: 'aussi',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_vi',
                fr: 'avec',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_ntea',
                fr: 'avant',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_rpa',
                fr: 'attraper',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_spea',
                fr: 'attendre',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_tmei',
                fr: 'atome',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
            },
            {
                name: '_ktea',
                fr: 'arreter',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name:'_rkye',
                fr: 'arachnide',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_bot]],
            },
            {
                name: '_ftea',
                fr: 'apres',
                path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_znie',
                fr: 'appuyer',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_zai',
                fr: 'apparaître',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_piz',
                fr: 'apaiser',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_kpaw',
                fr: 'antenne',
                path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top]],
            },
            {
                name: '_pkia',
                fr: 'animal',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid, y_top, x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_glei',
                fr: 'angle',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_mrya',
                fr: 'amplifier',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_mid,y_mid]],
            },
            {
                name: '_mre',
                fr: 'amer',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_prba',
                fr: 'ame',
                path : [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_tae',
                fr: 'alterner',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_slio',
                fr: 'alors',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]]
            },
            {
                name: '_le',
                fr: 'aller',
                path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid]],
            },
            {
                name: '_hio',
                fr: 'alleger',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_lea',
                fr: 'alea',
                path: [[x_left,y_mid,x_right,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_fsu',
                fr: 'ajuster',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_hae',
                fr: 'air',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]],
            },
            {
                name: '_kli',
                fr: 'qualite',
                path: [[x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_nmae',
                fr: 'nombre',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_zno',
                fr: '11',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_dza',
                fr: '10',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top]],
            },
            {
                name: '_nwa',
                fr: '9',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid]],
            },
            {
                name: '_sme',
                fr: 'identique',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_tsio',
                fr: '8',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid]],
            },
            {
                name: '_stei',
                fr: '7',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_ksi',
                fr: '6',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_foi',
                fr: '5',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_ktu',
                fr: '4',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_srei',
                fr: '3',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid, x_left_mid, y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_du',
                fr: '2',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_kfa',
                fr: '1',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_sro',
                fr: '0',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: ',',
                fr: ',',
                path: [[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '!',
                fr: '!',
                path: [[x_left_mid,y_top,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '?',
                fr: '?',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '.',
                fr: '.',
                path: [[x_mid,y_mid,x_mid,y_mid],[x_mid,y_mid,x_mid,y_mid]],
            },
            {
                name: '_mea',
                fr: 'determiner',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_ma',
                fr: 'etre',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]]
            },
            {
                name: '_kde',
                fr: 'adolescent',
                path: [[x_right_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
            },
            {
                name: '_dly',
                fr: 'adulte',       
                path: [[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid]],        
            },        
            {        
                name: '_pfae',        
                fr: 'agir',        
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_top],[x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],        
            },
            {
                name: '_dna',
                fr: 'adn',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot]],
            },
            {
                name: '_sde',
                fr: 'acide',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_left_mid,y_bot]],
            },
            {
                name: '_bai',
                fr: 'acheter',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right_mid,y_bot]],
            },
            {
                name: '_kmia',
                fr: 'accumuler',
                path: [[x_left_mid,y_top,x_right,y_mid,x_mid,y_mid,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
            },
            {
                name: '_grey',
                fr: 'accrocher',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
            },
            {
                name: '_ksu',
                fr: 'accelerer',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_boi',
                fr: 'a',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_fya',
                fr: 'donner',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
            },
            {
                name: '_fy',
                fr: 'refleter',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_go',
                fr: 'avoir',
                path:[[x_left_mid, y_bot, x_mid, y_mid, x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid]],
            },
            {
                name: '_ka',
                fr: 'humain',
                path: [[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
            },
            {
                name: '_kme',
                fr: 'pour',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
            },
            {
                name: '_sa',
                fr: 'vivre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
            },
            {
                name: '_smia',
                fr: 'isme',
                path: [[x_right_mid,y_bot,x_left,y_mid,x_right,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
            }
        ];

        let k;
        for(k = 0; k < glyph_database.length; k += 1){

            let one_glyph = glyph_database[k];
            let glyph_with_accent = glyph_reference[k]; //implies that both lists are strictly identical with the exception of accents = possible source of error when updating lists!

            if(one_glyph.name === text_searched || one_glyph.fr === text_searched){
                draw_glyph(one_glyph.path);
                erase_view();
                increment_y();
                translator.innerHTML += `${glyph_with_accent.fr.toUpperCase()}<span class="phono">[${glyph_with_accent.name.replace("_","")}]</span> `;
            }
        }

        //readymade word cumulations
        if(text_searched === "je" || text_searched === "moi" || text_searched === "_kafygo"){
            draw_glyph([[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]]);
            increment_y();
            draw_glyph([[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]]);
            increment_y();
            draw_glyph([[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid]]);
            increment_y();
            erase_view();
            translator.innerHTML += `JE, MOI <span class="phono">[ka-fy-go]</span>`;
        }
        if(text_searched === "aimer" || text_searched === "_sakme"){
            draw_glyph([[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]]);
            increment_y();
            draw_glyph([[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]]);
            increment_y();
            erase_view();
            translator.innerHTML += `AIMER <span class="phono">[sa-kme]</span>`;
        }
        if(text_searched === "manger" || text_searched === "_rafdu"){
            draw_glyph([[x_mid,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot]]);
            increment_y();
            draw_glyph([[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_bot]]);
            increment_y();
            erase_view();
            translator.innerHTML += `MANGER <span class="phono">[ra-fdu]</span>`;
        }
        if(text_searched === "tu" || text_searched === "toi" || text_searched === "_kafyafy"){
            draw_glyph([[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]]);
            increment_y();
            draw_glyph([[x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]]);
            increment_y();
            draw_glyph([[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]]);
            increment_y();
            erase_view();
            translator.innerHTML += `TU, TOI <span class="phono">[ka-fya-fy]</span>`;
        }
        if(text_searched === "alec" || text_searched === "lloyd"){
            draw_glyph([[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_right,y_mid]]);
            increment_y();
            draw_glyph([[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]]);
            increment_y();
            draw_glyph([[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid]]);
            increment_y();
            erase_view();
            translator.innerHTML += `Alec Lloyd Probert <span class="phono">[nmo_ka_tae]</span>`;
        }
        if(text_searched === "beau"){
            draw_glyph([[x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]]);
            increment_y();
            draw_glyph([[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]]);
            increment_y();
            draw_glyph([[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]]);
            increment_y();
            draw_glyph([[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot]]);
            increment_y();
            erase_view();
            translator.innerHTML += `BEAU <span class="phono">[kli-keo-grey-hea]</span>`;
        }
    }

    ok.addEventListener("click", function(){
        if(up_down_counter < 0){
            up_down_counter += 1;
        }
        if(up_down_counter > 0){
            up_down_counter = 0;
        }
        if(output_area.innerHTML === ""){
            output_area.appendChild(circles[0]);
            curse();
        }
        left_right_counter = 0;
        show_counters();
        svg_preview.style.display = "none";
        search_and_draw(view.innerHTML);
        clear_space();
        curse();
    });


    space.addEventListener("click", function(){
        kill_link();

        this.style. background = "radial-gradient(at top left, white, grey)";
        this.innerHTML = `nouveau mot`;
        translator.innerHTML += `<span class="word_separator"><br>______________<br><br></span>`;
    });


    right.addEventListener("click", function(){
        kill_link();
        space.style. background = "radial-gradient(at top left, white, grey)";
        space.innerHTML = `nouvelle ligne`;
        translator.innerHTML += `<span class="line_separator_plus"><br><br>___|+ligne|___<br><br></span>`;
        increment_x();
        left_right_counter += 1;
        show_counters();
        curse();
    });


    erase_all.addEventListener("click", function(){
        erase_svg_content();
    });


    up.addEventListener("click", function(){
        space.style. background = "radial-gradient(at top left, white, grey)";
        decrement_y();
        up_down_counter -= 1;
        show_counters();
        curse();
    });


    down.addEventListener("click", function(){
        kill_link();
        space.style. background = "radial-gradient(at top left, white, grey)";
        space.innerHTML = `espace+nouveau mot`;
        increment_y();
        up_down_counter += 1;
        show_counters();
        curse();
    });

    left.addEventListener("click", function(){
        kill_link();
        space.style. background = "radial-gradient(at top left, white, grey)";
        space.innerHTML = `retour ligne précédente`;
        translator.innerHTML += `<span class="back_jump"><br><br>___|retour|___<br><br></span>`;
        decrement_x();
        left_right_counter -= 1;
        show_counters();
        curse();
        
    });

    function show_counters(){
        if(up_down_counter < 0){
            counter_down.style.display = "none";
            counter_up.style.display = "grid";
            counter_up.innerHTML = Math.abs(up_down_counter);
        }else if(up_down_counter > 0){
            counter_up.style.display = "none";
            counter_down.style.display = "grid";
            counter_down.innerHTML = up_down_counter;
        }else if(up_down_counter === 0){
            counter_up.style.display = "none";
            counter_down.style.display = "none";
        }

        if(left_right_counter < 0){
            counter_right.style.display = "none";
            counter_left.style.display = "grid";
            counter_left.innerHTML = Math.abs(left_right_counter);
        }else if(left_right_counter > 0){
            counter_left.style.display = "none";
            counter_right.style.display = "grid";
            counter_right.innerHTML = left_right_counter;
        }else if(left_right_counter === 0){
            counter_left.style.display = "none";
            counter_right.style.display = "none";
        }
    };


}());