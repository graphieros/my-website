const MENU = document.getElementById("masterMenu");
const TOPNAME = document.getElementById("topName");
const LANDING = document.getElementById("LANDING");
const QUOTE = document.getElementById("QUOTE");
const SECTIONS = document.getElementsByClassName("sections");
const MENUBALLS = document.getElementById("menuBalls");
const MENUBALL0 = document.getElementById("menuBall0");
const MENUBALL1 = document.getElementById("menuBall1");
const MENUBALL2 = document.getElementById("menuBall2");
const MENUBALL3 = document.getElementById("menuBall3");
const XBALL = document.getElementById("Xball");
const XBALLCROSS0 = document.getElementById("XballCross0");
const XBALLCROSS1 = document.getElementById("XballCross1");
const BIOPIC = document.getElementById("BIOPIC");
const BIOCHOICE = document.getElementsByClassName("BIOchoice");
const BIOCONTENT = document.getElementsByClassName("BIOcontent");
const GALDIV = document.getElementsByClassName("galeriePicWrapper");
const CAPTIONS = document.getElementsByClassName("picCaption");
const APPS = document.getElementsByClassName("appliWrapper");
const DEVMENU = document.getElementsByClassName("devMenu");

let i; 

(function activateMenu() {
    MENU.addEventListener("mouseover", function() {
        MENU.style.zIndex = "100";
        LANDING.style.display = "block";
        LANDING.style.animationName = "slideNameOpen";
        LANDING.style.animationDuration = "0.5s";
        LANDING.style.animationTimingFunction = "ease-in-out";
        LANDING.style.animationFillMode = "forwards";
        TOPNAME.style.opacity = 0.1;
        BIOPIC.style.opacity = 1;

        for(i = 0; i < BIOCONTENT.length; i += 1){
            BIOCONTENT[i].style.display = "none";
        }

        for (i = 0; i < SECTIONS.length; i += 1) {
            SECTIONS[i].style.opacity = 0.1;
            SECTIONS[i].style.zIndex = -1;
        }

        setTimeout(function() {
            MENUBALLS.style.display = "initial";
        }, 50);
        setTimeout(function() {
            MENUBALL0.style.height = "70px";
            MENUBALL0.style.width = "70px";
            MENUBALL0.style.opacity = 1;
        }, 100);
        setTimeout(function() {
            MENUBALL1.style.height = "70px";
            MENUBALL1.style.width = "70px";
            MENUBALL1.style.opacity = 1;
        }, 150);
        setTimeout(function() {
            MENUBALL2.style.height = "70px";
            MENUBALL2.style.width = "70px";
            MENUBALL2.style.opacity = 1;
        }, 200);
        setTimeout(function() {
            MENUBALL3.style.height = "70px";
            MENUBALL3.style.width = "70px";
            MENUBALL3.style.opacity = 1;
        }, 250);
        setTimeout(function() {
            XBALLCROSS0.style.opacity = 1;
            XBALLCROSS1.style.opacity = 1;
        }, 300);

    })
}());


XBALL.addEventListener("click", function() {
    closeMenu();
})


function closeMenu() {
    MENU.style.zIndex = 0;
    LANDING.style.animationName = "slideNameClose";
    LANDING.style.animationDuration = "0.5s";
    LANDING.style.animationTimingFunction = "ease-in-out";
    LANDING.style.animationFillMode = "forwards";
    TOPNAME.style.opacity = 1;
    QUOTE.innerHTML = "";

    for (i = 0; i < SECTIONS.length; i += 1) {
        SECTIONS[i].style.opacity = 1;
        SECTIONS[i].style.zIndex = 1;
    }

    setTimeout(function() {
        MENUBALL3.style.opacity = 0;
    }, 10);
    setTimeout(function() {
        MENUBALL2.style.opacity = 0;
    }, 20);
    setTimeout(function() {
        MENUBALL1.style.opacity = 0;
    }, 30);
    setTimeout(function() {
        MENUBALL0.style.opacity = 0;
    }, 40);
    setTimeout(function() {
        MENUBALLS.style.display = "none";
    }, 50);

    LANDING.style.display = "none";
}

