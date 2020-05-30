let COLORZ = [];

(function colorDays(){
  const DAYS = document.getElementsByClassName("calRef");
  const NUMS = document.getElementsByClassName("numJour");
  const DATES = document.getElementsByClassName("numDate");
  const PARAGS = document.getElementsByClassName("numBody");
  const TITLES = document.getElementsByClassName("titre");

  const finDeConfinement = 55;

  let R = 100,
      G = 255,
      B = 0; 

  let incrDAYS = 255 / finDeConfinement;
  let incrNUMS = 255 / NUMS.length; 
  let incrDATES = 255 / DATES.length;  
  
  function gradient(arr, incr){
    let i;
    for(i = 0; i < arr.length; i += 1){
      let one = arr[i];
      let numOne = Number(one.innerHTML);
      
      if(B < 0){
        B += incr;
      };

      if(numOne >= finDeConfinement){
        one.style.background = "white";
        one.style.color = "black";
        one.style.textShadow = "none";
        one.style.fontWeight = "bold";
        COLORZ.push("rgb(255,255,255)");
      }else{
        one.style.background = `rgb(${R},${G},${B})`;
        one.style.color = "black";
        COLORZ.push(`rgb(${R},${G},${B})`);
        R += incr;
        G -= incr;
        if(B < 0){
          B = 0;
        }else{
          B -= incr;
        }
      }
    }
  } 

  gradient(DAYS, incrDAYS);

  R = 100; 
  G = 255;
  B = 0;

  for(i = 0; i < NUMS.length; i += 1){
    let oneDAY = DAYS[i];
    let oneNUM = NUMS[i];
    let oneDATE = DATES[i];
    let onePARAG = PARAGS[i];
    let oneTITLE = TITLES[i];

    if(B < 0){
      B += incrNUMS;
    }

    let thatCOLOR = COLORZ[i];

    // if(Number(oneDAY.innerHTML) < finDeConfinement){
    //   thatCOLOR = `rgb(${R},${G},${B})`;
    // }else{
    //   thatCOLOR = "white";
    // }
    

    oneNUM.style.transition = "all 0.3s ease";
    oneNUM.style.color = thatCOLOR;
    oneDATE.style.color = thatCOLOR;
    oneTITLE.style.color = thatCOLOR;
    onePARAG.style.borderRight = `1px solid ${thatCOLOR}`;
    onePARAG.style.borderLeft = `1px solid ${thatCOLOR}`;

    R += incrNUMS;
    G -= incrNUMS;
    if(B < 0){
      B = 0;
    }else{
      B -= incrNUMS;
    }
  }    

}());

(function showK(){
  const PICS = document.getElementsByClassName("K");
  const TEXTS = document.getElementsByClassName("KText");
  let i;
  let CONTENT  = [
    "14: <br><br> Et ces pensées qui se glissent hors de toi ?",
    "13: <br><br> Quels sont ces mots que taisent tes doigts ?",
    "12: <br><br> Vers quels dialogues intérieurs ?",
    "11: <br><br> Où va ton regard ?",
    "10: <br><br> Au-delà des horizons",
    "9: <br><br> Pour porter la pupille",
    "8: <br><br> Au bord d'un oeil",
    "7: <br><br> Des socles se dessinent",
    "6: <br><br> En attendant la pluie",
    "5: <br><br> Pour un brin d'azur",
    "4: <br><br> Des braises affleurantes",
    "3: <br><br> L'exploration d'une ombre rougeoyante",
    "2: <br><br> Un peu de surface avant l'oblitération",
    "1: <br><br> Un nouveau départ,<br>une nouvelle patience.",
    "0: <br><br> 2723 hexels<br> de 1 cm de haut"
  ];

  for(i = 0; i < PICS.length; i += 1){
    let onePIC = PICS[i];
    let oneTEXT = TEXTS[i];
    let oneCONTENT = CONTENT[i];

    onePIC.addEventListener("mouseover", function(){
      oneTEXT.style.opacity = 1;
      onePIC.style.opacity = 0;
      oneTEXT.innerHTML = "";
      oneTEXT.innerHTML = `Nouveau Jour ${oneCONTENT}`;
    });

  onePIC.addEventListener("mouseout", function(){
    oneTEXT.style.opacity = 0;
    onePIC.style.opacity = 1;
  })
}

}());

