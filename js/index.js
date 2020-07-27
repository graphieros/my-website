const MENU = document.getElementById("masterMenu");
const TOPNAME = document.getElementById("topName");
const LANDING = document.getElementById("LANDING");
const QUOTE = document.getElementById("QUOTE");
const SECTIONS = document.getElementsByClassName("sections");
const MENUBALLS = document.getElementById("menuBalls");
const MENUBALLBLOG = document.getElementById("menuBallBlog");
const MENUBALL0 = document.getElementById("menuBall0");
const MENUBALL1 = document.getElementById("menuBall1");
const MENUBALLGRAPHIEROS = document.getElementById("menuBallGraphieros");
const MENUBALL2 = document.getElementById("menuBall2");
const MENUBALLJOURNAL = document.getElementById("menuBallJournal");
const MENUBALL3 = document.getElementById("menuBall3");
const MENUBALLWRITER = document.getElementById("menuBallWriter");
const MENUBALLFRACTALWRITER = document.getElementById("menuBallFractalWriter");
const MENUBALLTOUCHWRITER = document.getElementById("menuBallTouchWriter");
const MENUBALLGRAPHIEROSJOURNAL = document.getElementById("menuBallGraphierosJournal");
const MENUBALLCONTACT = document.getElementById("menuBallContact");
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
const WOW = document.getElementById("progWow");
const background_svg = document.getElementById("background_svg");
const logo0 = document.getElementById("logo0");
const logo1 = document.getElementById("logo1");
const logo2 = document.getElementById("logo2");

let i;

document.onload = function(){
  setTimeout(function(){
    logo0.style.opacity = 1;
  },500);
  setTimeout(function(){
    logo1.style.opacity = 1
  },1000);
  setTimeout(function(){
    logo2.style.opacity = 1;
  },1500);
  setTimeout(function(){
    LANDING.style.opacity = 1;
  },2000);
  setTimeout(function(){
    background_svg.style.opacity = 0.1;
  },2000);
} 