function showSection(btn, sA, sB, sC, sD) {
    btn.addEventListener("click", function() {
        sA.style.display = "block";
        sB.style.display = "none";
        sC.style.display = "none";
        sD.style.display = "none";
        closeMenu();
        LANDING.style.display = "none";
        TOPNAME.style.display = "initial";
    })
}

showSection(
    MENUBALL0,
    SECTIONS[0],
    SECTIONS[1],
    SECTIONS[2],
    SECTIONS[3]
);

showSection(
    MENUBALL1,
    SECTIONS[1],
    SECTIONS[2],
    SECTIONS[3],
    SECTIONS[0]
);

showSection(
    MENUBALL2,
    SECTIONS[2],
    SECTIONS[3],
    SECTIONS[0],
    SECTIONS[1]
)

showSection(
    MENUBALL3,
    SECTIONS[3],
    SECTIONS[0],
    SECTIONS[1],
    SECTIONS[2]
)

function showQuote(menu, quote) {
    menu.addEventListener("mouseover", function() {
        QUOTE.innerHTML = quote;
    });

    menu.addEventListener("mouseout", function() {
        QUOTE.innerHTML = "";
    });
}

showQuote(MENUBALL0, "Une sorte de curriculum vitae");
showQuote(MENUBALL1, "La construction d'une langue hexagonale");
showQuote(MENUBALL2, "Ecrire et peindre simultanément dans une langue nouvelle");
showQuote(MENUBALL3, "Programmation, idées et applications");

//BIO
(function hideBioPic(){
    for(i = 0; i < BIOCHOICE.length; i += 1){
        let content = BIOCONTENT[i];
        BIOCHOICE[i].addEventListener("mouseover", function(){

            for(i = 0; i < BIOCONTENT.length; i += 1){
                BIOCONTENT[i].style.display = "none";
            }
            BIOPIC.style.opacity = 0.2;
            content.style.display = "initial";
        })
    }
}());

//GALERIE
(function showCaption(){
    for(i = 0; i < GALDIV.length; i += 1){
        let caption = CAPTIONS[i];
        let div = GALDIV[i];
        GALDIV[i].addEventListener("mouseover", function(){
            caption.style.opacity = 1;
        });
        GALDIV[i].addEventListener("mouseout", function(){
            caption.style.opacity = 0;
        })
    }
}());

//DEV
function showApp(dm, open, closed){
    dm.addEventListener("click", function(){
        closed.style.display = "none";
        open.style.display = "grid";
    });
};

showApp(DEVMENU[0], APPS[0], APPS[1]);
showApp(DEVMENU[1], APPS[1], APPS[0]);