(function showEar(){
  const PICS = document.getElementsByClassName("ear");
  const TEXTS = document.getElementsByClassName("earText");
  let i;
  let CONTENT = [
    "15: <br><br> Parler <br> (c'est le titre)",
    "14: <br><br> Avec la danse des bourrasques",
    "13: <br><br> Et le retour au vacarme",
    "12: <br><br> Des secrets sussurés",
    "11: <br><br> Des petits bruits à notre portée",
    "10: <br><br> Et des silences musicaux",
    "9: <br><br> Craquements",
    "8: <br><br> Chuchotements",
    "7: <br><br> Et maintenant tombe la pluie",
    "6: <br><br> Ils font trembler la terre",
    "5: <br><br> Je les entends arriver",
    "4: <br><br> Des mots vont s'y murmurer",
    "3: <br><br> Et maintenant vous entendez ?",
    "2: <br><br> C'est bien parti",
    "1: <br><br> J'espère terminer celui-là avant la fin du confinement",
    "0: <br><br> On peut encore voir un peu du tableau recouvert"
  ];

  for(i = 0; i < PICS.length; i += 1){
    let onePIC = PICS[i];
    let oneTEXT = TEXTS[i];
    let oneCONTENT = CONTENT[i];

    onePIC.addEventListener("mouseover", function(){
      oneTEXT.style.opacity = 1;
      onePIC.style.opacity = 0;
      oneTEXT.innerHTML = "";
      oneTEXT.innerHTML = `Nouveau Jour ${oneCONTENT}`;
    });

  onePIC.addEventListener("mouseout", function(){
    oneTEXT.style.opacity = 0;
    onePIC.style.opacity = 1;
  })
}

}());

(function showEye(){
  const PICS = document.getElementsByClassName("oeil");
  const TEXTS = document.getElementsByClassName("oeilText");
  let i;
  let CONTENT = [
    "10: <br><br> Entendre <br> (c'est le titre)",
    "9: <br><br> Elle envisage l'avènement",
    "8: <br><br> Temps suspendu, jardin joyeux",
    "7: <br><br> On y verrait de la mélancolie",
    "6: <br><br> On dirait de la pluie qui tombe",
    "5: <br><br> Ton regard parlant",
    "4: <br><br> C'était rapide.",
    "3: <br><br> la pupille de K",
    "2: <br><br> Jamais blanc",
    "1: <br><br> La chair",
    "0: <br><br> Avant d'ouvrir l'oeil"
  ];

  for(i = 0; i < PICS.length; i += 1){
    let onePIC = PICS[i];
    let oneTEXT = TEXTS[i];
    let oneCONTENT = CONTENT[i];

    onePIC.addEventListener("mouseover", function(){
      oneTEXT.style.opacity = 1;
      onePIC.style.opacity = 0;
      oneTEXT.innerHTML = "";
      oneTEXT.innerHTML = `Nouveau Jour ${oneCONTENT}`;
    });

    onePIC.addEventListener("mouseout", function(){
      oneTEXT.style.opacity = 0;
      onePIC.style.opacity = 1;
    })
  }

}());

