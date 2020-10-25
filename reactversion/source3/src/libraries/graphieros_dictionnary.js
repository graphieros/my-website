import { findAllInRenderedTree } from "react-dom/test-utils";

//initial y coordinates
let a = 50; //y_top 
let q = 128; //y_mid
let w = 206; //y_bot

//initial x glyph coordinates

let l = 38; //x_left
let lm = 83; //x_left_mid
let m = 128; //x_mid
let rm = 173; //x_right_mid
let r = 218; //x_right 

let graphieros_dictionnary = [
    {
        name:'_drydwa',
        fr:'année',
        path:[[rm,a,lm,a,l,q,lm,w,rm,w,r,q,m,q],[lm,a,r,q,lm,w,m,q,lm,a]],
        fractal:'ez-zq-qw-wx-xd-ds-sw-wd-dz-zs',
        shapes: ['C_l','X_plur'],
        type: 'ideo',
        description: "Le glyphe 'cycle', fusionné avec le glyphe du verbe 'durer', produit une année."
    },
    {
        name:'_dryktu',
        fr:'mois',
        path:[[lm,a,r,q,lm,w,m,q,lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,l,q]],
        fractal:'zs-sw-wz-zd-dw-wx-xe-ez',
        shapes:['RECT', 'TRI_0'],
        type: 'ideo',
        description: "Le nombre quatre, fusionné avec le glyphe du verbe 'durer, produit un mois."
    },
    {
        name:'_dryksi',
        fr:'semaine',
        path:[[lm,a,r,q,lm,w,m,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a]],
        fractal:'zd-dw-ws-sz-ze-ed-dx-xw-wq-qz',
        shapes:['HEX', 'LOS_l'],
        type: 'ideo',
        description: 'Le nombre six, fusionné avec le glyphe du verbe durer, produit une semaine. Pourquoi pas sept? En semaine, on compte depuis zéro...'
    },
    {
        name:'_lki',
        fr: 'chaîner',
        path: [[l, q, rm, a, r, q, rm, w, l, q, lm, a, r, q, lm, w, l, q], [m, q, m, q]],
        fractal:'qz-zd-dw-wq-qe-ed-dx-xq',
        shapes:['HI'],
        type: 'picto',
        description: "Deux chaînons l'un dans l'autre, pour illustrer cette connexion en mouvement."
    },
    {
        name: '_gly',
        fr: 'pétrole',
        path: [[l, q, lm, w, m, q, rm, w, r, q],[lm, a, lm, w],[rm, a, rm, w]],
        fractal:'qw-ws-sx-xd-zw-ex',
        shapes:['PIPE','W'],
        type: 'picto',
        description: "Et ils percèrent la terre pour y trouver la richesse de leurs enfants, et la ruine de la nature.",
    },
    {
        name: '_zba',
        fr: 'syllabe',
        path: [[rm, a, l, q, r, q, lm, w], [lm, a, lm, a], [rm, w, rm, w]],
        fractal:'eq-qd-dw',
        shapes:['N_rrev'],
        type: 'ideo',
        description: "Utilisé en préfixe d'une série de glyphes sallybaires, pour représenter les sons des autres langues."
    },
    {
        name: '_nmo',
        fr: 'nommer',
        path: [[lm, a, r, q, rm, w, lm, w, l, q, lm, a, rm, a, r, q], [lm, w, rm, a], [m, q, rm, w]],
        fractal:'ew-xs-zd-ze-ed-dx-xw-wq-qz',
        shapes:['HEX'],
        type: 'picto',
        description: "Un être humain, inscrit dans un hexagone, comme un homme de Vitruve, il porte le nom de celui qui l'inscrit."
    },
    {
        name: '_sola',
        fr: 'son',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a, r, q]],
        fractal:'zq-qw-wx-xs-se-ed',
        shapes:['ARR_db_l'],
        type: 'ideo',
        description: "Suffixe de possession, à la troisième personne du singulier."
    },
    {
        name: '_sota',
        fr: 'ton',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a, r, q, m, q]],
        fractal:'zq-qw-wx-xs-se-ed-ds',
        shapes:['ARR_db_l','tri_tr'],
        type: 'ideo',
        description: "Suffixe de possession, à la deuxième personne du singulier."

    },
    {
        name: '_kwi',
        fr: 'qui',
        path: [[lm, a, l, q, lm, w], [l, q, rm, w, rm, a], [m, q, m, q], [r, q, r, q]],
        fractal:'zq-qw-qx-xe',
        shapes:['PIC_br'],
        type: 'ideo',
        description: 'Une sorte de flèche qui désigne quelque chose du passé.'
    },
    {
        name: '_ze',
        fr: 'utiliser',
        path: [[l, q, lm, w, rm, w, r, q], [lm, w, lm, a, rm, a, rm, w], [lm, a, rm, w], [rm, a, lm, w]],
        fractal:'ze-ex-xw-wz-zx-we-qw-dx',
        shapes:['X','RECT'],
        type: 'ideo',
        description: "La fusion des glyphes 'fonctionner' et 'toucher' produit le verbe 'utiliser'"
    },
    {
        name: '_vrea',
        fr: 'vrai',
        path: [[l, q, lm, w, rm, a], [lm, a, lm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'qw-we',
        shapes:['X'],
        type: 'ideo',
        description: "Simple, efficace, vrai jusque dans l'essence du mouvement qui le dessine vers le ciel, ce symbole de validité est universel."
    },
    {
        name: '_v3ai',
        fr: 'vouloir',
        path: [[lm, a, m, q, rm, a], [l, q, lm, w, rm, w, r, q]],
        fractal:'zs-se-qw-wx-xd',
        shapes:['COL_b'],
        type: 'ideo',
        description: "Hérité de la forme attribuée au verbe 'donner', puisque vouloir c'est donner à l'avenir la promesse du mouvement."
    },
    {
        name: '_flae',
        fr: 'voler',
        path: [[lm, a, rm, a, r, q], [lm, w, rm, a], [l, q, l, q], [rm, w, rm, w]],
        fractal:'we-ze-ed',
        shapes:['ARR_r'],
        type: 'ideo',
        description: "Une simple flèche vers le ciel, comme une sorte d'hirondelle."
    },
    {
        name: '_vloi',
        fr: 'volume',
        path: [[lm, a, rm, a, r, q], [rm, a, lm, w], [l, q, lm, w, rm, w]],
        fractal:'ze-ed-qw-wx-we',
        shapes:['MA'],
        type: 'ideo',
        description: "Les mouvements de deux dimensions opposées forment l'illusion du volume."
    },
    {
        name: '_sta',
        fr: 'voir',
        path: [[rm, a, l, q, rm, w], [l, q, r, q], [lm, a, m, q, lm, w]],
        fractal:'eq-qx-dq-zs-sw',
        shapes:['POINT_l',],
        type: 'picto',
        description: "Il est fascinant qu'avec sept points il soit possible de dessiner un oeil avec paupière, cils et pupille."
    },
    {
        name: '_ko',
        fr: 'voici',
        path: [[lm, a, lm, a], [rm, a, rm, a], [m, q, m, q], [m,q, l, q, lm, w, rm, w, r, q]],
        fractal:'sq-qw-wx-xd',
        shapes:['COL_b'],
        type: 'picto',
        description: "C'est une main paume ouverte au ciel, qui semble distribuer deux particules légères."
    },
    {
        name: '_vlo',
        fr: 'vitesse',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [rm, a, m, q, rm, w], [l, q, m, q]],
        fractal:'ze-ed-dx-xw-es-sx-qs',
        shapes:['LOS_r'],
        type: 'ideo',
        description: "Un losange considéré dans son mouvement de la gauche vers la droite, laissant une traînée de ses arètes dans le sillage de sa course."
    },
    {
        name: '_vzi',
        fr: 'visage',
        path: [[lm, a, lm, a], [m, q, m, q], [l, q, rm, a, r, q, rm, w, lm, w, l, q]],
        fractal:'qe-ed-dx-xw-wq',
        shapes:['PENTA_l'],
        type: 'picto',
        description: "Une face et deux yeux tournés vers le haut."
    },
    {
        name: '_vzy',
        fr: 'virus',
        path: [[m, q, rm, a, rm, w, lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a]],
        fractal:'zx-xe-es-ze-ed-dx-xw-wq-qz',
        shapes:['HEX'],
        type: 'ideo',
        description: "Bien rangé dans son enveloppe, un brin d'ARN est prêt à se déployer."
    },
    {
        name: '_vle',
        fr: 'violet',
        path: [[l, q, lm, w, rm, w], [lm, a, lm, a], [rm, a, rm, a], [m, q, m, q], [r, q, r, q]],
        fractal:'qw-wx',
        shapes:['MA'],
        type: 'ideo',
        description: "En faisant le tour du cercle chromatique, c'est ici que le violet s'attache."
    },
    {
        name: '_ldo',
        fr: 'vieux',
        path: [[lm, a, m, q, r, q, lm, w, m, q, rm, w], [l, q, l, q], [rm, a, rm, a]],
        fractal:'zx-ws-sd-dw',
        shapes:['TRI_in_br'],
        type: 'picto',
        description: "C'est une sorte de canne, qui porte à l'embout comme une rondelle de caoutchouc, pour bien supporter un vieil organisme."
    },
    {
        name: '_vey',
        fr: 'vieillard',
        path: [[l, q, rm, a, r, q], [lm, a, rm, w], [lm, w, m, q]],
        fractal:'zx-ws-qe-ed',
        shapes:['KA'],
        type: 'picto',
        description: "Un vieil humain avec une canne."
    },
    {
        name: '_vde',
        fr: 'vider',
        path: [[l, q, r, q, rm, a, m, q], [rm, a, rm, w], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qd-de-es-xe',
        shapes:['tri_tr'],
        type: 'ideo',
        description: "Une casserole tournée vers le sol, laissant s'écouler le liquide qu'elle contient."
    },
    {
        name: '_vzey',
        fr: 'vice',
        path: [[lm, w, lm, w], [l, q, lm, a, rm, w, l, q], [rm, a, r, q]],
        fractal:'zx-xq-qz-ed',
        shapes:['TREC_tl'],
        type: 'ideo',
        description: "Hérité du glyphe traduisant l'idée de 'mauvais', lui même hérité du glyphe indiquant le 'faux'."
    },
    {
        name: '_vba',
        fr: 'vibrer',
        path: [[r, q, lm, a, rm, a, m, q, rm, w, lm, w, r, q, m, q], [l, q, l, q]],
        fractal:'ze-es-sd-dw-wx-xs-zd',
        shapes:['POINT_r','HI','E_rev'],
        type: 'ideo',
        description: "Une corde, instable par sa vibration."
    },
    {
        name: '_vry',
        fr: 'vertu',
        path: [[lm, a, lm, a], [l, q, rm, a, lm, w, l, q], [r, q, rm, w]],
        fractal:'qe-ew-wq-xd',
        shapes:['TREC_bl'],
        type: 'ideo',
        description: "Hérité du glyphe traduisant l'idée de 'bon', lui-même hérité du glyphe indiquant le 'vrai'."
    },
    {
        name: '_vrae',
        fr: 'vert',
        path: [[l, q, l, q], [lm, a, lm, a], [lm, w, lm, w], [m, q, m, q], [rm, a, r, q, rm, w]],
        fractal:'ed-dx',
        shapes:['MA'],
        type: 'ideo',
        description: "En faisant le tour du cercle chromatique, c'est ici que le vert se dépose."
    },
    {
        name: '_kto',
        fr: 'vers',
        path: [[l, q, r, q], [rm, a, r, q, rm, w], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qd-ed-dx',
        shapes:['ARR_r'],
        type: 'ideo',
        description: "Une simple flèche vers la droite pour évoquer la direction."
    },
    {
        name: '_rmye',
        fr: 'ver',
        path: [[l, q, lm, w, m, q, rm, w, r, q, lm, a, rm, a]],
        fractal:'qw-ws-sx-xd-dz-ze',
        shapes:['W'],
        type: 'picto',
        description: "Une sorte de lombric, serpentant dans la terre. On trouve un peu de la forme du glyphe qui représente l'eau, sans lequel s'asèche le ver."
    },
    {
        name: '_sloi',
        fr: 'vendre',
        path: [[lm, a, rm, a], [lm, w, l, q, r, q, rm, w, lm, w, m, q, rm, w]],
        fractal:'ze-qd-dx-xw-wq-ws-sx',
        shapes:['MEX_b'],
        type: 'ideo',
        description: "Hérité du glyphe représentant l'idée de 'sur', comme un produit sur une table."
    },
    {
        name: '_pio',
        fr: 'végétal',
        path: [[lm, a, lm, w, r, q], [l, q, rm, w], [lm, w, rm, a]],
        fractal:'zw-wd-ew-qx',
        shapes:['PIC_bl'],
        type: 'picto',
        description: "Hérité du glyphe façonné pour représenter le verbe 'croître', et comme des pousses jaillissant d'un sol incliné."
    },
    {
        name: '_vnia',
        fr: 'varier',
        path: [[l, q, rm, a, lm, a, l, q], [m, q, r, q, rm, w, m, q], [lm, w, lm, w]],
        fractal:'qz-ze-eq-sd-dx-xs',
        shapes:['TRI_out_tl','tri_br'],
        type: 'ideo',
        description: "Trois types de formes; triangle isocèle, triangle équilatéral et point, illustrent l'idée de la variation."
    },
    {
        name: '_vlia',
        fr: 'valoriser',
        path: [[lm, a, rm, a], [l, q, r, q, lm, w, rm, w, l, q]],
        fractal:'ze-qd-dw-wx-xq',
        shapes:['EQ','CROSS_b'],
        type: 'picto',
        description: "Comme un socle glorieux au-dessus duquel flotterait un objet sacré."
    },
    {
        name: '_vkye',
        fr: 'vaincre',
        path: [[rm, a, lm, w, l, q, rm, a, rm, w, rm, w, lm, w], [lm, a, r, q]],
        fractal:'zd-wq-qe-ex-xw-we',
        shapes:['TREC_bl','TREC_sbr','DIAM'],
        type: 'ideo',
        description: "Comme la pointe d'une flèche entrant dans la chair du vaincu."
    },
    {
        name: '_waa',
        fr: 'trouver',
        path: [[l, q, lm, a, lm, w, rm, w, lm, a, r, q], [rm, a, rm, a]],
        fractal:'zw-wx-xz-qz-zd',
        shapes:['TREC_sbl'],
        type: 'ideo',
        description: "Comme une sorte de laser scannant le sol pour révéler l'objet de sa recherche."
    },
    {
        name: '_tro',
        fr: 'trop',
        path: [[lm, a, l, q, lm, w, rm, w, r, q, rm, a], [l, q, r, q], [lm, w, m, q, rm, w]],
        fractal:'zq-qw-wx-xd-de-qd-ws-sx',
        shapes:['C_b','MEX_b'],
        type: 'ideo',
        description: "Comme un panier qui serait trop rempli."
    },
    {
        name: '_bse',
        fr: 'trébucher',
        path: [[lm, a, rm, a, r, q], [l, q, rm, a], [lm, w, m, q], [rm, w, rm, w]],
        fractal:'ze-ed-qe-ws',
        shapes:['KA'],
        type: 'picto',
        description: "Deux jambes en arrière et les bras tentant de retrouver un équilibre manqué."
    },
    {
        name: '_tie',
        fr: 'traverser',
        path: [[rm, a, lm, a, lm, w, rm, w], [l, q, r, q]],
        fractal:'ez-zw-wx-qd',
        shapes:['EQ','MEC_l'],
        type: 'ideo',
        description: "Dans la même veine que les glyphes utilisés pour les verbes 'couper' et 'entailler', une lame passe au travers d'un objet."
    },
    {
        name: '_tvai',
        fr: 'travailler',
        path: [[lm, a, lm, w], [l, q, rm, a, r, q, m, q, rm, w, r, q]],
        fractal:'zw-qe-ed-ds-sx-xd',
        shapes:['tri_br'],
        type: 'picto',
        description: "C'est un peu comme un humain avec un outil à la main, travaillant une pierre, ou touillant une marmite."
    },
    {
        name: '_zit',
        fr: 'transitionner',
        path: [[m, q, l, q, lm, a, m, q, rm, a, r, q, rm, w, lm, w, m, q], [rm, a, rm, w]],
        fractal:'qz-zs-sq-we-ed-dx-xw-xe',
        shapes:['TREC_sbr','tri_tl','tri_out_r'],
        type: 'ideo',
        description: "Le passage d'un triangle équilatéral à un polygone."
    },
    {
        name: '_mne',
        fr: 'transgenre',
        path: [[lm, a, m, q, r, q, rm, w, lm, w, m, q], [lm, w, r, q], [l, q, rm, a]],
        fractal:'zs-sd-dx-xw-ws-wd-qe',
        shapes:['LOS_br','KA'],
        type: 'picto',
        description: "Comme tous les glyphes de genre issus du glyphe 'humain', il peut s'utiliser en préfixe, pour désigner la personne qui agit."
    },
    {
        name: '_tew',
        fr: 'tout',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q], [lm, w, lm, a, r, q, lm, w], [rm, a, rm, w, l, q, rm, a], [l, q, r, q], [lm, a, rm, w], [rm, a, lm, w]],
        fractal:'qz-ze-ed-dx-xw-wq-qd-zx-we-xe-eq-qx-wz-zd-dw',
        shapes:['HEX','TRI_2'],
        type: 'ideo',
        description: "Avec toutes les connexions possibles entre les sept points de l'hexagone, c'est aussi ce glyphe qui peut représenter l'Univers."
    },
    {
        name: '_pko',
        fr: 'toucher',
        path: [[lm, a, lm, w], [rm, a, rm, w], [l, q, lm, w, rm, w, r, q], [m, q, m, q]],
        fractal:'qw-wx-xd-zw-ex',
        shapes:['U','COL_b'],
        type: 'ideo',
        description: "Comme un doigt qui presserait sa pulpe sur une chair tendre et souple."
    },
    {
        name: '_tnogma',
        fr: 'tonne',
        path: [[rm, w, lm, a, rm, a, rm, w, lm, w, l, q, m, q, lm, w], [r, q, r, q]],
        fractal:'xz-ze-ex-xw-wq-qs-sw',
        shapes:['TREC_str','tri_bl'],
        type: 'ideo',
        description: "Glyphe de mesure, basé sur le glyphe utilisé pour le désigner le 'poids'."
    },
    {
        name: '_pley',
        fr: 'tirer',
        path: [[lm, a, l, q, lm, w], [rm, a, m, q, rm, w], [r, q, r, q]],
        fractal:'zq-qw-es-sx',
        shapes:['ARR_db_l'],
        type: 'ideo',
        description: "Deux pointes vers l'arrière, comme l'effort nécessaire à la traction."
    },
    {
        name: '_tra3',
        fr: 'théâtre',
        path: [[l, q, l, q], [lm, w, lm, w], [r, q, lm, a, rm, a, m, q, rm, w]],
        fractal:'xs-se-ez-zd',
        shapes:['Ê_rev'],
        type: 'picto',
        description: "C'est un acteur, dans le mouvement dramatique de se draper le visage."
    },
    {
        name: '_toi',
        fr: 'texte',
        path: [[lm, a, rm, a], [l, q, m, q], [lm, w, rm, w], [r, q, r, q]],
        fractal:'ze-qs-wx',
        shapes:['EQ'],
        type: 'picto',
        description: "Deux paragraphes un point. Un paragraphe"
    },
    {
        name: '_tea',
        fr: 'tête',
        path: [[l, q, l, q], [lm, w, lm, a, rm, a, m, q], [r, q, r, q], [rm, w, rm, w]],
        fractal:'wz-ze-es',
        shapes:['TREC_stl'],
        type: 'picto',
        description: "La façon la plus sommaire de dessiner une nuque et sa tête par l'appui de quatre points."
    },
    {
        name: '_ste',
        fr: 'tester',
        path: [[l, q, l, q], [lm, w, lm, a, rm, a, m, q, r, q], [rm, w, rm, w]],
        fractal:'wz-ze-es-sd',
        shapes:['TREC_stl'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner la 'tête', sans autre forme de procès."
    },
    {
        name: '_trea',
        fr: 'terre',
        path: [[l, q, l, q], [lm, a, rm, w, lm, w, rm, a], [r, q, r, q]],
        fractal:'zx-xw-we',
        shapes:['X'],
        type: 'ideo',
        description: "Des fondations en bas, et des bras vers le ciel. Ainsi des plantes, et des idées."
    },
    {
        name: '_kpoile',
        fr: 'temps',
        path: [[l, q, r, q, rm, a, rm, w, r, q, lm, a, lm, w, r, q], [lm, a, m, q, lm, w]],
        fractal:'qd-de-ex-xd-dz-zw-wd-zs-sw',
        shapes:['TRI_0','TRI_out_r','TRI_in_l','ARR_r'],
        type: 'ideo',
        description: "La fusion des glyphes utilisés pour les verbes 'aller' et 'continer' désignent la persévérance du temps."
    },
    {
        name: '_po',
        fr: 'température',
        path: [[lm, a, lm, w, rm, w], [l, q, m, q], [rm, a, rm, a], [r, q, r, q]],
        fractal:'zw-wx-qs',
        shapes:['MEC_l'],
        type: 'ideo',
        description: "Oui, comme le T de température."
    },
    {
        name: '_tle',
        fr: 'téléphoner',
        path: [[l, q, rm, w, m, q, lm, w, r, q, rm, a, lm, a, l, q, r, q], [lm, w, rm, w]],
        fractal:'qz-ze-ed-dq-qx-xs-sw-wd-wx',
        shapes:['MEX_t','CROSS_b'],
        type: 'picto',
        description: "Une des façons de représenter un ancien téléphone, coiffé de son combiné."
    },
    {
        name: '_zlae',
        fr: 'tant',
        path: [[l, q, lm, a], [lm, w, rm, w, rm, a], [m, q, rm, a, r, q]],
        fractal:'qz-wx-xe-se-ed',
        shapes:['arr_t'],
        type: 'ideo',
        description: "Une désignation vaguement aribtraire, avec une notion de quantité additionnelle représentée par une flèche pointée vers le haut, le plus."
    },
    {
        name: '_sai',
        fr: 'taille',
        path: [[lm, a, l, q, r, q, rm, w], [lm, w, lm, w], [rm, a, rm, a]],
        fractal:'zq-qd-dx',
        shapes:['Z_rev'],
        type: 'ideo',
        description: "Comme un mètre pliable utilisé pour mesurer ce qui passerait à sa portée."
    },
    {
        name: '_stu',
        fr: 'synthétiser',
        path: [[l, q, lm, a, m, q, lm, w, l, q], [rm, a, rm, w], [r, q, r, q]],
        fractal:'qz-zs-sw-wq-ex',
        shapes:['LOS_l'],
        type: 'ideo',
        description: "Partir d'une surface, vers une ligne, vers un point, voilà pour représenter l'essence de la synthèse."
    },
    {
        name: '_sbo',
        fr: 'symboliser',
        path: [[l, q, lm, a, lm, w], [m, q, rm, a, rm, w, r, q]],
        fractal:'qz-zw-se-ex-xd',
        shapes:['PIPE'],
        type: 'ideo',
        description: "Deux formes en miroir, l'une symbolisant l'autre en la simplifiant."
    },
    {
        name: '_tpe',
        fr: 'sur',
        path: [[lm, a, rm, a], [l, q, r, q, rm, w, lm, w, l, q]],
        fractal:'ze-qd-dx-xw-wq',
        shapes:['MEX_b'],
        type: 'picto',
        description: "C'est une table, sur laquelle un objet va se poser."
    },
    {
        name: '_flo',
        fr: 'suivre',
        path: [[l, q, m, q, lm, a, lm, w, m, q], [rm, a, r, q, rm, w]],
        fractal:'ed-dx-qs-sz-zw-ws',
        shapes:['ARR_db_r','TRI_in_l'],
        type: 'ideo',
        description: "Des flèches vers l'avenir, c'est la suite. L'une précède l'autre, sinon la course serait sans suite."
    },
    {
        name: '_pkae',
        fr: 'sujet',
        path: [[lm, a, rm, w, lm, w, lm, a, rm, a, rm, w], [lm, w, m, q], [l, q, rm, a], [r, q, r, q]],
        fractal:'zx-ws-qe-ze-ex-xw-wz',
        shapes:['RECT','KA'],
        type: 'picto',
        description: "Un humain inscrit dans un plan. C'est ainsi que nous faisons sujet, en arborant des limites, en étant encadrés."
    },
    {
        name: '_ske',
        fr: 'sucrer',
        path: [[lm, a, m, q, rm, a], [l, q, r, q, lm, w, rm, w]],
        fractal:'zs-se-qd-dw-wx',
        shapes:['N_weird'],
        type: 'ideo',
        description: "L'un des glyphes de goût, dérivés du glyphe utilisé pour désigner les lèvres."
    },
    {
        name: '_fi',
        fr: 'subjonctif',
        path: [[rm, a, l, q, lm, w], [l, q, r, q], [lm, a, rm, w]],
        fractal:'eq-qw-dq-zx',
        shapes:['X'],
        type: 'ideo',
        description: "Dérivé du glyphe totalement aritraire pour désigner le 'si', avec une notion de passé, dans cette sorte de flèche antérieure."
    },
    {
        name: '_svo',
        fr: 'souvent',
        path: [[rm, w, l, q, lm, w, rm, w, lm, a, r, q, rm, a, lm, a]],
        fractal:'zd-de-ez-zx-xw-wq-qx',
        shapes:['TRI_out_tr','TRI_out_bl','N_lrev'],
        type: 'ideo',
        description: "C'est une sorte de S stylisé, rien d'autre."
    },
    {
        name: '_nde',
        fr: 'sous',
        path: [[l, q, r, q, rm, a, lm, a, l, q], [lm, w, rm, w]],
        fractal:'wx-qd-de-ez-zq',
        shapes:['MEX_t'],
        type: 'picto',
        description: "C'est une table sous laquelle serait posée un objet."
    },
    {
        name: '_sple',
        fr: 'souple',
        path: [[lm, w, m, q, rm, w, lm, w, lm, a, r, q, rm, a, l, q, lm, a], [rm, a, rm, w]],
        fractal:'ws-sx-xw-wz-ze-ex-qz-zd-de-eq',
        shapes:['tri_b','CROSS_t'],
        type: 'ideo',
        description: "Un dérivé du glyphe utilisé pour désigner le 'mou', lui-même totalement arbitraire."
    },
    {
        name: '_3nu',
        fr: 'soumettre',
        path: [[l, q, rm, a], [lm, a, rm, a, r, q], [m, q, rm, w, lm, w]],
        fractal:'ze-ed-qe-sx-xw',
        shapes:['KA'],
        type: 'picto',
        description: "C'est un humain qui pose un genou à terre, en signe de soumission."
    },
    {
        name: '_soma',
        fr: 'soi',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a, r, q, rm, w], [m, q, r, q]],
        fractal:'zq-qw-wx-xs-se-ed-dx-sd',
        shapes:['ARR_db_l','tri_br','tri_tr','LOS_r'],
        type: 'ideo',
        description: "L'un des glyphes de la famille des possessifs, avec sa forme caractéristique."
    },
    {
        name: '_mki',
        fr: 'singe',
        path: [[lm, a, rm, w], [m, q, r, q], [l, q, rm, a], [lm, w, lm, w]],
        fractal:'zx-ds-qe',
        shapes:['KA'],
        type: 'picto',
        description: "Clairement de la famille des hominidés, et pris dans l'instant d'un saut entre deux branches."
    },
    {
        name: '_snea',
        fr: 'simplifier',
        path: [[lm, a, lm, w, m, q, l, q, lm, a], [rm, a, r, q, rm, w]],
        fractal:'qz-zw-ws-sq-ed-dx',
        shapes:['MA'],
        type: 'ideo',
        description: "Une forme intriquée à gauche, qui se dénoue à droite."
    },
    {
        name: '_zei',
        fr: 'si',
        path: [[lm, w, l, q, rm, a], [lm, a, rm, w], [r, q, r, q]],
        fractal:'eq-qw-zx',
        shapes:['RECT_r'],
        type: 'ideo',
        description: "Une sorte de coupure dans le tracé d'un angle, comme la projection d'une autre possibilité à envisager."
    },
    {
        name: '_skwa',
        fr: 'sexe',
        path: [[lm, a, m, q, rm, a, lm, a, l, q, lm, w, rm, w, r, q, rm, a]],
        fractal:'zs-se-ez-zq-qw-wx-xd-de',
        shapes:['HEX','tri_t'],
        type: 'ideo',
        description: "C'est le triangle pelvien, le reste est aritraire."
    },
    {
        name: '_lno',
        fr: 'seul',
        path: [[m, q, m, q], [l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q]],
        fractal:'ze-ed-dx-xw-wq-qz',
        shapes:['HEX'],
        type: 'ideo',
        description: "Seul au milieu de l'univers, comme un point dans un hexagone."
    },
    {
        name: '_trey',
        fr: 'séparer',
        path: [[l, q, lm, a, lm, w, l, q, r, q, rm, a, rm, w, r, q]],
        fractal:'qz-zw-wq-qd-de-ex-xd',
        shapes:['MA','ARR_l','ARR_r','TRI_out_l','TRI_out_r'],
        type: 'ideo',
        description: "C'était un calme losange, avant d'être séparé. Depuis, chacun cherche sa moitié."
    },
    {
        name: '_smu',
        fr: 'sentir',
        path: [[lm, a, l, q, lm, w, rm, w, r, q], [m, q, rm, a]],
        fractal:'zq-qw-wx-xd-es',
        shapes:['C_l'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'goûter', car le sentir et le goûter vont de pair."
    },
    {
        name: '_vye',
        fr: 'sens',
        path: [[l, q, m, q], [r, q, lm, a, rm, a, r, q, rm, w, lm, w, r, q]],
        fractal:'dz-ze-ed-dx-xw-wd-qs',
        shapes:['POINT_r','TRI_out_tr','TRI_out_br'],
        type: 'ideo',
        description: "Utilisé pour désigner le sens ou la signification. C'est une variation sur le thème de la flèche vers le futur."
    },
    {
        name: '_sge',
        fr: 'segmenter',
        path: [[l, q, l, q], [lm, a, lm, a], [lm, w, m, q], [rm, w, rm, w], [rm, a, r, q]],
        fractal:'ws-ed',
        shapes:['DASH'],
        type: 'picto',
        description: "Comme un bâton coupé en deux, avec des miettes témoignant du drame."
    },
    {
        name: '_sky',
        fr: 'sécuriser',
        path: [[lm, w, lm, a, r, q, lm, w], [l, q, l, q], [rm, a, rm, a], [m, q, rm, w]],
        fractal:'wd-dz-zw-xs',
        shapes:['TRI_0'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner le danger. Mais il ressemble aussi à un canneton vu de face, inclinant la tête sur le côté en signe d'étonnement."
    },
    {
        name: '_d3y',
        fr: 'seconde',
        path: [[l, q, l, q], [r, q, r, q], [rm, a, lm, a, rm, w, lm, w]],
        fractal:'ez-zx-xw',
        shapes:['Z_rev'],
        type: 'ideo',
        description: "Une autre sorte de S, tout simplement."
    },
    {
        name: '_so',
        fr: 'se',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a], [m, q, r, q, rm, w]],
        fractal:'zq-qw-wx-xs-se-sd-dx',
        shapes:['ARR_db_l','tri_br'],
        type: 'ideo',
        description: "L'un des glyphes de la famille des possessifs, avec sa forme caractéristique."
    },
    {
        name: '_sle',
        fr: 'saler',
        path: [[l, q, m, q, lm, a, lm, w, rm, w, rm, a, m, q, r, q]],
        fractal:'qd-sz-zw-wx-xe-es',
        shapes:['U'],
        type: 'ideo',
        description: "L'un des glyphes de goût, dérivé du glyphe utilisé pour désigner les lèvres."
    },
    {
        name: '_rgo',
        fr: 'rouge',
        path: [[lm, a, l, q, lm, w], [m, q, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'zq-qw',
        shapes:['MA'],
        type: 'ideo',
        description: "En faisant le tour du cercle chromatique, c'est ici que le rouge explose."
    },
    {
        name: '_rwe',
        fr: 'roue',
        path: [[r, q, m, q, lm, a, l, q, lm, w, m, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'ds-sz-zq-qw-ws',
        shapes:['LOS_l'],
        type: 'picto',
        description: "Une roue pas ronde et son essieu bien droit."
    },
    {
        name: '_rgya',
        fr: 'rongeur',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, r, q, rm, w, m, q, lm, w, l, q]],
        fractal:'qd-dx-xs-sw-wq',
        shapes:['W','tri_br','tri_bl'],
        type: 'picto',
        description: "Voyez-vous les quenottes pointues de celui-ci?"
    },
    {
        name: '_lfaw',
        fr: 'rire',
        path: [[l, q, lm, w, m, q, lm, a], [lm, w, r, q, rm, a, rm, w]],
        fractal:'qw-ws-sz-wd-de-ex',
        shapes:['RECT_r'],
        type: 'picto',
        description: "C'est un humain qui par force de tant rire en tombe sur le sol et se tord de plaisir."
    },
    {
        name: '_rgi',
        fr: 'rigide',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w, r, q, rm, w, l, q, lm, w, r, q], [rm, a, rm, w]],
        fractal:'zs-se-ez-zw-wx-xe-wq-qx-xd-dw',
        shapes:['U_rev','tri_t'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner le dur, lui-même totalement arbitraire."
    },
    {
        name: '_ne',
        fr: 'rien',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'ss',
        shapes:['NE'],
        type: 'ideo',
        description: "Parce qu'il fallait bien quelque chose pour désigner le rien, car sans ces points il n'y aurait pas de rien entre les points."
    },
    {
        name: '_swo',
        fr: 'revenir',
        path: [[l, q, lm, a, lm, w, l, q, m, q, rm, a, rm, w, m, q, r, q]],
        fractal:'dq-qz-zw-wq-se-ex-xs',
        shapes:['ARR_db_l','ARR_l','TRI_out_l','TRI_in_r'],
        type: 'ideo',
        description: "Dans la série des flèches pointées vers le passé, celles-ci sont l'exact opposé du glyphe utilisé pour le verbe 'aller'."
    },
    {
        name: '_rve',
        fr: 'réveiller',
        path: [[m, q, lm, w, lm, a, r, q, l, q, rm, a, rm, w, m, q]],
        fractal:'wz-zd-dq-qe-ex-xs-sw',
        shapes:['PIC_tl','PIC_tr'],
        type: 'picto',
        description: "Une sorte de buste, pris dans ses étirements du réveil. On n'illustre pas le baillement avec sept points."
    },
    {
        name: '_rto',
        fr: 'retourner',
        path: [[rm, w, rm, a, lm, a, lm, w], [l, q, lm, w, m, q], [r, q, r, q]],
        fractal:'qw-ws-wz-ze-ex',
        shapes:['arr_b'],
        type: 'ideo',
        description: "C'est un symbole qu'on retrouve sur des panneaux de circulation."
    },
    {
        name: '_lvoi',
        fr: 'retirer',
        path: [[lm, a, lm, w, m, q, l, q, lm, w], [rm, a, r, q, rm, w]],
        fractal:'zw-ws-sq-qw-ed-dx',
        shapes:['arr_b','MA','tri_bl'],
        type: 'ideo',
        description: "Cette forme est complètement aritraire, et dérivée du glyphe utilisé pour le mot 'pour'."
    },
    {
        name: '_zle',
        fr: 'résulter',
        path: [[l, q, m, q], [lm, a, lm, a], [lm, w, lm, w], [rm, a, rm, w], [r, q, r, q]],
        fractal:'qs-ex',
        shapes:['DASH'],
        type: 'ideo',
        description: "Des données dans un tableau, avec un seul point en sortie."
    },
    {
        name: '_pta',
        fr: 'reptile',
        path: [[lm, w, rm, w, l, q, r, q, lm, a], [m, q, rm, a]],
        fractal:'wx-xq-qd-dz-se',
        shapes:['N_l'],
        type: 'picto',
        description: "C'est une sorte de caducée."
    },
    {
        name: '_rpie',
        fr: 'répéter',
        path: [[r, q, l, q, lm, a, lm, w], [rm, w, rm, a, m, q]],
        fractal:'dq-qz-zw-xe-es',
        shapes:['PIPE'],
        type: 'ideo',
        description: "La même forme en série, pour illustrer l'idée de répétition."
    },
    {
        name: '_fksi',
        fr: 'réparer',
        path: [[r, q, lm, a, m, q, l, q, lm, w, m, q], [rm, a, rm, w]],
        fractal:'xe-dz-zs-sq-qw-ws',
        shapes:['tri_bl'],
        type: 'picto',
        description: "Un humain, un outil à la main, agissant sur un objet. Le glyphe utilisé pour le verbe 'travailler' ressort d'un principe similaire."
    },
    {
        name: '_floi',
        fr: 'remplir',
        path: [[l, q, r, q, rm, w, m, q], [rm, a, rm, w], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qd-dx-xs-ex',
        shapes:['arr_b','tri_br'],
        type: 'ideo',
        description: "C'est une sorte de casserole dans laquelle un liquide serait versé."
    },
    {
        name: '_rdai',
        fr: 'refaire',
        path: [[m, q, lm, a, rm, a, m, q, r, q, lm, w, rm, w, l, q, m, q]],
        fractal:'sz-ze-es-qd-dw-wx-xq',
        shapes:['tri_t','CROSS_b'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'faire', avec une torsion dans la partie basse pour illustrer la répétition."
    },
    {
        name: '_tba',
        fr: 'récipient',
        path: [[lm, a, l, q, lm, w, rm, w, r, q, rm, a], [m, q, m, q]],
        fractal:'zq-qw-wx-xd-de',
        shapes:['C_b'],
        type: 'picto',
        description: "Un vase, un bol, un verre, un bac, un pot, une vasque."
    },
    {
        name: '_rsea',
        fr: 'recevoir',
        path: [[l, q, rm, w, m, q, lm, w, r, q], [lm, a, rm, a]],
        fractal:'ze-qx-xs-sw-wd',
        shapes:['CROSS_b'],
        type: 'picto',
        description: "Comme deux bras prêts à recevoir un objet tombé du ciel."
    },
    {
        name: '_rbae',
        fr: 'rebondir',
        path: [[l, q, lm, a, rm, w, rm, a], [lm, w, r, q]],
        fractal:'qz-zx-xe-wd',
        shapes:['N'],
        type: 'ideo',
        description: "La trajectoire d'une balle, lancée avec force sur un sol incliné."
    },
    {
        name: '_snoi',
        fr: 'rayonner',
        path: [[lm, a, rm, a, r, q], [l, q, rm, a, rm, w], [lm, w, rm, a]],
        fractal:'ze-ed-eq-ex-ew',
        shapes:['PIC_tr'],
        type: 'ideo',
        description: "Des rays de lumière émanant d'une source."
    },
    {
        name: '_groi',
        fr: 'ramper',
        path: [[lm, w, rm, a, rm, w, r, q, l, q, lm, a, m, q]],
        fractal:'sz-zq-qd-dx-xe-ew',
        shapes:['tri_tl'],
        type: 'picto',
        description: "Une sorte d'humain avec une tête triangulaire, un coude au sol, et un buste étrangement formulé."
    },
    {
        name: '_rma',
        fr: 'ramasser',
        path: [[l, q, rm, a, r, q], [lm, a, lm, w, m, q], [rm, w, rm, w]],
        fractal:'zw-ws-qe-ed',
        shapes:['TRI_in_l','TREC_htr'],
        type: 'picto',
        description: "Une sorte de bec, prêt à ramasser une graine à même le sol."
    },
    {
        name: '_slo',
        fr: 'ralentir',
        path: [[r, q, l, q], [lm, a, l, q, lm, w], [rm, a, m, q, rm, w]],
        fractal:'dq-zq-qw-es-sx',
        shapes:['ARR_db_l','ARR_l'],
        type: 'ideo',
        description: "Deux petites flèches répétées vers l'arrière, pour signifier la décélération."
    },
    {
        name: '_wo',
        fr: 'questionner',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, lm, w], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-eq-qx',
        shapes:['POINT_l'],
        type: 'ideo',
        description: "Cette forme ressemble-elle vraiment au point d'interrogation que l'on connaît ? Le glyphe s'tulise en verbe, ou en point."
    },
    {
        name: '_kwa',
        fr: 'que',
        path: [[lm, a, l, q, lm, w], [l, q, rm, a, rm, w], [m, q, m, q], [r, q, r, q]],
        fractal:'zq-qw-qe-ex',
        shapes:['PIC_tr'],
        type: 'ideo',
        description: "Une sorte de flèche qui désigne quelque chose du passé."
    },
    {
        name: '_kta',
        fr: 'quantité',
        path: [[r, q, m, q, rm, w, lm, w, lm, a, rm, a, rm, w], [l, q, l, q]],
        fractal:'ds-sx-xe-ez-zw-wx',
        shapes:['RECT'],
        type: 'ideo',
        description: "En voulant crééer une forme qui ressemblât à la lettre Q, voilà ce qui ressortit."
    },
    {
        name: '_fkwe',
        fr: 'quand',
        path: [[rm, a, lm, a, lm, w, r, q, m, q], [l, q, l, q], [rm, w, rm, w]],
        fractal:'sd-dw-wz-ze',
        shapes:['MEC_l'],
        type: 'ideo',
        description: "Le début d'un cadre et la moitié d'une flèche vers le futur."
    },
    {
        name: '_3e',
        fr: 'protéger',
        path: [[lm, w, l, q, lm, a, rm, a, r, q, rm, w], [m, q, m, q]],
        fractal:'wq-qz-ze-ed-dx',
        shapes:['C_t'],
        type: 'picto',
        description: "Comme un habitacle, un toit ou une enveloppe, qui protège un point."
    },
    {
        name: '_prai',
        fr: 'proportionner',
        path: [[r, q, m, q, rm, w, r, q, lm, a, lm, w, r, q], [l, q, l, q], [rm, a, rm, a]],
        fractal:'ds-sx-xd-dz-zw-wd',
        shapes:['TRI_0','tri_br'],
        type: 'ideo',
        description: "Un grand triangle équilatéral, un petit triangle éponyme, quoi de mieux pour suggérer l'idée de proportionnalité."
    },
    {
        name: '_prio',
        fr: 'programmer',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w, rm, w, rm, a], [l, q, l, q], [r, q, r, q]],
        fractal:'zs-se-ez-zw-wx-xe',
        shapes:['RECT','tri_t'],
        type: 'ideo',
        description: "C'est droit, rectangulaire, cadré. C'est aussi l'image inverse du glyphe utilisé pour désigner un 'objet'."
    },
    {
        name: '_tpia',
        fr: 'profond',
        path: [[lm, w, lm, a, l, q, lm, w, rm, w, r, q, l, q], [rm, a, rm, a]],
        fractal:'wz-zq-qw-wx-xd-dq',
        shapes:['TRI_out_l','MEX_b'],
        type: 'ideo',
        description: "Comme une feuille de papier plié, dont la partie basse représenterait la profondeur de sa troisième dimension."
    },
    {
        name: '_pre',
        fr: 'près',
        path: [[lm, w, lm, a, r, q], [l, q, m, q, rm, a, l, q], [rm, w, rm, w]],
        fractal:'wz-zd-qs-se-eq',
        shapes:['TRI_in_tl','PIC_tl'],
        type: 'ideo',
        description: "Le glyphe utilisé pour le verbe 'voir', incliné vers le bas, le proche, le petit, le microscopique."
    },
    {
        name: '_ra',
        fr: 'prendre',
        path: [[lm, w, l, q, m, q, lm, a, rm, a, m, q, r, q, rm, w]],
        fractal:'se-ez-zs-wq-qd-dx',
        shapes:['MEX_b','tri_t'],
        type: 'picto',
        description: "Comme une pince prête à prendre ce qui passerait à sa portée."
    },
    {
        name: '_frya',
        fr: 'pouvoir',
        path: [[lm, w, m, q, rm, w], [l, q, lm, a, rm, a, r, q]],
        fractal:'ws-sx-qz-ze-ed',
        shapes:['tri_b','COL_t'],
        type: 'ideo',
        description: "Hérité de la forme attribuée au verbe 'avoir', puisque avoir c'est le début de la domination."
    },
    {
        name: '_psie',
        fr: 'pousser',
        path: [[l, q, l, q], [lm, a, m, q, lm, w], [rm, a, r, q, rm, w]],
        fractal:'zs-sw-ed-dx',
        shapes:['ARR_dbl_r'],
        type: 'ideo',
        description: "Deux pointes vers l'avant, comme l'effort nécessaire à la poussée."
    },
    {
        name: '_vwa',
        fr: 'pourquoi',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, r, q], [m, q, m, q]],
        fractal:'ze-eq-qx-wd',
        shapes:['CROSS_b'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'questionner', avec une résolution qui viendrait trancher la question."
    },
    {
        name: '_psu',
        fr: 'positionner',
        path: [[l, q, m, q, lm, w, lm, a, rm, a, lm, w], [r, q, rm, w]],
        fractal:'wz-ze-ew-qs-xd',
        shapes:['TREC_stl'],
        type: 'ideo',
        description: "Un glyphe formé de façon totalement arbitraire."
    },
    {
        name: '_ptoi',
        fr: 'porter',
        path: [[lm, w, rm, a, r, q, lm, a, rm, a], [m, q, rm, w], [l, q, l, q]],
        fractal:'we-xs-zd-de-ez',
        shapes:['TRI_out_tr'],
        type: 'picto',
        description: "Un humain, qui porterait un fardeau sur la tête."
    },
    {
        name: '_lbay',
        fr: 'porcin',
        path: [[m, q, lm, w, l, q, lm, a, rm, a, r, q, rm, w, rm, a]],
        fractal:'sw-wq-qz-ze-ed-dx-xe',
        shapes:['TRI_out_r','C_t'],
        type: 'picto',
        description: "On en distingue le groin, et le corps rond et massif."
    },
    {
        name: '_ptea',
        fr: 'poitriner',
        path: [[lm, w, m, q, l, q, rm, a, m, q, rm, w], [lm, a, lm, a], [r, q, r, q]],
        fractal:'xs-we-eq-qs',
        shapes:['TRI_in_tl'],
        type: 'picto',
        description: "La fierté d'un buste dardé, comme un vainqueur recevant les louanges après son exploit."
    },
    {
        name: '_psaw',
        fr: 'poisson',
        path: [[l, q, rm, a, rm, w, r, q, lm, w, l, q], [lm, a, lm, a], [m, q, m, q]],
        fractal:'wq-qe-ex-xd-dw',
        shapes:['RECT_r'],
        type: 'picto',
        description: "Un petit poisson avec sa queue et ses deux yeux."
    },
    {
        name: '_fky',
        fr: 'pointer',
        path: [[l, q, rm, w, rm, a], [lm, a, lm, a], [m, q, m, q], [lm, w, lm, w], [r, q, r, q]],
        fractal:'qx-xe',
        shapes:['PIC_br'],
        type: 'picto',
        description: "Parmi les multiples façons de représenter une pointe, voci celle qui fut retenue."
    },
    {
        name: '_ploi',
        fr: 'poil',
        path: [[l, q, lm, w], [lm, a, m, q], [rm, a, rm, w], [r, q, r, q]],
        fractal:'qw-sz-ex',
        shapes:['DASH'],
        type: 'picto',
        description: "Deux courts et un long, trois poils."
    },
    {
        name: '_vdio',
        fr: 'plus',
        path: [[lm, a, lm, w], [l, q, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'zw-qs',
        shapes:['DASH'],
        type: 'ideo',
        description: "Comme le signe +"
    },
    {
        name: '_tsi',
        fr: 'pluriel',
        path: [[lm, a, m, q, r, q], [lm, w, m, q], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'zs-sd-ws',
        shapes:['X_plur'],
        type: 'ideo',
        description: "Le suffixe utilisé pour mettre des mots au pluriel."
    },
    {
        name: '_plwe',
        fr: 'plume',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, r, q, rm, w, l, q], [lm, w, lm, w]],
        fractal:'qd-dx-xq',
        shapes:['TREC_hbr'],
        type: 'picto',
        description: "Celle que les oiseaux nécessitent, et que les plumitifs utilisent pour écrire."
    },
    {
        name: '_pli',
        fr: 'plier',
        path: [[lm, a, rm, a, r, q, l, q, lm, w, rm, w]],
        fractal:'ze-ed-dq-qw-wx',
        shapes:['Z'],
        type: 'picto',
        description: "Comme un morceau de carton brun alvéolé que l'on tente de plier, et qui ne se plie pas totalement à notre volonté."
    },
    {
        name: '_pto',
        fr: 'pleuvoir',
        path: [[l, q, lm, w, m, q, rm, w, r, q], [lm, a, lm, a], [rm, a, rm, a]],
        fractal:'qw-ws-sx-xd',
        shapes:['W'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour désigner l'eau, avec des gouttes de pluie."
    },
    {
        name: '_pla',
        fr: 'planifier',
        path: [[lm, w, lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a], [rm, a, rm, w], [r, q, l, q]],
        fractal:'dq-qz-ze-ed-dx-xw-wq-zw-xe',
        shapes:['HEX'],
        type: 'picto',
        description: "Comme un plan avec des murs, et des axes de mesure."
    },
    {
        name: '_pnae',
        fr: 'planète',
        path: [[lm, w, lm, a, r, q, lm, w, l, q, lm, a, rm, a, r, q, rm, w, lm, w], [rm, a, rm, w, l, q, rm, a], [m, q, m, q]],
        fractal:'qz-ze-ed-dx-xw-wq-qx-xe-eq-wz-zd-dw',
        shapes:['HEX','TRI_2'],
        type: 'ideo',
        description: "Une sphère, avec un coeur chaud, qui ressemblerait à une étoile, si l'on retirait sa croûte."
    },
    {
        name: '_aria',
        fr: 'planer',
        path: [[lm, a, m, q, rm, a, r, q, lm, a, l, q, rm, a, m, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'eq-qz-zs-se-ed-dz',
        shapes:['CROSS_t'],
        type: 'picto',
        description: "On y verrait presque l'un de ces dispositifs inventés par Léonard de Vinci, pour tenter de faire voler nos corps atterrés."
    },
    {
        name: '_ueoa',
        fr: 'plaisir',
        path: [[m, q, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q]],
        fractal:'sz-zq-qw-wx-xd-de-es',
        shapes:['C_b','M'],
        type: 'ideo',
        description: "Un dérivé du glyphe utilisé pour désigner les lèvres, et comme une bouche ouverte par l'effet de la pâmoison."
    },
    {
        name: '_pvo',
        fr: 'pivoter',
        path: [[lm, w, lm, a, m, q, lm, w, r, q, rm, w, lm, w], [l, q, l, q], [rm, a, rm, a]],
        fractal:'ws-sz-zw-wx-xd-dw',
        shapes:['TRI_in_l'],
        type: 'ideo',
        description: "La même forme représentée avant et après pivotation, avec un point commun."
    },
    {
        name: '_vdibwa',
        fr: 'pire',
        path: [[m, q, l, q, lm, a, rm, w], [lm, w, lm, a], [rm, a, r, q]],
        fractal:'xz-zq-qs-wz-ed',
        shapes:['arr_t','tri_tl'],
        type: 'ideo',
        description: "Une fusion des glyphes utilisés pour désigner le 'mauvais' et 'plus'."
    },
    {
        name: '_pke',
        fr: 'piquant',
        path: [[lm, w, lm, a, m, q, rm, a, rm, w, lm, w, l, q, r, q, rm, w]],
        fractal:'wz-zs-se-ex-xw-wq-qd-dx',
        shapes:['MEX_b'],
        type: 'ideo',
        description: "Un glyphe de goût, dérivé du glyphe utilisé pour désigner les 'lèvres'."
    },
    {
        name: '_gwi',
        fr: 'pingouin',
        path: [[lm, a, rm, a, l, q, lm, w, rm, w, rm, a, r, q], [m, q, m, q]],
        fractal:'ze-eq-qw-wx-xe-ed',
        shapes:['DIAM'],
        type: 'picto',
        description: "Pris au moment de son dandinement, et les ailes en soutien de son équilibre fragile."
    },
    {
        name: '_trai',
        fr: 'piéger',
        path: [[lm, w, lm, a, l, q, r, q, rm, a, lm, a], [rm, w, rm, w]],
        fractal:'wz-zq-qd-de-ez',
        shapes:['MEX_t'],
        type: 'picto',
        description: "Comme un piège prêt à tomber sur l'animal qui se risquerait à chiper l'appât."
    },
    {
        name: '_fti',
        fr: 'pied',
        path: [[l, q, m, q, lm, w, lm, a, rm, a, rm, a, rm, w, m, q, r, q]],
        fractal:'sw-wz-ze-ex-xs-qd',
        shapes:['RECT'],
        type: 'picto',
        description: "Où les deux pointes à la base de la forme figurent les pieds."
    },
    {
        name: '_sfi',
        fr: 'peur',
        path: [[lm, a, rm, w], [m, q, r, q, rm, a], [l, q, l, q], [lm, w, lm, w]],
        fractal:'zx-sd-de',
        shapes:['DASH'],
        type: 'ideo',
        description: "Un glyphe totalement aritraire, avec quelque chose d'inquiétant."
    },
    {
        name: '_psia',
        fr: 'peser',
        path: [[lm, a, rm, a, rm, w, lm, w, m, q, rm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'ze-ex-xw-ws-sx',
        shapes:['MEC_r','tri_b'],
        type: 'ideo',
        description: "Lestée par le bas, avec une poignée pour le soulever, cette forme figure un poids de balance."
    },
    {
        name: '_lse',
        fr: 'perdre',
        path: [[rm, w, lm, a, rm, a, rm, w], [l, q, rm, w, r, q], [lm, w, lm, w]],
        fractal:'xz-ze-ex-qx-xd',
        shapes:['TREC_str'],
        type: 'ideo',
        description: "Une sorte de flèche vers le bas, pour signifier qu'un objet a fui, obéissant à la gravité."
    },
    {
        name: '_dri',
        fr: 'percer',
        path: [[r, q, rm, a, m, q, rm, w, r, q, lm, a, l, q, lm, w, r, q, l, q]],
        fractal:'de-es-sx-xd-dz-zq-qw-wd-dq',
        shapes:['LOS_r','ARR_r','POINT_r'],
        type: 'picto',
        description: "Comme la pointe d'une perceuse pénétrant une surface."
    },
    {
        name: '_hia',
        fr: 'penser',
        path: [[m, q, l, q, lm, a, rm, a, r, q, m, q, rm, w, lm, w, m, q]],
        fractal:'ws-sx-xw-qd-de-ez-zq',
        shapes:['MEX_t','tri_b'],
        type: 'ideo',
        description: "Une petite surface pour figurer un corps, une grande surface pour figurer la pensée."
    },
    {
        name: '_pda',
        fr: 'pendant',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [l, q, r, q], [rm, a, rm, w]],
        fractal:'ze-ed-dx-xw-qd-xe',
        shapes:['ARR_r','TRI_out_r','C_l','EQ'],
        type: 'ideo',
        description: "Une flèche vers l'avenir, figurée dans une traînée de continuité."
    },
    {
        name: '_prye',
        fr: 'part',
        path: [[m, q, rm, w, lm, w, m, q], [l, q, l, q], [lm, a, lm, a], [rm, a, rm, a], [r, q, r, q]],
        fractal:'ws-sx-xw',
        shapes:['tri_b'],
        type: 'ideo',
        description: "Une part de tarte ou de pizza."
    },
    {
        name: '_psoi',
        fr: 'passer',
        path: [[r, q, l, q], [rm, a, l, q, rm, w], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'eq-qx-dq',
        shapes:['POINT_l'],
        type: 'ideo',
        description: "Le préfixe utilisé pour conjuguer un verbe au passé, avec une flèche vers l'arrière."
    },
    {
        name: '_pmi',
        fr: 'parmi',
        path: [[lm, a, rm, a, r, q, l, q, lm, a, rm, w, lm, w, rm, a]],
        fractal:'we-ed-dq-qz-zx-xw-ze',
        shapes:['tri_tl','tri_t','tri_tr','tri_b','X'],
        type: 'ideo',
        description: "Une variation du glyphe utilisé pour le mot 'dans'."
    },
    {
        name: '_vga',
        fr: 'parfumer',
        path: [[lm, a, l, q, rm, a, rm, w, r, q], [l, q, lm, w, rm, w], [m, q, rm, a]],
        fractal:'zq-qw-wx-xd-qe-ex-es',
        shapes:['C_l','PIC_tr'],
        type: 'ideo',
        description: "D2rivé du glyphe utilisé pour le verbe sentir, avec la figuration d'une inspiration des narines."
    },
    {
        name: '_smai',
        fr: 'parfois',
        path: [[l, q, lm, a, m, q], [lm, w, rm, w, r, q], [rm, a, rm, a]],
        fractal:'qz-zs-wx-xd',
        shapes:['DASH'],
        type: 'ideo',
        description: "Encore un glyphe totalement arbitraire."
    },
    {
        name: '_prae',
        fr: 'parcourir',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q]],
        fractal:'ez-zq-qw-wx-xd-ds',
        shapes:['C_l'],
        type: 'ideo',
        description: "Le parcours d'un marcheur ordonné sur une surface hexagonale."
    },
    {
        name: '_ba',
        fr: 'par',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, l, q], [m, q, rm, w], [lm, w, rm, w, r, q]],
        fractal:'wx-xd-xs',
        shapes:['MA'],
        type: 'ideo',
        description: "Encore un glyphe complètement arbitraire."
    },
    {
        name: '_mriy',
        fr: 'papillon',
        path: [[lm, w, lm, a, rm, a, lm, w], [l, q, r, q, rm, w, l, q]],
        fractal:'wz-ze-ew-qd-dx-xq',
        shapes:['TREC_stl','TREC_hbr'],
        type: 'picto',
        description: "Avec ses ailes fugaces et son corps de diamant."
    },
    {
        name: '_sra',
        fr: 'pacifier',
        path: [[l, q, lm, w, rm, a, lm, a, rm, w, r, q]],
        fractal:'qw-we-ez-zx-xd',
        shapes:['X','tri_t'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner le 'conflit', résolu par une liaison qui serait un accord entre les deux parties."
    },
    {
        name: '_pno',
        fr: 'ouvrir',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [l, q, m, q]],
        fractal:'ze-ed-dx-xw-qs',
        shapes:['C_l'],
        type: 'ideo',
        description: "Comme une clé dans le trou d'une serrure."
    },
    {
        name: '_he',
        fr: 'oui',
        path: [[l, q, l, q], [lm, a, lm, w, m, q], [rm, a, rm, w], [r, q, r, q]],
        fractal:'zw-ws-ex',
        shapes:['PIPE'],
        type: 'ideo',
        description: "La main sur le coeur en signe d'affirmation."
    },
    {
        name: '_roi',
        fr: 'ou',
        path: [[lm, a, rm, a, lm, w, rm, w, lm, a], [l, q, l, q], [r, q, r, q]],
        fractal:'ze-ew-wx-xz',
        shapes:['X'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe refléter, deux triangles en miroir pour illustrer l'apparition d'un choix."
    },
    {
        name: '_sdey',
        fr: 'où',
        path: [[lm, a, rm, w], [lm, w, rm, w, r, q], [l, q, l, q], [rm, a, rm, a]],
        fractal:'zx-wx-xd',
        shapes:['ARR_r'],
        type: 'ideo',
        description: "Une flèche vers le bas pointe la terre à l'endroit où..."
    },
    {
        name: '_bnio',
        fr: 'os',
        path: [[lm, a, rm, w, rm, a, l, q, m, q, rm, a, lm, a, l, q, lm, w, rm, w], [r, q, r, q]],
        fractal:'qz-ze-es-sq-qe-zx-xw-wq-ex',
        shapes:['LOS_tl','LOS_bl','TRI_in_r','TREC_str'],
        type: 'ideo',
        description: "Un os coupé exhibe sa moelle."
    },
    {
        name: '_via',
        fr: 'originer',
        path: [[l, q, lm, w, lm, a, rm, a], [m, q, r, q, rm, w, m, q]],
        fractal:'qw-wz-ze-sd-dx-xs',
        shapes:['tri_br'],
        type: 'ideo',
        description: "Comme le symbole utilisé en mathématiques pour la racine."
    },
    {
        name: '_rgia',
        fr: 'organe',
        path: [[rm, a, l, q, m, q, lm, w, rm, w, lm, a], [lm, w, l, q, lm, a, rm, a, r, q, rm, w]],
        fractal:'-zx-ws-sq-qe-ez-zq-qw-wx-xd-de',
        shapes:['KA','HEX'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour désigner l'humain."
    },
    {
        name: '_rdo',
        fr: 'ordonner',
        path: [[lm, w, lm, a, rm, a, rm, w], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'wz-ze-ex',
        shapes:['U_rev'],
        type: 'ideo',
        description: "L'imposition d'un cadre, d'un ordre émanant d'en haut."
    },
    {
        name: '_r3y',
        fr: 'orange',
        path: [[l, q, lm, a, rm, a], [m, q, m, q], [r, q, r, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'qz-ze',
        shapes:['MA'],
        type: 'ideo',
        description: "En faisant le tour du cercle chromatique, c'est ici que l'orange se dispose."
    },
    {
        name: '_vroi',
        fr: 'or',
        path: [[l, q, m, q], [lm, a, m, q, lm, w], [r, q, rm, a, rm, w, r, q]],
        fractal:'qs-zs-sw-xe-ed-dx',
        shapes:['TRI_out_r','ARR_dbl_r'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour 'mais', avec l'évocation d'une continuité."
    },
    {
        name: '_gnae',
        fr: 'onde',
        path: [[l, q, lm, w], [lm, a, rm, w], [rm, a, r, q]],
        fractal:'qw-xz-ed',
        shapes:['EQ'],
        type: 'ideo',
        description: "Comme une averse de printemps qui tomberait sans prévenir."
    },
    {
        name: '_broi',
        fr: 'ombre',
        path: [[l, q, rm, a, rm, w, lm, w], [lm, a, m, q], [r, q, r, q]],
        fractal:'qe-ex-xw-zs',
        shapes:['PIC_tr'],
        type: 'ideo',
        description: "Un ray de lumière sur une surface, et la figuration de son ombre portée."
    },
    {
        name: '_zo',
        fr: 'oiseau',
        path: [[m, q, l, q, lm, w, rm, a], [lm, a, rm, a, r, q], [rm, w, rm, w]],
        fractal:'sq-qw-we-ze-ed',
        shapes:['ARR_r','tri_bl'],
        type: 'picto',
        description: "Une flèche vers le ciel, une sorte de queue."
    },
    {
        name: '_gwa',
        fr: 'oeuf',
        path: [[l, q, lm, a, m, q, lm, w, l, q], [rm, a, r, q, rm, w]],
        fractal:'sz-zq-qw-ws-ed-dx',
        shapes:['LOS_l'],
        type: 'picto',
        description: "Un losange pour un oeuf, et deux segments pour un fragment de coquille."
    },
    {
        name: '_ptae',
        fr: 'objet',
        path: [[lm, w, m, q, rm, w, lm, w, lm, a, rm, a, rm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'ws-sx-xw-wz-ze-ex',
        shapes:['RECT','tri_b'],
        type: 'ideo',
        description: "C'est droit, rectangulaire, défini."
    },
    {
        name: '_ney',
        fr: 'nouveau',
        path: [[lm, a, l, q, lm, w, m, q, rm, w, r, q, rm, a]],
        fractal:'zq-qw-ws-sx-xd-de',
        shapes:['MA','W'],
        type: 'ideo',
        description: "Comme le W à la fin du mot 'new' en anglais."
    },
    {
        name: '_fdu',
        fr: 'nourrir',
        path: [[l, q, lm, w, lm, a, rm, a, r, q, rm, w, l, q], [m, q, m, q]],
        fractal:'qw-wz-ze-ed-dx-xq',
        shapes:['CROSS_b'],
        type: 'picto',
        description: "C'est une sorte de poisson, qui figure la pitence."
    },
    {
        name: '_nia',
        fr: 'non',
        path: [[lm, a, rm, w], [rm, a, lm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'zx-we',
        shapes:['X'],
        type: 'ideo',
        description: "Une croix, c'est souvent non."
    },
    {
        name: '_na',
        fr: 'ni',
        path: [[l, q, m, q], [lm, a, rm, w, r, q], [lm, w, rm, a]],
        fractal:'zx-xd-we-qs',
        shapes:['X'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour 'non', avec des dépendances."
    },
    {
        name: '_nsio',
        fr: 'nécessiter',
        path: [[lm, a, l, q, m, q, rm, a, r, q], [m, q, rm, w, lm, w]],
        fractal:'zq-qs-se-ed-sx-xw',
        shapes:['X_plur'],
        type: 'ideo',
        description: "Comme une roue nécessitant des pales pour pouvoir tourner."
    },
    {
        name: '_zmi',
        fr: 'musique',
        path: [[l, q, lm, w, lm, a, rm, a, r, q], [lm, w, rm, w, m, q, rm, a]],
        fractal:'qw-wz-ze-ed-es-sx-xw',
        shapes:['E_rev'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'entendre'."
    },
    {
        name: '_mso',
        fr: 'muscler',
        path: [[lm, a, rm, a, rm, w, l, q, m, q, rm, w], [lm, w, lm, w], [r, q, r, q]],
        fractal:'ze-ex-xq-qs-sx',
        shapes:['TRI_in_bl'],
        type: 'picto',
        description: "Un bras plié pour faire gonfler un biceps."
    },
    {
        name: '_mksi',
        fr: 'multiplier',
        path: [[lm, a, lm, a], [rm, a, rm, a], [m, q, m, q], [l, q, lm, w, rm, w, r, q]],
        fractal:'qw-wx-xd',
        shapes:['COL_b'],
        type: 'ideo',
        description: "Trois pommes dans une coupe illustrent l'idée de multiplication."
    },
    {
        name: '_ftey',
        fr: 'mou',
        path: [[l, q, lm, a, lm, w, rm, w, rm, a, r, q], [lm, w, m, q, rm, w]],
        fractal:'qz-zw-wx-xe-ed-ws-sx',
        shapes:['U','tri_b'],
        type: 'ideo',
        description: "Une façon totalement arbitraire de désigner la molesse."
    },
    {
        name: '_mtu',
        fr: 'montagne',
        path: [[l, q, lm, a, m, q, rm, a, r, q], [lm, w, rm, w]],
        fractal:'qz-zs-se-ed-wx',
        shapes:['M'],
        type: 'picto',
        description: "Deux pics et un col, avec un lac à leur base."
    },
    {
        name: '_mu',
        fr: 'mollusque',
        path: [[l, q, m, q, lm, a, l, q, lm, w, rm, w, r, q, rm, a], [lm, a, lm, w, r, q]],
        fractal:'qs-sz-zq-qw-wx-xd-de-dw-wz',
        shapes:['C_b','tri_tl','TRI_out_l','TRI_out_br'],
        type: 'picto',
        description: "Une sorte de méduse."
    },
    {
        name: '_mni',
        fr: 'moins',
        path: [[l, q, m, q], [lm, a, lm, a], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w], [lm, w, lm, w]],
        fractal:'qs',
        shapes:['DASH'],
        type: 'ideo',
        description: "Comme le signe -"
    },
    {
        name: '_d3io',
        fr: 'minute',
        path: [[l, q, l, q], [lm, w, lm, a, m, q, rm, a, rm, w], [r, q, r, q]],
        fractal:'wz-zs-se-ex',
        shapes:['M'],
        type: 'ideo',
        description: "Comme la lettre M."
    },
    {
        name: '_mina',
        fr: 'minéral',
        path: [[lm, w, lm, a, m, q, rm, a, rm, w, lm, w, l, q, lm, a, rm, a, r, q, rm, w]],
        fractal:'wz-zs-se-ex-xw-wq-qz-ze-ed-dx',
        shapes:['HEX'],
        type: 'ideo',
        description: "Comme la lettre M enfermée dans un caillou."
    },
    {
        name: '_mlimza',
        fr: 'millimètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [l, q, l, q], [m, q, m, q]],
        fractal:'ze-ed-dx-xw',
        shapes:['C_l'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_mligma',
        fr: 'milligramme',
        path: [[lm, a, rm, a, rm, w, lm, w], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-ex-xw',
        shapes:['MEC_r'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_mdo',
        fr: 'milieu',
        path: [[l, q, r, q], [lm, a, lm, a], [rm, a, rm, a], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'qd',
        shapes:['DASH'],
        type: 'ideo',
        description: "Et au milieu coulait une frontière."
    },
    {
        name: '_vdikeo',
        fr: 'mieux',
        path: [[m, q, l, q, lm, w, rm, a], [lm, a, lm, w], [rm, w, r, q]],
        fractal:'sq-qw-we-zw-xd',
        shapes:['arr_b','tri_bl'],
        type: 'ideo',
        description: "La fusion des glyphes utilisés pour désigner le 'bien' et 'plus'."
    },
    {
        name: '_pne',
        fr: 'mettre',
        path: [[lm, w, lm, a, l, q, m, q, lm, a], [rm, a, r, q, rm, w]],
        fractal:'wz-zs-sq-qz-ed-dx',
        shapes:['tri_tl','arr_t'],
        type: 'ideo',
        description: "Cette forme est complètement aritraire, et dérivée du glyphe utilisé pour le mot 'pour'."
    },
    {
        name: '_mza',
        fr: 'mètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, m, q, lm, w]],
        fractal:'ze-ed-dx-xw-wq-qs-sw',
        shapes:['C_l','tri_bl'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_mto',
        fr: 'métal',
        path: [[lm, w, lm, a, rm, w, rm, a, r, q, lm, w, l, q, rm, a]],
        fractal:'wz-zx-xe-ed-dw-wq-qe',
        shapes:['N','RECT_r'],
        type: 'ideo',
        description: "Un rectangle figure la dureté, et le zigzag la conductivité."
    },
    {
        name: '_bwa',
        fr: 'mauvais',
        path: [[l, q, lm, a, rm, w], [rm, a, r, q], [lm, w, lm, w]],
        fractal:'qz-zx-ed',
        shapes:['DASH'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner le 'faux'."
    },
    {
        name: '_mtai',
        fr: 'matière',
        path: [[lm, a, lm, w, rm, a, rm, w, lm, w, l, q, lm, a, rm, a, r, q, rm, w]],
        fractal:'zw-we-ex-xw-wq-qz-ze-ed-dx',
        shapes:['N_rev','HEX'],
        type: 'ideo',
        description: "La matière englobe toute la surface, et contient de la conductivité."
    },
    {
        name: '_lfe',
        fr: 'mastodonte',
        path: [[l, q, l, q], [lm, w, lm, a, rm, a, r, q, rm, w, lm, a]],
        fractal:'wz-ze-ed-dx-xz',
        shapes:['MEX_tr'],
        type: 'picto',
        description: "Un oeil, une trompe, une grande oreille."
    },
    {
        name: '_chka',
        fr: 'masquer',
        path: [[lm, a, rm, a], [m, q, m, q], [l, q, rm, w, r, q, lm, w, l, q]],
        fractal:'wq-qx-xd-dw-ze',
        shapes:['CROSS_b'],
        type: 'picto',
        description: "Un masque pour les yeux, pour la fête."
    },
    {
        name: '_msy',
        fr: 'marsupial',
        path: [[l, q, lm, a], [m, q, rm, a], [r, q, rm, w, rm, a, lm, a, lm, w, rm, w]],
        fractal:'qz-se-dx-xw-wz-ze-ex',
        shapes:['RECT'],
        type: 'picto',
        description: "Une sorte de kangourou sans la poche."
    },
    {
        name: '_mrai',
        fr: 'marquer',
        path: [[l, q, r, q], [lm, a, m, q, lm, w], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'qd-zs-sw',
        shapes:['X_plur'],
        type: 'picto',
        description: "L'empreinte d'une patte d'oiseau laissée dans la glaise."
    },
    {
        name: '_mno',
        fr: 'mâle',
        path: [[lm, a, rm, w], [lm, w, m, q, r, q], [l, q, rm, a]],
        fractal:'zx-ws-sd-qe',
        shapes:['KA'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour désigner l'humain, avec un pénis."
    },
    {
        name: '_nfea',
        fr: 'maladie',
        path: [[lm, a, lm, a], [l, q, m, q, rm, a], [m, q, rm, w], [lm, w, r, q]],
        fractal:'qs-se-xs-wd',
        shapes:['KA','X_plur'],
        type: 'picto',
        description: "Un humain à l'envers, comme abattu par la maladie."
    },
    {
        name: '_pro',
        fr: 'mais',
        path: [[l, q, m, q], [lm, a, m, q, lm, w], [rm, a, rm, w], [r, q, r, q]],
        fractal:'zs-sw-qs-ex',
        shapes:['PIPE'],
        type: 'ideo',
        description: "Une flèche arrêtée par un mur. Ce que l'on ressent quand on nous dit 'mais'."
    },
    {
        name: '_sna',
        fr: 'maigrir',
        path: [[r, q, rm, w, rm, a, r, q, l, q, lm, a, m, q, lm, w, l, q]],
        fractal:'de-ex-xd-dq-qz-zs-sw-wq',
        shapes:['LOS_l','TRI_out_r','ARR_r'],
        type: 'ideo',
        description: "D'un losange bien gras à un triangle isocèle aminci."
    },
    {
        name: '_lya',
        fr: 'lune',
        path: [[lm, w, lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a], [m, q, m, q]],
        fractal:'zw-wq-qz-ze-ed-dx-xw',
        shapes:['HEX','TRI_out_l'],
        type: 'picto',
        description: "La lune et son croissant."
    },
    {
        name: '_hea',
        fr: 'lumière',
        path: [[lm, a, r, q, lm, w, lm, a], [l, q, m, q, rm, a], [m, q, rm, w]],
        fractal:'wz-zd-dw-qs-se-xs',
        shapes:['TRI_0','X_plur'],
        type: 'picto',
        description: "Le triangle est probablement la forme la plus adaptée pour recueillir la couleur jaune, qui est probablement la plus adaptée pour figurer la lumière. Du centre émanent des rayons."
    },
    {
        name: '_lro',
        fr: 'lourd',
        path: [[lm, a, m, q, rm, a], [l, q, l, q], [r, q, r, q], [lm, w, rm, w]],
        fractal:'zs-se-wx',
        shapes:['DASH'],
        type: 'ideo',
        description: "Une pointe vers le bas pour figurer la pesanteur."
    },
    {
        name: '_lgya',
        fr: 'long',
        path: [[l, q, lm, w, r, q, rm, w, m, q, rm, a, lm, a]],
        fractal:'qw-wd-dx-xs-se-ez',
        shapes:['DASH','E_rev'],
        type: 'ideo',
        description: "Une variation du glyphe utilisé pour désigner le 'court', avec plus de longueur."
    },
    {
        name: '_fra',
        fr: 'loin',
        path: [[l, q, rm, w, rm, a], [lm, w, m, q, r, q, lm, w], [lm, a, lm, a]],
        fractal:'qx-xe-ws-sd-dw',
        shapes:['TRI_in_br','PIC_br'],
        type: 'picto',
        description: "Le glyphe utilisé pour le verbe 'voir', incliné vers le haut, le lointain, le grand, le macroscopique."
    },
    {
        name: '_sti',
        fr: 'lister',
        path: [[rm, w, lm, a, l, q, rm, w, rm, a, lm, a], [l, q, lm, w, rm, w, r, q, rm, a]],
        fractal:'xq-xz-xe-xw-wq-qz-ze-ed-dx',
        shapes:['HEX','PIC_br'],
        type: 'ideo',
        description: "Pas vraiment une liste, mais plus une jolie forme de coquillage."
    },
    {
        name: '_lpae',
        fr: 'lèvre',
        path: [[lm, a, m, q, rm, a], [l, q, r, q], [lm, w, rm, w]],
        fractal:'zs-se-qd-wx',
        shapes:['EQ'],
        type: 'picto',
        description: "Une bouche fermée, sa lèvre inférieure, et sa gouttière."
    },
    {
        name: '_lgy',
        fr: 'légume',
        path: [[lm, a, rm, w, lm, w, rm, a], [l, q, r, q]],
        fractal:'zx-xw-we-qd',
        shapes:['X','tri_b','X_all'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour désigner la terre, le légume ancre son bulbe sous la surface et lance ses feuilles vers le ciel."
    },
    {
        name: '_lgio',
        fr: 'langage',
        path: [[l, q, lm, w, lm, a], [m, q, rm, w, rm, a], [r, q, r, q]],
        fractal:'qw-wz-sx-xe',
        shapes:['PIPE'],
        type: 'ideo',
        description: "Comme deux symboles cunéiformes sur une vieille tablette."
    },
    {
        name: '_ska',
        fr: 'lancer',
        path: [[l, q, r, q, rm, w, m, q], [lm, a, lm, w], [rm, a, rm, a]],
        fractal:'zw-qd-dx-xs',
        shapes:['tri_br'],
        type: 'picto',
        description: "Un humain qui tiendrait un panier, dont il lancerait le contenu vers le ciel."
    },
    {
        name: '_klotogma',
        fr: 'kilotonne',
        path: [[rm, w, lm, a, rm, a, rm, w, lm, w, l, q, lm, a], [l, q, m, q, lm, w], [r, q, r, q]],
        fractal:'zx-xe-ez-zq-qw-wx-qs-sw',
        shapes:['TREC_str','PENTA_1','MEX_bl'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_klomza',
        fr: 'kilomètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, m, q, rm, w], [lm, w, m, q]],
        fractal:'ze-ed-dx-xw-wq-qs-sx-ws',
        shapes:['C_l','LOS_bl','tri_b','tri_bl'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_klogma',
        fr: 'kilogramme',
        path: [[lm, a, rm, a, rm, w, lm, w, l, q, m, q, rm, w], [lm, w, m, q], [r, q, r, q]],
        fractal:'ze-ex-xw-wq-qs-sx-sw',
        shapes:['MEC_r','LOS_bl','tri_b','tri_bl'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_tli',
        fr: 'jusque',
        path: [[l, q, lm, a, lm, w, m, q, r, q], [rm, a, r, q, rm, w]],
        fractal:'qz-zw-ws-sd-ed-dx',
        shapes:['ARR_r'],
        type: 'ideo',
        description: "Une direction vers l'avenir, précédée d'une fluctuation finalement résolue."
    },
    {
        name: '_kadwa',
        fr: 'jour',
        path: [[lm, a, rm, w], [l, q, rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q, lm, w]],
        fractal:'zx-qe-ez-zq-qw-wx-xd-ds-sw',
        shapes:['KA','LOS_br','TRI_out_tl'],
        type: 'picto',
        description: "La fusion des glyphes utilisés pour désigner l'humain et le 'cycle' produit l'idée du 'jour'."
    },
    {
        name: '_3go',
        fr: 'jouer',
        path: [[lm, a, lm, a], [l, q, rm, a], [lm, w, m, q, rm, w], [r, q, r, q]],
        fractal:'qe-ws-sx',
        shapes:['KA','DASH'],
        type: 'picto',
        description: "Un humain et une balle. Cela suffit pour jouer."
    },
    {
        name: '_ntew',
        fr: 'interrompre',
        path: [[l, q, m, q, lm, a, lm, w, m, q, r, q, rm, a, rm, w]],
        fractal:'sz-zw-ws-qd-de-ex',
        shapes:['ARR_dbl_r','PIPE','TRI_in_l'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'aller', avec la seconde flèche interrompue."
    },
    {
        name: '_nsa',
        fr: 'intérieur',
        path: [[lm, a, rm, a, m, q, rm, w, lm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'ze-es-sx-xw',
        shapes:['E_rev'],
        type: 'ideo',
        description: "La forme inverse du glyphe utilisé pour désigner l'extérieur, qui ressemble à un E."
    },
    {
        name: '_kea',
        fr: 'intelligence',
        path: [[lm, a, rm, w], [lm, w, rm, a, l, q, m, q, rm, a], [lm, a, r, q, lm, w, lm, a]],
        fractal:'zx-we-eq-qs-wz-zd-dw',
        shapes:['KA','X','TRI_0'],
        type: 'picto',
        description: "La fusion des glyphes utilisés pour désigner l'humain et la 'lumière' traduisent l'idée de l'intelligence."
    },
    {
        name: '_chra',
        fr: 'insulter',
        path: [[l, q, rm, a, rm, w, lm, a], [lm, w, lm, w], [r, q, r, q]],
        fractal:'qe-ex-xz',
        shapes:['PIC_tr'],
        type: 'picto',
        description: "Comme un bras d'honneur."
    },
    {
        name: '_pse',
        fr: 'insuffire',
        path: [[lm, w, l, q, lm, a, rm, a, r, q, rm, w], [l, q, r, q], [lm, a, m, q, rm, a]],
        fractal:'wq-qz-ze-ed-dx-qd-zs-se',
        shapes:['C_t','MEX_t'],
        type: 'ideo',
        description: "L'inverse du glyphe utilisé pour désigner le 'trop', lui-même totalement arbitraire dans sa formulation."
    },
    {
        name: '_skew',
        fr: 'insecte',
        path: [[m, q, l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q], [rm, a, rm, w]],
        fractal:'sq-qz-ze-ed-dx-xw-wq-ex',
        shapes:['HEX','TRI_out_r'],
        type: 'picto',
        description: "Un insecte avec sa carapace, fendue pour que des ailes s'en déploient, et une tête à l'avant. Peut-être quelque coccinelle."
    },
    {
        name: '_nfo',
        fr: 'informer',
        path: [[l, q, lm, a, rm, w, r, q], [lm, w, lm, w], [rm, a, rm, a]],
        fractal:'qz-zx-xd',
        shapes:['Z'],
        type: 'ideo',
        description: "Le fil de l'information qui va et qui vient, comme une sinusoïde sans fin."
    },
    {
        name: '_ngla',
        fr: 'inégaler',
        path: [[lm, a, rm, a, lm, w, rm, w], [l, q, r, q]],
        fractal:'ze-ew-wx-qd',
        shapes:['Z','EQ'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner l'égalité, mais avec une barre diagonale comme une négation."
    },
    {
        name: '_tso',
        fr: 'indiquer',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w], [l, q, l, q], [r, q, r, q], [rm, w, rm, w]],
        fractal:'wz-ze-es-sz',
        shapes:['tri_t'],
        type: 'picto',
        description: "Une sorte de panneau fiché dans le sol."
    },
    {
        name: '_knea',
        fr: 'incliner',
        path: [[m, q, l, q, lm, a, rm, a, r, q], [rm, a, rm, w], [lm, w, lm, w]],
        fractal:'de-ez-zq-qs-xe',
        shapes:['MEX_t'],
        type: 'picto',
        description: "Comme un humain qui ferait une sorte de révérence, un bras replié vers son torse, un autre bras en arrière, et le dos voûté."
    },
    {
        name: '_kpie',
        fr: 'inachever',
        path: [[l, q, lm, w, rm, a, r, q, rm, w, lm, a]],
        fractal:'qw-we-ed-dx-xz',
        shapes:['X','LOS_r'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner l'idée d'identique, mais avec un segment manquant."
    },
    {
        name: '_fo',
        fr: 'impératif',
        path: [[rm, w, rm, a, lm, a, lm, w, r, q, lm, a], [l, q, l, q], [m, q, m, q]],
        fractal:'zw-wd-dz-ze-ex',
        shapes:['TRI_0'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'ordonner', avec un début de flèche vers le futur."
    },
    {
        name: '_stoia',
        fr: 'imaginer',
        path: [[r, q, l, q, rm, a, rm, w, l, q], [lm, a, m, q, lm, w]],
        fractal:'dq-qe-ex-xq-zs-sw',
        shapes:['TRI_1','X_plur'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour le verbe 'voir', avec un panneau vertical, comme un écran projeté devant soi où se joueraient les images du désir."
    },
    {
        name: '_3ne',
        fr: 'jeune',
        path: [[m, q, l, q, rm, a, m, q], [lm, a, rm, w], [lm, w, lm, w], [r, q, r, q]],
        fractal:'zx-qs-se-eq',
        shapes:['TRI_in_tl'],
        type: 'ideo',
        description: "L'inverse du glyphe utilisé pour désigner l'idée de 'vieux', comme une canne inversée."
    },
    {
        name: '_dea',
        fr: 'idée',
        path: [[m, q, l, q, rm, a, m, q, rm, w], [lm, w, r, q], [lm, a, lm, a]],
        fractal:'sq-qe-es-sx-wd',
        shapes:['TRI_in_tl','X_plur'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner la 'maladie', avec l'apposition d'un segment supplémentaire, comme l'amorce d'un traitement."
    },
    {
        name: '_si',
        fr: 'ici',
        path: [[lm, w, l, q, lm, a, rm, a, rm, w], [m, q, rm, w, r, q]],
        fractal:'wq-qz-ze-ex-sx-xd',
        shapes:['arr_b'],
        type: 'ideo',
        description: "Une longue flèche pointe vers le sol le lieu actuel désigné."
    },
    {
        name: '_r3a',
        fr: 'jaune',
        path: [[lm, a, rm, a, r, q], [l, q, l, q], [m, q, m, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'ze-ed',
        shapes:['MA'],
        type: 'ideo',
        description: "En faisant le tour du cercle chromatique, c'est ici que le jaune vient rayonner."
    },
    {
        name: '_lgae',
        fr: 'jambe',
        path: [[lm, w, lm, a, r, q, m, q, lm, w], [l, q, rm, a], [rm, w, rm, w]],
        fractal:'ws-sd-dz-zw-qe',
        shapes:['PIC_tl'],
        type: 'picto',
        description: "Une sorte d'humain figuré dans l'enjambement d'un obstacle sur le sol."
    },
    {
        name: '_fwo',
        fr: 'hors',
        path: [[lm, w, rm, a, r, q, l, q, lm, a, rm, w]],
        fractal:'xz-zq-qd-de-ew',
        shapes:['X','X_all'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner le 'dans', avec une ouverture."
    },
    {
        name: '_rzo',
        fr: 'horizon',
        path: [[lm, w, l, q, r, q, rm, w], [lm, a, lm, a], [rm, a, rm, a]],
        fractal:'wq-qd-dx',
        shapes:['MEX_b'],
        type: 'ideo',
        description: "Une ligne droite, deux nuages, et une perspective renversée."
    },
    {
        name: '_hro',
        fr: 'heure',
        path: [[l, q, r, q], [lm, a, lm, w], [rm, a, rm, w]],
        fractal:'zw-ex-qd',
        shapes:['PIPE'],
        type: 'ideo',
        description: "Comme la lettre H."
    },
    {
        name: '_fro',
        fr: 'hermaphrodite',
        path: [[lm, a, rm, w, lm, w, m, q, r, q, rm, w], [l, q, rm, a]],
        fractal:'zx-xw-ws-sd-dx-qe',
        shapes:['KA','LOS_br'],
        type: 'picto',
        description: "La fusion des glyphes utilisés pour 'femelle' et 'mâle'."
    },
    {
        name: '_pa',
        fr: 'haut',
        path: [[lm, a, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'ze',
        shapes:['DASH'],
        type: 'ideo',
        description: "Un segment en haut, c'est bien le haut."
    },
    {
        name: '_kio',
        fr: 'habiter',
        path: [[lm, a, lm, w, rm, w, rm, a, lm, a, l, q, r, q, rm, a]],
        fractal:'zw-wx-xe-ez-zq-qd-de',
        shapes:['RECT','MEX_t'],
        type: 'picto',
        description: "La figuration d'une maison ou d'un pavillon, comme un enfant la dessinerait."
    },
    {
        name: '_dvie',
        fr: 'habiller',
        path: [[lm, w, lm, a, rm, a, rm, w, lm, w, l, q, r, q, rm, w]],
        fractal:'wz-ze-ex-xw-wq-qd-dx',
        shapes:['RECT','MEX_b'],
        type: 'picto',
        description: "Comme un t-shirt posé à plat, venant d'être repassé."
    },
    {
        name: '_kwe',
        fr: 'grouper',
        path: [[l, q, rm, a, lm, w], [r, q, lm, a, rm, w]],
        fractal:'qe-ew-dz-zx',
        shapes:['X','CROSS_t'],
        type: 'picto',
        description: "Une sorte d'humain à deux têtes permet de désigner l'idée de groupe, de foule, de pluralité."
    },
    {
        name: '_gro',
        fr: 'grossir',
        path: [[l, q, lm, a, lm, w, l, q, r, q, rm, w, m, q, rm, a, r, q]],
        fractal:'qz-zw-wq-qd-de-es-sx-xd',
        shapes:['MA','LOS_r','TRI_out_l'],
        type: 'ideo',
        description: "D'un triangle isocèle aminci à un losange bien gras."
    },
    {
        name: '_gva',
        fr: 'graviter',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q], [lm, a, lm, w]],
        fractal:'ez-zq-qw-wx-xd-ds-zw',
        shapes:['TRI_out_l'],
        type: 'ideo',
        description: "Comme la lettre G."
    },
    {
        name: '_gma',
        fr: 'gramme',
        path: [[lm, a, rm, a, rm, w, lm, w, l, q, m, q, lm, w], [r, q, r, q]],
        fractal:'ze-ex-xw-wq-qs-sw',
        shapes:['MEC_r','tri_bl'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_gra',
        fr: 'graisser',
        path: [[m, q, l, q, lm, w, rm, w, r, q, rm, a, lm, a, rm, w]],
        fractal:'sq-qw-wx-xd-de-ez-zx',
        shapes:['LOS_bl','MEX_tr'],
        type: 'ideo',
        description: "Des formes larges, comme des tissus adipeux."
    },
    {
        name: '_tsae',
        fr: 'goûter',
        path: [[lm, a, l, q, lm, w, rm, w], [rm, a, m, q, r, q]],
        fractal:'zq-qw-wx-es-sd',
        shapes:['MEX_bl'],
        type: 'picto',
        description: "Une sorte de bouche grande ouverte."
    },
    {
        name: '_sla',
        fr: 'glisser',
        path: [[lm, a, lm, a], [l, q, rm, a, m, q, r, q], [lm, w, rm, w]],
        fractal:'qe-es-sd-wx',
        shapes:['DASH'],
        type: 'ideo',
        description: "Un humain qui glisserait sur le sol, en faisant une figure artistique."
    },
    {
        name: '_gzai',
        fr: 'gaz',
        path: [[lm, w, m, q, rm, w], [l, q, l, q], [lm, a, lm, a], [rm, a, rm, a], [r, q, r, q]],
        fractal:'ws-sx',
        shapes:['DASH'],
        type: 'ideo',
        description: "Un tuyau, des particules en suspens."
    },
    {
        name: '_dray',
        fr: 'gauche',
        path: [[lm, a, lm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'zw',
        shapes:['dash','PIPE'],
        type: 'ideo',
        description: "Une barre à gauche, c'est bien la gauche."
    },
    {
        name: '_kpae',
        fr: 'garder',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w, l, q, r, q, rm, w, rm, a]],
        fractal:'zs-se-ez-zw-wq-qd-dx-xe',
        shapes:['U_rev','tri_t'],
        type: 'picto',
        description: "Comme la tête d'un garde casqué, sur des épaules arnachées."
    },
    {
        name: '_ftu',
        fr: 'futur',
        path: [[l, q, r, q], [lm, a, r, q, lm, w], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'qd-zd-dw',
        shapes:['POINT_r'],
        type: 'ideo',
        description: "Une flèche vers l'avenir, c'est le préfixe utilisé pour conjuguer les verbes au futur."
    },
    {
        name: '_fzo',
        fr: 'fusionner',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q, r, q]],
        fractal:'dq-qz-ze-ed-dx-xw-wq',
        shapes:['HEX'],
        type: 'ideo',
        description: "Deux formes en passe de devenir une seule."
    },
    {
        name: '_ray',
        fr: 'fuir',
        path: [[l, q, lm, w, rm, a], [lm, a, r, q], [m, q, rm, w]],
        fractal:'qw-we-xs-zd',
        shapes:['KA'],
        type: 'ideo',
        description: "Comme un humain paniqué qui fuirait un incendie."
    },
    {
        name: '_ftae',
        fr: 'frustrer',
        path: [[lm, a, rm, a, r, q], [rm, a, lm, w], [l, q, rm, w]],
        fractal:'we-ze-ed-qx',
        shapes:[''],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'voler', avec un ancrage au sol qui en interdirait l'essor."
    },
    {
        name: '_fry',
        fr: 'fruit',
        path: [[lm, w, rm, a, lm, a, rm, w], [l, q, r, q]],
        fractal:'xz-ze-ew-qd',
        shapes:['X','tri_t'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour désigner le ciel."
    },
    {
        name: '_gry',
        fr: 'frapper',
        path: [[lm, a, r, q, l, q], [rm, a, lm, w], [m, q, rm, w]],
        fractal:'qd-dz-ew-xs',
        shapes:['X_all','KA'],
        type: 'picto',
        description: "Comme un humain dans le mouvement d'infliger une gifle."
    },
    {
        name: '_gew',
        fr: 'fort',
        path: [[l, q, lm, a, m, q], [lm, a, lm, w], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'wz-qz-zs',
        shapes:['arr_t'],
        type: 'ideo',
        description: "Une flèche vers le haut, c'est la force."
    },
    {
        name: '_fai',
        fr: 'former',
        path: [[rm, a, lm, a, lm, w], [l, q, m, q], [r, q, rm, w]],
        fractal:'wz-ze-qs-xd',
        shapes:['DASH'],
        type: 'ideo',
        description: "Comme la lettre F."
    },
    {
        name: '_fkai',
        fr: 'fonctionner',
        path: [[lm, a, rm, w, rm, a, lm, a, lm, w, rm, w], [lm, w, rm, a], [l, q, r, q]],
        fractal:'ze-ex-xw-wz-zx-we-qd',
        shapes:['X','RECT','X_all'],
        type: 'ideo',
        description: "La fusion des glyphes utilisés pour désigner 'objet', 'programmer' et 'centrer', pour indiquer l'idée de fonctionnalité."
    },
    {
        name: '_blea',
        fr: 'fleurir',
        path: [[lm, a, l, q, rm, w], [rm, a, r, q, lm, w], [m, q, m, q]],
        fractal:'zq-qx-ed-dw',
        shapes:[''],
        type: 'picto',
        description: "Une fleur, avec pétales, sépales et pistil."
    },
    {
        name: '_fni',
        fr: 'finir',
        path: [[l, q, lm, a, r, q, lm, w, l, q], [rm, a, rm, w], [m, q, m, q]],
        fractal:'dz-zq-qw-wd-ex',
        shapes:['DIAM'],
        type: 'ideo',
        description: "Une barre verticale indique la fin."
    },
    {
        name: '_brea',
        fr: 'filtrer',
        path: [[l, q, r, q, lm, a, lm, w, r, q], [rm, a, rm, w]],
        fractal:'ex-qd-dz-zw-wd',
        shapes:['TRI_0'],
        type: 'picto',
        description: "Une sorte d'entonnoir, muni d'un pressoir."
    },
    {
        name: '_fli',
        fr: 'fil',
        path: [[l, q, lm, a, lm, w, rm, a, r, q], [rm, w, rm, w]],
        fractal:'qz-zw-we-ed',
        shapes:['N','DASH'],
        type: 'picto',
        description: "Comme un morceau de fil, tout simplement."
    },
    {
        name: '_lvia',
        fr: 'feuille',
        path: [[lm, a, lm, w, r, q], [l, q, rm, w], [rm, a, m, q]],
        fractal:'zw-wd-qx-es',
        shapes:['PIC_bl'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour désigner le 'végétal', avec un brin semblant s'en détacher."
    },
    {
        name: '_frey',
        fr: 'feu',
        path: [[lm, w, rm, w, l, q, r, q, lm, a], [rm, a, rm, a]],
        fractal:'wx-xq-qd-dz',
        shapes:['N_l'],
        type: 'picto',
        description: "Le mouvement du feu, ou de la fumée qui s'en échapppe."
    },
    {
        name: '_kloi',
        fr: 'fermer',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [rm, a, rm, w], [l, q, m, q]],
        fractal:'ze-ed-dx-xw-ex-qs',
        shapes:['C_l','TRI_out_r'],
        type: 'ideo',
        description: "Une barre verticale indique que l'issue est fermée."
    },
    {
        name: '_mna',
        fr: 'femelle',
        path: [[lm, a, m, q, r, q, rm, w, lm, w, m, q], [l, q, rm, a]],
        fractal:'zs-sd-dx-xw-ws-qe',
        shapes:['KA','LOS_br'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour désigner l'humain, avec un vagin."
    },
    {
        name: '_kti',
        fr: 'félin',
        path: [[l, q, rm, a, m, q, lm, a, r, q, rm, w, lm, w, l, q]],
        fractal:'zs-se-eq-qw-wx-xd-dz',
        shapes:['COL_b','CROSS_t'],
        type: 'picto',
        description: "Comme un chat vu de face, allongé, les pattes repliées sous lui-même."
    },
    {
        name: '_nrea',
        fr: 'faux',
        path: [[l, q, lm, a, rm, w], [lm, w, lm, w], [rm, a, rm, a], [r, q, r, q]],
        fractal:'qz-zx',
        shapes:['DASH','TREC_tl'],
        type: 'ideo',
        description: "L'inverse du glyphe utilisé pour désigner le 'vrai'."
    },
    {
        name: '_sga',
        fr: 'faucher',
        path: [[l, q, m, q, rm, a, r, q], [lm, a, m, q], [rm, a, rm, w], [lm, w, lm, w]],
        fractal:'zs-qs-se-ed-ex',
        shapes:['arr_t'],
        type: 'picto',
        description: "Comme une faux passant sur les blés."
    },
    {
        name: '_fa',
        fr: 'faire',
        path: [[m, q, lm, a, rm, a, m, q, r, q, rm, w, lm, w, l, q, m, q]],
        fractal:'zs-se-ez-qd-dx-xw-wq',
        shapes:['MEX_b','tri_t'],
        type: 'ideo',
        description: "Le faire est lié au corps, c'est cette grande surface au niveau de la terre."
    },
    {
        name: '_vea',
        fr: 'faible',
        path: [[lm, a, lm, w], [l, q, lm, w, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'zw-qw-ws',
        shapes:['arr_b'],
        type: 'ideo',
        description: "Une flèche vers le bas, c'est la faiblesse."
    },
    {
        name: '_fsa',
        fr: 'face',
        path: [[l, q, rm, w, rm, a, l, q, lm, w, rm, w, r, q, rm, a, l, q], [lm, a, m, q]],
        fractal:'qe-ex-xq-qw-wx-xd-de-zs',
        shapes:['TRI_1','TRI_out_bl','TRI_out_r'],
        type: 'ideo',
        description: "L'une des faces d'un polygone est désignée par un trait."
    },
    {
        name: '_stre',
        fr: 'extrémité',
        path: [[r, q, rm, a, rm, w, r, q], [lm, a, lm, a], [l, q, l, q], [m, q, m, q], [lm, w, lm, w]],
        fractal:'de-ex-xd',
        shapes:['TRI_out_r'],
        type: 'ideo',
        description: "Comme un coin à l'extrémité."
    },
    {
        name: '_stra',
        fr: 'extraire',
        path: [[l, q, r, q, rm, a, lm, w, l, q], [lm, a, lm, w], [rm, a, rm, w]],
        fractal:'zw-xe-qd-de-ew-wq',
        shapes:['arr_b','arr_t','PIPE'],
        type: 'ideo',
        description: "En un point l'on pousse, en l'autre il en sort quelque chose."
    },
    {
        name: '_tra',
        fr: 'extérieur',
        path: [[rm, a, lm, a, m, q, lm, w, rm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'ez-zs-sw-wx',
        shapes:['E'],
        type: 'ideo',
        description: "Comme la lettre E."
    },
    {
        name: '_vlye',
        fr: 'évoluer',
        path: [[l, q, l, q], [lm, a, lm, w], [rm, a, r, q, rm, w, m, q, rm, a]],
        fractal:'zw-se-ed-dx-xs',
        shapes:['LOS_r'],
        type: 'ideo',
        description: "Du point, vers le segment, vers la surface. L'évolution figurée par le passage d'une dimension supplémentaire."
    },
    {
        name: '_vne',
        fr: 'événement',
        path: [[r, q, rm, a, rm, w, r, q, m, q, lm, a, lm, w, m, q, l, q], [rm, a, lm, a, l, q, lm, w, rm, w]],
        fractal:'qz-ze-ed-dx-xw-wq-qd-ex-sz-zw-ws',
        shapes:['HEX'],
        type: 'ideo',
        description: "La fusion des glyphes utilisés pour les verbes 'aller' et 'planifier'."
    },
    {
        name: '_stea',
        fr: 'étoile',
        path: [[lm, a, r, q, lm, w, lm, a], [rm, a, rm, w, l, q, rm, a], [m, q, m, q]],
        fractal:'wz-zd-dw-xe-eq-qx',
        shapes:['TRI_2'],
        type: 'picto',
        description: "La façon la plus classique de représenter une étoile avec les points d'un hexagone."
    },
    {
        name: '_meama',
        fr: 'étant',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, l, q, lm, w, r, q]],
        fractal:'qz-zx-xd-de-eq-qw-wd',
        shapes:['MA','RECT_r'],
        type: 'ideo',
        description: "La fusion des glyphes utilisés pour les verbes 'être' et 'déterminer' produit le préfixe du gérondif."
    },
    {
        name: '_te',
        fr: 'et',
        path: [[lm, a, l, q, lm, w], [l, q, m, q], [rm, a, r, q, rm, w]],
        fractal:'zq-qw-qs-ed-dx',
        shapes:['MA'],
        type: 'ideo',
        description: "Rappelle de loin les lettres ET."
    },
    {
        name: '_bia',
        fr: 'équilibrer',
        path: [[lm, a, rm, a], [l, q, m, q, lm, w, rm, w, m, q, r, q]],
        fractal:'ze-qd-ws-sx-xw',
        shapes:['EQ','tri_b'],
        type: 'picto',
        description: "Comme une balance dans un parfait équilibre."
    },
    {
        name: '_kdea',
        fr: 'équidé',
        path: [[lm, a, rm, a, rm, w, lm, w, rm, a], [m, q, r, q], [l, q, l, q]],
        fractal:'ze-ex-xw-we-ds',
        shapes:['TREC_sbr','Z'],
        type: 'picto',
        description: "Une tête de cheval, droite comme un cavalier."
    },
    {
        name: '_nto',
        fr: 'entre',
        path: [[lm, a, rm, a, lm, w, rm, w], [l, q, rm, a], [lm, w, r, q]],
        fractal:'ze-ew-wx-qe-wd',
        shapes:['Z'],
        type: 'ideo',
        description: "La figuration d'une forme pliée entre deux axes."
    },
    {
        name: '_srye',
        fr: 'entourer',
        path: [[m, q, m, q], [l, q, lm, a], [rm, a, r, q], [lm, w, rm, w]],
        fractal:'zq-ed-wx',
        shapes:['N_r'],
        type: 'ideo',
        description: "Trois segments entourent un point."
    },
    {
        name: '_sko',
        fr: 'entendre',
        path: [[l, q, l, q], [r, q, m, q, rm, a, lm, a, lm, a, lm, w, rm, w, m, q]],
        fractal:'ds-se-ez-zw-wx-xs',
        shapes:['MEC_l','E_rev'],
        type: 'picto',
        description: "Comme une oreille, avec une flèche indiquant le passage des ondes sonores."
    },
    {
        name: '_nki',
        fr: 'entailler',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, m, q], [r, q, r, q]],
        fractal:'wz-ze-ex-xw-qs',
        shapes:['RECT'],
        type: 'picto',
        description: "Le passaged d'une lame sur une surface, pour y laisser une entaille."
    },
    {
        name: '_kdie',
        fr: 'enfant',
        path: [[lm, w, rm, a, rm, w, lm, w], [l, q, m, q], [lm, a, r, q]],
        fractal:'we-ex-xw-qs-zd',
        shapes:['KA','TREC_sbr'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour désigner l'humain, mais celui-ci serait encore dans un landeau ou une poussette."
    },
    {
        name: '_3ia',
        fr: 'énergie',
        path: [[lm, a, r, q, l, q, rm, w, lm, w, rm, a]],
        fractal:'ew-wx-xq-qd-dz',
        shapes:['N_l'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner le 'feu'."
    },
    {
        name: '_ni',
        fr: 'bas',
        path: [[lm, w, rm, w], [lm, a, lm, a], [rm, a, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'wx',
        shapes:['DASH'],
        type: 'ideo',
        description: "Un segment en bas, c'est le bas."
    },
    {
        name: '_nwo',
        fr: 'en',
        path: [[lm, w, l, q, m, q, lm, w, lm, a, rm, a, rm, w, lm, w], [r, q, r, q]],
        fractal:'ws-sq-qw-wz-ze-ex-xw',
        shapes:['RECT','arr_b','tri_bl'],
        type: 'ideo',
        description: "Une flèche vers le bas dans un cadre fini, évoque le concept 'en'."
    },
    {
        name: '_pkoi',
        fr: 'empaqueter',
        path: [[l, q, rm, a, rm, w], [lm, w, l, q, lm, a, rm, a, r, q, rm, w, lm, w, m, q], [lm, a, m, q, r, q]],
        fractal:'qz-ze-ed-dx-xw-wq-qe-ex-zs-sd-ws',
        shapes:['HEX','X_plur','PIC_tr'],
        type: 'picto',
        description: "Comme un objet dans une boîte."
    },
    {
        name: '_skoi',
        fr: 'émotion',
        path: [[lm, a, rm, w, lm, w, m, q], [rm, a, l, q, lm, a, rm, a, r, q]],
        fractal:'zx-xw-ws-de-eq-qz-ze',
        shapes:['KA', 'COL_t','TRI_out_tl','tri_b'],
        type: 'picto',
        description: "La fusion des glyphes utilisés pour désigner l'humain et le verbe avoir. Avoir de l'humanité, c'est ressentir des émotions."
    },
    {
        name: '_vzu',
        fr: 'électricité',
        path: [[l, q, lm, a, lm, w, rm, a, rm, w, r, q]],
        fractal:'qz-zw-we-ex-xd',
        shapes:['N_rev'],
        type: 'ideo',
        description: "Figurée par le courant alternatif."
    },
    {
        name: '_gla',
        fr: 'égaler',
        path: [[lm, a, rm, a], [l, q, r, q], [lm, w, rm, w]],
        fractal:'ze-qd-wx',
        shapes:['EQ'],
        type: 'ideo',
        description: "Un triple égal, l'égalité absolue."
    },
    {
        name: '_fke',
        fr: 'effet',
        path: [[r, q, l, q, lm, a, rm, a, r, q, rm, w], [lm, a, m, q], [lm, w, lm, w]],
        fractal:'xd-de-ez-zq-qd-zs',
        shapes:['ARR_r','tri_tl','MEX_t','LOS_tr'],
        type: 'ideo',
        description: "La fusion des glyphes utilisés pour 'de' et 'vers'."
    },
    {
        name: '_to',
        fr: 'eau',
        path: [[lm, a, rm, a], [l, q, lm, w, m, q, rm, w, r, q]],
        fractal:'ze-qw-ws-sx-xd',
        shapes:['W'],
        type: 'picto',
        description: "Les anciens Egyptiens représentaient l'eau un peu de cette façon. C'est un hommage."
    },
    {
        name: '_drye',
        fr: 'durer',
        path: [[m, q, lm, a, r, q, lm, w, m, q], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'dz-zs-sw-wd',
        shapes:['POINT_r'],
        type: 'ideo',
        description: "La pointe d'une flèche, coulée dans un métal dur comme l'airain. Monumentum aere perennius."
    },
    {
        name: '_drei',
        fr: 'dur',
        path: [[l, q, lm, w, lm, a, rm, a, rm, w, r, q], [lm, a, m, q, rm, a]],
        fractal:'qw-wz-ze-ex-xd-zs-se',
        shapes:['U_rev','tri_t'],
        type: 'ideo',
        description: "Une façon totalement arbitraire de désigner la dureté."
    },
    {
        name: '_drya',
        fr: 'droite',
        path: [[l, q, l, q], [lm, a, lm, a], [lm, w, lm, w], [m, q, m, q], [rm, a, rm, w], [r, q, r, q]],
        fractal:'ex',
        shapes:['PIPE','DASH'],
        type: 'ideo',
        description: "Une barre à droite, c'est la droite."
    },
    {
        name: '_dro',
        fr: 'droit',
        path: [[l, q, l, q], [lm, a, lm, w], [m, q, m, q], [rm, a, rm, w], [r, q, r, q]],
        fractal:'zw-ex',
        shapes:['PIPE'],
        type: 'ideo',
        description: "Droit, comme deux piquets."
    },
    {
        name: '_rdwa',
        fr: 'draper',
        path: [[lm, w, l, q, lm, a, r, q, rm, w, lm, w, m, q, r, q], [rm, a, rm, a]],
        fractal:'ws-sd-dx-xw-wq-qz-zd',
        shapes:['LOS_br'],
        type: 'picto',
        description: "Comme un drap dans l'action d'être plié."
    },
    {
        name: '_rmi',
        fr: 'dormir',
        path: [[l, q, rm, a, r, q, rm, w, l, q], [m, q, lm, w, lm, a, m, q]],
        fractal:'qe-ed-dx-xq-sz-zw-ws',
        shapes:['TRI_in_l','DIAM'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour le verbe 'voir', dans l'univers refermé songe."
    },
    {
        name: '_glo',
        fr: 'dont',
        path: [[rm, a, lm, a, lm, w, m, q, l, q], [r, q, r, q], [rm, w, rm, w]],
        fractal:'ez-zw-ws-sq',
        shapes:['arr_b','TREC_stl'],
        type: 'ideo',
        description: "Un choix totalement arbitraire."
    },
    {
        name: '_dku',
        fr: 'donc',
        path: [[rm, a, lm, a, lm, w, rm, w], [m, q, r, q], [l, q, l, q]],
        fractal:'ez-zw-wx-ds',
        shapes:['MEC_l'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe traverser, avec l'idée que la traversée à déjà eu lieu, pour illustrer la conséquentialité."
    },
    {
        name: '_dvi',
        fr: 'diviser',
        path: [[lm, w, rm, a], [l, q, l, q], [lm, a, lm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'ew',
        shapes:['DASH'],
        type: 'ideo',
        description: "Comme le signe /"
    },
    {
        name: '_dme',
        fr: 'dimensionner',
        path: [[lm, a, lm, w, rm, w, r, q, rm, a, lm, a], [l, q, l, q], [m, q, m, q]],
        fractal:'de-ez-zw-wx-xd',
        shapes:['PENTA_l'],
        type: 'ideo',
        description: "Comme la lettre D."
    },
    {
        name: '_dvey',
        fr: 'différer',
        path: [[l, q, l, q], [lm, a, rm, w, r, q, rm, a, lm, w]],
        fractal:'zx-xd-de-ew',
        shapes:['X','LOS_r'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner l''identique'."
    },
    {
        name: '_dvo',
        fr: 'devoir',
        path: [[lm, w, lm, a, rm, a, rm, w], [lm, a, m, q, rm, a], [l, q, l, q], [r, q, r, q]],
        fractal:'wz-ze-ex-zs-se',
        shapes:['U_rev','tri_t'],
        type: 'ideo',
        description: "Dérivé des glyphes utilisé pour les verbes 'ordonner' et 'porgrammer'."
    },
    {
        name: '_dva',
        fr: 'devant',
        path: [[l, q, r, q, rm, a, rm, w, r, q], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qd-de-ex-xd',
        shapes:['ARR_r','TRI_out_r'],
        type: 'ideo',
        description: "Une flèche imposante vers l'avant."
    },
    {
        name: '_dzye',
        fr: 'détruire',
        path: [[rm, a, rm, w], [m, q, r, q, lm, a, m, q], [l, q, lm, w]],
        fractal:'xe-dz-zs-sd-qw',
        shapes:['TRI_in_tr'],
        type: 'picto',
        description: "Comme une hâche prête à s'abattre sur une bûche."
    },
    {
        name: '_nbia',
        fr: 'déséquilibrer',
        path: [[lm, a, rm, a, l, q, r, q], [m, q, rm, w, lm, w, m, q]],
        fractal:'ze-eq-qd-ws-sx-xw',
        shapes:['tri_b'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour le verbe 'équilibrer', comme une balance déséquilibrée par un poids plus important d'un côté."
    },
    {
        name: '_dre',
        fr: 'derrière',
        path: [[r, q, l, q, lm, a, lm, w, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'dq-qz-zw-wq',
        shapes:['ARR_l','tri_out_l'],
        type: 'ideo',
        description: "Une flèche imposante vers l'arrière."
    },
    {
        name: '_fmai',
        fr: 'depuis',
        path: [[r, q, l, q], [lm, a, l, q, lm, w], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'zq-qw-dq',
        shapes:['ARR_l'],
        type: 'ideo',
        description: "Une flèche vers l'arrière, pour désigner la provenance."
    },
    {
        name: '_chna',
        fr: 'démasquer',
        path: [[lm, a, l, q, lm, w, r, q], [rm, a, r, q, rm, w, l, q], [m, q, m, q]],
        fractal:'zq-qw-wd-ed-dx-xq',
        shapes:['MA','CROSS_b'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour le verbe 'masquer'. Le masque est tombé, on en voit les fils."
    },
    {
        name: '_dle',
        fr: 'délicieux',
        path: [[l, q, r, q, rm, a, m, q, lm, a, l, q, lm, w, rm, w, r, q]],
        fractal:'dq-qz-zs-se-ed-dx-xw-wq',
        shapes:['M','C_b','MEX_b'],
        type: 'ideo',
        description: "L'un des glyphes de goût, dérivé du glyphe utilisé pour désigner les lèvres."
    },
    {
        name: '_d3a',
        fr: 'déjà',
        path: [[lm, a, m, q, r, q, rm, a, rm, w, r, q], [lm, w, m, q], [l, q, l, q]],
        fractal:'zs-sw-sd-de-ex-xd',
        shapes:['X_plur','TRI_out_r'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'aller', mais avec l'une des flèches à peine esquissée, comme pour signifier qu'on serait déjà arrivé."
    },
    {
        name: '_klue',
        fr: 'défaut',
        path: [[lm, a, r, q, rm, w, rm, a, l, q, m, q], [lm, w, lm, w]],
        fractal:'sq-qe-ex-xd-dz',
        shapes:['PIC_tr'],
        type: 'ideo',
        description: "L'inverse du glyphe utilisé pour désigner la 'qualité', et comme lui, peut s'utiliser en préfixe."
    },
    {
        name: '_dfo',
        fr: 'défaire',
        path: [[rm, a, lm, w, lm, a, rm, a, r, q, lm, w], [l, q, rm, w]],
        fractal:'qx-wz-ze-ed-dw-we',
        shapes:['DIAM','TREC_stl','TREC_tr'],
        type: 'ideo',
        description: "L'inverse du glyphe utilisé pour le verbe 'vaincre', comme une flèche plantée dans un corps à terre."
    },
    {
        name: '_3i',
        fr: 'découvrir',
        path: [[l, q, lm, a, lm, w, l, q], [r, q, rm, w, rm, a, r, q], [m, q, m, q]],
        fractal:'wz-zq-qw-xe-ed-dx',
        shapes:['MA','TRI_out_r','TRI_out_l'],
        type: 'ideo',
        description: "Deux pans s'acartant, pour découvrir une particule au centre."
    },
    {
        name: '_ktye',
        fr: 'découper',
        path: [[lm, a, lm, w], [l, q, rm, a], [m, q, r, q, rm, w, m, q]],
        fractal:'zw-qe-sd-dx-xs',
        shapes:['tri_br'],
        type: 'picto',
        description: "Comme une paire de ciseaux et un morceau de papier triangulaire."
    },
    {
        name: '_dsimza',
        fr: 'décimètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, m, q, l, q]],
        fractal:'ze-ed-dx-xw-ws-sq',
        shapes:['PENTA_l'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_dsigma',
        fr: 'décigramme',
        path: [[lm, a, rm, a, rm, w, lm, w, m, q, l, q], [r, q, r, q]],
        fractal:'ze-ex-xw-ws-sq',
        shapes:['MEC_r'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_trie',
        fr: 'déchêt',
        path: [[lm, a, rm, a, l, q], [m, q, lm, w], [r, q, rm, w]],
        fractal:'ze-eq-ws-xd',
        shapes:['DASH'],
        type: 'ideo',
        description: "Comme une sorte de balai, qui viendrait ramasser deux segments sur le sol."
    },
    {
        name: '_da',
        fr: 'de',
        path: [[l, q, lm, a, rm, a], [lm, a, m, q], [lm, w, lm, w], [rm, w, rm, w], [r, q, r, q]],
        fractal:'qz-ze-zs',
        shapes:['MA'],
        type: 'ideo',
        description: "Un choix totalement arbitraire pour désigner cette préposition."
    },
    {
        name: '_dfie',
        fr: 'dauphin',
        path: [[rm, a, l, q, lm, a, m, q, l, q], [lm, a, rm, a, rm, w, r, q], [lm, w, lm, w]],
        fractal:'dx-xe-ez-zq-qs-sz-eq',
        shapes:['tri_tl','TRI_out_tl'],
        type: 'picto',
        description: "Figuré dans le saut caractéristique et superbe de cet animal sublime."
    },
    {
        name: '_dse',
        fr: 'danser',
        path: [[l, q, rm, a, rm, w], [lm, a, r, q], [lm, w, m, q]],
        fractal:'qe-ex-ws-zd',
        shapes:['PIC_tr'],
        type: 'picto',
        description: "Comme un humain qui danserait une sorte de fox trot, avec tant de célérité qu'on lui verrait trois jambes."
    },
    {
        name: '_di',
        fr: 'dans',
        path: [[l, q, lm, a, rm, w, lm, w, rm, a, r, q, l, q]],
        fractal:'qz-zx-xw-we-ed-dq',
        shapes:['X_all','X'],
        type: 'ideo',
        description: "Un glyphe où tout pousse à regarder le centre, comme trois pointes désignant ce qui est 'dans'."
    },
    {
        name: '_d3e',
        fr: 'danger',
        path: [[m, q, lm, a, r, q, lm, w, lm, a], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'sz-zd-dw-wz',
        shapes:['TRI_0'],
        type: 'picto',
        description: "Comme le panneau danger, avec son point d'exclamation fiché dans un triangle."
    },
    {
        name: '_dwa',
        fr: 'cycle',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q, lm, w]],
        fractal:'ez-zq-qw-wx-xd-ds-sw',
        shapes:['LOS_br'],
        type: 'ideo',
        description: "Comme une spirale repliée sur elle-même."
    },
    {
        name: '_kraw',
        fr: 'crustacé',
        path: [[lm, a, lm, w, l, q, lm, a, rm, a, r, q, rm, w, rm, a], [m, q, m, q]],
        fractal:'zw-wq-qz-ze-ed-dx-xe',
        shapes:['U_rev','TRI_out_r','TRI_out_l'],
        type: 'picto',
        description: "Comme une sorte de crabe avec deux belles pinces."
    },
    {
        name: '_grae',
        fr: 'croître',
        path: [[l, q, lm, w, rm, w], [lm, a, lm, w, r, q], [rm, a, lm, w]],
        fractal:'qw-wx-zw-wd-ew',
        shapes:['PIC_bl'],
        type: 'picto',
        description: "Comme une graîne de laquelle jailliraient des tiges végétales."
    },
    {
        name: '_kru',
        fr: 'croiser',
        path: [[lm, a, r, q], [rm, a, l, q], [m, q, m, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'qe-dz',
        shapes:['CROSS_t'],
        type: 'ideo',
        description: "Deux segments croisés, tout simplement."
    },
    {
        name: '_kro',
        fr: 'croire',
        path: [[lm, a, rm, a, l, q, rm, w, lm, w], [rm, a, m, q, rm, w], [r, q, r, q]],
        fractal:'ze-es-sx-xw-eq-qx',
        shapes:['E_rev','POINT_l'],
        type: 'picto',
        description: "Comme la bouche d'un poisson, prête à gober n'importe-quoi."
    },
    {
        name: '_kri',
        fr: 'crier',
        path: [[lm, a, m, q], [l, q, lm, w, r, q, rm, a, rm, w]],
        fractal:'qw-wd-de-ex-zs',
        shapes:['RECT_r'],
        type: 'picto',
        description: "Une sorte de bouche ouverte, avec la langue dehors, pour figurer un cri."
    },
    {
        name: '_kvae',
        fr: 'couvrir',
        path: [[lm, a, lm, w, rm, w, rm, a, m, q, lm, a, l, q, r, q, rm, a]],
        fractal:'zw-wx-xe-ed-dq-qz-zs-se',
        shapes:['U','M','arr_t'],
        type: 'picto',
        description: "Comme un toit qui serait déposé sur un édifice."
    },
    {
        name: '_kry',
        fr: 'court',
        path: [[l, q, lm, w, r, q, rm, w], [lm, a, lm, a], [m, q, m, q], [rm, a, rm, a]],
        fractal:'qw-wd-dx',
        shapes:['DASH'],
        type: 'ideo',
        description: "Comme un petit fil."
    },
    {
        name: '_krye',
        fr: 'courrier',
        path: [[l, q, m, q, rm, a, l, q, lm, w, r, q, rm, a], [lm, a, lm, a], [rm, w, rm, w]],
        fractal:'qw-wd-de-es-sq-qe',
        shapes:['RECT_r','TRI_in_tl'],
        type: 'picto',
        description: "Comme une enveloppe. On ne pouvait pas rêver meilleure représentation."
    },
    {
        name: '_klo',
        fr: 'colorer',
        path: [[r, q, l, q, rm, a, lm, a, lm, w, rm, w, l, q]],
        fractal:'dq-qe-ez-zw-wx-xq',
        shapes:['POINT_l','MEC_l'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'voir', avec un plan situé à la base de l'oeil, là où se forment les couleurs. C'est aussi un préfixe."
    },
    {
        name: '_kte',
        fr: 'côté',
        path: [[lm, w, r, q, rm, w, lm, w, l, q, rm, a, r, q], [lm, a, m, q]],
        fractal:'qw-wx-xd-de-eq-wd-zs',
        shapes:['RECT_r','TRI_out_br'],
        type: 'ideo',
        description: "Un trait désigne le côté d'un polygone."
    },
    {
        name: '_bdi',
        fr: 'corps',
        path: [[l, q, lm, a, lm, w, r, q, rm, a, rm, w, l, q], [m, q, m, q]],
        fractal:'wz-zq-qx-xe-ed-dw',
        shapes:['MA','PIPE'],
        type: 'picto',
        description: "C'est la figuration d'un corps auquel il manquerait une tête. On y voit le nombril."
    },
    {
        name: '_sno',
        fr: 'contre',
        path: [[rm, a, r, q, rm, w], [l, q, m, q], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qs-ed-dx',
        shapes:['MA','DASH'],
        type: 'ideo',
        description: "dérivé du glyphe utilisé pour désigner le 'moins'."
    },
    {
        name: '_kpoi',
        fr: 'continuer',
        path: [[r, q, rm, a, rm, w, r, q, m, q], [lm, a, r, q, lm, w], [l, q, l, q]],
        fractal:'de-ex-xd-ds-zd-dw',
        shapes:['POINT_r','TRI_out_r'],
        type: 'picto',
        description: "En hommage au Spoutnik, qui continua d'emettre, et preuve de la persévérance des humains dans l'esprit de conquête."
    },
    {
        name: '_ksea',
        fr: 'construire',
        path: [[rm, a, rm, w], [r, q, lm, a, l, q, m, q, lm, w]],
        fractal:'ex-dz-zq-qs-sw',
        shapes:['CROSS_t'],
        type: 'picto',
        description: "Dans la lignée des glyphes utilisés pour les verbes 'travailler', 'réparer', c'est un humain armé d'un outil."
    },
    {
        name: '_knoi',
        fr: 'connecter',
        path: [[lm, a, l, q, lm, w], [l, q, r, q], [rm, a, r, q, rm, w]],
        fractal:'zq-qw-ed-dx-qd',
        shapes:['MA'],
        type: 'ideo',
        description: "Un segment horizontal relie deux parenthèses."
    },
    {
        name: '_kno',
        fr: 'connaître',
        path: [[m, q, lm, w, l, q, lm, a, rm, a, r, q, lm, w, rm, w]],
        fractal:'xw-wq-qz-ze-ed-dw-ws',
        shapes:['PENTA_l'],
        type: 'ideo',
        description: "Une flèche revient à sa base, c'est le cycle de la connaissance."
    },
    {
        name: '_kfay',
        fr: 'confondre',
        path: [[rm, a, r, q, rm, w], [l, q, r, q], [m, q, lm, a, l, q, lm, w, lm, a]],
        fractal:'zw-wq-qz-zs-qd-ed-dx',
        shapes:['MA','ARR_r','TRI_out_l'],
        type: 'ideo',
        description: "La confusion est évoquée par l'indécision quant à la forme choisie à gauche du glyphe."
    },
    {
        name: '_troi',
        fr: 'conflit',
        path: [[l, q, lm, w, rm, a], [r, q, rm, w, lm, a]],
        fractal:'qw-we-dx-xz',
        shapes:['X'],
        type: 'picto',
        description: "Comme deux épées croisant le fer."
    },
    {
        name: '_hi',
        fr: 'condition',
        path: [[rm, a, l, q, rm, w], [lm, a, r, q, lm, w], [m, q, m, q]],
        fractal:'eq-qx-zd-dw',
        shapes:['HI'],
        type: 'ideo',
        description: "L'avenir et le passé se croisant dans la formation d'une hypothèse."
    },
    {
        name: '_kteu',
        fr: 'compter',
        path: [[m, q, lm, a, lm, w, m, q, r, q], [l, q, rm, a, rm, w, l, q]],
        fractal:'xe-eq-qx-wz-zs-sw-ds',
        shapes:['TRI_l','TRI_in_l','X_plur'],
        type: 'ideo',
        description: "La fusion des glyphes utilisés pour le verbe 'voir' et le 'pluriel'."
    },
    {
        name: '_plea',
        fr: 'complexe',
        path: [[l, q, l, q], [lm, a, m, q, lm, w], [m, q, rm, a, rm, w, r, q, m, q]],
        fractal:'zs-sw-se-ex-xd-ds',
        shapes:['X_plur'],
        type: 'ideo',
        description: "Depuis une forme simple, vers une forme intriquée."
    },
    {
        name: '_haw',
        fr: 'comment',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, rm, w, r, q], [m, q, m, q]],
        fractal:'ze-eq-qx-wx-xd',
        shapes:['POINT_l'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'interroger'."
    },
    {
        name: '_fta',
        fr: 'commencer',
        path: [[m, q, l, q, lm, a, r, q, lm, w, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'sq-qz-zd-dw-wq',
        shapes:['POINT_r','DIAM'],
        type: 'ideo',
        description: "Comme une flèche encore inachevée."
    },
    {
        name: '_ki',
        fr: 'clé',
        path: [[lm, a, lm, w, m, q], [l, q, r, q, rm, w], [rm, a, rm, a]],
        fractal:'zw-ws-qd-dx',
        shapes:['LOS_br'],
        type: 'picto',
        description: "La figuration d'une véritable clé."
    },
    {
        name: '_rkai',
        fr: 'classer',
        path: [[lm, a, rm, a], [l, q, l, q], [lm, w, rm, w, m, q, r, q]],
        fractal:'ze-ds-sx-xw',
        shapes:['DASH','Z_rev'],
        type: 'ideo',
        description: "Relier, classer... relier, classer... relier..."
    },
    {
        name: '_srie',
        fr: 'circuit',
        path: [[l, q, lm, a, lm, w, rm, a, rm, w, r, q, l, q]],
        fractal:'qz-zw-we-ex-xd-dq',
        shapes:['N_rev'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner l'électricité, dans un circuit fermé."
    },
    {
        name: '_kwo',
        fr: 'couper',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, r, q]],
        fractal:'wz-ze-ex-xw-qd',
        shapes:['RECT'],
        type: 'ideo',
        description: "Un rectangle incisé dans le sens de la largeur."
    },
    {
        name: '_skai',
        fr: 'ciel',
        path: [[lm, w, rm, a, lm, a, rm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'xz-ze-ew',
        shapes:['X','tri_t'],
        type: 'ideo',
        description: "Des fondations en haut, et des bras vers la terre. Ainsi des nuées."
    },
    {
        name: '_swa',
        fr: 'choisir',
        path: [[lm, a, lm, w, rm, w, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'zw-wx-xe',
        shapes:['U'],
        type: 'ideo',
        description: "L'inverse du glyphe utilisé pour le vebe 'ordonner', comme une ouverture vers le ciel et la liberté."
    },
    {
        name: '_sdae',
        fr: 'chaque',
        path: [[l, q, lm, a, m, q, l, q], [rm, w, r, q], [lm, w, lm, w], [rm, a, rm, a]],
        fractal:'qs-sz-zq-xd',
        shapes:['tri_tl'],
        type: 'ideo',
        description: "Une pointe désine un segment, et le ferait à chaque fois."
    },
    {
        name: '_sni',
        fr: 'chanter',
        path: [[lm, a, l, q, lm, w, rm, w, r, q], [l, q, rm, w, m, q, l, q], [rm, a, rm, a]],
        fractal:'zq-qw-wx-xd-qs-sx-xq',
        shapes:['LOS_bl','TRI_out_bl','TRI_in_bl'],
        type: 'picto',
        description: "Comme une bouche ouverte, au fond de laquelle se distinguerait une luette vibrante."
    },
    {
        name: '_fgy',
        fr: 'champignon',
        path: [[l, q, rm, w, rm, a, r, q, m, q, rm, a], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qx-xe-ed-ds-se',
        shapes:['arr_t','PIC_br'],
        type: 'picto',
        description: "Comme un champignon sorti du sol, avec quelques spores."
    },
    {
        name: '_fle',
        fr: 'chair',
        path: [[l, q, rm, a, m, q, rm, w, l, q, lm, a, rm, a, rm, w, lm, w, l, q], [r, q, r, q]],
        fractal:'ez-zq-qw-wx-xe-eq-qx-xs-se',
        shapes:['POINT_l','PENTA_l','TRI_out_tl','TRI_out_bl','TRI_in_r'],
        type: 'ideo',
        description: "Une incision sur un morceau de peau en révèle la chair."
    },
    {
        name: '_bzea',
        fr: 'cervidé',
        path: [[lm, a, rm, w, lm, w, r, q], [l, q, m, q, rm, a]],
        fractal:'zx-xw-wd-qs-se',
        shapes:['KA'],
        type: 'picto',
        description: "Comme les bois nobles de la tête d'un cervidé."
    },
    {
        name: '_srea',
        fr: 'céréale',
        path: [[rm, w, l, q, lm, w, rm, w, r, q, rm, a, rm, w], [lm, a, m, q]],
        fractal:'xq-qw-wx-xd-de-ex-zs',
        shapes:['PIC_br','TRI_out_r','TRI_out_bl'],
        type: 'picto',
        description: "L'épi du blé, piquant et bien ordonné, pointé vers le ciel avant la récolte."
    },
    {
        name: '_tru',
        fr: 'cercler',
        path: [[m, q, l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q]],
        fractal:'sq-qz-ze-ed-dx-xw-wq',
        shapes:['HEX'],
        type: 'ideo',
        description: "Comment figurer un cercle avec un hexagone? Dans le doute, on indiqua le rayon."
    },
    {
        name: '_sye',
        fr: 'centrer',
        path: [[lm, a, rm, w], [lm, w, rm, a], [l, q, r, q]],
        fractal:'zx-we-qd',
        shapes:['X_all'],
        type: 'ideo',
        description: "Comme un point perspectif au centre de la forme."
    },
    {
        name: '_stimza',
        fr: 'centimètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, m, q], [l, q, l, q]],
        fractal:'ze-ed-dx-xw-ws',
        shapes:['C_l'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_stigma',
        fr: 'centigramme',
        path: [[lm, a, rm, a, rm, w, lm, w, m, q], [l, q, l, q], [r, q, r, q]],
        fractal:'ze-ex-xw-ws',
        shapes:['MEC_r'],
        type: 'ideo',
        description: "Un des glyphes de mesure, avec son système arbitraire."
    },
    {
        name: '_sley',
        fr: 'cellule',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w], [m, q, m, q], [r, q, r, q]],
        fractal:'ez-zq-qw-wx',
        shapes:['C_l'],
        type: 'ideo',
        description: "Comme la lettre C. Cellule ouverte d'où peuvent entrer et sortir des informations."
    },
    {
        name: '_de',
        fr: 'ce',
        path: [[lm, a, rm, a], [lm, w, rm, w], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-wx',
        shapes:['EQ','DASH'],
        type: 'ideo',
        description: "Une désignation aribtraire."
    },
    {
        name: '_kzo',
        fr: 'causer',
        path: [[rm, a, lm, a, l, q, lm, w], [l, q, r, q], [lm, a, m, q], [rm, w, rm, w]],
        fractal:'wq-qz-ze-dq-zs',
        shapes:['tri_tl','MEX_tl'],
        type: 'ideo',
        description: "La fusion des glyphes utilisés pour déigner 'de' et 'depuis'."
    },
    {
        name: '_gzo',
        fr: 'car',
        path: [[lm, a, r, q, lm, w, rm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a]],
        fractal:'xw-wd-dz',
        shapes:['POINT_r'],
        type: 'ideo',
        description: "La forme inverse du glyphe utilisé pour le verbe 'questionner'. Comme un point d'interrogation à l'envers."
    },
    {
        name: '_knew',
        fr: 'canonner',
        path: [[lm, a, l, q, rm, w, r, q], [lm, w, m, q], [rm, a, rm, a]],
        fractal:'zq-qx-xd-ws',
        shapes:['RECT_l'],
        type: 'ideo',
        description: "Comme un canon lançant un boulet."
    },
    {
        name: '_klio',
        fr: 'canin',
        path: [[rm, a, lm, a, lm, w, m, q, r, q], [l, q, rm, w]],
        fractal:'ez-zw-ws-sd-qx',
        shapes:[''],
        type: 'picto',
        description: "Comme la tête d'un de ces chiens aux longues oreilles, flottant en arrière pendant la course."
    },
    {
        name: '_rko',
        fr: 'caillou',
        path: [[lm, a, rm, w, lm, w, lm, a, r, q, rm, w], [l, q, l, q], [rm, a, rm, a]],
        fractal:'xz-zw-wx-xd-dz',
        shapes:['DIAM','TREC_sbl','TREC_br'],
        type: 'picto',
        description: "Une sorte de diamant taillé pour illustrer la pierre."
    },
    {
        name: '_glio',
        fr: 'but',
        path: [[m, q, l, q, lm, a, rm, a, rm, w], [lm, w, rm, w, r, q]],
        fractal:'sq-qz-ze-ex-wx-xd',
        shapes:['LOS_tl'],
        type: 'ideo',
        description: "Une sorte de flèche parcourant une part de circonférence, avant de tomber à pic."
    },
    {
        name: '_bze',
        fr: 'business',
        path: [[rm, a, lm, a, l, q, r, q, rm, w, lm, w], [lm, a, rm, w]],
        fractal:'ez-zq-qd-dx-xw-zx',
        shapes:['X','tri_tl','tri_br','Z_rev'],
        type: 'picto',
        description: "Comme le signe $"
    },
    {
        name: '_bra',
        fr: 'bras',
        path: [[lm, w, lm, a, m, q, r, q, lm, w], [l, q, rm, w], [rm, a, rm, a]],
        fractal:'zs-sd-dw-wz-qx',
        shapes:['PIC_bl'],
        type: 'picto',
        description: "Une sorte d'humain qui, sautant un obstacle, lancerait des bras forts en l'air."
    },
    {
        name: '_dvea',
        fr: 'brancher',
        path: [[lm, a, rm, w], [l, q, m, q], [lm, w, rm, w, rm, a], [r, q, r, q]],
        fractal:'ex-xw-zx-qs',
        shapes:['DASH'],
        type: 'picto',
        description: "Comme les branches d'un arbre."
    },
    {
        name: '_bo',
        fr: 'bovidé',
        path: [[lm, a, rm, w], [m, q, rm, a], [lm, w, r, q], [l, q, l, q]],
        fractal:'zx-es-wd',
        shapes:['KA'],
        type: 'picto',
        description: "Comme une tête avec des cornes, et aussi, curieusement, l'inverse du glyphe utilisé pour désigner l'humain..."
    },
    {
        name: '_bu',
        fr: 'boucler',
        path: [[l, q, m, q, rm, a, lm, a, lm, w, rm, w, r, q]],
        fractal:'qs-se-ez-zw-wx-xd',
        shapes:['DASH'],
        type: 'ideo',
        description: "La figuration d'un lacet faisant une boucle."
    },
    {
        name: '_blu',
        fr: 'bleu',
        path: [[lm, w, rm, w, r, q], [l, q, l, q], [lm, a, lm, a], [m, q, m, q], [rm, a, rm, a]],
        fractal:'wx-xd',
        shapes:['MA'],
        type: 'ideo',
        description: "En faisant le tour du cercle chromatique, c'est ici que le bleu se repose."
    },
    {
        name: '_keo',
        fr: 'bien',
        path: [[l, q, lm, w, rm, a], [rm, w, r, q], [lm, a, lm, a]],
        fractal:'qw-we-xd',
        shapes:['DASH'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner le 'vrai'."
    },
    {
        name: '_bly',
        fr: 'baleine',
        path: [[l, q, m, q, lm, a, l, q, lm, w, r, q, rm, w, rm, a, lm, a], [m, q, lm, w]],
        fractal:'sz-zq-qw-ws-sq-ze-ex-xd-dw',
        shapes:['LOS_l','CROSS_b','tri_tl','tri_bl'],
        type: 'picto',
        description: "Baleine, bouche ouverte, fanons dehors."
    },
    {
        name: '_zaw',
        fr: 'aussi',
        path: [[lm, a, lm, w, l, q, lm, a, rm, w, r, q, rm, a, lm, w], [rm, a, rm, w]],
        fractal:'qz-zx-xd-de-ew-wq-zw-ex',
        shapes:['PIPE','X','LOS_l','LOS_r'],
        type: 'ideo',
        description: "Dérivé des glyphes utilisés pour désigner l'identique et le 'droit'."
    },
    {
        name: '_vi',
        fr: 'avec',
        path: [[lm, w, lm, a, rm, w, rm, a, lm, w], [l, q, r, q]],
        fractal:'wz-zx-xe-ew-qd',
        shapes:['X','X_all','TRI_in_l','TRI_in_r'],
        type: 'ideo',
        description: "Deux flèches se touchant au niveau de la pointe."
    },
    {
        name: '_ntea',
        fr: 'avant',
        path: [[m, q, l, q, lm, a, lm, w, l, q], [rm, a, rm, a], [rm, w, rm, w], [r, q, r, q]],
        fractal:'sq-qz-zw-wq',
        shapes:['TRI_out_l'],
        type: 'ideo',
        description: "Une petite flèche grasse vers le passé."
    },
    {
        name: '_rpa',
        fr: 'attraper',
        path: [[l, q, r, q, rm, a, m, q], [lm, a, lm, w], [rm, w, rm, w]],
        fractal:'qd-de-es-zw',
        shapes:['tri_tr'],
        type: 'picto',
        description: "Comme un humain muni d'un filet prêt à attraper un papillon."
    },
    {
        name: '_spea',
        fr: 'attendre',
        path: [[l, q, lm, a, lm, w], [m, q, rm, a, rm, w], [r, q, r, q]],
        fractal:'qz-zw-se-ex',
        shapes:['PIPE'],
        type: 'picto',
        description: "Comme deux humains l'un derrière l'autre, faisant la queue."
    },
    {
        name: '_tmei',
        fr: 'atome',
        path: [[lm, w, rm, a, rm, w], [l, q, r, q], [lm, a, lm, a]],
        fractal:'we-ex-qd',
        shapes:['X'],
        type: 'ideo',
        description: "Comme la lettre A."
    },
    {
        name: '_ktea',
        fr: 'arrêter',
        path: [[l, q, r, q], [lm, a, lm, w], [rm, a, r, q, rm, w]],
        fractal:'ed-dx-qd-zw',
        shapes:['ARR_r'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner 'vers', avec une barre verticale pour l'arrêter."
    },
    {
        name: '_rkye',
        fr: 'arachnide',
        path: [[l, q, lm, a, rm, a, r, q, rm, w], [m, q, rm, a], [lm, a, lm, w]],
        fractal:'qz-ze-ed-dx-es-zw',
        shapes:['DASH'],
        type: 'picto',
        description: "Une sorte étrange d'araignée avec quelques pattes en moins."
    },
    {
        name: '_ftea',
        fr: 'après',
        path: [[r, q, rm, a, rm, w, r, q, m, q], [lm, a, lm, a], [l, q, l, q], [lm, w, lm, w]],
        fractal:'sd-de-ex-xd',
        shapes:['TRI_out_r'],
        type: 'ideo',
        description: "Une petite flèche grasse vers l'avenir."
    },
    {
        name: '_znie',
        fr: 'appuyer',
        path: [[lm, a, lm, w, rm, w, m, q, l, q, rm, a, r, q]],
        fractal:'de-eq-qs-sx-xw-wz',
        shapes:['TREC_htr','TREC_sbl'],
        type: 'picto',
        description: "Une sorte d'humain qui viendrait appuyer du bras sur quelque chose d'absent."
    },
    {
        name: '_zai',
        fr: 'apparaître',
        path: [[lm, w, m, q, rm, w, lm, w, l, q, lm, a, rm, a, r, q, rm, w]],
        fractal:'ws-sx-xw-wq-qz-ze-ed-dx',
        shapes:['HEX','tri_b'],
        type: 'ideo',
        description: "Un triangle apparaît dans un hexagone."
    },
    {
        name: '_piz',
        fr: 'apaiser',
        path: [[l, q, lm, a, lm, w, m, q, r, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'qz-zw-ws-sd',
        shapes:['DASH'],
        type: 'ideo',
        description: "Le passage d'une oscillation vers le calme plat."
    },
    {
        name: '_kpaw',
        fr: 'antenne',
        path: [[lm, a, l, q, rm, w, m, q, lm, w, r, q, rm, a]],
        fractal:'zq-qx-xs-sw-wd-de',
        shapes:['CROSS_b'],
        type: 'picto',
        description: "La figuration d'une antenne sur un toit."
    },
    {
        name: '_pkia',
        fr: 'animal',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, m, q, rm, a, l, q], [r, q, r, q]],
        fractal:'qe-ez-zq-qw-wx-xs-se',
        shapes:['ARR_db_l','TRI_out_tl'],
        type: 'ideo',
        description: "Comme une bouche ouverte vers l'avenir."
    },
    {
        name: '_glei',
        fr: 'angle',
        path: [[lm, a, rm, a, rm, w], [l, q, l, q], [lm, w, lm, w], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-ex',
        shapes:['DASH','TREC_str'],
        type: 'ideo',
        description: "Deux segments avec un angle droit."
    },
    {
        name: '_mrya',
        fr: 'amplifier',
        path: [[l, q, rm, w, rm, a, r, q, lm, w, l, q, rm, a], [lm, a, m, q]],
        fractal:'qw-wd-de-eq-qx-xe-zs',
        shapes:['PIC_br','RECT_r'],
        type: 'picto',
        description: "Comme un haut-parleur duquel sortirait une onde sonore."
    },
    {
        name: '_mre',
        fr: 'amer',
        path: [[l, q, lm, a, m, q, rm, a, r, q, l, q], [lm, w, rm, w]],
        fractal:'qd-de-es-sz-zq-wx',
        shapes:['M','tri_tl','tri_tr'],
        type: 'ideo',
        description: "L'n des glyphes du goût, dérivé du glyphe utilisé pour désigner les lèvres."
    },
    {
        name: '_prba',
        fr: 'âme',
        path: [[lm, a, r, q, lm, w, lm, a, m, q, r, q], [lm, w, m, q], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'wz-zd-dw-ws-sd-zs',
        shapes:['TRI_0','X_plur'],
        type: 'ideo',
        description: "Une pyramide triangulaire vue d'en haut. La phonologie fait aussi référence à la pyramide. Un joli symbole pour cette vieille idée."
    },
    {
        name: '_tae',
        fr: 'alterner',
        path: [[lm, a, rm, a, l, q], [m, q, m, q], [rm, w, lm, w, r, q]],
        fractal:'ze-eq-xw-wd',
        shapes:['DASH'],
        type: 'ideo',
        description: "Un coup en haut, un coup en bas."
    },
    {
        name: '_slio',
        fr: 'alors',
        path: [[lm, a, m, q, r, q], [rm, a, r, q, rm, w], [l, q, l, q], [lm, w, lm, w]],
        fractal:'zs-sd-ed-dx',
        shapes:['ARR_r'],
        type: 'ideo',
        description: "Une sorte de flèche vers l'avenir, qui serait héritée d'un étage supérieur."
    },
    {
        name: '_le',
        fr: 'aller',
        path: [[r, q, rm, a, rm, w, r, q, m, q, lm, a, lm, w, m, q, l, q]],
        fractal:'qd-de-ex-xd-sz-zw-ws',
        shapes:['ARR_r','TRI_out_r','TRI_in_l'],
        type: 'ideo',
        description: "Deux flèches vers l'avenir, pour illustrer le mouvement qui y mène."
    },
    {
        name: '_hio',
        fr: 'alléger',
        path: [[lm, a, rm, a], [l, q, l, q], [r, q, r, q], [lm, w, m, q, rm, w]],
        fractal:'ws-sx-ze',
        shapes:['DASH'],
        type: 'ideo',
        description: "Une pointe vers le haut pour figurer la légèreté."
    },
    {
        name: '_lea',
        fr: 'aléa',
        path: [[l, q, r, q, lm, w], [lm, a, lm, a], [rm, a, rm, w]],
        fractal:'ex-qd-dw',
        shapes:['TREC_hbl'],
        type: 'ideo',
        description: "Comme un humain lançant une pièce."
    },
    {
        name: '_fsu',
        fr: 'ajuster',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, lm, w, l, q, r, q]],
        fractal:'qz-zx-xd-de-ew-wq-qd',
        shapes:['X','X_all','MA'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner l'identique, l'ajustement se fait bord à bord."
    },
    {
        name: '_hae',
        fr: 'air',
        path: [[lm, a, rm, a, r, q], [l, q, m, q, rm, w], [lm, w, rm, a]],
        fractal:'ze-ed-qs-sx-we',
        shapes:['ARR_dbl_r','ARR_r'],
        type: 'ideo',
        description: "Deux flèches vers le ciel, légères comme l'air."
    },
    {
        name: '_kli',
        fr: 'qualité',
        path: [[rm, w, l, q, lm, a, lm, w, r, q, m, q], [rm, a, rm, a]],
        fractal:'xq-qz-zw-wd-ds',
        shapes:['PIC_bl'],
        type: 'ideo',
        description: "Préfixe de qualité, utilisé pour changer un verbe en adjectif. Sa forme est totalement arbitraire."
    },
    {
        name: '_nmae',
        fr: 'nombre',
        path: [[lm, w, lm, a, rm, w, rm, a], [l, q, l, q], [r, q, r, q]],
        fractal:'wz-zx-xe',
        shapes:['N'],
        type: 'ideo',
        description: "Comme la lettre N."
    },
    {
        name: '_zno',
        fr: '11',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q, r, q], [m, q, lm, w, lm, a, r, q]],
        fractal:'qz-ze-ed-dx-xw-wq-wz-zd-zs-sd-ws',
        shapes:['HEX','PIC_tl'],
        type: 'ideo',
        description: "Onze segments."
    },
    {
        name: '_dza',
        fr: '10',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q, r, q], [m, q, lm, w, lm, a]],
        fractal:'qz-ze-ed-dx-xw-wq-wz-zs-sd-ws',
        shapes:['HEX','X_plur'],
        type: 'ideo',
        description: "Dix segments."
    },
    {
        name: '_nwa',
        fr: '9',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q, r, q], [lm, w, m, q]],
        fractal:'ze-ed-dx-xw-wq-qz-zs-sd-ws',
        shapes:['HEX','X_plur'],
        type: 'ideo',
        description: "Neuf segments."
    },
    {
        name: '_sme',
        fr: 'identique',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, lm, w, l, q]],
        fractal:'qz-zx-xd-de-ew-wq',
        shapes:['X','LOS_l','LOS_r'],
        type: 'ideo',
        description: "Deux formes identiques."
    },
    {
        name: '_tsio',
        fr: '8',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, lm, w, l, q]],
        fractal:'qz-zx-xd-de-ew-wq',
        shapes:['X','LOS_l','LOS_r'],
        type: 'ideo',
        description: "Huit segments."
    },
    {
        name: '_stei',
        fr: '7',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q, r, q]],
        fractal:'dq-qz-ze-ed-dx-xw-wq',
        shapes:['HEX','MEX_t','MEX_b'],
        type: 'ideo',
        description: "Sept segments."
    },
    {
        name: '_ksi',
        fr: '6',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q], [m, q, m, q]],
        fractal:'qz-ze-ed-dx-xw-wq',
        shapes:['HEX'],
        type: 'ideo',
        description: "Six segments."
    },
    {
        name: '_foi',
        fr: '5',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, r, q]],
        fractal:'ze-ex-xw-wz-qd',
        shapes:['RECT'],
        type: 'ideo',
        description: "Cinq segments."
    },
    {
        name: '_ktu',
        fr: '4',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-ex-xw-wz',
        shapes:['RECT'],
        type: 'ideo',
        description: "Quatre segments."
    },
    {
        name: '_srei',
        fr: '3',
        path: [[lm, w, lm, a, r, q, lm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'wz-zd-dw',
        shapes:['TRI_0'],
        type: 'ideo',
        description: "Trois segments."
    },
    {
        name: '_du',
        fr: '2',
        path: [[lm, w, lm, a, r, q], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'wz-zd',
        shapes:['PIC_tl'],
        type: 'ideo',
        description: "Deux segments."
    },
    {
        name: '_kfa',
        fr: '1',
        path: [[lm, a, lm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'wz',
        shapes:['PIPE'],
        type: 'ideo',
        description: "Un segment."
    },
    {
        name: '_sro',
        fr: '0',
        path: [[lm, a, rm, w], [lm, w, rm, a], [l, q, r, q]],
        fractal:'zx-we-qd',
        shapes:['X_all'],
        type: 'ideo',
        description: "Le centre perspectif, c'est aussi le point de départ des nombres."
    },
    {
        name: '_,',
        fr: ',',
        path: [[rm, a, m, q, rm, w], [lm, a, lm, a], [l, q, l, q], [lm, w, lm, w], [r, q, r, q]],
        fractal:'es-sx',
        shapes:['ARR_db,l','DASH'],
        type: 'ideo',
        description: "Comme le symbole utilisé pour la virgule."
    },
    {
        name: '_!',
        fr: '!',
        path: [[lm, a, m, q], [l, q, lm, w], [rm, a, r, q], [rm, w, rm, w]],
        fractal:'qw-zs-ed',
        shapes:['EQ','DASH'],
        type: 'ideo',
        description: "Une sorte de point d'exclamation !"
    },
    {
        name: '_?',
        fr: '?',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, lm, w], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-eq-qx',
        shapes:['POINT_l'],
        type: 'ideo',
        description: "Une sorte de point d'interrogation."
    },
    {
        name: '_.',
        fr: '.',
        path: [[m, q, m, q], [m, q, m, q]],
        fractal:'ss',
        shapes:[''],
        type: 'ideo',
        description: "Un point, comme un rien."
    },
    {
        name: '_mea',
        fr: 'déterminer',
        path: [[lm, a, rm, w], [l, q, rm, a], [lm, w, r, q]],
        fractal:'zx-qe-wd',
        shapes:['X','DASH'],
        type: 'ideo',
        description: "Le préfixe qui change un verbe en substantif. Une barre vient relier deux parallèles, pour en désigner la connexion, et déterminer une signification."
    },
    {
        name: '_ma',
        fr: 'être',
        path: [[lm, a, l, q, lm, w], [m, q, m, q], [rm, a, r, q, rm, w]],
        fractal:'zq-qw-ed-dx',
        shapes:['MA'],
        type: 'ideo',
        description: "Deux parenthèses autour d'un point."
    },
    {
        name: '_kde',
        fr: 'adolescent',
        path: [[rm, a, lm, w], [m, q, rm, w], [l, q, r, q], [lm, a, lm, a]],
        fractal:'qd-we-xs',
        shapes:['KA','X'],
        type: 'picto',
        description: "Une sorte d'humain, jouant avec une balle."
    },
    {
        name: '_dly',
        fr: 'adulte',
        path: [[r, q, lm, a, rm, a, lm, w, lm, a], [m, q, rm, w], [l, q, l, q]],
        fractal:'we-ez-zw-xs-dz',
        shapes:['KA','TREC_stl'],
        type: 'picto',
        description: "Dérivé du glyphe utilisé pour désigner l'humain. L'adulte est empêtré dans un cadre, dont il ne peut s'extraire."
    },
    {
        name: '_pfae',
        fr: 'agir',
        path: [[l, q, lm, w, lm, a, r, q, lm, w], [rm, a, lm, a], [rm, w, r, q], [m, q, m, q]],
        fractal:'qw-wz-zd-dw-ez-xd',
        shapes:['TRI_0'],
        type: 'ideo',
        description: "Comme une roue qui tournerait, si de l'eau en agissait les pales."
    },
    {
        name: '_dna',
        fr: 'adn',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, l, q], [lm, w, rm, a, rm, w]],
        fractal:'we-ex-qd-dx-xw-wq-qz-ze',
        shapes:['LOS_tl','TREC_sbr','MEX_b'],
        type: 'ideo',
        description: "La fusion des glyphes utilisés pour désigner la 'cellule' et l'atome."
    },
    {
        name: '_sde',
        fr: 'acide',
        path: [[lm, a, m, q, l, q, lm, w, rm, w, r, q, m, q, rm, a], [l, q, rm, w], [r, q, lm, w]],
        fractal:'zs-se-qd-dx-xw-wq-qx-wd',
        shapes:['MEX_b','CROSS_b'],
        type: 'ideo',
        description: "L'un des glyphe du goût, dérivé du glyphe utilisé pour désigner les lèvres."
    },
    {
        name: '_bai',
        fr: 'acheter',
        path: [[lm, a, m, q, rm, a, lm, a, l, q, r, q, rm, a], [lm, w, rm, w]],
        fractal:'qd-de-ez-zq-zs-se-wx',
        shapes:['MEX_t'],
        type: 'ideo',
        description: "Hérité du glyphe représentant l'idée de 'sous'."
    },
    {
        name: '_kmia',
        fr: 'accumuler',
        path: [[lm, a, r, q, m, q, lm, a], [l, q, rm, w], [lm, w, lm, w], [rm, a, rm, a]],
        fractal:'zs-sd-dz-qx',
        shapes:['TRI_in_tr'],
        type: 'ideo',
        description: "Un segment dirigé vers un autre, bientôt s'accumulant."
    },
    {
        name: '_grey',
        fr: 'accrocher',
        path: [[lm, a, rm, a, r, q, l, q], [rm, a, rm, w], [lm, w, lm, w]],
        fractal:'ze-ed-dq-ex',
        shapes:['MEX_t'],
        type: 'ideo',
        description: "Comme un pied de table, accroché à sa planche."
    },
    {
        name: '_ksu',
        fr: 'accélérer',
        path: [[l, q, r, q], [lm, a, m, q, lm, w], [rm, a, r, q, rm, w]],
        fractal:'zs-sw-ed-dx-qd',
        shapes:['ARR_dbl_r','ARR_r'],
        type: 'ideo',
        description: "Deux petites flèches répétées vers l'avant, pour signifier l'accélération."
    },
    {
        name: '_boi',
        fr: 'à',
        path: [[lm, a, lm, w, l, q, m, q], [rm, a, r, q, rm, w]],
        fractal:'zw-wq-qs-ed-dx',
        shapes:['MA'],
        type: 'ideo',
        description: "Un glyphe totalement aribtraire pour cette préposition."
    },
    {
        name: '_fya',
        fr: 'donner',
        path: [[lm, a, rm, a, m, q, lm, a], [l, q, lm, w, rm, w, r, q]],
        fractal:'zs-se-ez-qw-wx-xd',
        shapes:['COL_b','tri_t'],
        type: 'ideo',
        description: "Un triangle tombant dans ce qui pourrait être des paumes ouvertes."
    },
    {
        name: '_fy',
        fr: 'refléter',
        path: [[lm, a, rm, a, lm, w, rm, w, lm, a], [l, q, r, q]],
        fractal:'ze-ew-wx-xz-qd',
        shapes:['X','X_all','tri_t','tri_b'],
        type: 'picto',
        description: "Un triangle se reflétant à la surface de l'eau."
    },
    {
        name: '_go',
        fr: 'avoir',
        path: [[lm, w, m, q, rm, w, lm, w], [l, q, lm, a, rm, a, r, q]],
        fractal:'ws-sx-xw-qz-ze-ed',
        shapes:['tri_b','COL_t'],
        type: 'ideo',
        description: "L'inverse de la forme du glyphe attribuée à l'idée de 'donner', comme une paume refermée sur un objet."
    },
    {
        name: '_ka',
        fr: 'humain',
        path: [[lm, a, rm, w],[lm, w, m, q],[l, q, rm, a], [r, q, r, q]],
        fractal:'zx-ws-qe',
        shapes:['KA'],
        type: 'picto',
        description: "Deux jambes, un buste, deux bras, une tête, et une balle."
    },
    {
        name: '_kme',
        fr: 'pour',
        path: [[lm, a, lm, w], [l, q, m, q], [rm, a, r, q, rm, w]],
        fractal:'zw-qs-ed-dx',
        shapes:['MA'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour désigner le 'plus'."
    },
    {
        name: '_sa',
        fr: 'vivre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a], [lm, a, rm, w], [rm, a, lm, w], [l, q, r, q]],
        fractal:'qz-ze-ed-dx-xw-wq-qd-zx-we',
        shapes:['HEX','X_all','X'],
        type: 'ideo',
        description: "Une sorte de totalité."
    },
    {
        name: '_smia',
        fr: 'isme',
        path: [[rm, w, l, q, r, q, lm, w, m, q, rm, w, lm, w], [lm, a, lm, a], [rm, a, rm, a]],
        fractal:'qd-dw-wx-xs-sw-wd-qx',
        shapes:['CROSS_b','tri_b'],
        type: 'ideo',
        description: "Dérivé du glyphe utilisé pour le verbe 'valoriser'."
    }
];

export { a, q, w, l, lm, m, r, rm, graphieros_dictionnary };