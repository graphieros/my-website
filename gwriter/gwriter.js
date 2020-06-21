/**
 * //functionalities to add: translator, sequence of glyph formation (add matrices in glyph objects)
 */


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

const svg_container = document.getElementById("svg_container");
const xmlns = "http://www.w3.org/2000/svg";
const output_area = document.createElementNS(xmlns, "svg");
output_area.id = "output_area";
let svg_width = 3000;
let svg_height = svg_width * 2;
output_area.setAttributeNS(null, "viewBox", `0 0 ${svg_width} ${svg_height}`);
output_area.style.height = "800px";
output_area.style.width = "400px";
svg_container.appendChild(output_area);
output_area.setAttributeNS(null, "stroke", "cornflowerblue");

let memory = [];


(function main(){

    let glyph_database;

    document.body.onkeyup = function(e){
        
        function clear_area(){
            writing_area.value = "";
            y_top += 206;
            y_mid += 206;
            y_bot += 206;
        }

        function jump_back(){
            y_top -= 206;
            y_mid -= 206;
            y_bot -= 206;
        }

        function jump_slight(){
            y_top += 103;
            y_mid += 103;
            y_bot += 103;
        }

        function new_line(){
            writing_area.value = "";
            y_top = 50; //103 how to manage interstices?
            y_mid = 128;
            y_bot = 206;
            x_left += 175;
            x_left_mid += 175;
            x_mid += 175;
            x_right_mid += 175;
            x_right += 175;
        }

        glyph_database = [
            {
                name: '_',
                fr: '',
                path: [],
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
                fr: 'écvoluer',
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
        

        console.log(`NB DE GLYPHES: ${glyph_database.length}, soit ${Math.round((glyph_database.length / 435)*10000)/100}% !`);

        const writing_area = document.getElementById("writing_area");
        // const output_area = document.getElementById("output_area");
        const clean = document.getElementById("clean");
        const trad = document.getElementById("trad");
        const _p = '<path d="M';
        const p_ = '"/>';

        clean.addEventListener("click", function(){

            output_area.innerHTML = "";

            y_top = 50;
            y_mid = 128;
            y_bot = 206;

            x_left = 38;
            x_left_mid = 83;
            x_mid = 128;
            x_right_mid = 173;
            x_right = 218;

            trad.innerHTML = "";
        });

            let content = writing_area.value.toLowerCase();

            if(e.keyCode === 13){ //ENTER 

                let k;

                for(k = 0; k < glyph_database.length; k += 1){
                    
                    let glyph = glyph_database[k];
                    let store = [];
                    let paths = glyph.path;
                    let b;
                    let m;
                    if(content === `${glyph.name}\n` || content === `${glyph.fr}\n`){

                        for(b = 0; b < paths.length; b += 1){
                            store.push(`${_p}${paths[b]}${p_}`);
                            output_area.innerHTML += store;   
                        }// O(n²)

                        memory.push(store);                       
                    }                        
                }
    
                clear_area();

                trad.innerHTML += content;

            }else if(e.keyCode === 39){ //RIGHT ARROW
                new_line();

            }else if(e.keyCode === 38){ //TOP ARROW
                jump_back();
                
            }else if(e.keyCode === 37){ //LEFT ARROW
                jump_slight();
            }     
            
    }
    
}());

(function change_background_color(){
    
    const toggle = document.getElementById("toggle");
    const writing_area = document.getElementById("writing_area");
    const clean = document.getElementById("clean");
    const trad = document.getElementById("trad");

    toggle.addEventListener("click", function(){

        if(this.innerHTML === "0"){

            this.innerHTML = "1";
            this.style.background = "black";
            this.style.border = "1px solid white";
            output_area.style.background = "white";
            output_area.setAttributeNS(null, "stroke", "black");
            document.body.style.background = "rgb(200,200,200)";
            writing_area.style.background = "white";
            writing_area.style.color = "black";

        }else if(this.innerHTML === "1"){

            this.innerHTML = "0";
            this.style.border = "none";
            this.style.background = "white";
            output_area.style.background = "black";
            output_area.setAttributeNS(null, "stroke", "cornflowerblue");
            document.body.style.background = "rgb(20,20,20)";
            writing_area.style.background = "rgb(25,25,25)";
            writing_area.style.color = "gold";
        }
        
    })

}());

function create(el,cl,id){
    let d = document.createElement(el);
    d.className = cl;
    d.id = id;
    return d;
}

function glue(dad,son){
    return dad.appendChild(son);
}

function kill(dad,son){
    return dad.removeChild(son);
}

(function showInfo(){

    const btn = document.getElementById("info");
    let window_info = create("DIV","window_info", "window_info");
    let window_x = create("DIV", "window_x", "window_x");
    window_x.innerHTML = "X";
    let window_content = create("DIV", "window_content", "window_content");
    window_content.innerHTML = "<span class=\"courier\">i</span><br><b>CONTROLES CLAVIER:</b><br>Appuyez sur la touche <b>ENTER</b> après avoir tapé votre glyphe.<br>Appuyez aussi sur <b>ENTER</b> pour ajouter un espace vide<br><br>Noubliez pas d'ajouter un _ (underscore) devant la saisie d'une phonologie, comme par exemple _ka.<br><br><span class=\"info_btn\">&#8680;</span>Pour passer à la <b>ligne verticale</b> suivante.<br><br><span class=\"info_btn\">&#8678;</span>pour se positionner un <b>demi-espace en arrière</b>.<br><br><span class=\"info_btn\">&#8679;</span>pour se positionner <b>un espace en arrière</b>."; 

    btn.addEventListener("click", function(){
        this.style.visibility = "hidden";
        glue(window_info, window_content);
        glue(window_info, window_x);
        glue(document.body, window_info);
    });

    window_x.addEventListener("click", function(){
        btn.style.visibility = "initial";
        kill(window_info, window_content);
        kill(window_info,window_x);
        kill(document.body, window_info);
    })
    
}());