(function showBocamor(){
  const PICS = document.getElementsByClassName("bocamor");
  const TEXTS = document.getElementsByClassName("bocamorText");
  let i;
  let CONTENT = [
    "18: <br><br> Voir <br> (C'est le titre)",
    "17: <br><br> Et pourtant elle parle",
    "16: <br><br> Que vont donner ces forts contrastes ?",
    "15: <br><br> La conclusion est en vue",
    "14: <br><br> Terre",
    "13: <br><br> Cap Horn",
    "12: <br><br> Pétales délicats",
    "11: <br><br> L'invasion des commissures",
    "10: <br><br> L'évidence des complémentaires",
    "9: <br><br> Des idées secrètes",
    "8: <br><br> Premières phrases",
    "7: <br><br> Les cellules ont fleuri",
    "6: <br><br> Ce joli fruit",
    "5: <br><br> Esquisse d'un sourire ?",
    "4: <br><br> Première pulpe",
    "3: <br><br> Premiers contrastes",
    "2: <br><br> Premiers volumes",
    "1: <br><br> Premières lignes",
    "0: <br><br> la grille est tracée"
  ];

  for(i = 0; i < PICS.length; i += 1){
    let onePIC = PICS[i];
    let oneTEXT = TEXTS[i];
    let oneCONTENT = CONTENT[i];

    onePIC.addEventListener("mouseover", function(){
      oneTEXT.style.opacity = 1;
      onePIC.style.opacity = 0;
      oneTEXT.innerHTML = "";
      oneTEXT.innerHTML = `Nouveau Jour ${oneCONTENT}`;
    });

    onePIC.addEventListener("mouseout", function(){
      oneTEXT.style.opacity = 0;
      onePIC.style.opacity = 1;
    })
  }
}());

// function seeLight(L,b,s){

//   const LIGHT = document.getElementById(L);
//   LIGHT.addEventListener("mouseover", function(){  
//     let COLOR = randomizeColor(); 
//     this.style.background = `radial-gradient(white, ${COLOR}, transparent, transparent)`;
//     this.style.height = `${b}px`;
//     this.style.width = `${b}px`;
//   })

//   LIGHT.addEventListener("mouseout", function(){
//     this.style.background = "radial-gradient(white, transparent, transparent)";
//     this.style.height = `${s}px`;
//     this.style.width = `${s}px`;
//   })
// };

// function randomizeColor(){
//   let R = Math.random() * 255,
//       G = Math.random() * 255,
//       B = Math.random() * 255;
//   return `rgba(${R},${G},${B}, 0.5)`; 
// }

// function randomBinary(){
//   let x = Math.random();
//   if(x > 0.5){
//     return "PILE";
//   }else{
//     return "FACE";
//   }
// }

// seeLight("light0", 200, 100);
// seeLight("light1", 150, 75);
// seeLight("light2", 150, 75);
// seeLight("light3", 150, 75);
// seeLight("light4", 150, 75);
// seeLight("light5", 150, 75);
// seeLight("light6", 150, 75);

// (function centerLights(){

//   const CENTER = document.getElementById("light0");

//   const APEX = [
//     document.getElementById("light1"),
//     document.getElementById("light2"),
//     document.getElementById("light3"),
//     document.getElementById("light4"),
//     document.getElementById("light5"),
//     document.getElementById("light6"),
//   ];

//   const MINIPEX = [
//     document.getElementById("minilight0"),
//     document.getElementById("minilight1"),
//     document.getElementById("minilight2"),
//     document.getElementById("minilight3"),
//     document.getElementById("minilight4"),
//     document.getElementById("minilight5")
//   ];