//APP0
(function createSingleGlyph(){

    const SVGWRAPPER = document.getElementById("wrapper");
    const sides = 6;
    const xmlns = "http://www.w3.org/2000/svg";
    const SVG = document.createElementNS(xmlns, "svg");
    SVG.id = "baseSVG";
    SVG.setAttributeNS(null, "viewBox", "0 0 256 256");
    const STM = document.getElementById("STM");
    const LTM = document.getElementById("LTM");
    const PRINTER = document.getElementById("PRINTER");
    
    let svgWIdth = 256;
    let svgHeight = 256;
    let Xcenter = 128;
    let Ycenter = 128;
    let circles = [];
    let Xarray = [];
    let Yarray = [];
    let allInputCircles = [];
    let drawnLines = [];
    let size = 90;


    function buildCoreSVG(){

        SVG.innerHTML = "";
        Xarray = [];
        Yarray = [];
        allInputCircles = [];
        drawnLines = [];
        LTM.innerHTML = "";

        let Xcord;
        let Ycord;

        Xarray.push(Xcenter);
        Yarray.push(Ycenter);

        for (i = 0; i <= sides; i += 1) {
        Xcord = Math.round((Xcenter + size * Math.cos(i * 2 * Math.PI / sides)) * 100) / 100;
        Ycord = Math.round((Ycenter + size * Math.sin(i * 2 * Math.PI / sides)) * 100) / 100;
        Xarray.push(Xcord);
        Yarray.push(Ycord);
        };

        for(i = 0; i <= sides; i += 1){
            let circle = document.createElementNS(xmlns, "circle");
                circle.setAttributeNS(null, "class", "inputCircles");
                circle.setAttributeNS(null, "cx", Xarray[i]);
                circle.setAttributeNS(null, "cy", Yarray[i]);
                circle.setAttributeNS(null, "r", 15);
                circle.setAttributeNS(null, "fill", "white");
                circle.setAttributeNS(null, "cursor", "pointer");
                circle.setAttributeNS(null, "transition", "all 0.3s ease");
            allInputCircles.push(circle)
            SVG.appendChild(circle);
        };

        SVGWRAPPER.appendChild(SVG);


      for(i =0; i < allInputCircles.length; i += 1){
        let oneCircle = allInputCircles[i];
        oneCircle.addEventListener("mouseover", function(){
          oneCircle.setAttributeNS(null, "fill", "red");
        });   
        oneCircle.addEventListener("mouseout", function(){
          oneCircle.setAttributeNS(null, "fill", "white");
        });
      }
    }

    function createSvg(){
        buildCoreSVG();
      
        for(i = 0; i < allInputCircles.length; i += 1){
          let oneCircle = allInputCircles[i];
          let oneX = Xarray[i];
          let oneY = Yarray[i];
      
          oneCircle.addEventListener("click", function(){
            drawnLines.push([oneX, oneY]);
            drawLine();
          });
        }
    

      function drawLine(){
        if(drawnLines.length >= 1){
          let path = document.createElementNS(xmlns, "path");
              path.setAttributeNS(null, 'stroke', "white");
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

      (function cut(){
        SVG.setAttributeNS(null, "width", "256");
        SVG.setAttributeNS(null, "height", "256");
      
        const BTNCUT = document.getElementById("CUT");
      
        BTNCUT.addEventListener("click", function(){
          let path = document.createElementNS(xmlns, "path");
          path.setAttributeNS(null, 'stroke', "greenyellow");
          path.setAttributeNS(null, 'stroke-width', 4);
          path.setAttributeNS(null, 'stroke-linejoin', "round");
          path.setAttributeNS(null, 'stroke-linecap', 'round');
          path.setAttributeNS(null, 'd', `M ${STM.innerHTML}`); 
          path.setAttributeNS(null, 'opacity', 1);
          path.setAttributeNS(null, "fill", "none");
          SVG.appendChild(path);
      
          LTM.innerText += `<path d="M ${drawnLines}"/>`;
          allInputCircles = [];
          drawnLines = [];
        });
      }());

      (function print(){
        const BTNPRINT = document.getElementById("PRINT");

        BTNPRINT.addEventListener("click", function(){
            let printSVG = document.createElementNS(xmlns, "svg");
            printSVG.setAttributeNS(null, "viewBox", "0 0 256 256");
            printSVG.setAttributeNS(null, "width", "100px");
            printSVG.setAttributeNS(null, "height", "100px");
            printSVG.setAttributeNS(null, "stroke-width", "6px");
            printSVG.setAttributeNS(null, "stroke-linecap", "round");
            printSVG.setAttributeNS(null, "stroke-linejoin", "round");
            printSVG.setAttributeNS(null, "fill", "none");
            printSVG.setAttributeNS(null, "stroke", "black");

            printSVG.innerHTML = LTM.innerHTML.split('&lt;').join('<').split('&gt;').join('>');

            PRINTER.appendChild(printSVG);

        })
      }());

      (function clear(){
        const BTNCLEAR = document.getElementById("CLEAR");

        BTNCLEAR.addEventListener("click", function(){
          STM.innerHTML="";
          SVGWRAPPER.innerHTML="";
          createSvg();
        })
      }());

      (function wash(){
        const BTNWASH = document.getElementById("WASH");
        BTNWASH.addEventListener("click", function(){
          PRINTER.innerHTML = "";
        });
      }());

}());