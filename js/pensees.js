(function animateMenuOnHover(){
    
    const MAIN = document.getElementById("MAIN");
    const PAGETITLE = document.getElementById("pageTitle");
    const HOME = document.getElementById("HOME");
    const TEXTS = document.getElementById("texts");
    const POETRY = document.getElementById("poetry");
    const PICS = document.getElementById("pics");
    const JSFIDDLES = document.getElementById("jsFiddles");
    const PROSE = document.getElementById("prose");
    const POESIE = document.getElementById("poesie");
    const IMAGE = document.getElementById("image");
    const CODE = document.getElementById("code");

    let size = 100;

    const green = "var(--green)";
    const tomato = "var(--tomato)";
    const cornflowerblue = "var(--cornflowerblue)";
    const gold = "var(--gold)";

    //HTML TAGS
    const _img = '<img class="IMAGE_pics" src="pics/';
    const imgDiff = '>';
    const img_ = '">';

    //paragraphs for full texts
    const _p = '<p class="P_p" style="border-left:1px solid ';
    const _p_ = '">';
    const p_ = '</p>';

    //style for dates
    const _d = '<p class="date" style="color:';
    const _d_ = '">';
    const d_ = "</p>";

    //main page titles
    const _t = '<div class="title" style="color:';
    const _t_= '">';
    const t_ = '</div>';

    //div for larger grid
    const _g = '<div class="largeGrid"'; //add style
    const _g_ = '>';
    const g_ ='</div>';

    const MENU = [
        { 
            category: TEXTS,
            OPEN_radius: `0 ${size}px 0 ${size}px`,
            OPEN_background: "var(--green)",
            OPEN_shadow: "3px 3px 7px grey",
            CLOSE_radius: "0 0 30px 0",
            CLOSE_background: "",
            CLOSE_shadow: "",
            title: `${_t}${green}${_t_}PROSE${t_}`,
            content: [
                `${_p}${green}${_p_}<img src="pics/logo_write_green.png" style="width:100%;">${p_}`,
                `${_d}${green}${_d_}15 juillet 2020${d_}`,
                `${_p}${green}${_p_}Les parois du cyclone s'agitent un peu plus chaque jour, comme si le tournoyant s'approchait de nos vies encore protégées.<br><br>Alors que la vague épidémique continue de s'intensifier sur la Terre, les français qui le peuvent s'oublient en congés, profitant de ce récent engouement à l'échelle de l'histoire de l'espèce qui consiste à se faire cuire le cul sur du sable au bord de l'océan, qu'avant de pouvoir explorer les humains considéraient avec crainte.<br><br>Je n'ai aucun goût pour ce genre de vacance. Je me souhaite habité, par des loups et des pensées, et si d'occasion je me promenais au bord de l'eau, je la voudrais agitée, rebelle, je la voudrais danger.${p_}`,
                `${_d}${green}${_d_}14 juin 2020${d_}`,
                `${_p}${green}${_p_}Cette sensation d'être en arrêt dans le coeur d'un cyclone maintient en suspension dans l'air un calme étranger, dont l'aspect inerte enclenche par contraste l'écoute d'un tumulte intérieur.<br><br>
                C'est la demi-vie de la vie d'avant qui déroule sa pelote d'activité; il est encore impossible de voir plus loin que la pointe du masque. En a-t-il déjà été autrement? Je crois qu'on s'imagine que l'horizon est visible, alors qu'on ne semble voir que les ombres d'une caverne intérieure. Et peut-être qu'on s'assassinerait soi-même si l'on osait sortir par curiosité, et que l'on revenait avec la richesse insoutenable de quelque <i>vérité</i>.
                ${p_}`,
            ]    
        },

        { 
            category: POETRY, 
            OPEN_radius: `${size}px 0 ${size}px 0`, 
            OPEN_background: "var(--tomato)", 
            OPEN_shadow: "-3px 3px 7px grey",
            CLOSE_radius: "0 0 0 30px",
            CLOSE_background: "",
            CLOSE_shadow: "" ,
            title: `${_t}${tomato}${_t_}POESIE${t_}`,
            content: [
                `${_d}${tomato}${_d_}1er mai 2020${d_}`,
                `${_p}${tomato}${_p_}
                Une pensée perdue pour une idée pas née<br>
                Laissée nonchalante sur un bout de sol<br>
                Elle venait du lointain des années<br>
                Et dirigeait comme une boussole<br>
                Le fil du tuteur des désirs<br>
                Une pensée laissée là<br>
                A vibrer et rosir<br>
                Comme tous ceux-là<br>
                Pensaient grandir<br>
                Sans en rire.
                ${p_}`,
                `${_d}${tomato}${_d_}27 avril 2020${d_}`,
                `${_p}${tomato}${_p_}
                Ce matin rien <br>
                Et demain non plus <br>
                Promène ton chien <br>
                Avant l'afflux <br><br>
                Presque dehors <br>
                La cohorte des corps <br>
                Hurle contrit <br>
                Depuis ta patrie <br><br>
                Et demain rien <br>
                Le lendemain peut-être <br>
                Tu promèneras tes biens <br>
                Sans en omettre <br><br>
                Tout comme avant <br>
                Juste avant la misère <br>
                Ton rire bravant <br>
                La rouge lumière <br><br>
                Ainsi d'après <br>
                On fit de liberté <br>
                Un petit cyprès <br>
                Sans trop nous heurter
                ${p_}`,
            ]
        },

        { 
            category: PICS, 
            OPEN_radius: `${size}px 0 ${size}px 0`, 
            OPEN_background: "var(--cornflowerblue)", 
            OPEN_shadow: "-3px -3px 7px grey",
            CLOSE_radius: "0 30px 0 0",
            CLOSE_background: "",
            CLOSE_shadow: "",
            title: `${_t}${cornflowerblue}${_t_}IMAGE${t_}`,
            content: [
                `${_d}${cornflowerblue}${_d_}14 juin 2020${d_}`,
                `${_g}style="background: black; box-sizing:border-box; padding:10px; color: white;"${_g_}
                <p style="margin:0 auto; width: 100%; max-width:500px">Impressions végétales, minérales et animales à l'été qui s'impose, au parc de Saint Cloud.</p>
                <img src="pics/sc0.jpg"style="border-radius:15px 0 0 0;"><img src="pics/sc1.jpg"><img src="pics/sc2.jpg"><img src="pics/sc3.jpg"><img src="pics/sc4.jpg"><img src="pics/sc5.jpg"><img src="pics/sc6.jpg"><img src="pics/sc7.jpg"> 
                ${g_}`,
                `${_d}${cornflowerblue}${_d_}7 juin 2020${d_}`,
                `${_p}${cornflowerblue}${_p_}Je suis parvenu à terminer cette première phase du visage préoccupé de K avant de reprendre le chemin du bureau. Allez jeter un oeil sur le journal, pour juger de mes pensées alors que j'étais à la fois libre et enfermé: <a class="inLink" target="_blank" href="journal.html">cliquez ici</a>${p_}`,
                `${_img}k3.jpg"style="border-radius:20px 0 0 0;"${imgDiff}`,
                `${_img}k4.jpg${img_}`,
                `${_img}k5.jpg${img_}`,
                `${_img}k6.jpg${img_}`,
                `${_img}k7.jpg${img_}`,
                `${_img}k8.jpg${img_}`,
                `${_img}k9.jpg${img_}`,
                `${_img}k10.jpg${img_}`,
                `${_img}k11.jpg${img_}`,
                `${_img}k12.jpg${img_}`,
                `${_img}k13.jpg${img_}`,
                `${_img}k14.jpg${img_}`,
                `${_p}${cornflowerblue}${_p_}On distingue très clairement une accélération dans les dernières étapes: j'étais pressé de finir avant de devoir changer d'état d'esprit par la force d'un quotidien altéré.${p_}`,
                `${_p}${cornflowerblue}${_p_}Les premières lignes du texte sont apparues cette semaine. Cette phase sera beaucoup plus longue que la précédente.<br><br><img src="pics/k15.jpg" style="width:100%; border-radius:; border:1px solid white;">${p_}`,
                `${_d}${cornflowerblue}${_d_}30 mai 2020${d_}`,
                `${_g}style="background: black; box-sizing:border-box; padding:10px; color: white;"${_g_}
                <img src="pics/promenade0.jpg"style="border-radius:15px 0 0 0;"><img src="pics/promenade2.jpg"><img src="pics/promenade1.jpg"><p style="margin:0 auto; width: 100%; max-width:500px">Impressions végétales d'une promenade au Parc de Saint Cloud, le matin de sa réouverture.</p> 
                ${g_}`,

            ]
        },

        { 
            category: JSFIDDLES, 
            OPEN_radius: `0 ${size}px 0 ${size}px`, 
            OPEN_background: "var(--gold)", 
            OPEN_shadow: "-3px -3px 7px grey",
            CLOSE_radius: "30px 0 0 0",
            CLOSE_background: "",
            CLOSE_shadow: "",
            title: `${_t}${gold}${_t_}CODE${t_}`,
            content: [
                `${_d}white${_d_}25 juillet 2020${d_}`,
                `${_p}white${_p_}J'ai achevé hier la programmation d'une bibliothèque JavaScript, qui permet d'insérer très facilement dans une page HTML des textes en graphieros, linéaire, fractal, ou moléculaire.<br><br>Je repense avec effroi à ces heures passées à coder chaque coordonnée de chaque segment de chaque glyphe de chaque mot. Ce temps-là était-il formateur? Peut-être suffisamment dans la mesure où il aurait généré le désir d'automatiser ces tâches microscopiques, pour pouvoir se concentrer sur le texte lui-même.${p_}`,
                `${_d}white${_d_}18 juillet 2020${d_}`,
                `${_p}white${_p_}Le graphieros est une idéolangue, sans doute aussi difficile d'accès qu'une autre langue basée sur des idéogrammes, dont il faut maîtriser à la fois le lexique, 450 glyphes, la grammaire, relativement basique, mais surtout la logique de formation de mots plus complexes à partir d'agglutinations de glyphes.<br><br>En prenant simplement pour référence les<a style="color:cornflowerblue;" target="_blank" href="https://graphieros.com/php/glyphs.php">glyphes de base</a>, il est possible de comprendre ce que signifie chaque glyphe pris isolément. Pour autant, la compréhension d'un agglutinat doit être plus difficile d'accès. Que signifierait par exemple ces trois concepts liés de <b>"habiter-tout-être"</b> ? Pris hors contexte, arriverait-on seul à la conclusion que cela désigne pour moi le concept d'<b>univers</b> ? Saurait-on comprendre par <b>"vivre-pour"</b> que je veux dire <b>aimer</b> ?<br><br>J'attends avec un espoir non nul mais faible le jour où quelqu'un aura pris le temps de composer un texte avec des agglomérats fruits de sa propre pensée, pour que je puisse faire l'expérience de l'interprétation d'une autre logique; et ce tout spécialement si la personne qui commet ce texte est un locuteur d'une autre langue que la mienne, et d'une autre région du monde, d'une culture sans mesure avec l'occident.${p_}`,
                `${_d}white${_d_}13 juillet 2020${d_}`,
                `${_p}white${_p_}Comme il était fâcheux qu'il ne fût permis d'utiliser les éditeurs de graphieros à partir d'un clavier tactile, je commis une application qui autorise d'écrire en graphieros à partir tout écran, grâce à un clavier virtuel. Quand un glyphe est présent dans la base, reconnu par sa phonologie ou par sa traduction en français, un aperçu s'affiche. En choisissant alors de valider, le glyphe s'écrit sur l'écran, et le son du glyphe est prononcé.<br><br><a style="color:cornflowerblue;" href="https://graphieros.com/touch_writer/touch_writer.html" target="_blank">Cliquez ici pour découvrir</a><br><br>Comme toute la base de données est incluse dans le code JavaScript, car je souhaitais pouvoir utiliser l'application hors ligne, un délai est perceptible entre le moment où un glyphe s'affiche à l'écran et le moment où l'on peut entendre sa prononciation.<br><br>J'ai aussi rajouté un bouton permettant de générer une image à partir du texte en graphieros, si l'utilisateur souhaite conserver le fruit de son oeuvre.${p_}`,
                `${_d}white${_d_}04 juillet 2020${d_}`,
                `${_p}white${_p_}Cette fois-ci je viens de terminer d'écrire un programme qui permet d'écrire en graphieros fractal avec un clavier d'ordinateur.<br><br><a style="color:cornflowerblue;" href="https://graphieros.com/fractal_gwriter/fractal_gwriter.html" target="_blank">Cliquez ici pour jeter un coup d'oeil</a><br><br>Après deux semaines où j'ai pratiqué le code quotidiennement, pendant trois heures en moyenne, je porte l'impression d'avoir un peu progressé. Ce qui a changé: l'utilisation des <i>regexp</i>, qui permettent de manipuler des textes; un recours plus systématique à des fonctions au lieu de répéter du code, même si cela est encore trop présent à mon goût; et des doubles nichées dans des boucles.<br><br>Je suis plutôt satisfait du résultat, qui permet de faire des <a style="color:cornflowerblue;" href="https://graphieros.com/fractal_gwriter/fractal_gwriter_c.mp4" target="_blank">choses comme ça.</a>${p_}`,
                `${_d}white${_d_}27 juin 2020${d_}`,
                `${_p}white${_p_}Je viens de terminer la programmation de cette application qui permet d'écrire en graphieros directement avec un clavier d'ordinateur.<br><br><a style="color:cornflowerblue;" href="https://graphieros.com/gwriter/gwriter.html" target="_blank">Cliquez ici pour jeter un coup d'oeil</a><br><br>Je me souviens avoir rêvé d'avoir une telle application sous la main, il y a deux ans, quand je codais encore péniblement chaque segment de chaque glyphe que je saisissais dans un dictionnaire.<br><br>Alors je suis satisfait, un instant, et puis je passerai à autre chose. C'est ainsi que les vivants vivent.${p_}`,
                `${_d}white${_d_}11 juin 2020${d_}`,
                `${_p}white${_p_}Depuis quelques temps je me mets activement à apprendre Python, pusiqu'il peut me permettre de gagner beaucoup de temps grâce à l'automatisation de certaines tâches dans le cadre de mon emploi.<br><br>
                Python est un beau langage de programmation, élégant et sans fioriture, précis et racé. Passer de Javascrit à Python, c'est un peu comme sauter du camion à la voiture volante. C'est un gain en terme de maniabilité, et une perte de sensation parce que la terre s'est dérobée.${p_}`,
                `${_d}white${_d_}7 juin 2020${d_}`,
                `${_p}white${_p_}Cela fait presque un an que je me suis mis à apprendre à coder en JavaScript. J'ai tenu depuis le début à ne pas utiliser de framework (comme <i>React</i> par exemple) ni de bibliothèque (comme <i>jQuery</i> par exemple), car je voulais apprendre le fonctionnement du langage JS avant toute chose, et pas commencer en apprenant quelque chose qui vient enrober ce langage.<br><br> 
                Il semble d'ailleurs que ce soit là une recommandation partagée par des codeurs confirmés, c'est du moins ce que j'ai pu voir dans des nombreuses vidéos où lesdits codeurs confirmés font part de leurs recommandations pour les aspirants.<br><br>
                C'est un vrai plaisir de structurer son code comme on l'entend. Si vous cliquez droit pour regarder la source de cette page, par exemple, vous verrez que le code HTML est presque totalement vide, car tout le contenu est généré par le JavaScript, à travers une sorte de mini bibliothèque de styles que je me suis confectionnée. Plutôt que d'apprendre une bibliothèque extérieure, tenter de s'en construire une qui soit personnelle est beaucoup plus intéressant. Il y a quelque chose de bizarrement satisfaisant à laisser le HTML comme une coquille vide.<br><br>
                J'aime aussi l'idée de limiter les pages HTML, et de remplacer celles-ci par des fenêtres modales discrètes. Le seul problème est qu'il n'est pas possible de créer des liens vers ces fenêtres modales. Mais si l'on réserve les liens vers les menus, pour lesquels les pages HTML sont justifiées, alors cela peut suffire, en tout cas pour le moment.${p_}`
            ],
        }
    ];

    function SHOW_MODAL(mainButton, colour, title, contain){
        mainButton.addEventListener("click", function(){
            document.body.style.transition = "background 0.61803398875s ease";
            document.body.style.background = `radial-gradient(black, ${colour})`;
            HOME.style.visibility = "hidden";
            PAGETITLE.style.visibility = "hidden";
            let modal_frame = document.createElement("DIV");
            let btn_quit_modal = document.createElement("DIV");
            let inside_container = document.createElement("DIV");
    
            modal_frame.className = "modal_frame";
            btn_quit_modal.className = "quit_modal";
            btn_quit_modal.style.background = `radial-gradient(at bottom right, white, ${colour})`;
            btn_quit_modal.innerHTML = "X";

            modal_frame.appendChild(btn_quit_modal);
            modal_frame.appendChild(inside_container);
            document.body.appendChild(modal_frame);

            inside_container.className = "inside_container";

            inside_container.innerHTML += title;
            function displayPicturesInFrame(pix){
                inside_container.innerHTML += pix;
            }
            
            contain.forEach(displayPicturesInFrame);

            btn_quit_modal.addEventListener("click", function(){
                document.body.removeChild(modal_frame);
                modal_frame.removeChild(btn_quit_modal);
                modal_frame.removeChild(inside_container);
                inside_container.innerHTML = "";
                HOME.style.visibility = "initial";
                document.body.style.background = "";
                PAGETITLE.style.visibility = "initial";
            })

        })
    }


    function openModalWindow(menu){
        SHOW_MODAL(menu.category, menu.OPEN_background, menu.title, menu.content);
    }

    MENU.forEach(openModalWindow);


    (function colorizeTitle(){

        const blog_tit = document.getElementById("pageTitle");
        const categories = document.getElementsByClassName("SECOND");

        const colorz = [
            "var(--green)",
            "var(--tomato)",
            "var(--cornflowerblue)",
            "var(--gold)"
        ];

        const meaning = [
            "PROSE",
            "POESIE",
            "IMAGE",
            "CODE"
        ];


        function changeOpacity(opac, trans){
            for(let j = 0; j < categories.length; j += 1){
                let that_menu = categories[j];
                that_menu.style.transition = trans;
                that_menu.style.opacity = opac;
            }
        }

    
        function giveItColorAndMeaning(cat, col, mean){

            cat.addEventListener("mouseover", function(){
                blog_tit.style.color = col;
                changeOpacity(0.3, "opacity 1s ease")
                cat.style.opacity = 1;
                blog_tit.innerHTML = mean;
            });

            cat.addEventListener("mouseout", function(){
                blog_tit.style.color = "rgba(126, 106, 103, 0.11)";
                changeOpacity(1, "opacity 1s ease");
                blog_tit.innerHTML = "BLOG";
            });

        }
    

        let i;
        for(i = 0; i < categories.length; i += 1){
            let that_cat = categories[i];
            let that_col = colorz[i];
            let that_mean = meaning[i]
            giveItColorAndMeaning(that_cat, that_col,that_mean);
        }

    }());
   
}());

