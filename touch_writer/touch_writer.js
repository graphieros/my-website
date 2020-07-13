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

    const audio_kafygo = new Audio("audio/kafygo.mp3");
    const audio_sakme = new Audio("audio/sakme.mp3");
    const audio_kafyafy = new Audio("audio/kafyafy.mp3");


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

    function hear_sound(noise){
        noise.play();
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
        display_combo(["beau"],"beau: [kli-keo-grey-hea]");

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
                path: [[x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/nmo.mp3"),
            },
            {
                name: '_sola',
                fr: 'son',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/sola.mp3"),
            },
            {
                name: '_sota',
                fr: 'ton',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/sota.mp3"),
            },
            {
                name: '_kwi',
                fr: 'qui',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/kwi.mp3"),
            },
            {
                name: '_ze',
                fr: 'utiliser',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_bot]],
                sound: new Audio("audio/ze.mp3"),
            },
            {
                name: '_vrea',
                fr: 'vrai',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/vrea.mp3"),
            },
            {
                name: '_v3ai',
                fr: 'vouloir',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/v3ai.mp3"),
            },
            {
                name: '_flae',
                fr: 'voler',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/flae.mp3"),
            },
            {
                name: '_vloi',
                fr: 'volume',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/vloi.mp3"),
            },
            {
                name: '_sta',
                fr: 'voir',
                path: [[x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot]],
                sound: new Audio("audio/sta.mp3"),
            },
            {
                name: '_ko',
                fr: 'voici',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/ko.mp3"),
            },
            {
                name: '_vlo',
                fr: 'vitesse',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/vlo.mp3"),
            },
            {
                name: '_vzi',
                fr: 'visage',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/vzi.mp3"),
            },
            {
                name: '_vzy',
                fr: 'virus',
                path: [[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top]],
                sound: new Audio("audio/vzy.mp3"),
            },
            {
                name: '_vle',
                fr: 'violet',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/vle.mp3"),
            },
            {
                name: '_ldo',
                fr: 'vieux',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/ldo.mp3"),
            },
            {
                name: '_vey',
                fr: 'vieillard',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid]],
                sound: new Audio("audio/vey.mp3"),
            },
            {
                name: '_vde',
                fr: 'vider',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/vde.mp3"),
            },
            {
                name: '_vzey',
                fr: 'vice',
                path: [[x_left_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/vzey.mp3"),
            },
            {
                name: '_vba',
                fr: 'vibrer',
                path: [[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left,y_mid,x_left,y_mid]],
                sound: new Audio("audio/vba.mp3"),
            },
            {
                name: '_vry',
                fr: 'vertu',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/vry.mp3"),
            },
            {
                name: '_vrae',
                fr: 'vert',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/vrae.mp3"),
            },
            {
                name: '_kto',
                fr: 'vers',
                path: [[x_left,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/kto.mp3"),
            },
            {
                name: '_rmye',
                fr: 'ver',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/rmye.mp3"),
            },
            {
                name: '_sloi',
                fr: 'vendre',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/sloi.mp3"),
            },
            {
                name: '_pio',
                fr: 'vegetal',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]],
                sound: new Audio("audio/pio.mp3"),
            },
            {
                name: '_vnia',
                fr: 'varier',
                path: [[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/vnia.mp3"),
            },
            {
                name: '_vlia',
                fr: 'valoriser',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/vlia.mp3"),
            },
            {
                name: '_vkye',
                fr: 'vaincre',
                path: [[x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/vkye.mp3"),
            },
            {
                name: '_waa',
                fr: 'trouver',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/waa.mp3"),
            },
            {
                name: '_tro',
                fr: 'trop',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/tro.mp3"),
            },
            {
                name: '_bse',
                fr: 'trebucher',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/bse.mp3"),
            },
            {
                name: '_tie',
                fr: 'traverser',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/tie.mp3"),
            },
            {
                name: '_tvai',
                fr: 'travailler',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/tvai.mp3"),
            },
            {
                name: '_zit',
                fr: 'transitionner',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/zit.mp3"),
            },
            {
                name: '_mne',
                fr: 'transgenre',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/mne.mp3"),
            },
            {
                name: '_tew',
                fr: 'tout',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_bot]],
                sound: new Audio("audio/tew.mp3"),
            },
            {
                name: '_pko',
                fr: 'toucher',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/pko.mp3"),
            },
            {
                name: '_tnogma',
                fr: 'tonne',
                path: [[x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/tnogma.mp3"),
            },
            {
                name: '_pley',
                fr: 'tirer',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/pley.mp3"),
            },
            {
                name: '_tra3',
                fr: 'theatre',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/tra3.mp3"),
            },
            {
                name: '_toi',
                fr: 'texte',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/toi.mp3"),
            },
            {
                name: '_tea',
                fr: 'tete',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/tea.mp3"),
            },
            {
                name: '_ste',
                fr: 'tester',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/ste.mp3"),
            },
            {
                name: '_trea',
                fr: 'terre',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/trea.mp3"),
            },
            {
                name: '_kpoile',
                fr: 'temps',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot]],
                sound: new Audio("audio/kpoile.mp3"),
            },
            {
                name: '_po',
                fr: 'temperature',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/po.mp3"),
            },
            {
                name: '_tle',
                fr: 'telephoner',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/tle.mp3"),
            },
            {
                name: '_zlae',
                fr: 'tant',
                path: [[x_left,y_mid,x_left_mid,y_top],[x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/zlae.mp3"),
            },
            {
                name: '_sai',
                fr: 'taille',
                path: [[x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/sai.mp3"),
            },
            {
                name: '_stu',
                fr: 'synthetiser',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/stu.mp3"),
            },
            {
                name: '_sbo',
                fr: 'symboliser',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/sbo.mp3"),
            },
            {
                name: '_tpe',
                fr: 'sur',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/tpe.mp3"),
            },
            {
                name: '_flo',
                fr: 'suivre',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/flo.mp3"),
            },
            {
                name: '_pkae',
                fr: 'sujet',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/pkae.mp3"),
            },
            {
                name: '_ske',
                fr: 'sucrer',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/ske.mp3"),
            },
            {
                name: '_fi',
                fr: 'subjonctif',
                path: [[x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/fi.mp3"),
            },
            {
                name: '_svo',
                fr: 'souvent',
                path: [[x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top]],
                sound: new Audio("audio/svo.mp3"),
            },
            {
                name: '_nde',
                fr: 'sous',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/nde.mp3"),
            },
            {
                name: '_sple',
                fr: 'souple',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/sple.mp3"),
            },
            {
                name: '_3nu',
                fr: 'soumettre',
                path: [[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/3nu.mp3"),
            },
            {
                name: '_soma',
                fr: 'soi',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid]],
                sound: new Audio("audio/soma.mp3"),
            },
            {
                name: '_mki',
                fr: 'singe',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/mki.mp3"),
            },
            {
                name: '_snea',
                fr: 'simplifier',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/snea.mp3"),
            },
            {
                name: '_zei',
                fr: 'si',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/zei.mp3"),
            },
            {
                name: '_skwa',
                fr: 'sexe',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/skwa.mp3"),
            },
            {
                name: '_lno',
                fr: 'seul',
                path: [[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/lno.mp3"),
            },
            {
                name: '_trey',
                fr: 'separer',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/trey.mp3"),
            },
            {
                name: '_smu',
                fr: 'sentir',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/smu.mp3"),
            },
            {
                name: '_vye',
                fr: 'sens',
                path: [[x_left,y_mid,x_mid,y_mid],[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/vye.mp3"),
            },
            {
                name: '_sge',
                fr: 'segmenter',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/sge.mp3"),
            },
            {
                name: '_sky',
                fr: 'securiser',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/sky.mp3"),
            },
            {
                name: '_d3y',
                fr: 'seconde',
                path: [[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/d3y.mp3"),
            },
            {
                name: '_so',
                fr: 'se',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/so.mp3"),
            },
            {
                name: '_',
                fr: '',
                path: [[]],
                sound: new Audio("audio/_.mp3"),
            },
            {
                name: '_sle',
                fr: 'saler',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid]],
                sound: new Audio("audio/sle.mp3"),
            },
            {
                name: '_rgo',
                fr: 'rouge',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/rgo.mp3"),
            },
            {
                name: '_rwe',
                fr: 'roue',
                path: [[x_right,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/rwe.mp3"),
            },
            {
                name: '_rgya',
                fr: 'rongeur',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/rgya.mp3"),
            },
            {
                name: '_lfaw',
                fr: 'rire',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_left_mid,y_top],[x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/lfaw.mp3"),
            },
            {
                name: '_rgi',
                fr: 'rigide',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/rgi.mp3"),
            },
            {
                name: '_ne',
                fr: 'rien',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/ne.mp3"),
            },
            {
                name: '_swo',
                fr: 'revenir',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
                sound: new Audio("audio/swo.mp3"),
            },
            {
                name: '_rve',
                fr: 'reveiller',
                path: [[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_mid,y_mid]],
                sound: new Audio("audio/rve.mp3"),
            },
            {
                name: '_rto',
                fr: 'retourner',
                path: [[x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/rto.mp3"),
            },
            {
                name: '_lvoi',
                fr: 'retirer',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/lvoi.mp3"),
            },
            {
                name: '_zle',
                fr: 'resulter',
                path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/zle.mp3"),
            },
            {
                name: '_pta',
                fr: 'reptile',
                path: [[x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid,x_right,y_mid,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/pta.mp3"),
            },
            {
                name: '_rpie',
                fr: 'repeter',
                path: [[x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_top,x_mid,y_mid]],
                sound: new Audio("audio/rpie.mp3"),
            },
            {
                name: '_fksi',
                fr: 'reparer',
                path: [[x_right,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/fksi.mp3"),
            },
            {
                name: '_floi',
                fr: 'remplir',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/floi.mp3"),
            },
            {
                name: '_rdai',
                fr: 'refaire',
                path: [[x_mid,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/rdai.mp3"),
            },
            {
                name: '_tba',
                fr: 'recipient',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/tba.mp3"),
            },
            {
                name: '_rsea',
                fr: 'recevoir',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/rsea.mp3"),
            },
            {
                name: '_rbae',
                fr: 'rebondir',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/rbae.mp3"),
            },
            {
                name: '_snoi',
                fr: 'rayonner',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]],
                sound: new Audio("audio/snoi.mp3"),
            },
            {
                name: '_groi',
                fr: 'ramper',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid]],
                sound: new Audio("audio/groi.mp3"),
            },
            {
                name: '_rma',
                fr: 'ramasser',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/rma.mp3"),
            },
            {
                name: '_slo',
                fr: 'ralentir',
                path: [[x_right,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/slo.mp3"),
            },
            {
                name: '_wo',
                fr: 'questionner',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/wo.mp3"),
            },
            {
                name: '_kwa',
                fr: 'que',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/kwa.mp3"),
            },
            {
                name: '_kta',
                fr: 'quantite',
                path: [[x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid]],
                sound: new Audio("audio/kta.mp3"),
            },
            {
                name: '_fkwe',
                fr: 'quand',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/fkwe.mp3"),
            },
            {
                name: '_3e',
                fr: 'proteger',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/3e.mp3"),
            },
            {
                name: '_prai',
                fr: 'proportionner',
                path: [[x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/prai.mp3"),
            },
            {
                name: '_prio',
                fr: 'programmer',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/prio.mp3"),
            },
            {
                name: '_tpia',
                fr: 'profond',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/tpia.mp3"),
            },
            {
                name: '_pre',
                fr: 'pres',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/pre.mp3"),
            },
            {
                name: '_ra',
                fr: 'prendre',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/ra.mp3"),
            },
            {
                name: '_frya',
                fr: 'pouvoir',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/frya.mp3"),
            },
            {
                name: '_psie',
                fr: 'pousser',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/psie.mp3"),
            },
            {
                name: '_vwa',
                fr: 'pourquoi',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/vwa.mp3"),
            },
            {
                name: '_psu',
                fr: 'positionner',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot],[x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/psu.mp3"),
            },
            {
                name: '_ptoi',
                fr: 'porter',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid]],
                sound: new Audio("audio/ptoi.mp3"),
            },
            {
                name: '_lbay',
                fr: 'porcin',
                path: [[x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top]],
                sound: new Audio("audio/lbay.mp3"),
            },
            {
                name: '_ptea',
                fr: 'poitriner',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/ptea.mp3"),
            },
            {
                name: '_psaw',
                fr: 'poisson',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/psaw.mp3"),
            },
            {
                name: '_fky',
                fr: 'pointer',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/fky.mp3"),
            },
            {
                name: '_ploi',
                fr: 'poil',
                path: [[x_left,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/ploi.mp3"),
            },
            {
                name: '_vdio',
                fr: 'plus',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/vdio.mp3"),
            },
            {
                name: '_tsi',
                fr: 'pluriel',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/tsi.mp3"),
            },
            {
                name: '_plwe',
                fr: 'plume',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/plwe.mp3"),
            },
            {
                name: '_pli',
                fr: 'plier',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/pli.mp3"),
            },
            {
                name: '_pto',
                fr: 'pleuvoir',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/pto.mp3"),
            },
            {
                name: '_pla',
                fr: 'planifier',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_left,y_mid]],
                sound: new Audio("audio/pla.mp3"),
            },
            {
                name: '_pnae',
                fr: 'planete',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/pnae.mp3"),
            },
            {
                name: '_aria',
                fr: 'planer',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_top,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/aria.mp3"),
            },
            {
                name: '_ueoa',
                fr: 'plaisir',
                path: [[x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid]],
                sound: new Audio("audio/ueoa.mp3"),
            },
            {
                name: '_pvo',
                fr: 'pivoter',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/pvo.mp3"),
            },
            {
                name: '_vdibwa',
                fr: 'pire',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/vdibwa.mp3"),
            },
            {
                name: '_pke',
                fr: 'piquant',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/pke.mp3"),
            },
            {
                name: '_gwi',
                fr: 'pingouin',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/gwi.mp3"),
            },
            {
                name: '_trai',
                fr: 'pieger',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/trai.mp3"),
            },
            {
                name: '_fti',
                fr: 'pied',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
                sound: new Audio("audio/fti.mp3"),
            },
            {
                name: '_sfi',
                fr: 'peur',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/sfi.mp3"),
            },
            {
                name: '_psia',
                fr: 'peser',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/psia.mp3"),
            },
            {
                name: '_lse',
                fr: 'perdre',
                path: [[x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/lse.mp3"),
            },
            {
                name: '_dri',
                fr: 'percer',
                path: [[x_right,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_left,y_mid]],
                sound: new Audio("audio/dri.mp3"),
            },
            {
                name: '_hia',
                fr: 'penser',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid]],
                sound: new Audio("audio/hia.mp3"),
            },
            {
                name: '_pda',
                fr: 'pendant',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/pda.mp3"),
            },
            {
                name: '_prye',
                fr: 'part',
                path: [[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/prye.mp3"),
            },
            {
                name: '_psoi',
                fr: 'passe',
                path: [[x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/psoi.mp3"),
            },
            {
                name: '_pmi',
                fr: 'parmi',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top]],
                sound: new Audio("audio/pmi.mp3"),
            },
            {
                name: '_vga',
                fr: 'parfumer',
                path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/vga.mp3"),
            },
            {
                name: '_smai',
                fr: 'parfois',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/smai.mp3"),
            },
            {
                name: '_prae',
                fr: 'parcourir',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/prae.mp3"),
            },
            {
                name: '_ba',
                fr: 'par',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/ba.mp3"),
            },
            {
                name: '_mriy',
                fr: 'papillon',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/mriy.mp3"),
            },
            {
                name: '_sra',
                fr: 'pacifier',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/sra.mp3"),
            },
            {
                name: '_pno',
                fr: 'ouvrir',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/pno.mp3"),
            },
            {
                name: '_he',
                fr: 'oui',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/he.mp3"),
            },
            {
                name: '_roi',
                fr: 'ou',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/roi.mp3"),
            },
            {
                name: '_sdey',
                fr: 'où',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/sdey.mp3"),
            },
            {
                name: '_bnio',
                fr: 'os',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/bnio.mp3"),
            },
            {
                name: '_via',
                fr: 'originer',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid]],
                sound: new Audio("audio/via.mp3"),
            },
            {
                name: '_rgia',
                fr: 'organe',
                path: [[x_right_mid,y_top,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top],[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/rgia.mp3"),
            },
            {
                name: '_rdo',
                fr: 'ordonner',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/rdo.mp3"),
            },
            {
                name: '_r3y',
                fr: 'orange',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/r3y.mp3"),
            },
            {
                name: '_vroi',
                fr: 'or',
                path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/vroi.mp3"),
            },
            {
                name: '_gnae',
                fr: 'onde',
                path: [[x_left,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/gnae.mp3"),
            },
            {
                name: '_broi',
                fr: 'ombre',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/broi.mp3"),
            },
            {
                name: '_zo',
                fr: 'oiseau',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/zo.mp3"),
            },
            {
                name: '_gwa',
                fr: 'oeuf',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/gwa.mp3"),
            },
            {
                name: '_ptae',
                fr: 'objet',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/ptae.mp3"),
            },
            {
                name: '_ney',
                fr: 'nouveau',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/ney.mp3"),
            },
            {
                name: '_fdu',
                fr: 'nourrir',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/fdu.mp3"),
            },
            {
                name: '_nia',
                fr: 'non',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid, y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/nia.mp3"),
            },
            {
                name: '_na',
                fr: 'ni',
                path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_top]],
                sound: new Audio("audio/na.mp3"),
            },
            {
                name: '_nsio',
                fr: 'necessiter',
                path: [[x_left_mid,y_top,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/nsio.mp3"),
            },
            {
                name: '_zmi',
                fr: 'musique',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/zmi.mp3"),
            },
            {
                name: '_mso',
                fr: 'muscler',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/mso.mp3"),
            },
            {
                name: '_mksi',
                fr: 'multiplier',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/mksi.mp3"),
            },
            {
                name: '_ftey',
                fr: 'mou',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/ftey.mp3"),
            },
            {
                name: '_mtu',
                fr: 'montagne',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/mtu.mp3"),
            },
            {
                name: '_mu',
                fr: 'mollusque',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/mu.mp3"),
            },
            {
                name: '_mni',
                fr: 'moins',
                path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/mni.mp3"),
            },
            {
                name: '_d3io',
                fr: 'minute',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/d3io.mp3"),
            },
            {
                name: '_mina',
                fr: 'mineral',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,x_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/mina.mp3"),
            },
            {
                name: '_mlimza',
                fr: 'millimetre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/mlimza.mp3"),
            },
            {
                name: '_mligma',
                fr: 'milligramme',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/mligma.mp3"),
            },
            {
                name: '_mdo',
                fr: 'milieu',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/mdo.mp3"),
            },
            {
                name: '_vdikeo',
                fr: 'mieux',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/vdikeo.mp3"),
            },
            {
                name: '_pne',
                fr: 'mettre',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_mid,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/pne.mp3"),
            },
            {
                name: '_mza',
                fr: 'metre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
                sound: new Audio("audio/mza.mp3"),
            },
            {
                name: '_mto',
                fr: 'metal',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/mto.mp3"),
            },
            {
                name: '_bwa',
                fr: 'mauvais',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/bwa.mp3"),
            },
            {
                name: '_mtai',
                fr: 'matiere',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid, x_right_mid,y_bot]],
                sound: new Audio("audio/mtai.mp3"),
            },
            {
                name: '_lfe',
                fr: 'mastodonte',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_top]],
                sound: new Audio("audio/lfe.mp3"),
            },
            {
                name: '_chka',
                fr: 'masquer',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_bot,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/chka.mp3"),
            },
            {
                name: '_msy',
                fr: 'marsupial',
                path: [[x_left,y_mid,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_top],[x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/msy.mp3"),
            },
            {
                name: '_mrai',
                fr: 'marquer',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/mrai.mp3"),
            },
            {
                name: '_mno',
                fr: 'male',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/mno.mp3"),
            },
            {
                name: '_nfea',
                fr: 'maladie',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/nfea.mp3"),
            },
            {
                name: '_pro',        
                fr: 'mais',        
                path: [[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],      
                sound: new Audio("audio/pro.mp3"),
            },        
            {        
                name: '_sna',        
                fr: 'maigrir',        
                path: [[x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid]],        
                sound: new Audio("audio/sna.mp3"),
            },        
            {        
                name: '_lya',        
                fr: 'lune',        
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/lya.mp3"), 
            },        
            {        
                name: '_hea',        
                fr: 'lumiere',        
                path: [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/hea.mp3"),   
            },        
            {        
                name: '_lro',        
                fr: 'lourd',        
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/lro.mp3"),
            },        
            {        
                name: '_lgya',        
                fr: 'long',        
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top]],
                sound: new Audio("audio/lgya.mp3"), 
            },        
            {        
                name: '_fra',        
                fr: 'loin',        
                path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top]],
                sound: new Audio("audio/fra.mp3"),
            },        
            {       
                name: '_sti',        
                fr: 'lister',        
                path: [[x_right_mid,y_bot,x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/sti.mp3"),
            },        
            {        
                name: '_lpae',        
                fr: 'levre',        
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/lpae.mp3"),
            },        
            {        
                name: '_lgy',        
                fr: 'legume',        
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/lgy.mp3"),
            },        
            {        
                name: '_lgio',        
                fr: 'langage',        
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/lgio.mp3"),
            },
            {
                name: '_ska',
                fr: 'lancer',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/ska.mp3"),
            },
            {
                name: '_klotogma',
                fr: 'kilotonne',
                path: [[x_right_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/klotogma.mp3"),
            },
            {
                name: '_klomza',
                fr: 'kilometre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid]],
                sound: new Audio("audio/klomza.mp3"),
            },
            {
                name: '_klogma',
                fr: 'kilogramme',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/klogma.mp3"),
            },
            {
                name: '_tli',
                fr: 'jusque',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/tli.mp3"),
            },
            {
                name: '_kadwa',
                fr: 'jour',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
                sound: new Audio("audio/kadwa.mp3"),
            },
            {
                name: '_3go',
                fr: 'jouer',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/3go.mp3"),
            },
            {
                name: '_ntew',
                fr: 'interrompre',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/ntew.mp3"),
            },
            {
                name: '_nsa',
                fr: 'interieur',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/nsa.mp3"),
            },
            {
                name: '_kea',
                fr: 'intelligence',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top]],
                sound: new Audio("audio/kea.mp3"),
            },
            {
                name: '_chra',
                fr: 'insulter',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/chra.mp3"),
            },
            {
                name: '_pse',
                fr: 'insuffire',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/pse.mp3"),
            },
            {
                name: '_skew',
                fr: 'insecte',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/skew.mp3"),
            },
            {
                name: '_nfo',
                fr: 'informer',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/nfo.mp3"),
            },
            {
                name: '_ngla',
                fr: 'inegaler',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/ngla.mp3"),
            },
            {
                name: '_tso',
                fr: 'indiquer',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/tso.mp3"),
            },
            {
                name: '_knea',
                fr: 'incliner',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/knea.mp3"),
            },
            {
                name: '_kpie',
                fr: 'inachever',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_top]],
                sound: new Audio("audio/kpie.mp3"),
            },
            {
                name: '_fo',
                fr: 'imperatif',
                path: [[x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/fo.mp3"),
            },
            {
                name: '_stoia',
                fr: 'imaginer',
                path: [[x_right,y_mid,x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot]],
                sound: new Audio("audio/stoia.mp3"),
            },
            {
                name: '_3ne',
                fr: 'jeune',
                path: [[x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/3ne.mp3"),
            },
            {
                name: '_dea',
                fr: 'idee',
                path: [[x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
                sound: new Audio("audio/dea.mp3"),
            },
            {
                name: '_si',
                fr: 'ici',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/si.mp3"),
            },
            {
                name: '_r3a',
                fr: 'jaune',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/r3a.mp3"),
            },
            {
                name: '_lgae',
                fr: 'jambe',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/lgae.mp3"),
            },
            {
                name: '_fwo',
                fr: 'hors',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/fwo.mp3"),
            },
            {
                name: '_rzo',
                fr: 'horizon',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/hro.mp3"),
            },
            {
                name: '_hro',
                fr: 'heure',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/hro.mp3"),
            },
            {
                name: '_fro',
                fr: 'hermaphrodite',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/fro.mp3"),
            },
            {
                name: '_pa',
                fr: 'haut',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/pa.mp3"),
            },
            {
                name: '_kio',
                fr: 'habiter',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/kio.mp3"),
            },
            {
                name: '_dvie',
                fr: 'habiller',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/dvie.mp3"),
            },
            {
                name: '_kwe',
                fr: 'grouper',
                path: [[x_left,y_mid,x_right_mid,y_top,x_left_mid,y_bot],[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/kwe.mp3"),
            },
            {
                name: '_gro',
                fr: 'grossir',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/gro.mp3"),
            },
            {
                name: '_gva',
                fr: 'graviter',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot]],
                sound: new Audio("audio/gva.mp3"),
            },
            {
                name: '_gma',
                fr: 'gramme',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/gma.mp3"),
            },
            {
                name: '_gra',
                fr: 'graisser',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/gra.mp3"),
            },
            {
                name: '_tsae',
                fr: 'goûter',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right,y_mid]],
                sound: new Audio("audio/tsae.mp3"),
            },
            {
                name: '_sla',
                fr: 'glisser',
                path: [[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/sla.mp3"),
            },
            {
                name: '_gzai',
                fr: 'gaz',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/gzai.mp3"),
            },
            {
                name: '_dray',
                fr: 'gauche',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/dray.mp3"),
            },
            {
                name: '_kpae',
                fr: 'garder',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top]],
                sound: new Audio("audio/kpae.mp3"),
            },
            {
                name: '_ftu',
                fr: 'futur',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/ftu.mp3"),
            },
            {
                name: '_fzo',
                fr: 'fusionner',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/fzo.mp3"),
            },
            {
                name: '_ray',
                fr: 'fuir',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_left_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/ray.mp3"),
            },
            {
                name: '_ftae',
                fr: 'frustrer',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/ftae.mp3"),
            },
            {
                name: '_fry',
                fr: 'fruit',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/fry.mp3"),
            },
            {
                name: '_gry',
                fr: 'frapper',
                path: [[x_left_mid,y_top,x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/gry.mp3"),
            },
            {
                name: '_gew',
                fr: 'fort',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/gew.mp3"),
            },
            {
                name: '_fai',
                fr: 'former',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/fai.mp3"),
            },
            {
                name: '_fkai',
                fr: 'fonctionner',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/fkai.mp3"),
            },
            {
                name: '_blea',
                fr: 'fleurir',
                path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/blea.mp3"),
            },
            {
                name: '_fni',
                fr: 'finir',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/fni.mp3"),
            },
            {
                name: '_brea',
                fr: 'filtrer',
                path: [[x_left,y_mid,x_right,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/brea.mp3"),
            },
            {
                name: '_fli',
                fr: 'fil',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/fli.mp3"),
            },
            {
                name: '_lvia',
                fr: 'feuille',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid]],
                sound: new Audio("audio/lvia.mp3"),
            },
            {
                name: '_frey',
                fr: 'feu',
                path: [[x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid,x_right,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/frey.mp3"),
            },
            {
                name: '_kloi',
                fr: 'fermer',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid, x_mid,y_mid]],
                sound: new Audio("audio/kloi.mp3"),
            },
            {
                name: '_mna',
                fr: 'femelle',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/mna.mp3"),
            },
            {
                name: '_kti',
                fr: 'felin',
                path: [[x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/kti.mp3"),
            },
            {
                name: '_nrea',
                fr: 'faux',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/nrea.mp3"),
            },
            {
                name: '_sga',
                fr: 'faucher',
                path: [[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/sga.mp3"),
            },
            {
                name: '_fa',
                fr: 'faire',
                path: [[x_mid,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/fa.mp3"),
            },
            {
                name: '_vea',
                fr: 'faible',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/vea.mp3"),
            },
            {
                name: '_fsa',
                fr: 'face',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid]],
                sound: new Audio("audio/fsa.mp3"),
            },
            {
                name: '_stre',
                fr: 'extremite',
                path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/stre.mp3"),
            },
            {
                name: '_stra',
                fr: 'extraire',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/stra.mp3"),
            },
            {
                name: '_tra',
                fr: 'exterieur',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/tra.mp3"),
            },
            {
                name: '_vlye',
                fr: 'evoluer',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/vlye.mp3"),
            },
            {
                name: '_vne',
                fr: 'evenement',
                path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/vne.mp3"),
            },
            {
                name: '_stea',
                fr: 'etoile',
                path: [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/stea.mp3"),
            },
            {
                name: '_meama',
                fr: 'etant',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/meama.mp3"),
            },
            {
                name: '_te',
                fr: 'et',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/te.mp3"),
            },
            {
                name: '_bia',
                fr: 'equilibrer',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
                sound: new Audio("audio/bia.mp3"),
            },
            {
                name: '_kdea',
                fr: 'equide',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_left,y_mid]],
                sound: new Audio("audio/kdea.mp3"),
            },
            {
                name: '_nto',
                fr: 'entre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/nto.mp3"),
            },
            {
                name: '_srye',
                fr: 'entourer',
                path: [[x_mid,y_mid,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_top],[x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/srye.mp3"),
            },
            {
                name: '_sko',
                fr: 'entendre',
                path: [[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid]],
                sound: new Audio("audio/sko.mp3"),
            },
            {
                name: '_nki',
                fr: 'entailler',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/nki.mp3"),
            },
            {
                name: '_kdie',
                fr: 'enfant',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/kdie.mp3"),
            },
            {
                name: '_3ia',
                fr: 'energie',
                path: [[x_left_mid,y_top,x_right,y_mid,x_left,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top]],
                sound: new Audio("audio/3ia.mp3"),
            },
            {
                name: '_ni',
                fr: 'bas',
                path: [[x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/ni.mp3"),
            },
            {
                name: '_nwo',
                fr: 'en',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/nwo.mp3"),
            },
            {
                name: '_pkoi',
                fr: 'empaqueter',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid]],
                sound: new Audio("audio/pkoi.mp3"),
            },
            {
                name: '_skoi',
                fr: 'emotion',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/skoi.mp3"),
            },
            {
                name: '_vzu',
                fr: 'electricite',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/vzu.mp3"),
            },
            {
                name: '_gla',
                fr: 'egaler',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/gla.mp3"),
            },
            {
                name: '_fke',
                fr: 'effet',
                path: [[x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/fke.mp3"),
            },
            {
                name: '_to',
                fr: 'eau',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/to.mp3"),
            },
            {
                name: '_drye',
                fr: 'durer',
                path: [[x_mid,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/drye.mp3"),
            },
            {
                name: '_drei',
                fr: 'dur',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/drei.mp3"),
            },
            {
                name: '_drya',
                fr: 'droite',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/drya.mp3"),
            },
            {
                name: '_dro',
                fr: 'droit',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/dro.mp3"),
            },
            {
                name: '_rdwa',
                fr: 'draper',
                path: [[x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/rdwa.mp3"),
            },
            {
                name: '_rmi',
                fr: 'dormir',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid]],
                sound: new Audio("audio/rmi.mp3"),
            },
            {
                name: '_glo',
                fr: 'dont',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/glo.mp3"),
            },
            {
                name: '_dku',
                fr: 'donc',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_left,y_mid]],
                sound: new Audio("audio/dku.mp3"),
            },
            {
                name: '_dvi',
                fr: 'diviser',
                path: [[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/dvi.mp3"),
            },
            {
                name: '_dme',
                fr: 'dimensionner',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/dme.mp3"),
            },
            {
                name: '_dvey',
                fr: 'differer',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot]],
                sound: new Audio("audio/dvey.mp3"),
            },
            {
                name: '_dvo',
                fr: 'devoir',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/dvo.mp3"),
            },
            {
                name: '_dva',
                fr: 'devant',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/dva.mp3"),
            },
            {
                name: '_dzye',
                fr: 'detruire',
                path: [[x_right_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right,y_mid,x_left_mid,y_top,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot]],
                sound: new Audio("audio/dzye.mp3"),
            },
            {
                name: '_nbia',
                fr: 'desequilibrer',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right,y_mid],[x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid]],
                sound: new Audio("audio/nbia.mp3"),
            },
            {
                name: '_dre',
                fr: 'derriere',
                path: [[x_right,y_mid,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/dre.mp3"),
            },
            {
                name: '_fmai',
                fr: 'depuis',
                path: [[x_right,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/fmai.mp3"),
            },
            {
                name: '_chna',
                fr: 'demasquer',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/chna.mp3"),
            },
            {
                name: '_dle',
                fr: 'delicieux',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/dle.mp3"),
            },
            {
                name: '_d3a',
                fr: 'dejà',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid]],
                sound: new Audio("audio/d3a.mp3"),
            },
            {
                name: '_klue',
                fr: 'defaut',
                path: [[x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/klue.mp3"),
            },
            {
                name: '_dfo',
                fr: 'defaire',
                path: [[x_right_mid,y_top,x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/dfo.mp3"),
            },
            {
                name: '_3i',
                fr: 'decouvrir',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/3i.mp3"),
            },
            {
                name: '_ktye',
                fr: 'decouper',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_mid,y_mid,x_right,y_mid,x_right_mid,y_bot,x_mid,y_mid]],
                sound: new Audio("audio/ktye.mp3"),
            },
            {
                name: '_dsimza',
                fr: 'decimere',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid]],
                sound: new Audio("audio/dsimza.mp3"),
            },
            {
                name: '_dsigma',
                fr: 'decigramme',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/dsigma.mp3"),
            },
            {
                name: '_trie',
                fr: 'dechet',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_left_mid,y_bot],[x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/trie.mp3"),
            },
            {
                name: '_da',
                fr: 'de',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top],[x_left_mid,y_top,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/da.mp3"),
            },
            {
                name: '_dfie',
                fr: 'dauphin',
                path: [[x_right_mid,y_top,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left,y_mid],[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/dfie.mp3"),
            },
            {
                name: '_dse',
                fr: 'danser',
                path: [[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid]],
                sound: new Audio("audio/dse.mp3"),
            },
            {
                name: '_di',
                fr: 'dans',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left,y_mid]],
                sound: new Audio("audio/di.mp3"),
            },
            {
                name: '_d3e',
                fr: 'danger',
                path: [[x_mid,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/d3e.mp3"),
            },
            {
                name: '_dwa',
                fr: 'cycle',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
                sound: new Audio("audio/dwa.mp3"),
            },
            {
                name: '_kraw',
                fr: 'crustace',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/kraw.mp3"),
            },
            {
                name: '_grae',
                fr: 'croître',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid],[x_right_mid,y_top,x_left_mid,y_bot]],
                sound: new Audio("audio/grae.mp3"),
            },
            {
                name: '_kru',
                fr: 'croiser',
                path: [[x_left_mid,y_top,x_right,y_mid],[x_right_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/kru.mp3"),
            },
            {
                name: '_kro',
                fr: 'croire',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/kro.mp3"),
            },
            {
                name: '_kri',
                fr: 'crier',
                path: [[x_left_mid,y_top,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/kri.mp3"),
            },
            {
                name: '_kvae',
                fr: 'couvrir',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/kvae.mp3"),
            },
            {
                name: '_kry',
                fr: 'court',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/kry.mp3"),
            },
            {
                name: '_krye',
                fr: 'courrier',
                path: [[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/krye.mp3"),
            },
            {
                name: '_klo',
                fr: 'colorer',
                path: [[x_right,y_mid,x_left,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/klo.mp3"),
            },
            {
                name: '_kte',
                fr: 'cote',
                path: [[x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid]],
                sound: new Audio("audio/kte.mp3"),
            },
            {
                name: '_bdi',
                fr: 'corps',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/bdi.mp3"),
            },
            {
                name: '_sno',
                fr: 'contre',
                path: [[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/sno.mp3"),
            },
            {
                name: '_kpoi',
                fr: 'continuer',
                path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid]],
                sound: new Audio("audio/kpoi.mp3"),
            },
            {
                name: '_ksea',
                fr: 'construire',
                path: [[x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_left_mid,y_top,x_left,y_mid,x_mid,y_mid,x_left_mid,y_bot]],
                sound: new Audio("audio/ksea.mp3"),
            },
            {
                name: '_knoi',
                fr: 'connecter',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/knoi.mp3"),
            },
            {
                name: '_kno',
                fr: 'connaître',
                path: [[x_mid,y_mid,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/kno.mp3"),
            },
            {
                name: '_kfay',
                fr: 'confondre',
                path: [[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top]],
                sound: new Audio("audio/kfay.mp3"),
            },
            {
                name: '_troi',
                fr: 'conflit',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_top]],
                sound: new Audio("audio/troi.mp3"),
            },
            {
                name: '_hi',
                fr: 'condition',
                path: [[x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/hi.mp3"),
            },
            {
                name: '_kteu',
                fr: 'compter',
                path: [[x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/kteu.mp3"),
            },
            {
                name: '_plea',
                fr: 'complexe',
                path: [[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/plea.mp3"),
            },
            {
                name: '_haw',
                fr: 'comment',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/haw.mp3"),
            },
            {
                name: '_fta',
                fr: 'commencer',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/fta.mp3"),
            },
            {
                name: '_ki',
                fr: 'cle',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_right,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/ki.mp3"),
            },
            {
                name: '_rkai',
                fr: 'classer',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right,y_mid]],
                sound: new Audio("audio/rkai.mp3"),
            },
            {
                name: '_srie',
                fr: 'circuit',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid]],
                sound: new Audio("audio/srie.mp3"),
            },
            {
                name: '_kwo',
                fr: 'couper',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/kwo.mp3"),
            },
            {
                name: '_skai',
                fr: 'ciel',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/skai.mp3"),
            },
            {
                name: '_swa',
                fr: 'choisir',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/swa.mp3"),
            },
            {
                name: '_sdae',
                fr: 'chaque',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_left,y_mid],[x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/sdae.mp3"),
            },
            {
                name: '_sni',
                fr: 'chanter',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/sni.mp3"),
            },
            {
                name: '_fgy',
                fr: 'champignon',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_top],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/fgy.mp3"),
            },
            {
                name: '_fle',
                fr: 'chair',
                path: [[x_left,y_mid,x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/fle.mp3"),
            },
            {
                name: '_bzea',
                fr: 'cervide',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/bzea.mp3"),
            },
            {
                name: '_srea',
                fr: 'cereale',
                path: [[x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_top,x_mid,y_mid]],
                sound: new Audio("audio/srea.mp3"),
            },
            {
                name: '_tru',
                fr: 'cercler',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/tru.mp3"),
            },
            {
                name: '_sye',
                fr: 'centrer',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/sye.mp3"),
            },
            {
                name: '_stimza',
                fr: 'centimetre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid]],
                sound: new Audio("audio/stimza.mp3"),
            },
            {
                name: '_stigma',
                fr: 'centigramme',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/stigma.mp3"),
            },
            {
                name: '_sley',
                fr: 'cellule',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/sley.mp3"),
            },
            {
                name: '_de',
                fr: 'ce',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/de.mp3"),
            },
            {
                name: '_kzo',
                fr: 'causer',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/kzo.mp3"),
            },
            {
                name: '_gzo',
                fr: 'car',
                path: [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/gzo.mp3"),
            },
            {
                name: '_knew',
                fr: 'canonner',
                path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/knew.mp3"),
            },
            {
                name: '_klio',
                fr: 'canin',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_left,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/klio.mp3"),
            },
            {
                name: '_rko',
                fr: 'caillou',
                path: [[x_left_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/rko.mp3"),
            },
            {
                name: '_glio',
                fr: 'but',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/glio.mp3"),
            },
            {
                name: '_bze',
                fr: 'business',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/bze.mp3"),
            },
            {
                name: '_bra',
                fr: 'bras',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid,x_left_mid,y_bot],[x_left,y_mid,x_right_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/bra.mp3"),
            },
            {
                name: '_dvea',
                fr: 'brancher',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/dvea.mp3"),
            },
            {
                name: '_bo',
                fr: 'bovide',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid]],
                sound: new Audio("audio/bo.mp3"),
            },
            {
                name: '_bu',
                fr: 'boucler',
                path: [[x_left,y_mid,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/bu.mp3"),
            },
            {
                name: '_blu',
                fr: 'bleu',
                path: [[x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/blu.mp3"),
            },
            {
                name: '_keo',
                fr: 'bien',
                path: [[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_top],[x_right_mid,y_bot,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
                sound: new Audio("audio/keo.mp3"),
            },
            {
                name: '_bly',
                fr: 'baleine',
                path: [[x_left,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_top],[x_mid,y_mid,x_left_mid,y_bot]],
                sound: new Audio("audio/bly.mp3"),
            },
            {
                name: '_zaw',
                fr: 'aussi',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/zaw.mp3"),
            },
            {
                name: '_vi',
                fr: 'avec',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/vi.mp3"),
            },
            {
                name: '_ntea',
                fr: 'avant',
                path: [[x_mid,y_mid,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/ntea.mp3"),
            },
            {
                name: '_rpa',
                fr: 'attraper',
                path: [[x_left,y_mid,x_right,y_mid,x_right_mid,y_top,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/rpa.mp3"),
            },
            {
                name: '_spea',
                fr: 'attendre',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top,x_right_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/spea.mp3"),
            },
            {
                name: '_tmei',
                fr: 'atome',
                path: [[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
                sound: new Audio("audio/tmei.mp3"),
            },
            {
                name: '_ktea',
                fr: 'arreter',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/ktea.mp3"),
            },
            {
                name:'_rkye',
                fr: 'arachnide',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_mid,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_left_mid,y_bot]],
                sound: new Audio("audio/rkye.mp3"),
            },
            {
                name: '_ftea',
                fr: 'apres',
                path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/ftea.mp3"),
            },
            {
                name: '_znie',
                fr: 'appuyer',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_left,y_mid,x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/znie.mp3"),
            },
            {
                name: '_zai',
                fr: 'apparaître',
                path: [[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/zai.mp3"),
            },
            {
                name: '_piz',
                fr: 'apaiser',
                path: [[x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/piz.mp3"),
            },
            {
                name: '_kpaw',
                fr: 'antenne',
                path: [[x_left_mid,y_top,x_left,y_mid,x_right_mid,y_bot,x_mid,y_mid,x_left_mid,y_bot,x_right,y_mid,x_right_mid,y_top]],
                sound: new Audio("audio/kpaw.mp3"),
            },
            {
                name: '_pkia',
                fr: 'animal',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_mid,y_mid,x_right_mid, y_top, x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/pkia.mp3"),
            },
            {
                name: '_glei',
                fr: 'angle',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/glei.mp3"),
            },
            {
                name: '_mrya',
                fr: 'amplifier',
                path: [[x_left,y_mid,x_right_mid,y_bot,x_right_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_mid,y_mid]],
                sound: new Audio("audio/grey.mp3"),
            },
            {
                name: '_mre',
                fr: 'amer',
                path: [[x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_right,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/mre.mp3"),
            },
            {
                name: '_prba',
                fr: 'ame',
                path : [[x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid],[x_left,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/prba.mp3"),
            },
            {
                name: '_tae',
                fr: 'alterner',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_bot,x_left_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/tae.mp3"),
            },
            {
                name: '_slio',
                fr: 'alors',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/slio.mp3"),
            },
            {
                name: '_le',
                fr: 'aller',
                path: [[x_right,y_mid,x_right_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_mid,y_mid,x_left,y_mid]],
                sound: new Audio("audio/le.mp3"),
            },
            {
                name: '_hio',
                fr: 'alleger',
                path: [[x_left_mid,y_top,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/hio.mp3"),
            },
            {
                name: '_lea',
                fr: 'alea',
                path: [[x_left,y_mid,x_right,y_mid,x_left_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/lea.mp3"),
            },
            {
                name: '_fsu',
                fr: 'ajuster',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/fsu.mp3"),
            },
            {
                name: '_hae',
                fr: 'air',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid],[x_left,y_mid,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]],
                sound: new Audio("audio/hae.mp3"),
            },
            {
                name: '_kli',
                fr: 'qualite',
                path: [[x_right_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_left_mid,y_bot,x_right,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/kli.mp3"),
            },
            {
                name: '_nmae',
                fr: 'nombre',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/nmae.mp3"),
            },
            {
                name: '_zno',
                fr: '11',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/zno.mp3"),
            },
            {
                name: '_dza',
                fr: '10',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_mid,y_mid,x_left_mid,y_bot,x_left_mid,y_top]],
                sound: new Audio("audio/dza.mp3"),
            },
            {
                name: '_nwa',
                fr: '9',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top,x_mid,y_mid,x_right,y_mid],[x_left_mid,y_bot,x_mid,y_mid]],
                sound: new Audio("audio/nwa.mp3"),
            },
            {
                name: '_sme',
                fr: 'identique',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/sme.mp3"),
            },
            {
                name: '_tsio',
                fr: '8',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_bot,x_right,y_mid,x_right_mid,y_top,x_left_mid,y_bot,x_left,y_mid]],
                sound: new Audio("audio/tsio.mp3"),
            },
            {
                name: '_stei',
                fr: '7',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/stei.mp3"),
            },
            {
                name: '_ksi',
                fr: '6',
                path: [[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/ksi.mp3"),
            },
            {
                name: '_foi',
                fr: '5',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/foi.mp3"),
            },
            {
                name: '_ktu',
                fr: '4',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right_mid,y_bot,x_left_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/ktu.mp3"),
            },
            {
                name: '_srei',
                fr: '3',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid, x_left_mid, y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/srei.mp3"),
            },
            {
                name: '_du',
                fr: '2',
                path: [[x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/du.mp3"),
            },
            {
                name: '_kfa',
                fr: '1',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_left,y_mid],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right_mid,y_top],[x_right,y_mid,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/kfa.mp3"),
            },
            {
                name: '_sro',
                fr: '0',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/sro.mp3"),
            },
            {
                name: ',',
                fr: ',',
                path: [[x_right_mid,y_top,x_mid,y_mid,x_right_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_left,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/virgule.mp3"),
            },
            {
                name: '!',
                fr: '!',
                path: [[x_left_mid,y_top,x_mid,y_mid],[x_left,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid],[x_right_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/exclam.mp3"),
            },
            {
                name: '?',
                fr: '?',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/interro.mp3"),
            },
            {
                name: '.',
                fr: '.',
                path: [[x_mid,y_mid,x_mid,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/point.mp3"),
            },
            {
                name: '_mea',
                fr: 'determiner',
                path: [[x_left_mid,y_top,x_right_mid,y_bot],[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/mea.mp3"),
            },
            {
                name: '_ma',
                fr: 'etre',
                path: [[x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot],[x_mid,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/ma.mp3"),
            },
            {
                name: '_kde',
                fr: 'adolescent',
                path: [[x_right_mid,y_top,x_left_mid,y_bot],[x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_left_mid,y_top]],
                sound: new Audio("audio/kde.mp3"),
            },
            {
                name: '_dly',
                fr: 'adulte',       
                path: [[x_right,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_left_mid,y_top],[x_mid,y_mid,x_right_mid,y_bot],[x_left,y_mid,x_left,y_mid]],      
                sound: new Audio("audio/dly.mp3"),
            },        
            {        
                name: '_pfae',        
                fr: 'agir',        
                path: [[x_left,y_mid,x_left_mid,y_bot,x_left_mid,y_top,x_right,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_top],[x_right_mid,y_bot,x_right,y_mid],[x_mid,y_mid,x_mid,y_mid]],
                sound: new Audio("audio/pfae.mp3"),
            },
            {
                name: '_dna',
                fr: 'adn',
                path: [[x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_left,y_mid],[x_left_mid,y_bot,x_right_mid,y_top,x_right_mid,y_bot]],
                sound: new Audio("audio/dna.mp3"),
            },
            {
                name: '_sde',
                fr: 'acide',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid,x_mid,y_mid,x_right_mid,y_top],[x_left,y_mid,x_right_mid,y_bot],[x_right,y_mid,x_left_mid,y_bot]],
                sound: new Audio("audio/sde.mp3"),
            },
            {
                name: '_bai',
                fr: 'acheter',
                path: [[x_left_mid,y_top,x_mid,y_mid,x_right_mid,y_top,x_left_mid,y_top,x_left,y_mid,x_right,y_mid,x_right_mid,y_top],[x_left_mid,y_bot,x_right_mid,y_bot]],
                sound: new Audio("audio/bai.mp3"),
            },
            {
                name: '_kmia',
                fr: 'accumuler',
                path: [[x_left_mid,y_top,x_right,y_mid,x_mid,y_mid,x_left_mid,y_top],[x_left,y_mid,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/kmia.mp3"),
            },
            {
                name: '_grey',
                fr: 'accrocher',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_left,y_mid],[x_right_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_left_mid,y_bot]],
                sound: new Audio("audio/grey.mp3"),
            },
            {
                name: '_ksu',
                fr: 'accelerer',
                path: [[x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_mid,y_mid,x_left_mid,y_bot],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/ksu.mp3"),
            },
            {
                name: '_boi',
                fr: 'a',
                path: [[x_left_mid,y_top,x_left_mid,y_bot,x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/boi.mp3"),
            },
            {
                name: '_fya',
                fr: 'donner',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_mid,y_mid,x_left_mid,y_top],[x_left,y_mid,x_left_mid,y_bot,x_right_mid,y_bot,x_right,y_mid]],
                sound: new Audio("audio/fya.mp3"),
            },
            {
                name: '_fy',
                fr: 'refleter',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_left_mid,y_bot,x_right_mid,y_bot,x_left_mid,y_top],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/fy.mp3"),
            },
            {
                name: '_go',
                fr: 'avoir',
                path:[[x_left_mid, y_bot, x_mid, y_mid, x_right_mid,y_bot,x_left_mid,y_bot],[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid]],
                sound: new Audio("audio/go.mp3"),
            },
            {
                name: '_ka',
                fr: 'humain',
                path: [[x_left,y_mid,x_right_mid,y_top],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_mid,y_mid],[x_right,y_mid,x_right,y_mid]],
                sound: new Audio("audio/ka.mp3"),
            },
            {
                name: '_kme',
                fr: 'pour',
                path: [[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]],
                sound: new Audio("audio/kme.mp3"),
            },
            {
                name: '_sa',
                fr: 'vivre',
                path: [[x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_left_mid,y_top],[x_left_mid,y_top,x_right_mid,y_bot],[x_right_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_right,y_mid]],
                sound: new Audio("audio/sa.mp3"),
            },
            {
                name: '_smia',
                fr: 'isme',
                path: [[x_right_mid,y_bot,x_left,y_mid,x_right,y_mid,x_left_mid,y_bot,x_mid,y_mid,x_right_mid,y_bot,x_left_mid,y_bot],[x_left_mid,y_top,x_left_mid,y_top],[x_right_mid,y_top,x_right_mid,y_top]],
                sound: new Audio("audio/smia.mp3"),
            }
        ];

        let k;
        for(k = 0; k < glyph_database.length; k += 1){

            let one_glyph = glyph_database[k];
            let glyph_with_accent = glyph_reference[k]; //implies that both lists are strictly identical with the exception of accents = possible source of error when updating lists!

            if(one_glyph.name === text_searched || one_glyph.fr === text_searched){
                hear_sound(one_glyph.sound);
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
            audio_kafygo.play();
            translator.innerHTML += `JE, MOI <span class="phono">[ka-fy-go]</span>`;
        }
        if(text_searched === "aimer" || text_searched === "_sakme"){
            draw_glyph([[x_left,y_mid,x_left_mid,y_top,x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot,x_left_mid,y_bot,x_left,y_mid,x_right,y_mid],[x_left_mid,y_top,x_right_mid,y_bot],[x_left_mid,y_bot,x_right_mid,y_top]]);
            increment_y();
            draw_glyph([[x_left_mid,y_top,x_left_mid,y_bot],[x_left,y_mid,x_mid,y_mid],[x_right_mid,y_top,x_right,y_mid,x_right_mid,y_bot]]);
            increment_y();
            erase_view();
            audio_sakme.play();
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
            audio_kafyafy.play();
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

    (function manage_bottom_links(){
        const links = document.getElementsByClassName("link");
        const link_caption = document.getElementById("link_caption");

        function tell_what_is_that_link(one_link, text_display, text_color, page){
            one_link.addEventListener("mouseover", function(){
                link_caption.innerHTML = text_display;
                link_caption.style.color = text_color;
            });
            one_link.addEventListener("mouseout", function(){
                link_caption.innerHTML = "";
            });

            one_link.addEventListener("click", function(){
                window.location.href = page;
            })
        }

        tell_what_is_that_link(links[0], "Ecrivez en graphieros fractal avec un clavier physique", "rgb(255,153,0)","https://graphieros.com/fractal_gwriter/fractal_gwriter.html");

        tell_what_is_that_link(links[1], "Ecrivez en graphieros linéaire avec un clavier physique.","gold","https://graphieros.com/gwriter/gwriter.html");

        tell_what_is_that_link(links[2], "Composez des glyphes directement à partir de la grille.","white","https://graphieros.com/composer.html");

    }());

}());