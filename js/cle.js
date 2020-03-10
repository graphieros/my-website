const FR = document.getElementById("french");
const PH = document.getElementById("phono");
const PREZ = document.getElementById("pre");

FR.addEventListener("click", function(){
  FR.style.opacity = 1;
  FR.style.background = "rgb(50,150,50)";
  PH.style.opacity = 0.5;
  PH.style.background = "grey";
  PREZ.innerHTML = "Les traductions en français, ligne à ligne, sont volontairement littérales pour mettre en relief la structure du graphieros.";

  (function holdKey(){
    const WRAPS = document.getElementsByClassName("wrap");
    const PARAGRAPHS = document.getElementsByClassName("paragraph");
    const EXPLAIN = document.getElementsByClassName("explain");
  
    let content = [
      "Sur une table, un <br><br> verre, un récipient <br><br> floral, deux bougies, <br><br> un livre et une <br><br> bouteille. Nous <br><br> croyons que chaque objet est une idée <br><br> distincte, sujet de dimensionnement, alors que...",
  
      "...ce sont des listes d'atomes <br><br> sujets d'interconnexion. Cette intuition <br><br> géniale de Démocrite et <br><br> sa confirmation 2300<br><br>années après, montre<br><br>la matière comme une structure <br><br> sujet de séparation et de connexion, où le positionnement...",
  
      "...des atomes dans le vide fait apparaître ce que <br><br> nous percevons.<br><br> Tout objet serait donc constitutif d'une <br><br> structure, dont la taille dimensionnelle <br><br> minimale serait sujet de connaissance <br><br> comme unité de Planck <br><br> , et peut-être que nous trouverons... ",
  
      "...une clé qui permettra d'aller plus loin <br><br> dans la connaissance du dimensionnement matériel. <br><br> La matière serait donc sujet de positionnement sur cette <br><br> structure, comme des <br><br> sphères sur un jeu <br><br> solitaire. Nous pourrions faire entendre <br><br> que structure qui reçoit la matière serait sujet de...",
      "...construction avec des points. C'est <br><br> une image qui donne-pouvoir-connaître ces <br><br> idées scientifiques pour les utiliser dans <br><br> l'art et le langage. <br><br> Or, si tout commence depuis un point et que <br><br> rien peut être plus petit que cet objet, <br><br> alors les points doivent prendre-position pour construire ce..."
    ];
  
    let i;
  
    for(i = 0; i < PARAGRAPHS.length; i += 1){
      let thatWrap = WRAPS[i];
      let thatP = PARAGRAPHS[i];
      let thatEx = EXPLAIN[i];
      let cont = content[i];
  
      thatWrap.addEventListener("mouseover", function(){
        thatP.style.opacity = 0;
        thatP.style.display = "none";
        thatEx.style.display = "grid";
        thatEx.innerHTML = cont;
        setTimeout(function(){
          thatEx.style.opacity = 0.1;
        },16.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.2;
        },33.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.3;
        },49.99);
        setTimeout(function(){
          thatEx.style.opacity = 0.4;
        },66.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.5;
        },83.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.6;
        },99.99);
        setTimeout(function(){
          thatEx.style.opacity = 0.7;
        },116.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.8;
        },133.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.9;
        },149.99);
        setTimeout(function(){
          thatEx.style.opacity = 1;
        },166.66);
        
      });
  
      thatWrap.addEventListener("mouseout", function(){
        setTimeout(function(){
          thatEx.style.opacity = 0.9;
        },16.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.8;
        },33.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.7;
        },49.99);
        setTimeout(function(){
          thatEx.style.opacity = 0.6;
        },66.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.5;
        },83.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.4;
        },99.99);
        setTimeout(function(){
          thatEx.style.opacity = 0.3;
        },116.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.2;
        },133.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.1;
        },149.99);
        setTimeout(function(){
          thatEx.style.opacity = 0;
        },166.66);
        thatEx.innerHTML = "";
        thatEx.style.display = "none";
        thatP.style.display = "initial";
        thatP.style.opacity = 1;
      })
    }
  
  }());
})

PH.addEventListener("click", function(){
  PH.style.opacity = 1;
  PH.style.background = "rgb(50,150,50)";
  FR.style.opacity = 0.5;
  FR.style.background = "grey";
  PREZ.innerHTML = "La phonologie est indiquée ligne à ligne, pour vous guider dans la prononciation et la musique du graphieros.";

  (function holdKey(){
    const WRAPS = document.getElementsByClassName("wrap");
    const PARAGRAPHS = document.getElementsByClassName("paragraph");
    const EXPLAIN = document.getElementsByClassName("explain");
  
    let content = [
      "tpe kfa ptae-fkai-ptoi-pla, kfa <br><br> ptae-fkai-tba-to, kfa ptae-fkai-tba <br><br> kli-blea-slo, du ptae-fkai-ptoi-frey-tsi, <br><br> kfa ptae-fkai-lvia-lgio te kfa <br><br> ptae-fkai-tba-to-pa-kloi. ka-fy-go-tsi <br><br> kro-tsi kwa sdae ptae ma kfa mea-dea <br><br> kli-rko-slo, pkae-da mea-go-dme, slio kwa...",
    ];
  
    let i;
  
    for(i = 0; i < PARAGRAPHS.length; i += 1){
      let thatWrap = WRAPS[i];
      let thatP = PARAGRAPHS[i];
      let thatEx = EXPLAIN[i];
      let cont = content[i];
  
      thatWrap.addEventListener("mouseover", function(){
        thatP.style.opacity = 0;
        thatP.style.display = "none";
        thatEx.style.display = "grid";
        thatEx.innerHTML = cont;
        setTimeout(function(){
          thatEx.style.opacity = 0.1;
        },16.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.2;
        },33.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.3;
        },49.99);
        setTimeout(function(){
          thatEx.style.opacity = 0.4;
        },66.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.5;
        },83.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.6;
        },99.99);
        setTimeout(function(){
          thatEx.style.opacity = 0.7;
        },116.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.8;
        },133.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.9;
        },149.99);
        setTimeout(function(){
          thatEx.style.opacity = 1;
        },166.66);
        
      });
  
      thatWrap.addEventListener("mouseout", function(){
        setTimeout(function(){
          thatEx.style.opacity = 0.9;
        },16.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.8;
        },33.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.7;
        },49.99);
        setTimeout(function(){
          thatEx.style.opacity = 0.6;
        },66.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.5;
        },83.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.4;
        },99.99);
        setTimeout(function(){
          thatEx.style.opacity = 0.3;
        },116.66);
        setTimeout(function(){
          thatEx.style.opacity = 0.2;
        },133.33);
        setTimeout(function(){
          thatEx.style.opacity = 0.1;
        },149.99);
        setTimeout(function(){
          thatEx.style.opacity = 0;
        },166.66);
        thatEx.innerHTML = "";
        thatEx.style.display = "none";
        thatP.style.display = "initial";
        thatP.style.opacity = 1;
      })
    }
  
  }());
})
