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
        path:[[rm,a,lm,a,l,q,lm,w,rm,w,r,q,m,q],[lm,a,r,q,lm,w,m,q,lm,a]]
    },
    {
        name:'_dryktu',
        fr:'mois',
        path:[[lm,a,r,q,lm,w,m,q,lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,l,q]]
    },
    {
        name:'_dryksi',
        fr:'semaine',
        path:[[lm,a,r,q,lm,w,m,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a]]
    },
    {
        name:'_lki',
        fr: 'chaîner',
        path: [[l, q, rm, a, r, q, rm, w, l, q, lm, a, r, q, lm, w, l, q], [m, q, m, q]]
    },
    {
        name: '_gly',
        fr: 'pétrole',
        path: [[l, q, lm, w, m, q, rm, w, r, q],[lm, a, lm, w],[rm, a, rm, w]],
    },
    {
        name: '_zba',
        fr: 'syllabe',
        path: [[rm, a, l, q, r, q, lm, w], [lm, a, lm, a], [rm, w, rm, w]],
    },
    {
        name: '_nmo',
        fr: 'nommer',
        path: [[lm, a, r, q, rm, w, lm, w, l, q, lm, a, rm, a, r, q], [lm, w, rm, a], [m, q, rm, w]],
    },
    {
        name: '_sola',
        fr: 'son',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a, r, q]],

    },
    {
        name: '_sota',
        fr: 'ton',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a, r, q, m, q]],

    },
    {
        name: '_kwi',
        fr: 'qui',
        path: [[lm, a, l, q, lm, w], [l, q, rm, w, rm, a], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_ze',
        fr: 'utiliser',
        path: [[l, q, lm, w, rm, w, r, q], [lm, w, lm, a, rm, a, rm, w], [lm, a, rm, w], [rm, a, lm, w]],

    },
    {
        name: '_vrea',
        fr: 'vrai',
        path: [[l, q, lm, w, rm, a], [lm, a, lm, a], [r, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_v3ai',
        fr: 'vouloir',
        path: [[lm, a, m, q, rm, a], [l, q, lm, w, rm, w, r, q]],

    },
    {
        name: '_flae',
        fr: 'voler',
        path: [[lm, a, rm, a, r, q], [lm, w, rm, a], [l, q, l, q], [rm, w, rm, w]],
    },
    {
        name: '_vloi',
        fr: 'volume',
        path: [[lm, a, rm, a, r, q], [rm, a, lm, w], [l, q, lm, w, rm, w]],
    },
    {
        name: '_sta',
        fr: 'voir',
        path: [[rm, a, l, q, rm, w], [l, q, r, q], [lm, a, m, q, lm, w]],
    },
    {
        name: '_ko',
        fr: 'voici',
        path: [[lm, a, lm, a], [rm, a, rm, a], [m, q, m, q], [l, q, lm, w, rm, w, r, q]],
    },
    {
        name: '_vlo',
        fr: 'vitesse',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [rm, a, m, q, rm, w], [l, q, m, q]],

    },
    {
        name: '_vzi',
        fr: 'visage',
        path: [[lm, a, lm, a], [m, q, m, q], [l, q, rm, a, r, q, rm, w, lm, w, l, q]],

    },
    {
        name: '_vzy',
        fr: 'virus',
        path: [[m, q, rm, a, rm, w, lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a]],

    },
    {
        name: '_vle',
        fr: 'violet',
        path: [[l, q, lm, w, rm, w], [lm, a, lm, a], [rm, a, rm, a], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_ldo',
        fr: 'vieux',
        path: [[lm, a, m, q, r, q, lm, w, m, q, rm, w], [l, q, l, q], [rm, a, rm, a]],

    },
    {
        name: '_vey',
        fr: 'vieillard',
        path: [[l, q, rm, a, r, q], [lm, a, rm, w], [lm, w, m, q]],

    },
    {
        name: '_vde',
        fr: 'vider',
        path: [[l, q, r, q, rm, a, m, q], [rm, a, rm, w], [lm, a, lm, a], [lm, w, lm, w]],

    },
    {
        name: '_vzey',
        fr: 'vice',
        path: [[lm, w, lm, w], [l, q, lm, a, rm, w, l, q], [rm, a, r, q]],

    },
    {
        name: '_vba',
        fr: 'vibrer',
        path: [[r, q, lm, a, rm, a, m, q, rm, w, lm, w, r, q, m, q], [l, q, l, q]],

    },
    {
        name: '_vry',
        fr: 'vertu',
        path: [[lm, a, lm, a], [l, q, rm, a, lm, w, l, q], [r, q, rm, w]],

    },
    {
        name: '_vrae',
        fr: 'vert',
        path: [[l, q, l, q], [lm, a, lm, a], [lm, w, lm, w], [m, q, m, q], [rm, a, r, q, rm, w]],

    },
    {
        name: '_kto',
        fr: 'vers',
        path: [[l, q, r, q], [rm, a, r, q, rm, w], [lm, a, lm, a], [lm, w, lm, w]],

    },
    {
        name: '_rmye',
        fr: 'ver',
        path: [[l, q, lm, w, m, q, rm, w, r, q, lm, a, rm, a]],

    },
    {
        name: '_sloi',
        fr: 'vendre',
        path: [[lm, a, rm, a], [lm, w, l, q, r, q, rm, w, lm, w, m, q, rm, w]],

    },
    {
        name: '_pio',
        fr: 'végétal',
        path: [[lm, a, lm, w, r, q], [l, q, rm, w], [lm, w, rm, a]],

    },
    {
        name: '_vnia',
        fr: 'varier',
        path: [[l, q, rm, a, lm, a, l, q], [m, q, r, q, rm, w, m, q], [lm, w, lm, w]],

    },
    {
        name: '_vlia',
        fr: 'valoriser',
        path: [[lm, a, rm, a], [l, q, r, q, lm, w, rm, w, l, q]],

    },
    {
        name: '_vkye',
        fr: 'vaincre',
        path: [[rm, a, lm, w, l, q, rm, a, rm, w, rm, w, lm, w], [lm, a, r, q]],

    },
    {
        name: '_waa',
        fr: 'trouver',
        path: [[l, q, lm, a, lm, w, rm, w, lm, a, r, q], [rm, a, rm, a]],

    },
    {
        name: '_tro',
        fr: 'trop',
        path: [[lm, a, l, q, lm, w, rm, w, r, q, rm, a], [l, q, r, q], [lm, w, m, q, rm, w]],

    },
    {
        name: '_bse',
        fr: 'trébucher',
        path: [[lm, a, rm, a, r, q], [l, q, rm, a], [lm, w, m, q], [rm, w, rm, w]],

    },
    {
        name: '_tie',
        fr: 'traverser',
        path: [[rm, a, lm, a, lm, w, rm, w], [l, q, r, q]],

    },
    {
        name: '_tvai',
        fr: 'travailler',
        path: [[lm, a, lm, w], [l, q, rm, a, r, q, m, q, rm, w, r, q]],

    },
    {
        name: '_zit',
        fr: 'transitionner',
        path: [[m, q, l, q, lm, a, m, q, rm, a, r, q, rm, w, lm, w, m, q], [rm, a, rm, w]],

    },
    {
        name: '_mne',
        fr: 'transgenre',
        path: [[lm, a, m, q, r, q, rm, w, lm, w, m, q], [lm, w, r, q], [l, q, rm, a]],

    },
    {
        name: '_tew',
        fr: 'tout',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q], [lm, w, lm, a, r, q, lm, w], [rm, a, rm, w, l, q, rm, a], [l, q, r, q], [lm, a, rm, w], [rm, a, lm, w]],

    },
    {
        name: '_pko',
        fr: 'toucher',
        path: [[lm, a, lm, w], [rm, a, rm, w], [l, q, lm, w, rm, w, r, q], [m, q, m, q]],

    },
    {
        name: '_tnogma',
        fr: 'tonne',
        path: [[rm, w, lm, a, rm, a, rm, w, lm, w, l, q, m, q, lm, w], [r, q, r, q]],

    },
    {
        name: '_pley',
        fr: 'tirer',
        path: [[lm, a, l, q, lm, w], [rm, a, m, q, rm, w], [r, q, r, q]],

    },
    {
        name: '_tra3',
        fr: 'théâtre',
        path: [[l, q, l, q], [lm, w, lm, w], [r, q, lm, a, rm, a, m, q, rm, w]],

    },
    {
        name: '_toi',
        fr: 'texte',
        path: [[lm, a, rm, a], [l, q, m, q], [lm, w, rm, w], [r, q, r, q]],

    },
    {
        name: '_tea',
        fr: 'tête',
        path: [[l, q, l, q], [lm, w, lm, a, rm, a, m, q], [r, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_ste',
        fr: 'tester',
        path: [[l, q, l, q], [lm, w, lm, a, rm, a, m, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_trea',
        fr: 'terre',
        path: [[l, q, l, q], [lm, a, rm, w, lm, w, rm, a], [r, q, r, q]],

    },
    {
        name: '_kpoile',
        fr: 'temps',
        path: [[l, q, r, q, rm, a, rm, w, r, q, lm, a, lm, w, r, q], [lm, a, m, q, lm, w]],

    },
    {
        name: '_po',
        fr: 'température',
        path: [[lm, a, lm, w, rm, w], [l, q, m, q], [rm, a, rm, a], [r, q, r, q]],

    },
    {
        name: '_tle',
        fr: 'téléphoner',
        path: [[l, q, rm, w, m, q, lm, w, r, q, rm, a, lm, a, l, q, r, q], [lm, w, rm, w]],

    },
    {
        name: '_zlae',
        fr: 'tant',
        path: [[l, q, lm, a], [lm, w, rm, w, rm, a], [m, q, rm, a, r, q]],

    },
    {
        name: '_sai',
        fr: 'taille',
        path: [[lm, a, l, q, r, q, rm, w], [lm, w, lm, w], [rm, a, rm, a]],

    },
    {
        name: '_stu',
        fr: 'synthétiser',
        path: [[l, q, lm, a, m, q, lm, w, l, q], [rm, a, rm, w], [r, q, r, q]],

    },
    {
        name: '_sbo',
        fr: 'symboliser',
        path: [[l, q, lm, a, lm, w], [m, q, rm, a, rm, w, r, q]],

    },
    {
        name: '_tpe',
        fr: 'sur',
        path: [[lm, a, rm, a], [l, q, r, q, rm, w, lm, w, l, q]],

    },
    {
        name: '_flo',
        fr: 'suivre',
        path: [[l, q, m, q, lm, a, lm, w, m, q], [rm, a, r, q, rm, w]],

    },
    {
        name: '_pkae',
        fr: 'sujet',
        path: [[lm, a, rm, w, lm, w, lm, a, rm, a, rm, w], [lm, w, m, q], [l, q, rm, a], [r, q, r, q]],

    },
    {
        name: '_ske',
        fr: 'sucrer',
        path: [[lm, a, m, q, rm, a], [l, q, r, q, lm, w, rm, w]],

    },
    {
        name: '_fi',
        fr: 'subjonctif',
        path: [[rm, a, l, q, lm, w], [l, q, r, q], [lm, a, rm, w]],

    },
    {
        name: '_svo',
        fr: 'souvent',
        path: [[rm, w, l, q, lm, w, rm, w, lm, a, r, q, rm, a, lm, a]],

    },
    {
        name: '_nde',
        fr: 'sous',
        path: [[l, q, r, q, rm, a, lm, a, l, q], [lm, w, rm, w]],

    },
    {
        name: '_sple',
        fr: 'souple',
        path: [[lm, w, m, q, rm, w, lm, w, lm, a, r, q, rm, a, l, q, lm, a], [rm, a, rm, w]],

    },
    {
        name: '_3nu',
        fr: 'soumettre',
        path: [[l, q, rm, a], [lm, a, rm, a, r, q], [m, q, rm, w, lm, w]],

    },
    {
        name: '_soma',
        fr: 'soi',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a, r, q, rm, w], [m, q, r, q]],

    },
    {
        name: '_mki',
        fr: 'singe',
        path: [[lm, a, rm, w], [m, q, r, q], [l, q, rm, a], [lm, w, lm, w]],

    },
    {
        name: '_snea',
        fr: 'simplifier',
        path: [[lm, a, lm, w, m, q, l, q, lm, a], [rm, a, r, q, rm, w]],

    },
    {
        name: '_zei',
        fr: 'si',
        path: [[lm, w, l, q, rm, a], [lm, a, rm, w], [r, q, r, q]],

    },
    {
        name: '_skwa',
        fr: 'sexe',
        path: [[lm, a, m, q, rm, a, lm, a, l, q, lm, w, rm, w, r, q, rm, a]],

    },
    {
        name: '_lno',
        fr: 'seul',
        path: [[m, q, m, q], [l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q]],

    },
    {
        name: '_trey',
        fr: 'séparer',
        path: [[l, q, lm, a, lm, w, l, q, r, q, rm, a, rm, w, r, q]],

    },
    {
        name: '_smu',
        fr: 'sentir',
        path: [[lm, a, l, q, lm, w, rm, w, r, q], [m, q, rm, a]],

    },
    {
        name: '_vye',
        fr: 'sens',
        path: [[l, q, m, q], [r, q, lm, a, rm, a, r, q, rm, w, lm, w, r, q]],

    },
    {
        name: '_sge',
        fr: 'segmenter',
        path: [[l, q, l, q], [lm, a, lm, a], [lm, w, m, q], [rm, w, rm, w], [rm, a, r, q]],

    },
    {
        name: '_sky',
        fr: 'sécuriser',
        path: [[lm, w, lm, a, r, q, lm, w], [l, q, l, q], [rm, a, rm, a], [m, q, rm, w]],

    },
    {
        name: '_d3y',
        fr: 'seconde',
        path: [[l, q, l, q], [r, q, r, q], [rm, a, lm, a, rm, w, lm, w]],

    },
    {
        name: '_so',
        fr: 'se',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a], [m, q, r, q, rm, w]],

    },
    // {
    //     name: '_',
    //     fr: '',
    //     path: [[]],

    // },
    {
        name: '_sle',
        fr: 'saler',
        path: [[l, q, m, q, lm, a, lm, w, rm, w, rm, a, m, q, r, q]],

    },
    {
        name: '_rgo',
        fr: 'rouge',
        path: [[lm, a, l, q, lm, w], [m, q, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_rwe',
        fr: 'roue',
        path: [[r, q, m, q, lm, a, l, q, lm, w, m, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_rgya',
        fr: 'rongeur',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, r, q, rm, w, m, q, lm, w, l, q]],

    },
    {
        name: '_lfaw',
        fr: 'rire',
        path: [[l, q, lm, w, m, q, lm, a], [lm, w, r, q, rm, a, rm, w]],

    },
    {
        name: '_rgi',
        fr: 'rigide',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w, r, q, rm, w, l, q, lm, w, r, q], [rm, a, rm, w]],

    },
    {
        name: '_ne',
        fr: 'rien',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q], [lm, w, lm, w], [rm, w, rm, w]],

    },
    {
        name: '_swo',
        fr: 'revenir',
        path: [[l, q, lm, a, lm, w, l, q, m, q, rm, a, rm, w, m, q, r, q]],

    },
    {
        name: '_rve',
        fr: 'réveiller',
        path: [[m, q, lm, w, lm, a, r, q, l, q, rm, a, rm, w, m, q]],

    },
    {
        name: '_rto',
        fr: 'retourner',
        path: [[rm, w, rm, a, lm, a, lm, w], [l, q, lm, w, m, q], [r, q, r, q]],

    },
    {
        name: '_lvoi',
        fr: 'retirer',
        path: [[lm, a, lm, w, m, q, l, q, lm, w], [rm, a, r, q, rm, w]],

    },
    {
        name: '_zle',
        fr: 'résulter',
        path: [[l, q, m, q], [lm, a, lm, a], [lm, w, lm, w], [rm, a, rm, w], [r, q, r, q]],

    },
    {
        name: '_pta',
        fr: 'reptile',
        path: [[lm, w, rm, w, l, q, r, q, lm, a], [m, q, rm, a]],

    },
    {
        name: '_rpie',
        fr: 'répéter',
        path: [[r, q, l, q, lm, a, lm, w], [rm, w, rm, a, m, q]],

    },
    {
        name: '_fksi',
        fr: 'réparer',
        path: [[r, q, lm, a, m, q, l, q, lm, w, m, q], [rm, a, rm, w]],

    },
    {
        name: '_floi',
        fr: 'remplir',
        path: [[l, q, r, q, rm, w, m, q], [rm, a, rm, w], [lm, a, lm, a], [lm, w, lm, w]],

    },
    {
        name: '_rdai',
        fr: 'refaire',
        path: [[m, q, lm, a, rm, a, m, q, r, q, lm, w, rm, w, l, q, m, q]],

    },
    {
        name: '_tba',
        fr: 'récipient',
        path: [[lm, a, l, q, lm, w, rm, w, r, q, rm, a], [m, q, m, q]],

    },
    {
        name: '_rsea',
        fr: 'recevoir',
        path: [[l, q, rm, w, m, q, lm, w, r, q], [lm, a, rm, a]],

    },
    {
        name: '_rbae',
        fr: 'rebondir',
        path: [[l, q, lm, a, rm, w, rm, a], [lm, w, r, q]],

    },
    {
        name: '_snoi',
        fr: 'rayonner',
        path: [[lm, a, rm, a, r, q], [l, q, rm, a, rm, w], [lm, w, rm, a]],

    },
    {
        name: '_groi',
        fr: 'ramper',
        path: [[lm, w, rm, a, rm, w, r, q, l, q, lm, a, m, q]],

    },
    {
        name: '_rma',
        fr: 'ramasser',
        path: [[l, q, rm, a, r, q], [lm, a, lm, w, m, q], [rm, w, rm, w]],

    },
    {
        name: '_slo',
        fr: 'ralentir',
        path: [[r, q, l, q], [lm, a, l, q, lm, w], [rm, a, m, q, rm, w]],

    },
    {
        name: '_wo',
        fr: 'questionner',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, lm, w], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_kwa',
        fr: 'que',
        path: [[lm, a, l, q, lm, w], [l, q, rm, a, rm, w], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_kta',
        fr: 'quantité',
        path: [[r, q, m, q, rm, w, lm, w, lm, a, rm, a, rm, w], [l, q, l, q]],

    },
    {
        name: '_fkwe',
        fr: 'quand',
        path: [[rm, a, lm, a, lm, w, r, q, m, q], [l, q, l, q], [rm, w, rm, w]],

    },
    {
        name: '_3e',
        fr: 'protéger',
        path: [[lm, w, l, q, lm, a, rm, a, r, q, rm, w], [m, q, m, q]],

    },
    {
        name: '_prai',
        fr: 'proportionner',
        path: [[r, q, m, q, rm, w, r, q, lm, a, lm, w, r, q], [l, q, l, q], [rm, a, rm, a]],

    },
    {
        name: '_prio',
        fr: 'programmer',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w, rm, w, rm, a], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_tpia',
        fr: 'profond',
        path: [[lm, w, lm, a, l, q, lm, w, rm, w, r, q, l, q], [rm, a, rm, a]],

    },
    {
        name: '_pre',
        fr: 'près',
        path: [[lm, w, lm, a, r, q], [l, q, m, q, rm, a, l, q], [rm, w, rm, w]],

    },
    {
        name: '_ra',
        fr: 'prendre',
        path: [[lm, w, l, q, m, q, lm, a, rm, a, m, q, r, q, rm, w]],

    },
    {
        name: '_frya',
        fr: 'pouvoir',
        path: [[lm, w, m, q, rm, w], [l, q, lm, a, rm, a, r, q]],

    },
    {
        name: '_psie',
        fr: 'pousser',
        path: [[l, q, l, q], [lm, a, m, q, lm, w], [rm, a, r, q, rm, w]],

    },
    {
        name: '_vwa',
        fr: 'pourquoi',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, r, q], [m, q, m, q]],

    },
    {
        name: '_psu',
        fr: 'positionner',
        path: [[l, q, m, q, lm, w, lm, a, rm, a, lm, w], [r, q, rm, w]],

    },
    {
        name: '_ptoi',
        fr: 'porter',
        path: [[lm, w, rm, a, r, q, lm, a, rm, a], [m, q, rm, w], [l, q, l, q]],

    },
    {
        name: '_lbay',
        fr: 'porcin',
        path: [[m, q, lm, w, l, q, lm, a, rm, a, r, q, rm, w, rm, a]],

    },
    {
        name: '_ptea',
        fr: 'poitriner',
        path: [[lm, w, m, q, l, q, rm, a, m, q, rm, w], [lm, a, lm, a], [r, q, r, q]],

    },
    {
        name: '_psaw',
        fr: 'poisson',
        path: [[l, q, rm, a, rm, w, r, q, lm, w, l, q], [lm, a, lm, a], [m, q, m, q]],

    },
    {
        name: '_fky',
        fr: 'pointer',
        path: [[l, q, rm, w, rm, a], [lm, a, lm, a], [m, q, m, q], [lm, w, lm, w], [r, q, r, q]],

    },
    {
        name: '_ploi',
        fr: 'poil',
        path: [[l, q, lm, w], [lm, a, m, q], [rm, a, rm, w], [r, q, r, q]],

    },
    {
        name: '_vdio',
        fr: 'plus',
        path: [[lm, a, lm, w], [l, q, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_tsi',
        fr: 'pluriel',
        path: [[lm, a, m, q, r, q], [lm, w, m, q], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_plwe',
        fr: 'plume',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, r, q, rm, w, l, q], [lm, w, lm, w]],

    },
    {
        name: '_pli',
        fr: 'plier',
        path: [[lm, a, rm, a, r, q, l, q, lm, w, rm, w]],

    },
    {
        name: '_pto',
        fr: 'pleuvoir',
        path: [[l, q, lm, w, m, q, rm, w, r, q], [lm, a, lm, a], [rm, a, rm, a]],

    },
    {
        name: '_pla',
        fr: 'planifier',
        path: [[lm, w, lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a], [rm, a, rm, w], [r, q, l, q]],

    },
    {
        name: '_pnae',
        fr: 'planète',
        path: [[lm, w, lm, a, r, q, lm, w, l, q, lm, a, rm, a, r, q, rm, w, lm, w], [rm, a, rm, w, l, q, rm, a], [m, q, m, q]],

    },
    {
        name: '_aria',
        fr: 'planer',
        path: [[lm, a, m, q, rm, a, r, q, lm, a, l, q, rm, a, m, q], [lm, w, lm, w], [rm, w, rm, w]],

    },
    {
        name: '_ueoa',
        fr: 'plaisir',
        path: [[m, q, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q]],

    },
    {
        name: '_pvo',
        fr: 'pivoter',
        path: [[lm, w, lm, a, m, q, lm, w, r, q, rm, w, lm, w], [l, q, l, q], [rm, a, rm, a]],

    },
    {
        name: '_vdibwa',
        fr: 'pire',
        path: [[m, q, l, q, lm, a, rm, w], [lm, w, lm, a], [rm, a, r, q]],

    },
    {
        name: '_pke',
        fr: 'piquant',
        path: [[lm, w, lm, a, m, q, rm, a, rm, w, lm, w, l, q, r, q, rm, w]],

    },
    {
        name: '_gwi',
        fr: 'pingouin',
        path: [[lm, a, rm, a, l, q, lm, w, rm, w, rm, a, r, q], [m, q, m, q]],

    },
    {
        name: '_trai',
        fr: 'piéger',
        path: [[lm, w, lm, a, l, q, r, q, rm, a, lm, a], [rm, w, rm, w]],

    },
    {
        name: '_fti',
        fr: 'pied',
        path: [[l, q, m, q, lm, w, lm, a, rm, a, rm, a, rm, w, m, q, r, q]],

    },
    {
        name: '_sfi',
        fr: 'peur',
        path: [[lm, a, rm, w], [m, q, r, q, rm, a], [l, q, l, q], [lm, w, lm, w]],

    },
    {
        name: '_psia',
        fr: 'peser',
        path: [[lm, a, rm, a, rm, w, lm, w, m, q, rm, w], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_lse',
        fr: 'perdre',
        path: [[rm, w, lm, a, rm, a, rm, w], [l, q, rm, w, r, q], [lm, w, lm, w]],

    },
    {
        name: '_dri',
        fr: 'percer',
        path: [[r, q, rm, a, m, q, rm, w, r, q, lm, a, l, q, lm, w, r, q, l, q]],

    },
    {
        name: '_hia',
        fr: 'penser',
        path: [[m, q, l, q, lm, a, rm, a, r, q, m, q, rm, w, lm, w, m, q]],

    },
    {
        name: '_pda',
        fr: 'pendant',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [l, q, r, q], [rm, a, rm, w]],

    },
    {
        name: '_prye',
        fr: 'part',
        path: [[m, q, rm, w, lm, w, m, q], [l, q, l, q], [lm, a, lm, a], [rm, a, rm, a], [r, q, r, q]],

    },
    {
        name: '_psoi',
        fr: 'passer',
        path: [[r, q, l, q], [rm, a, l, q, rm, w], [lm, a, lm, a], [lm, w, lm, w]],

    },
    {
        name: '_pmi',
        fr: 'parmi',
        path: [[lm, a, rm, a, r, q, l, q, lm, a, rm, w, lm, w, rm, a]],

    },
    {
        name: '_vga',
        fr: 'parfumer',
        path: [[lm, a, l, q, rm, a, rm, w, r, q], [l, q, lm, w, rm, w], [m, q, rm, a]],

    },
    {
        name: '_smai',
        fr: 'parfois',
        path: [[l, q, lm, a, m, q], [lm, w, rm, w, r, q], [rm, a, rm, a]],

    },
    {
        name: '_prae',
        fr: 'parcourir',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q]],

    },
    {
        name: '_ba',
        fr: 'par',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, l, q], [m, q, rm, w], [lm, w, rm, w, r, q]],

    },
    {
        name: '_mriy',
        fr: 'papillon',
        path: [[lm, w, lm, a, rm, a, lm, w], [l, q, r, q, rm, w, l, q]],

    },
    {
        name: '_sra',
        fr: 'pacifier',
        path: [[l, q, lm, w, rm, a, lm, a, rm, w, r, q]],

    },
    {
        name: '_pno',
        fr: 'ouvrir',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [l, q, m, q]],

    },
    {
        name: '_he',
        fr: 'oui',
        path: [[l, q, l, q], [lm, a, lm, w, m, q], [rm, a, rm, w], [r, q, r, q]],

    },
    {
        name: '_roi',
        fr: 'ou',
        path: [[lm, a, rm, a, lm, w, rm, w, lm, a], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_sdey',
        fr: 'où',
        path: [[lm, a, rm, w], [lm, w, rm, w, r, q], [l, q, l, q], [rm, a, rm, a]],

    },
    {
        name: '_bnio',
        fr: 'os',
        path: [[lm, a, rm, w, rm, a, l, q, m, q, rm, a, lm, a, l, q, lm, w, rm, w], [r, q, r, q]],

    },
    {
        name: '_via',
        fr: 'originer',
        path: [[l, q, lm, w, lm, a, rm, a], [m, q, r, q, rm, w, m, q]],

    },
    {
        name: '_rgia',
        fr: 'organe',
        path: [[rm, a, l, q, m, q, lm, w, rm, w, lm, a], [lm, w, l, q, lm, a, rm, a, r, q, rm, w]],

    },
    {
        name: '_rdo',
        fr: 'ordonner',
        path: [[lm, w, lm, a, rm, a, rm, w], [l, q, l, q], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_r3y',
        fr: 'orange',
        path: [[l, q, lm, a, rm, a], [m, q, m, q], [r, q, r, q], [lm, w, lm, w], [rm, w, rm, w]],

    },
    {
        name: '_vroi',
        fr: 'or',
        path: [[l, q, m, q], [lm, a, m, q, lm, w], [r, q, rm, a, rm, w, r, q]],

    },
    {
        name: '_gnae',
        fr: 'onde',
        path: [[l, q, lm, w], [lm, a, rm, w], [rm, a, r, q]],

    },
    {
        name: '_broi',
        fr: 'ombre',
        path: [[l, q, rm, a, rm, w, lm, w], [lm, a, m, q], [r, q, r, q]],

    },
    {
        name: '_zo',
        fr: 'oiseau',
        path: [[m, q, l, q, lm, w, rm, a], [lm, a, rm, a, r, q], [rm, w, rm, w]],

    },
    {
        name: '_gwa',
        fr: 'oeuf',
        path: [[l, q, lm, a, m, q, lm, w, l, q], [rm, a, r, q, rm, w]],

    },
    {
        name: '_ptae',
        fr: 'objet',
        path: [[lm, w, m, q, rm, w, lm, w, lm, a, rm, a, rm, w], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_ney',
        fr: 'nouveau',
        path: [[lm, a, l, q, lm, w, m, q, rm, w, r, q, rm, a]],

    },
    {
        name: '_fdu',
        fr: 'nourrir',
        path: [[l, q, lm, w, lm, a, rm, a, r, q, rm, w, l, q], [m, q, m, q]],

    },
    {
        name: '_nia',
        fr: 'non',
        path: [[lm, a, rm, w], [rm, a, lm, w], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_na',
        fr: 'ni',
        path: [[l, q, m, q], [lm, a, rm, w, r, q], [lm, w, rm, a]],

    },
    {
        name: '_nsio',
        fr: 'nécessiter',
        path: [[lm, a, l, q, m, q, rm, a, r, q], [m, q, rm, w, lm, w]],

    },
    {
        name: '_zmi',
        fr: 'musique',
        path: [[l, q, lm, w, lm, a, rm, a, r, q], [lm, w, rm, w, m, q, rm, a]],

    },
    {
        name: '_mso',
        fr: 'muscler',
        path: [[lm, a, rm, a, rm, w, l, q, m, q, rm, w], [lm, w, lm, w], [r, q, r, q]],

    },
    {
        name: '_mksi',
        fr: 'multiplier',
        path: [[lm, a, lm, a], [rm, a, rm, a], [m, q, m, q], [l, q, lm, w, rm, w, r, q]],

    },
    {
        name: '_ftey',
        fr: 'mou',
        path: [[l, q, lm, a, lm, w, rm, w, rm, a, r, q], [lm, w, m, q, rm, w]],

    },
    {
        name: '_mtu',
        fr: 'montagne',
        path: [[l, q, lm, a, m, q, rm, a, r, q], [lm, w, rm, w]],

    },
    {
        name: '_mu',
        fr: 'mollusque',
        path: [[l, q, m, q, lm, a, l, q, lm, w, rm, w, r, q, rm, a], [lm, a, lm, w, r, q]],

    },
    {
        name: '_mni',
        fr: 'moins',
        path: [[l, q, m, q], [lm, a, lm, a], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w], [lm, w, lm, w]],

    },
    {
        name: '_d3io',
        fr: 'minute',
        path: [[l, q, l, q], [lm, w, lm, a, m, q, rm, a, rm, w], [r, q, r, q]],

    },
    {
        name: '_mina',
        fr: 'minéral',
        path: [[lm, w, lm, a, m, q, rm, a, rm, w, lm, w, l, q, lm, a, rm, a, r, q, rm, w]],

    },
    {
        name: '_mlimza',
        fr: 'millimètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [l, q, l, q], [m, q, m, q]],

    },
    {
        name: '_mligma',
        fr: 'milligramme',
        path: [[lm, a, rm, a, rm, w, lm, w], [l, q, l, q], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_mdo',
        fr: 'milieu',
        path: [[l, q, r, q], [lm, a, lm, a], [rm, a, rm, a], [lm, w, lm, w], [rm, w, rm, w]],

    },
    {
        name: '_vdikeo',
        fr: 'mieux',
        path: [[m, q, l, q, lm, w, rm, a], [lm, a, lm, w], [rm, w, r, q]],

    },
    {
        name: '_pne',
        fr: 'mettre',
        path: [[lm, w, lm, a, l, q, m, q, lm, a], [rm, a, r, q, rm, w]],

    },
    {
        name: '_mza',
        fr: 'mètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, m, q, lm, w]],

    },
    {
        name: '_mto',
        fr: 'métal',
        path: [[lm, w, lm, a, rm, w, rm, a, r, q, lm, w, l, q, rm, a]],

    },
    {
        name: '_bwa',
        fr: 'mauvais',
        path: [[l, q, lm, a, rm, w], [rm, a, r, q], [lm, w, lm, w]],

    },
    {
        name: '_mtai',
        fr: 'matière',
        path: [[lm, a, lm, w, rm, a, rm, w, lm, w, l, q, lm, a, rm, a, r, q, rm, w]],

    },
    {
        name: '_lfe',
        fr: 'mastodonte',
        path: [[l, q, l, q], [lm, w, lm, a, rm, a, r, q, rm, w, lm, a]],

    },
    {
        name: '_chka',
        fr: 'masquer',
        path: [[lm, a, rm, a], [m, q, m, q], [l, q, rm, w, r, q, lm, w, l, q]],

    },
    {
        name: '_msy',
        fr: 'marsupial',
        path: [[l, q, lm, a], [m, q, rm, a], [r, q, rm, w, rm, a, lm, a, lm, w, rm, w]],

    },
    {
        name: '_mrai',
        fr: 'marquer',
        path: [[l, q, r, q], [lm, a, m, q, lm, w], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_mno',
        fr: 'mâle',
        path: [[lm, a, rm, w], [lm, w, m, q, r, q], [l, q, rm, a]],

    },
    {
        name: '_nfea',
        fr: 'maladie',
        path: [[lm, a, lm, a], [l, q, m, q, rm, a], [m, q, rm, w], [lm, w, r, q]],

    },
    {
        name: '_pro',
        fr: 'mais',
        path: [[l, q, m, q], [lm, a, m, q, lm, w], [rm, a, rm, w], [r, q, r, q]],

    },
    {
        name: '_sna',
        fr: 'maigrir',
        path: [[r, q, rm, w, rm, a, r, q, l, q, lm, a, m, q, lm, w, l, q]],

    },
    {
        name: '_lya',
        fr: 'lune',
        path: [[lm, w, lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a], [m, q, m, q]],

    },
    {
        name: '_hea',
        fr: 'lumière',
        path: [[lm, a, r, q, lm, w, lm, a], [l, q, m, q, rm, a], [m, q, rm, w]],

    },
    {
        name: '_lro',
        fr: 'lourd',
        path: [[lm, a, m, q, rm, a], [l, q, l, q], [r, q, r, q], [lm, w, rm, w]],

    },
    {
        name: '_lgya',
        fr: 'long',
        path: [[l, q, lm, w, r, q, rm, w, m, q, rm, a, lm, a]],

    },
    {
        name: '_fra',
        fr: 'loin',
        path: [[l, q, rm, w, rm, a], [lm, w, m, q, r, q, lm, w], [lm, a, lm, a]],

    },
    {
        name: '_sti',
        fr: 'lister',
        path: [[rm, w, lm, a, l, q, rm, w, rm, a, lm, a], [l, q, lm, w, rm, w, r, q, rm, a]],

    },
    {
        name: '_lpae',
        fr: 'lèvre',
        path: [[lm, a, m, q, rm, a], [l, q, r, q], [lm, w, rm, w]],

    },
    {
        name: '_lgy',
        fr: 'légume',
        path: [[lm, a, rm, w, lm, w, rm, a], [l, q, r, q]],

    },
    {
        name: '_lgio',
        fr: 'langage',
        path: [[l, q, lm, w, lm, a], [m, q, rm, w, rm, a], [r, q, r, q]],

    },
    {
        name: '_ska',
        fr: 'lancer',
        path: [[l, q, r, q, rm, w, m, q], [lm, a, lm, w], [rm, a, rm, a]],

    },
    {
        name: '_klotogma',
        fr: 'kilotonne',
        path: [[rm, w, lm, a, rm, a, rm, w, lm, w, l, q, lm, a], [l, q, m, q, lm, w], [r, q, r, q]],

    },
    {
        name: '_klomza',
        fr: 'kilomètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, m, q, rm, w], [lm, w, m, q]],

    },
    {
        name: '_klogma',
        fr: 'kilogramme',
        path: [[lm, a, rm, a, rm, w, lm, w, l, q, m, q, rm, w], [lm, w, m, q], [r, q, r, q]],

    },
    {
        name: '_tli',
        fr: 'jusque',
        path: [[l, q, lm, a, lm, w, m, q, r, q], [rm, a, r, q, rm, w]],

    },
    {
        name: '_kadwa',
        fr: 'jour',
        path: [[lm, a, rm, w], [l, q, rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q, lm, w]],

    },
    {
        name: '_3go',
        fr: 'jouer',
        path: [[lm, a, lm, a], [l, q, rm, a], [lm, w, m, q, rm, w], [r, q, r, q]],

    },
    {
        name: '_ntew',
        fr: 'interrompre',
        path: [[l, q, m, q, lm, a, lm, w, m, q, r, q, rm, a, rm, w]],

    },
    {
        name: '_nsa',
        fr: 'intérieur',
        path: [[lm, a, rm, a, m, q, rm, w, lm, w], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_kea',
        fr: 'intelligence',
        path: [[lm, a, rm, w], [lm, w, rm, a, l, q, m, q, rm, a], [lm, a, r, q, lm, w, lm, a]],

    },
    {
        name: '_chra',
        fr: 'insulter',
        path: [[l, q, rm, a, rm, w, lm, a], [lm, w, lm, w], [r, q, r, q]],

    },
    {
        name: '_pse',
        fr: 'insuffire',
        path: [[lm, w, l, q, lm, a, rm, a, r, q, rm, w], [l, q, r, q], [lm, a, m, q, rm, a]],

    },
    {
        name: '_skew',
        fr: 'insecte',
        path: [[m, q, l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q], [rm, a, rm, w]],

    },
    {
        name: '_nfo',
        fr: 'informer',
        path: [[l, q, lm, a, rm, w, r, q], [lm, w, lm, w], [rm, a, rm, a]],

    },
    {
        name: '_ngla',
        fr: 'inégaler',
        path: [[lm, a, rm, a, lm, w, rm, w], [l, q, r, q]],

    },
    {
        name: '_tso',
        fr: 'indiquer',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w], [l, q, l, q], [r, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_knea',
        fr: 'incliner',
        path: [[m, q, l, q, lm, a, rm, a, r, q], [rm, a, rm, w], [lm, w, lm, w]],

    },
    {
        name: '_kpie',
        fr: 'inachever',
        path: [[l, q, lm, w, rm, a, r, q, rm, w, lm, a]],

    },
    {
        name: '_fo',
        fr: 'impératif',
        path: [[rm, w, rm, a, lm, a, lm, w, r, q, lm, a], [l, q, l, q], [m, q, m, q]],

    },
    {
        name: '_stoia',
        fr: 'imaginer',
        path: [[r, q, l, q, rm, a, rm, w, l, q], [lm, a, m, q, lm, w]],

    },
    {
        name: '_3ne',
        fr: 'jeune',
        path: [[m, q, l, q, rm, a, m, q], [lm, a, rm, w], [lm, w, lm, w], [r, q, r, q]],

    },
    {
        name: '_dea',
        fr: 'idée',
        path: [[m, q, l, q, rm, a, m, q, rm, w], [lm, w, r, q], [lm, a, lm, a]],

    },
    {
        name: '_si',
        fr: 'ici',
        path: [[lm, w, l, q, lm, a, rm, a, rm, w], [m, q, rm, w, r, q]],

    },
    {
        name: '_r3a',
        fr: 'jaune',
        path: [[lm, a, rm, a, r, q], [l, q, l, q], [m, q, m, q], [lm, w, lm, w], [rm, w, rm, w]],

    },
    {
        name: '_lgae',
        fr: 'jambe',
        path: [[lm, w, lm, a, r, q, m, q, lm, w], [l, q, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_fwo',
        fr: 'hors',
        path: [[lm, w, rm, a, r, q, l, q, lm, a, rm, w]],

    },
    {
        name: '_rzo',
        fr: 'horizon',
        path: [[lm, w, l, q, r, q, rm, w], [lm, a, lm, a], [rm, a, rm, a]],

    },
    {
        name: '_hro',
        fr: 'heure',
        path: [[l, q, r, q], [lm, a, lm, w], [rm, a, rm, w]],

    },
    {
        name: '_fro',
        fr: 'hermaphrodite',
        path: [[lm, a, rm, w, lm, w, m, q, r, q, rm, w], [l, q, rm, a]],

    },
    {
        name: '_pa',
        fr: 'haut',
        path: [[lm, a, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q], [lm, w, lm, w], [rm, w, rm, w]],

    },
    {
        name: '_kio',
        fr: 'habiter',
        path: [[lm, a, lm, w, rm, w, rm, a, lm, a, l, q, r, q, rm, a]],

    },
    {
        name: '_dvie',
        fr: 'habiller',
        path: [[lm, w, lm, a, rm, a, rm, w, lm, w, l, q, r, q, rm, w]],

    },
    {
        name: '_kwe',
        fr: 'grouper',
        path: [[l, q, rm, a, lm, w], [r, q, lm, a, rm, w]],

    },
    {
        name: '_gro',
        fr: 'grossir',
        path: [[l, q, lm, a, lm, w, l, q, r, q, rm, w, m, q, rm, a, r, q]],

    },
    {
        name: '_gva',
        fr: 'graviter',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q], [lm, a, lm, w]],

    },
    {
        name: '_gma',
        fr: 'gramme',
        path: [[lm, a, rm, a, rm, w, lm, w, l, q, m, q, lm, w], [r, q, r, q]],

    },
    {
        name: '_gra',
        fr: 'graisser',
        path: [[m, q, l, q, lm, w, rm, w, r, q, rm, a, lm, a, rm, w]],

    },
    {
        name: '_tsae',
        fr: 'goûter',
        path: [[lm, a, l, q, lm, w, rm, w], [rm, a, m, q, r, q]],

    },
    {
        name: '_sla',
        fr: 'glisser',
        path: [[lm, a, lm, a], [l, q, rm, a, m, q, r, q], [lm, w, rm, w]],

    },
    {
        name: '_gzai',
        fr: 'gaz',
        path: [[lm, w, m, q, rm, w], [l, q, l, q], [lm, a, lm, a], [rm, a, rm, a], [r, q, r, q]],

    },
    {
        name: '_dray',
        fr: 'gauche',
        path: [[lm, a, lm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_kpae',
        fr: 'garder',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w, l, q, r, q, rm, w, rm, a]],

    },
    {
        name: '_ftu',
        fr: 'futur',
        path: [[l, q, r, q], [lm, a, r, q, lm, w], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_fzo',
        fr: 'fusionner',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q, r, q]],

    },
    {
        name: '_ray',
        fr: 'fuir',
        path: [[l, q, lm, w, rm, a], [lm, a, r, q], [m, q, rm, w]],

    },
    {
        name: '_ftae',
        fr: 'frustrer',
        path: [[lm, a, rm, a, r, q], [rm, a, lm, w], [l, q, rm, w]],

    },
    {
        name: '_fry',
        fr: 'fruit',
        path: [[lm, w, rm, a, lm, a, rm, w], [l, q, r, q]],

    },
    {
        name: '_gry',
        fr: 'frapper',
        path: [[lm, a, r, q, l, q], [rm, a, lm, w], [m, q, rm, w]],

    },
    {
        name: '_gew',
        fr: 'fort',
        path: [[l, q, lm, a, m, q], [lm, a, lm, w], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_fai',
        fr: 'former',
        path: [[rm, a, lm, a, lm, w], [l, q, m, q], [r, q, rm, w]],

    },
    {
        name: '_fkai',
        fr: 'fonctionner',
        path: [[lm, a, rm, w, rm, a, lm, a, lm, w, rm, w], [lm, w, rm, a], [l, q, r, q]],

    },
    {
        name: '_blea',
        fr: 'fleurir',
        path: [[lm, a, l, q, rm, w], [rm, a, r, q, lm, w], [m, q, m, q]],

    },
    {
        name: '_fni',
        fr: 'finir',
        path: [[l, q, lm, a, r, q, lm, w, l, q], [rm, a, rm, w], [m, q, m, q]],

    },
    {
        name: '_brea',
        fr: 'filtrer',
        path: [[l, q, r, q, lm, a, lm, w, r, q], [rm, a, rm, w]],

    },
    {
        name: '_fli',
        fr: 'fil',
        path: [[l, q, lm, a, lm, w, rm, a, r, q], [rm, w, rm, w]],

    },
    {
        name: '_lvia',
        fr: 'feuille',
        path: [[lm, a, lm, w, r, q], [l, q, rm, w], [rm, a, m, q]],

    },
    {
        name: '_frey',
        fr: 'feu',
        path: [[lm, w, rm, w, l, q, r, q, lm, a], [rm, a, rm, a]],

    },
    {
        name: '_kloi',
        fr: 'fermer',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [rm, a, rm, w], [l, q, m, q]],

    },
    {
        name: '_mna',
        fr: 'femelle',
        path: [[lm, a, m, q, r, q, rm, w, lm, w, m, q], [l, q, rm, a]],

    },
    {
        name: '_kti',
        fr: 'félin',
        path: [[l, q, rm, a, m, q, lm, a, r, q, rm, w, lm, w, l, q]],

    },
    {
        name: '_nrea',
        fr: 'faux',
        path: [[l, q, lm, a, rm, w], [lm, w, lm, w], [rm, a, rm, a], [r, q, r, q]],

    },
    {
        name: '_sga',
        fr: 'faucher',
        path: [[l, q, m, q, rm, a, r, q], [lm, a, m, q], [rm, a, rm, w], [lm, w, lm, w]],

    },
    {
        name: '_fa',
        fr: 'faire',
        path: [[m, q, lm, a, rm, a, m, q, r, q, rm, w, lm, w, l, q, m, q]],

    },
    {
        name: '_vea',
        fr: 'faible',
        path: [[lm, a, lm, w], [l, q, lm, w, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_fsa',
        fr: 'face',
        path: [[l, q, rm, w, rm, a, l, q, lm, w, rm, w, r, q, rm, a, l, q], [lm, a, m, q]],

    },
    {
        name: '_stre',
        fr: 'extrémité',
        path: [[r, q, rm, a, rm, w, r, q], [lm, a, lm, a], [l, q, l, q], [m, q, m, q], [lm, w, lm, w]],

    },
    {
        name: '_stra',
        fr: 'extraire',
        path: [[l, q, r, q, rm, a, lm, w, l, q], [lm, a, lm, w], [rm, a, rm, w]],

    },
    {
        name: '_tra',
        fr: 'extérieur',
        path: [[rm, a, lm, a, m, q, lm, w, rm, w], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_vlye',
        fr: 'évoluer',
        path: [[l, q, l, q], [lm, a, lm, w], [rm, a, r, q, rm, w, m, q, rm, a]],

    },
    {
        name: '_vne',
        fr: 'événement',
        path: [[r, q, rm, a, rm, w, r, q, m, q, lm, a, lm, w, m, q, l, q], [rm, a, lm, a, l, q, lm, w, rm, w]],

    },
    {
        name: '_stea',
        fr: 'étoile',
        path: [[lm, a, r, q, lm, w, lm, a], [rm, a, rm, w, l, q, rm, a], [m, q, m, q]],

    },
    {
        name: '_meama',
        fr: 'étant',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, l, q, lm, w, r, q]],

    },
    {
        name: '_te',
        fr: 'et',
        path: [[lm, a, l, q, lm, w], [l, q, m, q], [rm, a, r, q, rm, w]],

    },
    {
        name: '_bia',
        fr: 'équilibrer',
        path: [[lm, a, rm, a], [l, q, m, q, lm, w, rm, w, m, q, r, q]],

    },
    {
        name: '_kdea',
        fr: 'équidé',
        path: [[lm, a, rm, a, rm, w, lm, w, rm, a], [m, q, r, q], [l, q, l, q]],

    },
    {
        name: '_nto',
        fr: 'entre',
        path: [[lm, a, rm, a, lm, w, rm, w], [l, q, rm, a], [lm, w, r, q]],

    },
    {
        name: '_srye',
        fr: 'entourer',
        path: [[m, q, m, q], [l, q, lm, a], [rm, a, r, q], [lm, w, rm, w]],

    },
    {
        name: '_sko',
        fr: 'entendre',
        path: [[l, q, l, q], [r, q, m, q, rm, a, lm, a, lm, a, lm, w, rm, w, m, q]],

    },
    {
        name: '_nki',
        fr: 'entailler',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, m, q], [r, q, r, q]],

    },
    {
        name: '_kdie',
        fr: 'enfant',
        path: [[lm, w, rm, a, rm, w, lm, w], [l, q, m, q], [lm, a, r, q]],

    },
    {
        name: '_3ia',
        fr: 'énergie',
        path: [[lm, a, r, q, l, q, rm, w, lm, w, rm, a]],

    },
    {
        name: '_ni',
        fr: 'bas',
        path: [[lm, w, rm, w], [lm, a, lm, a], [rm, a, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_nwo',
        fr: 'en',
        path: [[lm, w, l, q, m, q, lm, w, lm, a, rm, a, rm, w, lm, w], [r, q, r, q]],

    },
    {
        name: '_pkoi',
        fr: 'empaqueter',
        path: [[l, q, rm, a, rm, w], [lm, w, l, q, lm, a, rm, a, r, q, rm, w, lm, w, m, q], [lm, a, m, q, r, q]],

    },
    {
        name: '_skoi',
        fr: 'émotion',
        path: [[lm, a, rm, w, lm, w, m, q], [rm, a, l, q, lm, a, rm, a, r, q]],

    },
    {
        name: '_vzu',
        fr: 'électricité',
        path: [[l, q, lm, a, lm, w, rm, a, rm, w, r, q]],

    },
    {
        name: '_gla',
        fr: 'égaler',
        path: [[lm, a, rm, a], [l, q, r, q], [lm, w, rm, w]],

    },
    {
        name: '_fke',
        fr: 'effet',
        path: [[r, q, l, q, lm, a, rm, a, r, q, rm, w], [lm, a, m, q], [lm, w, lm, w]],

    },
    {
        name: '_to',
        fr: 'eau',
        path: [[lm, a, rm, a], [l, q, lm, w, m, q, rm, w, r, q]],

    },
    {
        name: '_drye',
        fr: 'durer',
        path: [[m, q, lm, a, r, q, lm, w, m, q], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_drei',
        fr: 'dur',
        path: [[l, q, lm, w, lm, a, rm, a, rm, w, r, q], [lm, a, m, q, rm, a]],

    },
    {
        name: '_drya',
        fr: 'droite',
        path: [[l, q, l, q], [lm, a, lm, a], [lm, w, lm, w], [m, q, m, q], [rm, a, rm, w], [r, q, r, q]],

    },
    {
        name: '_dro',
        fr: 'droit',
        path: [[l, q, l, q], [lm, a, lm, w], [m, q, m, q], [rm, a, rm, w], [r, q, r, q]],

    },
    {
        name: '_rdwa',
        fr: 'draper',
        path: [[lm, w, l, q, lm, a, r, q, rm, w, lm, w, m, q, r, q], [rm, a, rm, a]],

    },
    {
        name: '_rmi',
        fr: 'dormir',
        path: [[l, q, rm, a, r, q, rm, w, l, q], [m, q, lm, w, lm, a, m, q]],

    },
    {
        name: '_glo',
        fr: 'dont',
        path: [[rm, a, lm, a, lm, w, m, q, l, q], [r, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_dku',
        fr: 'donc',
        path: [[rm, a, lm, a, lm, w, rm, w], [m, q, r, q], [l, q, l, q]],

    },
    {
        name: '_dvi',
        fr: 'diviser',
        path: [[lm, w, rm, a], [l, q, l, q], [lm, a, lm, a], [r, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_dme',
        fr: 'dimensionner',
        path: [[lm, a, lm, w, rm, w, r, q, rm, a, lm, a], [l, q, l, q], [m, q, m, q]],

    },
    {
        name: '_dvey',
        fr: 'différer',
        path: [[l, q, l, q], [lm, a, rm, w, r, q, rm, a, lm, w]],

    },
    {
        name: '_dvo',
        fr: 'devoir',
        path: [[lm, w, lm, a, rm, a, rm, w], [lm, a, m, q, rm, a], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_dva',
        fr: 'devant',
        path: [[l, q, r, q, rm, a, rm, w, r, q], [lm, a, lm, a], [lm, w, lm, w]],

    },
    {
        name: '_dzye',
        fr: 'détruire',
        path: [[rm, a, rm, w], [m, q, r, q, lm, a, m, q], [l, q, lm, w]],

    },
    {
        name: '_nbia',
        fr: 'déséquilibrer',
        path: [[lm, a, rm, a, l, q, r, q], [m, q, rm, w, lm, w, m, q]],

    },
    {
        name: '_dre',
        fr: 'derrière',
        path: [[r, q, l, q, lm, a, lm, w, l, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_fmai',
        fr: 'depuis',
        path: [[r, q, l, q], [lm, a, l, q, lm, w], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_chna',
        fr: 'démasquer',
        path: [[lm, a, l, q, lm, w, r, q], [rm, a, r, q, rm, w, l, q], [m, q, m, q]],

    },
    {
        name: '_dle',
        fr: 'délicieux',
        path: [[l, q, r, q, rm, a, m, q, lm, a, l, q, lm, w, rm, w, r, q]],

    },
    {
        name: '_d3a',
        fr: 'déjà',
        path: [[lm, a, m, q, r, q, rm, a, rm, w, r, q], [lm, w, m, q], [l, q, l, q]],

    },
    {
        name: '_klue',
        fr: 'défaut',
        path: [[lm, a, r, q, rm, w, rm, a, l, q, m, q], [lm, w, lm, w]],

    },
    {
        name: '_dfo',
        fr: 'défaire',
        path: [[rm, a, lm, w, lm, a, rm, a, r, q, lm, w], [l, q, rm, w]],

    },
    {
        name: '_3i',
        fr: 'découvrir',
        path: [[l, q, lm, a, lm, w, l, q], [r, q, rm, w, rm, a, r, q], [m, q, m, q]],

    },
    {
        name: '_ktye',
        fr: 'découper',
        path: [[lm, a, lm, w], [l, q, rm, a], [m, q, r, q, rm, w, m, q]],

    },
    {
        name: '_dsimza',
        fr: 'décimètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, m, q, l, q]],

    },
    {
        name: '_dsigma',
        fr: 'décigramme',
        path: [[lm, a, rm, a, rm, w, lm, w, m, q, l, q], [r, q, r, q]],

    },
    {
        name: '_trie',
        fr: 'déchêt',
        path: [[lm, a, rm, a, l, q], [m, q, lm, w], [r, q, rm, w]],

    },
    {
        name: '_da',
        fr: 'de',
        path: [[l, q, lm, a, rm, a], [lm, a, m, q], [lm, w, lm, w], [rm, w, rm, w], [r, q, r, q]],

    },
    {
        name: '_dfie',
        fr: 'dauphin',
        path: [[rm, a, l, q, lm, a, m, q, l, q], [lm, a, rm, a, rm, w, r, q], [lm, w, lm, w]],

    },
    {
        name: '_dse',
        fr: 'danser',
        path: [[l, q, rm, a, rm, w], [lm, a, r, q], [lm, w, m, q]],

    },
    {
        name: '_di',
        fr: 'dans',
        path: [[l, q, lm, a, rm, w, lm, w, rm, a, r, q, l, q]],

    },
    {
        name: '_d3e',
        fr: 'danger',
        path: [[m, q, lm, a, r, q, lm, w, lm, a], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_dwa',
        fr: 'cycle',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q, lm, w]],

    },
    {
        name: '_kraw',
        fr: 'crustacé',
        path: [[lm, a, lm, w, l, q, lm, a, rm, a, r, q, rm, w, rm, a], [m, q, m, q]],

    },
    {
        name: '_grae',
        fr: 'croître',
        path: [[l, q, lm, w, rm, w], [lm, a, lm, w, r, q], [rm, a, lm, w]],

    },
    {
        name: '_kru',
        fr: 'croiser',
        path: [[lm, a, r, q], [rm, a, l, q], [m, q, m, q], [lm, w, lm, w], [rm, w, rm, w]],

    },
    {
        name: '_kro',
        fr: 'croire',
        path: [[lm, a, rm, a, l, q, rm, w, lm, w], [rm, a, m, q, rm, w], [r, q, r, q]],

    },
    {
        name: '_kri',
        fr: 'crier',
        path: [[lm, a, m, q], [l, q, lm, w, r, q, rm, a, rm, w]],

    },
    {
        name: '_kvae',
        fr: 'couvrir',
        path: [[lm, a, lm, w, rm, w, rm, a, m, q, lm, a, l, q, r, q, rm, a]],

    },
    {
        name: '_kry',
        fr: 'court',
        path: [[l, q, lm, w, r, q, rm, w], [lm, a, lm, a], [m, q, m, q], [rm, a, rm, a]],

    },
    {
        name: '_krye',
        fr: 'courrier',
        path: [[l, q, m, q, rm, a, l, q, lm, w, r, q, rm, a], [lm, a, lm, a], [rm, w, rm, w]],

    },
    {
        name: '_klo',
        fr: 'colorer',
        path: [[r, q, l, q, rm, a, lm, a, lm, w, rm, w, l, q]],

    },
    {
        name: '_kte',
        fr: 'côté',
        path: [[lm, w, r, q, rm, w, lm, w, l, q, rm, a, r, q], [lm, a, m, q]],

    },
    {
        name: '_bdi',
        fr: 'corps',
        path: [[l, q, lm, a, lm, w, r, q, rm, a, rm, w, l, q], [m, q, m, q]],

    },
    {
        name: '_sno',
        fr: 'contre',
        path: [[rm, a, r, q, rm, w], [l, q, m, q], [lm, a, lm, a], [lm, w, lm, w]],

    },
    {
        name: '_kpoi',
        fr: 'continuer',
        path: [[r, q, rm, a, rm, w, r, q, m, q], [lm, a, r, q, lm, w], [l, q, l, q]],

    },
    {
        name: '_ksea',
        fr: 'construire',
        path: [[rm, a, rm, w], [r, q, lm, a, l, q, m, q, lm, w]],

    },
    {
        name: '_knoi',
        fr: 'connecter',
        path: [[lm, a, l, q, lm, w], [l, q, r, q], [rm, a, r, q, rm, w]],

    },
    {
        name: '_kno',
        fr: 'connaître',
        path: [[m, q, lm, w, l, q, lm, a, rm, a, r, q, lm, w, rm, w]],

    },
    {
        name: '_kfay',
        fr: 'confondre',
        path: [[rm, a, r, q, rm, w], [l, q, r, q], [m, q, lm, a, l, q, lm, w, lm, a]],

    },
    {
        name: '_troi',
        fr: 'conflit',
        path: [[l, q, lm, w, rm, a], [r, q, rm, w, lm, a]],

    },
    {
        name: '_hi',
        fr: 'condition',
        path: [[rm, a, l, q, rm, w], [lm, a, r, q, lm, w], [m, q, m, q]],

    },
    {
        name: '_kteu',
        fr: 'compter',
        path: [[m, q, lm, a, lm, w, m, q, r, q], [l, q, rm, a, rm, w, l, q]],

    },
    {
        name: '_plea',
        fr: 'complexe',
        path: [[l, q, l, q], [lm, a, m, q, lm, w], [m, q, rm, a, rm, w, r, q, m, q]],

    },
    {
        name: '_haw',
        fr: 'comment',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, rm, w, r, q], [m, q, m, q]],

    },
    {
        name: '_fta',
        fr: 'commencer',
        path: [[m, q, l, q, lm, a, r, q, lm, w, l, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_ki',
        fr: 'clé',
        path: [[lm, a, lm, w, m, q], [l, q, r, q, rm, w], [rm, a, rm, a]],

    },
    {
        name: '_rkai',
        fr: 'classer',
        path: [[lm, a, rm, a], [l, q, l, q], [lm, w, rm, w, m, q, r, q]],

    },
    {
        name: '_srie',
        fr: 'circuit',
        path: [[l, q, lm, a, lm, w, rm, a, rm, w, r, q, l, q]],

    },
    {
        name: '_kwo',
        fr: 'couper',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, r, q]],

    },
    {
        name: '_skai',
        fr: 'ciel',
        path: [[lm, w, rm, a, lm, a, rm, w], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_swa',
        fr: 'choisir',
        path: [[lm, a, lm, w, rm, w, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_sdae',
        fr: 'chaque',
        path: [[l, q, lm, a, m, q, l, q], [rm, w, r, q], [lm, w, lm, w], [rm, a, rm, a]],

    },
    {
        name: '_sni',
        fr: 'chanter',
        path: [[lm, a, l, q, lm, w, rm, w, r, q], [l, q, rm, w, m, q, l, q], [rm, a, rm, a]],

    },
    {
        name: '_fgy',
        fr: 'champignon',
        path: [[l, q, rm, w, rm, a, r, q, m, q, rm, a], [lm, a, lm, a], [lm, w, lm, w]],

    },
    {
        name: '_fle',
        fr: 'chair',
        path: [[l, q, rm, a, m, q, rm, w, l, q, lm, a, rm, a, rm, w, lm, w, l, q], [r, q, r, q]],

    },
    {
        name: '_bzea',
        fr: 'cervidé',
        path: [[lm, a, rm, w, lm, w, r, q], [l, q, m, q, rm, a]],

    },
    {
        name: '_srea',
        fr: 'céréale',
        path: [[rm, w, l, q, lm, w, rm, w, r, q, rm, a, rm, w], [lm, a, m, q]],

    },
    {
        name: '_tru',
        fr: 'cercler',
        path: [[m, q, l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q]],

    },
    {
        name: '_sye',
        fr: 'centrer',
        path: [[lm, a, rm, w], [lm, w, rm, a], [l, q, r, q]],

    },
    {
        name: '_stimza',
        fr: 'centimètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, m, q], [l, q, l, q]],

    },
    {
        name: '_stigma',
        fr: 'centigramme',
        path: [[lm, a, rm, a, rm, w, lm, w, m, q], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_sley',
        fr: 'cellule',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_de',
        fr: 'ce',
        path: [[lm, a, rm, a], [lm, w, rm, w], [l, q, l, q], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_kzo',
        fr: 'causer',
        path: [[rm, a, lm, a, l, q, lm, w], [l, q, r, q], [lm, a, m, q], [rm, w, rm, w]],

    },
    {
        name: '_gzo',
        fr: 'car',
        path: [[lm, a, r, q, lm, w, rm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a]],

    },
    {
        name: '_knew',
        fr: 'canonner',
        path: [[lm, a, l, q, rm, w, r, q], [lm, w, m, q], [rm, a, rm, a]],

    },
    {
        name: '_klio',
        fr: 'canin',
        path: [[rm, a, lm, a, lm, w, m, q, r, q], [l, q, rm, w]],

    },
    {
        name: '_rko',
        fr: 'caillou',
        path: [[lm, a, rm, w, lm, w, lm, a, r, q, rm, w], [l, q, l, q], [rm, a, rm, a]],

    },
    {
        name: '_glio',
        fr: 'but',
        path: [[m, q, l, q, lm, a, rm, a, rm, w], [lm, w, rm, w, r, q]],

    },
    {
        name: '_bze',
        fr: 'business',
        path: [[rm, a, lm, a, l, q, r, q, rm, w, lm, w], [lm, a, rm, w]],

    },
    {
        name: '_bra',
        fr: 'bras',
        path: [[lm, w, lm, a, m, q, r, q, lm, w], [l, q, rm, w], [rm, a, rm, a]],

    },
    {
        name: '_dvea',
        fr: 'brancher',
        path: [[lm, a, rm, w], [l, q, m, q], [lm, w, rm, w, rm, a], [r, q, r, q]],

    },
    {
        name: '_bo',
        fr: 'bovidé',
        path: [[lm, a, rm, w], [m, q, rm, a], [lm, w, r, q], [l, q, l, q]],

    },
    {
        name: '_bu',
        fr: 'boucler',
        path: [[l, q, m, q, rm, a, lm, a, lm, w, rm, w, r, q]],

    },
    {
        name: '_blu',
        fr: 'bleu',
        path: [[lm, w, rm, w, r, q], [l, q, l, q], [lm, a, lm, a], [m, q, m, q], [rm, a, rm, a]],

    },
    {
        name: '_keo',
        fr: 'bien',
        path: [[l, q, lm, w, rm, a], [rm, w, r, q], [lm, a, lm, a]],

    },
    {
        name: '_bly',
        fr: 'baleine',
        path: [[l, q, m, q, lm, a, l, q, lm, w, r, q, rm, w, rm, a, lm, a], [m, q, lm, w]],

    },
    {
        name: '_zaw',
        fr: 'aussi',
        path: [[lm, a, lm, w, l, q, lm, a, rm, w, r, q, rm, a, lm, w], [rm, a, rm, w]],

    },
    {
        name: '_vi',
        fr: 'avec',
        path: [[lm, w, lm, a, rm, w, rm, a, lm, w], [l, q, r, q]],

    },
    {
        name: '_ntea',
        fr: 'avant',
        path: [[m, q, l, q, lm, a, lm, w, l, q], [rm, a, rm, a], [rm, w, rm, w], [r, q, r, q]],

    },
    {
        name: '_rpa',
        fr: 'attraper',
        path: [[l, q, r, q, rm, a, m, q], [lm, a, lm, w], [rm, w, rm, w]],

    },
    {
        name: '_spea',
        fr: 'attendre',
        path: [[l, q, lm, a, lm, w], [m, q, rm, a, rm, w], [r, q, r, q]],

    },
    {
        name: '_tmei',
        fr: 'atome',
        path: [[lm, w, rm, a, rm, w], [l, q, r, q], [lm, a, lm, a]],

    },
    {
        name: '_ktea',
        fr: 'arrêter',
        path: [[l, q, r, q], [lm, a, lm, w], [rm, a, r, q, rm, w]],

    },
    {
        name: '_rkye',
        fr: 'arachnide',
        path: [[l, q, lm, a, rm, a, r, q, rm, w], [m, q, rm, a], [lm, a, lm, w]],

    },
    {
        name: '_ftea',
        fr: 'après',
        path: [[r, q, rm, a, rm, w, r, q, m, q], [lm, a, lm, a], [l, q, l, q], [lm, w, lm, w]],

    },
    {
        name: '_znie',
        fr: 'appuyer',
        path: [[lm, a, lm, w, rm, w, m, q, l, q, rm, a, r, q]],

    },
    {
        name: '_zai',
        fr: 'apparaître',
        path: [[lm, w, m, q, rm, w, lm, w, l, q, lm, a, rm, a, r, q, rm, w]],

    },
    {
        name: '_piz',
        fr: 'apaiser',
        path: [[l, q, lm, a, lm, w, m, q, r, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_kpaw',
        fr: 'antenne',
        path: [[lm, a, l, q, rm, w, m, q, lm, w, r, q, rm, a]],

    },
    {
        name: '_pkia',
        fr: 'animal',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, m, q, rm, a, l, q], [r, q, r, q]],

    },
    {
        name: '_glei',
        fr: 'angle',
        path: [[lm, a, rm, a, rm, w], [l, q, l, q], [lm, w, lm, w], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_mrya',
        fr: 'amplifier',
        path: [[l, q, rm, w, rm, a, r, q, lm, w, l, q, rm, a], [lm, a, m, q]],

    },
    {
        name: '_mre',
        fr: 'amer',
        path: [[l, q, lm, a, m, q, rm, a, r, q, l, q], [lm, w, rm, w]],

    },
    {
        name: '_prba',
        fr: 'âme',
        path: [[lm, a, r, q, lm, w, lm, a, m, q, r, q], [lm, w, m, q], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_tae',
        fr: 'alterner',
        path: [[lm, a, rm, a, l, q], [m, q, m, q], [rm, w, lm, w, r, q]],

    },
    {
        name: '_slio',
        fr: 'alors',
        path: [[lm, a, m, q, r, q], [rm, a, r, q, rm, w], [l, q, l, q], [lm, w, lm, w]],

    },
    {
        name: '_le',
        fr: 'aller',
        path: [[r, q, rm, a, rm, w, r, q, m, q, lm, a, lm, w, m, q, l, q]],

    },
    {
        name: '_hio',
        fr: 'alléger',
        path: [[lm, a, rm, a], [l, q, l, q], [r, q, r, q], [lm, w, m, q, rm, w]],

    },
    {
        name: '_lea',
        fr: 'aléa',
        path: [[l, q, r, q, lm, w], [lm, a, lm, a], [rm, a, rm, w]],

    },
    {
        name: '_fsu',
        fr: 'ajuster',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, lm, w, l, q, r, q]],

    },
    {
        name: '_hae',
        fr: 'air',
        path: [[lm, a, rm, a, r, q], [l, q, m, q, rm, w], [lm, w, rm, a]],

    },
    {
        name: '_kli',
        fr: 'qualité',
        path: [[rm, w, l, q, lm, a, lm, w, r, q, m, q], [rm, a, rm, a]],

    },
    {
        name: '_nmae',
        fr: 'nombre',
        path: [[lm, w, lm, a, rm, w, rm, a], [l, q, l, q], [r, q, r, q]],

    },
    {
        name: '_zno',
        fr: '11',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q, r, q], [m, q, lm, w, lm, a, r, q]],

    },
    {
        name: '_dza',
        fr: '10',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q, r, q], [m, q, lm, w, lm, a]],

    },
    {
        name: '_nwa',
        fr: '9',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q, r, q], [lm, w, m, q]],

    },
    {
        name: '_sme',
        fr: 'identique',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, lm, w, l, q]],

    },
    {
        name: '_tsio',
        fr: '8',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, lm, w, l, q]],

    },
    {
        name: '_stei',
        fr: '7',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q, r, q]],

    },
    {
        name: '_ksi',
        fr: '6',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q], [m, q, m, q]],

    },
    {
        name: '_foi',
        fr: '5',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, r, q]],

    },
    {
        name: '_ktu',
        fr: '4',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_srei',
        fr: '3',
        path: [[lm, w, lm, a, r, q, lm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_du',
        fr: '2',
        path: [[lm, w, lm, a, r, q], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [rm, w, rm, w]],

    },
    {
        name: '_kfa',
        fr: '1',
        path: [[lm, a, lm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],

    },
    {
        name: '_sro',
        fr: '0',
        path: [[lm, a, rm, w], [lm, w, rm, a], [l, q, r, q]],

    },
    {
        name: '_,',
        fr: ',',
        path: [[rm, a, m, q, rm, w], [lm, a, lm, a], [l, q, l, q], [lm, w, lm, w], [r, q, r, q]],

    },
    {
        name: '_!',
        fr: '!',
        path: [[lm, a, m, q], [l, q, lm, w], [rm, a, r, q], [rm, w, rm, w]],

    },
    {
        name: '_?',
        fr: '?',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, lm, w], [m, q, m, q], [r, q, r, q]],

    },
    {
        name: '_.',
        fr: '.',
        path: [[m, q, m, q], [m, q, m, q]],

    },
    {
        name: '_mea',
        fr: 'déterminer',
        path: [[lm, a, rm, w], [l, q, rm, a], [lm, w, r, q]],

    },
    {
        name: '_ma',
        fr: 'être',
        path: [[lm, a, l, q, lm, w], [m, q, m, q], [rm, a, r, q, rm, w]],

    },
    {
        name: '_kde',
        fr: 'adolescent',
        path: [[rm, a, lm, w], [m, q, rm, w], [l, q, r, q], [lm, a, lm, a]],

    },
    {
        name: '_dly',
        fr: 'adulte',
        path: [[r, q, lm, a, rm, a, lm, w, lm, a], [m, q, rm, w], [l, q, l, q]],

    },
    {
        name: '_pfae',
        fr: 'agir',
        path: [[l, q, lm, w, lm, a, r, q, lm, w], [rm, a, lm, a], [rm, w, r, q], [m, q, m, q]],

    },
    {
        name: '_dna',
        fr: 'adn',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, l, q], [lm, w, rm, a, rm, w]],

    },
    {
        name: '_sde',
        fr: 'acide',
        path: [[lm, a, m, q, l, q, lm, w, rm, w, r, q, m, q, rm, a], [l, q, rm, w], [r, q, lm, w]],

    },
    {
        name: '_bai',
        fr: 'acheter',
        path: [[lm, a, m, q, rm, a, lm, a, l, q, r, q, rm, a], [lm, w, rm, w]],

    },
    {
        name: '_kmia',
        fr: 'accumuler',
        path: [[lm, a, r, q, m, q, lm, a], [l, q, rm, w], [lm, w, lm, w], [rm, a, rm, a]],

    },
    {
        name: '_grey',
        fr: 'accrocher',
        path: [[lm, a, rm, a, r, q, l, q], [rm, a, rm, w], [lm, w, lm, w]],

    },
    {
        name: '_ksu',
        fr: 'accélérer',
        path: [[l, q, r, q], [lm, a, m, q, lm, w], [rm, a, r, q, rm, w]],

    },
    {
        name: '_boi',
        fr: 'à',
        path: [[lm, a, lm, w, l, q, m, q], [rm, a, r, q, rm, w]],

    },
    {
        name: '_fya',
        fr: 'donner',
        path: [[lm, a, rm, a, m, q, lm, a], [l, q, lm, w, rm, w, r, q]],

    },
    {
        name: '_fy',
        fr: 'refléter',
        path: [[lm, a, rm, a, lm, w, rm, w, lm, a], [l, q, r, q]],

    },
    {
        name: '_go',
        fr: 'avoir',
        path: [[lm, w, m, q, rm, w, lm, w], [l, q, lm, a, rm, a, r, q]],

    },
    {
        name: '_ka',
        fr: 'humain',
        path: [[lm, a, rm, w],[lm, w, m, q],[l, q, rm, a], [r, q, r, q]],

    },
    {
        name: '_kme',
        fr: 'pour',
        path: [[lm, a, lm, w], [l, q, m, q], [rm, a, r, q, rm, w]],

    },
    {
        name: '_sa',
        fr: 'vivre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a], [lm, a, rm, w], [rm, a, lm, w], [l, q, r, q]],

    },
    {
        name: '_smia',
        fr: 'isme',
        path: [[rm, w, l, q, r, q, lm, w, m, q, rm, w, lm, w], [lm, a, lm, a], [rm, a, rm, a]],

    }
];

export { a, q, w, l, lm, m, r, rm, graphieros_dictionnary };