//   const TOPEX = [
//     document.getElementById("toplight0"),
//     document.getElementById("toplight1"),
//     document.getElementById("toplight2"),
//     document.getElementById("toplight3"),
//     document.getElementById("toplight4"),
//     document.getElementById("toplight5")
//   ]

  // const MARGINTOP = ["-91%", "-87%", "-68%", "-62%", "-72%", "-85%"];
  // const MARGINLEFT = ["36%", "50%", "50%", "36%", "23%", "25%"];
  // const TOPEXTOP = ["-85%", "-87%", "-84%", "-74%", "-73%", "-80%"];
  // const TOPEXLEFT = ["73%", "63%", "55%", "61%", "77%", "81%"];

  // let i;
  // let k;

  // CENTER.addEventListener("mouseover", function(){
  //   let binary = randomBinary();

  //   for(i = 0; i < APEX.length; i += 1){
  //     let COLOR = randomizeColor();
  //     APEX[i].style.marginTop = "15%";
  //     APEX[i].style.marginLeft = "76%";
  //     APEX[i].style.background = `radial-gradient(white, ${COLOR}, transparent, transparent)`;
  //     this.style.height = "300px";
  //     this.style.width = "300px";
  //     this.innerHTML = `${binary} &nbsp`;
  //     this.style.color = "black";
  //     this.style.textShadow = "0 1px 1px black";
  //     this.style.fontSize = "1em";
  //     this.style.display = "grid";
  //     this.style.alignItems = "center";
  //     this.style.justifyItems = "center";
  //   };

    // MINIPEX[0].style.marginTop = MARGINTOP[1];
    // MINIPEX[0].style.marginLeft = MARGINLEFT[1];
    // MINIPEX[1].style.marginTop = MARGINTOP[2];
    // MINIPEX[1].style.marginLeft = MARGINLEFT[2];
    // MINIPEX[2].style.marginTop = MARGINTOP[3];
    // MINIPEX[2].style.marginLeft = MARGINLEFT[3];
    // MINIPEX[3].style.marginTop = MARGINTOP[4];
    // MINIPEX[3].style.marginLeft = MARGINLEFT[4];
    // MINIPEX[4].style.marginTop = MARGINTOP[5];
    // MINIPEX[4].style.marginLeft = MARGINLEFT[5];
    // MINIPEX[5].style.marginTop = MARGINTOP[0];
    // MINIPEX[5].style.marginLeft = MARGINLEFT[0];

    // TOPEX[0].style.marginTop = TOPEXTOP[1];
    // TOPEX[0].style.marginLeft = TOPEXLEFT[1];
    // TOPEX[1].style.marginTop = TOPEXTOP[2];
    // TOPEX[1].style.marginLeft = TOPEXLEFT[2];
    // TOPEX[2].style.marginTop = TOPEXTOP[3];
    // TOPEX[2].style.marginLeft = TOPEXLEFT[3];
    // TOPEX[3].style.marginTop = TOPEXTOP[4];
    // TOPEX[3].style.marginLeft = TOPEXLEFT[4];
    // TOPEX[4].style.marginTop = TOPEXTOP[5];
    // TOPEX[4].style.marginLeft = TOPEXLEFT[5];
    // TOPEX[5].style.marginTop = TOPEXTOP[0];
    // TOPEX[5].style.marginLeft = TOPEXLEFT[0];

    // for(k = 0; k < MINIPEX.length; k += 1){
    //   MINIPEX[k].style.background = "radial-gradient(white, tomato, transparent, transparent)";
    // }

    // for(k = 0; k < TOPEX.length; k += 1){
    //   TOPEX[k].style.background = "radial-gradient(white, green, transparent, transparent)";
    // }

  // })

  // CENTER.addEventListener("mouseout", function(){

    // MINIPEX[0].style.marginTop = MARGINTOP[0];
    // MINIPEX[0].style.marginLeft = MARGINLEFT[0];
    // MINIPEX[1].style.marginTop = MARGINTOP[1];
    // MINIPEX[1].style.marginLeft = MARGINLEFT[1];
    // MINIPEX[2].style.marginTop = MARGINTOP[2];
    // MINIPEX[2].style.marginLeft = MARGINLEFT[2];
    // MINIPEX[3].style.marginTop = MARGINTOP[3];
    // MINIPEX[3].style.marginLeft = MARGINLEFT[3];
    // MINIPEX[4].style.marginTop = MARGINTOP[4];
    // MINIPEX[4].style.marginLeft = MARGINLEFT[4];
    // MINIPEX[5].style.marginTop = MARGINTOP[5];
    // MINIPEX[5].style.marginLeft = MARGINLEFT[5];

    // TOPEX[0].style.marginTop = TOPEXTOP[0];
    // TOPEX[0].style.marginLeft = TOPEXLEFT[0];
    // TOPEX[1].style.marginTop = TOPEXTOP[1];
    // TOPEX[1].style.marginLeft = TOPEXLEFT[1];
    // TOPEX[2].style.marginTop = TOPEXTOP[2];
    // TOPEX[2].style.marginLeft = TOPEXLEFT[2];
    // TOPEX[3].style.marginTop = TOPEXTOP[3];
    // TOPEX[3].style.marginLeft = TOPEXLEFT[3];
    // TOPEX[4].style.marginTop = TOPEXTOP[4];
    // TOPEX[4].style.marginLeft = TOPEXLEFT[4];
    // TOPEX[5].style.marginTop = TOPEXTOP[5];
    // TOPEX[5].style.marginLeft = TOPEXLEFT[5];

    // for(k = 0; k < MINIPEX.length; k += 1){
    //   MINIPEX[k].style.background = "radial-gradient(white, transparent, transparent)";
    // }

    // for(k = 0; k < TOPEX.length; k += 1){
    //   TOPEX[k].style.background = "radial-gradient(white, transparent, transparent)";
    // }

