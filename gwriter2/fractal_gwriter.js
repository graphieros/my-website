(function main(){


 
    const svg_container = document.getElementById("svg_container");
    const xmlns = "http://www.w3.org/2000/svg";
    const output_area = document.createElementNS(xmlns, "svg");
    output_area.id = "output_area";
    output_area.classname = "drawing_board";
    let svg_width= 4000;
    let svg_height = svg_width *6;
    output_area.setAttributeNS(null, "viewBox", `0 0 ${svg_width} ${svg_height}`);

    const size_plus = document.getElementById("size_plus");
    const size_minus = document.getElementById("size_minus");
    let svg_size = document.getElementById("svg_size");

    size_plus.addEventListener("click", function(){
        let num = Number(svg_size.innerHTML);
        num += 10;
        svg_size.innerHTML = num;
        output_area.style.width = `${num}px`;
        output_area.style.height = `${num * 6}px`;
        input.focus();
    });

    size_minus.addEventListener("click", function(){
        let num = Number(svg_size.innerHTML);
        num -= 10;
        svg_size.innerHTML = num;
        output_area.style.width = `${num}px`;
        output_area.style.height = `${num * 6}px`;
        input.focus();
    });

    let SVGSIZE = Number(svg_size.innerHTML);

    output_area.style.width = SVGSIZE;

    output_area.style.height =  SVGSIZE * 6;
    svg_container.appendChild(output_area);
    output_area.setAttributeNS(null, "stroke", "white");

    const erase = document.getElementById("btn_erase");
    const jump_indicator = document.getElementById("jump_indicator");
    const HELP = document.getElementById("help");
    const help_modal = document.getElementById("help_modal");
    const position_indicator = document.getElementById("position_indicator");
    let position = 1;
    position_indicator.innerHTML = `${position * 100}%`;

    let _p = `<path `;
    let _p_ = `d="M `;
    let p_ = `"/>`;

    const phi = 1.61803398875;

    let glyph_size = svg_width /2;
    let increment = 0;
    let stk = glyph_size / 20;
    output_area.setAttributeNS(null, "stroke-width", stk);

    let color_R = 10;
    let color_G = 60;
    let color_B = 30;

    let glyph_color = `rgb(${color_R},${color_G},${color_B})`;

    let Xcenter = svg_width/2;
    let Ycenter = svg_width/2;

    let size = Xcenter/2;

    let counter = 0;

    function forget_me(){
        console.log("<< ERASE")
        jump_indicator.style.bottom = "100px";
        jump_indicator.style.opacity = 0;
        glyph_size = svg_width/2;
        increment = glyph_size / 10;
        Xcenter = glyph_size;
        output_area.innerHTML = "";
        input.innerHTML = "";
        Ycenter = glyph_size;
        size = Xcenter /2;
        stk = glyph_size / 20;
        color_R = 10;
        color_G = 60;
        color_B = 30;
        glyph_color = `rgb(${color_R},${color_G},${color_B})`;
        counter = 0;
        position = 1;
        position_indicator.innerHTML = `${position * 100}%`;
        input.focus();
    }

    function jump_forward(){
        jump_indicator.style.bottom = "170px";
        jump_indicator.style.opacity = 1;
        glyph_size = svg_width /2;
        increment = glyph_size / 10;
        Xcenter = glyph_size;
        input.innerHTML = "";
        Ycenter = glyph_size;
        size = Xcenter /2;
        stk = glyph_size / 20;
        color_R = 10;
        color_G = 60;
        color_B = 30;
        glyph_color = `rgb(${color_R},${color_G},${color_B})`;
        Ycenter += counter;
        position = 1;
        position_indicator.innerHTML = `${position * 100}%`;
    }

    function fractalize_to_small(){
        glyph_size /=2;
        size /= 2;
        stk /=2;
        color_R *= phi;
        color_G *= phi;
        color_B *= phi;
        if(color_R >= 255){
            color_R = 255;
        }
        if(color_G >= 255){
            color_G = 255;
        }
        if(color_B >= 255){
            color_B = 255;
        }
        glyph_color = `rgb(${color_R},${color_G},${color_B})`;
        console.log(glyph_color);
        position_indicator.innerHTML = `${(position) * 100}%`;
    }

    erase.addEventListener("click", function(){

        forget_me();

    });

    (function listen_to_keys(){

        document.body.onkeyup = function(event){

            if(event.keyCode === 13  || event.keyCode === 17 || event.keyCode === 32 || event.keyCode === 8 || event.keyCode === 83 || event.keyCode === 81 || event.keyCode === 90 || event.keyCode === 69 || event.keyCode === 68 || event.keyCode === 88 || event.keyCode === 87){


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


                function kut(a,b){
                    return `${a} ${b}`;
                }

                let x = [xx,xy];
                let X = kut(x[0],x[1]);
                let w = [wx,wy];
                let W = kut(w[0],w[1]);
                let q = [qx,qy];
                let Q = kut(q[0],q[1]);
                let z = [zx,zy];
                let Z = kut(z[0],z[1]);
                let e = [ex,ey];
                let E = kut(e[0],e[1]);
                let d = [dx,dy];
                let D = kut(d[0],d[1]);
                let s = [Xcenter,Ycenter];
                let S = kut(s[0],s[1]);

                if(event.keyCode === 13){ //ENTER 
                    console.log(">> ENTER");
                    position /= 2;

                    jump_indicator.style.bottom = "100px";
                    jump_indicator.style.opacity = 0;

                    let raw_content = input.value;
                    let pure_content = raw_content.split(/,| |;+/);

                    console.log(`PURE CONTENT: ${pure_content}`);

                    let store = [];

                    for(let i = 0; i < pure_content.length; i += 1){

                        let content_path = pure_content[i];
                        content_path = content_path.replace(/[s]/g,` ${S},`);
                        content_path = content_path.replace(/[z]/g,` ${Z},`);
                        content_path = content_path.replace(/[e]/g,` ${E},`);
                        content_path = content_path.replace(/[d]/g,` ${D},`);
                        content_path = content_path.replace(/[x]/g,` ${X},`);
                        content_path = content_path.replace(/[w]/g,` ${W},`);
                        content_path = content_path.replace(/[q]/g,` ${Q},`);
                        store.push(content_path);

                    }
                    
                    console.log(store);

                    for(let j = 0; j < store.length; j += 1){

                        let pth = store[j];
                        output_area.innerHTML += `${_p}class="test" stroke-width="${stk}"style="stroke:${glyph_color}"${_p_}${pth}${p_}`;

                    }

                    input.value = "";

                    fractalize_to_small();


                }else if(event.keyCode === 17){ // CTRL

                    console.log("________JUMP________");

                    glyph_size = svg_width/2;
                    counter += (glyph_size + increment);

                    jump_forward();
                    input.focus();
                    
                }

            }else{

                input.value="";
                alert("\n________________________\nTouche non autorisée!\n________________________\nUtilisez les touches Q Z E D X W S, ENTER, CTRL, ESPACE");
                event.preventDefault();
                
            }

        }

    }());

    const btn_quit_modal = document.getElementById("quit_modal");

    HELP.addEventListener("click", function(){

        console.log(">> HELP");
        help_modal.style.opacity = 1;
        help_modal.style.display = "grid";

        
        btn_quit_modal.addEventListener("click", function(){
            help_modal.style.opacity = 0;
            help_modal.style.display = "none";
            input.focus();
            
        });
    });
}());