export function linearToFractal(mol, dic){
    //mea sa kme ---> [_mea,_sa,_kme] ---> return 'zx-qe-wd ze-ed-dx-xw-wq-qz-zx-we-qd zw-qs-edx'

    let linearCode = [];
    let convertedCode = [];
    let fractalCode = [];

    linearCode = mol.split(' ');
    linearCode.forEach(code => {
        convertedCode.push(`_${code}`)
    });
    
    convertedCode.forEach(code => {
        dic.forEach(word => {
            if(word.name === code) {
                fractalCode.push(word.fractal)
            }
        });
    });

    return fractalCode.toString().replaceAll(',', ' ');

}