//     setTimeout(function(){
//       APEX[0].style.marginTop = "-80%";
//       APEX[0].style.marginLeft = "37%";
//       APEX[0].style.background = "radial-gradient(white, transparent, transparent)";
//     },99.999);

//     setTimeout(function(){
//       APEX[1].style.marginTop = "-50%";
//       APEX[1].style.marginLeft = "85%";
//       APEX[1].style.background = "radial-gradient(white, transparent, transparent)";
//     },83.333);

//     setTimeout(function(){
//       APEX[2].style.marginTop = "-50%";
//       APEX[2].style.marginLeft = "20%";
//       APEX[2].style.background = "radial-gradient(white, transparent, transparent)";
//     },66.666);

//     setTimeout(function(){
//       APEX[3].style.marginTop = "-80%";
//       APEX[3].style.marginLeft = "68%";
//       APEX[3].style.background = "radial-gradient(white, transparent, transparent)";
//     },49.999);

//     setTimeout(function(){
//       APEX[4].style.marginTop = "-23%";
//       APEX[4].style.marginLeft = "35%";
//       APEX[4].style.background = "radial-gradient(white, transparent, transparent)";
//     },33.333);

//     setTimeout(function(){
//       APEX[5].style.marginTop = "-23%";
//       APEX[5].style.marginLeft = "68%";
//       APEX[5].style.background = "radial-gradient(white, transparent, transparent)";
//     },16.666);

//     this.style.height = "100px";
//     this.style.width = "100px";
//     this.style.fontSize = "0em";
//     this.innerHTML = "";

//   })

// }());

function haha(lol, wut, end){
  let LOL = document.getElementById(lol);
  LOL.addEventListener("mouseover", function(){
    this.innerHTML = `( ${wut}! )`;
  });
  LOL.addEventListener("mouseout", function(){
    this.innerHTML = end;
  })
}

haha("haha", "je ne vous le dirai pas", "( ... )");

(function displayTitle(){
  const TITS = document.getElementsByClassName("titre");
  const CALS = document.getElementsByClassName("calRef");
  const DISP = document.getElementById("displayTitle");
  let i;

  for(i = 0; i < CALS.length; i += 1){
    let oneTIT = TITS[i];
    let oneCAL = CALS[i];

    oneCAL.addEventListener("mouseover", function(){
      DISP.innerHTML = oneTIT.innerHTML;
    })

    oneCAL.addEventListener("mouseout", function(){
      DISP.innerHTML = "";
    })
  }
}());

