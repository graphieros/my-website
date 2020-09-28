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
        fractal:'ez-zq-qw-wx-xd-ds-sw-wd-dz-zs'
    },
    {
        name:'_dryktu',
        fr:'mois',
        path:[[lm,a,r,q,lm,w,m,q,lm,a,rm,a,rm,w,lm,w,lm,a],[l,q,l,q]],
        fractal:'zs-sw-wz-zd-dw-wx-xe-ez'
    },
    {
        name:'_dryksi',
        fr:'semaine',
        path:[[lm,a,r,q,lm,w,m,q,lm,a,rm,a,r,q,rm,w,lm,w,l,q,lm,a]],
        fractal:'zd-dw-ws-sz-ze-ed-dx-xw-wq-qz'
    },
    {
        name:'_lki',
        fr: 'chaîner',
        path: [[l, q, rm, a, r, q, rm, w, l, q, lm, a, r, q, lm, w, l, q], [m, q, m, q]],
        fractal:'qz-zd-dw-wq-qe-ed-dx-xq'
    },
    {
        name: '_gly',
        fr: 'pétrole',
        path: [[l, q, lm, w, m, q, rm, w, r, q],[lm, a, lm, w],[rm, a, rm, w]],
        fractal:'qw-ws-sx-xd-zw-ex'
    },
    {
        name: '_zba',
        fr: 'syllabe',
        path: [[rm, a, l, q, r, q, lm, w], [lm, a, lm, a], [rm, w, rm, w]],
        fractal:'eq-qd-dw'
    },
    {
        name: '_nmo',
        fr: 'nommer',
        path: [[lm, a, r, q, rm, w, lm, w, l, q, lm, a, rm, a, r, q], [lm, w, rm, a], [m, q, rm, w]],
        fractal:'ew-xs-zd-ze-ed-dx-xw-wq-qz'
    },
    {
        name: '_sola',
        fr: 'son',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a, r, q]],
        fractal:'zq-qw-wx-xs-se-ed'
    },
    {
        name: '_sota',
        fr: 'ton',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a, r, q, m, q]],
        fractal:'zq-qw-wx-xs-se-ed-ds'

    },
    {
        name: '_kwi',
        fr: 'qui',
        path: [[lm, a, l, q, lm, w], [l, q, rm, w, rm, a], [m, q, m, q], [r, q, r, q]],
        fractal:'zq-qw-qx-xe'
    },
    {
        name: '_ze',
        fr: 'utiliser',
        path: [[l, q, lm, w, rm, w, r, q], [lm, w, lm, a, rm, a, rm, w], [lm, a, rm, w], [rm, a, lm, w]],
        fractal:'ze-ex-xw-wz-zx-we-qw-dx'
    },
    {
        name: '_vrea',
        fr: 'vrai',
        path: [[l, q, lm, w, rm, a], [lm, a, lm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'qw-we'
    },
    {
        name: '_v3ai',
        fr: 'vouloir',
        path: [[lm, a, m, q, rm, a], [l, q, lm, w, rm, w, r, q]],
        fractal:'zs-se-qw-wx-xd'
    },
    {
        name: '_flae',
        fr: 'voler',
        path: [[lm, a, rm, a, r, q], [lm, w, rm, a], [l, q, l, q], [rm, w, rm, w]],
        fractal:'we-ze-ed'
    },
    {
        name: '_vloi',
        fr: 'volume',
        path: [[lm, a, rm, a, r, q], [rm, a, lm, w], [l, q, lm, w, rm, w]],
        fractal:'ze-ed-qw-wx-we'
    },
    {
        name: '_sta',
        fr: 'voir',
        path: [[rm, a, l, q, rm, w], [l, q, r, q], [lm, a, m, q, lm, w]],
        fractal:'eq-qx-dq-zs-sw'
    },
    {
        name: '_ko',
        fr: 'voici',
        path: [[lm, a, lm, a], [rm, a, rm, a], [m, q, m, q], [l, q, lm, w, rm, w, r, q]],
        fractal:'qw-wx-xd'
    },
    {
        name: '_vlo',
        fr: 'vitesse',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [rm, a, m, q, rm, w], [l, q, m, q]],
        fractal:'ze-ed-dx-xw-es-sx-qs'
    },
    {
        name: '_vzi',
        fr: 'visage',
        path: [[lm, a, lm, a], [m, q, m, q], [l, q, rm, a, r, q, rm, w, lm, w, l, q]],
        fractal:'qe-ed-dx-xw-wq'
    },
    {
        name: '_vzy',
        fr: 'virus',
        path: [[m, q, rm, a, rm, w, lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a]],
        fractal:'zx-xe-es-ze-ed-dx-xw-wq-qz'
    },
    {
        name: '_vle',
        fr: 'violet',
        path: [[l, q, lm, w, rm, w], [lm, a, lm, a], [rm, a, rm, a], [m, q, m, q], [r, q, r, q]],
        fractal:'qw-wx'
    },
    {
        name: '_ldo',
        fr: 'vieux',
        path: [[lm, a, m, q, r, q, lm, w, m, q, rm, w], [l, q, l, q], [rm, a, rm, a]],
        fractal:'zx-ws-sd-dw'
    },
    {
        name: '_vey',
        fr: 'vieillard',
        path: [[l, q, rm, a, r, q], [lm, a, rm, w], [lm, w, m, q]],
        fractal:'zx-ws-qe-ed'
    },
    {
        name: '_vde',
        fr: 'vider',
        path: [[l, q, r, q, rm, a, m, q], [rm, a, rm, w], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qd-de-es-xe'
    },
    {
        name: '_vzey',
        fr: 'vice',
        path: [[lm, w, lm, w], [l, q, lm, a, rm, w, l, q], [rm, a, r, q]],
        fractal:'zx-xq-qz-ed'
    },
    {
        name: '_vba',
        fr: 'vibrer',
        path: [[r, q, lm, a, rm, a, m, q, rm, w, lm, w, r, q, m, q], [l, q, l, q]],
        fractal:'ze-es-sd-dw-wx-xs-zd'
    },
    {
        name: '_vry',
        fr: 'vertu',
        path: [[lm, a, lm, a], [l, q, rm, a, lm, w, l, q], [r, q, rm, w]],
        fractal:'qe-ew-wq-xd'
    },
    {
        name: '_vrae',
        fr: 'vert',
        path: [[l, q, l, q], [lm, a, lm, a], [lm, w, lm, w], [m, q, m, q], [rm, a, r, q, rm, w]],
        fractal:'ed-dx'
    },
    {
        name: '_kto',
        fr: 'vers',
        path: [[l, q, r, q], [rm, a, r, q, rm, w], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qd-ed-dx'
    },
    {
        name: '_rmye',
        fr: 'ver',
        path: [[l, q, lm, w, m, q, rm, w, r, q, lm, a, rm, a]],
        fractal:'qw-ws-sx-xd-dz-ze'
    },
    {
        name: '_sloi',
        fr: 'vendre',
        path: [[lm, a, rm, a], [lm, w, l, q, r, q, rm, w, lm, w, m, q, rm, w]],
        fractal:'ze-qd-dx-xw-wq-ws-sx'
    },
    {
        name: '_pio',
        fr: 'végétal',
        path: [[lm, a, lm, w, r, q], [l, q, rm, w], [lm, w, rm, a]],
        fractal:'zw-wd-ew-qx'
    },
    {
        name: '_vnia',
        fr: 'varier',
        path: [[l, q, rm, a, lm, a, l, q], [m, q, r, q, rm, w, m, q], [lm, w, lm, w]],
        fractal:'qz-ze-eq-sd-dx-xs'
    },
    {
        name: '_vlia',
        fr: 'valoriser',
        path: [[lm, a, rm, a], [l, q, r, q, lm, w, rm, w, l, q]],
        fractal:'ze-qd-dw-wx-xq'
    },
    {
        name: '_vkye',
        fr: 'vaincre',
        path: [[rm, a, lm, w, l, q, rm, a, rm, w, rm, w, lm, w], [lm, a, r, q]],
        fractal:'zd-wq-qe-ex-xw-we'
    },
    {
        name: '_waa',
        fr: 'trouver',
        path: [[l, q, lm, a, lm, w, rm, w, lm, a, r, q], [rm, a, rm, a]],
        fractal:'zw-wx-xz-qz-zd'
    },
    {
        name: '_tro',
        fr: 'trop',
        path: [[lm, a, l, q, lm, w, rm, w, r, q, rm, a], [l, q, r, q], [lm, w, m, q, rm, w]],
        fractal:'zq-qw-wx-xd-de-qd-ws-sx'
    },
    {
        name: '_bse',
        fr: 'trébucher',
        path: [[lm, a, rm, a, r, q], [l, q, rm, a], [lm, w, m, q], [rm, w, rm, w]],
        fractal:'ze-ed-qe-ws'
    },
    {
        name: '_tie',
        fr: 'traverser',
        path: [[rm, a, lm, a, lm, w, rm, w], [l, q, r, q]],
        fractal:'ez-zw-wx-qd'
    },
    {
        name: '_tvai',
        fr: 'travailler',
        path: [[lm, a, lm, w], [l, q, rm, a, r, q, m, q, rm, w, r, q]],
        fractal:'zw-qe-ed-ds-sx-xd'
    },
    {
        name: '_zit',
        fr: 'transitionner',
        path: [[m, q, l, q, lm, a, m, q, rm, a, r, q, rm, w, lm, w, m, q], [rm, a, rm, w]],
        fractal:'qz-zs-sq-we-ed-dx-xw-xe'
    },
    {
        name: '_mne',
        fr: 'transgenre',
        path: [[lm, a, m, q, r, q, rm, w, lm, w, m, q], [lm, w, r, q], [l, q, rm, a]],
        fractal:'zs-sd-dx-xw-ws-wd-qe'
    },
    {
        name: '_tew',
        fr: 'tout',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q], [lm, w, lm, a, r, q, lm, w], [rm, a, rm, w, l, q, rm, a], [l, q, r, q], [lm, a, rm, w], [rm, a, lm, w]],
        fractal:'qz-ze-ed-dx-xw-wq-qd-zx-we-xe-eq-qx-wz-zd-dw'
    },
    {
        name: '_pko',
        fr: 'toucher',
        path: [[lm, a, lm, w], [rm, a, rm, w], [l, q, lm, w, rm, w, r, q], [m, q, m, q]],
        fractal:'qw-wx-xd-zw-ex'
    },
    {
        name: '_tnogma',
        fr: 'tonne',
        path: [[rm, w, lm, a, rm, a, rm, w, lm, w, l, q, m, q, lm, w], [r, q, r, q]],
        fractal:'xz-ze-ex-xw-wq-qs-sw'
    },
    {
        name: '_pley',
        fr: 'tirer',
        path: [[lm, a, l, q, lm, w], [rm, a, m, q, rm, w], [r, q, r, q]],
        fractal:'zq-qw-es-sx'
    },
    {
        name: '_tra3',
        fr: 'théâtre',
        path: [[l, q, l, q], [lm, w, lm, w], [r, q, lm, a, rm, a, m, q, rm, w]],
        fractal:'xs-se-ez-zd'
    },
    {
        name: '_toi',
        fr: 'texte',
        path: [[lm, a, rm, a], [l, q, m, q], [lm, w, rm, w], [r, q, r, q]],
        fractal:'ze-qs-wx'
    },
    {
        name: '_tea',
        fr: 'tête',
        path: [[l, q, l, q], [lm, w, lm, a, rm, a, m, q], [r, q, r, q], [rm, w, rm, w]],
        fractal:'wz-ze-es'
    },
    {
        name: '_ste',
        fr: 'tester',
        path: [[l, q, l, q], [lm, w, lm, a, rm, a, m, q, r, q], [rm, w, rm, w]],
        fractal:'wz-ze-es-sd'
    },
    {
        name: '_trea',
        fr: 'terre',
        path: [[l, q, l, q], [lm, a, rm, w, lm, w, rm, a], [r, q, r, q]],
        fractal:'zx-xw-we'
    },
    {
        name: '_kpoile',
        fr: 'temps',
        path: [[l, q, r, q, rm, a, rm, w, r, q, lm, a, lm, w, r, q], [lm, a, m, q, lm, w]],
        fractal:'qd-de-ex-xd-dz-zw-wd-zs-sw'
    },
    {
        name: '_po',
        fr: 'température',
        path: [[lm, a, lm, w, rm, w], [l, q, m, q], [rm, a, rm, a], [r, q, r, q]],
        fractal:'zw-wx-qs'
    },
    {
        name: '_tle',
        fr: 'téléphoner',
        path: [[l, q, rm, w, m, q, lm, w, r, q, rm, a, lm, a, l, q, r, q], [lm, w, rm, w]],
        fractal:'qz-ze-ed-dq-qx-xs-sw-wd-wx'
    },
    {
        name: '_zlae',
        fr: 'tant',
        path: [[l, q, lm, a], [lm, w, rm, w, rm, a], [m, q, rm, a, r, q]],
        fractal:'qz-wx-xe-se-ed'
    },
    {
        name: '_sai',
        fr: 'taille',
        path: [[lm, a, l, q, r, q, rm, w], [lm, w, lm, w], [rm, a, rm, a]],
        fractal:'zq-qd-dx'
    },
    {
        name: '_stu',
        fr: 'synthétiser',
        path: [[l, q, lm, a, m, q, lm, w, l, q], [rm, a, rm, w], [r, q, r, q]],
        fractal:'qz-zs-sw-wq-ex'
    },
    {
        name: '_sbo',
        fr: 'symboliser',
        path: [[l, q, lm, a, lm, w], [m, q, rm, a, rm, w, r, q]],
        fractal:'qz-zw-se-ex-xd'
    },
    {
        name: '_tpe',
        fr: 'sur',
        path: [[lm, a, rm, a], [l, q, r, q, rm, w, lm, w, l, q]],
        fractal:'ze-qd-dx-xw-wq'
    },
    {
        name: '_flo',
        fr: 'suivre',
        path: [[l, q, m, q, lm, a, lm, w, m, q], [rm, a, r, q, rm, w]],
        fractal:'ed-dx-qs-sz-zw-ws'
    },
    {
        name: '_pkae',
        fr: 'sujet',
        path: [[lm, a, rm, w, lm, w, lm, a, rm, a, rm, w], [lm, w, m, q], [l, q, rm, a], [r, q, r, q]],
        fractal:'zx-ws-qe-ze-ex-xw-wz'
    },
    {
        name: '_ske',
        fr: 'sucrer',
        path: [[lm, a, m, q, rm, a], [l, q, r, q, lm, w, rm, w]],
        fractal:'zs-se-qd-dw-wx'
    },
    {
        name: '_fi',
        fr: 'subjonctif',
        path: [[rm, a, l, q, lm, w], [l, q, r, q], [lm, a, rm, w]],
        fractal:'eq-qw-dq-zx'
    },
    {
        name: '_svo',
        fr: 'souvent',
        path: [[rm, w, l, q, lm, w, rm, w, lm, a, r, q, rm, a, lm, a]],
        fractal:'zd-de-ez-zx-xw-wq-qx'
    },
    {
        name: '_nde',
        fr: 'sous',
        path: [[l, q, r, q, rm, a, lm, a, l, q], [lm, w, rm, w]],
        fractal:'wx-qd-de-ez-zq'
    },
    {
        name: '_sple',
        fr: 'souple',
        path: [[lm, w, m, q, rm, w, lm, w, lm, a, r, q, rm, a, l, q, lm, a], [rm, a, rm, w]],
        fractal:'ws-sx-xw-wz-ze-ex-qz-zd-de-eq'
    },
    {
        name: '_3nu',
        fr: 'soumettre',
        path: [[l, q, rm, a], [lm, a, rm, a, r, q], [m, q, rm, w, lm, w]],
        fractal:'ze-ed-qe-sx-xw'
    },
    {
        name: '_soma',
        fr: 'soi',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a, r, q, rm, w], [m, q, r, q]],
        fractal:'zq-qw-wx-xs-se-ed-dx-sd'
    },
    {
        name: '_mki',
        fr: 'singe',
        path: [[lm, a, rm, w], [m, q, r, q], [l, q, rm, a], [lm, w, lm, w]],
        fractal:'zx-ds-qe'
    },
    {
        name: '_snea',
        fr: 'simplifier',
        path: [[lm, a, lm, w, m, q, l, q, lm, a], [rm, a, r, q, rm, w]],
        fractal:'qz-zw-ws-sq-ed-dx'
    },
    {
        name: '_zei',
        fr: 'si',
        path: [[lm, w, l, q, rm, a], [lm, a, rm, w], [r, q, r, q]],
        fractal:'eq-qw-zx'
    },
    {
        name: '_skwa',
        fr: 'sexe',
        path: [[lm, a, m, q, rm, a, lm, a, l, q, lm, w, rm, w, r, q, rm, a]],
        fractal:'zs-se-ez-zq-qw-wx-xd-de'
    },
    {
        name: '_lno',
        fr: 'seul',
        path: [[m, q, m, q], [l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q]],
        fractal:'ze-ed-dx-xw-wq-qz'
    },
    {
        name: '_trey',
        fr: 'séparer',
        path: [[l, q, lm, a, lm, w, l, q, r, q, rm, a, rm, w, r, q]],
        fractal:'qz-zw-wq-qd-de-ex-xd'
    },
    {
        name: '_smu',
        fr: 'sentir',
        path: [[lm, a, l, q, lm, w, rm, w, r, q], [m, q, rm, a]],
        fractal:'zq-qw-wx-xd-es'
    },
    {
        name: '_vye',
        fr: 'sens',
        path: [[l, q, m, q], [r, q, lm, a, rm, a, r, q, rm, w, lm, w, r, q]],
        fractal:'dz-ze-ed-dx-xw-wd-qs'
    },
    {
        name: '_sge',
        fr: 'segmenter',
        path: [[l, q, l, q], [lm, a, lm, a], [lm, w, m, q], [rm, w, rm, w], [rm, a, r, q]],
        fractal:'ws-ed'
    },
    {
        name: '_sky',
        fr: 'sécuriser',
        path: [[lm, w, lm, a, r, q, lm, w], [l, q, l, q], [rm, a, rm, a], [m, q, rm, w]],
        fractal:'wd-dz-zw-xs'
    },
    {
        name: '_d3y',
        fr: 'seconde',
        path: [[l, q, l, q], [r, q, r, q], [rm, a, lm, a, rm, w, lm, w]],
        fractal:'ez-zx-xw'
    },
    {
        name: '_so',
        fr: 'se',
        path: [[lm, a, l, q, lm, w, rm, w, m, q, rm, a], [m, q, r, q, rm, w]],
        fractal:'zq-qw-wx-xs-se-sd-dx'
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
        fractal:'qd-sz-zw-wx-xe-es'
    },
    {
        name: '_rgo',
        fr: 'rouge',
        path: [[lm, a, l, q, lm, w], [m, q, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'zq-qw'
    },
    {
        name: '_rwe',
        fr: 'roue',
        path: [[r, q, m, q, lm, a, l, q, lm, w, m, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'ds-sz-zq-qw-ws'
    },
    {
        name: '_rgya',
        fr: 'rongeur',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, r, q, rm, w, m, q, lm, w, l, q]],
        fractal:'qd-dx-xs-sw-wq'
    },
    {
        name: '_lfaw',
        fr: 'rire',
        path: [[l, q, lm, w, m, q, lm, a], [lm, w, r, q, rm, a, rm, w]],
        fractal:'qw-ws-sz-wd-de-ex'
    },
    {
        name: '_rgi',
        fr: 'rigide',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w, r, q, rm, w, l, q, lm, w, r, q], [rm, a, rm, w]],
        fractal:'zs-se-ez-zw-wx-xe-wq-qx-xd-dw'
    },
    {
        name: '_ne',
        fr: 'rien',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'ss'
    },
    {
        name: '_swo',
        fr: 'revenir',
        path: [[l, q, lm, a, lm, w, l, q, m, q, rm, a, rm, w, m, q, r, q]],
        fractal:'dq-qz-zw-wq-se-ex-xs'
    },
    {
        name: '_rve',
        fr: 'réveiller',
        path: [[m, q, lm, w, lm, a, r, q, l, q, rm, a, rm, w, m, q]],
        fractal:'wz-zd-dq-qe-ex-xs-sw'
    },
    {
        name: '_rto',
        fr: 'retourner',
        path: [[rm, w, rm, a, lm, a, lm, w], [l, q, lm, w, m, q], [r, q, r, q]],
        fractal:'qw-ws-wz-ze-ex'
    },
    {
        name: '_lvoi',
        fr: 'retirer',
        path: [[lm, a, lm, w, m, q, l, q, lm, w], [rm, a, r, q, rm, w]],
        fractal:'zw-ws-sq-qw-ed-dx'
    },
    {
        name: '_zle',
        fr: 'résulter',
        path: [[l, q, m, q], [lm, a, lm, a], [lm, w, lm, w], [rm, a, rm, w], [r, q, r, q]],
        fractal:'qs-ex'
    },
    {
        name: '_pta',
        fr: 'reptile',
        path: [[lm, w, rm, w, l, q, r, q, lm, a], [m, q, rm, a]],
        fractal:'wx-xq-qd-dz-se'
    },
    {
        name: '_rpie',
        fr: 'répéter',
        path: [[r, q, l, q, lm, a, lm, w], [rm, w, rm, a, m, q]],
        fractal:'dq-qz-zw-xe-es'
    },
    {
        name: '_fksi',
        fr: 'réparer',
        path: [[r, q, lm, a, m, q, l, q, lm, w, m, q], [rm, a, rm, w]],
        fractal:'xe-dz-zs-sq-qw-ws'
    },
    {
        name: '_floi',
        fr: 'remplir',
        path: [[l, q, r, q, rm, w, m, q], [rm, a, rm, w], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qd-dx-xs-ex'
    },
    {
        name: '_rdai',
        fr: 'refaire',
        path: [[m, q, lm, a, rm, a, m, q, r, q, lm, w, rm, w, l, q, m, q]],
        fractal:'sz-ze-es-qd-dw-wx-xq'
    },
    {
        name: '_tba',
        fr: 'récipient',
        path: [[lm, a, l, q, lm, w, rm, w, r, q, rm, a], [m, q, m, q]],
        fractal:'zq-qw-wx-xd-de'
    },
    {
        name: '_rsea',
        fr: 'recevoir',
        path: [[l, q, rm, w, m, q, lm, w, r, q], [lm, a, rm, a]],
        fractal:'ze-qx-xs-sw-wd'
    },
    {
        name: '_rbae',
        fr: 'rebondir',
        path: [[l, q, lm, a, rm, w, rm, a], [lm, w, r, q]],
        fractal:'qz-zx-xe-wd'
    },
    {
        name: '_snoi',
        fr: 'rayonner',
        path: [[lm, a, rm, a, r, q], [l, q, rm, a, rm, w], [lm, w, rm, a]],
        fractal:'ze-ed-eq-ex-ew'
    },
    {
        name: '_groi',
        fr: 'ramper',
        path: [[lm, w, rm, a, rm, w, r, q, l, q, lm, a, m, q]],
        fractal:'sz-zq-qd-dx-xe-ew'
    },
    {
        name: '_rma',
        fr: 'ramasser',
        path: [[l, q, rm, a, r, q], [lm, a, lm, w, m, q], [rm, w, rm, w]],
        fractal:'zw-ws-qe-ed'
    },
    {
        name: '_slo',
        fr: 'ralentir',
        path: [[r, q, l, q], [lm, a, l, q, lm, w], [rm, a, m, q, rm, w]],
        fractal:'dq-zq-qw-es-sx'
    },
    {
        name: '_wo',
        fr: 'questionner',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, lm, w], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-eq-qx'
    },
    {
        name: '_kwa',
        fr: 'que',
        path: [[lm, a, l, q, lm, w], [l, q, rm, a, rm, w], [m, q, m, q], [r, q, r, q]],
        fractal:'zq-qw-qe-ex'
    },
    {
        name: '_kta',
        fr: 'quantité',
        path: [[r, q, m, q, rm, w, lm, w, lm, a, rm, a, rm, w], [l, q, l, q]],
        fractal:'ds-sx-xe-ez-zw-wx'
    },
    {
        name: '_fkwe',
        fr: 'quand',
        path: [[rm, a, lm, a, lm, w, r, q, m, q], [l, q, l, q], [rm, w, rm, w]],
        fractal:'sd-dw-wz-ze'
    },
    {
        name: '_3e',
        fr: 'protéger',
        path: [[lm, w, l, q, lm, a, rm, a, r, q, rm, w], [m, q, m, q]],
        fractal:'wq-qz-ze-ed-dx'
    },
    {
        name: '_prai',
        fr: 'proportionner',
        path: [[r, q, m, q, rm, w, r, q, lm, a, lm, w, r, q], [l, q, l, q], [rm, a, rm, a]],
        fractal:'ds-sx-xd-dz-zw-wd'
    },
    {
        name: '_prio',
        fr: 'programmer',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w, rm, w, rm, a], [l, q, l, q], [r, q, r, q]],
        fractal:'zs-se-ez-zw-wx-xe'
    },
    {
        name: '_tpia',
        fr: 'profond',
        path: [[lm, w, lm, a, l, q, lm, w, rm, w, r, q, l, q], [rm, a, rm, a]],
        fractal:'wz-zq-qw-wx-xd-dq'
    },
    {
        name: '_pre',
        fr: 'près',
        path: [[lm, w, lm, a, r, q], [l, q, m, q, rm, a, l, q], [rm, w, rm, w]],
        fractal:'wz-zd-qs-se-eq'
    },
    {
        name: '_ra',
        fr: 'prendre',
        path: [[lm, w, l, q, m, q, lm, a, rm, a, m, q, r, q, rm, w]],
        fractal:'se-ez-zs-wq-qd-dx'
    },
    {
        name: '_frya',
        fr: 'pouvoir',
        path: [[lm, w, m, q, rm, w], [l, q, lm, a, rm, a, r, q]],
        fractal:'ws-sx-qz-ze-ed'
    },
    {
        name: '_psie',
        fr: 'pousser',
        path: [[l, q, l, q], [lm, a, m, q, lm, w], [rm, a, r, q, rm, w]],
        fractal:'zs-sw-ed-dx'
    },
    {
        name: '_vwa',
        fr: 'pourquoi',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, r, q], [m, q, m, q]],
        fractal:'ze-eq-qx-wd'
    },
    {
        name: '_psu',
        fr: 'positionner',
        path: [[l, q, m, q, lm, w, lm, a, rm, a, lm, w], [r, q, rm, w]],
        fractal:'wz-ze-ew-qs-xd'
    },
    {
        name: '_ptoi',
        fr: 'porter',
        path: [[lm, w, rm, a, r, q, lm, a, rm, a], [m, q, rm, w], [l, q, l, q]],
        fractal:'we-xs-zd-de-ez'
    },
    {
        name: '_lbay',
        fr: 'porcin',
        path: [[m, q, lm, w, l, q, lm, a, rm, a, r, q, rm, w, rm, a]],
        fractal:'sw-wq-qz-ze-ed-dx-xe'
    },
    {
        name: '_ptea',
        fr: 'poitriner',
        path: [[lm, w, m, q, l, q, rm, a, m, q, rm, w], [lm, a, lm, a], [r, q, r, q]],
        fractal:'xs-we-eq-qs'
    },
    {
        name: '_psaw',
        fr: 'poisson',
        path: [[l, q, rm, a, rm, w, r, q, lm, w, l, q], [lm, a, lm, a], [m, q, m, q]],
        fractal:'wq-qe-ex-xd-dw'
    },
    {
        name: '_fky',
        fr: 'pointer',
        path: [[l, q, rm, w, rm, a], [lm, a, lm, a], [m, q, m, q], [lm, w, lm, w], [r, q, r, q]],
        fractal:'qx-xe'
    },
    {
        name: '_ploi',
        fr: 'poil',
        path: [[l, q, lm, w], [lm, a, m, q], [rm, a, rm, w], [r, q, r, q]],
        fractal:'qw-sz-ex'
    },
    {
        name: '_vdio',
        fr: 'plus',
        path: [[lm, a, lm, w], [l, q, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'zw-qs'
    },
    {
        name: '_tsi',
        fr: 'pluriel',
        path: [[lm, a, m, q, r, q], [lm, w, m, q], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'zs-sd-ws'
    },
    {
        name: '_plwe',
        fr: 'plume',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, r, q, rm, w, l, q], [lm, w, lm, w]],
        fractal:'qd-dx-xq'
    },
    {
        name: '_pli',
        fr: 'plier',
        path: [[lm, a, rm, a, r, q, l, q, lm, w, rm, w]],
        fractal:'ze-ed-dq-qw-wx'
    },
    {
        name: '_pto',
        fr: 'pleuvoir',
        path: [[l, q, lm, w, m, q, rm, w, r, q], [lm, a, lm, a], [rm, a, rm, a]],
        fractal:'qw-ws-sx-xd'
    },
    {
        name: '_pla',
        fr: 'planifier',
        path: [[lm, w, lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a], [rm, a, rm, w], [r, q, l, q]],
        fractal:'dq-qz-ze-ed-dx-xw-wq-zw-xe'
    },
    {
        name: '_pnae',
        fr: 'planète',
        path: [[lm, w, lm, a, r, q, lm, w, l, q, lm, a, rm, a, r, q, rm, w, lm, w], [rm, a, rm, w, l, q, rm, a], [m, q, m, q]],
        fractal:'qz-ze-ed-dx-xw-wq-qx-xe-eq-wz-zd-dw'
    },
    {
        name: '_aria',
        fr: 'planer',
        path: [[lm, a, m, q, rm, a, r, q, lm, a, l, q, rm, a, m, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'eq-qz-zs-se-ed-dz'
    },
    {
        name: '_ueoa',
        fr: 'plaisir',
        path: [[m, q, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q]],
        fractal:'sz-zq-qw-wx-xd-de-es'
    },
    {
        name: '_pvo',
        fr: 'pivoter',
        path: [[lm, w, lm, a, m, q, lm, w, r, q, rm, w, lm, w], [l, q, l, q], [rm, a, rm, a]],
        fractal:'ws-sz-zw-wx-xd-dw'
    },
    {
        name: '_vdibwa',
        fr: 'pire',
        path: [[m, q, l, q, lm, a, rm, w], [lm, w, lm, a], [rm, a, r, q]],
        fractal:'xz-zq-qs-wz-ed'
    },
    {
        name: '_pke',
        fr: 'piquant',
        path: [[lm, w, lm, a, m, q, rm, a, rm, w, lm, w, l, q, r, q, rm, w]],
        fractal:'wz-zs-se-ex-xw-wq-qd-dx'
    },
    {
        name: '_gwi',
        fr: 'pingouin',
        path: [[lm, a, rm, a, l, q, lm, w, rm, w, rm, a, r, q], [m, q, m, q]],
        fractal:'ze-eq-qw-wx-xe-ed'
    },
    {
        name: '_trai',
        fr: 'piéger',
        path: [[lm, w, lm, a, l, q, r, q, rm, a, lm, a], [rm, w, rm, w]],
        fractal:'wz-zq-qd-de-ez'
    },
    {
        name: '_fti',
        fr: 'pied',
        path: [[l, q, m, q, lm, w, lm, a, rm, a, rm, a, rm, w, m, q, r, q]],
        fractal:'sw-wz-ze-ex-xs-qd'
    },
    {
        name: '_sfi',
        fr: 'peur',
        path: [[lm, a, rm, w], [m, q, r, q, rm, a], [l, q, l, q], [lm, w, lm, w]],
        fractal:'zx-sd-de'
    },
    {
        name: '_psia',
        fr: 'peser',
        path: [[lm, a, rm, a, rm, w, lm, w, m, q, rm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'ze-ex-xw-ws-sx'
    },
    {
        name: '_lse',
        fr: 'perdre',
        path: [[rm, w, lm, a, rm, a, rm, w], [l, q, rm, w, r, q], [lm, w, lm, w]],
        fractal:'xz-ze-ex-qx-xd'
    },
    {
        name: '_dri',
        fr: 'percer',
        path: [[r, q, rm, a, m, q, rm, w, r, q, lm, a, l, q, lm, w, r, q, l, q]],
        fractal:'de-es-sx-xd-dz-zq-qw-wd-dq'
    },
    {
        name: '_hia',
        fr: 'penser',
        path: [[m, q, l, q, lm, a, rm, a, r, q, m, q, rm, w, lm, w, m, q]],
        fractal:'ws-sx-xw-qd-de-ez-zq'
    },
    {
        name: '_pda',
        fr: 'pendant',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [l, q, r, q], [rm, a, rm, w]],
        fractal:'ze-ed-dx-xw-qd-xe'
    },
    {
        name: '_prye',
        fr: 'part',
        path: [[m, q, rm, w, lm, w, m, q], [l, q, l, q], [lm, a, lm, a], [rm, a, rm, a], [r, q, r, q]],
        fractal:'ws-sx-xw'
    },
    {
        name: '_psoi',
        fr: 'passer',
        path: [[r, q, l, q], [rm, a, l, q, rm, w], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'eq-qx-dq'
    },
    {
        name: '_pmi',
        fr: 'parmi',
        path: [[lm, a, rm, a, r, q, l, q, lm, a, rm, w, lm, w, rm, a]],
        fractal:'we-ed-dq-qz-zx-xw-ze'
    },
    {
        name: '_vga',
        fr: 'parfumer',
        path: [[lm, a, l, q, rm, a, rm, w, r, q], [l, q, lm, w, rm, w], [m, q, rm, a]],
        fractal:'zq-qw-wx-xd-qe-ex-es'
    },
    {
        name: '_smai',
        fr: 'parfois',
        path: [[l, q, lm, a, m, q], [lm, w, rm, w, r, q], [rm, a, rm, a]],
        fractal:'qz-zs-wx-xd'
    },
    {
        name: '_prae',
        fr: 'parcourir',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q]],
        fractal:'ez-zq-qw-wx-xd-ds'
    },
    {
        name: '_ba',
        fr: 'par',
        path: [[lm, a, lm, a], [rm, a, rm, a], [l, q, l, q], [m, q, rm, w], [lm, w, rm, w, r, q]],
        fractal:'wx-xd-xs'
    },
    {
        name: '_mriy',
        fr: 'papillon',
        path: [[lm, w, lm, a, rm, a, lm, w], [l, q, r, q, rm, w, l, q]],
        fractal:'wz-ze-ew-qd-dx-xq'
    },
    {
        name: '_sra',
        fr: 'pacifier',
        path: [[l, q, lm, w, rm, a, lm, a, rm, w, r, q]],
        fractal:'qw-we-ez-zx-xd'
    },
    {
        name: '_pno',
        fr: 'ouvrir',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [l, q, m, q]],
        fractal:'ze-ed-dx-xw-qs'
    },
    {
        name: '_he',
        fr: 'oui',
        path: [[l, q, l, q], [lm, a, lm, w, m, q], [rm, a, rm, w], [r, q, r, q]],
        fractal:'zw-ws-ex'
    },
    {
        name: '_roi',
        fr: 'ou',
        path: [[lm, a, rm, a, lm, w, rm, w, lm, a], [l, q, l, q], [r, q, r, q]],
        fractal:'ze-ew-wx-xz'
    },
    {
        name: '_sdey',
        fr: 'où',
        path: [[lm, a, rm, w], [lm, w, rm, w, r, q], [l, q, l, q], [rm, a, rm, a]],
        fractal:'zx-wx-xd'
    },
    {
        name: '_bnio',
        fr: 'os',
        path: [[lm, a, rm, w, rm, a, l, q, m, q, rm, a, lm, a, l, q, lm, w, rm, w], [r, q, r, q]],
        fractal:'qz-ze-es-sq-qe-zx-xw-wq-ex'
    },
    {
        name: '_via',
        fr: 'originer',
        path: [[l, q, lm, w, lm, a, rm, a], [m, q, r, q, rm, w, m, q]],
        fractal:'qw-wz-ze-sd-dx-xs'
    },
    {
        name: '_rgia',
        fr: 'organe',
        path: [[rm, a, l, q, m, q, lm, w, rm, w, lm, a], [lm, w, l, q, lm, a, rm, a, r, q, rm, w]],
        fractal:'-zx-ws-sq-qe-ez-zq-qw-wx-xd-de'
    },
    {
        name: '_rdo',
        fr: 'ordonner',
        path: [[lm, w, lm, a, rm, a, rm, w], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'wz-ze-ex'
    },
    {
        name: '_r3y',
        fr: 'orange',
        path: [[l, q, lm, a, rm, a], [m, q, m, q], [r, q, r, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'qz-ze'
    },
    {
        name: '_vroi',
        fr: 'or',
        path: [[l, q, m, q], [lm, a, m, q, lm, w], [r, q, rm, a, rm, w, r, q]],
        fractal:'qs-zs-sw-xe-ed-dx'
    },
    {
        name: '_gnae',
        fr: 'onde',
        path: [[l, q, lm, w], [lm, a, rm, w], [rm, a, r, q]],
        fractal:'qw-xz-ed'
    },
    {
        name: '_broi',
        fr: 'ombre',
        path: [[l, q, rm, a, rm, w, lm, w], [lm, a, m, q], [r, q, r, q]],
        fractal:'qe-ex-xw-zs'
    },
    {
        name: '_zo',
        fr: 'oiseau',
        path: [[m, q, l, q, lm, w, rm, a], [lm, a, rm, a, r, q], [rm, w, rm, w]],
        fractal:'sq-qw-we-ze-ed'
    },
    {
        name: '_gwa',
        fr: 'oeuf',
        path: [[l, q, lm, a, m, q, lm, w, l, q], [rm, a, r, q, rm, w]],
        fractal:'sz-zq-qw-ws-ed-dx'
    },
    {
        name: '_ptae',
        fr: 'objet',
        path: [[lm, w, m, q, rm, w, lm, w, lm, a, rm, a, rm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'ws-sx-xw-wz-ze-ex'
    },
    {
        name: '_ney',
        fr: 'nouveau',
        path: [[lm, a, l, q, lm, w, m, q, rm, w, r, q, rm, a]],
        fractal:'zq-qw-ws-sx-xd-de'
    },
    {
        name: '_fdu',
        fr: 'nourrir',
        path: [[l, q, lm, w, lm, a, rm, a, r, q, rm, w, l, q], [m, q, m, q]],
        fractal:'qw-wz-ze-ed-dx-xq'
    },
    {
        name: '_nia',
        fr: 'non',
        path: [[lm, a, rm, w], [rm, a, lm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'zx-we'
    },
    {
        name: '_na',
        fr: 'ni',
        path: [[l, q, m, q], [lm, a, rm, w, r, q], [lm, w, rm, a]],
        fractal:'zx-xd-we-qs'
    },
    {
        name: '_nsio',
        fr: 'nécessiter',
        path: [[lm, a, l, q, m, q, rm, a, r, q], [m, q, rm, w, lm, w]],
        fractal:'zq-qs-se-ed-sx-xw'
    },
    {
        name: '_zmi',
        fr: 'musique',
        path: [[l, q, lm, w, lm, a, rm, a, r, q], [lm, w, rm, w, m, q, rm, a]],
        fractal:'qw-wz-ze-ed-es-sx-xw'
    },
    {
        name: '_mso',
        fr: 'muscler',
        path: [[lm, a, rm, a, rm, w, l, q, m, q, rm, w], [lm, w, lm, w], [r, q, r, q]],
        fractal:'ze-ex-xq-qs-sx'
    },
    {
        name: '_mksi',
        fr: 'multiplier',
        path: [[lm, a, lm, a], [rm, a, rm, a], [m, q, m, q], [l, q, lm, w, rm, w, r, q]],
        fractal:'qw-wx-xd'
    },
    {
        name: '_ftey',
        fr: 'mou',
        path: [[l, q, lm, a, lm, w, rm, w, rm, a, r, q], [lm, w, m, q, rm, w]],
        fractal:'qz-zw-wx-xe-ed-ws-sx'
    },
    {
        name: '_mtu',
        fr: 'montagne',
        path: [[l, q, lm, a, m, q, rm, a, r, q], [lm, w, rm, w]],
        fractal:'qz-zs-se-ed-wx'
    },
    {
        name: '_mu',
        fr: 'mollusque',
        path: [[l, q, m, q, lm, a, l, q, lm, w, rm, w, r, q, rm, a], [lm, a, lm, w, r, q]],
        fractal:'qs-sz-zq-qw-wx-xd-de-dw-wz'
    },
    {
        name: '_mni',
        fr: 'moins',
        path: [[l, q, m, q], [lm, a, lm, a], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w], [lm, w, lm, w]],
        fractal:'qs'
    },
    {
        name: '_d3io',
        fr: 'minute',
        path: [[l, q, l, q], [lm, w, lm, a, m, q, rm, a, rm, w], [r, q, r, q]],
        fractal:'wz-zs-se-ex'
    },
    {
        name: '_mina',
        fr: 'minéral',
        path: [[lm, w, lm, a, m, q, rm, a, rm, w, lm, w, l, q, lm, a, rm, a, r, q, rm, w]],
        fractal:'wz-zs-se-ex-xw-wq-qz-ze-ed-dx'
    },
    {
        name: '_mlimza',
        fr: 'millimètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [l, q, l, q], [m, q, m, q]],
        fractal:'ze-ed-dx-xw'
    },
    {
        name: '_mligma',
        fr: 'milligramme',
        path: [[lm, a, rm, a, rm, w, lm, w], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-ex-xw'
    },
    {
        name: '_mdo',
        fr: 'milieu',
        path: [[l, q, r, q], [lm, a, lm, a], [rm, a, rm, a], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'qd'
    },
    {
        name: '_vdikeo',
        fr: 'mieux',
        path: [[m, q, l, q, lm, w, rm, a], [lm, a, lm, w], [rm, w, r, q]],
        fractal:'sq-qw-we-zw-xd'
    },
    {
        name: '_pne',
        fr: 'mettre',
        path: [[lm, w, lm, a, l, q, m, q, lm, a], [rm, a, r, q, rm, w]],
        fractal:'wz-zs-sq-qz-ed-dx'
    },
    {
        name: '_mza',
        fr: 'mètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, m, q, lm, w]],
        fractal:'ze-ed-dx-xw-wq-qs-sw'
    },
    {
        name: '_mto',
        fr: 'métal',
        path: [[lm, w, lm, a, rm, w, rm, a, r, q, lm, w, l, q, rm, a]],
        fractal:'wz-zx-xe-ed-dw-wq-qe'
    },
    {
        name: '_bwa',
        fr: 'mauvais',
        path: [[l, q, lm, a, rm, w], [rm, a, r, q], [lm, w, lm, w]],
        fractal:'qz-zx-ed'
    },
    {
        name: '_mtai',
        fr: 'matière',
        path: [[lm, a, lm, w, rm, a, rm, w, lm, w, l, q, lm, a, rm, a, r, q, rm, w]],
        fractal:'zw-we-ex-xw-wq-qz-ze-ed-dx'
    },
    {
        name: '_lfe',
        fr: 'mastodonte',
        path: [[l, q, l, q], [lm, w, lm, a, rm, a, r, q, rm, w, lm, a]],
        fractal:'wz-ze-ed-dx-xz'
    },
    {
        name: '_chka',
        fr: 'masquer',
        path: [[lm, a, rm, a], [m, q, m, q], [l, q, rm, w, r, q, lm, w, l, q]],
        fractal:'wq-qx-xd-dw-ze'
    },
    {
        name: '_msy',
        fr: 'marsupial',
        path: [[l, q, lm, a], [m, q, rm, a], [r, q, rm, w, rm, a, lm, a, lm, w, rm, w]],
        fractal:'qz-se-dx-xw-wz-ze-ex'
    },
    {
        name: '_mrai',
        fr: 'marquer',
        path: [[l, q, r, q], [lm, a, m, q, lm, w], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'qd-zs-sw'
    },
    {
        name: '_mno',
        fr: 'mâle',
        path: [[lm, a, rm, w], [lm, w, m, q, r, q], [l, q, rm, a]],
        fractal:'zx-ws-sd-qe'
    },
    {
        name: '_nfea',
        fr: 'maladie',
        path: [[lm, a, lm, a], [l, q, m, q, rm, a], [m, q, rm, w], [lm, w, r, q]],
        fractal:'qs-se-xs-wd'
    },
    {
        name: '_pro',
        fr: 'mais',
        path: [[l, q, m, q], [lm, a, m, q, lm, w], [rm, a, rm, w], [r, q, r, q]],
        fractal:'zs-sw-qs-ex'
    },
    {
        name: '_sna',
        fr: 'maigrir',
        path: [[r, q, rm, w, rm, a, r, q, l, q, lm, a, m, q, lm, w, l, q]],
        fractal:'de-ex-xd-dq-qz-zs-sw-wq'
    },
    {
        name: '_lya',
        fr: 'lune',
        path: [[lm, w, lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a], [m, q, m, q]],
        fractal:'zw-wq-qz-ze-ed-dx-xw'
    },
    {
        name: '_hea',
        fr: 'lumière',
        path: [[lm, a, r, q, lm, w, lm, a], [l, q, m, q, rm, a], [m, q, rm, w]],
        fractal:'wz-zd-dw-qs-se-xs'
    },
    {
        name: '_lro',
        fr: 'lourd',
        path: [[lm, a, m, q, rm, a], [l, q, l, q], [r, q, r, q], [lm, w, rm, w]],
        fractal:'zs-se-wx'
    },
    {
        name: '_lgya',
        fr: 'long',
        path: [[l, q, lm, w, r, q, rm, w, m, q, rm, a, lm, a]],
        fractal:'qw-wd-dx-xs-se-ez'
    },
    {
        name: '_fra',
        fr: 'loin',
        path: [[l, q, rm, w, rm, a], [lm, w, m, q, r, q, lm, w], [lm, a, lm, a]],
        fractal:'qx-xe-ws-sd-dw'
    },
    {
        name: '_sti',
        fr: 'lister',
        path: [[rm, w, lm, a, l, q, rm, w, rm, a, lm, a], [l, q, lm, w, rm, w, r, q, rm, a]],
        fractal:'xq-xz-xe-xw-wq-qz-ze-ed-dx'
    },
    {
        name: '_lpae',
        fr: 'lèvre',
        path: [[lm, a, m, q, rm, a], [l, q, r, q], [lm, w, rm, w]],
        fractal:'zs-se-qd-wx'
    },
    {
        name: '_lgy',
        fr: 'légume',
        path: [[lm, a, rm, w, lm, w, rm, a], [l, q, r, q]],
        fractal:'zx-xw-we-qd'
    },
    {
        name: '_lgio',
        fr: 'langage',
        path: [[l, q, lm, w, lm, a], [m, q, rm, w, rm, a], [r, q, r, q]],
        fractal:'qw-wz-sx-xe'
    },
    {
        name: '_ska',
        fr: 'lancer',
        path: [[l, q, r, q, rm, w, m, q], [lm, a, lm, w], [rm, a, rm, a]],
        fractal:'zw-qd-dx-xs'
    },
    {
        name: '_klotogma',
        fr: 'kilotonne',
        path: [[rm, w, lm, a, rm, a, rm, w, lm, w, l, q, lm, a], [l, q, m, q, lm, w], [r, q, r, q]],
        fractal:'zx-xe-ez-zq-qw-wx-qs-sw'
    },
    {
        name: '_klomza',
        fr: 'kilomètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, m, q, rm, w], [lm, w, m, q]],
        fractal:'ze-ed-dx-xw-wq-qs-sx-ws'
    },
    {
        name: '_klogma',
        fr: 'kilogramme',
        path: [[lm, a, rm, a, rm, w, lm, w, l, q, m, q, rm, w], [lm, w, m, q], [r, q, r, q]],
        fractal:'ze-ex-xw-wq-qs-sx-sw'
    },
    {
        name: '_tli',
        fr: 'jusque',
        path: [[l, q, lm, a, lm, w, m, q, r, q], [rm, a, r, q, rm, w]],
        fractal:'qz-zw-ws-sd-ed-dx'
    },
    {
        name: '_kadwa',
        fr: 'jour',
        path: [[lm, a, rm, w], [l, q, rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q, lm, w]],
        fractal:'zx-qe-ez-zq-qw-wx-xd-ds-sw'
    },
    {
        name: '_3go',
        fr: 'jouer',
        path: [[lm, a, lm, a], [l, q, rm, a], [lm, w, m, q, rm, w], [r, q, r, q]],
        fractal:'qe-ws-sx'
    },
    {
        name: '_ntew',
        fr: 'interrompre',
        path: [[l, q, m, q, lm, a, lm, w, m, q, r, q, rm, a, rm, w]],
        fractal:'sz-zw-ws-qd-de-ex'
    },
    {
        name: '_nsa',
        fr: 'intérieur',
        path: [[lm, a, rm, a, m, q, rm, w, lm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'ze-es-sx-xw'
    },
    {
        name: '_kea',
        fr: 'intelligence',
        path: [[lm, a, rm, w], [lm, w, rm, a, l, q, m, q, rm, a], [lm, a, r, q, lm, w, lm, a]],
        fractal:'zx-we-eq-qs-wz-zd-dw'
    },
    {
        name: '_chra',
        fr: 'insulter',
        path: [[l, q, rm, a, rm, w, lm, a], [lm, w, lm, w], [r, q, r, q]],
        fractal:'qe-ex-xz'
    },
    {
        name: '_pse',
        fr: 'insuffire',
        path: [[lm, w, l, q, lm, a, rm, a, r, q, rm, w], [l, q, r, q], [lm, a, m, q, rm, a]],
        fractal:'wq-qz-ze-ed-dx-qd-zs-se'
    },
    {
        name: '_skew',
        fr: 'insecte',
        path: [[m, q, l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q], [rm, a, rm, w]],
        fractal:'sq-qz-ze-ed-dx-xw-wq-ex'
    },
    {
        name: '_nfo',
        fr: 'informer',
        path: [[l, q, lm, a, rm, w, r, q], [lm, w, lm, w], [rm, a, rm, a]],
        fractal:'qz-zx-xd'
    },
    {
        name: '_ngla',
        fr: 'inégaler',
        path: [[lm, a, rm, a, lm, w, rm, w], [l, q, r, q]],
        fractal:'ze-ew-wx-qd'
    },
    {
        name: '_tso',
        fr: 'indiquer',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w], [l, q, l, q], [r, q, r, q], [rm, w, rm, w]],
        fractal:'wz-ze-es-sz'
    },
    {
        name: '_knea',
        fr: 'incliner',
        path: [[m, q, l, q, lm, a, rm, a, r, q], [rm, a, rm, w], [lm, w, lm, w]],
        fractal:'de-ez-zq-qs-xe'
    },
    {
        name: '_kpie',
        fr: 'inachever',
        path: [[l, q, lm, w, rm, a, r, q, rm, w, lm, a]],
        fractal:'qw-we-ed-dx-xz'
    },
    {
        name: '_fo',
        fr: 'impératif',
        path: [[rm, w, rm, a, lm, a, lm, w, r, q, lm, a], [l, q, l, q], [m, q, m, q]],
        fractal:'zw-wd-dz-ze-ex'
    },
    {
        name: '_stoia',
        fr: 'imaginer',
        path: [[r, q, l, q, rm, a, rm, w, l, q], [lm, a, m, q, lm, w]],
        fractal:'dq-qe-ex-xq-zs-sw'
    },
    {
        name: '_3ne',
        fr: 'jeune',
        path: [[m, q, l, q, rm, a, m, q], [lm, a, rm, w], [lm, w, lm, w], [r, q, r, q]],
        fractal:'zx-qs-se-eq'
    },
    {
        name: '_dea',
        fr: 'idée',
        path: [[m, q, l, q, rm, a, m, q, rm, w], [lm, w, r, q], [lm, a, lm, a]],
        fractal:'sq-qe-es-sx-wd'
    },
    {
        name: '_si',
        fr: 'ici',
        path: [[lm, w, l, q, lm, a, rm, a, rm, w], [m, q, rm, w, r, q]],
        fractal:'wq-qz-ze-ex-sx-xd'
    },
    {
        name: '_r3a',
        fr: 'jaune',
        path: [[lm, a, rm, a, r, q], [l, q, l, q], [m, q, m, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'ze-ed'
    },
    {
        name: '_lgae',
        fr: 'jambe',
        path: [[lm, w, lm, a, r, q, m, q, lm, w], [l, q, rm, a], [rm, w, rm, w]],
        fractal:'ws-sd-dz-zw-qe'
    },
    {
        name: '_fwo',
        fr: 'hors',
        path: [[lm, w, rm, a, r, q, l, q, lm, a, rm, w]],
        fractal:'xz-zq-qd-de-ew'
    },
    {
        name: '_rzo',
        fr: 'horizon',
        path: [[lm, w, l, q, r, q, rm, w], [lm, a, lm, a], [rm, a, rm, a]],
        fractal:'wq-qd-dx'
    },
    {
        name: '_hro',
        fr: 'heure',
        path: [[l, q, r, q], [lm, a, lm, w], [rm, a, rm, w]],
        fractal:'zw-ex-qd'
    },
    {
        name: '_fro',
        fr: 'hermaphrodite',
        path: [[lm, a, rm, w, lm, w, m, q, r, q, rm, w], [l, q, rm, a]],
        fractal:'zx-xw-ws-sd-dx-qe'
    },
    {
        name: '_pa',
        fr: 'haut',
        path: [[lm, a, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'ze'
    },
    {
        name: '_kio',
        fr: 'habiter',
        path: [[lm, a, lm, w, rm, w, rm, a, lm, a, l, q, r, q, rm, a]],
        fractal:'zw-wx-xe-ez-zq-qd-de'
    },
    {
        name: '_dvie',
        fr: 'habiller',
        path: [[lm, w, lm, a, rm, a, rm, w, lm, w, l, q, r, q, rm, w]],
        fractal:'wz-ze-ex-xw-wq-qd-dx'
    },
    {
        name: '_kwe',
        fr: 'grouper',
        path: [[l, q, rm, a, lm, w], [r, q, lm, a, rm, w]],
        fractal:'qe-ew-dz-zx'
    },
    {
        name: '_gro',
        fr: 'grossir',
        path: [[l, q, lm, a, lm, w, l, q, r, q, rm, w, m, q, rm, a, r, q]],
        fractal:'qz-zw-wq-qd-de-es-sx-xd'
    },
    {
        name: '_gva',
        fr: 'graviter',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q], [lm, a, lm, w]],
        fractal:'ez-zq-qw-wx-xd-ds-zw'
    },
    {
        name: '_gma',
        fr: 'gramme',
        path: [[lm, a, rm, a, rm, w, lm, w, l, q, m, q, lm, w], [r, q, r, q]],
        fractal:'ze-ex-xw-wq-qs-sw'
    },
    {
        name: '_gra',
        fr: 'graisser',
        path: [[m, q, l, q, lm, w, rm, w, r, q, rm, a, lm, a, rm, w]],
        fractal:'sq-qw-wx-xd-de-ez-zx'
    },
    {
        name: '_tsae',
        fr: 'goûter',
        path: [[lm, a, l, q, lm, w, rm, w], [rm, a, m, q, r, q]],
        fractal:'zq-qw-wx-es-sd'
    },
    {
        name: '_sla',
        fr: 'glisser',
        path: [[lm, a, lm, a], [l, q, rm, a, m, q, r, q], [lm, w, rm, w]],
        fractal:'qe-es-sd-wx'
    },
    {
        name: '_gzai',
        fr: 'gaz',
        path: [[lm, w, m, q, rm, w], [l, q, l, q], [lm, a, lm, a], [rm, a, rm, a], [r, q, r, q]],
        fractal:'ws-sx'
    },
    {
        name: '_dray',
        fr: 'gauche',
        path: [[lm, a, lm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'zw'
    },
    {
        name: '_kpae',
        fr: 'garder',
        path: [[lm, a, m, q, rm, a, lm, a, lm, w, l, q, r, q, rm, w, rm, a]],
        fractal:'zs-se-ez-zw-wq-qd-dx-xe'
    },
    {
        name: '_ftu',
        fr: 'futur',
        path: [[l, q, r, q], [lm, a, r, q, lm, w], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'qd-zd-dw'
    },
    {
        name: '_fzo',
        fr: 'fusionner',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q, r, q]],
        fractal:'dq-qz-ze-ed-dx-xw-wq'
    },
    {
        name: '_ray',
        fr: 'fuir',
        path: [[l, q, lm, w, rm, a], [lm, a, r, q], [m, q, rm, w]],
        fractal:'qw-we-xs-zd'
    },
    {
        name: '_ftae',
        fr: 'frustrer',
        path: [[lm, a, rm, a, r, q], [rm, a, lm, w], [l, q, rm, w]],
        fractal:'we-ze-ed-qx'
    },
    {
        name: '_fry',
        fr: 'fruit',
        path: [[lm, w, rm, a, lm, a, rm, w], [l, q, r, q]],
        fractal:'xz-ze-ew-qd'
    },
    {
        name: '_gry',
        fr: 'frapper',
        path: [[lm, a, r, q, l, q], [rm, a, lm, w], [m, q, rm, w]],
        fractal:'qd-dz-ew-xs'
    },
    {
        name: '_gew',
        fr: 'fort',
        path: [[l, q, lm, a, m, q], [lm, a, lm, w], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'wz-qz-zs'
    },
    {
        name: '_fai',
        fr: 'former',
        path: [[rm, a, lm, a, lm, w], [l, q, m, q], [r, q, rm, w]],
        fractal:'wz-ze-qs-xd'
    },
    {
        name: '_fkai',
        fr: 'fonctionner',
        path: [[lm, a, rm, w, rm, a, lm, a, lm, w, rm, w], [lm, w, rm, a], [l, q, r, q]],
        fractal:'ze-ex-xw-wz-zx-we-qd'
    },
    {
        name: '_blea',
        fr: 'fleurir',
        path: [[lm, a, l, q, rm, w], [rm, a, r, q, lm, w], [m, q, m, q]],
        fractal:'zq-qx-ed-dw'
    },
    {
        name: '_fni',
        fr: 'finir',
        path: [[l, q, lm, a, r, q, lm, w, l, q], [rm, a, rm, w], [m, q, m, q]],
        fractal:'dz-zq-qw-wd-ex'
    },
    {
        name: '_brea',
        fr: 'filtrer',
        path: [[l, q, r, q, lm, a, lm, w, r, q], [rm, a, rm, w]],
        fractal:'ex-qd-dz-zw-wd'
    },
    {
        name: '_fli',
        fr: 'fil',
        path: [[l, q, lm, a, lm, w, rm, a, r, q], [rm, w, rm, w]],
        fractal:'qz-zw-we-ed'
    },
    {
        name: '_lvia',
        fr: 'feuille',
        path: [[lm, a, lm, w, r, q], [l, q, rm, w], [rm, a, m, q]],
        fractal:'zw-wd-qx-es'
    },
    {
        name: '_frey',
        fr: 'feu',
        path: [[lm, w, rm, w, l, q, r, q, lm, a], [rm, a, rm, a]],
        fractal:'wx-xq-qd-dz'
    },
    {
        name: '_kloi',
        fr: 'fermer',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w], [rm, a, rm, w], [l, q, m, q]],
        fractal:'ze-ed-dx-xw-ex-qs'
    },
    {
        name: '_mna',
        fr: 'femelle',
        path: [[lm, a, m, q, r, q, rm, w, lm, w, m, q], [l, q, rm, a]],
        fractal:'zs-sd-dx-xw-ws-qe'
    },
    {
        name: '_kti',
        fr: 'félin',
        path: [[l, q, rm, a, m, q, lm, a, r, q, rm, w, lm, w, l, q]],
        fractal:'zs-se-eq-qw-wx-xd-dz'  
    },
    {
        name: '_nrea',
        fr: 'faux',
        path: [[l, q, lm, a, rm, w], [lm, w, lm, w], [rm, a, rm, a], [r, q, r, q]],
        fractal:'qz-zx'
    },
    {
        name: '_sga',
        fr: 'faucher',
        path: [[l, q, m, q, rm, a, r, q], [lm, a, m, q], [rm, a, rm, w], [lm, w, lm, w]],
        fractal:'zs-qs-se-ed-ex'
    },
    {
        name: '_fa',
        fr: 'faire',
        path: [[m, q, lm, a, rm, a, m, q, r, q, rm, w, lm, w, l, q, m, q]],
        fractal:'zs-se-ez-qd-dx-xw-wq'
    },
    {
        name: '_vea',
        fr: 'faible',
        path: [[lm, a, lm, w], [l, q, lm, w, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'zw-qw-ws'
    },
    {
        name: '_fsa',
        fr: 'face',
        path: [[l, q, rm, w, rm, a, l, q, lm, w, rm, w, r, q, rm, a, l, q], [lm, a, m, q]],
        fractal:'qe-ex-xq-qw-wx-xd-de-zs'
    },
    {
        name: '_stre',
        fr: 'extrémité',
        path: [[r, q, rm, a, rm, w, r, q], [lm, a, lm, a], [l, q, l, q], [m, q, m, q], [lm, w, lm, w]],
        fractal:'de-ex-xd'
    },
    {
        name: '_stra',
        fr: 'extraire',
        path: [[l, q, r, q, rm, a, lm, w, l, q], [lm, a, lm, w], [rm, a, rm, w]],
        fractal:'zw-xe-qd-de-ew-wq'
    },
    {
        name: '_tra',
        fr: 'extérieur',
        path: [[rm, a, lm, a, m, q, lm, w, rm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'ez-zs-sw-wx'
    },
    {
        name: '_vlye',
        fr: 'évoluer',
        path: [[l, q, l, q], [lm, a, lm, w], [rm, a, r, q, rm, w, m, q, rm, a]],
        fractal:'zw-se-ed-dx-xs'
    },
    {
        name: '_vne',
        fr: 'événement',
        path: [[r, q, rm, a, rm, w, r, q, m, q, lm, a, lm, w, m, q, l, q], [rm, a, lm, a, l, q, lm, w, rm, w]],
        fractal:'qz-ze-ed-dx-xw-wq-qd-ex-sz-zw-ws'
    },
    {
        name: '_stea',
        fr: 'étoile',
        path: [[lm, a, r, q, lm, w, lm, a], [rm, a, rm, w, l, q, rm, a], [m, q, m, q]],
        fractal:'wz-zd-dw-xe-eq-qx'
    },
    {
        name: '_meama',
        fr: 'étant',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, l, q, lm, w, r, q]],
        fractal:'qz-zx-xd-de-eq-qw-wd'
    },
    {
        name: '_te',
        fr: 'et',
        path: [[lm, a, l, q, lm, w], [l, q, m, q], [rm, a, r, q, rm, w]],
        fractal:'zq-qw-qs-ed-dx'
    },
    {
        name: '_bia',
        fr: 'équilibrer',
        path: [[lm, a, rm, a], [l, q, m, q, lm, w, rm, w, m, q, r, q]],
        fractal:'ze-qd-ws-sx-xw'
    },
    {
        name: '_kdea',
        fr: 'équidé',
        path: [[lm, a, rm, a, rm, w, lm, w, rm, a], [m, q, r, q], [l, q, l, q]],
        fractal:'ze-ex-xw-we-ds'
    },
    {
        name: '_nto',
        fr: 'entre',
        path: [[lm, a, rm, a, lm, w, rm, w], [l, q, rm, a], [lm, w, r, q]],
        fractal:'ze-ew-wx-qe-wd'
    },
    {
        name: '_srye',
        fr: 'entourer',
        path: [[m, q, m, q], [l, q, lm, a], [rm, a, r, q], [lm, w, rm, w]],
        fractal:'zq-ed-wx'
    },
    {
        name: '_sko',
        fr: 'entendre',
        path: [[l, q, l, q], [r, q, m, q, rm, a, lm, a, lm, a, lm, w, rm, w, m, q]],
        fractal:'ds-se-ez-zw-wx-xs'
    },
    {
        name: '_nki',
        fr: 'entailler',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, m, q], [r, q, r, q]],
        fractal:'wz-ze-ex-xw-qs'
    },
    {
        name: '_kdie',
        fr: 'enfant',
        path: [[lm, w, rm, a, rm, w, lm, w], [l, q, m, q], [lm, a, r, q]],
        fractal:'we-ex-xw-qs-zd'
    },
    {
        name: '_3ia',
        fr: 'énergie',
        path: [[lm, a, r, q, l, q, rm, w, lm, w, rm, a]],
        fractal:'ew-wx-xq-qd-dz'
    },
    {
        name: '_ni',
        fr: 'bas',
        path: [[lm, w, rm, w], [lm, a, lm, a], [rm, a, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'wx'
    },
    {
        name: '_nwo',
        fr: 'en',
        path: [[lm, w, l, q, m, q, lm, w, lm, a, rm, a, rm, w, lm, w], [r, q, r, q]],
        fractal:'ws-sq-qw-wz-ze-ex-xw'
    },
    {
        name: '_pkoi',
        fr: 'empaqueter',
        path: [[l, q, rm, a, rm, w], [lm, w, l, q, lm, a, rm, a, r, q, rm, w, lm, w, m, q], [lm, a, m, q, r, q]],
        fractal:'qz-ze-ed-dx-xw-wq-qe-ex-zs-sd-ws'
    },
    {
        name: '_skoi',
        fr: 'émotion',
        path: [[lm, a, rm, w, lm, w, m, q], [rm, a, l, q, lm, a, rm, a, r, q]],
        fractal:'zx-xw-ws-de-eq-qz-ze'
    },
    {
        name: '_vzu',
        fr: 'électricité',
        path: [[l, q, lm, a, lm, w, rm, a, rm, w, r, q]],
        fractal:'qz-zw-we-ex-xd'
    },
    {
        name: '_gla',
        fr: 'égaler',
        path: [[lm, a, rm, a], [l, q, r, q], [lm, w, rm, w]],
        fractal:'ze-qd-wx'
    },
    {
        name: '_fke',
        fr: 'effet',
        path: [[r, q, l, q, lm, a, rm, a, r, q, rm, w], [lm, a, m, q], [lm, w, lm, w]],
        fractal:'xd-de-ez-zq-qd-zs'
    },
    {
        name: '_to',
        fr: 'eau',
        path: [[lm, a, rm, a], [l, q, lm, w, m, q, rm, w, r, q]],
        fractal:'ze-qw-ws-sx-xd'
    },
    {
        name: '_drye',
        fr: 'durer',
        path: [[m, q, lm, a, r, q, lm, w, m, q], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'dz-zs-sw-wd'
    },
    {
        name: '_drei',
        fr: 'dur',
        path: [[l, q, lm, w, lm, a, rm, a, rm, w, r, q], [lm, a, m, q, rm, a]],
        fractal:'qw-wz-ze-ex-xd-zs-se'
    },
    {
        name: '_drya',
        fr: 'droite',
        path: [[l, q, l, q], [lm, a, lm, a], [lm, w, lm, w], [m, q, m, q], [rm, a, rm, w], [r, q, r, q]],
        fractal:'ex'
    },
    {
        name: '_dro',
        fr: 'droit',
        path: [[l, q, l, q], [lm, a, lm, w], [m, q, m, q], [rm, a, rm, w], [r, q, r, q]],
        fractal:'zw-ex'
    },
    {
        name: '_rdwa',
        fr: 'draper',
        path: [[lm, w, l, q, lm, a, r, q, rm, w, lm, w, m, q, r, q], [rm, a, rm, a]],
        fractal:'ws-sd-dx-xw-wq-qz-zd'
    },
    {
        name: '_rmi',
        fr: 'dormir',
        path: [[l, q, rm, a, r, q, rm, w, l, q], [m, q, lm, w, lm, a, m, q]],
        fractal:'qe-ed-dx-xq-sz-zw-ws'
    },
    {
        name: '_glo',
        fr: 'dont',
        path: [[rm, a, lm, a, lm, w, m, q, l, q], [r, q, r, q], [rm, w, rm, w]],
        fractal:'ez-zw-ws-sq'
    },
    {
        name: '_dku',
        fr: 'donc',
        path: [[rm, a, lm, a, lm, w, rm, w], [m, q, r, q], [l, q, l, q]],
        fractal:'ez-zw-wx-ds'
    },
    {
        name: '_dvi',
        fr: 'diviser',
        path: [[lm, w, rm, a], [l, q, l, q], [lm, a, lm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'ew'
    },
    {
        name: '_dme',
        fr: 'dimensionner',
        path: [[lm, a, lm, w, rm, w, r, q, rm, a, lm, a], [l, q, l, q], [m, q, m, q]],
        fractal:'de-ez-zw-wx-xd'
    },
    {
        name: '_dvey',
        fr: 'différer',
        path: [[l, q, l, q], [lm, a, rm, w, r, q, rm, a, lm, w]],
        fractal:'zx-xd-de-ew'
    },
    {
        name: '_dvo',
        fr: 'devoir',
        path: [[lm, w, lm, a, rm, a, rm, w], [lm, a, m, q, rm, a], [l, q, l, q], [r, q, r, q]],
        fractal:'-wz-ze-ex-zs-se'
    },
    {
        name: '_dva',
        fr: 'devant',
        path: [[l, q, r, q, rm, a, rm, w, r, q], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qd-de-ex-xd'
    },
    {
        name: '_dzye',
        fr: 'détruire',
        path: [[rm, a, rm, w], [m, q, r, q, lm, a, m, q], [l, q, lm, w]],
        fractal:'xe-dz-zs-sd-qw'
    },
    {
        name: '_nbia',
        fr: 'déséquilibrer',
        path: [[lm, a, rm, a, l, q, r, q], [m, q, rm, w, lm, w, m, q]],
        fractal:'ze-eq-qd-ws-sx-xw'
    },
    {
        name: '_dre',
        fr: 'derrière',
        path: [[r, q, l, q, lm, a, lm, w, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'dq-qz-zw-wq'
    },
    {
        name: '_fmai',
        fr: 'depuis',
        path: [[r, q, l, q], [lm, a, l, q, lm, w], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'zq-qw-dq'
    },
    {
        name: '_chna',
        fr: 'démasquer',
        path: [[lm, a, l, q, lm, w, r, q], [rm, a, r, q, rm, w, l, q], [m, q, m, q]],
        fractal:'zq-qw-wd-ed-dx-xq'
    },
    {
        name: '_dle',
        fr: 'délicieux',
        path: [[l, q, r, q, rm, a, m, q, lm, a, l, q, lm, w, rm, w, r, q]],
        fractal:'dq-qz-zs-se-ed-dx-xw-wq'
    },
    {
        name: '_d3a',
        fr: 'déjà',
        path: [[lm, a, m, q, r, q, rm, a, rm, w, r, q], [lm, w, m, q], [l, q, l, q]],
        fractal:'zs-sw-sd-de-ex-xd'
    },
    {
        name: '_klue',
        fr: 'défaut',
        path: [[lm, a, r, q, rm, w, rm, a, l, q, m, q], [lm, w, lm, w]],
        fractal:'sq-qe-ex-xd-dz'
    },
    {
        name: '_dfo',
        fr: 'défaire',
        path: [[rm, a, lm, w, lm, a, rm, a, r, q, lm, w], [l, q, rm, w]],
        fractal:'qx-wz-ze-ed-dw-we'
    },
    {
        name: '_3i',
        fr: 'découvrir',
        path: [[l, q, lm, a, lm, w, l, q], [r, q, rm, w, rm, a, r, q], [m, q, m, q]],
        fractal:'wz-zq-qw-xe-ed-dx'
    },
    {
        name: '_ktye',
        fr: 'découper',
        path: [[lm, a, lm, w], [l, q, rm, a], [m, q, r, q, rm, w, m, q]],
        fractal:'zw-qe-sd-dx-xs'
    },
    {
        name: '_dsimza',
        fr: 'décimètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, m, q, l, q]],
        fractal:'ze-ed-dx-xw-ws-sq'
    },
    {
        name: '_dsigma',
        fr: 'décigramme',
        path: [[lm, a, rm, a, rm, w, lm, w, m, q, l, q], [r, q, r, q]],
        fractal:'ze-ex-xw-ws-sq'
    },
    {
        name: '_trie',
        fr: 'déchêt',
        path: [[lm, a, rm, a, l, q], [m, q, lm, w], [r, q, rm, w]],
        fractal:'ze-eq-ws-xd'
    },
    {
        name: '_da',
        fr: 'de',
        path: [[l, q, lm, a, rm, a], [lm, a, m, q], [lm, w, lm, w], [rm, w, rm, w], [r, q, r, q]],
        fractal:'qz-ze-zs'
    },
    {
        name: '_dfie',
        fr: 'dauphin',
        path: [[rm, a, l, q, lm, a, m, q, l, q], [lm, a, rm, a, rm, w, r, q], [lm, w, lm, w]],
        fractal:'dx-xe-ez-zq-qs-sz-eq'
    },
    {
        name: '_dse',
        fr: 'danser',
        path: [[l, q, rm, a, rm, w], [lm, a, r, q], [lm, w, m, q]],
        fractal:'qe-ex-ws-zd'
    },
    {
        name: '_di',
        fr: 'dans',
        path: [[l, q, lm, a, rm, w, lm, w, rm, a, r, q, l, q]],
        fractal:'qz-zx-xw-we-ed-dq'
    },
    {
        name: '_d3e',
        fr: 'danger',
        path: [[m, q, lm, a, r, q, lm, w, lm, a], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'sz-zd-dw-wz'
    },
    {
        name: '_dwa',
        fr: 'cycle',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, m, q, lm, w]],
        fractal:'ez-zq-qw-wx-xd-ds-sw'
    },
    {
        name: '_kraw',
        fr: 'crustacé',
        path: [[lm, a, lm, w, l, q, lm, a, rm, a, r, q, rm, w, rm, a], [m, q, m, q]],
        fractal:'zw-wq-qz-ze-ed-dx-xe'
    },
    {
        name: '_grae',
        fr: 'croître',
        path: [[l, q, lm, w, rm, w], [lm, a, lm, w, r, q], [rm, a, lm, w]],
        fractal:'qw-wx-zw-wd-ew'
    },
    {
        name: '_kru',
        fr: 'croiser',
        path: [[lm, a, r, q], [rm, a, l, q], [m, q, m, q], [lm, w, lm, w], [rm, w, rm, w]],
        fractal:'qe-dz'
    },
    {
        name: '_kro',
        fr: 'croire',
        path: [[lm, a, rm, a, l, q, rm, w, lm, w], [rm, a, m, q, rm, w], [r, q, r, q]],
        fractal:'ze-es-sx-xw-eq-qx'
    },
    {
        name: '_kri',
        fr: 'crier',
        path: [[lm, a, m, q], [l, q, lm, w, r, q, rm, a, rm, w]],
        fractal:'qw-wd-de-ex-zs'
    },
    {
        name: '_kvae',
        fr: 'couvrir',
        path: [[lm, a, lm, w, rm, w, rm, a, m, q, lm, a, l, q, r, q, rm, a]],
        fractal:'zw-wx-xe-ed-dq-qz-zs-se'
    },
    {
        name: '_kry',
        fr: 'court',
        path: [[l, q, lm, w, r, q, rm, w], [lm, a, lm, a], [m, q, m, q], [rm, a, rm, a]],
        fractal:'qw-wd-dx'
    },
    {
        name: '_krye',
        fr: 'courrier',
        path: [[l, q, m, q, rm, a, l, q, lm, w, r, q, rm, a], [lm, a, lm, a], [rm, w, rm, w]],
        fractal:'qw-wd-de-es-sq-qe'
    },
    {
        name: '_klo',
        fr: 'colorer',
        path: [[r, q, l, q, rm, a, lm, a, lm, w, rm, w, l, q]],
        fractal:'dq-qe-ez-zw-wx-xq'
    },
    {
        name: '_kte',
        fr: 'côté',
        path: [[lm, w, r, q, rm, w, lm, w, l, q, rm, a, r, q], [lm, a, m, q]],
        fractal:'qw-wx-xd-de-eq-wd-zs'
    },
    {
        name: '_bdi',
        fr: 'corps',
        path: [[l, q, lm, a, lm, w, r, q, rm, a, rm, w, l, q], [m, q, m, q]],
        fractal:'wz-zq-qx-xe-ed-dw'
    },
    {
        name: '_sno',
        fr: 'contre',
        path: [[rm, a, r, q, rm, w], [l, q, m, q], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qs-ed-dx'
    },
    {
        name: '_kpoi',
        fr: 'continuer',
        path: [[r, q, rm, a, rm, w, r, q, m, q], [lm, a, r, q, lm, w], [l, q, l, q]],
        fractal:'de-ex-xd-ds-zd-dw'
    },
    {
        name: '_ksea',
        fr: 'construire',
        path: [[rm, a, rm, w], [r, q, lm, a, l, q, m, q, lm, w]],
        fractal:'ex-dz-zq-qs-sw'
    },
    {
        name: '_knoi',
        fr: 'connecter',
        path: [[lm, a, l, q, lm, w], [l, q, r, q], [rm, a, r, q, rm, w]],
        fractal:'zq-qw-ed-dx-qd'
    },
    {
        name: '_kno',
        fr: 'connaître',
        path: [[m, q, lm, w, l, q, lm, a, rm, a, r, q, lm, w, rm, w]],
        fractal:'xw-wq-qz-ze-ed-dw-ws'
    },
    {
        name: '_kfay',
        fr: 'confondre',
        path: [[rm, a, r, q, rm, w], [l, q, r, q], [m, q, lm, a, l, q, lm, w, lm, a]],
        fractal:'zw-wq-qz-zs-qd-ed-dx'
    },
    {
        name: '_troi',
        fr: 'conflit',
        path: [[l, q, lm, w, rm, a], [r, q, rm, w, lm, a]],
        fractal:'qw-we-dx-xz'
    },
    {
        name: '_hi',
        fr: 'condition',
        path: [[rm, a, l, q, rm, w], [lm, a, r, q, lm, w], [m, q, m, q]],
        fractal:'eq-qx-zd-dw'
    },
    {
        name: '_kteu',
        fr: 'compter',
        path: [[m, q, lm, a, lm, w, m, q, r, q], [l, q, rm, a, rm, w, l, q]],
        fractal:'xe-eq-qx-wz-zs-sw-ds'
    },
    {
        name: '_plea',
        fr: 'complexe',
        path: [[l, q, l, q], [lm, a, m, q, lm, w], [m, q, rm, a, rm, w, r, q, m, q]],
        fractal:'zs-sw-se-ex-xd-ds'
    },
    {
        name: '_haw',
        fr: 'comment',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, rm, w, r, q], [m, q, m, q]],
        fractal:'ze-eq-qx-wx-xd'
    },
    {
        name: '_fta',
        fr: 'commencer',
        path: [[m, q, l, q, lm, a, r, q, lm, w, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'sq-qz-zd-dw-wq'
    },
    {
        name: '_ki',
        fr: 'clé',
        path: [[lm, a, lm, w, m, q], [l, q, r, q, rm, w], [rm, a, rm, a]],
        fractal:'zw-ws-qd-dx'
    },
    {
        name: '_rkai',
        fr: 'classer',
        path: [[lm, a, rm, a], [l, q, l, q], [lm, w, rm, w, m, q, r, q]],
        fractal:'ze-ds-sx-xw'
    },
    {
        name: '_srie',
        fr: 'circuit',
        path: [[l, q, lm, a, lm, w, rm, a, rm, w, r, q, l, q]],
        fractal:'qz-zw-we-ex-xd-dq'
    },
    {
        name: '_kwo',
        fr: 'couper',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, r, q]],
        fractal:'wz-ze-ex-xw-qd'
    },
    {
        name: '_skai',
        fr: 'ciel',
        path: [[lm, w, rm, a, lm, a, rm, w], [l, q, l, q], [r, q, r, q]],
        fractal:'xz-ze-ew'
    },
    {
        name: '_swa',
        fr: 'choisir',
        path: [[lm, a, lm, w, rm, w, rm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'zw-wx-xe'
    },
    {
        name: '_sdae',
        fr: 'chaque',
        path: [[l, q, lm, a, m, q, l, q], [rm, w, r, q], [lm, w, lm, w], [rm, a, rm, a]],
        fractal:'qs-sz-zq-xd'
    },
    {
        name: '_sni',
        fr: 'chanter',
        path: [[lm, a, l, q, lm, w, rm, w, r, q], [l, q, rm, w, m, q, l, q], [rm, a, rm, a]],
        fractal:'zq-qw-wx-xd-qs-sx-xq'
    },
    {
        name: '_fgy',
        fr: 'champignon',
        path: [[l, q, rm, w, rm, a, r, q, m, q, rm, a], [lm, a, lm, a], [lm, w, lm, w]],
        fractal:'qx-xe-ed-ds-se'
    },
    {
        name: '_fle',
        fr: 'chair',
        path: [[l, q, rm, a, m, q, rm, w, l, q, lm, a, rm, a, rm, w, lm, w, l, q], [r, q, r, q]],
        fractal:'ez-zq-qw-wx-xe-eq-qx-xs-se'
    },
    {
        name: '_bzea',
        fr: 'cervidé',
        path: [[lm, a, rm, w, lm, w, r, q], [l, q, m, q, rm, a]],
        fractal:'zx-xw-wd-qs-se'
    },
    {
        name: '_srea',
        fr: 'céréale',
        path: [[rm, w, l, q, lm, w, rm, w, r, q, rm, a, rm, w], [lm, a, m, q]],
        fractal:'xq-qw-wx-xd-de-ex-zs'
    },
    {
        name: '_tru',
        fr: 'cercler',
        path: [[m, q, l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q]],
        fractal:'sq-qz-ze-ed-dx-xw-wq'
    },
    {
        name: '_sye',
        fr: 'centrer',
        path: [[lm, a, rm, w], [lm, w, rm, a], [l, q, r, q]],
        fractal:'zx-we-qd'
    },
    {
        name: '_stimza',
        fr: 'centimètre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, m, q], [l, q, l, q]],
        fractal:'ze-ed-dx-xw-ws'
    },
    {
        name: '_stigma',
        fr: 'centigramme',
        path: [[lm, a, rm, a, rm, w, lm, w, m, q], [l, q, l, q], [r, q, r, q]],
        fractal:'ze-ex-xw-ws'
    },
    {
        name: '_sley',
        fr: 'cellule',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w], [m, q, m, q], [r, q, r, q]],
        fractal:'ez-zq-qw-wx'
    },
    {
        name: '_de',
        fr: 'ce',
        path: [[lm, a, rm, a], [lm, w, rm, w], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-wx'
    },
    {
        name: '_kzo',
        fr: 'causer',
        path: [[rm, a, lm, a, l, q, lm, w], [l, q, r, q], [lm, a, m, q], [rm, w, rm, w]],
        fractal:'wq-qz-ze-dq-zs'
    },
    {
        name: '_gzo',
        fr: 'car',
        path: [[lm, a, r, q, lm, w, rm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a]],
        fractal:'xw-wd-dz'
    },
    {
        name: '_knew',
        fr: 'canonner',
        path: [[lm, a, l, q, rm, w, r, q], [lm, w, m, q], [rm, a, rm, a]],
        fractal:'zq-qx-xd-ws'
    },
    {
        name: '_klio',
        fr: 'canin',
        path: [[rm, a, lm, a, lm, w, m, q, r, q], [l, q, rm, w]],
        fractal:'ez-zw-ws-sd-qx'
    },
    {
        name: '_rko',
        fr: 'caillou',
        path: [[lm, a, rm, w, lm, w, lm, a, r, q, rm, w], [l, q, l, q], [rm, a, rm, a]],
        fractal:'xz-zw-wx-xd-dz'
    },
    {
        name: '_glio',
        fr: 'but',
        path: [[m, q, l, q, lm, a, rm, a, rm, w], [lm, w, rm, w, r, q]],
        fractal:'sq-qz-ze-ex-wx-xd'
    },
    {
        name: '_bze',
        fr: 'business',
        path: [[rm, a, lm, a, l, q, r, q, rm, w, lm, w], [lm, a, rm, w]],
        fractal:'ez-zq-qd-dx-xw-zx'
    },
    {
        name: '_bra',
        fr: 'bras',
        path: [[lm, w, lm, a, m, q, r, q, lm, w], [l, q, rm, w], [rm, a, rm, a]],
        fractal:'zs-sd-dw-wz-qx'
    },
    {
        name: '_dvea',
        fr: 'brancher',
        path: [[lm, a, rm, w], [l, q, m, q], [lm, w, rm, w, rm, a], [r, q, r, q]],
        fractal:'ex-xw-zx-qs'
    },
    {
        name: '_bo',
        fr: 'bovidé',
        path: [[lm, a, rm, w], [m, q, rm, a], [lm, w, r, q], [l, q, l, q]],
        fractal:'zx-es-wd'
    },
    {
        name: '_bu',
        fr: 'boucler',
        path: [[l, q, m, q, rm, a, lm, a, lm, w, rm, w, r, q]],
        fractal:'qs-se-ez-zw-wx-xd'
    },
    {
        name: '_blu',
        fr: 'bleu',
        path: [[lm, w, rm, w, r, q], [l, q, l, q], [lm, a, lm, a], [m, q, m, q], [rm, a, rm, a]],
        fractal:'wx-xd'
    },
    {
        name: '_keo',
        fr: 'bien',
        path: [[l, q, lm, w, rm, a], [rm, w, r, q], [lm, a, lm, a]],
        fractal:'qw-we-xd'
    },
    {
        name: '_bly',
        fr: 'baleine',
        path: [[l, q, m, q, lm, a, l, q, lm, w, r, q, rm, w, rm, a, lm, a], [m, q, lm, w]],
        fractal:'sz-zq-qw-ws-sq-ze-ex-xd-dw'
    },
    {
        name: '_zaw',
        fr: 'aussi',
        path: [[lm, a, lm, w, l, q, lm, a, rm, w, r, q, rm, a, lm, w], [rm, a, rm, w]],
        fractal:'qz-zx-xd-de-ew-wq-zw-ex'
    },
    {
        name: '_vi',
        fr: 'avec',
        path: [[lm, w, lm, a, rm, w, rm, a, lm, w], [l, q, r, q]],
        fractal:'wz-zx-xe-ew-qd'
    },
    {
        name: '_ntea',
        fr: 'avant',
        path: [[m, q, l, q, lm, a, lm, w, l, q], [rm, a, rm, a], [rm, w, rm, w], [r, q, r, q]],
        fractal:'sq-qz-zw-wq'
    },
    {
        name: '_rpa',
        fr: 'attraper',
        path: [[l, q, r, q, rm, a, m, q], [lm, a, lm, w], [rm, w, rm, w]],
        fractal:'qd-de-es-zw'
    },
    {
        name: '_spea',
        fr: 'attendre',
        path: [[l, q, lm, a, lm, w], [m, q, rm, a, rm, w], [r, q, r, q]],
        fractal:'qz-zw-se-ex'
    },
    {
        name: '_tmei',
        fr: 'atome',
        path: [[lm, w, rm, a, rm, w], [l, q, r, q], [lm, a, lm, a]],
        fractal:'we-ex-qd'
    },
    {
        name: '_ktea',
        fr: 'arrêter',
        path: [[l, q, r, q], [lm, a, lm, w], [rm, a, r, q, rm, w]],
        fractal:'ed-dx-qd-zw'
    },
    {
        name: '_rkye',
        fr: 'arachnide',
        path: [[l, q, lm, a, rm, a, r, q, rm, w], [m, q, rm, a], [lm, a, lm, w]],
        fractal:'qz-ze-ed-dx-es-zw'
    },
    {
        name: '_ftea',
        fr: 'après',
        path: [[r, q, rm, a, rm, w, r, q, m, q], [lm, a, lm, a], [l, q, l, q], [lm, w, lm, w]],
        fractal:'sd-de-ex-xd'
    },
    {
        name: '_znie',
        fr: 'appuyer',
        path: [[lm, a, lm, w, rm, w, m, q, l, q, rm, a, r, q]],
        fractal:'de-eq-qs-sx-xw-wz'
    },
    {
        name: '_zai',
        fr: 'apparaître',
        path: [[lm, w, m, q, rm, w, lm, w, l, q, lm, a, rm, a, r, q, rm, w]],
        fractal:'ws-sx-xw-wq-qz-ze-ed-dx'
    },
    {
        name: '_piz',
        fr: 'apaiser',
        path: [[l, q, lm, a, lm, w, m, q, r, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'qz-zw-ws-sd'
    },
    {
        name: '_kpaw',
        fr: 'antenne',
        path: [[lm, a, l, q, rm, w, m, q, lm, w, r, q, rm, a]],
        fractal:'zq-qx-xs-sw-wd-de'
    },
    {
        name: '_pkia',
        fr: 'animal',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, m, q, rm, a, l, q], [r, q, r, q]],
        fractal:'qe-ez-zq-qw-wx-xs-se'
    },
    {
        name: '_glei',
        fr: 'angle',
        path: [[lm, a, rm, a, rm, w], [l, q, l, q], [lm, w, lm, w], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-ex'
    },
    {
        name: '_mrya',
        fr: 'amplifier',
        path: [[l, q, rm, w, rm, a, r, q, lm, w, l, q, rm, a], [lm, a, m, q]],
        fractal:'qw-wd-de-eq-qx-xe-zs'
    },
    {
        name: '_mre',
        fr: 'amer',
        path: [[l, q, lm, a, m, q, rm, a, r, q, l, q], [lm, w, rm, w]],
        fractal:'qd-de-es-sz-zq-wx'
    },
    {
        name: '_prba',
        fr: 'âme',
        path: [[lm, a, r, q, lm, w, lm, a, m, q, r, q], [lm, w, m, q], [l, q, l, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'wz-zd-dw-ws-sd-zs'
    },
    {
        name: '_tae',
        fr: 'alterner',
        path: [[lm, a, rm, a, l, q], [m, q, m, q], [rm, w, lm, w, r, q]],
        fractal:'ze-eq-xw-wd'
    },
    {
        name: '_slio',
        fr: 'alors',
        path: [[lm, a, m, q, r, q], [rm, a, r, q, rm, w], [l, q, l, q], [lm, w, lm, w]],
        fractal:'zs-sd-ed-dx'
    },
    {
        name: '_le',
        fr: 'aller',
        path: [[r, q, rm, a, rm, w, r, q, m, q, lm, a, lm, w, m, q, l, q]],
        fractal:'qd-de-ex-xd-sz-zw-ws'
    },
    {
        name: '_hio',
        fr: 'alléger',
        path: [[lm, a, rm, a], [l, q, l, q], [r, q, r, q], [lm, w, m, q, rm, w]],
        fractal:'ws-sx-ze'
    },
    {
        name: '_lea',
        fr: 'aléa',
        path: [[l, q, r, q, lm, w], [lm, a, lm, a], [rm, a, rm, w]],
        fractal:'ex-qd-dw'
    },
    {
        name: '_fsu',
        fr: 'ajuster',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, lm, w, l, q, r, q]],
        fractal:'qz-zx-xd-de-ew-wq-qd'
    },
    {
        name: '_hae',
        fr: 'air',
        path: [[lm, a, rm, a, r, q], [l, q, m, q, rm, w], [lm, w, rm, a]],
        fractal:'ze-ed-qs-sx-we'
    },
    {
        name: '_kli',
        fr: 'qualité',
        path: [[rm, w, l, q, lm, a, lm, w, r, q, m, q], [rm, a, rm, a]],
        fractal:'xq-qz-zw-wd-ds'
    },
    {
        name: '_nmae',
        fr: 'nombre',
        path: [[lm, w, lm, a, rm, w, rm, a], [l, q, l, q], [r, q, r, q]],
        fractal:'wz-zx-xe'
    },
    {
        name: '_zno',
        fr: '11',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q, r, q], [m, q, lm, w, lm, a, r, q]],
        fractal:'qz-ze-ed-dx-xw-wq-wz-zd-zs-sd-ws'
    },
    {
        name: '_dza',
        fr: '10',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q, r, q], [m, q, lm, w, lm, a]],
        fractal:'qz-ze-ed-dx-xw-wq-wz-zs-sd-ws'
    },
    {
        name: '_nwa',
        fr: '9',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a, m, q, r, q], [lm, w, m, q]],
        fractal:'ze-ed-dx-xw-wq-qz-zs-sd-ws'
    },
    {
        name: '_sme',
        fr: 'identique',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, lm, w, l, q]],
        fractal:'qz-zx-xd-de-ew-wq'
    },
    {
        name: '_tsio',
        fr: '8',
        path: [[l, q, lm, a, rm, w, r, q, rm, a, lm, w, l, q]],
        fractal:'qz-zx-xd-de-ew-wq'
    },
    {
        name: '_stei',
        fr: '7',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q, r, q]],
        fractal:'dq-qz-ze-ed-dx-xw-wq'
    },
    {
        name: '_ksi',
        fr: '6',
        path: [[l, q, lm, a, rm, a, r, q, rm, w, lm, w, l, q], [m, q, m, q]],
        fractal:'qz-ze-ed-dx-xw-wq'
    },
    {
        name: '_foi',
        fr: '5',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, r, q]],
        fractal:'ze-ex-xw-wz-qd'
    },
    {
        name: '_ktu',
        fr: '4',
        path: [[lm, a, rm, a, rm, w, lm, w, lm, a], [l, q, l, q], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-ex-xw-wz'
    },
    {
        name: '_srei',
        fr: '3',
        path: [[lm, w, lm, a, r, q, lm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'wz-zd-dw'
    },
    {
        name: '_du',
        fr: '2',
        path: [[lm, w, lm, a, r, q], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [rm, w, rm, w]],
        fractal:'wz-zd'
    },
    {
        name: '_kfa',
        fr: '1',
        path: [[lm, a, lm, w], [l, q, l, q], [m, q, m, q], [rm, a, rm, a], [r, q, r, q], [rm, w, rm, w]],
        fractal:'wz'
    },
    {
        name: '_sro',
        fr: '0',
        path: [[lm, a, rm, w], [lm, w, rm, a], [l, q, r, q]],
        fractal:'zx-we-qd'
    },
    {
        name: '_,',
        fr: ',',
        path: [[rm, a, m, q, rm, w], [lm, a, lm, a], [l, q, l, q], [lm, w, lm, w], [r, q, r, q]],
        fractal:'es-sx'
    },
    {
        name: '_!',
        fr: '!',
        path: [[lm, a, m, q], [l, q, lm, w], [rm, a, r, q], [rm, w, rm, w]],
        fractal:'qw-zs-ed'
    },
    {
        name: '_?',
        fr: '?',
        path: [[lm, a, rm, a, l, q, rm, w], [lm, w, lm, w], [m, q, m, q], [r, q, r, q]],
        fractal:'ze-eq-qx'
    },
    {
        name: '_.',
        fr: '.',
        path: [[m, q, m, q], [m, q, m, q]],
        fractal:'ss'
    },
    {
        name: '_mea',
        fr: 'déterminer',
        path: [[lm, a, rm, w], [l, q, rm, a], [lm, w, r, q]],
        fractal:'zx-qe-wd'
    },
    {
        name: '_ma',
        fr: 'être',
        path: [[lm, a, l, q, lm, w], [m, q, m, q], [rm, a, r, q, rm, w]],
        fractal:'zq-qw-ed-dx'
    },
    {
        name: '_kde',
        fr: 'adolescent',
        path: [[rm, a, lm, w], [m, q, rm, w], [l, q, r, q], [lm, a, lm, a]],
        fractal:'qd-we-xs'
    },
    {
        name: '_dly',
        fr: 'adulte',
        path: [[r, q, lm, a, rm, a, lm, w, lm, a], [m, q, rm, w], [l, q, l, q]],
        fractal:'we-ez-zw-xs-dz'
    },
    {
        name: '_pfae',
        fr: 'agir',
        path: [[l, q, lm, w, lm, a, r, q, lm, w], [rm, a, lm, a], [rm, w, r, q], [m, q, m, q]],
        fractal:'qw-wz-zd-dw-ez-xd'
    },
    {
        name: '_dna',
        fr: 'adn',
        path: [[rm, a, lm, a, l, q, lm, w, rm, w, r, q, l, q], [lm, w, rm, a, rm, w]],
        fractal:'we-ex-qd-dx-xw-wq-qz-ze'
    },
    {
        name: '_sde',
        fr: 'acide',
        path: [[lm, a, m, q, l, q, lm, w, rm, w, r, q, m, q, rm, a], [l, q, rm, w], [r, q, lm, w]],
        fractal:'zs-se-qd-dx-xw-wq-qx-wd'
    },
    {
        name: '_bai',
        fr: 'acheter',
        path: [[lm, a, m, q, rm, a, lm, a, l, q, r, q, rm, a], [lm, w, rm, w]],
        fractal:'qd-de-ez-zq-zs-se-wx'
    },
    {
        name: '_kmia',
        fr: 'accumuler',
        path: [[lm, a, r, q, m, q, lm, a], [l, q, rm, w], [lm, w, lm, w], [rm, a, rm, a]],
        fractal:'zs-sd-dz-qx'
    },
    {
        name: '_grey',
        fr: 'accrocher',
        path: [[lm, a, rm, a, r, q, l, q], [rm, a, rm, w], [lm, w, lm, w]],
        fractal:'ze-ed-dq-ex'
    },
    {
        name: '_ksu',
        fr: 'accélérer',
        path: [[l, q, r, q], [lm, a, m, q, lm, w], [rm, a, r, q, rm, w]],
        fractal:'zs-sw-ed-dx-qd'
    },
    {
        name: '_boi',
        fr: 'à',
        path: [[lm, a, lm, w, l, q, m, q], [rm, a, r, q, rm, w]],
        fractal:'zw-wq-qs-ed-dx'
    },
    {
        name: '_fya',
        fr: 'donner',
        path: [[lm, a, rm, a, m, q, lm, a], [l, q, lm, w, rm, w, r, q]],
        fractal:'zs-se-ez-qw-wx-xd'
    },
    {
        name: '_fy',
        fr: 'refléter',
        path: [[lm, a, rm, a, lm, w, rm, w, lm, a], [l, q, r, q]],
        fractal:'ze-ew-wx-xz-qd'
    },
    {
        name: '_go',
        fr: 'avoir',
        path: [[lm, w, m, q, rm, w, lm, w], [l, q, lm, a, rm, a, r, q]],
        fractal:'ws-sx-xw-qz-ze-ed'
    },
    {
        name: '_ka',
        fr: 'humain',
        path: [[lm, a, rm, w],[lm, w, m, q],[l, q, rm, a], [r, q, r, q]],
        fractal:'zx-ws-qe'
    },
    {
        name: '_kme',
        fr: 'pour',
        path: [[lm, a, lm, w], [l, q, m, q], [rm, a, r, q, rm, w]],
        fractal:'zw-qs-ed-dx'
    },
    {
        name: '_sa',
        fr: 'vivre',
        path: [[lm, a, rm, a, r, q, rm, w, lm, w, l, q, lm, a], [lm, a, rm, w], [rm, a, lm, w], [l, q, r, q]],
        fractal:'qz-ze-ed-dx-xw-wq-qd-zx-we'
    },
    {
        name: '_smia',
        fr: 'isme',
        path: [[rm, w, l, q, r, q, lm, w, m, q, rm, w, lm, w], [lm, a, lm, a], [rm, a, rm, a]],
        fractal:'qd-dw-wx-xs-sw-wd-qx'
    }
];

export { a, q, w, l, lm, m, r, rm, graphieros_dictionnary };