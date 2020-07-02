(function main(){



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

    const erase = document.getElementById("btn_erase");
    const btn_input = document.getElementById("btn_input");

    let _p = `<path `;
    let _p_ = `d="M `;
    let p_ = `"/>`;

    const phi = 1.61803398875;

    let glyph_size = 1000;
    let increment = glyph_size / 10;
    let stk = glyph_size / 20;
    output_area.setAttributeNS(null, "stroke-width", stk);

    let color_R = 30;
    let color_G = 30;
    let color_B = 30;

    let glyph_color = `rgb(${color_R},${color_G},${color_B})`;

    let Xcenter = glyph_size;
    let Ycenter = glyph_size;

    let size = Xcenter/2;

    let counter = 0;

    function forget_me(){
        glyph_size = 1000;
        increment = glyph_size / 10;
        Xcenter = glyph_size;
        output_area.innerHTML = "";
        input.innerHTML = "";
        Ycenter = glyph_size;
        size = Xcenter /2;
        stk = glyph_size / 20;
        color_R = 30;
        color_G = 30;
        color_B = 30;
        glyph_color = `rgb(${color_R},${color_G},${color_B})`;
        counter = 0;
    }

    function jump_forward(){
        glyph_size = 1000;
        increment = glyph_size / 10;
        Xcenter = glyph_size;
        input.innerHTML = "";
        Ycenter = glyph_size;
        size = Xcenter /2;
        stk = glyph_size / 20;
        color_R = 30;
        color_G = 30;
        color_B = 30;
        glyph_color = `rgb(${color_R},${color_G},${color_B})`;
        Ycenter += counter;
    }

    function fractalize_to_small(){
        glyph_size /=2;
        size /= 2;
        stk /=2;
        color_R *= phi;
        color_G *= phi;
        color_B *= phi;
        glyph_color = `rgb(${color_R},${color_G},${color_B})`;
    }

    erase.addEventListener("click", function(){

        forget_me();

    });

    (function listen_to_keys(){

        document.body.onkeyup = function(event){

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
                let raw_content = input.value;
                let pure_content = raw_content.split(/,| |;+/) //array
                console.log(`PURE CONTENT: ${pure_content}`);

                let store = [];

                for(let i = 0; i < pure_content.length; i += 1){
                    let one_thing = pure_content[i];
  
                    one_thing = one_thing.replace(/[s]/g,` ${S},`);
                    one_thing = one_thing.replace(/[z]/g,` ${Z},`);
                    one_thing = one_thing.replace(/[e]/g,` ${E},`);
                    one_thing = one_thing.replace(/[d]/g,` ${D},`);
                    one_thing = one_thing.replace(/[x]/g,` ${X},`);
                    one_thing = one_thing.replace(/[w]/g,` ${W},`);
                    one_thing = one_thing.replace(/[q]/g,` ${Q},`);
                    store.push(one_thing);
                }
                
                console.log(store);

                for(let j = 0; j < store.length; j += 1){
                    let pth = store[j];
                    output_area.innerHTML += `${_p}class="test" stroke-width="${stk}"style="stroke:${glyph_color}"${_p_}${pth}${p_}`
                }

                input.value = "";
                // Ycenter += (glyph_size + increment);
                fractalize_to_small();


            }else if(event.keyCode === 17){ // CTRL

                    jump_forward();
                    counter += (glyph_size + increment);

            }

        }

    }());



}());