(function activateMenu() {
    MENU.addEventListener("mouseover", function() {
        background_svg.style.opacity = 0.1;
        logo0.style.stroke = "rgb(200,200,200)";
        logo1.style.stroke = "rgb(150,150,150)";
        logo2.style.stroke = "rgb(100,100,100)";
        MENU.style.zIndex = "100";
        LANDING.style.display = "block";
        LANDING.style.animationName = "slideNameOpen";
        LANDING.style.animationDuration = "0.5s";
        LANDING.style.animationTimingFunction = "ease-in-out";
        LANDING.style.animationFillMode = "forwards";
        TOPNAME.style.opacity = 0;
        BIOPIC.style.opacity = 1;

        for(i = 0; i < BIOCONTENT.length; i += 1){
            BIOCONTENT[i].style.display = "none";
        }

        for (i = 0; i < SECTIONS.length; i += 1) {
            SECTIONS[i].style.opacity = 0;
            // SECTIONS[i].style.display = "none";
            SECTIONS[i].style.zIndex = -1;
        }

        setTimeout(function() {
            MENUBALLS.style.display = "initial";
        }, 50);
        setTimeout(function() {
            MENUBALL0.style.height = "70px";
            MENUBALL0.style.width = "70px";
            MENUBALL0.style.opacity = 1;
            MENUBALLBLOG.style.height = "70px";
            MENUBALLBLOG.style.width = "70px";
            MENUBALLBLOG.style.opacity = 1;
            MENUBALLCONTACT.style.height = "70px";
            MENUBALLCONTACT.style.width = "70px";
            MENUBALLCONTACT.style.opacity = 1;
        }, 100);
        setTimeout(function() {
            MENUBALL1.style.height = "70px";
            MENUBALL1.style.width = "70px";
            MENUBALLGRAPHIEROS.style.width = "70px";
            MENUBALLGRAPHIEROS.style.height = "70px";
            MENUBALLGRAPHIEROSJOURNAL.style.height = "70px";
            MENUBALLGRAPHIEROSJOURNAL.style.width = "70px";
            MENUBALL1.style.opacity = 1;
            MENUBALLGRAPHIEROS.style.opacity = 1;
            MENUBALLGRAPHIEROSJOURNAL.style.opacity = 1;
        }, 150);
        setTimeout(function() {
            MENUBALL2.style.height = "70px";
            MENUBALL2.style.width = "70px";
            MENUBALLJOURNAL.style.height = "70px";
            MENUBALLJOURNAL.style.width = "70px";
            MENUBALL2.style.opacity = 1;
            MENUBALLJOURNAL.style.opacity = 1;
        }, 200);
        setTimeout(function(){
          MENUBALLFRACTALWRITER.style.height = "70px";
          MENUBALLFRACTALWRITER.style.width = "70px";
          MENUBALLFRACTALWRITER.style.opacity = 1;
        }, 225);
        setTimeout(function() {
            MENUBALL3.style.height = "70px";
            MENUBALL3.style.width = "70px";
            MENUBALL3.style.opacity = 1;
            MENUBALLWRITER.style.height = "70px";
            MENUBALLWRITER.style.width = "70px";
            MENUBALLWRITER.style.opacity = 1;
            MENUBALLTOUCHWRITER.style.height = "70px";
            MENUBALLTOUCHWRITER.style.width = "70px";
            MENUBALLTOUCHWRITER.style.opacity = 1;
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
    background_svg.style.opacity = 0.5;
    logo0.style.stroke = "rgb(186,211,255)";
    logo1.style.stroke = "rgb(140,172,230";
    logo2.style.stroke = "cornflowerblue";
    MENU.style.zIndex = 10;
    LANDING.style.animationName = "slideNameClose";
    LANDING.style.animationDuration = "0.5s";
    LANDING.style.animationTimingFunction = "ease-in-out";
    LANDING.style.animationFillMode = "forwards";
    TOPNAME.style.opacity = 0;
    QUOTE.innerHTML = ""; 

    for (i = 0; i < SECTIONS.length; i += 1) {
        SECTIONS[i].style.opacity = 1;
        SECTIONS[i].style.zIndex = 1;
    }

    setTimeout(function() {
        MENUBALL3.style.opacity = 0;
        MENUBALLWRITER.style.opacity = 0;
        MENUBALLTOUCHWRITER.style.opacity = 0;
    }, 10);
    setTimeout(function(){
      MENUBALLFRACTALWRITER.style.opacity = 0;
    }, 15);
    setTimeout(function() {
        MENUBALL2.style.opacity = 0;
        MENUBALLJOURNAL.style.opacity = 0;
    }, 20);
    setTimeout(function() {
        MENUBALL1.style.opacity = 0;
        MENUBALLGRAPHIEROS.style.opacity = 0;
        MENUBALLGRAPHIEROSJOURNAL.style.opacity = 0;
    }, 30);
    setTimeout(function() {
        MENUBALL0.style.opacity = 0;
        MENUBALLBLOG.style.opacity = 0;
        MENUBALLCONTACT.style.opacity = 0;
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

function showQuote(menu, quote, col) {
  // let k = 0;
  
    menu.addEventListener("mouseover", function() {
        QUOTE.innerHTML = quote;
        QUOTE.style.background = `linear-gradient(to bottom right,darkgrey,${col}, transparent, transparent, transparent, transparent, transparent, transparent, transparent`;
    }); 
 
    menu.addEventListener("mouseout", function() {
        QUOTE.innerHTML = "";
        QUOTE.style.background = "none";
    }); 
} 

showQuote(MENUBALLBLOG, "Des <b>pensées</b>, des photos comme elles viennent", "rgb(90,156,36)");
showQuote(MENUBALL0, "Une sorte de <b>curriculum</b> vitae", "rgb(90,156,36)");
showQuote(MENUBALL1, "La construction d'une langue <b>hexagonale</b>", "cornflowerblue");
showQuote(MENUBALLGRAPHIEROS, "<b>La clé</b>, pour tout savoir sur le graphieros", "cornflowerblue");
showQuote(MENUBALL2, "Ecrire et peindre <b>simultanément</b> dans une langue nouvelle","tomato");
showQuote(MENUBALLJOURNAL, "<b>Le cri du pangolin</b>, journal de confinement 2020","tomato")
showQuote(MENUBALL3, "Applications pour créer de nouveaux glyphes", "gold");
showQuote(MENUBALLWRITER, "Ecrivez en graphieros (clavier physique uniquement)", "gold");
showQuote(MENUBALLFRACTALWRITER, "Ecrivez en graphieros <b>fractal</b> (clavier physique uniquement)", "rgb(255, 160, 71)");
showQuote(MENUBALLTOUCHWRITER, "L'éditeur <b>universel</b> de graphieros", "rgb(255, 197, 71)"),
showQuote(MENUBALLGRAPHIEROSJOURNAL, "Mon journal <b>secret</b> en graphieros", "rgb(100, 194, 237)"),
showQuote(MENUBALLCONTACT, "Pour me <b>contacter</b>", "rgb(163, 224, 211)");

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
            this.style.color = "greenyellow";
        })

        BIOCHOICE[i].addEventListener("mouseout", function(){
          this.style.background = "radial-gradient(white, grey)";
          this.style.color = "black";
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
function showApp(dm, open, closed0, closed1){
    dm.addEventListener("click", function(){
        closed0.style.display = "none";
        closed1.style.display = "none";
        open.style.display = "grid";
        WOW.style.display = "none";
    });
};

showApp(DEVMENU[0], APPS[0], APPS[1], APPS[2]);
showApp(DEVMENU[1], APPS[1], APPS[0], APPS[2]);
showApp(DEVMENU[2], APPS[2], APPS[0], APPS[1]);

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
    const GLYPHCODE = document.getElementById("glyphCode");
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
        GLYPHCODE.value = "";

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
          oneCircle.setAttributeNS(null, "fill", "tomato");
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
            GLYPHCODE.value = LTM.innerHTML.split('&lt;').join('<').split('&gt;').join('>');
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

//APP1
(function createFractalGlyph(){

    const SVGWRAPPER = document.getElementById("wrapper_F");
    const sides = 6;
    const xmlns = "http://www.w3.org/2000/svg";
    const SVG = document.createElementNS(xmlns, "svg");
    SVG.id = "baseSVG_F";
    SVG.setAttributeNS(null, "viewBox", "0 0 8192 8192");
    const STM = document.getElementById("STM_F");
    const LTM = document.getElementById("LTM_F");
    const PRINTER = document.getElementById("PRINTER_F");
    
    let svgWidth = 240;
    let svgHeight = 240;
    let Xcenter = 4096;
    let Ycenter = 4096;
    let circles = [];
    let Xarray = [];
    let Yarray = [];
    let allInputCircles = [];
    let drawnLines = [];
    let size = 2880; 


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
                circle.setAttributeNS(null, "class", "inputCirclesF");
                circle.setAttributeNS(null, "cx", Xarray[i]);
                circle.setAttributeNS(null, "cy", Yarray[i]);
                circle.setAttributeNS(null, "r", 480);
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
          oneCircle.setAttributeNS(null, "fill", "tomato");
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
              path.setAttributeNS(null, 'stroke-width', 160);
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
      
        const BTNCUT = document.getElementById("CUT_F");
      
        BTNCUT.addEventListener("click", function(){
          let path = document.createElementNS(xmlns, "path");
          path.setAttributeNS(null, 'stroke', "greenyellow");
          path.setAttributeNS(null, 'stroke-width', 160);
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

    let color = 220;
    let strokeWidth = 161;

      (function print(){
        const BTNPRINT = document.getElementById("PRINT_F");

        BTNPRINT.addEventListener("click", function(){
            let outputSVG = document.createElementNS(xmlns, "svg");
            let outlineSVG = document.createElementNS(xmlns, "svg"); //thin outline to help distinguishing glyphs on zoom
        
            outputSVG.setAttributeNS(null, "viewBox", "0 0 8192 8192");
            outlineSVG.setAttributeNS(null, "viewBox", "0 0 8192 8192");
        
            outputSVG.setAttributeNS(null, "width", svgWidth);
            outputSVG.setAttributeNS(null, "height", svgHeight);
            outlineSVG.setAttributeNS(null, "width", svgWidth);
            outlineSVG.setAttributeNS(null, "height", svgHeight);
            
            outputSVG.setAttributeNS(null, "stroke-width", strokeWidth);
            outlineSVG.setAttributeNS(null, "stroke-width", strokeWidth + 20);
        
            outputSVG.setAttributeNS(null, "background", "transparent");
            outlineSVG.setAttributeNS(null, "background", "transparent");
        
            outputSVG.setAttributeNS(null, "stroke-linecap", "round");
            outputSVG.setAttributeNS(null, "stroke-linejoin", "round");
            outlineSVG.setAttributeNS(null, "stroke-linecap", "round");
            outlineSVG.setAttributeNS(null, "stroke-linejoin", "round");
        
            outputSVG.setAttributeNS(null, "fill", "none");
            outlineSVG.setAttributeNS(null, "fill", "none");
        
            outputSVG.setAttributeNS(null, "class", "outputSVG");
            outlineSVG.setAttributeNS(null, "class", "outlineSVG");
            // outputSVG.setAttributeNS(null, "stroke", color);
            outputSVG.setAttributeNS(null, "stroke", `rgb(${color}, ${color}, ${color})`);
            outlineSVG.setAttributeNS(null, "stroke", "rgba(255,255,255,1)"); 
        
            outputSVG.setAttributeNS(null, "position", "absolute");
            outlineSVG.setAttributeNS(null, "position", "absolute");
                
            outputSVG.innerHTML = LTM.innerHTML.split('&lt;').join('<').split('&gt;').join('>');
            outlineSVG.innerHTML = LTM.innerHTML.split('&lt;').join('<').split('&gt;').join('>');
        
            PRINTER.appendChild(outlineSVG);
            PRINTER.appendChild(outputSVG);
            svgWidth /= 2;
            svgHeight /= 2;
            color /= 1.3;
            strokeWidth *=1;
        });
      }());

      (function clear(){
        const BTNCLEAR = document.getElementById("CLEAR_F");

        BTNCLEAR.addEventListener("click", function(){
          STM.innerHTML="";
          SVGWRAPPER.innerHTML="";
          createSvg();
        })
      }());

      (function wash(){
        const BTNWASH = document.getElementById("WASH_F");
        BTNWASH.addEventListener("click", function(){
            PRINTER.innerHTML = "";
            svgWidth = 240;
            svgHeight = 240;
            color = 220;
            strokeWidth = 161;
        });
      }());

      (function zoom(){
        const SVGS = document.getElementsByClassName("outputSVG");
        const SVGoutlines = document.getElementsByClassName("outlineSVG");
        const btnZoomIn = document.getElementById("ZOOMIN");
        const btnZoomOut = document.getElementById("ZOOMOUT");
      
        btnZoomIn.addEventListener("click", function(){
        for(i = 0; i < SVGS.length; i += 1){
          let oneHeight = SVGS[i].clientHeight;
          let oneWidth = SVGS[i].clientWidth;
          let oneOutlineH = SVGoutlines[i].clientHeight;
          let oneOutlineW = SVGoutlines[i].clientWidth;
          SVGS[i].setAttributeNS(null, "height",`${oneHeight * 2}`);
          SVGS[i].setAttributeNS(null, "width",`${oneWidth * 2}`);
          SVGoutlines[i].setAttributeNS(null, "height",`${oneOutlineH * 2}`);
          SVGoutlines[i].setAttributeNS(null, "width",`${oneOutlineW * 2}`);
      
          SVGS[i].setAttributeNS(null, "z-index", -1);
          SVGoutlines[i].setAttributeNS(null, "z-index", -1);
        } 
      });
      
      btnZoomOut.addEventListener("click", function(){
      
        for(i = 0; i < SVGS.length; i += 1){
          let oneHeight = SVGS[i].clientHeight;
          let oneWidth = SVGS[i].clientWidth;
          let oneOutlineH = SVGoutlines[i].clientHeight;
          let oneOutlineW = SVGoutlines[i].clientWidth;
      
          SVGS[i].setAttributeNS(null, "height",`${oneHeight / 2}`);
          SVGS[i].setAttributeNS(null, "width",`${oneWidth / 2}`);
          SVGoutlines[i].setAttributeNS(null, "height", oneOutlineH /2);
          SVGoutlines[i].setAttributeNS(null, "width", oneOutlineW /2);
      
          SVGS[i].setAttributeNS(null, "z-index", -1);
          SVGoutlines[i].setAttributeNS(null, "z-index", -1);
        } 
      });
      }());

}());

(function showForm(){
  const FORM = document.getElementById("form0");
  const BTNFORM = document.getElementById("arrow");
  BTNFORM.addEventListener("click", function(){
    FORM.style.display = "grid";
  })
}());