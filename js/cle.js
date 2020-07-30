(function header_submenu_manager(){

  const BOOK = document.getElementById("book_text");
  const headers = document.getElementsByClassName("header");
  const text_color = "rgb(125,119,102)";

  let DIV = document.createElement("DIV");

  DIV.id = "submenu";
  DIV.style.zIndex = 10;
  DIV.style.top = 0;
  DIV.style.width = "90%";
  DIV.style.maxWidth = "600px";
  // DIV.style.height = "200px";
  DIV.style.boxSizing = "border-box";
  DIV.style.padding = "20px";
  DIV.style.position = "fixed";
  DIV.style.marginTop = "100px";
  DIV.style.marginLeft = "50%";
  DIV.style.transform = "translateX(-50%)";
  DIV.style.background = "white";
  DIV.style.borderRadius = "3px";
  DIV.style.boxShadow = `0 2px 10px ${text_color}`;
  DIV.style.fontFamily = "var(--FT)";
  DIV.style.fontSize = "1.3em";
  DIV.style.display = "none";

  let SPAN_TOP = document.createElement("SPAN");

  SPAN_TOP.style.display = "inline-block";
  SPAN_TOP.style.padding = "3px";
  SPAN_TOP.style.paddingLeft = "6px";
  SPAN_TOP.style.paddingRight = "6px";
  SPAN_TOP.style.color = text_color;
  SPAN_TOP.style.borderRadius = "3px";
  SPAN_TOP.style.fontSize = "2em";
  SPAN_TOP.style.fontWeight = "bold";

  let QUIT = document.createElement("DIV");
  QUIT.id = "quit";
  QUIT.style.position = "absolute";
  QUIT.style.top = "20px";
  QUIT.style.right ="20px";
  QUIT.style.height = "30px";
  QUIT.style.width = "30px";
  QUIT.style.background = "tomato";
  QUIT.style.color = "white";
  QUIT.style.display = "grid";
  QUIT.style.alignItems = "center";
  QUIT.style.justifyItems = "center";
  QUIT.style.borderRadius = "3px";
  QUIT.innerHTML = "X";
  QUIT.style.cursor = "pointer";
  QUIT.style.fontFamily = "var(--FT)";
  QUIT.style.zIndex = 20;


  let links_collection = [
    [
      {link:"#preface",name:"Préface, par Thomas Adeux"},
      {link:"#avant_propos0",name:"Avant-propos de la première édition"},
      {link:"#avant_propos1",name:"Avant-propos de la deuxième édition"},
    ],
    [
      {link:"#structure",name:"Structure"},
    ],
    [
      {link:"#graphieros_lineaire",name:"Linéaire"},
      {link:"#graphieros_fractal",name:"Fractal"},
      {link:"#graphieros_moleculaire",name:"Moléculaire"},
      {link:"#modules_poetiques",name:"Modules poétiques"}
    ],
    [
      {link:"#systeme_numerique",name:"Système numérique"},
      {link:"#notation_chimique",name:"Notation chimique des éléments"},
    ],
    [
      {link:"#fonctionnement",name:"Le fonctionnement du graphieros"},
      {link:"#prefixes_generaux",name:"Préfixes généraux"},
      {link:"#prefixes_temporels",name:"Préfixes temporels"},
      {link:"#suffixes",name:"Suffixes"},
      {link:"#genres",name:"Préfixes de genre"},
      {link:"#ponctuation",name:"Ponctuation"},
    ],
    [
      {link:"#phonologie",name:"L'organisation phonologique"}
    ],
  ];

  
  for (let i = 0; i < headers.length; i += 1) {
    let header = headers[i];
    let links = links_collection[i];
    let header_name = headers[i].innerHTML;



    header.addEventListener("mouseover", () => {
      DIV.innerHTML = "";
      BOOK.style.opacity = 0.1;
      DIV.style.display = "initial";
      SPAN_TOP.innerHTML = "";
      SPAN_TOP.innerHTML += `<span class="serif">${header_name}</span><br>`;
      DIV.appendChild(SPAN_TOP);
      DIV.innerHTML += "<br><br>";
      DIV.appendChild(QUIT);

      let link_lib = [];

      links.forEach(link => {
        let a = document.createElement("A");
        a.className = "submenu_links";
        a.style.textDecoration ="none";
        a.style.color = "rgb(70, 114, 196)";
        let nm = document.createTextNode(`${link.name}`);
        a.appendChild(nm);
        a.href = link.link;
        DIV.appendChild(a);
        link_lib.push(a);
        DIV.innerHTML += "<br>";
      });
      document.body.appendChild(DIV);

    });
  }

    DIV.addEventListener("click", () => {
      document.body.removeChild(DIV);
      BOOK.style.opacity = 1;
    })

}());