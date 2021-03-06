/*
TODO:
    > function to change size of glyphs
*/ 

(function main(){

    //initial y glyph coordinates
    let a = 50; //y_top
    let q = 128; //y_mid
    let w = 206; //y_bot

    //initial x glyph coordinates
    let l = 38; //x_left
    let lm = 83; //x_left_mid
    let m = 128; //x_mid
    let rm = 173; //x_right_mid
    let r = 218; //x_right

    //some styling for the svg paths has to be hardcoded here to be used when converting into canvas > png in the convert() function.
    const _p = `<path style="stroke-width:10px;stroke-linecap:round;stroke-linejoin:round;fill:none;" d="M `;
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
    const audio_kioheatotreafrey = new Audio("audio/kiohaetotreafrey.mp3");

    const btn_R = document.getElementById("btn_R");
    const btn_G = document.getElementById("btn_G");
    const btn_B = document.getElementById("btn_B");

    const found_list = document.getElementById("found_list");

    const MEA = document.getElementById("pk0");
    const KA = document.getElementById("pk1");
    const KLI = document.getElementById("pk2");
    const VI = document.getElementById("pk3");
    const KIO = document.getElementById("pk4");
    const PTAE = document.getElementById("pk5");
    const PKIA = document.getElementById("pk6");
    const MTAI = document.getElementById("pk7");
    const MINA = document.getElementById("pk8");
    const TSI = document.getElementById("pk9");

    let up_down_counter = 0;
    let left_right_counter = 0;
    let stax = [];

    (function create_color(){
        function change_color(btn, place){
            btn.addEventListener("click", function(){
                let rand = Math.round(Math.random()*255);
                this.innerHTML = rand;
                if(place === 0){
                    this.style.background = `rgb(${rand},0,0)`;
                }else if(place === 1){
                    this.style.background = `rgb(0,${rand},0)`;
                    if(rand > 150){
                        this.style.color = "black";
                    }else{
                        this.style.color = "white";
                    }
                }else{
                    this.style.background = `rgb(0,0,${rand})`;
                }
                let made_color = `rgb(${btn_R.innerHTML},${btn_G.innerHTML},${btn_B.innerHTML})`;
                light.style.background = made_color;
                output_area.style.stroke = made_color;
            });
        }
        change_color(btn_R, 0);
        change_color(btn_G, 1);
        change_color(btn_B, 2);
        
    }());

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

            let graphieros_cursor = document.createElementNS(xmlns, "g");
            graphieros_cursor.id = "g_cursor";
            
            let c0 = document.createElementNS(xmlns, "circle");
            c0.setAttributeNS(null, "r", "16");
            let c1 = document.createElementNS(xmlns, "circle");
            c1.setAttributeNS(null, "r", "16");
            let c2 = document.createElementNS(xmlns, "circle");
            c2.setAttributeNS(null, "r", "16");
            let c3 = document.createElementNS(xmlns, "circle");
            c3.setAttributeNS(null, "r", "16");
            let c4 = document.createElementNS(xmlns, "circle");
            c4.setAttributeNS(null, "r", "16");
            let c5 = document.createElementNS(xmlns, "circle");
            c5.setAttributeNS(null, "r", "16");
            let c6 = document.createElementNS(xmlns, "circle");
            c6.setAttributeNS(null, "r", "16");

            c0.setAttributeNS(null, "cx", m);
            c0.setAttributeNS(null, "cy", q);
            c1.setAttributeNS(null, "cx", l);
            c1.setAttributeNS(null, "cy", q);
            c2.setAttributeNS(null, "cx", lm);
            c2.setAttributeNS(null, "cy", a);
            c3.setAttributeNS(null, "cx", rm);
            c3.setAttributeNS(null, "cy", a);
            c4.setAttributeNS(null, "cx", r);
            c4.setAttributeNS(null, "cy", q);
            c5.setAttributeNS(null, "cx", rm);
            c5.setAttributeNS(null, "cy", w);
            c6.setAttributeNS(null, "cx", lm);
            c6.setAttributeNS(null, "cy", w);

            graphieros_cursor.appendChild(c0);
            graphieros_cursor.appendChild(c1);
            graphieros_cursor.appendChild(c2);
            graphieros_cursor.appendChild(c3);
            graphieros_cursor.appendChild(c4);
            graphieros_cursor.appendChild(c5);
            graphieros_cursor.appendChild(c6);
            
            stax.push(graphieros_cursor);
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
            path: [[lm,a,r,q,rm,w,lm,w,l,q,lm,a,rm,a,r,q],[lm,w,rm,a],[m,q,rm,w]]
        },
        {
            name: '_sola',
            fr: 'son',
            path: [[lm,a,l,q,lm,w,rm,w,m,q,rm,a,r,q]],
        },
        {
            name: '_sota',
            fr: 'ton',
            path: [[lm,a,l,q,lm,w,rm,w,m,q,rm,a,r,q,m,q]],
        },
        {
            name: '_kwi',
            fr: 'qui',
            path: [[lm,a,l,q,lm,w],[l,q,rm,w,rm,a],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_ze',
            fr: 'utiliser',
            path: [[l,q,lm,w,rm,w,r,q],[lm,w,lm,a,rm,a,rm,w],[lm,a,rm,w],[rm,a,lm,w]],
        },
        {
            name: '_vrea',
            fr: 'vrai',
            path: [[l,q,lm,w,rm,a],[lm,a,lm,a],[r,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_v3ai',
            fr: 'vouloir',
            path: [[lm,a,m,q,rm,a],[l,q,lm,w,rm,w,r,q]],
        },
        {
            name: '_flae',
            fr: 'voler',
            path: [[lm,a,rm,a,r,q],[lm,w,rm,a],[l,q,l,q],[rm,w,rm,w]],
        },
        {
            name: '_vloi',
            fr: 'volume',
            path: [[lm,a,rm,a,r,q],[rm,a,lm,w],[l,q,lm,w,rm,w]],
        },
        {
            name: '_sta',
            fr: 'voir',
            path: [[rm,a,l,q,rm,w],[l,q,r,q],[lm,a,m,q,lm,w]],
        },
        {
            name: '_ko',
            fr: 'voici',
            path: [[lm,a,lm,a],[rm,a,rm,a],[m,q,m,q],[l,q,lm,w,rm,w,r,q]],
        },
        {
            name: '_vlo',
            fr: 'vitesse',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w],[rm,a,m,q,rm,w],[l,q,m,q]],
        },
        {
            name: '_vzi',
            fr: 'visage',
            path: [[lm,a,lm,a],[m,q,m,q],[l,q,rm,a,r,q,rm,w,lm,w,l,q]],
        },
        {
            name: '_vzy',
            fr: 'virus',
            path: [[m,q,rm,a,rm,w,lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a]],
        },
        {
            name: '_vle',
            fr: 'violet',
            path: [[l,q,lm,w,rm,w],[lm,a,lm,a],[rm,a,rm,a],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_ldo',
            fr: 'vieux',
            path: [[lm,a,m,q,r,q,lm,w,m,q,rm,w],[l,q,l,q],[rm,a,rm,a]],
        },
        {
            name: '_vey',
            fr: 'vieillard',
            path: [[l,q,rm,a,r,q],[lm,a,rm,w],[lm,w,m,q]],
        },
        {
            name: '_vde',
            fr: 'vider',
            path: [[l,q,r,q,rm,a,m,q],[rm,a,rm,w],[lm,a,lm,a],[lm,w,lm,w]],
        },
        {
            name: '_vzey',
            fr: 'vice',
            path: [[lm,w,lm,w],[l,q,lm,a,rm,w,l,q],[rm,a,r,q]],
        },
        {
            name: '_vba',
            fr: 'vibrer',
            path: [[r,q,lm,a,rm,a,m,q,rm,w,lm,w,r,q,m,q],[l,q,l,q]],
        },
        {
            name: '_vry',
            fr: 'vertu',
            path: [[lm,a,lm,a],[l,q,rm,a,lm,w,l,q],[r,q,rm,w]],
        },
        {
            name: '_vrae',
            fr: 'vert',
            path: [[l,q,l,q],[lm,a,lm,a],[lm,w,lm,w],[m,q,m,q],[rm,a,r,q,rm,w]],
        },
        {
            name: '_kto',
            fr: 'vers',
            path: [[l,q,r,q],[rm,a,r,q,rm,w],[lm,a,lm,a],[lm,w,lm,w]],
        },
        {
            name: '_rmye',
            fr: 'ver',
            path: [[l,q,lm,w,m,q,rm,w,r,q,lm,a,rm,a]],
        },
        {
            name: '_sloi',
            fr: 'vendre',
            path: [[lm,a,rm,a],[lm,w,l,q,r,q,rm,w,lm,w,m,q,rm,w]],
        },
        {
            name: '_pio',
            fr: 'végétal',
            path: [[lm,a,lm,w,r,q],[l,q,rm,w],[lm,w,rm,a]],
        },
        {
            name: '_vnia',
            fr: 'varier',
            path: [[l,q,rm,a,lm,a,l,q],[m,q,r,q,rm,w,m,q],[lm,w,lm,w]],
        },
        {
            name: '_vlia',
            fr: 'valoriser',
            path: [[lm,a,rm,a],[l,q,r,q,lm,w,rm,w,l,q]],
        },
        {
            name: '_vkye',
            fr: 'vaincre',
            path: [[rm,a,lm,w,l,q,rm,a,rm,w,rm,w,lm,w],[lm,a,r,q]],
        },
        {
            name: '_waa',
            fr: 'trouver',
            path: [[l,q,lm,a,lm,w,rm,w,lm,a,r,q],[rm,a,rm,a]],
        },
        {
            name: '_tro',
            fr: 'trop',
            path: [[lm,a,l,q,lm,w,rm,w,r,q,rm,a],[l,q,r,q],[lm,w,m,q,rm,w]],
        },
        {
            name: '_bse',
            fr: 'trébucher',
            path: [[lm,a,rm,a,r,q],[l,q,rm,a],[lm,w,m,q],[rm,w,rm,w]],
        },
        {
            name: '_tie',
            fr: 'traverser',
            path: [[rm,a,lm,a,lm,w,rm,w],[l,q,r,q]],
        },
        {
            name: '_tvai',
            fr: 'travailler',
            path: [[lm,a,lm,w],[l,q,rm,a,r,q,m,q,rm,w,r,q]],
        },
        {
            name: '_zit',
            fr: 'transitionner',
            path: [[m,q,l,q,lm,a,m,q,rm,a,r,q,rm,w,lm,w,m,q],[rm,a,rm,w]],
        },
        {
            name: '_mne',
            fr: 'transgenre',
            path: [[lm,a,m,q,r,q,rm,w,lm,w,m,q],[lm,w,r,q],[l,q,rm,a]],
        },
        {
            name: '_tew',
            fr: 'tout',
            path: [[l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q],[lm,w,lm,a,r,q,lm,w],[rm,a,rm,w,l,q,rm,a],[l,q,r,q],[lm,a,rm,w],[rm,a,lm,w]],
        },
        {
            name: '_pko',
            fr: 'toucher',
            path: [[lm,a,lm,w],[rm,a,rm,w],[l,q,lm,w,rm,w,r,q],[m,q,m,q]],
        },
        {
            name: '_tnogma',
            fr: 'tonne',
            path: [[rm,w,lm,a,rm,a,rm,w,lm,w,l,q,m,q,lm,w],[r,q,r,q]],
        },
        {
            name: '_pley',
            fr: 'tirer',
            path: [[lm,a,l,q,lm,w],[rm,a,m,q,rm,w],[r,q,r,q]],
        },
        {
            name: '_tra3',
            fr: 'théâtre',
            path: [[l,q,l,q],[lm,w,lm,w],[r,q,lm,a,rm,a,m,q,rm,w]],
        },
        {
            name: '_toi',
            fr: 'texte',
            path: [[lm,a,rm,a],[l,q,m,q],[lm,w,rm,w],[r,q,r,q]],
        },
        {
            name: '_tea',
            fr: 'tête',
            path: [[l,q,l,q],[lm,w,lm,a,rm,a,m,q],[r,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_ste',
            fr: 'tester',
            path: [[l,q,l,q],[lm,w,lm,a,rm,a,m,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_trea',
            fr: 'terre',
            path: [[l,q,l,q],[lm,a,rm,w,lm,w,rm,a],[r,q,r,q]],
        },
        {
            name: '_kpoile',
            fr: 'temps',
            path: [[l,q,r,q,rm,a,rm,w,r,q,lm,a,lm,w,r,q],[lm,a,m,q,lm,w]],
        },
        {
            name: '_po',
            fr: 'température',
            path: [[lm,a,lm,w,rm,w],[l,q,m,q],[rm,a,rm,a],[r,q,r,q]],
        },
        {
            name: '_tle',
            fr: 'téléphoner',
            path: [[l,q,rm,w,m,q,lm,w,r,q,rm,a,lm,a,l,q,r,q],[lm,w,rm,w]],
        },
        {
            name: '_zlae',
            fr: 'tant',
            path: [[l,q,lm,a],[lm,w,rm,w,rm,a],[m,q,rm,a,r,q]],
        },
        {
            name: '_sai',
            fr: 'taille',
            path: [[lm,a,l,q,r,q,rm,w],[lm,w,lm,w],[rm,a,rm,a]],
        },
        {
            name: '_stu',
            fr: 'synthétiser',
            path: [[l,q,lm,a,m,q,lm,w,l,q],[rm,a,rm,w],[r,q,r,q]],
        },
        {
            name: '_sbo',
            fr: 'symboliser',
            path: [[l,q,lm,a,lm,w],[m,q,rm,a,rm,w,r,q]],
        },
        {
            name: '_tpe',
            fr: 'sur',
            path: [[lm,a,rm,a],[l,q,r,q,rm,w,lm,w,l,q]],
        },
        {
            name: '_flo',
            fr: 'suivre',
            path: [[l,q,m,q,lm,a,lm,w,m,q],[rm,a,r,q,rm,w]],
        },
        {
            name: '_pkae',
            fr: 'sujet',
            path: [[lm,a,rm,w,lm,w,lm,a,rm,a,rm,w],[lm,w,m,q],[l,q,rm,a],[r,q,r,q]],
        },
        {
            name: '_ske',
            fr: 'sucrer',
            path: [[lm,a,m,q,rm,a],[l,q,r,q,lm,w,rm,w]],
        },
        {
            name: '_fi',
            fr: 'subjonctif',
            path: [[rm,a,l,q,lm,w],[l,q,r,q],[lm,a,rm,w]],
        },
        {
            name: '_svo',
            fr: 'souvent',
            path: [[rm,w,l,q,lm,w,rm,w,lm,a,r,q,rm,a,lm,a]],
        },
        {
            name: '_nde',
            fr: 'sous',
            path: [[l,q,r,q,rm,a,lm,a,l,q],[lm,w,rm,w]],
        },
        {
            name: '_sple',
            fr: 'souple',
            path: [[lm,w,m,q,rm,w,lm,w,lm,a,r,q,rm,a,l,q,lm,a],[rm,a,rm,w]],
        },
        {
            name: '_3nu',
            fr: 'soumettre',
            path: [[l,q,rm,a],[lm,a,rm,a,r,q],[m,q,rm,w,lm,w]],
        },
        {
            name: '_soma',
            fr: 'soi',
            path: [[lm,a,l,q,lm,w,rm,w,m,q,rm,a,r,q,rm,w],[m,q,r,q]],
        },
        {
            name: '_mki',
            fr: 'singe',
            path: [[lm,a,rm,w],[m,q,r,q],[l,q,rm,a],[lm,w,lm,w]],
        },
        {
            name: '_snea',
            fr: 'simplifier',
            path: [[lm,a,lm,w,m,q,l,q,lm,a],[rm,a,r,q,rm,w]],
        },
        {
            name: '_zei',
            fr: 'si',
            path: [[lm,w,l,q,rm,a],[lm,a,rm,w],[r,q,r,q]],
        },
        {
            name: '_skwa',
            fr: 'sexe',
            path: [[lm,a,m,q,rm,a,lm,a,l,q,lm,w,rm,w,r,q,rm,a]],
        },
        {
            name: '_lno',
            fr: 'seul',
            path: [[m,q,m,q],[l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q]],
        },
        {
            name: '_trey',
            fr: 'séparer',
            path: [[l,q,lm,a,lm,w,l,q,r,q,rm,a,rm,w,r,q]],
        },
        {
            name: '_smu',
            fr: 'sentir',
            path: [[lm,a,l,q,lm,w,rm,w,r,q],[m,q,rm,a]],
        },
        {
            name: '_vye',
            fr: 'sens',
            path: [[l,q,m,q],[r,q,lm,a,rm,a,r,q,rm,w,lm,w,r,q]],
        },
        {
            name: '_sge',
            fr: 'segmenter',
            path: [[l,q,l,q],[lm,a,lm,a],[lm,w,m,q],[rm,w,rm,w],[rm,a,r,q]],
        },
        {
            name: '_sky',
            fr: 'sécuriser',
            path: [[lm,w,lm,a,r,q,lm,w],[l,q,l,q],[rm,a,rm,a],[m,q,rm,w]],
        },
        {
            name: '_d3y',
            fr: 'seconde',
            path: [[l,q,l,q],[r,q,r,q],[rm,a,lm,a,rm,w,lm,w]],
        },
        {
            name: '_so',
            fr: 'se',
            path: [[lm,a,l,q,lm,w,rm,w,m,q,rm,a],[m,q,r,q,rm,w]],
        },
        {
            name: '_',
            fr: '',
            path: [[]],
        },
        {
            name: '_sle',
            fr: 'saler',
            path: [[l,q,m,q,lm,a,lm,w,rm,w,rm,a,m,q,r,q]],
        },
        {
            name: '_rgo',
            fr: 'rouge',
            path: [[lm,a,l,q,lm,w],[m,q,m,q],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_rwe',
            fr: 'roue',
            path: [[r,q,m,q,lm,a,l,q,lm,w,m,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_rgya',
            fr: 'rongeur',
            path: [[lm,a,lm,a],[rm,a,rm,a],[l,q,r,q,rm,w,m,q,lm,w,l,q]],
        },
        {
            name: '_lfaw',
            fr: 'rire',
            path: [[l,q,lm,w,m,q,lm,a],[lm,w,r,q,rm,a,rm,w]],
        },
        {
            name: '_rgi',
            fr: 'rigide',
            path: [[lm,a,m,q,rm,a,lm,a,lm,w,r,q,rm,w,l,q,lm,w,r,q],[rm,a,rm,w]],
        },
        {
            name: '_ne',
            fr: 'rien',
            path: [[lm,a,lm,a],[rm,a,rm,a],[l,q,l,q],[m,q,m,q],[r,q,r,q],[lm,w,lm,w],[rm,w,rm,w]],
        },
        {
            name: '_swo',
            fr: 'revenir',
            path: [[l,q,lm,a,lm,w,l,q,m,q,rm,a,rm,w,m,q,r,q]],
        },
        {
            name: '_rve',
            fr: 'réveiller',
            path: [[m,q,lm,w,lm,a,r,q,l,q,rm,a,rm,w,m,q]],
        },
        {
            name: '_rto',
            fr: 'retourner',
            path: [[rm,w,rm,a,lm,a,lm,w],[l,q,lm,w,m,q],[r,q,r,q]],
        },
        {
            name: '_lvoi',
            fr: 'retirer',
            path: [[lm,a,lm,w,m,q,l,q,lm,w],[rm,a,r,q,rm,w]],
        },
        {
            name: '_zle',
            fr: 'résulter',
            path: [[l,q,m,q],[lm,a,lm,a],[lm,w,lm,w],[rm,a,rm,w],[r,q,r,q]],
        },
        {
            name: '_pta',
            fr: 'reptile',
            path: [[lm,w,rm,w,l,q,r,q,lm,a],[m,q,rm,a]],
        },
        {
            name: '_rpie',
            fr: 'répéter',
            path: [[r,q,l,q,lm,a,lm,w],[rm,w,rm,a,m,q]],
        },
        {
            name: '_fksi',
            fr: 'réparer',
            path: [[r,q,lm,a,m,q,l,q,lm,w,m,q],[rm,a,rm,w]],
        },
        {
            name: '_floi',
            fr: 'remplir',
            path: [[l,q,r,q,rm,w,m,q],[rm,a,rm,w],[lm,a,lm,a],[lm,w,lm,w]],
        },
        {
            name: '_rdai',
            fr: 'refaire',
            path: [[m,q,lm,a,rm,a,m,q,r,q,lm,w,rm,w,l,q,m,q]],
        },
        {
            name: '_tba',
            fr: 'récipient',
            path: [[lm,a,l,q,lm,w,rm,w,r,q,rm,a],[m,q,m,q]],
        },
        {
            name: '_rsea',
            fr: 'recevoir',
            path: [[l,q,rm,w,m,q,lm,w,r,q],[lm,a,rm,a]],
        },
        {
            name: '_rbae',
            fr: 'rebondir',
            path: [[l,q,lm,a,rm,w,rm,a],[lm,w,r,q]],
        },
        {
            name: '_snoi',
            fr: 'rayonner',
            path: [[lm,a,rm,a,r,q],[l,q,rm,a,rm,w],[lm,w,rm,a]],
        },
        {
            name: '_groi',
            fr: 'ramper',
            path: [[lm,w,rm,a,rm,w,r,q,l,q,lm,a,m,q]],
        },
        {
            name: '_rma',
            fr: 'ramasser',
            path: [[l,q,rm,a,r,q],[lm,a,lm,w,m,q],[rm,w,rm,w]],
        },
        {
            name: '_slo',
            fr: 'ralentir',
            path: [[r,q,l,q],[lm,a,l,q,lm,w],[rm,a,m,q,rm,w]],
        },
        {
            name: '_wo',
            fr: 'questionner',
            path: [[lm,a,rm,a,l,q,rm,w],[lm,w,lm,w],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_kwa',
            fr: 'que',
            path: [[lm,a,l,q,lm,w],[l,q,rm,a,rm,w],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_kta',
            fr: 'quantité',
            path: [[r,q,m,q,rm,w,lm,w,lm,a,rm,a,rm,w],[l,q,l,q]],
        },
        {
            name: '_fkwe',
            fr: 'quand',
            path: [[rm,a,lm,a,lm,w,r,q,m,q],[l,q,l,q],[rm,w,rm,w]],
        },
        {
            name: '_3e',
            fr: 'protéger',
            path: [[lm,w,l,q,lm,a,rm,a,r,q,rm,w],[m,q,m,q]],
        },
        {
            name: '_prai',
            fr: 'proportionner',
            path: [[r,q,m,q,rm,w,r,q,lm,a,lm,w,r,q],[l,q,l,q],[rm,a,rm,a]],
        },
        {
            name: '_prio',
            fr: 'programmer',
            path: [[lm,a,m,q,rm,a,lm,a,lm,w,rm,w,rm,a],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_tpia',
            fr: 'profond',
            path: [[lm,w,lm,a,l,q,lm,w,rm,w,r,q,l,q],[rm,a,rm,a]],
        },
        {
            name: '_pre',
            fr: 'près',
            path: [[lm,w,lm,a,r,q],[l,q,m,q,rm,a,l,q],[rm,w,rm,w]],
        },
        {
            name: '_ra',
            fr: 'prendre',
            path: [[lm,w,l,q,m,q,lm,a,rm,a,m,q,r,q,rm,w]],
        },
        {
            name: '_frya',
            fr: 'pouvoir',
            path: [[lm,w,m,q,rm,w],[l,q,lm,a,rm,a,r,q]],
        },
        {
            name: '_psie',
            fr: 'pousser',
            path: [[l,q,l,q],[lm,a,m,q,lm,w],[rm,a,r,q,rm,w]],
        },
        {
            name: '_vwa',
            fr: 'pourquoi',
            path: [[lm,a,rm,a,l,q,rm,w],[lm,w,r,q],[m,q,m,q]],
        },
        {
            name: '_psu',
            fr: 'positionner',
            path: [[l,q,m,q,lm,w,lm,a,rm,a,lm,w],[r,q,rm,w]],
        },
        {
            name: '_ptoi',
            fr: 'porter',
            path: [[lm,w,rm,a,r,q,lm,a,rm,a],[m,q,rm,w],[l,q,l,q]],
        },
        {
            name: '_lbay',
            fr: 'porcin',
            path: [[m,q,lm,w,l,q,lm,a,rm,a,r,q,rm,w,rm,a]],
        },
        {
            name: '_ptea',
            fr: 'poitriner',
            path: [[lm,w,m,q,l,q,rm,a,m,q,rm,w],[lm,a,lm,a],[r,q,r,q]],
        },
        {
            name: '_psaw',
            fr: 'poisson',
            path: [[l,q,rm,a,rm,w,r,q,lm,w,l,q],[lm,a,lm,a],[m,q,m,q]],
        },
        {
            name: '_fky',
            fr: 'pointer',
            path: [[l,q,rm,w,rm,a],[lm,a,lm,a],[m,q,m,q],[lm,w,lm,w],[r,q,r,q]],
        },
        {
            name: '_ploi',
            fr: 'poil',
            path: [[l,q,lm,w],[lm,a,m,q],[rm,a,rm,w],[r,q,r,q]],
        },
        {
            name: '_vdio',
            fr: 'plus',
            path: [[lm,a,lm,w],[l,q,m,q],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_tsi',
            fr: 'pluriel',
            path: [[lm,a,m,q,r,q],[lm,w,m,q],[l,q,l,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_plwe',
            fr: 'plume',
            path: [[lm,a,lm,a],[rm,a,rm,a],[l,q,r,q,rm,w,l,q],[lm,w,lm,w]],
        },
        {
            name: '_pli',
            fr: 'plier',
            path: [[lm,a,rm,a,r,q,l,q,lm,w,rm,w]],
        },
        {
            name: '_pto',
            fr: 'pleuvoir',
            path: [[l,q,lm,w,m,q,rm,w,r,q],[lm,a,lm,a],[rm,a,rm,a]],
        },
        {
            name: '_pla',
            fr: 'planifier',
            path: [[lm,w,lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a],[rm,a,rm,w],[r,q,l,q]],
        },
        {
            name: '_pnae',
            fr: 'planète',
            path: [[lm,w,lm,a,r,q,lm,w,l,q,lm,a,rm,a,r,q,rm,w,lm,w],[rm,a,rm,w,l,q,rm,a],[m,q,m,q]],
        },
        {
            name: '_aria',
            fr: 'planer',
            path: [[lm,a,m,q,rm,a,r,q,lm,a,l,q,rm,a,m,q],[lm,w,lm,w],[rm,w,rm,w]],
        },
        {
            name: '_ueoa',
            fr: 'plaisir',
            path: [[m,q,rm,a,r,q,rm,w,lm,w,l,q,lm,a,m,q]],
        },
        {
            name: '_pvo',
            fr: 'pivoter',
            path: [[lm,w,lm,a,m,q,lm,w,r,q,rm,w,lm,w],[l,q,l,q],[rm,a,rm,a]],
        },
        {
            name: '_vdibwa',
            fr: 'pire',
            path: [[m,q,l,q,lm,a,rm,w],[lm,w,lm,a],[rm,a,r,q]],
        },
        {
            name: '_pke',
            fr: 'piquant',
            path: [[lm,w,lm,a,m,q,rm,a,rm,w,lm,w,l,q,r,q,rm,w]],
        },
        {
            name: '_gwi',
            fr: 'pingouin',
            path: [[lm,a,rm,a,l,q,lm,w,rm,w,rm,a,r,q],[m,q,m,q]],
        },
        {
            name: '_trai',
            fr: 'piéger',
            path: [[lm,w,lm,a,l,q,r,q,rm,a,lm,a],[rm,w,rm,w]],
        },
        {
            name: '_fti',
            fr: 'pied',
            path: [[l,q,m,q,lm,w,lm,a,rm,a,rm,a,rm,w,m,q,r,q]],
        },
        {
            name: '_sfi',
            fr: 'peur',
            path: [[lm,a,rm,w],[m,q,r,q,rm,a],[l,q,l,q],[lm,w,lm,w]],
        },
        {
            name: '_psia',
            fr: 'peser',
            path: [[lm,a,rm,a,rm,w,lm,w,m,q,rm,w],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_lse',
            fr: 'perdre',
            path: [[rm,w,lm,a,rm,a,rm,w],[l,q,rm,w,r,q],[lm,w,lm,w]],
        },
        {
            name: '_dri',
            fr: 'percer',
            path: [[r,q,rm,a,m,q,rm,w,r,q,lm,a,l,q,lm,w,r,q,l,q]],
        },
        {
            name: '_hia',
            fr: 'penser',
            path: [[m,q,l,q,lm,a,rm,a,r,q,m,q,rm,w,lm,w,m,q]],
        },
        {
            name: '_pda',
            fr: 'pendant',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w],[l,q,r,q],[rm,a,rm,w]],
        },
        {
            name: '_prye',
            fr: 'part',
            path: [[m,q,rm,w,lm,w,m,q],[l,q,l,q],[lm,a,lm,a],[rm,a,rm,a],[r,q,r,q]],
        },
        {
            name: '_psoi',
            fr: 'passé',
            path: [[r,q,l,q],[rm,a,l,q,rm,w],[lm,a,lm,a],[lm,w,lm,w]],
        },
        {
            name: '_pmi',
            fr: 'parmi',
            path: [[lm,a,rm,a,r,q,l,q,lm,a,rm,w,lm,w,rm,a]],
        },
        {
            name: '_vga',
            fr: 'parfumer',
            path: [[lm,a,l,q,rm,a,rm,w,r,q],[l,q,lm,w,rm,w],[m,q,rm,a]],
        },
        {
            name: '_smai',
            fr: 'parfois',
            path: [[l,q,lm,a,m,q],[lm,w,rm,w,r,q],[rm,a,rm,a]],
        },
        {
            name: '_prae',
            fr: 'parcourir',
            path: [[rm,a,lm,a,l,q,lm,w,rm,w,r,q,m,q]],
        },
        {
            name: '_ba',
            fr: 'par',
            path: [[lm,a,lm,a],[rm,a,rm,a],[l,q,l,q],[m,q,rm,w],[lm,w,rm,w,r,q]],
        },
        {
            name: '_mriy',
            fr: 'papillon',
            path: [[lm,w,lm,a,rm,a,lm,w],[l,q,r,q,rm,w,l,q]],
        },
        {
            name: '_sra',
            fr: 'pacifier',
            path: [[l,q,lm,w,rm,a,lm,a,rm,w,r,q]],
        },
        {
            name: '_pno',
            fr: 'ouvrir',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w],[l,q,m,q]],
        },
        {
            name: '_he',
            fr: 'oui',
            path: [[l,q,l,q],[lm,a,lm,w,m,q],[rm,a,rm,w],[r,q,r,q]],
        },
        {
            name: '_roi',
            fr: 'ou',
            path: [[lm,a,rm,a,lm,w,rm,w,lm,a],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_sdey',
            fr: 'où',
            path: [[lm,a,rm,w],[lm,w,rm,w,r,q],[l,q,l,q],[rm,a,rm,a]],
        },
        {
            name: '_bnio',
            fr: 'os',
            path: [[lm,a,rm,w,rm,a,l,q,m,q,rm,a,lm,a,l,q,lm,w,rm,w],[r,q,r,q]],
        },
        {
            name: '_via',
            fr: 'originer',
            path: [[l,q,lm,w,lm,a,rm,a],[m,q,r,q,rm,w,m,q]],
        },
        {
            name: '_rgia',
            fr: 'organe',
            path: [[rm,a,l,q,m,q,lm,w,rm,w,lm,a],[lm,w,l,q,lm,a,rm,a,r,q,rm,w]],
        },
        {
            name: '_rdo',
            fr: 'ordonner',
            path: [[lm,w,lm,a,rm,a,rm,w],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_r3y',
            fr: 'orange',
            path: [[l,q,lm,a,rm,a],[m,q,m,q],[r,q,r,q],[lm,w,lm,w],[rm,w,rm,w]],
        },
        {
            name: '_vroi',
            fr: 'or',
            path: [[l,q,m,q],[lm,a,m,q,lm,w],[r,q,rm,a,rm,w,r,q]],
        },
        {
            name: '_gnae',
            fr: 'onde',
            path: [[l,q,lm,w],[lm,a,rm,w],[rm,a,r,q]],
        },
        {
            name: '_broi',
            fr: 'ombre',
            path: [[l,q,rm,a,rm,w,lm,w],[lm,a,m,q],[r,q,r,q]],
        },
        {
            name: '_zo',
            fr: 'oiseau',
            path: [[m,q,l,q,lm,w,rm,a],[lm,a,rm,a,r,q],[rm,w,rm,w]],
        },
        {
            name: '_gwa',
            fr: 'oeuf',
            path: [[l,q,lm,a,m,q,lm,w,l,q],[rm,a,r,q,rm,w]],
        },
        {
            name: '_ptae',
            fr: 'objet',
            path: [[lm,w,m,q,rm,w,lm,w,lm,a,rm,a,rm,w],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_ney',
            fr: 'nouveau',
            path: [[lm,a,l,q,lm,w,m,q,rm,w,r,q,rm,a]],
        },
        {
            name: '_fdu',
            fr: 'nourrir',
            path: [[l,q,lm,w,lm,a,rm,a,r,q,rm,w,l,q],[m,q,m,q]],
        },
        {
            name: '_nia',
            fr: 'non',
            path: [[lm,a,rm,w],[rm, a,lm,w],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_na',
            fr: 'ni',
            path: [[l,q,m,q],[lm,a,rm,w,r,q],[lm,w,rm,a]],
        },
        {
            name: '_nsio',
            fr: 'nécessiter',
            path: [[lm,a,l,q,m,q,rm,a,r,q],[m,q,rm,w,lm,w]],
        },
        {
            name: '_zmi',
            fr: 'musique',
            path: [[l,q,lm,w,lm,a,rm,a,r,q],[lm,w,rm,w,m,q,rm,a]],
        },
        {
            name: '_mso',
            fr: 'muscler',
            path: [[lm,a,rm,a,rm,w,l,q,m,q,rm,w],[lm,w,lm,w],[r,q,r,q]],
        },
        {
            name: '_mksi',
            fr: 'multiplier',
            path: [[lm,a,lm,a],[rm,a,rm,a],[m,q,m,q],[l,q,lm,w,rm,w,r,q]],
        },
        {
            name: '_ftey',
            fr: 'mou',
            path: [[l,q,lm,a,lm,w,rm,w,rm,a,r,q],[lm,w,m,q,rm,w]],
        },
        {
            name: '_mtu',
            fr: 'montagne',
            path: [[l,q,lm,a,m,q,rm,a,r,q],[lm,w,rm,w]],
        },
        {
            name: '_mu',
            fr: 'mollusque',
            path: [[l,q,m,q,lm,a,l,q,lm,w,rm,w,r,q,rm,a],[lm,a,lm,w,r,q]],
        },
        {
            name: '_mni',
            fr: 'moins',
            path: [[l,q,m,q],[lm,a,lm,a],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w],[lm,w,lm,w]],
        },
        {
            name: '_d3io',
            fr: 'minute',
            path: [[l,q,l,q],[lm,w,lm,a,m,q,rm,a,rm,w],[r,q,r,q]],
        },
        {
            name: '_mina',
            fr: 'minéral',
            path: [[lm,w,lm,a,m,q,rm,a,rm,w,lm,w,l,q,lm,a,rm,a,r,q,rm,w]],
        },
        {
            name: '_mlimza',
            fr: 'millimètre',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w],[l,q,l,q],[m,q,m,q]],
        },
        {
            name: '_mligma',
            fr: 'milligramme',
            path: [[lm,a,rm,a,rm,w,lm,w],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_mdo',
            fr: 'milieu',
            path: [[l,q,r,q],[lm,a,lm,a],[rm,a,rm,a],[lm,w,lm,w],[rm,w,rm,w]],
        },
        {
            name: '_vdikeo',
            fr: 'mieux',
            path: [[m,q,l,q,lm,w,rm,a],[lm,a,lm,w],[rm,w,r,q]],
        },
        {
            name: '_pne',
            fr: 'mettre',
            path: [[lm,w,lm,a,l,q,m,q,lm,a],[rm,a,r,q,rm,w]],
        },
        {
            name: '_mza',
            fr: 'mètre',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,m,q,lm,w]],
        },
        {
            name: '_mto',
            fr: 'métal',
            path: [[lm,w,lm,a,rm,w,rm,a,r,q,lm,w,l,q,rm,a]],
        },
        {
            name: '_bwa',
            fr: 'mauvais',
            path: [[l,q,lm,a,rm,w],[rm,a,r,q],[lm,w,lm,w]],
        },
        {
            name: '_mtai',
            fr: 'matière',
            path: [[lm,a,lm,w,rm,a,rm,w,lm,w,l,q,lm,a,rm,a,r,q, rm,w]],
        },
        {
            name: '_lfe',
            fr: 'mastodonte',
            path: [[l,q,l,q],[lm,w,lm,a,rm,a,r,q,rm,w,lm,a]],
        },
        {
            name: '_chka',
            fr: 'masquer',
            path: [[lm,a,rm,a],[m,q,m,q],[l,q,rm,w,r,q,lm,w,l,q]],
        },
        {
            name: '_msy',
            fr: 'marsupial',
            path: [[l,q,lm,a],[m,q,rm,a],[r,q,rm,w,rm,a,lm,a,lm,w,rm,w]],
        },
        {
            name: '_mrai',
            fr: 'marquer',
            path: [[l,q,r,q],[lm,a,m,q,lm,w],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_mno',
            fr: 'mâle',
            path: [[lm,a,rm,w],[lm,w,m,q,r,q],[l,q,rm,a]],
        },
        {
            name: '_nfea',
            fr: 'maladie',
            path: [[lm,a,lm,a],[l,q,m,q,rm,a],[m,q,rm,w],[lm,w,r,q]],
        },
        {
            name: '_pro',        
            fr: 'mais',        
            path: [[l,q,m,q],[lm,a,m,q,lm,w],[rm,a,rm,w],[r,q,r,q]],        
        },        
        {        
            name: '_sna',        
            fr: 'maigrir',        
            path: [[r,q,rm,w,rm,a,r,q,l,q,lm,a,m,q,lm,w,l,q]],        
        },        
        {        
            name: '_lya',        
            fr: 'lune',        
            path: [[lm,w,lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a],[m,q,m,q]]        
        },        
        {        
            name: '_hea',        
            fr: 'lumière',        
            path: [[lm,a,r,q,lm,w,lm,a],[l,q,m,q,rm,a],[m,q,rm,w]],        
        },        
        {        
            name: '_lro',        
            fr: 'lourd',        
            path: [[lm,a,m,q,rm,a],[l,q,l,q],[r,q,r,q],[lm,w,rm,w]],        
        },        
        {        
            name: '_lgya',        
            fr: 'long',        
            path: [[l,q,lm,w,r,q,rm,w,m,q,rm,a,lm,a]],        
        },        
        {        
            name: '_fra',        
            fr: 'loin',        
            path: [[l,q,rm,w,rm,a],[lm,w,m,q,r,q,lm,w],[lm,a,lm,a]]        
        },        
        {       
            name: '_sti',        
            fr: 'lister',        
            path: [[rm,w,lm,a,l,q,rm,w,rm,a,lm,a],[l,q,lm,w,rm,w,r,q,rm,a]]        
        },        
        {        
            name: '_lpae',        
            fr: 'lèvre',        
            path: [[lm,a,m,q,rm,a],[l,q,r,q],[lm,w,rm,w]]        
        },        
        {        
            name: '_lgy',        
            fr: 'légume',        
            path: [[lm,a,rm,w,lm,w,rm,a],[l,q,r,q]]        
        },        
        {        
            name: '_lgio',        
            fr: 'langage',        
            path: [[l,q,lm,w,lm,a],[m,q,rm,w,rm,a],[r,q,r,q]]
        },
        {
            name: '_ska',
            fr: 'lancer',
            path: [[l,q,r,q,rm,w,m,q],[lm,a,lm,w],[rm,a,rm,a]],
        },
        {
            name: '_klotogma',
            fr: 'kilotonne',
            path: [[rm,w,lm,a,rm,a,rm,w,lm,w,l,q,lm,a],[l,q,m,q,lm,w],[r,q,r,q]],
        },
        {
            name: '_klomza',
            fr: 'kilomètre',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,m,q,rm,w],[lm,w,m,q]],
        },
        {
            name: '_klogma',
            fr: 'kilogramme',
            path: [[lm,a,rm,a,rm,w,lm,w,l,q,m,q,rm,w],[lm,w,m,q],[r,q,r,q]],
        },
        {
            name: '_tli',
            fr: 'jusque',
            path: [[l,q,lm,a,lm,w,m,q,r,q],[rm,a,r,q,rm,w]],
        },
        {
            name: '_kadwa',
            fr: 'jour',
            path: [[lm,a,rm,w],[l,q,rm,a,lm,a,l,q,lm,w,rm,w,r,q,m,q,lm,w]],
        },
        {
            name: '_3go',
            fr: 'jouer',
            path: [[lm,a,lm,a],[l,q,rm,a],[lm,w,m,q,rm,w],[r,q,r,q]],
        },
        {
            name: '_ntew',
            fr: 'interrompre',
            path: [[l,q,m,q,lm,a,lm,w,m,q,r,q,rm,a,rm,w]],
        },
        {
            name: '_nsa',
            fr: 'intérieur',
            path: [[lm,a,rm,a,m,q,rm,w,lm,w],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_kea',
            fr: 'intelligence',
            path: [[lm,a,rm,w],[lm,w,rm,a,l,q,m,q,rm,a],[lm,a,r,q,lm,w,lm,a]],
        },
        {
            name: '_chra',
            fr: 'insulter',
            path: [[l,q,rm,a,rm,w,lm,a],[lm,w,lm,w],[r,q,r,q]],
        },
        {
            name: '_pse',
            fr: 'insuffire',
            path: [[lm,w,l,q,lm,a,rm,a,r,q,rm,w],[l,q,r,q],[lm,a,m,q,rm,a]],
        },
        {
            name: '_skew',
            fr: 'insecte',
            path: [[m,q,l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q],[rm,a,rm,w]],
        },
        {
            name: '_nfo',
            fr: 'informer',
            path: [[l,q,lm,a,rm,w,r,q],[lm,w,lm,w],[rm,a,rm,a]],
        },
        {
            name: '_ngla',
            fr: 'inégaler',
            path: [[lm,a,rm,a,lm,w,rm,w],[l,q,r,q]],
        },
        {
            name: '_tso',
            fr: 'indiquer',
            path: [[lm,a,m,q,rm,a,lm,a,lm,w],[l,q,l,q],[r,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_knea',
            fr: 'incliner',
            path: [[m,q,l,q,lm,a,rm,a,r,q],[rm,a,rm,w],[lm,w,lm,w]],
        },
        {
            name: '_kpie',
            fr: 'inachever',
            path: [[l,q,lm,w,rm,a,r,q,rm,w,lm,a]],
        },
        {
            name: '_fo',
            fr: 'impératif',
            path: [[rm,w,rm,a,lm,a,lm,w,r,q,lm,a],[l,q,l,q],[m,q,m,q]],
        },
        {
            name: '_stoia',
            fr: 'imaginer',
            path: [[r,q,l,q,rm,a,rm,w,l,q],[lm,a,m,q,lm,w]],
        },
        {
            name: '_3ne',
            fr: 'jeune',
            path: [[m,q,l,q,rm,a,m,q],[lm,a,rm,w],[lm,w,lm,w],[r,q,r,q]],
        },
        {
            name: '_dea',
            fr: 'idée',
            path: [[m,q,l,q,rm,a,m,q,rm,w],[lm,w,r,q],[lm,a,lm,a]],
        },
        {
            name: '_si',
            fr: 'ici',
            path: [[lm,w,l,q,lm,a,rm,a,rm,w],[m,q,rm,w,r,q]],
        },
        {
            name: '_r3a',
            fr: 'jaune',
            path: [[lm,a,rm,a,r,q],[l,q,l,q],[m,q,m,q],[lm,w,lm,w],[rm,w,rm,w]],
        },
        {
            name: '_lgae',
            fr: 'jambe',
            path: [[lm,w,lm,a,r,q,m,q,lm,w],[l,q,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_fwo',
            fr: 'hors',
            path: [[lm,w,rm,a,r,q,l,q,lm,a,rm,w]],
        },
        {
            name: '_rzo',
            fr: 'horizon',
            path: [[lm,w,l,q,r,q,rm,w],[lm,a,lm,a],[rm,a,rm,a]],
        },
        {
            name: '_hro',
            fr: 'heure',
            path: [[l,q,r,q],[lm,a,lm,w],[rm,a,rm,w]],
        },
        {
            name: '_fro',
            fr: 'hermaphrodite',
            path: [[lm,a,rm,w,lm,w,m,q,r,q,rm,w],[l,q,rm,a]],
        },
        {
            name: '_pa',
            fr: 'haut',
            path: [[lm,a,rm,a],[l,q,l,q],[m,q,m,q],[r,q,r,q],[lm,w,lm,w],[rm,w,rm,w]],
        },
        {
            name: '_kio',
            fr: 'habiter',
            path: [[lm,a,lm,w,rm,w,rm,a,lm,a,l,q,r,q,rm,a]],
        },
        {
            name: '_dvie',
            fr: 'habiller',
            path: [[lm,w,lm,a,rm,a,rm,w,lm,w,l,q,r,q,rm,w]],
        },
        {
            name: '_kwe',
            fr: 'grouper',
            path: [[l,q,rm,a,lm,w],[r,q,lm,a,rm,w]],
        },
        {
            name: '_gro',
            fr: 'grossir',
            path: [[l,q,lm,a,lm,w,l,q,r,q,rm,w,m,q,rm,a,r,q]],
        },
        {
            name: '_gva',
            fr: 'graviter',
            path: [[rm,a,lm,a,l,q,lm,w,rm,w,r,q,m,q],[lm,a,lm,w]],
        },
        {
            name: '_gma',
            fr: 'gramme',
            path: [[lm,a,rm,a,rm,w,lm,w,l,q,m,q,lm,w],[r,q,r,q]],
        },
        {
            name: '_gra',
            fr: 'graisser',
            path: [[m,q,l,q,lm,w,rm,w,r,q,rm,a,lm,a,rm,w]],
        },
        {
            name: '_tsae',
            fr: 'goûter',
            path: [[lm,a,l,q,lm,w,rm,w],[rm,a,m,q,r,q]],
        },
        {
            name: '_sla',
            fr: 'glisser',
            path: [[lm,a,lm,a],[l,q,rm,a,m,q,r,q],[lm,w,rm,w]],
        },
        {
            name: '_gzai',
            fr: 'gaz',
            path: [[lm,w,m,q,rm,w],[l,q,l,q],[lm,a,lm,a],[rm,a,rm,a],[r,q,r,q]],
        },
        {
            name: '_dray',
            fr: 'gauche',
            path: [[lm,a,lm,w],[l,q,l,q],[m,q,m,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_kpae',
            fr: 'garder',
            path: [[lm,a,m,q,rm,a,lm,a,lm,w,l,q,r,q,rm,w,rm,a]],
        },
        {
            name: '_ftu',
            fr: 'futur',
            path: [[l,q,r,q],[lm,a,r,q,lm,w],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_fzo',
            fr: 'fusionner',
            path: [[l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q,r,q]],
        },
        {
            name: '_ray',
            fr: 'fuir',
            path: [[l,q,lm,w,rm,a],[lm,a,r,q],[m,q,rm,w]],
        },
        {
            name: '_ftae',
            fr: 'frustrer',
            path: [[lm,a,rm,a,r,q],[rm,a,lm,w],[l,q,rm,w]],
        },
        {
            name: '_fry',
            fr: 'fruit',
            path: [[lm,w,rm,a,lm,a,rm,w],[l,q,r,q]],
        },
        {
            name: '_gry',
            fr: 'frapper',
            path: [[lm,a,r,q,l,q],[rm,a,lm,w],[m,q,rm,w]],
        },
        {
            name: '_gew',
            fr: 'fort',
            path: [[l,q,lm,a,m,q],[lm,a,lm,w],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_fai',
            fr: 'former',
            path: [[rm,a,lm,a,lm,w],[l,q,m,q],[r,q,rm,w]],
        },
        {
            name: '_fkai',
            fr: 'fonctionner',
            path: [[lm,a,rm,w,rm,a,lm,a,lm,w,rm,w],[lm,w,rm,a],[l,q,r,q]],
        },
        {
            name: '_blea',
            fr: 'fleurir',
            path: [[lm,a,l,q,rm,w],[rm,a,r,q,lm,w],[m,q,m,q]],
        },
        {
            name: '_fni',
            fr: 'finir',
            path: [[l,q,lm,a,r,q,lm,w,l,q],[rm,a,rm,w],[m,q,m,q]],
        },
        {
            name: '_brea',
            fr: 'filtrer',
            path: [[l,q,r,q,lm,a,lm,w,r,q],[rm,a,rm,w]],
        },
        {
            name: '_fli',
            fr: 'fil',
            path: [[l,q,lm,a,lm,w,rm,a,r,q],[rm,w,rm,w]],
        },
        {
            name: '_lvia',
            fr: 'feuille',
            path: [[lm,a,lm,w,r,q],[l,q,rm,w],[rm,a,m,q]],
        },
        {
            name: '_frey',
            fr: 'feu',
            path: [[lm,w,rm,w,l,q,r,q,lm,a],[rm,a,rm,a]],
        },
        {
            name: '_kloi',
            fr: 'fermer',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w],[rm,a,rm,w],[l,q, m,q]],
        },
        {
            name: '_mna',
            fr: 'femelle',
            path: [[lm,a,m,q,r,q,rm,w,lm,w,m,q],[l,q,rm,a]],
        },
        {
            name: '_kti',
            fr: 'félin',
            path: [[l,q,rm,a,m,q,lm,a,r,q,rm,w,lm,w,l,q]],
        },
        {
            name: '_nrea',
            fr: 'faux',
            path: [[l,q,lm,a,rm,w],[lm,w,lm,w],[rm,a,rm,a],[r,q,r,q]],
        },
        {
            name: '_sga',
            fr: 'faucher',
            path: [[l,q,m,q,rm,a,r,q],[lm,a,m,q],[rm,a,rm,w],[lm,w,lm,w]],
        },
        {
            name: '_fa',
            fr: 'faire',
            path: [[m,q,lm,a,rm,a,m,q,r,q,rm,w,lm,w,l,q,m,q]],
        },
        {
            name: '_vea',
            fr: 'faible',
            path: [[lm,a,lm,w],[l,q,lm,w,m,q],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_fsa',
            fr: 'face',
            path: [[l,q,rm,w,rm,a,l,q,lm,w,rm,w,r,q,rm,a,l,q],[lm,a,m,q]],
        },
        {
            name: '_stre',
            fr: 'extrémité',
            path: [[r,q,rm,a,rm,w,r,q],[lm,a,lm,a],[l,q,l,q],[m,q,m,q],[lm,w,lm,w]],
        },
        {
            name: '_stra',
            fr: 'extraire',
            path: [[l,q,r,q,rm,a,lm,w,l,q],[lm,a,lm,w],[rm,a,rm,w]],
        },
        {
            name: '_tra',
            fr: 'extérieur',
            path: [[rm,a,lm,a,m,q,lm,w,rm,w],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_vlye',
            fr: 'évoluer',
            path: [[l,q,l,q],[lm,a,lm,w],[rm,a,r,q,rm,w,m,q,rm,a]],
        },
        {
            name: '_vne',
            fr: 'événement',
            path: [[r,q,rm,a,rm,w,r,q,m,q,lm,a,lm,w,m,q,l,q],[rm,a,lm,a,l,q,lm,w,rm,w]],
        },
        {
            name: '_stea',
            fr: 'étoile',
            path: [[lm,a,r,q,lm,w,lm,a],[rm,a,rm,w,l,q,rm,a],[m,q,m,q]],
        },
        {
            name: '_meama',
            fr: 'étant',
            path: [[l,q,lm,a,rm,w,r,q,rm,a,l,q,lm,w,r,q]],
        },
        {
            name: '_te',
            fr: 'et',
            path: [[lm,a,l,q,lm,w],[l,q,m,q],[rm,a,r,q,rm,w]],
        },
        {
            name: '_bia',
            fr: 'équilibrer',
            path: [[lm,a,rm,a],[l,q,m,q,lm,w,rm,w,m,q,r,q]],
        },
        {
            name: '_kdea',
            fr: 'équidé',
            path: [[lm,a,rm,a,rm,w,lm,w,rm,a],[m,q,r,q],[l,q,l,q]],
        },
        {
            name: '_nto',
            fr: 'entre',
            path: [[lm,a,rm,a,lm,w,rm,w],[l,q,rm,a],[lm,w,r,q]],
        },
        {
            name: '_srye',
            fr: 'entourer',
            path: [[m,q,m,q],[l,q,lm,a],[rm,a,r,q],[lm,w,rm,w]],
        },
        {
            name: '_sko',
            fr: 'entendre',
            path: [[l,q,l,q],[r,q,m,q,rm,a,lm,a,lm,a,lm,w,rm,w,m,q]],
        },
        {
            name: '_nki',
            fr: 'entailler',
            path: [[lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,m,q],[r,q,r,q]],
        },
        {
            name: '_kdie',
            fr: 'enfant',
            path: [[lm,w,rm,a,rm,w,lm,w],[l,q,m,q],[lm,a,r,q]],
        },
        {
            name: '_3ia',
            fr: 'énergie',
            path: [[lm,a,r,q,l,q,rm,w,lm,w,rm,a]],
        },
        {
            name: '_ni',
            fr: 'bas',
            path: [[lm,w,rm,w],[lm,a,lm,a],[rm,a,rm,a],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_nwo',
            fr: 'en',
            path: [[lm,w,l,q,m,q,lm,w,lm,a,rm,a,rm,w,lm,w],[r,q,r,q]],
        },
        {
            name: '_pkoi',
            fr: 'empaqueter',
            path: [[l,q,rm,a,rm,w],[lm,w,l,q,lm,a,rm,a,r,q,rm,w,lm,w,m,q],[lm,a,m,q,r,q]],
        },
        {
            name: '_skoi',
            fr: 'émotion',
            path: [[lm,a,rm,w,lm,w,m,q],[rm,a,l,q,lm,a,rm,a,r,q]],
        },
        {
            name: '_vzu',
            fr: 'électricité',
            path: [[l,q,lm,a,lm,w,rm,a,rm,w,r,q]],
        },
        {
            name: '_gla',
            fr: 'égaler',
            path: [[lm,a,rm,a],[l,q,r,q],[lm,w,rm,w]],
        },
        {
            name: '_fke',
            fr: 'effet',
            path: [[r,q,l,q,lm,a,rm,a,r,q,rm,w],[lm,a,m,q],[lm,w,lm,w]],
        },
        {
            name: '_to',
            fr: 'eau',
            path: [[lm,a,rm,a],[l,q,lm,w,m,q,rm,w,r,q]],
        },
        {
            name: '_drye',
            fr: 'durer',
            path: [[m,q,lm,a,r,q,lm,w,m,q],[l,q,l,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_drei',
            fr: 'dur',
            path: [[l,q,lm,w,lm,a,rm,a,rm,w,r,q],[lm,a,m,q,rm,a]],
        },
        {
            name: '_drya',
            fr: 'droite',
            path: [[l,q,l,q],[lm,a,lm,a],[lm,w,lm,w],[m,q,m,q],[rm,a,rm,w],[r,q,r,q]],
        },
        {
            name: '_dro',
            fr: 'droit',
            path: [[l,q,l,q],[lm,a,lm,w],[m,q,m,q],[rm,a,rm,w],[r,q,r,q]],
        },
        {
            name: '_rdwa',
            fr: 'draper',
            path: [[lm,w,l,q,lm,a,r,q,rm,w,lm,w,m,q,r,q],[rm,a,rm,a]],
        },
        {
            name: '_rmi',
            fr: 'dormir',
            path: [[l,q,rm,a,r,q,rm,w,l,q],[m,q,lm,w,lm,a,m,q]],
        },
        {
            name: '_glo',
            fr: 'dont',
            path: [[rm,a,lm,a,lm,w,m,q,l,q],[r,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_dku',
            fr: 'donc',
            path: [[rm,a,lm,a,lm,w,rm,w],[m,q,r,q],[l,q,l,q]],
        },
        {
            name: '_dvi',
            fr: 'diviser',
            path: [[lm,w,rm,a],[l,q,l,q],[lm,a,lm,a],[r,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_dme',
            fr: 'dimensionner',
            path: [[lm,a,lm,w,rm,w,r,q,rm,a,lm,a],[l,q,l,q],[m,q,m,q]],
        },
        {
            name: '_dvey',
            fr: 'différer',
            path: [[l,q,l,q],[lm,a,rm,w,r,q,rm,a,lm,w]],
        },
        {
            name: '_dvo',
            fr: 'devoir',
            path: [[lm,w,lm,a,rm,a,rm,w],[lm,a,m,q,rm,a],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_dva',
            fr: 'devant',
            path: [[l,q,r,q,rm,a,rm,w,r,q],[lm,a,lm,a],[lm,w,lm,w]],
        },
        {
            name: '_dzye',
            fr: 'détruire',
            path: [[rm,a,rm,w],[m,q,r,q,lm,a,m,q],[l,q,lm,w]],
        },
        {
            name: '_nbia',
            fr: 'déséquilibrer',
            path: [[lm,a,rm,a,l,q,r,q],[m,q,rm,w,lm,w,m,q]],
        },
        {
            name: '_dre',
            fr: 'derrière',
            path: [[r,q,l,q,lm,a,lm,w,l,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_fmai',
            fr: 'depuis',
            path: [[r,q,l,q],[lm,a,l,q,lm,w],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_chna',
            fr: 'démasquer',
            path: [[lm,a,l,q,lm,w,r,q],[rm,a,r,q,rm,w,l,q],[m,q,m,q]],
        },
        {
            name: '_dle',
            fr: 'délicieux',
            path: [[l,q,r,q,rm,a,m,q,lm,a,l,q,lm,w,rm,w,r,q]],
        },
        {
            name: '_d3a',
            fr: 'déjà',
            path: [[lm,a,m,q,r,q,rm,a,rm,w,r,q],[lm,w,m,q],[l,q,l,q]],
        },
        {
            name: '_klue',
            fr: 'défaut',
            path: [[lm,a,r,q,rm,w,rm,a,l,q,m,q],[lm,w,lm,w]],
        },
        {
            name: '_dfo',
            fr: 'défaire',
            path: [[rm,a,lm,w,lm,a,rm,a,r,q,lm,w],[l,q,rm,w]],
        },
        {
            name: '_3i',
            fr: 'découvrir',
            path: [[l,q,lm,a,lm,w,l,q],[r,q,rm,w,rm,a,r,q],[m,q,m,q]],
        },
        {
            name: '_ktye',
            fr: 'découper',
            path: [[lm,a,lm,w],[l,q,rm,a],[m,q,r,q,rm,w,m,q]],
        },
        {
            name: '_dsimza',
            fr: 'décimère',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w,m,q,l,q]],
        },
        {
            name: '_dsigma',
            fr: 'décigramme',
            path: [[lm,a,rm,a,rm,w,lm,w,m,q,l,q],[r,q,r,q]],
        },
        {
            name: '_trie',
            fr: 'déchêt',
            path: [[lm,a,rm,a,l,q],[m,q,lm,w],[r,q,rm,w]],
        },
        {
            name: '_da',
            fr: 'de',
            path: [[l,q,lm,a,rm,a],[lm,a,m,q],[lm,w,lm,w],[rm,w,rm,w],[r,q,r,q]],
        },
        {
            name: '_dfie',
            fr: 'dauphin',
            path: [[rm,a,l,q,lm,a,m,q,l,q],[lm,a,rm,a,rm,w,r,q],[lm,w,lm,w]],
        },
        {
            name: '_dse',
            fr: 'danser',
            path: [[l,q,rm,a,rm,w],[lm,a,r,q],[lm,w,m,q]],
        },
        {
            name: '_di',
            fr: 'dans',
            path: [[l,q,lm,a,rm,w,lm,w,rm,a,r,q,l,q]],
        },
        {
            name: '_d3e',
            fr: 'danger',
            path: [[m,q,lm,a,r,q,lm,w,lm,a],[l,q,l,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_dwa',
            fr: 'cycle',
            path: [[rm,a,lm,a,l,q,lm,w,rm,w,r,q,m,q,lm,w]],
        },
        {
            name: '_kraw',
            fr: 'crustacé',
            path: [[lm,a,lm,w,l,q,lm,a,rm,a,r,q,rm,w,rm,a],[m,q,m,q]],
        },
        {
            name: '_grae',
            fr: 'croître',
            path: [[l,q,lm,w,rm,w],[lm,a,lm,w,r,q],[rm,a,lm,w]],
        },
        {
            name: '_kru',
            fr: 'croiser',
            path: [[lm,a,r,q],[rm,a,l,q],[m,q,m,q],[lm,w,lm,w],[rm,w,rm,w]],
        },
        {
            name: '_kro',
            fr: 'croire',
            path: [[lm,a,rm,a,l,q,rm,w,lm,w],[rm,a,m,q,rm,w],[r,q,r,q]],
        },
        {
            name: '_kri',
            fr: 'crier',
            path: [[lm,a,m,q],[l,q,lm,w,r,q,rm,a,rm,w]],
        },
        {
            name: '_kvae',
            fr: 'couvrir',
            path: [[lm,a,lm,w,rm,w,rm,a,m,q,lm,a,l,q,r,q,rm,a]],
        },
        {
            name: '_kry',
            fr: 'court',
            path: [[l,q,lm,w,r,q,rm,w],[lm,a,lm,a],[m,q,m,q],[rm,a,rm,a]],
        },
        {
            name: '_krye',
            fr: 'courrier',
            path: [[l,q,m,q,rm,a,l,q,lm,w,r,q,rm,a],[lm,a,lm,a],[rm,w,rm,w]],
        },
        {
            name: '_klo',
            fr: 'colorer',
            path: [[r,q,l,q,rm,a,lm,a,lm,w,rm,w,l,q]],
        },
        {
            name: '_kte',
            fr: 'côté',
            path: [[lm,w,r,q,rm,w,lm,w,l,q,rm,a,r,q],[lm,a,m,q]],
        },
        {
            name: '_bdi',
            fr: 'corps',
            path: [[l,q,lm,a,lm,w,r,q,rm,a,rm,w,l,q],[m,q,m,q]],
        },
        {
            name: '_sno',
            fr: 'contre',
            path: [[rm,a,r,q,rm,w],[l,q,m,q],[lm,a,lm,a],[lm,w,lm,w]],
        },
        {
            name: '_kpoi',
            fr: 'continuer',
            path: [[r,q,rm,a,rm,w,r,q,m,q],[lm,a,r,q,lm,w],[l,q,l,q]],
        },
        {
            name: '_ksea',
            fr: 'construire',
            path: [[rm,a,rm,w],[r,q,lm,a,l,q,m,q,lm,w]],
        },
        {
            name: '_knoi',
            fr: 'connecter',
            path: [[lm,a,l,q,lm,w],[l,q,r,q],[rm,a,r,q,rm,w]],
        },
        {
            name: '_kno',
            fr: 'connaître',
            path: [[m,q,lm,w,l,q,lm,a,rm,a,r,q,lm,w,rm,w]],
        },
        {
            name: '_kfay',
            fr: 'confondre',
            path: [[rm,a,r,q,rm,w],[l,q,r,q],[m,q,lm,a,l,q,lm,w,lm,a]],
        },
        {
            name: '_troi',
            fr: 'conflit',
            path: [[l,q,lm,w,rm,a],[r,q,rm,w,lm,a]],
        },
        {
            name: '_hi',
            fr: 'condition',
            path: [[rm,a,l,q,rm,w],[lm,a,r,q,lm,w],[m,q,m,q]],
        },
        {
            name: '_kteu',
            fr: 'compter',
            path: [[m,q,lm,a,lm,w,m,q,r,q],[l,q,rm,a,rm,w,l,q]],
        },
        {
            name: '_plea',
            fr: 'complexe',
            path: [[l,q,l,q],[lm,a,m,q,lm,w],[m,q,rm,a,rm,w,r,q,m,q]],
        },
        {
            name: '_haw',
            fr: 'comment',
            path: [[lm,a,rm,a,l,q,rm,w],[lm,w,rm,w,r,q],[m,q,m,q]],
        },
        {
            name: '_fta',
            fr: 'commencer',
            path: [[m,q,l,q,lm,a,r,q,lm,w,l,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_ki',
            fr: 'clé',
            path: [[lm,a,lm,w,m,q],[l,q,r,q,rm,w],[rm,a,rm,a]],
        },
        {
            name: '_rkai',
            fr: 'classer',
            path: [[lm,a,rm,a],[l,q,l,q],[lm,w,rm,w,m,q,r,q]],
        },
        {
            name: '_srie',
            fr: 'circuit',
            path: [[l,q,lm,a,lm,w,rm,a,rm,w,r,q,l,q]],
        },
        {
            name: '_kwo',
            fr: 'couper',
            path: [[lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,r,q]],
        },
        {
            name: '_skai',
            fr: 'ciel',
            path: [[lm,w,rm,a,lm,a,rm,w],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_swa',
            fr: 'choisir',
            path: [[lm,a,lm,w,rm,w,rm,a],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_sdae',
            fr: 'chaque',
            path: [[l,q,lm,a,m,q,l,q],[rm,w,r,q],[lm,w,lm,w],[rm,a,rm,a]],
        },
        {
            name: '_sni',
            fr: 'chanter',
            path: [[lm,a,l,q,lm,w,rm,w,r,q],[l,q,rm,w,m,q,l,q],[rm,a,rm,a]],
        },
        {
            name: '_fgy',
            fr: 'champignon',
            path: [[l,q,rm,w,rm,a,r,q,m,q,rm,a],[lm,a,lm,a],[lm,w,lm,w]],
        },
        {
            name: '_fle',
            fr: 'chair',
            path: [[l,q,rm,a,m,q,rm,w,l,q,lm,a,rm,a,rm,w,lm,w,l,q],[r,q,r,q]],
        },
        {
            name: '_bzea',
            fr: 'cervidé',
            path: [[lm,a,rm,w,lm,w,r,q],[l,q,m,q,rm,a]],
        },
        {
            name: '_srea',
            fr: 'céréale',
            path: [[rm,w,l,q,lm,w,rm,w,r,q,rm,a,rm,w],[lm,a,m,q]],
        },
        {
            name: '_tru',
            fr: 'cercler',
            path: [[m,q,l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q]],
        },
        {
            name: '_sye',
            fr: 'centrer',
            path: [[lm,a,rm,w],[lm,w,rm,a],[l,q,r,q]],
        },
        {
            name: '_stimza',
            fr: 'centimètre',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w,m,q],[l,q,l,q]],
        },
        {
            name: '_stigma',
            fr: 'centigramme',
            path: [[lm,a,rm,a,rm,w,lm,w,m,q],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_sley',
            fr: 'cellule',
            path: [[rm,a,lm,a,l,q,lm,w,rm,w],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_de',
            fr: 'ce',
            path: [[lm,a,rm,a],[lm,w,rm,w],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_kzo',
            fr: 'causer',
            path: [[rm,a,lm,a,l,q,lm,w],[l,q,r,q],[lm,a,m,q],[rm,w,rm,w]],
        },
        {
            name: '_gzo',
            fr: 'car',
            path: [[lm,a,r,q,lm,w,rm,w],[l,q,l,q],[m,q,m,q],[rm,a,rm,a]],
        },
        {
            name: '_knew',
            fr: 'canonner',
            path: [[lm,a,l,q,rm,w,r,q],[lm,w,m,q],[rm,a,rm,a]],
        },
        {
            name: '_klio',
            fr: 'canin',
            path: [[rm,a,lm,a,lm,w,m,q,r,q],[l,q,rm,w]],
        },
        {
            name: '_rko',
            fr: 'caillou',
            path: [[lm,a,rm,w,lm,w,lm,a,r,q,rm,w],[l,q,l,q],[rm,a,rm,a]],
        },
        {
            name: '_glio',
            fr: 'but',
            path: [[m,q,l,q,lm,a,rm,a,rm,w],[lm,w,rm,w,r,q]],
        },
        {
            name: '_bze',
            fr: 'business',
            path: [[rm,a,lm,a,l,q,r,q,rm,w,lm,w],[lm,a,rm,w]],
        },
        {
            name: '_bra',
            fr: 'bras',
            path: [[lm,w,lm,a,m,q,r,q,lm,w],[l,q,rm,w],[rm,a,rm,a]],
        },
        {
            name: '_dvea',
            fr: 'brancher',
            path: [[lm,a,rm,w],[l,q,m,q],[lm,w,rm,w,rm,a],[r,q,r,q]],
        },
        {
            name: '_bo',
            fr: 'bovidé',
            path: [[lm,a,rm,w],[m,q,rm,a],[lm,w,r,q],[l,q,l,q]],
        },
        {
            name: '_bu',
            fr: 'boucler',
            path: [[l,q,m,q,rm,a,lm,a,lm,w,rm,w,r,q]],
        },
        {
            name: '_blu',
            fr: 'bleu',
            path: [[lm,w,rm,w,r,q],[l,q,l,q],[lm,a,lm,a],[m,q,m,q],[rm,a,rm,a]],
        },
        {
            name: '_keo',
            fr: 'bien',
            path: [[l,q,lm,w,rm,a],[rm,w,r,q],[lm,a,lm,a]],
        },
        {
            name: '_bly',
            fr: 'baleine',
            path: [[l,q,m,q,lm,a,l,q,lm,w,r,q,rm,w,rm,a,lm,a],[m,q,lm,w]],
        },
        {
            name: '_zaw',
            fr: 'aussi',
            path: [[lm,a,lm,w,l,q,lm,a,rm,w,r,q,rm,a,lm,w],[rm,a,rm,w]],
        },
        {
            name: '_vi',
            fr: 'avec',
            path: [[lm,w,lm,a,rm,w,rm,a,lm,w],[l,q,r,q]],
        },
        {
            name: '_ntea',
            fr: 'avant',
            path: [[m,q,l,q,lm,a,lm,w,l,q],[rm,a,rm,a],[rm,w,rm,w],[r,q,r,q]],
        },
        {
            name: '_rpa',
            fr: 'attraper',
            path: [[l,q,r,q,rm,a,m,q],[lm,a,lm,w],[rm,w,rm,w]],
        },
        {
            name: '_spea',
            fr: 'attendre',
            path: [[l,q,lm,a,lm,w],[m,q,rm,a,rm,w],[r,q,r,q]],
        },
        {
            name: '_tmei',
            fr: 'atome',
            path: [[lm,w,rm,a,rm,w],[l,q,r,q],[lm,a,lm,a]],
        },
        {
            name: '_ktea',
            fr: 'arrêter',
            path: [[l,q,r,q],[lm,a,lm,w],[rm,a,r,q,rm,w]],
        },
        {
            name:'_rkye',
            fr: 'arachnide',
            path: [[l,q,lm,a,rm,a,r,q,rm,w],[m,q,rm,a],[lm,a,lm,w]],
        },
        {
            name: '_ftea',
            fr: 'après',
            path: [[r,q,rm,a,rm,w,r,q,m,q],[lm,a,lm,a],[l,q,l,q],[lm,w,lm,w]],
        },
        {
            name: '_znie',
            fr: 'appuyer',
            path: [[lm,a,lm,w,rm,w,m,q,l,q,rm,a,r,q]],
        },
        {
            name: '_zai',
            fr: 'apparaître',
            path: [[lm,w,m,q,rm,w,lm,w,l,q,lm,a,rm,a,r,q,rm,w]],
        },
        {
            name: '_piz',
            fr: 'apaiser',
            path: [[l,q,lm,a,lm,w,m,q,r,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_kpaw',
            fr: 'antenne',
            path: [[lm,a,l,q,rm,w,m,q,lm,w,r,q,rm,a]],
        },
        {
            name: '_pkia',
            fr: 'animal',
            path: [[rm,a,lm,a,l,q,lm,w,rm,w,m,q,rm, a, l,q],[r,q,r,q]],
        },
        {
            name: '_glei',
            fr: 'angle',
            path: [[lm,a,rm,a,rm,w],[l,q,l,q],[lm,w,lm,w],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_mrya',
            fr: 'amplifier',
            path: [[l,q,rm,w,rm,a,r,q,lm,w,l,q,rm,a],[lm,a,m,q]],
        },
        {
            name: '_mre',
            fr: 'amer',
            path: [[l,q,lm,a,m,q,rm,a,r,q,l,q],[lm,w,rm,w]],
        },
        {
            name: '_prba',
            fr: 'âme',
            path : [[lm,a,r,q,lm,w,lm,a,m,q,r,q],[lm,w,m,q],[l,q,l,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_tae',
            fr: 'alterner',
            path: [[lm,a,rm,a,l,q],[m,q,m,q],[rm,w,lm,w,r,q]],
        },
        {
            name: '_slio',
            fr: 'alors',
            path: [[lm,a,m,q,r,q],[rm,a,r,q,rm,w],[l,q,l,q],[lm,w,lm,w]]
        },
        {
            name: '_le',
            fr: 'aller',
            path: [[r,q,rm,a,rm,w,r,q,m,q,lm,a,lm,w,m,q,l,q]],
        },
        {
            name: '_hio',
            fr: 'alléger',
            path: [[lm,a,rm,a],[l,q,l,q],[r,q,r,q],[lm,w,m,q,rm,w]],
        },
        {
            name: '_lea',
            fr: 'aléa',
            path: [[l,q,r,q,lm,w],[lm,a,lm,a],[rm,a,rm,w]],
        },
        {
            name: '_fsu',
            fr: 'ajuster',
            path: [[l,q,lm,a,rm,w,r,q,rm,a,lm,w,l,q,r,q]],
        },
        {
            name: '_hae',
            fr: 'air',
            path: [[lm,a,rm,a,r,q],[l,q,m,q,rm,w],[lm,w,rm,a]],
        },
        {
            name: '_kli',
            fr: 'qualité',
            path: [[rm,w,l,q,lm,a,lm,w,r,q,m,q],[rm,a,rm,a]],
        },
        {
            name: '_nmae',
            fr: 'nombre',
            path: [[lm,w,lm,a,rm,w,rm,a],[l,q,l,q],[r,q,r,q]],
        },
        {
            name: '_zno',
            fr: '11',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a,m,q,r,q],[m,q,lm,w,lm,a,r,q]],
        },
        {
            name: '_dza',
            fr: '10',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a,m,q,r,q],[m,q,lm,w,lm,a]],
        },
        {
            name: '_nwa',
            fr: '9',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a,m,q,r,q],[lm,w,m,q]],
        },
        {
            name: '_sme',
            fr: 'identique',
            path: [[l,q,lm,a,rm,w,r,q,rm,a,lm,w,l,q]],
        },
        {
            name: '_tsio',
            fr: '8',
            path: [[l,q,lm,a,rm,w,r,q,rm,a,lm,w,l,q]],
        },
        {
            name: '_stei',
            fr: '7',
            path: [[l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q,r,q]],
        },
        {
            name: '_ksi',
            fr: '6',
            path: [[l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q],[m,q,m,q]],
        },
        {
            name: '_foi',
            fr: '5',
            path: [[lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,r,q]],
        },
        {
            name: '_ktu',
            fr: '4',
            path: [[lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '_srei',
            fr: '3',
            path: [[lm,w,lm,a,r,q, lm, w],[l,q,l,q],[m,q,m,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_du',
            fr: '2',
            path: [[lm,w,lm,a,r,q],[l,q,l,q],[m,q,m,q],[rm,a,rm,a],[rm,w,rm,w]],
        },
        {
            name: '_kfa',
            fr: '1',
            path: [[lm,a,lm,w],[l,q,l,q],[m,q,m,q],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w]],
        },
        {
            name: '_sro',
            fr: '0',
            path: [[lm,a,rm,w],[lm,w,rm,a],[l,q,r,q]],
        },
        {
            name: ',',
            fr: ',',
            path: [[rm,a,m,q,rm,w],[lm,a,lm,a],[l,q,l,q],[lm,w,lm,w],[r,q,r,q]],
        },
        {
            name: '!',
            fr: '!',
            path: [[lm,a,m,q],[l,q,lm,w],[rm,a,r,q],[rm,w,rm,w]],
        },
        {
            name: '?',
            fr: '?',
            path: [[lm,a,rm,a,l,q,rm,w],[lm,w,lm,w],[m,q,m,q],[r,q,r,q]],
        },
        {
            name: '.',
            fr: '.',
            path: [[m,q,m,q],[m,q,m,q]],
        },
        {
            name: '_mea',
            fr: 'déterminer',
            path: [[lm,a,rm,w],[l,q,rm,a],[lm,w,r,q]],
        },
        {
            name: '_ma',
            fr: 'être',
            path: [[lm,a,l,q,lm,w],[m,q,m,q],[rm,a,r,q,rm,w]]
        },
        {
            name: '_kde',
            fr: 'adolescent',
            path: [[rm,a,lm,w],[m,q,rm,w],[l,q,r,q],[lm,a,lm,a]],
        },
        {
            name: '_dly',
            fr: 'adulte',       
            path: [[r,q,lm,a,rm,a,lm,w,lm,a],[m,q,rm,w],[l,q,l,q]],        
        },        
        {        
            name: '_pfae',        
            fr: 'agir',        
            path: [[l,q,lm,w,lm,a,r,q,lm,w],[rm,a,lm,a],[rm,w,r,q],[m,q,m,q]],        
        },
        {
            name: '_dna',
            fr: 'adn',
            path: [[rm,a,lm,a,l,q,lm,w,rm,w,r,q,l,q],[lm,w,rm,a,rm,w]],
        },
        {
            name: '_sde',
            fr: 'acide',
            path: [[lm,a,m,q,l,q,lm,w,rm,w,r,q,m,q,rm,a],[l,q,rm,w],[r,q,lm,w]],
        },
        {
            name: '_bai',
            fr: 'acheter',
            path: [[lm,a,m,q,rm,a,lm,a,l,q,r,q,rm,a],[lm,w,rm,w]],
        },
        {
            name: '_kmia',
            fr: 'accumuler',
            path: [[lm,a,r,q,m,q,lm,a],[l,q,rm,w],[lm,w,lm,w],[rm,a,rm,a]],
        },
        {
            name: '_grey',
            fr: 'accrocher',
            path: [[lm,a,rm,a,r,q,l,q],[rm,a,rm,w],[lm,w,lm,w]],
        },
        {
            name: '_ksu',
            fr: 'accélérer',
            path: [[l,q,r,q],[lm,a,m,q,lm,w],[rm,a,r,q,rm,w]],
        },
        {
            name: '_boi',
            fr: 'à',
            path: [[lm,a,lm,w,l,q,m,q],[rm,a,r,q,rm,w]],
        },
        {
            name: '_fya',
            fr: 'donner',
            path: [[lm,a,rm,a,m,q,lm,a],[l,q,lm,w,rm,w,r,q]],
        },
        {
            name: '_fy',
            fr: 'refléter',
            path: [[lm,a,rm,a,lm,w,rm,w,lm,a],[l,q,r,q]],
        },
        {
            name: '_go',
            fr: 'avoir',
            path:[[lm, w, m, q, rm,w,lm,w],[l,q,lm,a,rm,a,r,q]],
        },
        {
            name: '_ka',
            fr: 'humain',
            path: [[l,q,rm,a],[lm,a,rm,w],[lm,w,m,q],[r,q,r,q]],
        },
        {
            name: '_kme',
            fr: 'pour',
            path: [[lm,a,lm,w],[l,q,m,q],[rm,a,r,q,rm,w]],
        },
        {
            name: '_sa',
            fr: 'vivre',
            path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a],[lm,a,rm,w],[rm,a,lm,w],[l,q,r,q]],
        },
        {
            name: '_smia',
            fr: 'isme',
            path: [[rm,w,l,q,r,q,lm,w,m,q,rm,w,lm,w],[lm,a,lm,a],[rm,a,rm,a]],
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
        center_link_memory.push(`${m} ${q}`);
        let g_element = document.createElementNS(xmlns, "g");
        g_element.setAttributeNS(null, "class", "written_glyph");

        for(let x = 0; x < path.length; x += 1){
            let one_path = path[x];
            g_element.innerHTML += `${_p}${one_path}${p_}`;
        }

        output_area.appendChild(g_element);

        if(center_link_counter > 1){
            let first = center_link_memory[0];
            let last = center_link_memory[center_link_memory.length -1];
            output_area.innerHTML += `${_p}${first},${last}${p_}`;
        }
        increment_y();
    }


    function increment_y(){
        a += 200;
        q += 200;
        w += 200;
    }


    function decrement_y(){
        center_link_counter = 0;
        center_link_memory = [];
        space.style.background = "initial";
        space.innerHTML = "";
        a -= 200;
        q -= 200;
        w -= 200;
    }


    let semi_line = 0;
    function check_semi_line(){
        if(semi_line === 0){

            a = 153;
            q = 231;
            w = 309;
            semi_line = 1;

        }else{

            a = 50;
            q = 128;
            w = 206;
            semi_line = 0;

        }
    }


    function increment_x(){

        check_semi_line();

        l += 170;
        lm += 170;
        m += 170;
        rm += 170;
        r += 170;
    }


    function decrement_x(){

        check_semi_line();
        
        l -= 170;
        lm -= 170;
        m -= 170;
        rm -= 170;
        r -= 170;
        
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

    let combo_database = [
        {name: "ptaegleinmaeksigla", fr: "hexagone", list: ["_ptae", "_glei", "_nmae", "_ksi", "_gla"]},
        {name: "_fagrae", fr: "cultiver", list: ["_fa", "_grae"]},
        {name: "_piodveande", fr: "racine", list: ["_pio", "_dvea", "_nde"]},
        {name: "_piodveagew", fr: "arbre", list: ["_pio", "_dvea", "_gew"]},
        {name: "_knofkai", fr: "comprendre", list: ["_kno", "_fkai"]},
        {name: "_kiotewma", fr: "univers", list: ["_kio","_tew","_ma"]},
        {name: "_lpaelgio", fr: "parler", list: ["_lpae", "_lgio"]},
        {name: "_fazaifwo", fr: "exprimer", list: ["_fa", "_zai", "_fwo"]},
        {name: "_smezai", fr: "comme", list: ["_sme", "_zai"]},
        {name: "_favine", fr: "créer", list: ["_fa", "_vi", "_ne"]},
        {name: "_bwasa", fr: "malheur", list: ["_bwa", "_sa"]},
        {name: "_keosa", fr: "bonheur", list: ["_keo", "_sa"]},
        {name: "_kafyardo", fr: "maître", list: ["_ka", "_fya", "_rdo"]},
        {name: "_ptaeka", fr: "exclave", list: ["_ptae", "_ka"]},
        {name: "_niavi", fr: "sans", list: ["_nia", "_vi"]},
        {name: "_plamtai", fr: "technique", list: ["_pla", "_mtai"]},
        {name: "_hiamtai", fr: "science", list: ["_hia", "_mtai"]},
        {name: "_sakmehia", fr: "philosopher", list: ["_sa", "_kme", "_hia"]},
        {name: "_ptaetmeihiapfae", fr: "verbe", list: ["_ptae", "_tmei", "_hia", "_pfae"]},
        {name: "_ptaetmeihia", fr: "mot", list: ["_ptae", "_tmei", "_hia"]},
        {name: "_ptaetmeihiamrai", fr: "glyphe", list: ["_ptae", "_tmei", "_hia", "_mrai"]},
        {name: "_drista", fr: "percevoir", list: ["_dri", "_sta"]},
        {name: "_ptaerdokweka", fr: "société", list: ["_ptae", "_rdo", "_kwe", "_ka"]},
        {name: "_rdomtai", fr: "structurer", list: ["_rdo", "_mtai"]},
        {name: "_krov3ai", fr: "souhaiter", list: ["_kro", "_v3ai"]},
        {name: "_rseakno", fr: "apprendre", list: ["_rsea", "_kno"]},
        {name: "_mraitoi", fr: "écrire", list: ["_mrai", "_toi"]},
        {name: "_statoi", fr: "lire", list: ["_sta", "_toi"]},
        {name: "_fasta", fr: "montrer", list: ["_fa", "_sta"]},
        {name: "_fasko", fr: "dire", list: ["_fa", "_sko"]},
        {name: "_mealgioney", fr: "graphieros", list: ["_mea", "_lgio", "_ney"]},
        {name: "_fatoizai", fr: "éditer", list: ["_fa", "_toi", "_zai"]},
        {name: "_fafrya", fr: "permettre", list: ["_fa", "_frya"]},
        {name: "_measatae", fr: "art", list: ["_mea", "_sa", "_tae"]},
        {name: "_sakme", fr: "aimer", list: ["_sa", "_kme"]},
        {name: "_nmokatae", fr: "alec lloyd probert", list: ["_nmo", "_ka", "_tae"]},
        {name: "_kafygo", fr: "je", list: ["_ka", "_fy", "_go"]},
        {name: "_kafygo", fr: "moi", list: ["_ka", "_fy", "_go"]},
        {name: "_rafdu", fr: "manger", list: ["_ra", "_fdu"]},
        {name: "_kafyafy", fr: "tu", list: ["_ka", "_fya", "_fy"]},
        {name: "_kafyafy", fr:"toi", list: ["_ka", "_fya", "_fy"]},
        {name: "_klikeogreyhea", fr: "beau", list: ["_kli", "_keo", "_grey", "_hea"]},
        {name: "_kiohaetotreafrey", fr: "nature", list: ["_kio", "_hae", "_to", "_trea", "_frey"]},
    ];

    function search_reference(text_searched){
       
        found_list.innerHTML = "";
        curse();
        circle_preview.style.display = "block";
        svg_preview.innerHTML = "";
        svg_preview.style.display = "block";
        space.innerHTML = "";
        
        for(let w = 0; w < glyph_reference.length; w += 1){
            let one_ref = glyph_reference[w];

            function search_is_a_match() {
                //removing all accents from one_ref.fr
                return text_searched !== "_" && one_ref.name === text_searched || one_ref.fr.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === text_searched;
            }

            function first_letters_are_a_match() {
                return text_searched.substring(0,2) === one_ref.name.substring(0,2) || text_searched.substring(0,2) === one_ref.fr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0,2);
            }

            function search_is_empty() {
                return text_searched === "" || text_searched === "_";
            }

            if (search_is_a_match()) { 
                space.style. background = "radial-gradient(at top left, white, grey)";
                space.innerHTML = `${one_ref.fr}: [${one_ref.name.replace("_","")}]`;

                for(let v = 0; v < one_ref.path.length; v += 1){
                    let p1 = one_ref.path[v];
                    svg_preview.innerHTML += `${_p}${p1}${p_}`;
                }
                found_list.style.display = "none";
            }

            if (first_letters_are_a_match()) {

                found_list.style.display = "block";
                found_list.innerHTML += `<b>${one_ref.name}</b> ${one_ref.fr.toUpperCase()} `;
                let mini_svg = document.createElementNS(xmlns, "svg");
                mini_svg.setAttributeNS(null, "viewBox", "0 0 260 260");
                mini_svg.setAttributeNS(null, "stroke", "black");
                mini_svg.className = "mini_svg";
                mini_svg.style.height = "30px";
                mini_svg.style.width = "30px";
                mini_svg.style.background = "radial-gradient(at bottom left, white, gold)";
                mini_svg.style.borderRadius = "100%";
                mini_svg.style.border = "1px solid black";
                mini_svg.style.boxShadow = "0 0 8px black";
                mini_svg.style.cursor = "pointer";
                mini_svg.setAttributeNS(null, "class", "glypho");
                mini_svg.id = one_ref.name;
                
                for(let gg = 0; gg < one_ref.path.length; gg += 1){
                    let p2 = one_ref.path[gg];
                    mini_svg.innerHTML += `${_p}${p2}${p_}`;
                }

                found_list.appendChild(mini_svg);
                found_list.innerHTML += "<br>";
            }

            if (search_is_empty()) {
                found_list.style.display = "none";
            }
        }

        for (let i = 0; i < combo_database.length; i += 1) {

            let one_combo = combo_database[i];

            function display_combo_in_list(){
                found_list.style.display = "block";
                found_list.innerHTML === "";
                found_list.innerHTML += `<span class="combo_exclam">COMBO!</span><b>${one_combo.name}</b>: ${one_combo.fr.toUpperCase()}<br>`;

                for (let k = 0; k < one_combo.list.length; k += 1) {
                    let one_combo_glyph_phono = one_combo.list[k];
                    let mini_svg = document.createElementNS(xmlns, "svg");
                    mini_svg.setAttributeNS(null, "viewBox", "0 0 260 260");
                    mini_svg.setAttributeNS(null, "stroke", "cornflowerblue");
                    mini_svg.className = "mini_svg";
                    mini_svg.style.height = "30px";
                    mini_svg.style.width = "30px";
                    mini_svg.style.background = "black";
                    mini_svg.style.borderRadius = "100%";
                    mini_svg.style.border = "1px solid black";
                    mini_svg.style.boxShadow = "0 0 8px black";
                    mini_svg.style.cursor = "pointer";
                    mini_svg.setAttributeNS(null, "class", "glypho");
                    mini_svg.id = one_combo_glyph_phono;

                    for(let z = 0; z < glyph_reference.length; z += 1) {

                        function the_name_is_like_the_phonology() {
                            return glyph_reference[z].name === one_combo_glyph_phono;
                        }
                        
                        if (the_name_is_like_the_phonology()) {
                            
                            for (let x = 0; x < glyph_reference[z].path.length; x += 1) {
                                let p3 = glyph_reference[z].path[x];
                                mini_svg.innerHTML += `${_p}${p3}${p_}`;
                            }
                            
                            found_list.appendChild(mini_svg);
                        }
                    }
                }
                found_list.innerHTML += "<br>";
            }

            function search_is_a_combo() {
                return text_searched.substring(0,3) === one_combo.name.substring(0,3) || text_searched.substring(0,3) === one_combo.fr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0,3);
            }

            if (search_is_a_combo()) {
                display_combo_in_list();
            }
        }

        (function play_with_listed_pictos() {

            let glyphos = document.getElementsByClassName("glypho");

                for (let i = 0; i < glyphos.length; i += 1) {
                    let one_glypho = glyphos[i];

                    one_glypho.addEventListener("click", function() {
                        for (let i = 0; i < glyph_reference.length; i += 1) {
                            let one_glyph = glyph_reference[i];

                            function glyph_id_is_like_glyph_name() {
                                return one_glypho.id === one_glyph.name;
                            }

                            if (glyph_id_is_like_glyph_name()) {
                                let aud = new Audio(`audio/${one_glyph.name.replace("_","")}.mp3`);
                                aud.play();
                            }
                        }
                    });
                    draw_prefix(one_glypho, one_glypho.id);
                }
        }());

        //readymade word cumulations combo notifications
        function display_combo(options, write) {
            for (let i = 0; i < options.length; i += 1) {
                let that_option = options[i];

                if (text_searched === that_option) {
                    space.innerHTML += write;
                    notify_combo();
                }
            }
        }

        display_combo(["hexagone", "_ptaegleinmaeksigla"], "hexagone: [ptae-glei-nmae-ksi-gla]");
        display_combo(["cultiver", "_fagrae"], "cultiver: [fa-grae]");
        display_combo(["racine", "_piodveande"], "racine: [pio-dvea-nde]");
        display_combo(["arbre", "_piodveagew"], "arbre: [pio-dvea-gew]");
        display_combo(["comprendre", "_knofkai"], "comprendre: [kno-fkai]");
        display_combo(["univers","_kiotewma"],"univers: [kio-tew-ma]");
        display_combo(["parler","_lpaelgio"],"parler: [lpae-lgio]");
        display_combo(["exprimer", "_fazaifwo"],"exprimer: [fa-zai-fwo]");
        display_combo(["comme", "_smezai"],"comme: [sme-zai]");
        display_combo(["creer", "_favine"],"créer: [fa-vi-ne]");
        display_combo(["malheur","_bwasa"],"(être)malheur: [bwa-sa]");
        display_combo(["bonheur","_keosa"],"(être)bonheur: [keo-sa]");
        display_combo(["maitre","_kafyardo"],"maître: [ka-fya-rdo]");
        display_combo(["esclave","_ptaeka"],"esclave: [ptae-ka]");
        display_combo(["sans","_niavi"],"sans: [nia-vi]");
        display_combo(["technique","_plamtai"],"(être)technique: [pla-mtai]");
        display_combo(["science","_hiamtai"],"(être)science: [hia-mtai]");
        display_combo(["philosopher","_sakmehia"],"philosopher: [sa-kme-hia]");
        display_combo(["verbe", "_ptaetmeihiapfae"],"mot: [ptae-tmei-hia-pfae]");
        display_combo(["mot", "_ptaetmeihia"],"mot: [ptae-tmei-hia]");
        display_combo(["glyphe", "_ptaetmeihiamrai"],"mot: [ptae-tmei-hia-mrai]");
        display_combo(["percevoir", "_drista"],"percevoir: [dri-sta]");
        display_combo(["societe", "_ptaerdokweka"],"société: [ptae-rdo-kwe-ka]");
        display_combo(["structurer", "_rdomtai"],"structurer: [rdo-mtai]");
        display_combo(["souhaiter", "_krov3ai"], "souhaiter: [kro-v3ai]");
        display_combo(["apprendre","_rseakno"],"apprendre: [rsea-kno]");
        display_combo(["ecrire", "_mraitoi"],"écrire: [mrai-toi]");
        display_combo(["lire", "_statoi"],"lire: [sta-toi]");
        display_combo(["montrer","_fasta"],"montrer: [fa-sta]");
        display_combo(["dire","_fasko"], "dire: [fa-sko]");
        display_combo(["graphieros","_mealgioney"], "graphieros: [mea-lgio-ney]");
        display_combo(["editer", "_fatoizai"], "éditer: [fa-toi-zai]");
        display_combo(["permettre","_fafrya", "permettre: [fa-frya]"]);
        display_combo(["art", "_measatae"], "art: [mea-sa-tae]");
        display_combo(["aimer","_sakme"],"aimer: [sa-kme]");
        display_combo(["alec","lloyd","_nmokatae"],`"L'artiste": [nmo-ka-tae]`);
        display_combo(["je","moi","_kafygo"],"je: [ka-fy-go]");
        display_combo(["manger","_rafdu"],"manger: [ra-fdu]");
        display_combo(["tu","toi","_kafyafy"],"tu,toi: [ka-fya-fy]");
        display_combo(["beau"],"beau: [kli-keo-grey-hea]");
        display_combo(["nature"],"nature: [kio-hae-to-trea-frey]");
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
                path: [[lm,a,r,q,rm,w,lm,w,l,q,lm,a,rm,a,r,q],[lm,w,rm,a],[m,q,rm,w]],
            },
            {
                name: '_sola',
                fr: 'son',
                path: [[lm,a,l,q,lm,w,rm,w,m,q,rm,a,r,q]],
                
            },
            {
                name: '_sota',
                fr: 'ton',
                path: [[lm,a,l,q,lm,w,rm,w,m,q,rm,a,r,q,m,q]],
               
            },
            {
                name: '_kwi',
                fr: 'qui',
                path: [[lm,a,l,q,lm,w],[l,q,rm,w,rm,a],[m,q,m,q],[r,q,r,q]],
                
            },
            {
                name: '_ze',
                fr: 'utiliser',
                path: [[l,q,lm,w,rm,w,r,q],[lm,w,lm,a,rm,a,rm,w],[lm,a,rm,w],[rm,a,lm,w]],
                
            },
            {
                name: '_vrea',
                fr: 'vrai',
                path: [[l,q,lm,w,rm,a],[lm,a,lm,a],[r,q,r,q],[rm,w,rm,w]],
                
            },
            {
                name: '_v3ai',
                fr: 'vouloir',
                path: [[lm,a,m,q,rm,a],[l,q,lm,w,rm,w,r,q]],
                
            },
            {
                name: '_flae',
                fr: 'voler',
                path: [[lm,a,rm,a,r,q],[lm,w,rm,a],[l,q,l,q],[rm,w,rm,w]],
            },
            {
                name: '_vloi',
                fr: 'volume',
                path: [[lm,a,rm,a,r,q],[rm,a,lm,w],[l,q,lm,w,rm,w]],
            },
            {
                name: '_sta',
                fr: 'voir',
                path: [[rm,a,l,q,rm,w],[l,q,r,q],[lm,a,m,q,lm,w]],
            },
            {
                name: '_ko',
                fr: 'voici',
                path: [[lm,a,lm,a],[rm,a,rm,a],[m,q,m,q],[l,q,lm,w,rm,w,r,q]],
            },
            {
                name: '_vlo',
                fr: 'vitesse',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w],[rm,a,m,q,rm,w],[l,q,m,q]],
               
            },
            {
                name: '_vzi',
                fr: 'visage',
                path: [[lm,a,lm,a],[m,q,m,q],[l,q,rm,a,r,q,rm,w,lm,w,l,q]],
                
            },
            {
                name: '_vzy',
                fr: 'virus',
                path: [[m,q,rm,a,rm,w,lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a]],
               
            },
            {
                name: '_vle',
                fr: 'violet',
                path: [[l,q,lm,w,rm,w],[lm,a,lm,a],[rm,a,rm,a],[m,q,m,q],[r,q,r,q]],
                
            },
            {
                name: '_ldo',
                fr: 'vieux',
                path: [[lm,a,m,q,r,q,lm,w,m,q,rm,w],[l,q,l,q],[rm,a,rm,a]],
                
            },
            {
                name: '_vey',
                fr: 'vieillard',
                path: [[l,q,rm,a,r,q],[lm,a,rm,w],[lm,w,m,q]],
               
            },
            {
                name: '_vde',
                fr: 'vider',
                path: [[l,q,r,q,rm,a,m,q],[rm,a,rm,w],[lm,a,lm,a],[lm,w,lm,w]],
                
            },
            {
                name: '_vzey',
                fr: 'vice',
                path: [[lm,w,lm,w],[l,q,lm,a,rm,w,l,q],[rm,a,r,q]],
               
            },
            {
                name: '_vba',
                fr: 'vibrer',
                path: [[r,q,lm,a,rm,a,m,q,rm,w,lm,w,r,q,m,q],[l,q,l,q]],
                
            },
            {
                name: '_vry',
                fr: 'vertu',
                path: [[lm,a,lm,a],[l,q,rm,a,lm,w,l,q],[r,q,rm,w]],
                
            },
            {
                name: '_vrae',
                fr: 'vert',
                path: [[l,q,l,q],[lm,a,lm,a],[lm,w,lm,w],[m,q,m,q],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_kto',
                fr: 'vers',
                path: [[l,q,r,q],[rm,a,r,q,rm,w],[lm,a,lm,a],[lm,w,lm,w]],
                
            },
            {
                name: '_rmye',
                fr: 'ver',
                path: [[l,q,lm,w,m,q,rm,w,r,q,lm,a,rm,a]],
                
            },
            {
                name: '_sloi',
                fr: 'vendre',
                path: [[lm,a,rm,a],[lm,w,l,q,r,q,rm,w,lm,w,m,q,rm,w]],
                
            },
            {
                name: '_pio',
                fr: 'vegetal',
                path: [[lm,a,lm,w,r,q],[l,q,rm,w],[lm,w,rm,a]],
                
            },
            {
                name: '_vnia',
                fr: 'varier',
                path: [[l,q,rm,a,lm,a,l,q],[m,q,r,q,rm,w,m,q],[lm,w,lm,w]],
               
            },
            {
                name: '_vlia',
                fr: 'valoriser',
                path: [[lm,a,rm,a],[l,q,r,q,lm,w,rm,w,l,q]],
                
            },
            {
                name: '_vkye',
                fr: 'vaincre',
                path: [[rm,a,lm,w,l,q,rm,a,rm,w,rm,w,lm,w],[lm,a,r,q]],
                
            },
            {
                name: '_waa',
                fr: 'trouver',
                path: [[l,q,lm,a,lm,w,rm,w,lm,a,r,q],[rm,a,rm,a]],
                
            },
            {
                name: '_tro',
                fr: 'trop',
                path: [[lm,a,l,q,lm,w,rm,w,r,q,rm,a],[l,q,r,q],[lm,w,m,q,rm,w]],
               
            },
            {
                name: '_bse',
                fr: 'trebucher',
                path: [[lm,a,rm,a,r,q],[l,q,rm,a],[lm,w,m,q],[rm,w,rm,w]],
                
            },
            {
                name: '_tie',
                fr: 'traverser',
                path: [[rm,a,lm,a,lm,w,rm,w],[l,q,r,q]],
                
            },
            {
                name: '_tvai',
                fr: 'travailler',
                path: [[lm,a,lm,w],[l,q,rm,a,r,q,m,q,rm,w,r,q]],
              
            },
            {
                name: '_zit',
                fr: 'transitionner',
                path: [[m,q,l,q,lm,a,m,q,rm,a,r,q,rm,w,lm,w,m,q],[rm,a,rm,w]],
                
            },
            {
                name: '_mne',
                fr: 'transgenre',
                path: [[lm,a,m,q,r,q,rm,w,lm,w,m,q],[lm,w,r,q],[l,q,rm,a]],
                
            },
            {
                name: '_tew',
                fr: 'tout',
                path: [[l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q],[lm,w,lm,a,r,q,lm,w],[rm,a,rm,w,l,q,rm,a],[l,q,r,q],[lm,a,rm,w],[rm,a,lm,w]],
                
            },
            {
                name: '_pko',
                fr: 'toucher',
                path: [[lm,a,lm,w],[rm,a,rm,w],[l,q,lm,w,rm,w,r,q],[m,q,m,q]],
                
            },
            {
                name: '_tnogma',
                fr: 'tonne',
                path: [[rm,w,lm,a,rm,a,rm,w,lm,w,l,q,m,q,lm,w],[r,q,r,q]],
                
            },
            {
                name: '_pley',
                fr: 'tirer',
                path: [[lm,a,l,q,lm,w],[rm,a,m,q,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_tra3',
                fr: 'theatre',
                path: [[l,q,l,q],[lm,w,lm,w],[r,q,lm,a,rm,a,m,q,rm,w]],
                
            },
            {
                name: '_toi',
                fr: 'texte',
                path: [[lm,a,rm,a],[l,q,m,q],[lm,w,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_tea',
                fr: 'tete',
                path: [[l,q,l,q],[lm,w,lm,a,rm,a,m,q],[r,q,r,q],[rm,w,rm,w]],
              
            },
            {
                name: '_ste',
                fr: 'tester',
                path: [[l,q,l,q],[lm,w,lm,a,rm,a,m,q,r,q],[rm,w,rm,w]],
               
            },
            {
                name: '_trea',
                fr: 'terre',
                path: [[l,q,l,q],[lm,a,rm,w,lm,w,rm,a],[r,q,r,q]],
                
            },
            {
                name: '_kpoile',
                fr: 'temps',
                path: [[l,q,r,q,rm,a,rm,w,r,q,lm,a,lm,w,r,q],[lm,a,m,q,lm,w]],
                
            },
            {
                name: '_po',
                fr: 'temperature',
                path: [[lm,a,lm,w,rm,w],[l,q,m,q],[rm,a,rm,a],[r,q,r,q]],
                
            },
            {
                name: '_tle',
                fr: 'telephoner',
                path: [[l,q,rm,w,m,q,lm,w,r,q,rm,a,lm,a,l,q,r,q],[lm,w,rm,w]],
                
            },
            {
                name: '_zlae',
                fr: 'tant',
                path: [[l,q,lm,a],[lm,w,rm,w,rm,a],[m,q,rm,a,r,q]],
               
            },
            {
                name: '_sai',
                fr: 'taille',
                path: [[lm,a,l,q,r,q,rm,w],[lm,w,lm,w],[rm,a,rm,a]],
                
            },
            {
                name: '_stu',
                fr: 'synthetiser',
                path: [[l,q,lm,a,m,q,lm,w,l,q],[rm,a,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_sbo',
                fr: 'symboliser',
                path: [[l,q,lm,a,lm,w],[m,q,rm,a,rm,w,r,q]],
                
            },
            {
                name: '_tpe',
                fr: 'sur',
                path: [[lm,a,rm,a],[l,q,r,q,rm,w,lm,w,l,q]],
                
            },
            {
                name: '_flo',
                fr: 'suivre',
                path: [[l,q,m,q,lm,a,lm,w,m,q],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_pkae',
                fr: 'sujet',
                path: [[lm,a,rm,w,lm,w,lm,a,rm,a,rm,w],[lm,w,m,q],[l,q,rm,a],[r,q,r,q]],
                
            },
            {
                name: '_ske',
                fr: 'sucrer',
                path: [[lm,a,m,q,rm,a],[l,q,r,q,lm,w,rm,w]],
                
            },
            {
                name: '_fi',
                fr: 'subjonctif',
                path: [[rm,a,l,q,lm,w],[l,q,r,q],[lm,a,rm,w]],
               
            },
            {
                name: '_svo',
                fr: 'souvent',
                path: [[rm,w,l,q,lm,w,rm,w,lm,a,r,q,rm,a,lm,a]],
                
            },
            {
                name: '_nde',
                fr: 'sous',
                path: [[l,q,r,q,rm,a,lm,a,l,q],[lm,w,rm,w]],
                
            },
            {
                name: '_sple',
                fr: 'souple',
                path: [[lm,w,m,q,rm,w,lm,w,lm,a,r,q,rm,a,l,q,lm,a],[rm,a,rm,w]],
                
            },
            {
                name: '_3nu',
                fr: 'soumettre',
                path: [[l,q,rm,a],[lm,a,rm,a,r,q],[m,q,rm,w,lm,w]],
                
            },
            {
                name: '_soma',
                fr: 'soi',
                path: [[lm,a,l,q,lm,w,rm,w,m,q,rm,a,r,q,rm,w],[m,q,r,q]],
                
            },
            {
                name: '_mki',
                fr: 'singe',
                path: [[lm,a,rm,w],[m,q,r,q],[l,q,rm,a],[lm,w,lm,w]],
               
            },
            {
                name: '_snea',
                fr: 'simplifier',
                path: [[lm,a,lm,w,m,q,l,q,lm,a],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_zei',
                fr: 'si',
                path: [[lm,w,l,q,rm,a],[lm,a,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_skwa',
                fr: 'sexe',
                path: [[lm,a,m,q,rm,a,lm,a,l,q,lm,w,rm,w,r,q,rm,a]],
                
            },
            {
                name: '_lno',
                fr: 'seul',
                path: [[m,q,m,q],[l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q]],
               
            },
            {
                name: '_trey',
                fr: 'separer',
                path: [[l,q,lm,a,lm,w,l,q,r,q,rm,a,rm,w,r,q]],
                
            },
            {
                name: '_smu',
                fr: 'sentir',
                path: [[lm,a,l,q,lm,w,rm,w,r,q],[m,q,rm,a]],
                
            },
            {
                name: '_vye',
                fr: 'sens',
                path: [[l,q,m,q],[r,q,lm,a,rm,a,r,q,rm,w,lm,w,r,q]],
                
            },
            {
                name: '_sge',
                fr: 'segmenter',
                path: [[l,q,l,q],[lm,a,lm,a],[lm,w,m,q],[rm,w,rm,w],[rm,a,r,q]],
                
            },
            {
                name: '_sky',
                fr: 'securiser',
                path: [[lm,w,lm,a,r,q,lm,w],[l,q,l,q],[rm,a,rm,a],[m,q,rm,w]],
                
            },
            {
                name: '_d3y',
                fr: 'seconde',
                path: [[l,q,l,q],[r,q,r,q],[rm,a,lm,a,rm,w,lm,w]],
               
            },
            {
                name: '_so',
                fr: 'se',
                path: [[lm,a,l,q,lm,w,rm,w,m,q,rm,a],[m,q,r,q,rm,w]],
                
            },
            {
                name: '_',
                fr: '',
                path: [[]],
                
            },
            {
                name: '_sle',
                fr: 'saler',
                path: [[l,q,m,q,lm,a,lm,w,rm,w,rm,a,m,q,r,q]],
                
            },
            {
                name: '_rgo',
                fr: 'rouge',
                path: [[lm,a,l,q,lm,w],[m,q,m,q],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w]],
               
            },
            {
                name: '_rwe',
                fr: 'roue',
                path: [[r,q,m,q,lm,a,l,q,lm,w,m,q],[rm,a,rm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_rgya',
                fr: 'rongeur',
                path: [[lm,a,lm,a],[rm,a,rm,a],[l,q,r,q,rm,w,m,q,lm,w,l,q]],
                
            },
            {
                name: '_lfaw',
                fr: 'rire',
                path: [[l,q,lm,w,m,q,lm,a],[lm,w,r,q,rm,a,rm,w]],
               
            },
            {
                name: '_rgi',
                fr: 'rigide',
                path: [[lm,a,m,q,rm,a,lm,a,lm,w,r,q,rm,w,l,q,lm,w,r,q],[rm,a,rm,w]],
                
            },
            {
                name: '_ne',
                fr: 'rien',
                path: [[lm,a,lm,a],[rm,a,rm,a],[l,q,l,q],[m,q,m,q],[r,q,r,q],[lm,w,lm,w],[rm,w,rm,w]],
               
            },
            {
                name: '_swo',
                fr: 'revenir',
                path: [[l,q,lm,a,lm,w,l,q,m,q,rm,a,rm,w,m,q,r,q]],
                
            },
            {
                name: '_rve',
                fr: 'reveiller',
                path: [[m,q,lm,w,lm,a,r,q,l,q,rm,a,rm,w,m,q]],
                
            },
            {
                name: '_rto',
                fr: 'retourner',
                path: [[rm,w,rm,a,lm,a,lm,w],[l,q,lm,w,m,q],[r,q,r,q]],
                
            },
            {
                name: '_lvoi',
                fr: 'retirer',
                path: [[lm,a,lm,w,m,q,l,q,lm,w],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_zle',
                fr: 'resulter',
                path: [[l,q,m,q],[lm,a,lm,a],[lm,w,lm,w],[rm,a,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_pta',
                fr: 'reptile',
                path: [[lm,w,rm,w,l,q,r,q,lm,a],[m,q,rm,a]],
                
            },
            {
                name: '_rpie',
                fr: 'repeter',
                path: [[r,q,l,q,lm,a,lm,w],[rm,w,rm,a,m,q]],
                
            },
            {
                name: '_fksi',
                fr: 'reparer',
                path: [[r,q,lm,a,m,q,l,q,lm,w,m,q],[rm,a,rm,w]],
                
            },
            {
                name: '_floi',
                fr: 'remplir',
                path: [[l,q,r,q,rm,w,m,q],[rm,a,rm,w],[lm,a,lm,a],[lm,w,lm,w]],
               
            },
            {
                name: '_rdai',
                fr: 'refaire',
                path: [[m,q,lm,a,rm,a,m,q,r,q,lm,w,rm,w,l,q,m,q]],
                
            },
            {
                name: '_tba',
                fr: 'recipient',
                path: [[lm,a,l,q,lm,w,rm,w,r,q,rm,a],[m,q,m,q]],
               
            },
            {
                name: '_rsea',
                fr: 'recevoir',
                path: [[l,q,rm,w,m,q,lm,w,r,q],[lm,a,rm,a]],
                
            },
            {
                name: '_rbae',
                fr: 'rebondir',
                path: [[l,q,lm,a,rm,w,rm,a],[lm,w,r,q]],
                
            },
            {
                name: '_snoi',
                fr: 'rayonner',
                path: [[lm,a,rm,a,r,q],[l,q,rm,a,rm,w],[lm,w,rm,a]],
                
            },
            {
                name: '_groi',
                fr: 'ramper',
                path: [[lm,w,rm,a,rm,w,r,q,l,q,lm,a,m,q]],
                
            },
            {
                name: '_rma',
                fr: 'ramasser',
                path: [[l,q,rm,a,r,q],[lm,a,lm,w,m,q],[rm,w,rm,w]],
                
            },
            {
                name: '_slo',
                fr: 'ralentir',
                path: [[r,q,l,q],[lm,a,l,q,lm,w],[rm,a,m,q,rm,w]],
               
            },
            {
                name: '_wo',
                fr: 'questionner',
                path: [[lm,a,rm,a,l,q,rm,w],[lm,w,lm,w],[m,q,m,q],[r,q,r,q]],
               
            },
            {
                name: '_kwa',
                fr: 'que',
                path: [[lm,a,l,q,lm,w],[l,q,rm,a,rm,w],[m,q,m,q],[r,q,r,q]],
                
            },
            {
                name: '_kta',
                fr: 'quantite',
                path: [[r,q,m,q,rm,w,lm,w,lm,a,rm,a,rm,w],[l,q,l,q]],
                
            },
            {
                name: '_fkwe',
                fr: 'quand',
                path: [[rm,a,lm,a,lm,w,r,q,m,q],[l,q,l,q],[rm,w,rm,w]],
               
            },
            {
                name: '_3e',
                fr: 'proteger',
                path: [[lm,w,l,q,lm,a,rm,a,r,q,rm,w],[m,q,m,q]],
               
            },
            {
                name: '_prai',
                fr: 'proportionner',
                path: [[r,q,m,q,rm,w,r,q,lm,a,lm,w,r,q],[l,q,l,q],[rm,a,rm,a]],
                
            },
            {
                name: '_prio',
                fr: 'programmer',
                path: [[lm,a,m,q,rm,a,lm,a,lm,w,rm,w,rm,a],[l,q,l,q],[r,q,r,q]],
               
            },
            {
                name: '_tpia',
                fr: 'profond',
                path: [[lm,w,lm,a,l,q,lm,w,rm,w,r,q,l,q],[rm,a,rm,a]],
                
            },
            {
                name: '_pre',
                fr: 'pres',
                path: [[lm,w,lm,a,r,q],[l,q,m,q,rm,a,l,q],[rm,w,rm,w]],
               
            },
            {
                name: '_ra',
                fr: 'prendre',
                path: [[lm,w,l,q,m,q,lm,a,rm,a,m,q,r,q,rm,w]],
                
            },
            {
                name: '_frya',
                fr: 'pouvoir',
                path: [[lm,w,m,q,rm,w],[l,q,lm,a,rm,a,r,q]],
                
            },
            {
                name: '_psie',
                fr: 'pousser',
                path: [[l,q,l,q],[lm,a,m,q,lm,w],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_vwa',
                fr: 'pourquoi',
                path: [[lm,a,rm,a,l,q,rm,w],[lm,w,r,q],[m,q,m,q]],
                
            },
            {
                name: '_psu',
                fr: 'positionner',
                path: [[l,q,m,q,lm,w,lm,a,rm,a,lm,w],[r,q,rm,w]],
                
            },
            {
                name: '_ptoi',
                fr: 'porter',
                path: [[lm,w,rm,a,r,q,lm,a,rm,a],[m,q,rm,w],[l,q,l,q]],
                
            },
            {
                name: '_lbay',
                fr: 'porcin',
                path: [[m,q,lm,w,l,q,lm,a,rm,a,r,q,rm,w,rm,a]],
               
            },
            {
                name: '_ptea',
                fr: 'poitriner',
                path: [[lm,w,m,q,l,q,rm,a,m,q,rm,w],[lm,a,lm,a],[r,q,r,q]],
                
            },
            {
                name: '_psaw',
                fr: 'poisson',
                path: [[l,q,rm,a,rm,w,r,q,lm,w,l,q],[lm,a,lm,a],[m,q,m,q]],
                
            },
            {
                name: '_fky',
                fr: 'pointer',
                path: [[l,q,rm,w,rm,a],[lm,a,lm,a],[m,q,m,q],[lm,w,lm,w],[r,q,r,q]],
                
            },
            {
                name: '_ploi',
                fr: 'poil',
                path: [[l,q,lm,w],[lm,a,m,q],[rm,a,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_vdio',
                fr: 'plus',
                path: [[lm,a,lm,w],[l,q,m,q],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w]],
                
            },
            {
                name: '_tsi',
                fr: 'pluriel',
                path: [[lm,a,m,q,r,q],[lm,w,m,q],[l,q,l,q],[rm,a,rm,a],[rm,w,rm,w]],
               
            },
            {
                name: '_plwe',
                fr: 'plume',
                path: [[lm,a,lm,a],[rm,a,rm,a],[l,q,r,q,rm,w,l,q],[lm,w,lm,w]],
                
            },
            {
                name: '_pli',
                fr: 'plier',
                path: [[lm,a,rm,a,r,q,l,q,lm,w,rm,w]],
               
            },
            {
                name: '_pto',
                fr: 'pleuvoir',
                path: [[l,q,lm,w,m,q,rm,w,r,q],[lm,a,lm,a],[rm,a,rm,a]],
                
            },
            {
                name: '_pla',
                fr: 'planifier',
                path: [[lm,w,lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a],[rm,a,rm,w],[r,q,l,q]],
                
            },
            {
                name: '_pnae',
                fr: 'planete',
                path: [[lm,w,lm,a,r,q,lm,w,l,q,lm,a,rm,a,r,q,rm,w,lm,w],[rm,a,rm,w,l,q,rm,a],[m,q,m,q]],
                
            },
            {
                name: '_aria',
                fr: 'planer',
                path: [[lm,a,m,q,rm,a,r,q,lm,a,l,q,rm,a,m,q],[lm,w,lm,w],[rm,w,rm,w]],
                
            },
            {
                name: '_ueoa',
                fr: 'plaisir',
                path: [[m,q,rm,a,r,q,rm,w,lm,w,l,q,lm,a,m,q]],
                
            },
            {
                name: '_pvo',
                fr: 'pivoter',
                path: [[lm,w,lm,a,m,q,lm,w,r,q,rm,w,lm,w],[l,q,l,q],[rm,a,rm,a]],
                
            },
            {
                name: '_vdibwa',
                fr: 'pire',
                path: [[m,q,l,q,lm,a,rm,w],[lm,w,lm,a],[rm,a,r,q]],
               
            },
            {
                name: '_pke',
                fr: 'piquant',
                path: [[lm,w,lm,a,m,q,rm,a,rm,w,lm,w,l,q,r,q,rm,w]],
                
            },
            {
                name: '_gwi',
                fr: 'pingouin',
                path: [[lm,a,rm,a,l,q,lm,w,rm,w,rm,a,r,q],[m,q,m,q]],
               
            },
            {
                name: '_trai',
                fr: 'pieger',
                path: [[lm,w,lm,a,l,q,r,q,rm,a,lm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_fti',
                fr: 'pied',
                path: [[l,q,m,q,lm,w,lm,a,rm,a,rm,a,rm,w,m,q,r,q]],
                
            },
            {
                name: '_sfi',
                fr: 'peur',
                path: [[lm,a,rm,w],[m,q,r,q,rm,a],[l,q,l,q],[lm,w,lm,w]],
                
            },
            {
                name: '_psia',
                fr: 'peser',
                path: [[lm,a,rm,a,rm,w,lm,w,m,q,rm,w],[l,q,l,q],[r,q,r,q]],
                
            },
            {
                name: '_lse',
                fr: 'perdre',
                path: [[rm,w,lm,a,rm,a,rm,w],[l,q,rm,w,r,q],[lm,w,lm,w]],
                
            },
            {
                name: '_dri',
                fr: 'percer',
                path: [[r,q,rm,a,m,q,rm,w,r,q,lm,a,l,q,lm,w,r,q,l,q]],
                
            },
            {
                name: '_hia',
                fr: 'penser',
                path: [[m,q,l,q,lm,a,rm,a,r,q,m,q,rm,w,lm,w,m,q]],
                
            },
            {
                name: '_pda',
                fr: 'pendant',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w],[l,q,r,q],[rm,a,rm,w]],
                
            },
            {
                name: '_prye',
                fr: 'part',
                path: [[m,q,rm,w,lm,w,m,q],[l,q,l,q],[lm,a,lm,a],[rm,a,rm,a],[r,q,r,q]],
                
            },
            {
                name: '_psoi',
                fr: 'passe',
                path: [[r,q,l,q],[rm,a,l,q,rm,w],[lm,a,lm,a],[lm,w,lm,w]],
                
            },
            {
                name: '_pmi',
                fr: 'parmi',
                path: [[lm,a,rm,a,r,q,l,q,lm,a,rm,w,lm,w,rm,a]],
                
            },
            {
                name: '_vga',
                fr: 'parfumer',
                path: [[lm,a,l,q,rm,a,rm,w,r,q],[l,q,lm,w,rm,w],[m,q,rm,a]],
                
            },
            {
                name: '_smai',
                fr: 'parfois',
                path: [[l,q,lm,a,m,q],[lm,w,rm,w,r,q],[rm,a,rm,a]],
                
            },
            {
                name: '_prae',
                fr: 'parcourir',
                path: [[rm,a,lm,a,l,q,lm,w,rm,w,r,q,m,q]],
                
            },
            {
                name: '_ba',
                fr: 'par',
                path: [[lm,a,lm,a],[rm,a,rm,a],[l,q,l,q],[m,q,rm,w],[lm,w,rm,w,r,q]],
                
            },
            {
                name: '_mriy',
                fr: 'papillon',
                path: [[lm,w,lm,a,rm,a,lm,w],[l,q,r,q,rm,w,l,q]],
                
            },
            {
                name: '_sra',
                fr: 'pacifier',
                path: [[l,q,lm,w,rm,a,lm,a,rm,w,r,q]],
                
            },
            {
                name: '_pno',
                fr: 'ouvrir',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w],[l,q,m,q]],
                
            },
            {
                name: '_he',
                fr: 'oui',
                path: [[l,q,l,q],[lm,a,lm,w,m,q],[rm,a,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_roi',
                fr: 'ou',
                path: [[lm,a,rm,a,lm,w,rm,w,lm,a],[l,q,l,q],[r,q,r,q]],
                
            },
            {
                name: '_sdey',
                fr: 'où',
                path: [[lm,a,rm,w],[lm,w,rm,w,r,q],[l,q,l,q],[rm,a,rm,a]],
                
            },
            {
                name: '_bnio',
                fr: 'os',
                path: [[lm,a,rm,w,rm,a,l,q,m,q,rm,a,lm,a,l,q,lm,w,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_via',
                fr: 'originer',
                path: [[l,q,lm,w,lm,a,rm,a],[m,q,r,q,rm,w,m,q]],
                
            },
            {
                name: '_rgia',
                fr: 'organe',
                path: [[rm,a,l,q,m,q,lm,w,rm,w,lm,a],[lm,w,l,q,lm,a,rm,a,r,q,rm,w]],
                
            },
            {
                name: '_rdo',
                fr: 'ordonner',
                path: [[lm,w,lm,a,rm,a,rm,w],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
               
            },
            {
                name: '_r3y',
                fr: 'orange',
                path: [[l,q,lm,a,rm,a],[m,q,m,q],[r,q,r,q],[lm,w,lm,w],[rm,w,rm,w]],
                
            },
            {
                name: '_vroi',
                fr: 'or',
                path: [[l,q,m,q],[lm,a,m,q,lm,w],[r,q,rm,a,rm,w,r,q]],
                
            },
            {
                name: '_gnae',
                fr: 'onde',
                path: [[l,q,lm,w],[lm,a,rm,w],[rm,a,r,q]],
                
            },
            {
                name: '_broi',
                fr: 'ombre',
                path: [[l,q,rm,a,rm,w,lm,w],[lm,a,m,q],[r,q,r,q]],
                
            },
            {
                name: '_zo',
                fr: 'oiseau',
                path: [[m,q,l,q,lm,w,rm,a],[lm,a,rm,a,r,q],[rm,w,rm,w]],
                
            },
            {
                name: '_gwa',
                fr: 'oeuf',
                path: [[l,q,lm,a,m,q,lm,w,l,q],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_ptae',
                fr: 'objet',
                path: [[lm,w,m,q,rm,w,lm,w,lm,a,rm,a,rm,w],[l,q,l,q],[r,q,r,q]],
                
            },
            {
                name: '_ney',
                fr: 'nouveau',
                path: [[lm,a,l,q,lm,w,m,q,rm,w,r,q,rm,a]],
                
            },
            {
                name: '_fdu',
                fr: 'nourrir',
                path: [[l,q,lm,w,lm,a,rm,a,r,q,rm,w,l,q],[m,q,m,q]],
                
            },
            {
                name: '_nia',
                fr: 'non',
                path: [[lm,a,rm,w],[rm, a,lm,w],[l,q,l,q],[r,q,r,q]],
                
            },
            {
                name: '_na',
                fr: 'ni',
                path: [[l,q,m,q],[lm,a,rm,w,r,q],[lm,w,rm,a]],
                
            },
            {
                name: '_nsio',
                fr: 'necessiter',
                path: [[lm,a,l,q,m,q,rm,a,r,q],[m,q,rm,w,lm,w]],
                
            },
            {
                name: '_zmi',
                fr: 'musique',
                path: [[l,q,lm,w,lm,a,rm,a,r,q],[lm,w,rm,w,m,q,rm,a]],
               
            },
            {
                name: '_mso',
                fr: 'muscler',
                path: [[lm,a,rm,a,rm,w,l,q,m,q,rm,w],[lm,w,lm,w],[r,q,r,q]],
               
            },
            {
                name: '_mksi',
                fr: 'multiplier',
                path: [[lm,a,lm,a],[rm,a,rm,a],[m,q,m,q],[l,q,lm,w,rm,w,r,q]],
                
            },
            {
                name: '_ftey',
                fr: 'mou',
                path: [[l,q,lm,a,lm,w,rm,w,rm,a,r,q],[lm,w,m,q,rm,w]],
                
            },
            {
                name: '_mtu',
                fr: 'montagne',
                path: [[l,q,lm,a,m,q,rm,a,r,q],[lm,w,rm,w]],
               
            },
            {
                name: '_mu',
                fr: 'mollusque',
                path: [[l,q,m,q,lm,a,l,q,lm,w,rm,w,r,q,rm,a],[lm,a,lm,w,r,q]],
               
            },
            {
                name: '_mni',
                fr: 'moins',
                path: [[l,q,m,q],[lm,a,lm,a],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w],[lm,w,lm,w]],
              
            },
            {
                name: '_d3io',
                fr: 'minute',
                path: [[l,q,l,q],[lm,w,lm,a,m,q,rm,a,rm,w],[r,q,r,q]],
               
            },
            {
                name: '_mina',
                fr: 'mineral',
                path: [[lm,w,lm,a,m,q,rm,a,rm,w,lm,w,l,q,lm,a,rm,a,r,q,rm,w]],
                
            },
            {
                name: '_mlimza',
                fr: 'millimetre',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w],[l,q,l,q],[m,q,m,q]],
               
            },
            {
                name: '_mligma',
                fr: 'milligramme',
                path: [[lm,a,rm,a,rm,w,lm,w],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
              
            },
            {
                name: '_mdo',
                fr: 'milieu',
                path: [[l,q,r,q],[lm,a,lm,a],[rm,a,rm,a],[lm,w,lm,w],[rm,w,rm,w]],
             
            },
            {
                name: '_vdikeo',
                fr: 'mieux',
                path: [[m,q,l,q,lm,w,rm,a],[lm,a,lm,w],[rm,w,r,q]],
                
            },
            {
                name: '_pne',
                fr: 'mettre',
                path: [[lm,w,lm,a,l,q,m,q,lm,a],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_mza',
                fr: 'metre',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,m,q,lm,w]],
                
            },
            {
                name: '_mto',
                fr: 'metal',
                path: [[lm,w,lm,a,rm,w,rm,a,r,q,lm,w,l,q,rm,a]],
               
            },
            {
                name: '_bwa',
                fr: 'mauvais',
                path: [[l,q,lm,a,rm,w],[rm,a,r,q],[lm,w,lm,w]],
               
            },
            {
                name: '_mtai',
                fr: 'matiere',
                path: [[lm,a,lm,w,rm,a,rm,w,lm,w,l,q,lm,a,rm,a,r,q, rm,w]],
                
            },
            {
                name: '_lfe',
                fr: 'mastodonte',
                path: [[l,q,l,q],[lm,w,lm,a,rm,a,r,q,rm,w,lm,a]],
                
            },
            {
                name: '_chka',
                fr: 'masquer',
                path: [[lm,a,rm,a],[m,q,m,q],[l,q,rm,w,r,q,lm,w,l,q]],
               
            },
            {
                name: '_msy',
                fr: 'marsupial',
                path: [[l,q,lm,a],[m,q,rm,a],[r,q,rm,w,rm,a,lm,a,lm,w,rm,w]],
                
            },
            {
                name: '_mrai',
                fr: 'marquer',
                path: [[l,q,r,q],[lm,a,m,q,lm,w],[rm,a,rm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_mno',
                fr: 'male',
                path: [[lm,a,rm,w],[lm,w,m,q,r,q],[l,q,rm,a]],
              
            },
            {
                name: '_nfea',
                fr: 'maladie',
                path: [[lm,a,lm,a],[l,q,m,q,rm,a],[m,q,rm,w],[lm,w,r,q]],
                
            },
            {
                name: '_pro',        
                fr: 'mais',        
                path: [[l,q,m,q],[lm,a,m,q,lm,w],[rm,a,rm,w],[r,q,r,q]],      
              
            },        
            {        
                name: '_sna',        
                fr: 'maigrir',        
                path: [[r,q,rm,w,rm,a,r,q,l,q,lm,a,m,q,lm,w,l,q]],        
                
            },        
            {        
                name: '_lya',        
                fr: 'lune',        
                path: [[lm,w,lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a],[m,q,m,q]],
               
            },        
            {        
                name: '_hea',        
                fr: 'lumiere',        
                path: [[lm,a,r,q,lm,w,lm,a],[l,q,m,q,rm,a],[m,q,rm,w]],
                 
            },        
            {        
                name: '_lro',        
                fr: 'lourd',        
                path: [[lm,a,m,q,rm,a],[l,q,l,q],[r,q,r,q],[lm,w,rm,w]],
               
            },        
            {        
                name: '_lgya',        
                fr: 'long',        
                path: [[l,q,lm,w,r,q,rm,w,m,q,rm,a,lm,a]],
               
            },        
            {        
                name: '_fra',        
                fr: 'loin',        
                path: [[l,q,rm,w,rm,a],[lm,w,m,q,r,q,lm,w],[lm,a,lm,a]],
                
            },        
            {       
                name: '_sti',        
                fr: 'lister',        
                path: [[rm,w,lm,a,l,q,rm,w,rm,a,lm,a],[l,q,lm,w,rm,w,r,q,rm,a]],
               
            },        
            {        
                name: '_lpae',        
                fr: 'levre',        
                path: [[lm,a,m,q,rm,a],[l,q,r,q],[lm,w,rm,w]],
                
            },        
            {        
                name: '_lgy',        
                fr: 'legume',        
                path: [[lm,a,rm,w,lm,w,rm,a],[l,q,r,q]],
               
            },        
            {        
                name: '_lgio',        
                fr: 'langage',        
                path: [[l,q,lm,w,lm,a],[m,q,rm,w,rm,a],[r,q,r,q]],
                
            },
            {
                name: '_ska',
                fr: 'lancer',
                path: [[l,q,r,q,rm,w,m,q],[lm,a,lm,w],[rm,a,rm,a]],
                
            },
            {
                name: '_klotogma',
                fr: 'kilotonne',
                path: [[rm,w,lm,a,rm,a,rm,w,lm,w,l,q,lm,a],[l,q,m,q,lm,w],[r,q,r,q]],
              
            },
            {
                name: '_klomza',
                fr: 'kilometre',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,m,q,rm,w],[lm,w,m,q]],
                
            },
            {
                name: '_klogma',
                fr: 'kilogramme',
                path: [[lm,a,rm,a,rm,w,lm,w,l,q,m,q,rm,w],[lm,w,m,q],[r,q,r,q]],
               
            },
            {
                name: '_tli',
                fr: 'jusque',
                path: [[l,q,lm,a,lm,w,m,q,r,q],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_kadwa',
                fr: 'jour',
                path: [[lm,a,rm,w],[l,q,rm,a,lm,a,l,q,lm,w,rm,w,r,q,m,q,lm,w]],
                
            },
            {
                name: '_3go',
                fr: 'jouer',
                path: [[lm,a,lm,a],[l,q,rm,a],[lm,w,m,q,rm,w],[r,q,r,q]],
               
            },
            {
                name: '_ntew',
                fr: 'interrompre',
                path: [[l,q,m,q,lm,a,lm,w,m,q,r,q,rm,a,rm,w]],
                
            },
            {
                name: '_nsa',
                fr: 'interieur',
                path: [[lm,a,rm,a,m,q,rm,w,lm,w],[l,q,l,q],[r,q,r,q]],
               
            },
            {
                name: '_kea',
                fr: 'intelligence',
                path: [[lm,a,rm,w],[lm,w,rm,a,l,q,m,q,rm,a],[lm,a,r,q,lm,w,lm,a]],
               
            },
            {
                name: '_chra',
                fr: 'insulter',
                path: [[l,q,rm,a,rm,w,lm,a],[lm,w,lm,w],[r,q,r,q]],
                
            },
            {
                name: '_pse',
                fr: 'insuffire',
                path: [[lm,w,l,q,lm,a,rm,a,r,q,rm,w],[l,q,r,q],[lm,a,m,q,rm,a]],
               
            },
            {
                name: '_skew',
                fr: 'insecte',
                path: [[m,q,l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q],[rm,a,rm,w]],
                
            },
            {
                name: '_nfo',
                fr: 'informer',
                path: [[l,q,lm,a,rm,w,r,q],[lm,w,lm,w],[rm,a,rm,a]],
               
            },
            {
                name: '_ngla',
                fr: 'inegaler',
                path: [[lm,a,rm,a,lm,w,rm,w],[l,q,r,q]],
                
            },
            {
                name: '_tso',
                fr: 'indiquer',
                path: [[lm,a,m,q,rm,a,lm,a,lm,w],[l,q,l,q],[r,q,r,q],[rm,w,rm,w]],
                
            },
            {
                name: '_knea',
                fr: 'incliner',
                path: [[m,q,l,q,lm,a,rm,a,r,q],[rm,a,rm,w],[lm,w,lm,w]],
                
            },
            {
                name: '_kpie',
                fr: 'inachever',
                path: [[l,q,lm,w,rm,a,r,q,rm,w,lm,a]],
                
            },
            {
                name: '_fo',
                fr: 'imperatif',
                path: [[rm,w,rm,a,lm,a,lm,w,r,q,lm,a],[l,q,l,q],[m,q,m,q]],
                
            },
            {
                name: '_stoia',
                fr: 'imaginer',
                path: [[r,q,l,q,rm,a,rm,w,l,q],[lm,a,m,q,lm,w]],
               
            },
            {
                name: '_3ne',
                fr: 'jeune',
                path: [[m,q,l,q,rm,a,m,q],[lm,a,rm,w],[lm,w,lm,w],[r,q,r,q]],
                
            },
            {
                name: '_dea',
                fr: 'idee',
                path: [[m,q,l,q,rm,a,m,q,rm,w],[lm,w,r,q],[lm,a,lm,a]],
                
            },
            {
                name: '_si',
                fr: 'ici',
                path: [[lm,w,l,q,lm,a,rm,a,rm,w],[m,q,rm,w,r,q]],
               
            },
            {
                name: '_r3a',
                fr: 'jaune',
                path: [[lm,a,rm,a,r,q],[l,q,l,q],[m,q,m,q],[lm,w,lm,w],[rm,w,rm,w]],
                
            },
            {
                name: '_lgae',
                fr: 'jambe',
                path: [[lm,w,lm,a,r,q,m,q,lm,w],[l,q,rm,a],[rm,w,rm,w]],
               
            },
            {
                name: '_fwo',
                fr: 'hors',
                path: [[lm,w,rm,a,r,q,l,q,lm,a,rm,w]],
                
            },
            {
                name: '_rzo',
                fr: 'horizon',
                path: [[lm,w,l,q,r,q,rm,w],[lm,a,lm,a],[rm,a,rm,a]],
                
            },
            {
                name: '_hro',
                fr: 'heure',
                path: [[l,q,r,q],[lm,a,lm,w],[rm,a,rm,w]],
                
            },
            {
                name: '_fro',
                fr: 'hermaphrodite',
                path: [[lm,a,rm,w,lm,w,m,q,r,q,rm,w],[l,q,rm,a]],
                
            },
            {
                name: '_pa',
                fr: 'haut',
                path: [[lm,a,rm,a],[l,q,l,q],[m,q,m,q],[r,q,r,q],[lm,w,lm,w],[rm,w,rm,w]],
               
            },
            {
                name: '_kio',
                fr: 'habiter',
                path: [[lm,a,lm,w,rm,w,rm,a,lm,a,l,q,r,q,rm,a]],
                
            },
            {
                name: '_dvie',
                fr: 'habiller',
                path: [[lm,w,lm,a,rm,a,rm,w,lm,w,l,q,r,q,rm,w]],
               
            },
            {
                name: '_kwe',
                fr: 'grouper',
                path: [[l,q,rm,a,lm,w],[r,q,lm,a,rm,w]],
               
            },
            {
                name: '_gro',
                fr: 'grossir',
                path: [[l,q,lm,a,lm,w,l,q,r,q,rm,w,m,q,rm,a,r,q]],
                
            },
            {
                name: '_gva',
                fr: 'graviter',
                path: [[rm,a,lm,a,l,q,lm,w,rm,w,r,q,m,q],[lm,a,lm,w]],
                
            },
            {
                name: '_gma',
                fr: 'gramme',
                path: [[lm,a,rm,a,rm,w,lm,w,l,q,m,q,lm,w],[r,q,r,q]],
                
            },
            {
                name: '_gra',
                fr: 'graisser',
                path: [[m,q,l,q,lm,w,rm,w,r,q,rm,a,lm,a,rm,w]],
                
            },
            {
                name: '_tsae',
                fr: 'goûter',
                path: [[lm,a,l,q,lm,w,rm,w],[rm,a,m,q,r,q]],
                
            },
            {
                name: '_sla',
                fr: 'glisser',
                path: [[lm,a,lm,a],[l,q,rm,a,m,q,r,q],[lm,w,rm,w]],
                
            },
            {
                name: '_gzai',
                fr: 'gaz',
                path: [[lm,w,m,q,rm,w],[l,q,l,q],[lm,a,lm,a],[rm,a,rm,a],[r,q,r,q]],
                
            },
            {
                name: '_dray',
                fr: 'gauche',
                path: [[lm,a,lm,w],[l,q,l,q],[m,q,m,q],[rm,a,rm,a],[rm,w,rm,w]],
               
            },
            {
                name: '_kpae',
                fr: 'garder',
                path: [[lm,a,m,q,rm,a,lm,a,lm,w,l,q,r,q,rm,w,rm,a]],
              
            },
            {
                name: '_ftu',
                fr: 'futur',
                path: [[l,q,r,q],[lm,a,r,q,lm,w],[rm,a,rm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_fzo',
                fr: 'fusionner',
                path: [[l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q,r,q]],
               
            },
            {
                name: '_ray',
                fr: 'fuir',
                path: [[l,q,lm,w,rm,a],[lm,a,r,q],[m,q,rm,w]],
               
            },
            {
                name: '_ftae',
                fr: 'frustrer',
                path: [[lm,a,rm,a,r,q],[rm,a,lm,w],[l,q,rm,w]],
                
            },
            {
                name: '_fry',
                fr: 'fruit',
                path: [[lm,w,rm,a,lm,a,rm,w],[l,q,r,q]],
              
            },
            {
                name: '_gry',
                fr: 'frapper',
                path: [[lm,a,r,q,l,q],[rm,a,lm,w],[m,q,rm,w]],
               
            },
            {
                name: '_gew',
                fr: 'fort',
                path: [[l,q,lm,a,m,q],[lm,a,lm,w],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w]],
                
            },
            {
                name: '_fai',
                fr: 'former',
                path: [[rm,a,lm,a,lm,w],[l,q,m,q],[r,q,rm,w]],
               
            },
            {
                name: '_fkai',
                fr: 'fonctionner',
                path: [[lm,a,rm,w,rm,a,lm,a,lm,w,rm,w],[lm,w,rm,a],[l,q,r,q]],
                
            },
            {
                name: '_blea',
                fr: 'fleurir',
                path: [[lm,a,l,q,rm,w],[rm,a,r,q,lm,w],[m,q,m,q]],
               
            },
            {
                name: '_fni',
                fr: 'finir',
                path: [[l,q,lm,a,r,q,lm,w,l,q],[rm,a,rm,w],[m,q,m,q]],
               
            },
            {
                name: '_brea',
                fr: 'filtrer',
                path: [[l,q,r,q,lm,a,lm,w,r,q],[rm,a,rm,w]],
               
            },
            {
                name: '_fli',
                fr: 'fil',
                path: [[l,q,lm,a,lm,w,rm,a,r,q],[rm,w,rm,w]],
                
            },
            {
                name: '_lvia',
                fr: 'feuille',
                path: [[lm,a,lm,w,r,q],[l,q,rm,w],[rm,a,m,q]],
               
            },
            {
                name: '_frey',
                fr: 'feu',
                path: [[lm,w,rm,w,l,q,r,q,lm,a],[rm,a,rm,a]],
            
            },
            {
                name: '_kloi',
                fr: 'fermer',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w],[rm,a,rm,w],[l,q, m,q]],
              
            },
            {
                name: '_mna',
                fr: 'femelle',
                path: [[lm,a,m,q,r,q,rm,w,lm,w,m,q],[l,q,rm,a]],
              
            },
            {
                name: '_kti',
                fr: 'felin',
                path: [[l,q,rm,a,m,q,lm,a,r,q,rm,w,lm,w,l,q]],
               
            },
            {
                name: '_nrea',
                fr: 'faux',
                path: [[l,q,lm,a,rm,w],[lm,w,lm,w],[rm,a,rm,a],[r,q,r,q]],
               
            },
            {
                name: '_sga',
                fr: 'faucher',
                path: [[l,q,m,q,rm,a,r,q],[lm,a,m,q],[rm,a,rm,w],[lm,w,lm,w]],
                
            },
            {
                name: '_fa',
                fr: 'faire',
                path: [[m,q,lm,a,rm,a,m,q,r,q,rm,w,lm,w,l,q,m,q]],
                
            },
            {
                name: '_vea',
                fr: 'faible',
                path: [[lm,a,lm,w],[l,q,lm,w,m,q],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w]],
                
            },
            {
                name: '_fsa',
                fr: 'face',
                path: [[l,q,rm,w,rm,a,l,q,lm,w,rm,w,r,q,rm,a,l,q],[lm,a,m,q]],
               
            },
            {
                name: '_stre',
                fr: 'extremite',
                path: [[r,q,rm,a,rm,w,r,q],[lm,a,lm,a],[l,q,l,q],[m,q,m,q],[lm,w,lm,w]],
               
            },
            {
                name: '_stra',
                fr: 'extraire',
                path: [[l,q,r,q,rm,a,lm,w,l,q],[lm,a,lm,w],[rm,a,rm,w]],
               
            },
            {
                name: '_tra',
                fr: 'exterieur',
                path: [[rm,a,lm,a,m,q,lm,w,rm,w],[l,q,l,q],[r,q,r,q]],
                
            },
            {
                name: '_vlye',
                fr: 'evoluer',
                path: [[l,q,l,q],[lm,a,lm,w],[rm,a,r,q,rm,w,m,q,rm,a]],
               
            },
            {
                name: '_vne',
                fr: 'evenement',
                path: [[r,q,rm,a,rm,w,r,q,m,q,lm,a,lm,w,m,q,l,q],[rm,a,lm,a,l,q,lm,w,rm,w]],
                
            },
            {
                name: '_stea',
                fr: 'etoile',
                path: [[lm,a,r,q,lm,w,lm,a],[rm,a,rm,w,l,q,rm,a],[m,q,m,q]],
                
            },
            {
                name: '_meama',
                fr: 'etant',
                path: [[l,q,lm,a,rm,w,r,q,rm,a,l,q,lm,w,r,q]],
                
            },
            {
                name: '_te',
                fr: 'et',
                path: [[lm,a,l,q,lm,w],[l,q,m,q],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_bia',
                fr: 'equilibrer',
                path: [[lm,a,rm,a],[l,q,m,q,lm,w,rm,w,m,q,r,q]],
                
            },
            {
                name: '_kdea',
                fr: 'equide',
                path: [[lm,a,rm,a,rm,w,lm,w,rm,a],[m,q,r,q],[l,q,l,q]],
               
            },
            {
                name: '_nto',
                fr: 'entre',
                path: [[lm,a,rm,a,lm,w,rm,w],[l,q,rm,a],[lm,w,r,q]],
                
            },
            {
                name: '_srye',
                fr: 'entourer',
                path: [[m,q,m,q],[l,q,lm,a],[rm,a,r,q],[lm,w,rm,w]],
               
            },
            {
                name: '_sko',
                fr: 'entendre',
                path: [[l,q,l,q],[r,q,m,q,rm,a,lm,a,lm,a,lm,w,rm,w,m,q]],
                
            },
            {
                name: '_nki',
                fr: 'entailler',
                path: [[lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,m,q],[r,q,r,q]],
               
            },
            {
                name: '_kdie',
                fr: 'enfant',
                path: [[lm,w,rm,a,rm,w,lm,w],[l,q,m,q],[lm,a,r,q]],
                
            },
            {
                name: '_3ia',
                fr: 'energie',
                path: [[lm,a,r,q,l,q,rm,w,lm,w,rm,a]],
               
            },
            {
                name: '_ni',
                fr: 'bas',
                path: [[lm,w,rm,w],[lm,a,lm,a],[rm,a,rm,a],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
               
            },
            {
                name: '_nwo',
                fr: 'en',
                path: [[lm,w,l,q,m,q,lm,w,lm,a,rm,a,rm,w,lm,w],[r,q,r,q]],
                
            },
            {
                name: '_pkoi',
                fr: 'empaqueter',
                path: [[l,q,rm,a,rm,w],[lm,w,l,q,lm,a,rm,a,r,q,rm,w,lm,w,m,q],[lm,a,m,q,r,q]],
                
            },
            {
                name: '_skoi',
                fr: 'emotion',
                path: [[lm,a,rm,w,lm,w,m,q],[rm,a,l,q,lm,a,rm,a,r,q]],
                
            },
            {
                name: '_vzu',
                fr: 'electricite',
                path: [[l,q,lm,a,lm,w,rm,a,rm,w,r,q]],
             
            },
            {
                name: '_gla',
                fr: 'egaler',
                path: [[lm,a,rm,a],[l,q,r,q],[lm,w,rm,w]],
                
            },
            {
                name: '_fke',
                fr: 'effet',
                path: [[r,q,l,q,lm,a,rm,a,r,q,rm,w],[lm,a,m,q],[lm,w,lm,w]],
                
            },
            {
                name: '_to',
                fr: 'eau',
                path: [[lm,a,rm,a],[l,q,lm,w,m,q,rm,w,r,q]],
                
            },
            {
                name: '_drye',
                fr: 'durer',
                path: [[m,q,lm,a,r,q,lm,w,m,q],[l,q,l,q],[rm,a,rm,a],[rm,w,rm,w]],
               
            },
            {
                name: '_drei',
                fr: 'dur',
                path: [[l,q,lm,w,lm,a,rm,a,rm,w,r,q],[lm,a,m,q,rm,a]],
               
            },
            {
                name: '_drya',
                fr: 'droite',
                path: [[l,q,l,q],[lm,a,lm,a],[lm,w,lm,w],[m,q,m,q],[rm,a,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_dro',
                fr: 'droit',
                path: [[l,q,l,q],[lm,a,lm,w],[m,q,m,q],[rm,a,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_rdwa',
                fr: 'draper',
                path: [[lm,w,l,q,lm,a,r,q,rm,w,lm,w,m,q,r,q],[rm,a,rm,a]],
                
            },
            {
                name: '_rmi',
                fr: 'dormir',
                path: [[l,q,rm,a,r,q,rm,w,l,q],[m,q,lm,w,lm,a,m,q]],
                
            },
            {
                name: '_glo',
                fr: 'dont',
                path: [[rm,a,lm,a,lm,w,m,q,l,q],[r,q,r,q],[rm,w,rm,w]],
              
            },
            {
                name: '_dku',
                fr: 'donc',
                path: [[rm,a,lm,a,lm,w,rm,w],[m,q,r,q],[l,q,l,q]],
               
            },
            {
                name: '_dvi',
                fr: 'diviser',
                path: [[lm,w,rm,a],[l,q,l,q],[lm,a,lm,a],[r,q,r,q],[rm,w,rm,w]],
                
            },
            {
                name: '_dme',
                fr: 'dimensionner',
                path: [[lm,a,lm,w,rm,w,r,q,rm,a,lm,a],[l,q,l,q],[m,q,m,q]],
                
            },
            {
                name: '_dvey',
                fr: 'differer',
                path: [[l,q,l,q],[lm,a,rm,w,r,q,rm,a,lm,w]],
                
            },
            {
                name: '_dvo',
                fr: 'devoir',
                path: [[lm,w,lm,a,rm,a,rm,w],[lm,a,m,q,rm,a],[l,q,l,q],[r,q,r,q]],
               
            },
            {
                name: '_dva',
                fr: 'devant',
                path: [[l,q,r,q,rm,a,rm,w,r,q],[lm,a,lm,a],[lm,w,lm,w]],
               
            },
            {
                name: '_dzye',
                fr: 'detruire',
                path: [[rm,a,rm,w],[m,q,r,q,lm,a,m,q],[l,q,lm,w]],
                
            },
            {
                name: '_nbia',
                fr: 'desequilibrer',
                path: [[lm,a,rm,a,l,q,r,q],[m,q,rm,w,lm,w,m,q]],
                
            },
            {
                name: '_dre',
                fr: 'derriere',
                path: [[r,q,l,q,lm,a,lm,w,l,q],[rm,a,rm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_fmai',
                fr: 'depuis',
                path: [[r,q,l,q],[lm,a,l,q,lm,w],[rm,a,rm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_chna',
                fr: 'demasquer',
                path: [[lm,a,l,q,lm,w,r,q],[rm,a,r,q,rm,w,l,q],[m,q,m,q]],
             
            },
            {
                name: '_dle',
                fr: 'delicieux',
                path: [[l,q,r,q,rm,a,m,q,lm,a,l,q,lm,w,rm,w,r,q]],
                
            },
            {
                name: '_d3a',
                fr: 'dejà',
                path: [[lm,a,m,q,r,q,rm,a,rm,w,r,q],[lm,w,m,q],[l,q,l,q]],
                
            },
            {
                name: '_klue',
                fr: 'defaut',
                path: [[lm,a,r,q,rm,w,rm,a,l,q,m,q],[lm,w,lm,w]],
               
            },
            {
                name: '_dfo',
                fr: 'defaire',
                path: [[rm,a,lm,w,lm,a,rm,a,r,q,lm,w],[l,q,rm,w]],
               
            },
            {
                name: '_3i',
                fr: 'decouvrir',
                path: [[l,q,lm,a,lm,w,l,q],[r,q,rm,w,rm,a,r,q],[m,q,m,q]],
              
            },
            {
                name: '_ktye',
                fr: 'decouper',
                path: [[lm,a,lm,w],[l,q,rm,a],[m,q,r,q,rm,w,m,q]],
              
            },
            {
                name: '_dsimza',
                fr: 'decimere',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w,m,q,l,q]],
                
            },
            {
                name: '_dsigma',
                fr: 'decigramme',
                path: [[lm,a,rm,a,rm,w,lm,w,m,q,l,q],[r,q,r,q]],
                
            },
            {
                name: '_trie',
                fr: 'dechet',
                path: [[lm,a,rm,a,l,q],[m,q,lm,w],[r,q,rm,w]],
                
            },
            {
                name: '_da',
                fr: 'de',
                path: [[l,q,lm,a,rm,a],[lm,a,m,q],[lm,w,lm,w],[rm,w,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_dfie',
                fr: 'dauphin',
                path: [[rm,a,l,q,lm,a,m,q,l,q],[lm,a,rm,a,rm,w,r,q],[lm,w,lm,w]],
                
            },
            {
                name: '_dse',
                fr: 'danser',
                path: [[l,q,rm,a,rm,w],[lm,a,r,q],[lm,w,m,q]],
               
            },
            {
                name: '_di',
                fr: 'dans',
                path: [[l,q,lm,a,rm,w,lm,w,rm,a,r,q,l,q]],
               
            },
            {
                name: '_d3e',
                fr: 'danger',
                path: [[m,q,lm,a,r,q,lm,w,lm,a],[l,q,l,q],[rm,a,rm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_dwa',
                fr: 'cycle',
                path: [[rm,a,lm,a,l,q,lm,w,rm,w,r,q,m,q,lm,w]],
                
            },
            {
                name: '_kraw',
                fr: 'crustace',
                path: [[lm,a,lm,w,l,q,lm,a,rm,a,r,q,rm,w,rm,a],[m,q,m,q]],
               
            },
            {
                name: '_grae',
                fr: 'croître',
                path: [[l,q,lm,w,rm,w],[lm,a,lm,w,r,q],[rm,a,lm,w]],
                
            },
            {
                name: '_kru',
                fr: 'croiser',
                path: [[lm,a,r,q],[rm,a,l,q],[m,q,m,q],[lm,w,lm,w],[rm,w,rm,w]],
               
            },
            {
                name: '_kro',
                fr: 'croire',
                path: [[lm,a,rm,a,l,q,rm,w,lm,w],[rm,a,m,q,rm,w],[r,q,r,q]],
              
            },
            {
                name: '_kri',
                fr: 'crier',
                path: [[lm,a,m,q],[l,q,lm,w,r,q,rm,a,rm,w]],
                
            },
            {
                name: '_kvae',
                fr: 'couvrir',
                path: [[lm,a,lm,w,rm,w,rm,a,m,q,lm,a,l,q,r,q,rm,a]],
           
            },
            {
                name: '_kry',
                fr: 'court',
                path: [[l,q,lm,w,r,q,rm,w],[lm,a,lm,a],[m,q,m,q],[rm,a,rm,a]],
               
            },
            {
                name: '_krye',
                fr: 'courrier',
                path: [[l,q,m,q,rm,a,l,q,lm,w,r,q,rm,a],[lm,a,lm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_klo',
                fr: 'colorer',
                path: [[r,q,l,q,rm,a,lm,a,lm,w,rm,w,l,q]],
               
            },
            {
                name: '_kte',
                fr: 'cote',
                path: [[lm,w,r,q,rm,w,lm,w,l,q,rm,a,r,q],[lm,a,m,q]],
                
            },
            {
                name: '_bdi',
                fr: 'corps',
                path: [[l,q,lm,a,lm,w,r,q,rm,a,rm,w,l,q],[m,q,m,q]],
           
            },
            {
                name: '_sno',
                fr: 'contre',
                path: [[rm,a,r,q,rm,w],[l,q,m,q],[lm,a,lm,a],[lm,w,lm,w]],
               
            },
            {
                name: '_kpoi',
                fr: 'continuer',
                path: [[r,q,rm,a,rm,w,r,q,m,q],[lm,a,r,q,lm,w],[l,q,l,q]],
              
            },
            {
                name: '_ksea',
                fr: 'construire',
                path: [[rm,a,rm,w],[r,q,lm,a,l,q,m,q,lm,w]],
                
            },
            {
                name: '_knoi',
                fr: 'connecter',
                path: [[lm,a,l,q,lm,w],[l,q,r,q],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_kno',
                fr: 'connaitre',
                path: [[m,q,lm,w,l,q,lm,a,rm,a,r,q,lm,w,rm,w]],
               
            },
            {
                name: '_kfay',
                fr: 'confondre',
                path: [[rm,a,r,q,rm,w],[l,q,r,q],[m,q,lm,a,l,q,lm,w,lm,a]],
                
            },
            {
                name: '_troi',
                fr: 'conflit',
                path: [[l,q,lm,w,rm,a],[r,q,rm,w,lm,a]],
                
            },
            {
                name: '_hi',
                fr: 'condition',
                path: [[rm,a,l,q,rm,w],[lm,a,r,q,lm,w],[m,q,m,q]],
                
            },
            {
                name: '_kteu',
                fr: 'compter',
                path: [[m,q,lm,a,lm,w,m,q,r,q],[l,q,rm,a,rm,w,l,q]],
                
            },
            {
                name: '_plea',
                fr: 'complexe',
                path: [[l,q,l,q],[lm,a,m,q,lm,w],[m,q,rm,a,rm,w,r,q,m,q]],
               
            },
            {
                name: '_haw',
                fr: 'comment',
                path: [[lm,a,rm,a,l,q,rm,w],[lm,w,rm,w,r,q],[m,q,m,q]],
              
            },
            {
                name: '_fta',
                fr: 'commencer',
                path: [[m,q,l,q,lm,a,r,q,lm,w,l,q],[rm,a,rm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_ki',
                fr: 'cle',
                path: [[lm,a,lm,w,m,q],[l,q,r,q,rm,w],[rm,a,rm,a]],
                
            },
            {
                name: '_rkai',
                fr: 'classer',
                path: [[lm,a,rm,a],[l,q,l,q],[lm,w,rm,w,m,q,r,q]],
                
            },
            {
                name: '_srie',
                fr: 'circuit',
                path: [[l,q,lm,a,lm,w,rm,a,rm,w,r,q,l,q]],
                
            },
            {
                name: '_kwo',
                fr: 'couper',
                path: [[lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,r,q]],
                
            },
            {
                name: '_skai',
                fr: 'ciel',
                path: [[lm,w,rm,a,lm,a,rm,w],[l,q,l,q],[r,q,r,q]],
               
            },
            {
                name: '_swa',
                fr: 'choisir',
                path: [[lm,a,lm,w,rm,w,rm,a],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
                
            },
            {
                name: '_sdae',
                fr: 'chaque',
                path: [[l,q,lm,a,m,q,l,q],[rm,w,r,q],[lm,w,lm,w],[rm,a,rm,a]],
                
            },
            {
                name: '_sni',
                fr: 'chanter',
                path: [[lm,a,l,q,lm,w,rm,w,r,q],[l,q,rm,w,m,q,l,q],[rm,a,rm,a]],
                
            },
            {
                name: '_fgy',
                fr: 'champignon',
                path: [[l,q,rm,w,rm,a,r,q,m,q,rm,a],[lm,a,lm,a],[lm,w,lm,w]],
                
            },
            {
                name: '_fle',
                fr: 'chair',
                path: [[l,q,rm,a,m,q,rm,w,l,q,lm,a,rm,a,rm,w,lm,w,l,q],[r,q,r,q]],
                
            },
            {
                name: '_bzea',
                fr: 'cervide',
                path: [[lm,a,rm,w,lm,w,r,q],[l,q,m,q,rm,a]],
                
            },
            {
                name: '_srea',
                fr: 'cereale',
                path: [[rm,w,l,q,lm,w,rm,w,r,q,rm,a,rm,w],[lm,a,m,q]],
               
            },
            {
                name: '_tru',
                fr: 'cercler',
                path: [[m,q,l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q]],
                
            },
            {
                name: '_sye',
                fr: 'centrer',
                path: [[lm,a,rm,w],[lm,w,rm,a],[l,q,r,q]],
                
            },
            {
                name: '_stimza',
                fr: 'centimetre',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w,m,q],[l,q,l,q]],
               
            },
            {
                name: '_stigma',
                fr: 'centigramme',
                path: [[lm,a,rm,a,rm,w,lm,w,m,q],[l,q,l,q],[r,q,r,q]],
               
            },
            {
                name: '_sley',
                fr: 'cellule',
                path: [[rm,a,lm,a,l,q,lm,w,rm,w],[m,q,m,q],[r,q,r,q]],
                
            },
            {
                name: '_de',
                fr: 'ce',
                path: [[lm,a,rm,a],[lm,w,rm,w],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
               
            },
            {
                name: '_kzo',
                fr: 'causer',
                path: [[rm,a,lm,a,l,q,lm,w],[l,q,r,q],[lm,a,m,q],[rm,w,rm,w]],
               
            },
            {
                name: '_gzo',
                fr: 'car',
                path: [[lm,a,r,q,lm,w,rm,w],[l,q,l,q],[m,q,m,q],[rm,a,rm,a]],
                
            },
            {
                name: '_knew',
                fr: 'canonner',
                path: [[lm,a,l,q,rm,w,r,q],[lm,w,m,q],[rm,a,rm,a]],
                
            },
            {
                name: '_klio',
                fr: 'canin',
                path: [[rm,a,lm,a,lm,w,m,q,r,q],[l,q,rm,w]],
               
            },
            {
                name: '_rko',
                fr: 'caillou',
                path: [[lm,a,rm,w,lm,w,lm,a,r,q,rm,w],[l,q,l,q],[rm,a,rm,a]],
                
            },
            {
                name: '_glio',
                fr: 'but',
                path: [[m,q,l,q,lm,a,rm,a,rm,w],[lm,w,rm,w,r,q]],
               
            },
            {
                name: '_bze',
                fr: 'business',
                path: [[rm,a,lm,a,l,q,r,q,rm,w,lm,w],[lm,a,rm,w]],
                
            },
            {
                name: '_bra',
                fr: 'bras',
                path: [[lm,w,lm,a,m,q,r,q,lm,w],[l,q,rm,w],[rm,a,rm,a]],
                
            },
            {
                name: '_dvea',
                fr: 'brancher',
                path: [[lm,a,rm,w],[l,q,m,q],[lm,w,rm,w,rm,a],[r,q,r,q]],
                
            },
            {
                name: '_bo',
                fr: 'bovide',
                path: [[lm,a,rm,w],[m,q,rm,a],[lm,w,r,q],[l,q,l,q]],
                
            },
            {
                name: '_bu',
                fr: 'boucler',
                path: [[l,q,m,q,rm,a,lm,a,lm,w,rm,w,r,q]],
               
            },
            {
                name: '_blu',
                fr: 'bleu',
                path: [[lm,w,rm,w,r,q],[l,q,l,q],[lm,a,lm,a],[m,q,m,q],[rm,a,rm,a]],
                
            },
            {
                name: '_keo',
                fr: 'bien',
                path: [[l,q,lm,w,rm,a],[rm,w,r,q],[lm,a,lm,a]],
                
            },
            {
                name: '_bly',
                fr: 'baleine',
                path: [[l,q,m,q,lm,a,l,q,lm,w,r,q,rm,w,rm,a,lm,a],[m,q,lm,w]],
                
            },
            {
                name: '_zaw',
                fr: 'aussi',
                path: [[lm,a,lm,w,l,q,lm,a,rm,w,r,q,rm,a,lm,w],[rm,a,rm,w]],
                
            },
            {
                name: '_vi',
                fr: 'avec',
                path: [[lm,w,lm,a,rm,w,rm,a,lm,w],[l,q,r,q]],
               
            },
            {
                name: '_ntea',
                fr: 'avant',
                path: [[m,q,l,q,lm,a,lm,w,l,q],[rm,a,rm,a],[rm,w,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_rpa',
                fr: 'attraper',
                path: [[l,q,r,q,rm,a,m,q],[lm,a,lm,w],[rm,w,rm,w]],
                
            },
            {
                name: '_spea',
                fr: 'attendre',
                path: [[l,q,lm,a,lm,w],[m,q,rm,a,rm,w],[r,q,r,q]],
                
            },
            {
                name: '_tmei',
                fr: 'atome',
                path: [[lm,w,rm,a,rm,w],[l,q,r,q],[lm,a,lm,a]],
               
            },
            {
                name: '_ktea',
                fr: 'arreter',
                path: [[l,q,r,q],[lm,a,lm,w],[rm,a,r,q,rm,w]],
                
            },
            {
                name:'_rkye',
                fr: 'arachnide',
                path: [[l,q,lm,a,rm,a,r,q,rm,w],[m,q,rm,a],[lm,a,lm,w]],
                
            },
            {
                name: '_ftea',
                fr: 'apres',
                path: [[r,q,rm,a,rm,w,r,q,m,q],[lm,a,lm,a],[l,q,l,q],[lm,w,lm,w]],
                
            },
            {
                name: '_znie',
                fr: 'appuyer',
                path: [[lm,a,lm,w,rm,w,m,q,l,q,rm,a,r,q]],
                
            },
            {
                name: '_zai',
                fr: 'apparaître',
                path: [[lm,w,m,q,rm,w,lm,w,l,q,lm,a,rm,a,r,q,rm,w]],
               
            },
            {
                name: '_piz',
                fr: 'apaiser',
                path: [[l,q,lm,a,lm,w,m,q,r,q],[rm,a,rm,a],[rm,w,rm,w]],
               
            },
            {
                name: '_kpaw',
                fr: 'antenne',
                path: [[lm,a,l,q,rm,w,m,q,lm,w,r,q,rm,a]],
                
            },
            {
                name: '_pkia',
                fr: 'animal',
                path: [[rm,a,lm,a,l,q,lm,w,rm,w,m,q,rm, a, l,q],[r,q,r,q]],
                
            },
            {
                name: '_glei',
                fr: 'angle',
                path: [[lm,a,rm,a,rm,w],[l,q,l,q],[lm,w,lm,w],[m,q,m,q],[r,q,r,q]],
                
            },
            {
                name: '_mrya',
                fr: 'amplifier',
                path: [[l,q,rm,w,rm,a,r,q,lm,w,l,q,rm,a],[lm,a,m,q]],
                
            },
            {
                name: '_mre',
                fr: 'amer',
                path: [[l,q,lm,a,m,q,rm,a,r,q,l,q],[lm,w,rm,w]],
                
            },
            {
                name: '_prba',
                fr: 'ame',
                path : [[lm,a,r,q,lm,w,lm,a,m,q,r,q],[lm,w,m,q],[l,q,l,q],[rm,a,rm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_tae',
                fr: 'alterner',
                path: [[lm,a,rm,a,l,q],[m,q,m,q],[rm,w,lm,w,r,q]],
                
            },
            {
                name: '_slio',
                fr: 'alors',
                path: [[lm,a,m,q,r,q],[rm,a,r,q,rm,w],[l,q,l,q],[lm,w,lm,w]],
                
            },
            {
                name: '_le',
                fr: 'aller',
                path: [[r,q,rm,a,rm,w,r,q,m,q,lm,a,lm,w,m,q,l,q]],
                
            },
            {
                name: '_hio',
                fr: 'alleger',
                path: [[lm,a,rm,a],[l,q,l,q],[r,q,r,q],[lm,w,m,q,rm,w]],
               
            },
            {
                name: '_lea',
                fr: 'alea',
                path: [[l,q,r,q,lm,w],[lm,a,lm,a],[rm,a,rm,w]],
                
            },
            {
                name: '_fsu',
                fr: 'ajuster',
                path: [[l,q,lm,a,rm,w,r,q,rm,a,lm,w,l,q,r,q]],
               
            },
            {
                name: '_hae',
                fr: 'air',
                path: [[lm,a,rm,a,r,q],[l,q,m,q,rm,w],[lm,w,rm,a]],
               
            },
            {
                name: '_kli',
                fr: 'qualite',
                path: [[rm,w,l,q,lm,a,lm,w,r,q,m,q],[rm,a,rm,a]],
                
            },
            {
                name: '_nmae',
                fr: 'nombre',
                path: [[lm,w,lm,a,rm,w,rm,a],[l,q,l,q],[r,q,r,q]],
                
            },
            {
                name: '_zno',
                fr: '11',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a,m,q,r,q],[m,q,lm,w,lm,a,r,q]],
                
            },
            {
                name: '_dza',
                fr: '10',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a,m,q,r,q],[m,q,lm,w,lm,a]],
                
            },
            {
                name: '_nwa',
                fr: '9',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a,m,q,r,q],[lm,w,m,q]],
                
            },
            {
                name: '_sme',
                fr: 'identique',
                path: [[l,q,lm,a,rm,w,r,q,rm,a,lm,w,l,q]],
                
            },
            {
                name: '_tsio',
                fr: '8',
                path: [[l,q,lm,a,rm,w,r,q,rm,a,lm,w,l,q]],
                
            },
            {
                name: '_stei',
                fr: '7',
                path: [[l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q,r,q]],
                
            },
            {
                name: '_ksi',
                fr: '6',
                path: [[l,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q],[m,q,m,q]],
                
            },
            {
                name: '_foi',
                fr: '5',
                path: [[lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,r,q]],
                
            },
            {
                name: '_ktu',
                fr: '4',
                path: [[lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,l,q],[m,q,m,q],[r,q,r,q]],
               
            },
            {
                name: '_srei',
                fr: '3',
                path: [[lm,w,lm,a,r,q, lm, w],[l,q,l,q],[m,q,m,q],[rm,a,rm,a],[rm,w,rm,w]],
               
            },
            {
                name: '_du',
                fr: '2',
                path: [[lm,w,lm,a,r,q],[l,q,l,q],[m,q,m,q],[rm,a,rm,a],[rm,w,rm,w]],
                
            },
            {
                name: '_kfa',
                fr: '1',
                path: [[lm,a,lm,w],[l,q,l,q],[m,q,m,q],[rm,a,rm,a],[r,q,r,q],[rm,w,rm,w]],
               
            },
            {
                name: '_sro',
                fr: '0',
                path: [[lm,a,rm,w],[lm,w,rm,a],[l,q,r,q]],
                
            },
            {
                name: ',',
                fr: ',',
                path: [[rm,a,m,q,rm,w],[lm,a,lm,a],[l,q,l,q],[lm,w,lm,w],[r,q,r,q]],
                
            },
            {
                name: '!',
                fr: '!',
                path: [[lm,a,m,q],[l,q,lm,w],[rm,a,r,q],[rm,w,rm,w]],
                
            },
            {
                name: '?',
                fr: '?',
                path: [[lm,a,rm,a,l,q,rm,w],[lm,w,lm,w],[m,q,m,q],[r,q,r,q]],
               
            },
            {
                name: '.',
                fr: '.',
                path: [[m,q,m,q],[m,q,m,q]],
                
            },
            {
                name: '_mea',
                fr: 'determiner',
                path: [[lm,a,rm,w],[l,q,rm,a],[lm,w,r,q]],
                
            },
            {
                name: '_ma',
                fr: 'etre',
                path: [[lm,a,l,q,lm,w],[m,q,m,q],[rm,a,r,q,rm,w]],
              
            },
            {
                name: '_kde',
                fr: 'adolescent',
                path: [[rm,a,lm,w],[m,q,rm,w],[l,q,r,q],[lm,a,lm,a]],
               
            },
            {
                name: '_dly',
                fr: 'adulte',       
                path: [[r,q,lm,a,rm,a,lm,w,lm,a],[m,q,rm,w],[l,q,l,q]],      
               
            },        
            {        
                name: '_pfae',        
                fr: 'agir',        
                path: [[l,q,lm,w,lm,a,r,q,lm,w],[rm,a,lm,a],[rm,w,r,q],[m,q,m,q]],
                
            },
            {
                name: '_dna',
                fr: 'adn',
                path: [[rm,a,lm,a,l,q,lm,w,rm,w,r,q,l,q],[lm,w,rm,a,rm,w]],
                
            },
            {
                name: '_sde',
                fr: 'acide',
                path: [[lm,a,m,q,l,q,lm,w,rm,w,r,q,m,q,rm,a],[l,q,rm,w],[r,q,lm,w]],
                
            },
            {
                name: '_bai',
                fr: 'acheter',
                path: [[lm,a,m,q,rm,a,lm,a,l,q,r,q,rm,a],[lm,w,rm,w]],
                
            },
            {
                name: '_kmia',
                fr: 'accumuler',
                path: [[lm,a,r,q,m,q,lm,a],[l,q,rm,w],[lm,w,lm,w],[rm,a,rm,a]],
                
            },
            {
                name: '_grey',
                fr: 'accrocher',
                path: [[lm,a,rm,a,r,q,l,q],[rm,a,rm,w],[lm,w,lm,w]],
                
            },
            {
                name: '_ksu',
                fr: 'accelerer',
                path: [[l,q,r,q],[lm,a,m,q,lm,w],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_boi',
                fr: 'a',
                path: [[lm,a,lm,w,l,q,m,q],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_fya',
                fr: 'donner',
                path: [[lm,a,rm,a,m,q,lm,a],[l,q,lm,w,rm,w,r,q]],
                
            },
            {
                name: '_fy',
                fr: 'refleter',
                path: [[lm,a,rm,a,lm,w,rm,w,lm,a],[l,q,r,q]],
                
            },
            {
                name: '_go',
                fr: 'avoir',
                path:[[lm, w, m, q, rm,w,lm,w],[l,q,lm,a,rm,a,r,q]],
               
            },
            {
                name: '_ka',
                fr: 'humain',
                path: [[l,q,rm,a],[lm,a,rm,w],[lm,w,m,q],[r,q,r,q]],
                
            },
            {
                name: '_kme',
                fr: 'pour',
                path: [[lm,a,lm,w],[l,q,m,q],[rm,a,r,q,rm,w]],
                
            },
            {
                name: '_sa',
                fr: 'vivre',
                path: [[lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a],[lm,a,rm,w],[rm,a,lm,w],[l,q,r,q]],
               
            },
            {
                name: '_smia',
                fr: 'isme',
                path: [[rm,w,l,q,r,q,lm,w,m,q,rm,w,lm,w],[lm,a,lm,a],[rm,a,rm,a]],
                
            }
        ];

        let k;
        for(k = 0; k < glyph_database.length; k += 1){

            let one_glyph = glyph_database[k];
            let glyph_with_accent = glyph_reference[k]; //implies that both lists are strictly identical with the exception of accents = possible source of error when updating lists!

            if(one_glyph.name === text_searched || one_glyph.fr === text_searched){

                let aud = new Audio(`audio/${one_glyph.name.replace("_","")}.mp3`);
                aud.play();
                draw_glyph(one_glyph.path);
                erase_view();
                // increment_y();
                translator.innerHTML += `${glyph_with_accent.fr.toUpperCase()}<span class="phono">[${glyph_with_accent.name.replace("_","")}]</span> `;
                
            }
        }

        function draw_combo(db, phono) {

            let increment = 200;

            for (n = 0; n < phono.length; n += 1) {

                let one_phono = phono[n];
                let copied_paths = [];
                let modified_paths = [];

                for (let i = 0; i < db.length; i += 1) {
                    if (db[i].name === one_phono) {
                        copied_paths = [...db[i].path];
                    }
                }

                for (let i = 0; i < copied_paths.length; i += 1) {
                    let block = copied_paths[i];
                    let modified_block = [];

                    for (let k = 0; k < block.length; k += 1) {
                        if (k % 2 === 0) {
                            modified_block.push(block[k]);
                        } else {
                            block[k] += increment * n;
                            modified_block.push(block[k]);
                        }
                    }
                    modified_paths.push(modified_block);
                }
                draw_glyph(modified_paths);
            }
            erase_view();
        }

        function show_translation(translation, phonology) {
            translator.innerHTML += `${translation}<span class="phono">${phonology}</span> `;
        }

        //readymade word cumulations

        if (text_searched === "hexagone" || text_searched === "_ptaegleinmaeksigla") {
            draw_combo(glyph_database, ["_ptae", "_glei", "_nmae", "_ksi", "_gla"]);
            show_translation("HEXAGONE", "[ptae-glei-nmae-ksi-gla]");
        }

        if (text_searched === "cultiver" || text_searched === "_fagrae") {
            draw_combo(glyph_database, ["_fa", "_grae"]);
            show_translation("CULTIVER", "[fa-grae]");
        }

        if (text_searched === "racine" || text_searched === "_piodveande") {
            draw_combo(glyph_database, ["_pio", "_dvea", "_nde"]);
            show_translation("RACINE", "[pio-dvea-nde]");
        }

        if (text_searched === "arbre" || text_searched === "_piodveagew") {
            draw_combo(glyph_database, ["_pio", "_dvea", "_gew"]);
            show_translation("ARBRE", "[pio-dvea-gew]");
        }

        if (text_searched === "comprendre" || text_searched === "_knofkai") {
            draw_combo(glyph_database, ["_kno", "_fkai"]);
            show_translation("COMPRENDRE", "[kno-fkai]");
        }

        if (text_searched === "univers" || text_searched === "_kiotewma") {
            draw_combo(glyph_database, ["_kio","_tew","_ma"]);
            show_translation("UNIVERS", "[kio-tew-ma]");
        }

        if (text_searched === "parler" || text_searched === "_lpaelgio") {
            draw_combo(glyph_database, ["_lpae","_lgio"]);
            show_translation("PARLER","[lpae-lgio]");
        }
        
        if (text_searched === "exprimer" || text_searched === "_fazaifwo") {
            draw_combo(glyph_database, ["_fa","_zai","_fwo"]);
            show_translation("EXPRIMER", "[fa-zai-fwo]");
        }

        if (text_searched === "comme" || text_searched === "_smezai") {
            draw_combo(glyph_database, ["_sme","_zai"]);
            show_translation("COMME", "[sme-zai]");
        }

        if (text_searched === "creer" || text_searched === "_favine") {
            draw_combo(glyph_database, ["_fa","_vi","_ne"]);
            show_translation("CREER","[fa-vi-ne]");
        }

        if (text_searched === "malheur" || text_searched === "_bwasa") {
            draw_combo(glyph_database, ["_bwa","_sa"]);
            show_translation("(être)MALHEUR", "[bwa-sa]");
        }

        if (text_searched === "bonheur" || text_searched === "_keosa") {
            draw_combo(glyph_database, ["_keo","_sa"]);
            show_translation("(être)BONHEUR", "[keo-sa]");
        }

        if (text_searched === "maitre" || text_searched === "_kafyardo") {
            draw_combo(glyph_database, ["_ka","_fya","_rdo"]);
            show_translation("MAÎTRE","[ka-fya-rdo]");
        }

        if (text_searched === "esclave" || text_searched === "_ptaeka") {
            draw_combo(glyph_database, ["_ptae","_ka"]);
            show_translation("ESCLAVE","[ptae-ka]");
        }

        if (text_searched === "sans" || text_searched === "_niavi") {
            draw_combo(glyph_database, ["_nia","_vi"]);
            show_translation("SANS","[nia-vi]");
        }

        if (text_searched === "technique" || text_searched === "_plamtai") {
            draw_combo(glyph_database, ["_pla","_mtai"]);
            show_translation("(être)TECHNIQUE","[pla-mtai]");
        }

        if (text_searched === "science" || text_searched === "_hiamtai") {
            draw_combo(glyph_database, ["_hia","_mtai"]);
            show_translation("(être)SCIENCE","[hia-mtai]");
        }

        if (text_searched === "philosopher" || text_searched === "_sakmehia") {
            draw_combo(glyph_database, ["_sa","_kme","_hia"]);
            show_translation("PHILOSOPHER", "[sa-kme-hia]");
        }

        if (text_searched === "verbe" || text_searched === "_ptaetmeihiapfae") {
            draw_combo(glyph_database, ["_ptae","_tmei","_hia","_pfae"]);
            show_translation("VERBE", "[ptae-tmei-hia-pfae]");
        }

        if (text_searched === "mot" || text_searched === "_ptaetmeihia") {
            draw_combo(glyph_database, ["_ptae","_tmei","_hia"]);
            show_translation("MOT", "[ptae-tmei-hia]");
        }

        if (text_searched === "glyphe" || text_searched === "_ptaetmeihiamrai") {
            draw_combo(glyph_database, ["_ptae","_tmei","_hia","_mrai"]);
            show_translation("GLYPHE", "[ptae-tmei-hia-mrai]");
        }

        if (text_searched === "percevoir" || text_searched === "_drista") {
            draw_combo(glyph_database, ["_dri","_sta"]);
            show_translation("PERCEVOIR", "[dri-sta]");
        }

        if (text_searched === "societe" || text_searched === "_ptaerdokweka") {
            draw_combo(glyph_database, ["_ptae","_rdo","_kwe","_ka"]);
            show_translation("SOCIETE", "[ptae-rdo-kwe-ka]");
        }

        if (text_searched === "structurer" || text_searched === "_rdomtai") {
            draw_combo(glyph_database, ["_rdo","_mtai"]);
            show_translation("STRUCTURER", "[rdo-mtai]");
        }

        if (text_searched === "souhaiter" || text_searched === "_kro_v3ai") {
            draw_combo(glyph_database, ["_kro","_v3ai"]);
            show_translation("SOUHAITER","[kro-v3ai]");
        }

        if (text_searched === "apprendre" || text_searched === "_rseakno") {
            draw_combo(glyph_database, ["_rsea","_kno"]);
            show_translation("APPRENDRE", "[rsea-kno]");
        }

        if (text_searched === "ecrire" || text_searched === "_mraitoi") {
            draw_combo(glyph_database, ["_mrai","_toi"]);
            show_translation("ECRIRE", "[mrai-toi]");
        }

        if (text_searched === "lire" || text_searched === "_statoi") {
            draw_combo(glyph_database, ["_sta","_toi"]);
            show_translation("LIRE", "[sta-toi]");
        }

        if (text_searched === "montrer" || text_searched === "_fasta") {
            draw_combo(glyph_database, ["_fa","_sta"]);
            show_translation("MONTRER","[fa-sta]");
        }

        if (text_searched === "dire" || text_searched === "_fasko") {
            draw_combo(glyph_database, ["_fa","_sko"]);
            show_translation("DIRE", "[fa-sko]");
        }

        if (text_searched === "graphieros" || text_searched === "_mealgioney") {
            draw_combo(glyph_database, ["_mea","_lgio","_ney"]);
            show_translation("GRAPHIEROS", "[mea-lgio-ney]");
        }

        if (text_searched === "editer" || text_searched === "_fatoizai") {
            draw_combo(glyph_database, ["_fa","_toi","_zai"]);
            show_translation("EDITER", "[fa-toi-zai]");
        }

        if (text_searched === "permettre" || text_searched === "_fafrya") {
            draw_combo(glyph_database, ["_fa","_frya"]);
            show_translation("PERMETTRE","[fa-frya]");
        }

        if (text_searched === "art" || text_searched === "_measatae") {
            draw_combo(glyph_database, ["_mea","_sa","_tae"]);
            show_translation("ART","[mea-sa-tae]");
        }

        if (text_searched === "je" || text_searched === "moi" || text_searched === "_kafygo") {
            draw_combo(glyph_database,["_ka","_fy","_go"]);
            audio_kafygo.play();
            show_translation("JE", "[ka-fy-go]");
        }

        if (text_searched === "aimer" || text_searched === "_sakme") {
            draw_combo(glyph_database,["_sa","_kme"]);
            audio_sakme.play();
            show_translation("AIMER", "[sa-kme]");
        }

        if (text_searched === "manger" || text_searched === "_rafdu") {
            draw_combo(glyph_database,["_ra","_fdu"]);
            show_translation("MANGER", "[ra-fdu]");
        }

        if (text_searched === "nature") {
            draw_combo(glyph_database,["_kio","_hae","_to","_trea","_frey"]);
            audio_kioheatotreafrey.play();
            show_translation("NATURE", "[kio-hae-to-trea-frey]");
        }

        if (text_searched === "tu" || text_searched === "toi" || text_searched === "_kafyafy") {
            draw_combo(glyph_database,["_ka","_fya","_fy"]);
            audio_kafyafy.play();
            show_translation("TU, TOI", "[ka-fya-fy]");
        }

        if (text_searched === "alec" || text_searched === "lloyd") {
            draw_combo(glyph_database,["_nmo","_ka","_tae"]);
            show_translation("Alec Lloyd Probert", "[nmo-ka-tae]");
        }

        if (text_searched === "beau") {
            draw_combo(glyph_database,["_kli","_keo","_grey","_hea"]);
            show_translation("BEAU", "[kli-keo-grey-hea]");
        }
    }


    function click_ok(){
        if (up_down_counter < 0) {
            up_down_counter += 1;
        }
        if (up_down_counter > 0) {
            up_down_counter = 0;
        }
        if (output_area.innerHTML === "") {
            output_area.appendChild(circles[0]);
            curse();
        }
        left_right_counter = 0;
        show_counters();
        svg_preview.style.display = "none";
        search_and_draw(view.innerHTML);
        clear_space();
        curse();
        found_list.style.display = "none";
    }

    ok.addEventListener("click", function() {
        click_ok();
    });

    function draw_prefix(prefix_button, prefix_phonology){
        prefix_button.addEventListener("click", function(){
            view.innerHTML = "";
            view.innerHTML += prefix_phonology;
            click_ok();
        });
    }

    draw_prefix(MEA, "_mea");
    draw_prefix(KA, "_ka");
    draw_prefix(KLI, "_kli");
    draw_prefix(VI, "_vi");
    draw_prefix(KIO, "_kio");
    draw_prefix(PTAE, "_ptae");
    draw_prefix(PKIA, "_pkia");
    draw_prefix(MTAI, "_mtai");
    draw_prefix(MINA, "_mina");
    draw_prefix(TSI, "_tsi");

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

    (function converter(){
        const btn = document.getElementById("btn");
    
        btn.addEventListener("click", function(){
            let cursor = document.getElementById("g_cursor");
            cursor.style.display = "none";
            let svgString = new XMLSerializer().serializeToString(document.getElementById('output_area'));
            let canvas = document.getElementById("canvas");
            let ctx = canvas.getContext("2d");
            let DOMURL = self.URL || self.webkitURL || self;
            let img = new Image();
            let svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
            let url = DOMURL.createObjectURL(svg);
            img.onload = function() {
                ctx.drawImage(img, 0, 0);
                var png = canvas.toDataURL("image/png");
                document.querySelector('#png-container').innerHTML = '<img class="imgout" src="'+png+'"/>';
                DOMURL.revokeObjectURL(png);
            };
            img.src = url;
        });
    }());

}());