(function pickRandomSentence(){
  const BTN = document.getElementById("randomSentence");
  const DISPLAY = document.getElementById("randomSentenceResult");
  const SENTENCES = document.getElementsByClassName("numBody");
  const JOUR = document.getElementsByClassName("numJour");

  let finDeConfinement = 55;
  let spanColor;
  let spanShadow;
  let spanBackground;
  let spanWeight;
  let confi;
  let randomContent;
  let gatherSentences;
  let randomSentence;   

  BTN.addEventListener("click", function(){

      let r0 = Math.round(Math.random() * SENTENCES.length);
      randomContent = SENTENCES[r0].innerText;
      gatherSentences = randomContent.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);
      let r1 = Math.round(Math.random() * gatherSentences.length);
      let dayQuote = JOUR[r0].innerText.split(/(\d+)/)[1];

      if(r1 === 0){
        r1 = 1; //to never return the title
      }

      if(gatherSentences[r1] === undefined || gatherSentences[r1] === "" || gatherSentences[r1] === " "){
        randomSentence = 'Essaye encore';
      }else{
        randomSentence = `${gatherSentences[r1]}`;
      }

      spanBackground = `radial-gradient(grey, ${COLORZ[r0]})`;

      let lpaq = `<span style="color:${COLORZ[r0]}; font-weight:bold;">&laquo</span>`;
      let rpaq = `<span style="color:${COLORZ[r0]}; font-weight:bold;">&raquo</span>`;

      if(Number(dayQuote) >= finDeConfinement){
        spanColor = "rgb(0,0,0)";
        spanShadow = "none";
        spanWeight = "bold";
        confi = "déconfiné";
      }else{
        spanColor = "rgb(255,255,255)";
        spanShadow = "0 1px 1px black";
        spanWeight = "normal";
        confi = "confiné";
      }

      let i = 0;
      DISPLAY.innerHTML = "";
      DISPLAY.innerHTML = lpaq;

      let interval = setInterval(function(){
        DISPLAY.innerHTML += randomSentence.charAt(i);
        i += 1;
        
        if( i > randomSentence.length){
          clearInterval(interval);
          DISPLAY.innerHTML += ` ${rpaq}`;
          DISPLAY.innerHTML += `<br><br> <a class="dayLinx" href=#J${dayQuote}>Extrait du jour ${confi} <span class="dayLink" style="border: 1px solid ${COLORZ[r0]}; color:${spanColor}; text-shadow:${spanShadow}; background:${spanBackground}; font-weight:${spanWeight}">${dayQuote}</span><br><i>" ${gatherSentences[0]}"</i></a>`;
          BTN.style.border = `2px solid ${COLORZ[r0]}`;

          if(BTN.innerHTML === "Un autre extrait ?"){
            BTN.innerHTML = "Encore un autre extrait ?";
          }
          if(BTN.innerHTML === "Un extrait au hasard ?"){
            BTN.innerHTML = "Un autre extrait ?";
          }

        }
      }, 10);
  
  })

}());

(function showTopLinkOnScroll(){
  const CALENDAR = document.getElementById("CAL");
  const LINKTOP = document.getElementById("LINKTOP");

  let observer = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting === true){
      LINKTOP.style.visibility = "visible";
    }
  }, {threshold: [0]});
  
  observer.observe(CALENDAR);
}());

(function eraseTopLinkAfterClick(){
  const LINKTOP = document.getElementById("LINKTOP");
  LINKTOP.addEventListener("click", function(){
    this.style.visibility = "hidden";
  })
}());

(function sufflePics(){

  const OEIL = document.getElementById("oeil"),
        VISAGE = document.getElementById("visage"),
        OREILLE = document.getElementById("oreille"), 
        BOUCHE = document.getElementById("bouche"),
        BTN = document.getElementById("mixPix");

    BTN.addEventListener("click", function(){
      let _11 = {x: 1, y: 1},
      _12 = {x: 1, y: 2},
      _13 = {x: 1, y: 3},
      _21 = {x: 2, y: 1},
      _22 = {x: 2, y: 2},
      _23 = {x: 2, y: 3},
      _31 = {x: 3, y: 1},
      _32 = {x: 3, y: 2},
      _33 = {x: 3, y: 3};

      let i;

      let OPTIONS = [_11,_12,_13,_21,_22,_23,_31,_32,_33];
      let PAINTINGS = [OEIL, BOUCHE, VISAGE, OREILLE];

      function shuffle(array){
        let currentIndex = array.length, tempVal, randIndex;
        while(0 !== currentIndex){
          randIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          tempVal = array[currentIndex];
          array[currentIndex] = array[randIndex];
          array[randIndex] = tempVal;
        }

        return array;
      }

      shuffle(OPTIONS);

      VISAGE.style.width = "100%";
      BOUCHE.style.width = "100%";

      OEIL.style.opacity = 0;
      VISAGE.style.opacity = 0;
      OREILLE.style.opacity = 0;
      BOUCHE.style.opacity = 0;

      let time = 500;

      shuffle(PAINTINGS);

      for(i = 0; i < PAINTINGS.length; i += 1){
        let one = PAINTINGS[i];
        let position = OPTIONS[i];
        setTimeout(() => {
          one.style.gridColumn = position.x;
          one.style.gridRow = position.y;
          one.style.opacity = 1;
        }, time);

        time *= 1.61803398875;
      }

  })
  

}());