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
      "Sur une table, un <br><br> verre, un récipient <br><br> floral, deux bougies, <br><br> un livre et une <br><br> bouteille. Nous <br><br> croyons que chaque objet est une idée <br><br> distincte, sujet-de dimensionnement, alors que...",
  
      "...ce sont des listes d'atomes <br><br> sujets d'interconnexion. Cette intuition <br><br> géniale de Démocrite et <br><br> sa confirmation 2300<br><br>années après, montre<br><br>la matière comme une structure <br><br> sujet-de séparation et de connexion, où le positionnement...",
  
      "...des atomes dans le vide fait apparaître ce que <br><br> nous percevons.<br><br> Tout objet serait donc constitutif d'une <br><br> structure, dont la taille dimensionnelle <br><br> minimale serait sujet-de connaissance <br><br> comme unité de Planck <br><br> , et peut-être que nous trouverons... ",
  
      "...une clé qui permettra d'aller plus loin <br><br> dans la connaissance du dimensionnement matériel. <br><br> La matière serait donc sujet-de positionnement sur cette <br><br> structure, comme des <br><br> sphères sur un jeu <br><br> solitaire. Nous pourrions faire entendre <br><br> que structure qui reçoit la matière serait sujet-de...",
      "...construction avec des points. C'est <br><br> une image qui donne-pouvoir-connaître ces <br><br> idées scientifiques pour les utiliser dans <br><br> l'art et le langage. <br><br> Or, si tout commence depuis un point et que <br><br> rien peut être plus petit que cet objet, <br><br> alors les points doivent prendre-position pour construire cette...",
      "...structure qui donne-forme à l'Univers. <br><br> L'observation de la nature fait-connaître <br><br> à nous souvent qu'elle s'approche de <br><br> l'expression d'un optimum dans <br><br> le positionnement des matières ou dans l'utilisation de <br><br> l'énergie. Les structures sujet-de construction <br><br> par cette économie sont des formations...",
      "...vertueuses, tant à la dimension atomique comme <br><br> le diamant, ou la dimention animale <br><br> comme les abeilles avec ce <br><br> génie ingénirique. Ce <br><br> donc pour que matière existe, est nécessaire que <br><br> un point deuxième et un <br><br> point troisième vienent-autour de ce point...",
      "...premier, sans le toucher ou le croiser. <br><br> Dans le fond de la matière nous <br><br> trouverions les idées de Pythagore <br><br> ? Peut-être que c'est nous que <br><br> voyons dans cette structure, cette architecturation <br><br> serait celle des limites du <br><br> corps-humain ? L'artiste peut-trouver dans cette vision...",
      "des solutions pour travailler sa matière dans <br><br> une dimension sujet-de fin. <br><br> Un peintre commencera par un point <br><br> pour marquer une ligne qui est un <br><br> point mouvementé. <br><br> Alors comment cette structure-de-point serait sujet-de <br><br> construction ? Je pense que prendrait-forme-identique...",
      "à celle des abeilles, où cette <br><br> structure-hexagone est nécessaire et <br><br> naturelle.",
      "<i>(à partir d'un point, vers une structure optimisée)</i>",
      "<i>Le dimensionnement de Planck, sujet-de marquage <br><br> par une structure fractale <br><br> qui fait-apparaître triangle-équilatéral, et donc <br><br> hexagone-régulier.</i>",
      "Les atomes sont des objets primordiaux <br><br> qui donnent-pouvoir-évoluer-vers-langage à la matière. <br><br> Ce langage a son vocabulaire, et sa syntaxe. Ces atomes-langage <br><br> prennent-position sur cette structure hexagonale <br><br> en suivant son énergie naturelle <br><br> et sa forme vertueuse. Les connexions entre...",
      "...les points engendrent des mots <br><br> comme des molécules font-croître <br><br> l'ADN et la vie. Et en connectant des <br><br> mots, la pensée-complexe et le langage deviennent existants. <br><br> La complexité de la pensée humaine peut être sujet-de marquage <br><br> avec ces mots hexagonaux"
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
      "...de ma-tsi de-tsi mea-sti-tsi de ptae-tmei-tsi <br><br> pkae-da mea-nto-knoi. de mea-dea-hea <br><br> kli-kea-tpe-hea da DEMOCRITE te <br><br> mea-fa-dea-drei-sola kfa-srei-zno-tsio <br><br> mea-kpoile-srye-stea-sa-tsi kli-ftea, fa-sko <br><br> mea-mtai sme-zai kfa mea-rdo-rpie, <br><br> pkae-da mea-trey te mea-knoi, sdey mea-psu...",
      "de-tsi ptae-tmei-tsi di kio-ne fa-zai de kwa <br><br> ka-fy-go-tsi dri-sta-tsi.<br><br> tew ptae hi-ma dku kli-fa-bdi-vi da kfa <br><br> ptae-rdo-mtai-rpie, glo mea-sai kli-dme <br><br> kli-nia-frya-ma-sai-mni hi-ma pkae-da mea-kno <br><br> sme-azi ptae-kta-kfa da PLANCK <br><br> , te frya-ma kwa ka-fy-go-tsi ftu-waa-tsi...",
      "kfa ptae-kli kwi ftu-fya-frya da le-vdio-fra <br><br> di mea-kno da mea-sai-dme kli-mtai. <br><br> ptae-mtai hi-ma dku pkae-da mea-psu tpe de <br><br> ptae-rdo-mtai-rpie, sme-zai de-tsi <br><br> ptae-nia-glei-vloi-gla-tsi tpe kfa ptae-3go <br><br> kli-slo. ka-fy-go-tsi hi-frya fa-sko <br><br> kwa ptae-fai-rpie kwi rsea mea-mtai hi-ma pkae-da...",
      "mea-ksea vi da-tsi ptae-fky-tsi. de-ma <br><br> kfa ptae-stoia kwi fya-frya-kno de-tsi <br><br> ptae-dea-tsi kli-kpoi-3i-tsi kme ze-de-tsi di <br><br> mea-sa-tae te mea-lgio. <br><br> vroi, zei tew fta fmai kfa ptae-fky te kwa <br><br> ne frya ma vdio kli-sai-ni kwa de ptae, <br><br> slio ptae-fky-tsi dvo-tsi ra-psu kme ksea de...",
      "...mea-mtai-rpie kwi fya-fai boi kio-tew-ma. <br><br> mea-sta-pre da mea-hae-to-trae-frey fa-kno <br><br> boi ka-fy-go-tsi svo kwa de-pkae le-pre da <br><br> mea-fa-zai da kfa mea-vdikeo-meama di <br><br> mea-psu da-tsi mea-mtai-tsi roi di mea-ze da <br><br> mea-3ia. mea-rdo-rpie-tsi pkae-da mea-ksea <br><br> ba de mea-kmia-3ia ma-tsi da-tsi mea-fai-tsi...",
      "...kli-vry-tsi, zlae boi mea-dme kli-tmei sme-zai <br><br> mina tmei ksi vry, roi mea-dme kli-pkia <br><br> sme-zai skew-flae-ksea-kio-ksi-tsi vi de <br><br> mea-kea-hea-tpe-sola-tsi kli-hia-ksea. de <br><br> dku kme kwa mea-mtai sa-si, ma kli-nsio kwa <br><br> kfa ptae-fky kli-du te kfa <br><br> ptae-fky kli-srei fi-le-srye da de ptae-fky...",
      "... kli-kfa, nia-vi pko-de roi kru-de <br><br> di kio-srye-ni da mea-mtai ka-fy-go-tsi <br><br> hi-waa-tsi mea-dea-tsi da PYTHAGORE <br><br> ? frya-ma kwa de-ma ka-fy-go-tsi kwa <br><br> sta-tsi di de mea-mtai-rpie, de mea-hia-kio <br><br> hi-ma de da-tsi mea-srye-fni-psu-tsi da <br><br> ptae-bdi-ka ? ka-tae frya-waa di de mea-sta...",
      "... de-tsi ptae-kme-zle-tsi kme tvai ptae-mtae-sola di <br><br> kfa ptae-dme pkae-da mea-fni. <br><br> kfa ka-tae-klo ftu-fta ba kfa ptae-fky <br><br> kme mrai kfa ptae-via-kpo kwi ma kfa <br><br> ptae-fky kli-vi-pfae. <br><br> slio haw de ptae-rdo-rpie-fky hi-ma pkae-da <br><br> mea-ksea ? ka-fy-go hia kwa hi-ra-fai-sme...",
      "boi de kio-skew-flae-ksea-kio-ksi, sdey de <br><br> ptae-rdo-rpie-ksi ma kli-nsio te <br><br> kli-hae-to-trae-frey.",
      ". <br><br> .. <br><br> ... <br><br> .. ... .. <br><br> ka",
      "mea-dmi da PLANCK, pkae-da mea-mrai <br><br> ba kfa ptae-rdo-fky-rpie kli-dvea-nia-ktea <br><br> kwi fa-zai ptae-glei-srei-gla, te dku <br><br> ptae-glei-ksi-gla.",
      "ptae-tmei-tsi ma-tsi da-tsi ptae-tsi kli-via-tsi <br><br> kwi fya-frya-vlye-kto-lgio-tsi boi mea-mtai. <br><br> de ptae-lgio go mea-sti-vnia-tmei-toi-sola, te <br><br> mea-rdo-lgio-sola. de-tsi ptae-tmei-lgio-tsi <br><br> ra-psu-tsi tpe de ptae-rdo-rpie kli-glei-ksi <br><br> nwo meama-flo mea-3ia-sola kli-hae-to-trae-frey <br><br> te mea-fai-sola kli-vry. mea-knoi-tsi nto ...",
      "ptae-fky-tsi fya-zai-tsi boi-tsi ptae-tmei-toi-tsi <br><br> sme-zai da-tsi ptae-tmei-knoi-tsi fa-grae-tsi <br><br> mea-dna te mea-sa. te nwo meama-knoi da-tsi <br><br> ptae-tmei-toi-tsi, mea-fa-plea te mea-lgio <br><br> vlye-ktp-tsi kli-frya-ma-si-tsi. <br><br> mea-plea kli-hia-ka frya ma pkae-da mea-mrai <br><br> vi de-tsi ptae-tmei-toi-tsi kli-glei-ksi-tsi..."
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
